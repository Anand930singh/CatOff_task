import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { Users } from 'src/db/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { EditUserDto } from './dto/editUser.dto';


// All users related CRUD operation buissness logic is written here
@Injectable()
export class UsersService {
    private userManager : EntityManager
    constructor(
        @Inject('DataSource')
        private dataSource: DataSource
    ){
        this.userManager=this.dataSource.manager;
    }

    //this function is used to register new user
    async createUser(body:CreateUserDto){
        try{
            //In this line we check if any user exist with same email or not
            const user = await this.userManager.findOneBy(Users,{email:body.email})
              if(user){
                return {message: 'Email already used!', status: 409}
              }
            
            //hashing password
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(body.password, saltOrRounds);
            body.password=hash;
            const createUser = await this.userManager.create(Users,body);

            await this.userManager.save(createUser)

            return {message: 'User Created Successfully', createUser, status:200}
            
        }catch(e){
            return {
                statusCode: 404,
                message: 'Error',
            };
            
        }
    }

    //this function is used for sign in existing user
    async loginUser(body: LoginUserDto){
        try{
            //In this line we check if any user exist with same userName or not
            const user = await this.userManager.findOneBy(Users,{userName:body.userName})
              if(!user){
                return {message: 'User not found!', status: 409}
              }
            
            // Check if the provided password matches the stored hashed password
            const isPasswordValid = await bcrypt.compare(body.password, user.password);
            if (!isPasswordValid) {
                 return {message:'Wrong password', status:401}
            }

            return {message:'Logged In successfully', status:200}


            }catch(e){
                return {
                    statusCode: 404,
                    message: 'Error',
                };
            }
    }

    //this function is used to edit data of existing user
    async editUser(body:EditUserDto){
        try{
            //In this line we check if any user exist with same userName or not
            const user = await this.userManager.findOneBy(Users,{userName:body.userName})
              if(!user){
                return {message: 'User not found!', status: 409}
              }
            
            // Check if the provided password matches the stored hashed password
            const isPasswordValid = await bcrypt.compare(body.password, user.password);
            if (!isPasswordValid) {
                 return {message:'Wrong password', status:401}
            }

            user.email = body.newEmail;
            console.log(body.newEmail)
            await this.userManager.save(user);
            
            const userUpdated = await this.userManager.findOneBy(Users,{userName:body.userName})
            return {message: 'User Updated Successfully', userUpdated, status:200}



            }catch(e){
                return {
                    statusCode: 404,
                    message: 'Error',
                };
            }
    }

    //this function is used to delete an existing user
    async deleteUser(body:DeleteUserDto){
        try{
            //In this line we check if any user exist with same userName or not
            const user = await this.userManager.findOneBy(Users,{userName:body.userName})
              if(!user){
                return {message: 'User not found!', status: 409}
              }
            
            // Check if the provided password matches the stored hashed password
            const isPasswordValid = await bcrypt.compare(body.password, user.password);
             if (!isPasswordValid) {
                 return {message:'Wrong password', status:401}
             }

            // Delete the user if the password is correct
            await this.userManager.remove(user);
            return {message:'User removed successfully',status:200}

        }catch(e){
            return {
                statusCode: 404,
                message: 'Error',
            };
        }
    }
}

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class DeleteUserDto {
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}

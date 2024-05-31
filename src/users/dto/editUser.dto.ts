import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class EditUserDto {
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsEmail()
    newEmail: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}

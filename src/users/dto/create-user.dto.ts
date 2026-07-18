import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  lastName!: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 150)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20) // Contraseña segura entre 6 y 20 caracteres
  password!: string;

  @IsString()
  @IsOptional()
  @Length(1, 20)
  phone?: string;

  @IsString()
  @IsOptional()
  @Length(1, 100)
  company?: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
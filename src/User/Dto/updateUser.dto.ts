import { IsEmail, IsNumber } from 'class-validator';
import { CreateUserDto } from './user.dto';

export class UpdateUser extends CreateUserDto {
  @IsEmail()
  email: string;

  @IsNumber()
  phone: string;
}

import { IsNotEmpty, MinLength, IsNumber, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @MinLength(3)
  userName: string;

  @IsNumber()
  age: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  update: Date;
}

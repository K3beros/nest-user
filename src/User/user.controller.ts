import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { UserModel } from './user.model';
import { CreateUserDto } from './Dto/user.dto';
import { UpdateUser } from './Dto/updateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(@Body() createUser: CreateUserDto): Promise<number> {
    return this.userService.insertUser(createUser);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<string> {
    console.log(id);
    return this.userService.findUser(id);
  }

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Patch(':id')
  async updateInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: UpdateUser,
  ) {
    const updatedUser = await this.userService.updateUser(id, updateUser);
    console.log(updatedUser);
    return 'User has ben updated succesfully';
  }
}

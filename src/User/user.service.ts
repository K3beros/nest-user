import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './Dto/user.dto';
import { UpdateUser } from './Dto/updateUser.dto';

@Injectable()
export class UserService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async insertUser(createDto: CreateUserDto): Promise<number> {
    const newUser = await this.userRepository.save(createDto);
    return newUser.id;
  }

  async findUser(id: number): Promise<string> {
    const user = await this.userRepository.findOne({
      // select: ['firstName'],
      where: {
        id: id,
      },
    });
    if (!user) {
      return 'No user found';
    }
    console.log(user);
    // console.log(user.firstName);
    return user.firstName;
  }

  async updateUser(id: number, updateUser: UpdateUser) {
    const user = await this.userRepository.find({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error('No User was found');
    }
    //find a way to update just a field
    Object.assign(user, updateUser);
    console.log(user);
    return this.userRepository.save(user);
  }

  // getUser(id: string): string {
  //   return `Here is the ${id}`;
  // }
}

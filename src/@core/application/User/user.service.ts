import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/@core/domain/User/user.entity';
import { Encrypter } from 'src/@core/infra/encrypt/encrypter';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private encrypt: Encrypter
  ) { }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOneByOrFail({ email });
  }

  async create(payload: CreateUserDto): Promise<User> {

    payload.password = await this.encrypt.hash(payload.password);
    const user = await this.usersRepository.create(payload);
    
    return await this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '@domain/User/user.entity'
import { Encrypter } from '@infra/encrypt/encrypter'
import { Repository } from 'typeorm'
import { BaseService } from '@application/base/base.service'
import { CreateUserDto } from '@domain/User/dto/create-user.dto'
import { UpdateUserDto } from '@domain/User/dto/update-user.dto'

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    protected repository: Repository<User>,
    private encrypt: Encrypter,
  ) {
    super(repository)
  }

  async getByEmail(email: string): Promise<User> {
    return await this.repository.findOneByOrFail({ email })
  }

  async create(payload: CreateUserDto): Promise<User> {
    payload.password = await this.encrypt.hash(payload.password)
    const user = await this.repository.create(payload)

    return await this.repository.save(user)
  }

  async update(id: number, payload: UpdateUserDto): Promise<User> {
    if (payload.password) {
      payload.password = await this.encrypt.hash(payload.password)
    }

    await this.repository.update(id, payload)

    return await this.findOne(id)
  }
}

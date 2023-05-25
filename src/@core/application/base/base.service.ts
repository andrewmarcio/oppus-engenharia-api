import { BaseServiceInterface } from '@domain/base/baseService.interface'
import { BaseEntity, Repository } from 'typeorm'

export class BaseService<Entity extends BaseEntity> implements BaseServiceInterface<Entity> {
  constructor(protected readonly repository: Repository<Entity>) {}

  async findAll(): Promise<Entity[]> {
    return await this.repository.find()
  }

  async findOne(id: number): Promise<Entity> {
    return await this.repository.findOneById(id)
  }

  async create(payload: Entity): Promise<Entity> {
    const entity = await this.repository.create(payload)
    return await this.repository.save(entity)
  }

  async update(id: number, payload: any): Promise<Entity> {
    await this.repository.update(id, payload)
    return await this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}

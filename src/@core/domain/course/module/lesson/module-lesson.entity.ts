import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { CourseModule } from '../course-module.entity'

@Entity('module_lessons')
export class ModuleLesson extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column('bigint', { name: 'module_id' })
    module_id: number

    @Column('varchar')
    name: string

    @Column('varchar')
    youtube_video_id: string

    @OneToOne(type => CourseModule, module => module.lessons)
    @JoinColumn({ name: 'module_id' })
    module: CourseModule

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date
}

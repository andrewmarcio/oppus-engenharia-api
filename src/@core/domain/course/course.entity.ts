import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { CourseModule } from './module/course-module.entity'
import { CourseStudent } from './student/course-student.entity'

@Entity('courses')
export class Course extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column('varchar')
    name: string

    @OneToMany(type => CourseModule, modules => modules.course)
    @JoinColumn({ name: 'course_id' })
    modules: CourseModule[]

    @OneToMany(() => CourseStudent, courseStudent => courseStudent.course, { cascade: true })
    courseStudents!: CourseStudent[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date
}

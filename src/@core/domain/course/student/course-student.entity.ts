import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Student } from '../../student/student.entity'
import { Course } from '../course.entity'

@Entity('course_students')
export class CourseStudent extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column('bigint')
    course_id: number

    @Column('bigint')
    student_id: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date

    @ManyToOne(() => Course, course => course.courseStudents)
    @JoinColumn({ name: 'course_id' })
    course!: Course

    @ManyToOne(() => Student, student => student.courseStudents)
    @JoinColumn({ name: 'student_id' })
    student!: Student
}

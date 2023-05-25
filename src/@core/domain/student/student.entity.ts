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
import { CompanyStudent } from '../company/student/company-student.entity'
import { CourseStudent } from '../course/student/course-student.entity'

@Entity('students')
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column('varchar')
    name: string

    @Column('varchar')
    cpf: string

    @Column('varchar')
    rg: string

    @Column('date')
    born_date: Date

    @Column('varchar')
    password: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date

    @OneToMany(() => CompanyStudent, CompanyStudent => CompanyStudent.student, { cascade: true })
    @JoinColumn({ name: 'student_id' })
    companyStudents: CompanyStudent[]

    @OneToMany(() => CourseStudent, courseStudent => courseStudent.student, { cascade: true })
    courseStudents!: CourseStudent[]
}

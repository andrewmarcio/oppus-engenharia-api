import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Student } from "../../student/student.entity";
import { Company } from "../company.entity";

@Entity('company_students')
export class CompanyStudent extends BaseEntity {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column("bigint", { name: 'company_id'})
    company_id: number

    @Column("bigint", { name: 'student_id'})
    student_id: number

    @Column("date")
    admission_date: Date

    @Column("varchar")
    role: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;

    @ManyToOne(() => Company, (company) => company.companyStudents)
    @JoinColumn({ name: 'company_id'})
    company!: Company

    @ManyToOne(() => Student, (student) => student.companyStudents)
    @JoinColumn({ name: 'student_id'})
    student!: Student
}
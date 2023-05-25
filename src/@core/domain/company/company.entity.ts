import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { CompanyStudent } from "./student/company-student.entity";

@Entity("companies")
export class Company extends BaseEntity
{

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column("varchar")
    name: string

    @Column("varchar", { length: 14 })
    cnpj: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;

    @OneToMany(() => CompanyStudent, (companyStudent) => companyStudent.company, { cascade: true })
    @JoinColumn({ name: 'company_id' })
    companyStudents: CompanyStudent[]

}
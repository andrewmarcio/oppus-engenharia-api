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
import { CourseModule } from "./module/course-module.entity";

@Entity("courses")
export class Course extends BaseEntity
{
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column("varchar")
    name: string

    @OneToMany(type => CourseModule, (modules) => modules.course)
    @JoinColumn({ name: 'course_id' })
    modules: CourseModule[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;

}
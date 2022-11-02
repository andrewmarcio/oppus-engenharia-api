import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { Course } from "../course.entity";
import { ModuleLesson } from "./lesson/module-lesson.entity";

@Entity("course_modules")
export class CourseModule extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column({ type: "bigint", name: "course_id" })
    course_id: number

    @Column("varchar")
    name: string

    @Column({ default: () => true, })
    active: boolean

    @ManyToOne(type => Course, (course) => course.modules)
    @JoinColumn({ name: "course_id" })
    course: Course

    @OneToMany(type => ModuleLesson, (lesson) => lesson.module)
    @JoinColumn({ name: "module_id" })
    lessons: ModuleLesson[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;
}
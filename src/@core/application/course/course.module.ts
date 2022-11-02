import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "src/@core/domain/course/course.entity";
import { CourseController } from "src/@core/infra/http/controllers/course/course.controller";
import { CourseService } from "./course.service";
import { CourseModuleModule } from "./module/course-module.module";

@Module({
    controllers: [CourseController],
    imports: [
        TypeOrmModule.forFeature([Course]),
        CourseModuleModule 
    ],
    exports: [CourseService],
    providers: [CourseService],
})
export class CourseModule {}
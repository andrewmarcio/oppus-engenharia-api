import { IsArray, IsNotEmpty } from "class-validator";
import { CourseModule } from "src/@core/domain/course/module/course-module.entity";

export class CreateCourseModuleDto {

    @IsNotEmpty()
    course_id: number;

    @IsNotEmpty()
    @IsArray()
    modules: CourseModule[];
}
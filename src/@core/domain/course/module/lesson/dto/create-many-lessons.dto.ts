import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { ModuleLesson } from "../module-lesson.entity";

export class CreateManyLessons {

    @IsNotEmpty()
    @Type(() => Number)
    module_id: number;

    @IsNotEmpty()
    @Type(() => Array<ModuleLesson>)
    lessons: ModuleLesson[]
}
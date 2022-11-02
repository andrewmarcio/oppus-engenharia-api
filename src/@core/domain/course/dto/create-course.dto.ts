import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class CreateCourseDto {
    @IsNotEmpty()
    @Type(() => String)
    name: string;
}
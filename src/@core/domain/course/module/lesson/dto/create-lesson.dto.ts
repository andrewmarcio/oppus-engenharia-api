import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class CreateLessonDto {

    @IsNotEmpty()
    @Type(() => Number)
    module_id: number;
    
    @IsNotEmpty()
    @Type(() => String)
    name: string;

    @IsNotEmpty()
    @Type(() => String)
    youtube_video_id: string;
}
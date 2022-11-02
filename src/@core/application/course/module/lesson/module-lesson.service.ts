import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/@core/application/base/base.service";
import { ModuleLesson } from "src/@core/domain/course/module/lesson/module-lesson.entity";
import { Repository } from "typeorm";

@Injectable()
export class ModuleLessonService extends BaseService<ModuleLesson> {

    constructor(
        @InjectRepository(ModuleLesson)
        protected repository: Repository<ModuleLesson>
    ){
        super(repository);
    }

    async createMany(module_id: number, payload: ModuleLesson[]): Promise<ModuleLesson[]> {
        const data = payload.map(lesson => ({
            module_id, 
            name: lesson.name, 
            youtube_video_id: lesson.youtube_video_id
        }));
        const lessons = await this.repository.create(data);
        
        return await this.repository.save(lessons);
    }
}
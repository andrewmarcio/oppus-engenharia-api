import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/@core/application/Auth/jwt/guard/jwt-auth.guard";
import { UpdateCourseModuleDto } from "src/@core/domain/course/module/dto/update-course-module.dto";
import { CreateLessonDto } from "src/@core/domain/course/module/lesson/dto/create-lesson.dto";
import { CreateManyLessons } from "src/@core/domain/course/module/lesson/dto/create-many-lessons.dto";
import { ModuleLesson } from "src/@core/domain/course/module/lesson/module-lesson.entity";
import { ModuleLessonService } from "../../../../application/course/module/lesson/module-lesson.service";

@UseGuards(JwtAuthGuard)
@Controller("lessons")
export class ModuleLessonController {

    constructor(
        private service: ModuleLessonService
    ){}

    @Get("/")
    async findAll(): Promise<ModuleLesson[]> {
        return await this.service.findAll();
    }

    @Post("/")
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: CreateLessonDto ): Promise<ModuleLesson> {
        return await this.service.create(data as ModuleLesson);
    }

    @Post("/create-many")
    @HttpCode(HttpStatus.CREATED)
    async createMany(@Body() data: CreateManyLessons ): Promise<ModuleLesson[]> {
        const { module_id: id, lessons } = data;
        return await this.service.createMany(id, lessons);
    }

    @Put("/:id")
    async update(@Param("id") id: number, @Body() data: UpdateCourseModuleDto ): Promise<ModuleLesson> {
        return await this.service.update(id, data);
    }
}
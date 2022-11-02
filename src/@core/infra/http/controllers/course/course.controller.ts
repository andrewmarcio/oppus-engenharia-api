import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CourseService } from "src/@core/application/course/course.service";
import { Course } from "src/@core/domain/course/course.entity";
import { CreateCourseDto } from "src/@core/domain/course/dto/create-course.dto";
import { UpdateCourseDto } from "src/@core/domain/course/dto/update-course.dto";

@Controller("courses")
export class CourseController {

    constructor(
        private service: CourseService
    ){}

    @Get("/")
    async getCourses(): Promise<Course[]> {
        return await this.service.findAll();
    }

    @Get("/:id")
    async getCourse(@Param("id") id: number): Promise<Course> {
        return await this.service.findOne(id);
    }

    @Post("/")
    @HttpCode(HttpStatus.CREATED)
    async createCourse(@Body() data: CreateCourseDto): Promise<Course>{
        return this.service.create(data as Course);
    }

    @Put("/:id")
    async updateCourse(@Param("id") id: number, @Body() data: UpdateCourseDto): Promise<Course>{
        return this.service.update(id, data);
    }
}
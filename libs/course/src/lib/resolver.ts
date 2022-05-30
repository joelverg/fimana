import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { string } from "joi";
import { CourseService } from "./course.service";
import { CreateCourseInput } from "./dto/create-course.input";
import { UpdateCourseInput } from "./dto/update-course.input";
import { Course } from "./models/course";

@Resolver()
export class CourseResolver {

    constructor(private readonly service: CourseService) {}

    @Query( () => [Course], { nullable: true})
    courses() {
        return this.service.courses()
    }

    @Query( () => Course, { nullable: true})
    course(@Args('id') id : string) {
        return this.service.course(id)
    }

    @Mutation(() => Course, {nullable: true})
    createCourse(@Args('input') input: CreateCourseInput) {
        return this.service.createCourse(input)
    }

    @Mutation(() => Course, {nullable: true})
    updateCourse(
        @Args('id') id: string,
        @Args('input') input: UpdateCourseInput){
        return this.service.updateCourse(id, input)
    }
}
import { Injectable } from "@nestjs/common";
import { CreateCourseInput } from "./dto/create-course.input";
import { UpdateCourseInput } from "./dto/update-course.input";
import { Course } from "./models/course";

@Injectable()
export class CourseService {

    items: Course[] = [
        {id:'intro-to-graphql',title:'Introduction to GraphQL'},
        {id:'graphql-for-experts',title:'Introduction to GraphQL'}
    ]


    public courses() {
        return this.items
    }

    public course (id: string) {
        return this.items.find(item => item.id === id)
    }


    public createCourse(input: CreateCourseInput) {
       const newCourse: Course = {
           id : Date.now().toString(),
           ...input
       }

       this.items.push(newCourse)
       return newCourse
    }

    public updateCourse(id: string, input: UpdateCourseInput) {
        const course = this.course(id)
        console.log(course);
        
        const updated: Course = {
            ...course,
            ...input
        }

        console.log(updated);
        

        this.items = this.items.map(item => {
            if(item.id === id ){
                return updated
            }
            return item
        })
        return updated
     }



}
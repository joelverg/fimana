import { Query, Resolver } from "@nestjs/graphql";
import { Course } from "./models/course";

@Resolver()
export class CourseResolver {

    @Query( () => [Course])
    courses() {
        return []
    }

    @Query( () => Course, { nullable: true})
    course() {
        return null
    }
}
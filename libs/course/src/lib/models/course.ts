import { Field, ObjectType } from "@nestjs/graphql";
import { Lesson } from "./lesson";

@ObjectType()
export class Course {
    @Field({nullable: true})
    id?: string

    @Field({nullable: true})
    title?: string

    @Field({nullable: true})
    description?: string

    @Field({nullable: true})
    imgurl?: string

    @Field(() => [Lesson], {nullable : true} )
    lesson?: Lesson[]
}
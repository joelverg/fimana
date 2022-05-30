import { Module } from '@nestjs/common'
import { CourseService } from './course.service';
import { CourseResolver } from './resolver';

@Module({
  controllers: [],
  providers: [CourseResolver, CourseService],
  exports: [],
})
export class CourseModule {}

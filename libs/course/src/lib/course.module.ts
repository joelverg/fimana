import { Module } from '@nestjs/common'
import { CourseResolver } from './resolver';

@Module({
  controllers: [],
  providers: [CourseResolver],
  exports: [],
})
export class CourseModule {}

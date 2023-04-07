import { Module } from '@nestjs/common';
import { MyApp2Controller } from './my-app2.controller';
import { MyApp2Service } from './my-app2.service';

@Module({
  imports: [],
  controllers: [MyApp2Controller],
  providers: [MyApp2Service],
})
export class MyApp2Module {}

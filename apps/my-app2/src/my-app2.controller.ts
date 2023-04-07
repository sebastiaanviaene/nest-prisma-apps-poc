import { Controller, Get } from '@nestjs/common';
import { MyApp2Service } from './my-app2.service';

@Controller()
export class MyApp2Controller {
  constructor(private readonly myApp2Service: MyApp2Service) {}

  @Get()
  getHello(): string {
    return this.myApp2Service.getHello();
  }
}

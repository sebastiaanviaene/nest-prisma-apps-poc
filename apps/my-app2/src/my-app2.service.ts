import { Injectable } from '@nestjs/common';

@Injectable()
export class MyApp2Service {
  getHello(): string {
    return 'Hello World!!';
  }
}

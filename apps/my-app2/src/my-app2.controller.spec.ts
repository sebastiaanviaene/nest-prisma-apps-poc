import { Test, TestingModule } from '@nestjs/testing';
import { MyApp2Controller } from './my-app2.controller';
import { MyApp2Service } from './my-app2.service';

describe('MyApp2Controller', () => {
  let myApp2Controller: MyApp2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyApp2Controller],
      providers: [MyApp2Service],
    }).compile();

    myApp2Controller = app.get<MyApp2Controller>(MyApp2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myApp2Controller.getHello()).toBe('Hello World!');
    });
  });
});

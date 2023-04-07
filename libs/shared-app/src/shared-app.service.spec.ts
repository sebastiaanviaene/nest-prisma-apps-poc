import { Test, TestingModule } from '@nestjs/testing';
import { SharedAppService } from './shared-app.service';

describe('SharedAppService', () => {
  let service: SharedAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedAppService],
    }).compile();

    service = module.get<SharedAppService>(SharedAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

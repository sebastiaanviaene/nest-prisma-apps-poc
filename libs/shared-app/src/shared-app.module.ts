import { Module } from '@nestjs/common';
import { SharedAppService } from './shared-app.service';

@Module({
  providers: [SharedAppService],
  exports: [SharedAppService],
})
export class SharedAppModule {}

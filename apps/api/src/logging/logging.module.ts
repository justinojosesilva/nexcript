import { Module } from '@nestjs/common';
import { StructuredLoggerService } from './structured-logger.service';

@Module({
  providers: [StructuredLoggerService],
  exports: [StructuredLoggerService],
})
export class LoggingModule {}

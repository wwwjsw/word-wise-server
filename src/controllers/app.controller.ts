import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { DictionaryResponse } from '@/src/common/types/dictionaryResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DictionaryResponse {
    return this.appService.getHello();
  }
}

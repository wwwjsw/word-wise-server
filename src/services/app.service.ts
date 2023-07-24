import { Injectable } from '@nestjs/common';

import { DictionaryResponse } from '@/src/common/types/dictionaryResponse';

@Injectable()
export class AppService {
  getHello(): DictionaryResponse {
    return { message: 'Hello World!' };
  }
}

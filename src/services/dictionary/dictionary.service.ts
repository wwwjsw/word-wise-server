// dictionary.service.ts

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DictionaryService {
  private readonly baseUrl: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('DICTIONARY_API_URL');
  }

  async getWordDefinition(word: string): Promise<any> {
    const apiUrl = this.baseUrl + '/' + word;
    const response$ = this.httpService.get(apiUrl);
    const response = await firstValueFrom(response$);
    return response.data;
  }
}

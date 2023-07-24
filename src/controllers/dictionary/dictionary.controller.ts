// dictionary.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { DictionaryService } from '@/src/services/dictionary/dictionary.service';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get(':word')
  async getWordDefinition(@Param('word') word: string): Promise<any> {
    const definition = await this.dictionaryService.getWordDefinition(word);
    return { word, definition };
  }
}

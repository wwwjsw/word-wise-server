import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DictionaryService } from './services/dictionary/dictionary.service';
import { DictionaryController } from '@/src/controllers/dictionary/dictionary.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Isso faz com que o módulo fique disponível globalmente
      envFilePath: '.env', // Caminho para o arquivo de configuração
    }),
    HttpModule,
  ],
  controllers: [AppController, DictionaryController],
  providers: [AppService, DictionaryService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { GameService } from "./game/game.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
      GameModule,
      ConfigModule.forRoot({
          envFilePath: '../.env',
          isGlobal: true,
      }),
  ],
  providers: [GameService],
})
export class AppModule {}

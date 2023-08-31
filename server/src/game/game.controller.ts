import {Controller, Get, Query} from '@nestjs/common';
import {GameService} from './game.service';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async findAll(
      @Query('platform') platform?: string,
      @Query('category') category?: string,
      @Query('sort-by') sortBy?: string,
  ) {
    const params: Record<string, string> = {};

    if (platform !== undefined) params.platform = platform;
    if (category !== undefined) params.category = category;
    if (sortBy !== undefined) params['sort-by'] = sortBy;

    try {
      return await this.gameService.findAll(params);
    } catch (error) {
      throw error.response;
    }
  }

  @Get('game')
  async findOne(@Query('id') id: string) {
    return await this.gameService.findOne(+id);
  }
}

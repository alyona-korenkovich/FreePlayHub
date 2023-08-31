import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  findAll() {
    return `This action returns all game`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }
}

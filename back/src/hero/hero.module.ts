import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}

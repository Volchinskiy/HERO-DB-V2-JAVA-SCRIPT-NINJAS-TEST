import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { CreateHeroDto, UpdateHeroDto } from './dto/hero.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { HeroService } from './hero.service';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { extname } from 'path';
import * as uuid from 'uuid';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getAllHeros() {
    return this.heroService.getAll();
  }

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto) {
    await this.heroService.createHero(createHeroDto);
    return await this.heroService.getAll();
  }

  @Patch()
  async update(@Body() updateHeroDto: UpdateHeroDto) {
    await this.heroService.updateHero(updateHeroDto);
    return await this.heroService.getAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.heroService.deleteHero(+id);
    return await this.heroService.getAll();
  }

  @Get('img/:imgName')
  getImg(@Param('imgName') imgName: string, @Res() res: Response) {
    return this.heroService.getImg(imgName, res);
  }

  @Post('img')
  @UseInterceptors(
    FileInterceptor('img', {
      storage: diskStorage({
        destination: './img',
        filename: (_, img, cd) => {
          const extension = extname(img.originalname);

          cd(null, `image-${uuid.v1()}${extension}`);
        },
      }),
    }),
  )
  async createHeroWithImg(@Body() createHeroDto: CreateHeroDto, @UploadedFile() img: Express.Multer.File) {
    const [heroId] = await this.heroService.createHero(createHeroDto);

    await this.heroService.saveImg(img, heroId.id);
    return await this.heroService.getAll();
  }

  @Patch('img/:heroId')
  @UseInterceptors(
    FileInterceptor('img', {
      storage: diskStorage({
        destination: './img',
        filename: (_, img, cd) => {
          const extension = extname(img.originalname);

          cd(null, `image-${uuid.v1()}${extension}`);
        },
      }),
    }),
  )
  async addImg(@Param('heroId') heroId: string, @UploadedFile() img: Express.Multer.File) {
    await this.heroService.saveImg(img, +heroId);
    return await this.heroService.getAll();
  }

  @Delete('img/:id')
  async deleteImg(@Param('id') id: string) {
    await this.heroService.deleteImg(+id);
    return await this.heroService.getAll();
  }
}

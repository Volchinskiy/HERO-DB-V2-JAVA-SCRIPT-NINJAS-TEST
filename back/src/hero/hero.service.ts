import { CreateHeroDto, UpdateHeroDto } from './dto/hero.dto';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Response } from 'express';

@Injectable()
export class HeroService {
  constructor(private db: DataSource) {}
  async getAll() {
    return await this.db.query(
      'SELECT hero.*, img.name AS "img_name", img.id AS "img_id" FROM super_hero hero LEFT JOIN hero_img img ON hero.id = img.hero_id ORDER BY hero.id DESC;',
    );
  }

  async createHero(createHeroDto: CreateHeroDto) {
    const { nickname, real_name, origin_description, superpowers, catch_phrase } = createHeroDto;

    return await this.db.query(
      `INSERT INTO super_hero (nickname, real_name, origin_description, superpowers, catch_phrase) VALUES ('${nickname}', '${real_name}', '${origin_description}', '${superpowers}', '${catch_phrase}') RETURNING id;`,
    );
  }

  async updateHero(updateHeroDto: UpdateHeroDto) {
    const { id, nickname, real_name, origin_description, superpowers, catch_phrase } = updateHeroDto;

    await this.db.query(
      `UPDATE super_hero SET nickname = '${nickname}', real_name = '${real_name}', origin_description = '${origin_description}', superpowers = '${superpowers}', catch_phrase = '${catch_phrase}' WHERE id = ${id};`,
    );
  }

  async deleteHero(heroId: number) {
    await this.db.query(`DELETE FROM hero_img WHERE hero_id = ${heroId}`);
    await this.db.query(`DELETE FROM super_hero WHERE id = ${heroId}`);
  }

  async getImg(imgName: string, res: Response) {
    try {
      return res.sendFile(imgName, { root: './img' });
    } catch (error) {
      throw new Error('NOT FOUND');
    }
  }

  async saveImg(img: Express.Multer.File, heroId: number) {
    await this.db.query(`INSERT INTO hero_img (hero_id, name) VALUES (${heroId}, '${img.filename}');`);
  }

  async deleteImg(imgId: number) {
    await this.db.query(`DELETE FROM hero_img WHERE id = ${imgId}`);
  }
}

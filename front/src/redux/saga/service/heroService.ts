import { createHeroI, updateHeroI } from '../../../type/heroType';
import { addImgData } from './../../../type/apiType';
import api from './../../../api/api';

export async function getAllHero() {
  const allHero = await api.hero.getAllHero();
  return allHero.data;
}

export async function addHero(hero: createHeroI) {
  const allHero = await api.hero.createHero(hero);
  return allHero.data;
}

export async function updateHero(hero: updateHeroI) {
  const allHero = await api.hero.updateHero(hero);
  return allHero.data;
}

export async function deleteHero(id: number) {
  const allHero = await api.hero.deleteHero(id);
  return allHero.data;
}

export async function deleteImg(id: number) {
  const allHero = await api.hero.deleteImg(id);
  return allHero.data;
}

export async function addImgService(data: addImgData) {
  const allHero = await api.hero.addImgApi(data);
  return allHero.data;
}

export async function addHeroWithImg(hero: FormData) {
  const allHero = await api.hero.createHeroWithImg(hero);
  return allHero.data;
}

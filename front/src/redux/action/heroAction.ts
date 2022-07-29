import {
  GET_HERO_REQUEST,
  ADD_HERO_REQUEST,
  UPDATE_HERO_REQUEST,
  DELETE_HERO_REQUEST,
  ADD_HERO_WITH_IMG_REQUEST,
  DELETE_IMG_REQUEST,
  ADD_IMG_REQUEST,
} from './../constant';
import { updateHeroI, createHeroI } from './../../type/heroType';

export const getHero = { type: GET_HERO_REQUEST };

export const addHero = (hero: createHeroI) => ({
  type: ADD_HERO_REQUEST,
  payload: hero,
});

export const updateHero = (hero: updateHeroI) => ({
  type: UPDATE_HERO_REQUEST,
  payload: hero,
});

export const deleteHero = (id: number) => ({
  type: DELETE_HERO_REQUEST,
  payload: id,
});

export const addHeroWithImg = (hero: FormData) => ({
  type: ADD_HERO_WITH_IMG_REQUEST,
  payload: hero,
});

export const deleteImg = (id: number) => ({
  type: DELETE_IMG_REQUEST,
  payload: id,
});

export const addImg = (id: number, img: FormData) => ({
  type: ADD_IMG_REQUEST,
  payload: { id, img },
});

export interface createHeroI {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
}

export interface updateHeroI extends createHeroI {
  id: number;
}

export interface heroI {
  id: number;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  img_name: string;
  img_id: number;
}

export type allHerosT = Array<heroI>;

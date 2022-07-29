export class CreateHeroDto {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
}

export class UpdateHeroDto extends CreateHeroDto {
  id: number;
}

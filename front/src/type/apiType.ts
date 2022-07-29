import { updateHeroI, allHerosT, createHeroI } from './heroType';
import { AxiosResponse } from 'axios';

export type addImgData = {
  id: number;
  img: FormData;
};

export default interface ApiFetchDataType {
  hero: {
    getAllHero: () => Promise<AxiosResponse<allHerosT>>;
    createHero: (hero: createHeroI) => Promise<AxiosResponse<allHerosT>>;
    createHeroWithImg: (hero: FormData) => Promise<AxiosResponse<allHerosT>>;
    addImgApi: (data: addImgData) => Promise<AxiosResponse<allHerosT>>;
    updateHero: (hero: updateHeroI) => Promise<AxiosResponse<allHerosT>>;
    deleteHero: (id: number) => Promise<AxiosResponse<allHerosT>>;
    deleteImg: (id: number) => Promise<AxiosResponse<allHerosT>>;
  };
}

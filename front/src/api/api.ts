import ApiFetchDataType from './../type/apiType';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_DOMAIN_ADDRESS;

const instance = axios.create({
  baseURL: apiUrl,
});

const api: ApiFetchDataType = {
  hero: {
    getAllHero: () => instance.get('/hero'),
    createHero: (hero) => instance.post('/hero', hero),
    createHeroWithImg: (hero) => instance.post('/hero/img', hero),
    addImgApi: (data) => instance.patch(`/hero/img/${data.id}`, data.img),
    updateHero: (hero) => instance.patch('/hero', hero),
    deleteHero: (id) => instance.delete(`/hero/${id}`),
    deleteImg: (id) => instance.delete(`/hero/img/${id}`),
  },
};

export default api;

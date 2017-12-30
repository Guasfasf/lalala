import {get,post} from './index';

export function getSliders() {// 轮播图
    return get('/api/sliders')
}

export function getLessons(type,offset,limit) {
    return get(`/api/lessons?type=${type}&offset=${offset}&limit=${limit}`);
}
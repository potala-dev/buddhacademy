import { defineStore } from 'pinia';

interface Course {
  id: string;
  title: string;
  url: string;
}

export const useCourseStore = defineStore('courses', {
  state: () => ({
    currentCourse: {
      id: '3d72-P62-eo',
      title: 'འཕགས་པའི་བདེན་པ་བཞི་ངོ་སྤྲོད། ཉིན་དང་པོ།',
      url: 'https://www.youtube.com/embed/3d72-P62-eo',
    } as Course,
    started: [
      {
        id: '3d72-P62-eo',
        title: 'འཕགས་པའི་བདེན་པ་བཞི་ངོ་སྤྲོད། ཉིན་དང་པོ།',
        url: 'https://www.youtube.com/embed/3d72-P62-eo',
      },
      {
        id: 'W-bIVVRK-ws',
        title: 'འཕགས་པའི་བདེན་པ་བཞི་ངོ་སྤྲོད། ཉིན་གཉིས་པ།',
        url: 'https://www.youtube.com/embed/W-bIVVRK-ws',
      },
      {
        id: 'QgkdjW09QRE',
        title: 'འཕགས་པའི་བདེན་པ་བཞི་ངོ་སྤྲོད། ཉིན་གསུམ་པ།',
        url: 'https://www.youtube.com/embed/QgkdjW09QRE',
      },
      {
        id: 'o0t0LlZXmow',
        title: 'འཕགས་པའི་བདེན་པ་བཞི་ངོ་སྤྲོད། ཉིན་བཞི་པ།',
        url: 'https://www.youtube.com/embed/o0t0LlZXmow',
      },
      {
        id: '5XIuOUFpVVA',
        title: 'སྐྱེ་བ་སྔ་ཕྱིའི་སྐོར་། ཉིན་དང་པོ།',
        url: 'https://www.youtube.com/embed/5XIuOUFpVVA',
      },
      {
        id: 'u0UZSeOJ4gA',
        title: 'སྐྱེ་བ་སྔ་ཕྱིའི་སྐོར་། ཉིན་གཉིས་པ།',
        url: 'https://www.youtube.com/embed/u0UZSeOJ4gA',
      },
      {
        id: 'ci6ZYYZawk8',
        title: 'སྐྱེ་བ་སྔ་ཕྱིའི་སྐོར་། ཉིན་གསུམ་པ།',
        url: 'https://www.youtube.com/embed/ci6ZYYZawk8',
      },
      {
        id: 'hISRdBOT1_U',
        title: 'སྐྱེ་བ་སྔ་ཕྱིའི་སྐོར་། ཉིན་བཞི་པ།',
        url: 'https://www.youtube.com/embed/hISRdBOT1_U',
      },
    ] as Course[],
    watchlist: [] as Course[],
    recommended: [] as Course[],
  }),
});

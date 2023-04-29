import { defineStore } from 'pinia';

export const useTextsStore = defineStore('counter', {
  state: () => ({
    texts: [
      {
        title: 'བཤེས་པའི་སྤྲིང་ཡིག་གི་རྩ་བ།',
        url: 'https://raw.githubusercontent.com/potala-dev/sheyting/main/data/output/root_verses.json',
      },
    ],
  }),
});

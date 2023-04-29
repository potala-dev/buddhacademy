import { defineStore } from 'pinia';

interface Text {
  title: string;
  url: string;
}

export const useTextsStore = defineStore('counter', {
  state: () => ({
    texts: [
      {
        title: 'བཤེས་པའི་སྤྲིང་ཡིག་གི་རྩ་བ།',
        url: 'https://raw.githubusercontent.com/potala-dev/sheyting/main/data/output/root_verses.json',
      },
    ] as Text[],
    text: '' as string,
  }),

  actions: {
    async getTextContent(title: string) {
      const text = this.texts.find((text) => text.title === title);
      if (!text) {
        throw new Error(`Text ${title} not found`);
      }
      const res = await fetch(text.url);
      return await res.json();
    },
  },
});

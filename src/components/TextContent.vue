<template>
  <div>
    <div class="text-h5 text-center">{{ title }}</div>
    <div class="q-mt-lg">
      <div v-if="content" v-html="content" class="q-gutter-y-md"></div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTextsStore } from 'stores/texts';
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import { TextContentResponse } from 'components/models';

const content = ref('');

const textsStore = useTextsStore();

const route = useRoute();
const title = route.params.title as string;

function formatToVerse(verses_list: string[][]) {
  let result = '';
  for (let verse of verses_list) {
    let formttedVerse = verse
      .map((line) => {
        return `<div>${line}</div>`;
      })
      .join('');
    result += `<div>${formttedVerse}</div>`;
  }
  console.log(result);
  return result;
}

onBeforeMount(async () => {
  const data: TextContentResponse = await textsStore.getTextContent(title);
  content.value = formatToVerse(data.content);
});
</script>

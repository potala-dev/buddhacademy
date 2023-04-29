<template>
  <q-list bordered separator>
    <q-item
      v-for="text in textsStore.texts"
      :key="text.title"
      :to="getTextRoute(text)"
      clickable
      v-ripple
    >
      <q-item-section>{{ text.title }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { useTextsStore } from 'stores/texts';

interface Text {
  title: string;
  url: string;
}

const textsStore = useTextsStore();

function getTextRoute(text: Text) {
  return '/texts/' + text.title;
}
</script>

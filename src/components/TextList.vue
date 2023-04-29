<template>
  <q-list bordered separator>
    <q-item
      v-for="text in textsStore.texts"
      :key="text.title"
      clickable
      v-ripple
    >
      <q-item-section>{{ text.title }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { useTextsStore } from 'stores/texts';

const textsStore = useTextsStore();
</script>

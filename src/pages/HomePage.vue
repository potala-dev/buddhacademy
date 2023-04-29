<template>
  <q-page class="q-pa-md q-gutter-lg">
    <div>
      <div class="text-h5">Continue Watching</div>
      <div class="q-mt-md">
        <q-card>
          <q-video :src="courseStore.currentCourse.url" :ratio="560 / 315" />

          <q-card-section>
            <div class="text-h6">{{ courseStore.currentCourse.title }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div>
      <div class="text-h5 text-weight-light">Texts</div>
      <div class="q-mt-md">
        <TextList />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useCourseStore } from 'stores/course';
import TextList from 'components/TextList.vue';

const courseStore = useCourseStore();
</script>

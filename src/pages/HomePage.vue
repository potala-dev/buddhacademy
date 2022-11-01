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
      <div class="text-h5">Progress</div>
      <div class="q-mt-md q-gutter-lg">
        <q-skeleton type="rect" height="200px" width="100" />
        <q-skeleton type="rect" height="200px" width="100" />
        <q-skeleton type="rect" height="200px" width="100" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useCourseStore } from 'stores/course';

const courseStore = useCourseStore();
</script>

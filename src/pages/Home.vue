<template>
  <q-page class="q-pa-md q-gutter-lg">
    <div>
      <div class="text-h5">Continue Watching</div>
      <div class="q-mt-md">
        <q-card>
          <q-video :src="courses[0].src" />

          <q-card-section>
            <div class="text-h6">{{ courses[0].title }}</div>
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

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomePage',

  setup() {
    const courses = [
      {
        id: 1,
        title: 'Meditation & Mindfulness | Day 01',
        src: 'https://www.youtube.com/embed/EzntoqdlK7Q',
      },
    ];

    return {
      courses,
    };
  },
});
</script>

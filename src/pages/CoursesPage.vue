<template>
  <q-page>
    <div>
      <q-tabs v-model="tab" inline-label class="text-primary">
        <q-tab name="started" icon="headphones" label="Started" />
        <q-tab name="watchlist" icon="bookmark" label="Watchlist" />
      </q-tabs>
    </div>

    <div>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="started">
          <div class="q-gutter-md">
            <q-card v-for="course in courseStore.started" :key="course.id">
              <q-video :src="course.url" :ratio="560 / 315" />
              <q-card-section>
                <div class="text-h6">{{ course.title }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
        <q-tab-panel name="watchlist">
          <div class="q-gutter-md">
            <q-card v-for="course in courseStore.watchlist" :key="course.id">
              <q-video :src="course.url" :ratio="560 / 315" />
              <q-card-section>
                <div class="text-h6">{{ course.title }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCourseStore } from 'stores/course';

const courseStore = useCourseStore();

const tab = ref('started');
</script>

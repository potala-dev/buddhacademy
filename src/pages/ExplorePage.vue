<template>
  <q-page padding>
    <div>
      <q-tabs v-model="tab" inline-label class="text-primary">
        <q-tab name="recommended" icon="recommend" label="Recommended" />
        <q-tab name="search" icon="search" label="Search" />
      </q-tabs>
    </div>

    <div>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="recommended">
          <div class="q-gutter-md">
            <q-card v-for="course in courseStore.recommended" :key="course.id">
              <q-video :src="course.url" :ratio="560 / 315" />
              <q-card-section>
                <div class="text-h6">{{ course.title }}</div>
              </q-card-section>

              <q-separator />

              <q-card-actions align="around">
                <q-btn flat color="primary" icon="headphones" label="Start" />
                <q-btn flat color="primary" icon="bookmark" label="Save" />
              </q-card-actions>
            </q-card>
          </div>
        </q-tab-panel>
        <q-tab-panel name="search">
          <q-input v-model="search" placeholder="Search here" />
          {{ search }}
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCourseStore } from 'stores/course';

const courseStore = useCourseStore();

const search = ref('');
const tab = ref('recommended');
</script>

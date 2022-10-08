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
            <q-card v-for="course in recommendedCourses" :key="course.id">
              <q-video :src="course.src" />
              <q-card-section>
                <div class="text-h6">{{ course.title }}</div>
              </q-card-section>

              <q-separator />

              <q-card-actions align="around">
                <q-btn flat icon="headphones" label="Start" />
                <q-btn flat icon="bookmark" label="Save" />
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

const tab = ref('recommended');
const search = ref('');

const genrateDummyCourse = (n: number) => {
  const courses = [];
  const course = {
    id: 0,
    title: `Meditation & Mindfulness | Day ${n}`,
    src: 'https://www.youtube.com/embed/EzntoqdlK7Q',
  };
  for (let i = 0; i < n; i++) {
    course.id = i;
    courses.push(course);
  }
  return courses;
};

const recommendedCourses = genrateDummyCourse(10);
console.log(recommendedCourses);
</script>

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
            <q-card v-for="course in startedCourses" :key="course.id">
              <q-video :src="course.src" />
              <q-card-section>
                <div class="text-h6">{{ course.title }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
        <q-tab-panel name="watchlist">
          <div class="q-gutter-md">
            <q-card v-for="course in startedCourses" :key="course.id">
              <q-video :src="course.src" />
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'CoursesPage',

  setup() {
    const tab = ref('started');

    const genrateDummyCourse = (n: number) => {
      const courses = [];
      const course = {
        id: n,
        title: `Meditation & Mindfulness | Day ${n}`,
        src: 'https://www.youtube.com/embed/EzntoqdlK7Q',
      };
      for (let i = 0; i < n; i++) {
        courses.push(course);
      }
      return courses;
    };

    const startedCourses = genrateDummyCourse(10);

    const watchlistCourses = genrateDummyCourse(20);

    return {
      tab,
      startedCourses,
      watchlistCourses,
    };
  },
});
</script>

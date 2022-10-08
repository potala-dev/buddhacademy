<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title class="text-center">Buddhacademy</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs>
        <q-route-tab label="Home" icon="home" />
        <q-route-tab label="Courses" icon="school" />
        <q-route-tab label="Explore" icon="apps" />
        <q-route-tab label="Settings" icon="settings" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup></script>

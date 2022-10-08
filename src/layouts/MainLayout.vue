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
        <q-route-tab to="/" label="Home" icon="home" />
        <q-route-tab to="/courses" label="Courses" icon="school" />
        <q-route-tab to="/explore" label="Explore" icon="apps" />
        <q-route-tab to="/settings" label="Settings" icon="settings" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup></script>

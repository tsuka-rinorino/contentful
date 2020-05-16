<template>
  <div id="app" class="app">
    <v-header />
    <router-view />
  </div>
</template>


<script>
import Header from '@/components/header/index.vue';

export default {
  components: {
    'v-header': Header,
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/app.scss";

.app {
  height: 100%;
}
</style>

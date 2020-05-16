<template>
  <div id="app" class="app">
    <v-header class="app__header" />
    <router-view class="app__body" />
    <v-footer class="app__footer" />
    <v-github-badge class="app__badge" />
  </div>
</template>


<script>
import Header from '@/components/header/index.vue';
import Footer from '@/components/footer/index.vue';
import GithubBadge from '@/components/github-badge/index.vue';

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-github-badge': GithubBadge,
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/app.scss";

.app {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  min-height: 100vh;

  &__header {
    flex-shrink: 0;
  }

  &__body {
    flex: 1 0 auto;
    min-height: 1px;
  }

  &__footer {
    flex-shrink: 0;
    margin-top: 5rem;
  }

  &__badge {
    position: absolute;
    top: -60px;
    right: -60px;
  }
}
</style>

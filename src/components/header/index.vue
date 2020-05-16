<template>
  <header class="header">
    <h1 class="header__title">
      <router-link class="header__link" to="/">
        {{ title }}
      </router-link>
    </h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: process.env.VUE_APP_SITE_TITLE,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 40px;

  &__title {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__link {
    color: $body-color;
    &:hover {
      text-decoration: none;
      color: $oc-blue-6;
    }
  }
}
</style>

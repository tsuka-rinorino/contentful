<template>
  <div class="author">
    <div class="author__avatar">
      <img class="author__img" :src="author.icon.fields.file.url" alt="">
    </div>
    <div class="author__body">
      <div class="author__name">{{ author.name }}</div>
      <div class="author__profile">{{ author.profile }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    author: {
      type: Object,
    },
  },
};
</script>


<style lang="scss" scoped>
.author {
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  border: 1px solid $oc-gray-4;
  padding: 1rem 1.5rem;

  &__avatar {
    overflow: hidden;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__body {
    width: calc(100% - 80px - 20px);
  }

  &__name {
    font-size: 0.9375rem;
    margin-bottom: 0.25rem;
  }

  &__profile {
    font-size: 0.8125rem;
    line-height: 1.4;
    color: $oc-gray-8;
  }
}
</style>

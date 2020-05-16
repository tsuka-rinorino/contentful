<template>
  <ul class="tag">
    <li v-for="tag in tags" :key="tag.sys.id" class="tag__item">{{ tag.fields.name }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;

  &__item {
    border-radius: 0.25rem;
    border: 1px solid $oc-gray-4;
    font-size: 0.625rem;
    line-height: 1;
    letter-spacing: 0;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    padding: 0.5rem;
  }
}
</style>

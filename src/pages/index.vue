<template>
  <div class="page page-index">
    <v-item-list class="page-index__item-list" />
  </div>
</template>


<script>
import ItemList from '@/components/item-list/index.vue';

export default {
  components: {
    'v-item-list': ItemList,
  },
};
</script>


<style lang="scss" scoped>
.page-index {

  &__item-list {
    margin-top: 5rem;
  }
}
</style>

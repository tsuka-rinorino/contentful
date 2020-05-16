<template>
  <div class="page page--index">
    <v-item-list />
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


<style scoped>
.page--index {
}
</style>

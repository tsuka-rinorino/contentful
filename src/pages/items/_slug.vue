<template>
  <div class="page page-slug">
    <v-item />
  </div>
</template>


<script>
import Item from '@/components/item/index.vue';

export default {
  components: {
    'v-item': Item,
  },
};
</script>


<style scoped>
.page-slug {
  margin-top: 5rem;
}
</style>

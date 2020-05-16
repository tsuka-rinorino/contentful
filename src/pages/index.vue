<template>
  <div class="page page-index">
    <v-item-list class="page-index__item-list" :items="items" />
  </div>
</template>


<script>
import ItemList from '@/components/item-list/index.vue';
import client from '@/plugins/contentful';

export default {
  components: {
    'v-item-list': ItemList,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      client.getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      })
        .then((response) => {
          this.items = response.items;
        });
    },
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

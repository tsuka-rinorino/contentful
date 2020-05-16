<template>
  <div class="item-list">
    <v-wrap>
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to="`/items/${item.fields.slug}`">
            {{ item.fields.title }}
          </router-link>
        </li>
      </ul>
    </v-wrap>
  </div>
</template>

<script>
import Wrap from '@/components/wrap/index.vue';
import client from '../../plugins/contentful';

export default {
  components: {
    'v-wrap': Wrap,
  },
  data() {
    return {
      items: {},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-list {
}
</style>

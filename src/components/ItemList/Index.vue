<template>
  <div class="item-list">
    <ul>
      <li  v-for="item in items" :key="item.id">
        {{ item.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import client from '../../plugins/contentful';

export default {
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

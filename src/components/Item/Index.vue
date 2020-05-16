<template>
  <div class="item">
    {{ item.title }}
  </div>
</template>

<script>
import client from '../../plugins/contentful';

export default {
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      client.getEntries({
        content_type: 'post',
        'fields.slug': this.$route.params.slug,
      })
        .then((response) => {
          this.item = response.items[0].fields;
          this.item.createdAt = response.items[0].sys.createdAt;
          this.item.updatedAt = response.items[0].sys.updatedAt;
        });
    },
  },
};
</script>

<style scoped>
.item {
}
</style>

<template>
  <div class="item">
    {{ item.title }}
    <div v-html="item.content" />
    <div v-html="item.code" />
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import MixinContentful from '@/mixins/contentful';
import client from '../../plugins/contentful';

export default {
  mixins: [MixinContentful],
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
          this.$set(this.item, 'content', documentToHtmlString(this.item.content));
          this.$set(this.item, 'code', this.unescapeHTML(documentToHtmlString(this.item.code)));
        });
    },
  },
};
</script>

<style scoped>
.item {
}
</style>

<template>
  <div class="item">
    <v-wrap>
      {{ item.title }}
      <div v-html="item.content" />
      <div v-html="item.code" />
    </v-wrap>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import MixinContentful from '@/mixins/contentful';
import client from '@/plugins/contentful';
import Wrap from '@/components/wrap/index.vue';

export default {
  mixins: [MixinContentful],
  components: {
    'v-wrap': Wrap,
  },
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

<style lang="scss" scoped>
.item {
}
</style>

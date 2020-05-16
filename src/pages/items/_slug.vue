<template>
  <div class="page page-slug">
    <v-item :item="item" />
  </div>
</template>


<script>
import MixinContentful from '@/mixins/contentful';
import Item from '@/components/item/index.vue';
import client from '@/plugins/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  head: {
    title() {
      return {
        inner: this.head.title,
      };
    },
  },
  mixins: [MixinContentful],
  components: {
    'v-item': Item,
  },
  data() {
    return {
      head: {
        title: '',
      },
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
          this.$set(this.item, 'intro', documentToHtmlString(this.item.intro));
          this.$set(this.item, 'content', documentToHtmlString(this.item.content));
          this.$set(this.head, 'title', this.item.title);
          this.$emit('updateHead');
        });
    },
  },
};
</script>


<style lang="scss" scoped>
.page-slug {
  margin-top: 5rem;
}
</style>

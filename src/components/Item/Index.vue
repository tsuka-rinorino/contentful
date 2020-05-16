<template>
  <article class="item">
    <v-wrap>
      <h1 class="item__heading">{{ item.title }}</h1>
      <div class="item__meta">
        <time class="item__date">{{ item.createdAt | moment("YYYY-MM-DD") }}</time>
        <v-tag v-if="item.tag[0]" class="item__tag" :tags="item.tag" />
      </div>
      <div class="item__body">
        <div v-html="item.content" />
        <div v-html="item.code" />
      </div>
    </v-wrap>
  </article>
</template>


<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import MixinContentful from '@/mixins/contentful';
import client from '@/plugins/contentful';
import Wrap from '@/components/wrap/index.vue';
import Tag from '@/components/tag/index.vue';

export default {
  mixins: [MixinContentful],
  components: {
    'v-wrap': Wrap,
    'v-tag': Tag,
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
  margin-top: 5rem;

  &__heading {
    font-size: 1.375rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.35;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  &__meta {
    text-align: center;
    margin-bottom: 2.75rem;
  }

  &__date {
    display: inline-block;
    font-size: 0.6875rem;
    line-height: 1;
    color: $oc-gray-6;
    margin-bottom: 0.5rem;
  }

  &__tag {
  }

  &__body {
    &::v-deep {
      p,
      ul,
      ol {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      li {
        p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>

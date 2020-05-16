<template>
  <article class="item">
    <v-wrap>
      <h1 class="item__heading">{{ item.title }}</h1>
      <div class="item__meta">
        <time class="item__date">{{ item.createdAt | moment("YYYY-MM-DD") }}</time>
        <v-tag v-if="item.tag" class="item__tag" :tags="item.tag" />
      </div>
      <div class="item__body">
        <div v-html="item.intro" />
        <div v-html="item.content" />
        <div v-html="item.code" />
      </div>
      <v-author v-if="item.user" class="item__author" :author="item.user.fields" />
    </v-wrap>
  </article>
</template>


<script>
import Wrap from '@/components/wrap/index.vue';
import Tag from '@/components/tag/index.vue';
import Author from '@/components/author/index.vue';

export default {
  components: {
    'v-wrap': Wrap,
    'v-tag': Tag,
    'v-author': Author,
  },
  props: {
    item: {
      type: Object,
    },
  },
};
</script>


<style lang="scss" scoped>
.item {

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

  &__author {
    margin-top: 4rem;
  }
}
</style>

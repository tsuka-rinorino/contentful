<template>
  <v-wrap class="item-list">
    <ul class="item-list__list">
      <li class="item-list__item" v-for="item in items" :key="item.sys.id">
        <router-link class="item-list__link" :to="`/items/${item.fields.slug}`">
          <div class="item-list__body">
            <div class="item-list__title">{{ item.fields.title }}</div>
          </div>
          <div class="item-list__meta">
            <v-tag v-if="item.fields.tag" class="item-list__tag" :tags="item.fields.tag" />
            <time class="item-list__date">{{ item.sys.createdAt | moment("YYYY-MM-DD") }}</time>
          </div>
        </router-link>
      </li>
    </ul>
  </v-wrap>
</template>


<script>
import Wrap from '@/components/wrap/index.vue';
import Tag from '@/components/tag/index.vue';
import client from '../../plugins/contentful';

export default {
  components: {
    'v-wrap': Wrap,
    'v-tag': Tag,
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


<style lang="scss" scoped>
.item-list {

  &__list {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  &__item {
    margin-bottom: 24px;
  }

  &__link {
    display: block;
    border-radius: 0.4rem;
    border: 1px solid $oc-gray-4;
    color: $body-color;
    padding: 1rem 1.5rem;
    &:hover {
      border-color: $oc-blue-4;
      background-color: #fff;
      text-decoration: none;
    }
  }

  &__body {
  }

  &__title {
    font-size: 0.9375rem;
    margin-bottom: 0.5rem;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__tag {
    cursor: default;
    pointer-events: none;
    margin-left: -0.25rem;
  }

  &__date {
    font-size: 0.75rem;
    color: $oc-gray-6;
  }
}
</style>

<template>
  <footer class="footer">
    <v-wrap class="footer__inner">
      <p class="footer__copyright">
        <small class="footer__copyright-small">© 2020 <a href="https://sora-maru.io/">sora-maru</a></small>
      </p>
    </v-wrap>
  </footer>
</template>

<script>
import Wrap from '@/components/wrap/index.vue';

export default {
  components: {
    'v-wrap': Wrap,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $oc-gray-7;
  color: #fff;

  &__inner {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  &__copyright {
    text-align: center;
    a {
      color: #fff;
    }
  }

  &__copyright-small {
    font-size: 0.8125rem;
  }
}
</style>

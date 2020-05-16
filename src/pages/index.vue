<template>
  <div class="page page--index">
    <HelloWorld msg="hello"/>
  </div>
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>


<style scoped>
.page--index {
}
</style>

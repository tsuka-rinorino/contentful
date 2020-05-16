<template>
  <div class="page page--index">
    <ItemList />
    <HelloWorld mes="hello" />
  </div>
</template>


<script>
import ItemList from '@/components/ItemList/Index.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  components: {
    ItemList,
    HelloWorld,
  },
  data() {
    return {
      item: 0,
    };
  },
  methods: {
    get() {
      axios.get('/user')
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>


<style scoped>
.page--index {
}
</style>

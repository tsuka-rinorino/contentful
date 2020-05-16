<template>
  <a class="github-badge" href="https://github.com/tsuka-rinorino/contentful">
    <img class="github-badge__img" src="@/assets/img/GitHub-Mark-Light-64px.png" alt="">
  </a>
</template>

<script>
</script>

<style lang="scss" scoped>
.github-badge {
  display: block;
  transform: rotate(45deg);
  background-color: #171516;
  color: #fff;
  width: 120px;
  height: 120px;

  &__img {
    display: block;
    position: absolute;
    bottom: 10px;
    left: 45px;
    transform: rotate(-45deg);
    width: 32px;
  }
}
</style>

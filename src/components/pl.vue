<template>
  <div>
    <shouye></shouye>
    <swipers></swipers>
  </div>

</template>

<script>
  import shouye from './shouye';
  import swipers from './swiper';

  export default {
    name: "pl",
    components: {
      shouye, swipers
    }
  }
</script>

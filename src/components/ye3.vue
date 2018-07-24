<template>
  <div>
    <shouye></shouye>
    <div class="jj" @click="btnClick">加油！VUE</div>
  </div>

</template>

<script>
  import shouye from '../components/shouye';
    export default {
        name: "ye3",
      components:{shouye},
      methods:{
          btnClick:function(){
            alert(1);
          }
      }
    }
</script>

<style scoped>
.jj{width: 300px; height: 100px; background: #f0ad4e;margin: 100px auto;text-align: center;line-height: 100px}
</style>

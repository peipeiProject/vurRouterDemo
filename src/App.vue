<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
  *{ padding:0; margin:0;}
  body{ font-size:20px; color:#333;}
  ul,ol{ list-style:none;}
  a{text-decoration:none;}
  h1,h2,h3,h4,h5,h6{ font-size:100%; font-weight:normal;}
  i,em{ font-style:normal;}
  b,strong{ font-weight:normal;}
  a img{ border:none;}
  img{ vertical-align:top;}
  .clearfix:after{ display:block; content:''; clear:both;}

</style>

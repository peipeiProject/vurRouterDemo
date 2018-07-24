<template>
  <div class="div1">
    <ul class="clearfix">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/ye1">菜单2</router-link>
      </li>
      <li>
        <router-link to="/ye2">菜单3</router-link>
      </li>
      <li>
        <router-link to="/ye3">菜单4</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "shouye"
  }
</script>

<style>

  .div1 {
    width: 100%;
    height: 40px;
    background: #d58c25;

  }

  .div1 ul {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  .div1 li {
    width: 100px;
    height: 100%;
    font-size: 14px;

    text-align: center;
    line-height: 40px;
    float: left;
    flex: 1;
    border-right: 1px solid #d6741b;
  }

  .div1 li a {
    color: #fff;
  }

  .lub {
    width: 100%;
    height: 150px;
  }
</style>

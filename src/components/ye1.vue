<template>
  <div>
    <shouye></shouye>
    <div id="myChart"></div>
  </div>

</template>

<script>
  import shouye from '../components/shouye'
  var echarts = require('echarts');
    export default {
        name: "ye1",

      mounted() {
        this.drawLine();
      },
      components:{
          shouye
      },
      methods: {
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            title: { text: '销售表' },
            tooltip: {},
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","苹果"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [50, 20, 36, 10, 10, 20,25]
            }]
          });
        }
      }
    };
</script>

<style scoped>
  li{margin: 0 auto;}
  #myChart{

    width: 80%;
    margin: 20px auto;
    height: 300px;
  }
</style>

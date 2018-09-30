//当前情况
var myChart1 = echarts.init(document.getElementById('chartMain'), 'macarons');
var colors = ['#5793f3', '#d14a61', '#675bba', '#675bba', '#675bba'];
var option1 = {
  grid: {
    left: '3%',
    right: '4%',
    top: '8%',
    bottom:'2%',
    containLabel: true
  },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['变频外风机1','变频外风机2','变频外风机3','变频外风机4','变频外风机5']
    },
  xAxis: {
    type: 'value',
      position:'top',
  },
  yAxis: {
    type: 'category',
    axisLabel:{rotate:-90},
    data: ['2018/9/30 0:15:00', '2018/9/30 0:15:00', '2018/9/30 0:15:00', '2018/9/30 0:15:00', '2018/9/30 0:15:00'],
  },
  series:[
    {
        name:'变频外风机1',
        type:'line',
        stack: '总量',
        data:[20,35,80,75,60]
    },
    {
        name:'变频外风机2',
        type:'line',
        stack: '总量',
        data:[10,15,20,15,30]
    },
    {
        name:'变频外风机3',
        type:'line',
        stack: '总量',
        data:[4,6,22,66,3]
    },
    {
        name:'变频外风机4',
        type:'line',
        stack: '总量',
        data:[55,11,33,44,11]
    },
    {
        name:'变频外风机5',
        type:'line',
        stack: '总量',
        data:[66,33,22,66,22]
    }
  ]
};
setTimeout(function() {
  myChart1.setOption(option1);
}, 200);
window.onresize = function(){
    myChart1.resize();
};

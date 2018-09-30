var myChart1 = echarts.init(document.getElementById('chart1'), 'macarons');
var option1 = {
  grid: {
    left: '3%',
    right: '4%',
    top: '8%',
    bottom:'8%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['正常', '故障工程', '新安装', '离线']
  },
  series: [{
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'insideRight'
        }
      },
      data: [320,60,200,105]
    }
  ]
};
myChart1.setOption(option1);

// 故障比例
var myChart2 = echarts.init(document.getElementById('chart2'), 'macarons');
var option2 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['C1-1冷凝风机过载', 'C1-1压缩机高压', 'C1-2压缩机高压', 'C1-3冷凝风机过载', 'C1-3压缩机高压']
  },
  series: [{
    name: '故障比例',
    type: 'pie',
    radius: '60%',
    center: ['50%', '50%'],
    data: [{
        value: 335,
        name: 'C1-1冷凝风机过载'
      },
      {
        value: 310,
        name: 'C1-1压缩机高压'
      },
      {
        value: 234,
        name: 'C1-2压缩机高压'
      },
      {
        value: 135,
        name: 'C1-3冷凝风机过载'
      },
      {
        value: 1548,
        name: 'C1-3压缩机高压'
      }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
};
myChart2.setOption(option2);

//设备分布情况
//第四个图表
var chart3 = echarts.init(document.getElementById('chart3'), 'macarons');
var data3 = [{
    name: '北京',
    value: 5.3
  },
  {
    name: '天津',
    value: 3.8
  },
  {
    name: '上海',
    value: 4.6
  },
  {
    name: '重庆',
    value: 3.6
  },
  {
    name: '河北',
    value: 3.4
  },
  {
    name: '河南',
    value: 3.2
  },
  {
    name: '云南',
    value: 1.6
  },
  {
    name: '辽宁',
    value: 4.3
  },
  {
    name: '黑龙江',
    value: 4.1
  },
  {
    name: '湖南',
    value: 2.4
  },
  {
    name: '安徽',
    value: 3.3
  },
  {
    name: '山东',
    value: 3.0
  },
  {
    name: '新疆',
    value: 1
  },
  {
    name: '江苏',
    value: 3.9
  },
  {
    name: '浙江',
    value: 3.5
  },
  {
    name: '江西',
    value: 2.0
  },
  {
    name: '湖北',
    value: 2.1
  },
  {
    name: '广西',
    value: 3.0
  },
  {
    name: '甘肃',
    value: 1.2
  },
  {
    name: '山西',
    value: 3.2
  },
  {
    name: '内蒙古',
    value: 3.5
  },
  {
    name: '陕西',
    value: 2.5
  },
  {
    name: '吉林',
    value: 4.5
  },
  {
    name: '福建',
    value: 2.8
  },
  {
    name: '贵州',
    value: 1.8
  },
  {
    name: '广东',
    value: 3.7
  },
  {
    name: '青海',
    value: 0.6
  },
  {
    name: '西藏',
    value: 0.4
  },
  {
    name: '四川',
    value: 3.3
  },
  {
    name: '宁夏',
    value: 0.8
  },
  {
    name: '海南',
    value: 1.9
  }
];

var yData3 = [];

data3.sort(function(o1, o2) {
  if (isNaN(o1.value) || o1.value == null) return -1;
  if (isNaN(o2.value) || o2.value == null) return 1;
  return o1.value - o2.value;
});

for (var i = 0; i < data3.length; i++) {
  yData3.push(data3[i].name);
}
var option3 = {
  tooltip: {
    show: true,
    formatter: function(params) {
      return params.name + '：' + params.data['value'] + '%'
    },
  },
  visualMap: {
    type: 'continuous',
    text: ['', ''],
    showLabel: true,
    seriesIndex: [0],
    min: 0,
    max: 10,
    inRange: {
      color: ['#EFFBFB', '#C0EEEE', '#88DFE0', '#51D0D1', '#2DC6C8', ]
    },
    textStyle: {
      color: '#000'
    },
    bottom: 30,
    left: 'left',
  },
  grid: {
    right: 10,
    top: 80,
    bottom: 30,
    width: '15%'
  },
  xAxis: {
    type: 'value',
    scale: true,
    position: 'top',
    splitNumber: 1,
    boundaryGap: false,
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 2,
      textStyle: {
        color: '#aaa'
      }
    }
  },
  yAxis: {
    type: 'category',
    nameGap: 16,
    axisLine: {
      show: false,
      lineStyle: {
        color: '#ddd'
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#ddd'
      }
    },
    axisLabel: {
      interval: 0,
      textStyle: {
        color: '#999'
      }
    },
    data: yData3
  },
  geo: {
    roam: true,
    map: 'china',
    left: 'left',
    right: '20%',
    layoutSize: '50%',
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      emphasis: {
        areaColor: '#fff464'
      }
    },
    regions: [{
      name: '南海诸岛',
      value: 0,
      itemStyle: {
        normal: {
          opacity: 0,
          label: {
            show: false
          }
        }
      }
    }],
  },
  series: [{
    name: 'mapSer',
    type: 'map',
    roam: false,
    geoIndex: 0,
    label: {
      show: false,
    },
    data: data3
  }, {
    name: 'barSer',
    type: 'bar',
    roam: false,
    visualMap: false,
    zlevel: 2,
    barMaxWidth: 20,
    itemStyle: {
      normal: {
        color: '#2DC6C8'
      },
      emphasis: {
        color: "#009397"
      }
    },
    label: {
      normal: {
        show: false,
        position: 'right',
        offset: [0, 10]
      },
      emphasis: {
        show: true,
        position: 'right',
        offset: [10, 0]
      }
    },
    data: data3
  }]
};


//延时加载图表，保证交互动作顺滑
setTimeout(function() {
  chart3.setOption(option3);
}, 1400);

//机型比例
var chart4 = echarts.init(document.getElementById('chart4'), 'macarons');

var option4 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a}{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: '5%',
    top: "10%",
    data: ['C1_1冷凝风机过载', 'C1_1压缩机高压', 'C1_2压缩机高压', 'C1_3冷凝风机过载', 'C1_3压缩机高压', 'C1_4压缩机高压', 'C1_5压缩机高压', 'C1_6压缩机高压', 'C1_7压缩机高压', 'C1_8压缩机高压']
  },
  series: [{
    name: '',
    type: 'pie',
    radius: ['40%', '60%'],
    center: ['70%', '65%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: false,
        position: 'center'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '13',
          fontWeight: 'lighter'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    data: [{
        value:35,
        name: 'C1_1冷凝风机过载'
      },
      {
        value:20,
        name: 'C1_1压缩机高压'
      },
      {
        value: 14,
        name: 'C1_2压缩机高压'
      },
      {
        value: 11,
        name: 'C1_3冷凝风机过载'
      },
      {
        value:20,
        name: 'C1_3压缩机高压'
      },
      {
        value:4,
        name: 'C1_4压缩机高压'
      },
      {
        value:5,
        name: 'C1_5压缩机高压'
      },
      {
        value:8,
        name: 'C1_6压缩机高压'
      },
      {
        value:24,
        name: 'C1_7压缩机高压'
      },
      {
        value:10,
        name: 'C1_8压缩机高压'
      }
    ]
  }]
};
//延时加载图表，保证交互动作顺滑
setTimeout(function() {
  chart4.setOption(option4);
}, 800);

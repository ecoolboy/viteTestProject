<template>
    <div class="container">
        <div id="example"
             :style="{ width: '300px', height: '300px' }"></div>
        <div id="nanDing"
             :style="{ width: '500px', height: '300px' }"></div>
        <div id="mapping"
             :style="{ width: '600px', height: '300px' }"></div>

        <div id="rowAndColumn"
             :style="{ width: '600px', height: '700px' }"></div>

        <div id="transform"
             :style="{ width: '600px', height: '700px' }"></div>
        <div id="3dChart"
             :style="{ width: '500px', height: '400px'}"></div>
    </div>
</template>

<script>
    //导入echart主题
    import data from '../../assets/echartTheme/infographic.json'
    import {defineComponent, onMounted, inject} from 'vue'
    import * as echarts from 'echarts'

    export default defineComponent({
        name: "echart",
        setup() {
            let eCharts = inject('eCharts')
            let barData1 = [5, 20, 36, 10, 10, 20]
            let barData2 = [{value:5,itemStyle:{color:'#dd6b66'}},{value:20,itemStyle:{color:'#759aa0'}}, {value:36,itemStyle:{color:'#e69d87'}}, {value:10,itemStyle:{color:'#8dc1a9'}}, {value:10,itemStyle:{color:'#ea7e53'}}, {value:20,itemStyle:{color:'#eedd78'}}]
            eCharts.registerTheme('infographic', data)
            onMounted(()=>{
                let example = eCharts.init(document.getElementById('example'));
                //显示loading图标
                example.showLoading()
                example.setOption({
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量1',
                        type: 'bar',
                        data: null,
                    },{
                        name:'销量2',
                        type:'line',
                        data:null
                    }]
                });

                let nanDing = eCharts.init(document.getElementById('nanDing'), 'infographic')
                nanDing.setOption({
                    title: {
                        text: '南丁格尔图'
                    },
                    backgroundColor: '#2c343c',
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    },
                    grid: {
                        left: '20% '
                    },
                    roseType: 'angle',//设置为南丁格尔图，不设置是饼图
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',//半径
                        data: [
                            {value: 235, name: '视频广告'},
                            {value: 274, name: '联盟广告'},
                            {value: 310, name: '邮件营销'},
                            {value: 335, name: '直接访问'},
                            {value: 400, name: '搜索引擎'}
                        ]
                    }]
                })

                let rowAndColumn=eCharts.init(document.getElementById('rowAndColumn'),'infographic')
                rowAndColumn.setOption({
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: [
                            ['product', '2012', '2013', '2014', '2015'],
                            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
                        ]
                    },
                    xAxis: [
                        {type: 'category', gridIndex: 0},
                        {type: 'category', gridIndex: 1}
                    ],
                    yAxis: [
                        {gridIndex: 0},
                        {gridIndex: 1}
                    ],
                    grid: [
                        {bottom: '55%'},
                        {top: '55%'}
                    ],
                    series: [
                        // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
                        {type: 'bar', seriesLayoutBy: 'row'},
                        {type: 'bar', seriesLayoutBy: 'row'},
                        {type: 'bar', seriesLayoutBy: 'row'},
                        // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
                        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
                    ]
                })

                let mapping=eCharts.init(document.getElementById('mapping'))
                mapping.setOption({
                    title:{
                      text:'数据到图形的映射'
                    },
                    tooltip:{},
                    dataset:{
                        source:[
                            ['score', 'amount', 'product'],
                            [89.3, 58212, 'Matcha Latte'],
                            [57.1, 78254, 'Milk Tea'],
                            [74.4, 41032, 'Cheese Cocoa'],
                            [50.1, 12755, 'Cheese Brownie'],
                            [89.7, 20145, 'Matcha Cocoa'],
                            [68.1, 79146, 'Tea'],
                            [19.6, 91852, 'Orange Juice'],
                            [10.6, 101852, 'Lemon Juice'],
                            [32.7, 20112, 'Walnut Brownie']
                        ]
                    },
                    xAxis:{},
                    yAxis:{type:'category'},
                    series:[
                        {
                            type:'bar',
                            encode: {
                                // 使用 “名为 product 的维度” 和 “名为 score 的维度” 的值在 tooltip 中显示
                                tooltip: ['product', 'score'],
                                // 使用 “维度 1” 和 “维度 3” 的维度名连起来作为系列名。（有时候名字比较长，这可以避免在 series.name 重复输入这些名字）
                                seriesName: [1,3],
                                // 表示使用 “维度2” 中的值作为 id。这在使用 setOption 动态更新数据时有用处，可以使新老数据用 id 对应起来，从而能够产生合适的数据更新动画。
                                itemId: 2,
                                // 指定数据项的名称使用 “维度3” 在饼图等图表中有用，可以使这个名字显示在图例（legend）中。
                                itemName: 3
                            }
                        }
                    ]
                })

                let transform=eCharts.init(document.getElementById('transform'))
                transform.setOption({
                    dataset: [{
                        source: [
                            ['Product', 'Sales', 'Price', 'Year'],
                            ['Cake', 123, 32, 2011],
                            ['Latte', 231, 14, 2011],
                            ['Tofu', 235, 5, 2011],
                            ['Milk Tee', 341, 25, 2011],
                            ['Porridge', 122, 29, 2011],
                            ['Cake', 143, 30, 2012],
                            ['Latte', 201, 19, 2012],
                            ['Tofu', 255, 7, 2012],
                            ['Milk Tee', 241, 27, 2012],
                            ['Porridge', 102, 34, 2012],
                            ['Cake', 153, 28, 2013],
                            ['Latte', 181, 21, 2013],
                            ['Tofu', 395, 4, 2013],
                            ['Milk Tee', 281, 31, 2013],
                            ['Porridge', 92, 39, 2013],
                            ['Cake', 223, 29, 2014],
                            ['Latte', 211, 17, 2014],
                            ['Tofu', 345, 3, 2014],
                            ['Milk Tee', 211, 35, 2014],
                            ['Porridge', 72, 24, 2014]
                        ]
                    }, {
                        transform: {
                            type: 'filter',
                            config: { dimension: 'Year', '=': 2011 }
                            // 这个筛选条件表示，遍历数据，筛选出维度（ dimension ）
                            // 'Year' 上值为 2011 的所有数据项。
                        }
                    }],
                    series: {
                        type: 'pie',
                        datasetIndex: 1
                    }
                })

                let testData=[
                    ["Income", "Life Expectancy", "Population", "Country", "Year"],
                    [815, 34.05, 351014, "Australia", 1800],
                    [1314, 39, 645526, "Canada", 1800],
                    [985, 32, 321675013, "China", 1800],
                    [864, 32.2, 345043, "Cuba", 1800],
                    [1244, 36.5731262, 977662, "Finland", 1800],
                ]
                let Charts3d=eCharts.init(document.getElementById('3dChart'))
                Charts3d.setOption({
                    grid3D: {
                        viewControl: {
                            // 使用正交投影。
                            projection: 'orthographic'
                        }
                    },
                    xAxis3D: {
                        // 因为 x 轴和 y 轴都是类目数据，所以需要设置 type: 'category' 保证正确显示数据。
                        type: 'category'
                    },
                    yAxis3D: {
                        type: 'log'
                    },
                    zAxis3D: {},
                    visualMap: {
                        calculable: true,
                        max: 100,
                        // 维度的名字默认就是表头的属性名
                        dimension: 'Life Expectancy',
                        inRange: {
                            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                        }
                    },
                    dataset: {
                        source: testData
                    },
                    series: [
                        {
                            type: 'scatter3D',
                            symbolSize: 5,
                            encode: {
                                // 维度的名字默认就是表头的属性名
                                x: 'Country',
                                y: 'Population',
                                z: 'Income',
                                tooltip: [0, 1, 2, 3, 4]
                            }
                        }
                    ]
                })
                window.onresize = function () {//自适应大小
                    example.resize()
                    nanDing.resize()
                    rowAndColumn.resize()
                    transform.resize()
                };
                //异步加载柱形图数据
                setTimeout(() => {
                    example.setOption({
                        series: [{
                            data: barData2
                        },{
                            data:barData2
                        }]
                    })
                    example.hideLoading()
                }, 1000)
            })
        }
    })
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .container > div {
        border: 1px solid white;
        margin: 20px;
        padding: 10px;
    }
    .container > div:last-child{
        border: 1px solid red;
        margin-bottom: 100px;
    }
</style>

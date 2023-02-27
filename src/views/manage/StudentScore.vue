<template>
  <a-row>
    <a-col xl="10" :lg="24">
      <a-card title="学生成绩">
        <div class="demo-dropdown-wrap">
          <a-dropdown-button @click="handleButtonClick" placement="bottomRight">
            请选择考试
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1"> 电信1801班 电路理论 </a-menu-item>
                <a-menu-item key="2"> 通信1805班 信号与系统 </a-menu-item>
                <a-menu-item key="3"> 电信1803班 模拟电子技术 </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown-button>
        </div>
      </a-card>
    </a-col>
    <a-col xl="10" :lg="24">
      <div ref="chartRef" :style="{ height, width }"></div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
  // import { UserOutlined, DownOutlined } from '/@/ant-design/icons-vue';
  import { defineComponent, PropType, ref, Ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  //import { getLineData } from './data';

  export default defineComponent({
    props: {
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: 'calc(100vh - 78px)',
      },
    },
    setup() {
      const handleButtonClick = (e: Event) => {
        console.log('click left button', e);
      };
      const handleMenuClick = (e: Event) => {
        console.log('click', e);
      };
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>);
      //const { barData, lineData, category } = getLineData;
      onMounted(() => {
        setOptions({
          /*backgroundColor: '#0f375f',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#333',
              },
            },
          },
          legend: {
            data: ['line', 'bar'],
            textStyle: {
              color: '#ccc',
            },
          },*/
          width: 600,
          height: 400,
          xAxis: {
            data: ['低于60', '60~69', '70~79', '80~89', '90~100'],
            axisLine: {
              lineStyle: {
                //color: '#ccc',
              },
            },
          },
          yAxis: {
            //splitLine: { show: false },
            axisLine: {
              lineStyle: {
                //color: '#ccc',
              },
            },
          },
          series: [
            {
              name: 'bar',
              type: 'bar',
              barWidth: 70,
              itemStyle: {
                borderRadius: 5,
                /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#14c8d4' },
                  { offset: 1, color: '#43eec6' },
                ]),*/
              },
              data: [0, 4, 10, 22, 14],
            },
          ],
        });
      });
      return { chartRef, handleButtonClick, handleMenuClick };
    },
  });
</script>
<style lang="less" scoped>
  .demo-dropdown-wrap :deep(.ant-dropdown-button) {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>

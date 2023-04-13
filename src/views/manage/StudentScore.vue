<template>
  <a-row>
    <a-col xl="10" :lg="24">
      <a-card title="学生成绩分析 - ECharts">
        <div class="dropdown-wrap">
          <a-space>请选择课程:</a-space
          ><a-space
            ><a-select
              ref="select"
              v-model:value="label"
              style="width: 240px"
              :options="options"
              :defaultOpen="true"
              @change="handleChange"
          /></a-space>
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
  import { defHttp } from '/@/utils/http/axios';

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
      let set_op: (o, c?: boolean) => void = null;
      let lec_info: any = null;
      let lec_selected = -1;
      const options = ref<Array<any>>();

      defHttp.post<any>({ url: '/lecture/list', params: null }).then((r) => {
        options.value = [];
        r.forEach((item) => {
          options.value.push({ label: item.name + '(' + item.klass + ')', value: item.id });
        });
        lec_info = r;
        console.log(r);
      });
      const handleChange = (e, _b) => {
        lec_selected = e;
        defHttp
          .get<any>({ url: '/score/list', params: { lecture_id: lec_selected } })
          .then((r: any) => {
            let score_data = [0, 0, 0, 0, 0];
            r.forEach((item) => {
              if (item.score != null) {
                const score = parseInt(item.score);
                if (score < 60) score_data[0]++;
                else if (score < 70) score_data[1]++;
                else if (score < 80) score_data[2]++;
                else if (score < 90) score_data[3]++;
                else score_data[4]++;
              }
            });
            set_op({
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
                  data: score_data,
                },
              ],
            });
          })
          .catch((e) => console.log(e));
      };
      const handleButtonClick = (e: Event) => {
        console.log('click left button', e);
      };
      const handleMenuClick = (e: Event) => {
        console.log('click', e);
      };
      const chartRef = ref<HTMLDivElement | null>(null);
      //const { barData, lineData, category } = getLineData;
      onMounted(() => {
        const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>);
        set_op = setOptions;
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
      return { chartRef, handleButtonClick, handleMenuClick, handleChange, options };
    },
  });
</script>
<style lang="less" scoped>
  .demo-dropdown-wrap :deep(.ant-dropdown-button) {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>

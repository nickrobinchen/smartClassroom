<template>
  <a-row align="middle">
    <a-col xl="10" :lg="8" :offset="2">
      <div ref="chartRef" :style="{ height, width }"></div>
    </a-col>
    <a-col xl="10" :lg="14">
      <a-typography-title :level="3"
        >签到时间：{{ timeDuration[0] }}~{{ timeDuration[1] }}</a-typography-title
      >
      <p
        >已签到人员：<span v-for="i in signedList" :key="i">{{ i + ' ' }}</span></p
      >
      <p
        >未签到人员：<span v-for="i in unsignedList" :key="i">{{ i + ' ' }}</span></p
      >
    </a-col>
  </a-row>
</template>

<script lang="ts">
  // import { UserOutlined, DownOutlined } from '/@/ant-design/icons-vue';
  import { defineComponent, PropType, ref, Ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  //import { getLineData } from './data';

  let set_op: (o, c?: boolean) => void = () => {};
  const options = ref<any>();
  export default defineComponent({
    props: {
      signedNum: {
        type: Number,
        default: 0,
      },
      totalNum: {
        type: Number,
        default: 0,
      },
      signedList: {
        type: Array<String>,
        default: [],
      },
      unsignedList: {
        type: Array<String>,
        default: [],
      },
      timeDuration: {
        type: Array<String>,
        default: ['2023年4月13日 19:30', '19:35'],
      },
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: '300px', //'calc(100vh - 78px)',
      },
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      //const { barData, lineData, category } = getLineData;
      onMounted(() => {
        const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>);
        set_op = setOptions;
      });
      return { chartRef, options };
    },
    watch: {
      signedNum(_n, _o) {
        console.log(this.$props);
        set_op({
          series: [
            {
              type: 'pie',
              data: [
                {
                  value: this.signedNum,
                  name: '已签到',
                },
                {
                  value: this.totalNum - this.signedNum,
                  name: '未签到',
                },
              ],
            },
          ],
        });
      },
    },

    mounted() {
      options.value = {
        series: [
          {
            type: 'pie',
            data: [
              {
                value: this.signedNum,
                name: '已签到',
              },
              {
                value: this.totalNum - this.signedNum,
                name: '未签到',
              },
            ],
          },
        ],
      };
      set_op(options.value);
    },
  });
</script>
<style lang="less" scoped>
  .demo-dropdown-wrap :deep(.ant-dropdown-button) {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>

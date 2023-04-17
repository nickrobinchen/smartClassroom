<template>
  <PageWrapper :contentBackground="false">
    <template #headerContent>
      <div class="lg:flex">
        <Avatar :src="userinfo.avatar || headerImg" :size="72" class="!mx-auto !block" />
        <div class="md:ml-6 flex flex-col md:mt-0 mt-2">
          <h1 class="md:text-lg text-md">欢迎您, 管理员：{{ userinfo.realName }}！</h1>
          <span class="text-secondary"> 今日晴，20℃ - 32℃！ </span>
        </div>
        <div class="flex flex-1 justify-end md:mt-0 mt-4">
          <div class="flex flex-col justify-center text-right">
            <span class="text-secondary"> </span>
            <span class="text-2xl"></span>
          </div>

          <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
            <span class="text-secondary"> </span>
            <span class="text-2xl"></span>
          </div>
          <div class="flex flex-col justify-center text-right md:mr-10 mr-4">
            <span class="text-secondary"> </span>
            <span class="text-2xl"></span>
          </div>
        </div>
      </div>
    </template>
    <template #default>
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="1" header="班级信息概览">
          <div
            ref="chartRef"
            style="
               {
                width: 500px;
                height: 500px;
              }
            "
          ></div>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="教师教学关系概览">
          <div
            ref="relationChartRef"
            style="
               {
                width: 500px;
                height: 500px;
              }
            "
          ></div>
        </a-collapse-panel>
        <!--a-collapse-panel key="2" header="平台使用数据">
          <p>您有{{ detailedInfo.lessonInfo.length }}门课程：</p>
          <div v-for="lesson in detailedInfo.lessonInfo" :key="lesson.lesson_id">
            <p>课程名称：{{ lesson.course_name }}</p>
            <p>教师名称：{{ lesson.detail.teacher_name }}</p>
            <p>开课日期：{{ lesson.detail.start_date }}至{{ lesson.detail.end_date }}</p>
            <p>上课时间：{{ lesson.detail.weekDay }}</p></div
          >
        </a-collapse-panel-->
      </a-collapse>
    </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { computed, onMounted, ref } from 'vue';
  import { Avatar } from 'ant-design-vue';
  import { useUserStore } from '/@/store/modules/user';
  import headerImg from '/@/assets/images/header.jpg';
  import { defHttp } from '/@/utils/http/axios';

  import { useECharts } from '/@/hooks/web/useECharts';
  import { GraphChart } from 'echarts/charts';
  const chartRef = ref<HTMLDivElement | null>(null);
  const relationChartRef = ref<HTMLDivElement | null>(null);
  //const { barData, lineData, category } = getLineData;
  onMounted(() => {
    const { setOptions, echarts } = useECharts(relationChartRef as Ref<HTMLDivElement>);
    const { setOptions: setStuOptions, echarts: e_1 } = useECharts(chartRef as Ref<HTMLDivElement>);
    echarts.use([GraphChart]);
    //set_op = setOptions;
    defHttp.get<any>({ url: '/manager/basicData' }).then((result) => {
      console.log(result);
      const relationOption = {
        /*title: {
          text: '课程教授关系',
        },*/
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 100,
            roam: false,
            label: {
              show: true,
              fontSize: 18,
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 12],
            data: result.teacher_class_relation.nodes /*[
              {
                name: 'Node 1',
                x: 300,
                y: 300,
              },
              {
                name: 'Node 2',
                x: 800,
                y: 300,
              },
              {
                name: 'Node 3',
                x: 550,
                y: 100,
              },
              {
                name: 'Node 4',
                x: 550,
                y: 500,
              },
            ]*/,
            // links: [],
            links: result.teacher_class_relation.links /*[
              {
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                  show: true,
                },
                lineStyle: {
                  width: 5,
                  curveness: 0.2,
                },
              },
              {
                source: 'Node 2',
                target: 'Node 1',
                label: {
                  show: true,
                },
                lineStyle: {
                  curveness: 0.2,
                },
              },
              {
                source: 'Node 1',
                target: 'Node 3',
              },
              {
                source: 'Node 2',
                target: 'Node 3',
              },
              {
                source: 'Node 2',
                target: 'Node 4',
              },
              {
                source: 'Node 1',
                target: 'Node 4',
              },
            ]*/,
            edgeLabel: {
              //边的设置
              show: true,
              position: 'middle',
              fontSize: 16,
              formatter: (params) => {
                return params.data.relation.name;
              },
            },
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      };
      setStuOptions({
        series: [
          {
            type: 'pie',
            data: result.student.classes.map((item) => {
              return { name: item.name + ':' + item.count + '人', value: item.count };
            }),
          },
        ],
      });
      setOptions(relationOption);
    });
  });
  const basicData = ref<any>({
    student: { grade: '', class_name: '', college: '' },
    lessonInfo: [],
  });

  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
  const activeKey = ref(['1', '2']);
</script>

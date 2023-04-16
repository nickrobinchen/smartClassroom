<template
  ><a-calendar v-model:value="value">
    <template #dateCellRender="{ current: value }">
      <ul class="events">
        <li v-for="item in getListData(value)" :key="item.name">
          <a-badge :color="item.color" :text="item.name" />
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current: value }"> </template>
  </a-calendar>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import moment, { Moment } from 'moment';
  import { defHttp } from '/@/utils/http/axios';

  let lessons: any[] = [];
  export default defineComponent({
    setup() {
      const value = ref<Moment>();
      defHttp.get<any>({ url: '/student/fullInfo' }).then((r) => {
        r.lessonInfo.forEach((item) => {
          lessons.push({
            begin: moment(item.detail.start_date, 'YYYY-MM-DD'),
            end: moment(item.detail.end_date, 'YYYY-MM-DD'),
            weekdays: item.detail.weekday_array,
            name: item.course_name,
            //class: item.klass,
          });
        });
        console.log(lessons);
      });
      const colors = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime',
      ];

      const getListData = (v: Moment) => {
        let listData: any[] = [];
        lessons.forEach((item, index) => {
          //console.log(moment(v.toDate()).isBetween(item.begin, item.end, null, '[]'));
          if (moment(v.toDate()).isBetween(item.begin, item.end, null, '[]')) {
            if (item.weekdays.includes(v.day())) {
              listData.push({
                color: colors[(index + v.day()) % colors.length],
                name: item.name,
              });
            }
          }
        });
        // switch (value.date()) {
        //   case 8:
        //     listData = [
        //       { type: 'warning', content: 'This is warning event.' },
        //       { type: 'success', content: 'This is usual event.' },
        //     ];
        //     break;
        //   case 10:
        //     listData = [
        //       { type: 'warning', content: 'This is warning event.' },
        //       { type: 'success', content: 'This is usual event.' },
        //       { type: 'error', content: 'This is error event.' },
        //     ];
        //     break;
        //   case 15:
        //     listData = [
        //       { type: 'warning', content: 'This is warning event' },
        //       { type: 'success', content: 'This is very long usual event。。....' },
        //       { type: 'error', content: 'This is error event 1.' },
        //       { type: 'error', content: 'This is error event 2.' },
        //       { type: 'error', content: 'This is error event 3.' },
        //       { type: 'error', content: 'This is error event 4.' },
        //     ];
        //     break;
        //   default:
        // }
        return listData || [];
      };

      const getMonthData = (value: Moment) => {
        if (value.month() === 8) {
          return 1394;
        }
      };

      return {
        value,
        getListData,
        getMonthData,
      };
    },
  });
</script>
<style scoped>
  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .notes-month {
    text-align: center;
    font-size: 28px;
  }
  .notes-month section {
    font-size: 28px;
  }
</style>

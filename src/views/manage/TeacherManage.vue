<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';

  import { getTeacherListApi } from '/@/api/getTeacherList';
  export default defineComponent({
    components: { BasicTable, PageWrapper },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '教师管理',
        api: getTeacherListApi,
        columns: [
          {
            title: '教师姓名',
            dataIndex: 'name',
            width: 150,
            filters: [
              { text: 'Male', value: 'male' },
              { text: 'Female', value: 'female' },
            ],
          },
          {
            title: '住址',
            dataIndex: 'address',
          },
          {
            title: '工号',
<<<<<<< HEAD
            dataIndex: 'id',
=======
            dataIndex: 'account',
>>>>>>> b4506b6 (2023/4/1)
            width: 300,
          },
          {
            title: '联系电话',
            width: 400,
<<<<<<< HEAD
            dataIndex: 'telephone',
=======
            dataIndex: 'tel',
>>>>>>> b4506b6 (2023/4/1)
          },
        ],
        pagination: { pageSize: 10 },
      });
      function handleReloadCurrent() {
        reload();
      }

      function handleReload() {
        reload({
          page: 1,
        });
      }
      return {
        registerTable,
        handleReloadCurrent,
        handleReload,
      };
    },
  });
</script>

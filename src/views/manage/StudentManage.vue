<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
            :dropDownActions="[
              {
                label: '启用',
                popConfirm: {
                  title: '是否启用？',
                  confirm: handleOpen.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';

  import { getTeacherListApi } from '/@/api/getStudentList';
  export default defineComponent({
    components: { BasicTable, TableAction, PageWrapper },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '学生管理',
        api: getTeacherListApi,
        columns: [
          {
            title: '学生姓名',
            dataIndex: 'name',
            width: 150,
            filters: [
              { text: 'Male', value: 'male' },
              { text: 'Female', value: 'female' },
            ],
          },
          {
            title: '家庭地址',
            dataIndex: 'address',
          },
          {
            title: '学号',
            dataIndex: 'id',
            width: 300,
          },
          {
            title: '联系电话',
            width: 400,
            dataIndex: 'telephone',
          },
        ],
        pagination: { pageSize: 10 },
        actionColumn: {
          width: 160,
          title: '管理操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }
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
        handleDelete,
        handleOpen,
        handleReloadCurrent,
        handleReload,
      };
    },
  });
</script>

<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="addTeacher"> 添加教师 </a-button>
      </template>
    </BasicTable>
    <AddTeacherModel @register="register4" @ok="test" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns } from './tableData';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import AddTeacherModel from './modal/AddTeacherModal.vue';

  import { getTeacherListApi } from '/@/api/getTeacherList';

  export default defineComponent({
    components: { BasicTable, PageWrapper, AddTeacherModel },
    setup() {
      const [register4, { openModal: openModal4 }] = useModal();
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
            dataIndex: 'account',
            width: 300,
          },
          {
            title: '联系电话',
            width: 400,
            dataIndex: 'tel',
          },
        ],
        pagination: { pageSize: 10 },
      });
      function handleReloadCurrent() {
        reload();
      }

      function handleVisibleChange() {
        reload();
      }

      function handleReload() {
        reload({
          page: 1,
        });
      }
      function test(e) {
        console.log('?');
      }
      function addTeacher() {
        openModal4(true, {
          data: 'content',
          info: 'Info',
        });
      }
      return {
        registerTable,
        handleReloadCurrent,
        handleReload,
        addTeacher,
        register4,
        openModal4,
        test,
      };
    },
  });
</script>

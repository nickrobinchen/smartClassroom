<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="addTeacher"> 添加教师 </a-button>
        <a-button type="danger" @click="deleteTeacher"> 删除选中教师 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                icon: 'ic:outline-edit',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AddTeacherModal @register="register4" @ok="test" @visible-change="handleVisibleChange" />
    <EditTeacherModal @register="edit_register" @ok="test" @visible-change="handleVisibleChange" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, createVNode } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import AddTeacherModal from './modal/AddTeacherModal.vue';
  import EditTeacherModal from './modal/EditTeacherModal.vue';
  import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
  import { getTeacherListApi, deleteTeacherApi, DeleteTeacherParams } from '/@/api/teacherApi';
  import { Modal } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicTable, PageWrapper, AddTeacherModal, EditTeacherModal, TableAction },
    setup() {
      const [register4, { openModal: openModal4 }] = useModal();
      const [edit_register, { openModal: openEditModal }] = useModal();
      const [registerTable, { reload, getSelectRows }] = useTable({
        title: '教师管理',
        api: getTeacherListApi,
        rowSelection: {
          type: 'checkbox',
        },
        columns: [
          {
            title: '教师姓名',
            dataIndex: 'name',
            width: 120,
          },
          {
            title: '住址',
            dataIndex: 'address',
            width: 350,
          },
          {
            title: '工号',
            dataIndex: 'account',
            //width: 300,
          },
          {
            title: '联系电话',
            //width: 400,
            dataIndex: 'tel',
          },
          {
            title: '电子邮箱',
            width: 250,
            dataIndex: 'email',
          },
        ],
        actionColumn: {
          //width: 160,
          title: '管理操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
        pagination: { pageSize: 10 },
      });
      function handleReloadCurrent() {
        reload();
      }

      function handleVisibleChange() {
        setTimeout(() => {
          reload();
        }, 200);
      }

      function handleReload() {
        reload({
          page: 1,
        });
      }
      function deleteTeacher() {
        const selected = getSelectRows();
        console.log(selected);
        selected.forEach((s) => {
          const p: DeleteTeacherParams = { id: s.id };
          deleteTeacherApi(p);
        });
        setTimeout(() => {
          reload();
        }, 200);
      }
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
        Modal.confirm({
          title: () => '确定删除教师吗？',
          icon: () => createVNode(ExclamationCircleOutlined),
          content: () => '删除教师姓名：' + record.name,
          okText: () => 'Yes',
          okType: 'danger',
          cancelText: () => 'No',
          onOk() {
            const p: DeleteTeacherParams = { id: record.id };
            deleteTeacherApi(p);
            setTimeout(() => {
              reload();
            }, 200);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      function handleEdit(record: Recordable) {
        console.log('点击了修改', record);
        openEditModal(true, record);
      }
      function test(_e: any) {
        console.log('?');
      }
      function addTeacher() {
        openModal4(true);
      }
      return {
        registerTable,
        handleReloadCurrent,
        handleReload,
        addTeacher,
        register4,
        edit_register,
        handleEdit,
        openEditModal,
        handleDelete,
        openModal4,
        deleteTeacher,
        handleVisibleChange,
        test,
      };
    },
  });
</script>

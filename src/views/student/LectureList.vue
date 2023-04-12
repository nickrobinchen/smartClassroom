<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="addCourse"> 添加课程 </a-button>
        <a-button type="danger" @click="deleteSelected"> 删除选中课程 </a-button>
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
    <AddLectureModal @register="registerLM" />
    <AddCourseModal @register="register4" @ok="test" @visible-change="handleVisibleChange" />
    <EditCourseModal @register="edit_register" @ok="test" @visible-change="handleVisibleChange" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, createVNode } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  //import AddCourseModal from '../manage/modal/AddCourseModal.vue';
  import AddLectureModal from './modal/AddLectureModal.vue';
  //import EditCourseModal from '../manage/modal/EditCourseModal.vue';
  import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
  import { getCourseListApi, deleteCourseApi, DeleteCourseParams } from '/@/api/courseApi';
  import { Modal } from 'ant-design-vue';
  import { defHttp } from '/@/utils/http/axios';

  export default defineComponent({
    components: {
      BasicTable,
      PageWrapper,
      AddLectureModal,
      TableAction,
    },
    setup() {
      const teacher_id = 1;
      const [registerLM, { openModal: openModalLM }] = useModal();
      const [register4, { openModal: openModal4 }] = useModal();
      const [edit_register, { openModal: openEditModal }] = useModal();
      const [registerTable, { reload, getSelectRows }] = useTable({
        title: '我的课程',
        api: () => defHttp.post<any>({ url: '/lecture/list', params: null }) /*(): Promise<any> => {
          return defHttp.post<any>({ url: '/lecture/list', params: null });
          let result: Promise<any> = new Promise<null>(() => {
            console.log('Fetch course list error.');
          });
          defHttp.post<any>({ url: '/lecture/list', params: null }).then((r) => {
            console.log(r);
            result = r;
          });
          return result;
        }*/,
        rowSelection: {
          type: 'checkbox',
        },
        columns: [
          {
            title: '课程名称',
            dataIndex: 'name',
            //width: 350,
          },
          {
            title: '课程班级',
            dataIndex: 'klass',
            //width: 350,
          },
          {
            title: '课程时间',
            dataIndex: 'startAndEndDate',
            //width: 350,
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
      function deleteSelected() {
        const selected = getSelectRows();
        console.log(selected);
        selected.forEach((s) => {
          const p: DeleteCourseParams = { id: s.id };
          deleteCourseApi(p);
        });
        setTimeout(() => {
          reload();
        }, 200);
      }
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
        Modal.confirm({
          title: () => '确定删除课程吗？',
          icon: () => createVNode(ExclamationCircleOutlined),
          content: () => '删除课程名称：' + record.name,
          okText: () => 'Yes',
          okType: 'danger',
          cancelText: () => 'No',
          onOk() {
            const p: DeleteCourseParams = { id: record.id };
            deleteCourseApi(p);
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
      function addCourse() {
        openModalLM(true);
      }
      return {
        registerTable,
        handleReloadCurrent,
        handleReload,
        addCourse,
        register4,
        edit_register,
        openModalLM,
        registerLM,
        handleEdit,
        openEditModal,
        handleDelete,
        openModal4,
        deleteSelected,
        handleVisibleChange,
        test,
      };
    },
  });
</script>

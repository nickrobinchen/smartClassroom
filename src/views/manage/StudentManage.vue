<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable" :dataSource="data" :immediate="false">
      <template #toolbar>
        <a-cascader
          v-model:value="value"
          :options="options"
          placeholder="请选择班级"
          @change="refreshSelected"
        />
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                icon: 'ic:outline-edit',
                onClick: handleDelete.bind(null, record),
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
  </PageWrapper>
</template>
<script lang="ts">
  interface Option {
    value: string;
    label: string;
    children?: Option[];
  }
  interface Selection {
    class: string;
    college: string;
    grade: string;
  }
  let selected: Selection = { college: '', class: '', grade: '' };
  let options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { StudentListParams, studentListApi } from '/@/api/studentApi';
  import { defHttp } from '/@/utils/http/axios';
  export default defineComponent({
    components: { BasicTable, TableAction, PageWrapper },
    setup() {
      defHttp
        .get<Option[]>({
          url: '/student/classInfo', //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
          params: null,
          headers: {
            // @ts-ignore
            ignoreCancelToken: true,
          },
        })
        .then((o) => {
          console.log(o);
          options = o;
        });
      let data: any[] = [];

      studentListApi(undefined).then((r: any) => {
        console.log(r);
        data = r;
        console.log(data);
        setTimeout(() => {
          return;
        }, 100);
        setTableData(data);
      });
      const [registerTable, { reload, setTableData }] = useTable({
        title: '学生管理',
        //api: studentListApi,
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
          // {
          //   title: '家庭地址',
          //   dataIndex: 'address',
          // },
          {
            title: '学号',
            dataIndex: 'account',
          },
          {
            title: '联系电话',
            dataIndex: 'tel',
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

      function refreshSelected(value, _selectedOptions) {
        selected.college = value[0];
        selected.grade = value[1];
        selected.class = value[2];
        console.log(selected);

        const params: StudentListParams = {
          college: selected.college,
          grade: selected.grade,
          class: selected.class,
        };
        studentListApi(params)
          .then((r: any) => {
            console.log(r);
            data = r;
            console.log(data);
            setTimeout(() => {
              return;
            }, 100);
            setTableData(data);
          })
          .catch((e) => console.log(e));
      }
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
        value: ref<string[]>([]),
        options,
        data,
        registerTable,
        handleDelete,
        refreshSelected,
        handleOpen,
        handleReloadCurrent,
        handleReload,
      };
    },
  });
</script>

<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight>
    <a-page-header title="课程教学管理" subtitle="">
      <template #extra>
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
      </template>
      <template #footer>
        <a-tabs style="width: 1250px" @change="handleTabChange">
          <a-tab-pane key="1" tab="课程学生列表">
            <BasicTable
              rowKey="account"
              @register="registerTable"
              :dataSource="stu_data"
              :immediate="false"
            />
          </a-tab-pane>
          <a-tab-pane key="2" tab="课程签到管理">
            <a-row
              ><a-space>
                <a-button type="primary" :disabled="isSigningIn" @click="showSignInModal"
                  >开启签到</a-button
                >
                <a-button v-show="isSigningIn" danger @click="endSigningIn"
                  >提前结束签到</a-button
                ></a-space
              ></a-row
            >
            <a-divider />
            <a-row>
              <a-progress
                v-show="isSigningIn"
                type="circle"
                :align="center"
                :percent="defaultPercent"
                :format="showTimeRemaining"
              />
            </a-row>
            <a-modal v-model:visible="visible" title="开启签到" @ok="handleOk">
              <a-space
                ><span> &nbsp;&nbsp;签到开启时长：</span>
                <a-input-number
                  id="inputNumber"
                  v-model:value="value"
                  :key="key"
                  :defaultValue="10"
                  :size="20"
                  :min="1"
                  :max="60"
                /><span>分钟</span></a-space
              >
            </a-modal>
            <a-space />
            <a-row :gutter="16" v-show="isSigningIn">
              <a-col :span="2.5" v-for="item in data" :key="item.name">
                <a-card
                  style="background-color: #52c41a; border-radius: 12px"
                  :title="item.name"
                  :bordered="true"
                >
                  <p>{{ item.time }}</p>
                </a-card>
              </a-col>
            </a-row>
            <a-collapse v-model:activeKey="activeKey">
              <a-collapse-panel key="1" header="本次签到结果" :disabled="!signInFinished">
                <SignInResult
                  v-if="signInFinished"
                  :signed-num="signInInfo.signNum"
                  :total-num="signInInfo.totalNum"
                  :signed-list="signInInfo.sList"
                  :unsigned-list="signInInfo.uList"
                  :time-duration="signInInfo.timeDuration"
                />
              </a-collapse-panel>
              <a-collapse-panel key="2" header="历史签到记录">
                <SignInResult
                  v-for="item in prevSignIns"
                  :key="item.id"
                  :signed-num="item.signNum"
                  :total-num="item.totalNum"
                  :signed-list="item.sList"
                  :unsigned-list="item.uList"
                  :time-duration="item.timeDuration"
                />
              </a-collapse-panel>
            </a-collapse>
          </a-tab-pane>
          <a-tab-pane key="3" tab="课程分数管理">
            <BasicTable
              @register="registerScoreTable"
              @edit-end="handleEditEnd"
              @edit-cancel="handleEditCancel"
              :beforeEditSubmit="beforeEditSubmit"
              :immediate="false"
            />
          </a-tab-pane>
          <a-tab-pane key="4" tab="随机选人">
            <a-button type="primary" :disabled="isSigningIn" @click="showSignInModal"
              >随机抽选学生</a-button
            >
            <a-divider />
            <a-list :grid="{ gutter: 16, column: 10 }" :data-source="stu_data_i">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-card :title="item.name" />
                </a-list-item>
              </template>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </template>
    </a-page-header>
    <AddLectureModal @register="registerLM" />
    <AddCourseModal @register="register4" @ok="test" @visible-change="handleVisibleChange" />
    <EditCourseModal @register="edit_register" @ok="test" @visible-change="handleVisibleChange" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, createVNode, ref } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  //import AddCourseModal from '../manage/modal/AddCourseModal.vue';
  import AddLectureModal from './modal/AddLectureModal.vue';
  //import EditCourseModal from '../manage/modal/EditCourseModal.vue';
  import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
  import { deleteCourseApi, DeleteCourseParams } from '/@/api/courseApi';
  import { Modal } from 'ant-design-vue';
  import { defHttp } from '/@/utils/http/axios';
  import { onBeforeUnmount } from 'vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import SignInResult from './SignInResult.vue';
  interface SignInModel {
    uList: Array<string>;
    sList: Array<string>;
    signNum: number;
    totalNum: number;
    timeDuration: Array<string>;
  }
  let lec_info: any = null;
  let lec_selected = -1;
  let signIn_id = -1;
  let stu_data: any[] = [];

  let max_second = 180;
  let score_fetched = false;
  let current_second = 0;
  export default defineComponent({
    components: {
      BasicTable,
      PageWrapper,
      AddLectureModal,
      SignInResult,
    },
    setup() {
      const activeKey = ref('');
      const stu_data_i = [
        {
          account: 'U202220012',
          class: '电信2201班',
          email: 'chaofeng@example.net',
          id: 39,
          index: 1,
          klass_id: 3,
          name: '陈玉',
          tel: '13114161530',
        },
        {
          account: 'U202220013',
          class: '电信2201班',
          email: 'wei82@example.net',
          id: 40,
          index: 2,
          klass_id: 3,
          name: '魏雪梅',
          tel: '18612937066',
        },
        {
          account: 'U202220014',
          class: '电信2201班',
          email: 'leili@example.org',
          id: 41,
          index: 3,
          klass_id: 3,
          name: '胡浩',
          tel: '15798628437',
        },
        {
          account: 'U202220015',
          class: '电信2201班',
          email: 'xiuying52@example.com',
          id: 42,
          index: 4,
          klass_id: 3,
          name: '袁艳',
          tel: '15213723899',
        },
        {
          account: 'U202220016',
          class: '电信2201班',
          email: 'jxia@example.org',
          id: 43,
          index: 5,
          klass_id: 3,
          name: '吕俊',
          tel: '13772252084',
        },
        {
          account: 'U202220017',
          class: '电信2201班',
          email: 'junren@example.net',
          id: 44,
          index: 6,
          klass_id: 3,
          name: '庞桂荣',
          tel: '15090477990',
        },
        {
          account: 'U202220018',
          class: '电信2201班',
          email: 'chao01@example.com',
          id: 45,
          index: 7,
          klass_id: 3,
          name: '王丽娟',
          tel: '13969487739',
        },
        {
          account: 'U202220019',
          class: '电信2201班',
          email: 'eyu@example.com',
          id: 46,
          index: 8,
          klass_id: 3,
          name: '薛丽',
          tel: '14552460572',
        },
        {
          account: 'U202220020',
          class: '电信2201班',
          email: 'ggong@example.com',
          id: 47,
          index: 9,
          klass_id: 3,
          name: '马莹',
          tel: '13110849959',
        },
        {
          account: 'U202220021',
          class: '电信2201班',
          email: 'vye@example.org',
          id: 48,
          index: 10,
          klass_id: 3,
          name: '邱成',
          tel: '14506536740',
        },
        {
          account: 'U202220022',
          class: '电信2201班',
          email: 'fangna@example.com',
          id: 49,
          index: 11,
          klass_id: 3,
          name: '徐桂芳',
          tel: '18182687221',
        },
        {
          account: 'U202220023',
          class: '电信2201班',
          email: 'nyao@example.com',
          id: 50,
          index: 12,
          klass_id: 3,
          name: '刘秀英',
          tel: '18856630789',
        },
        {
          account: 'U202220025',
          class: '电信2201班',
          email: 'ufeng@example.net',
          id: 52,
          index: 13,
          klass_id: 3,
          name: '宋玉',
          tel: '13229827769',
        },
      ];
      const options = ref<Array<any>>([]);
      const isSigningIn = ref(false);
      const signInFinished = ref(false);
      const signInInfo = ref<SignInModel>({
        uList: [],
        sList: [],
        signNum: 0,
        totalNum: 0,
        timeDuration: ['', ''],
      });
      const prevSignIns = ref<SignInModel[]>([]);
      const data = ref<any[]>([]);
      const value = ref(3);
      let signin_data: any[] = [];
      const defaultPercent = ref<number>(0);
      const visible = ref<boolean>(false);
      console.log(this);
      defHttp.post<any>({ url: '/lecture/list', params: null }).then((r) => {
        options.value = [];
        r.forEach((item) => {
          options.value.push({ label: item.name + '(' + item.klass + ')', value: item.id });
        });
        lec_info = r;
      });
      let timer: NodeJS.Timer;
      let score_data: any[] = [];
      const [registerLM, { openModal: openModalLM }] = useModal();
      const [register4, { openModal: openModal4 }] = useModal();
      const [edit_register, { openModal: openEditModal }] = useModal();
      const [registerTable, { reload, getSelectRows, setTableData }] = useTable({
        //title: '我的课程',
        columns: [
          {
            title: '学生名称',
            dataIndex: 'name',
            //width: 350,
          },
          {
            title: '学生学号',
            dataIndex: 'account',
            //width: 350,
          },
        ],
        pagination: { pageSize: 10 },
      });
      const [registerScoreTable, { setTableData: setScoreTableData }] = useTable({
        //title: '我的课程',
        columns: [
          {
            title: '学生姓名',
            dataIndex: 'name',
            //width: 350,
          },
          {
            title: '课程分数',
            dataIndex: 'score',
            edit: true,
            editRule: async (text) => {
              if (isNaN(text)) return '请输入有效分数';
              try {
                const s = parseInt(text);
                if (s > 100 || s < 0) {
                  return '请输入有效分数';
                }
              } catch (e) {
                return '请输入有效分数';
              }
              return '';
            },
            width: 200,
          },
        ],
        pagination: { pageSize: 10 },
      });
      function showSignInModal() {
        if (lec_selected == -1) {
          return;
        }
        visible.value = true;
      }

      function handleOk() {
        startSigningIn(value.value);
        visible.value = false;
      }
      function handleTabChange(key: number) {
        if (key != 3 || lec_selected == -1 || score_fetched) return;
        console.log('tab3 clicked');
        defHttp
          .get<any>({ url: '/score/list', params: { lecture_id: lec_selected } })
          .then((r: any) => {
            score_data = [];
            r.forEach((item) => {
              score_data.push({
                name: item.name,
                id: item.id,
                score: item.score === null ? '暂未评分' : item.score.toString(),
              });
            });
            setScoreTableData(score_data);
            score_fetched = true;
          })
          .catch((e) => console.log(e));
      }
      function handleChange(e, _b) {
        lec_selected = e;
        let class_name = '';
        lec_info.forEach((i) => {
          if (i.id == e) {
            class_name = i.klass;
          }
        });
        defHttp
          .get<any>({ url: '/score/list', params: { lecture_id: lec_selected } })
          .then((r: any) => {
            score_data = [];
            r.forEach((item) => {
              score_data.push({
                name: item.name,
                id: item.id,
                score: item.score === null ? '暂未评分' : item.score.toString(),
              });
            });
            setScoreTableData(score_data);
            score_fetched = true;
          })
          .catch((e) => console.log(e));
        defHttp
          .get<any>({ url: '/signIn/prev', params: { lec_id: lec_selected } })
          .then((r: any) => {
            prevSignIns.value = [];

            r.forEach((i) => {
              let s_item: SignInModel = {
                signNum: i.signed_num,
                uList: i.unsigned_students,
                totalNum: i.total_num,
                timeDuration: [],
                sList: [],
              };
              s_item.sList = i.signed_students.map((i) => {
                return i.name;
              });
              const end = new Date(parseInt(i.end_time)).toLocaleTimeString();
              const begin = new Date(parseInt(i.start_time)).toLocaleString();
              s_item.timeDuration = [begin, end];
              prevSignIns.value.push(s_item);
            });
          })
          .catch((e) => console.log(e));
        defHttp
          .post<any>({ url: '/student/list', params: { class: class_name } })
          .then((r: any) => {
            console.log(r);
            stu_data = r;
            setTimeout(() => {
              return;
            }, 100);
            setTableData(stu_data);
          })
          .catch((e) => console.log(e));
      }
      function selectFirst(e) {
        console.log('first');
        console.log(e);
      }

      function startSigningIn(min: number) {
        clearInterval(timer);

        max_second = min * 60;
        current_second = 0;
        defHttp
          .post<number>({
            url: '/signIn/add',
            params: {
              lec_id: lec_selected,
              end_time: new Date().getTime() + max_second * 1000,
              start_time: new Date().getTime(),
            },
          })
          .then((r: number) => {
            console.log(r);
            signIn_id = r;
          })
          .catch((e) => console.log(e));
        isSigningIn.value = true;
        timer = setInterval(() => {
          current_second++;
          defaultPercent.value = (current_second / max_second) * 100;
          defHttp
            .get<any>({
              url: '/signIn/getInfo',
              params: { id: signIn_id },
            })
            .then((r) => {
              console.log(r);
              if (r.ended) {
              } else {
                signin_data = [];
                data.value = [];
                //text = '';
                r.data.forEach((item) => {
                  //text = text + ' ' + item.name;
                  data.value.push({
                    name: item.name,
                    time: new Date(parseInt(item.signin_time)).toLocaleTimeString(),
                  });
                });
              }
              if (max_second <= current_second) {
                clearInterval(timer);
                isSigningIn.value = false;
                console.log('finished');
                defHttp
                  .get<any>({ url: '/signIn/end', params: { signin_id: signIn_id } })
                  .then((r) => {
                    console.log(r);
                    afterSigningIn(r);
                  });
              }
            });
        }, 1000);
      }

      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
        return false;
      }
      function handleVisibleChange() {
        setTimeout(() => {
          reload();
        }, 200);
      }

      function beforeEditSubmit({ record, index, key, value }) {
        console.log('单元格数据正在准备提交', { record, index, key, value });

        const { createMessage } = useMessage();
        createMessage.loading({
          content: `正在更新成绩`,
          key: '_save_fake_data',
          duration: 0,
        });
        return new Promise((resolve) => {
          defHttp
            .post<any>({
              url: '/score/edit',
              params: {
                score: record.score,
                lecture_id: lec_selected,
                student_id: score_data[index].id,
              },
            })
            .then((r) => {
              createMessage.success({
                content: '成功更新' + record.name + '成绩',
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(true);
            })
            .catch((e) => {
              createMessage.error({
                content: '保存失败:' + e.toString(),
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(false);
            });
        });
      }

      function handleEditCancel() {
        console.log('cancel');
      }
      function showTimeRemaining(percent: number) {
        const remain = (1 - percent / 100) * max_second;
        const min = parseInt(remain / 60).toString();
        const sec = parseInt(remain % 60).toString();

        return (min.length == 1 ? '0' : '') + min + ':' + (sec.length == 1 ? '0' : '') + sec;
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
      onBeforeUnmount(() => {
        clearInterval(timer);
      });

      function afterSigningIn(r: any, endTime?: number) {
        activeKey.value = '1';
        signInInfo.value.signNum = r.data.signed_num;
        signInInfo.value.totalNum = r.data.total_num;
        signInInfo.value.sList = r.data.signed_students.map((i) => {
          return i.name;
        });
        const end =
          typeof endTime === 'undefined'
            ? new Date(parseInt(r.data.end_time)).toLocaleTimeString()
            : new Date(endTime).toLocaleTimeString();
        const begin = new Date(parseInt(r.data.start_time)).toLocaleString();
        console.log([begin, end]);
        signInInfo.value.timeDuration = [begin, end];
        signInInfo.value.uList = r.data.unsigned_students;
        signInFinished.value = true;
      }
      function endSigningIn() {
        clearInterval(timer);
        isSigningIn.value = false;
        defHttp.get<any>({ url: '/signIn/end', params: { signin_id: signIn_id } }).then((r) => {
          console.log(r);
          afterSigningIn(r, new Date().getTime());
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
        defaultPercent,
        prevSignIns,
        value,
        signInInfo,
        signin_data,
        stu_data_i,
        showTimeRemaining,
        selectFirst,
        registerTable,
        endSigningIn,
        showSignInModal,
        addCourse,
        register4,
        edit_register,
        handleEditEnd,
        handleEditCancel,
        beforeEditSubmit,
        openModalLM,
        options,
        handleOk,
        registerLM,
        handleEdit,
        openEditModal,
        handleDelete,
        openModal4,
        registerScoreTable,
        handleChange,
        deleteSelected,
        handleVisibleChange,
        test,
        data,
        handleTabChange,
        visible,
        isSigningIn,
        signInFinished,
        activeKey,
        key: 0,
      };
    },
  });
</script>
<style lang="less">
  .ant-card-body {
    padding: 15px;
  }
</style>

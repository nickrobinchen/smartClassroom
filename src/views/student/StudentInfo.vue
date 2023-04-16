<template>
  <PageWrapper :contentBackground="false">
    <template #headerContent>
      <div class="lg:flex">
        <Avatar :src="userinfo.avatar || headerImg" :size="72" class="!mx-auto !block" />
        <div class="md:ml-6 flex flex-col md:mt-0 mt-2">
          <h1 class="md:text-lg text-md">欢迎您, 学生：{{ userinfo.realName }}！</h1>
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
        <a-collapse-panel key="1" header="我的个人信息">
          <p>学院：{{ detailedInfo.classInfo.college }}</p>
          <p>年级：{{ detailedInfo.classInfo.grade }}</p>
          <p>班级：{{ detailedInfo.classInfo.class_name }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="我的课程">
          <p>您有{{ detailedInfo.lessonInfo.length }}门课程：</p>
          <div v-for="lesson in detailedInfo.lessonInfo" :key="lesson.lesson_id">
            <p>课程名称：{{ lesson.course_name }}</p>
            <p>教师名称：{{ lesson.detail.teacher_name }}</p>
            <p>开课日期：{{ lesson.detail.start_date }}至{{ lesson.detail.end_date }}</p>
            <p>上课时间：{{ lesson.detail.weekDay }}</p></div
          >
        </a-collapse-panel>
        <!--a-collapse-panel key="3" header="This is panel header 3" disabled>
          <p>{{ text }}</p>
        </a-collapse-panel-->
      </a-collapse>
    </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { computed, ref } from 'vue';
  import { Avatar } from 'ant-design-vue';
  import { useUserStore } from '/@/store/modules/user';
  import headerImg from '/@/assets/images/header.jpg';
  import { defHttp } from '/@/utils/http/axios';
  const detailedInfo = ref<any>({
    classInfo: { grade: '', class_name: '', college: '' },
    lessonInfo: [],
  });
  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
  defHttp.get({ url: '/student/fullInfo' }).then((r) => {
    console.log(r);
    detailedInfo.value = r;
  });
  const activeKey = ref(['1', '2']);
</script>

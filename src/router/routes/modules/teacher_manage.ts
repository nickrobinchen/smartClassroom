import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const teacherpanel: AppRouteModule = {
  path: '/teacherpanel',
  name: 'teacherpanel',
  component: LAYOUT,
  redirect: '/teacherpanel/showscore',
  meta: {
    orderNo: 100010,
    icon: 'ion:layers-outline',
    title: '教学管理（教师身份）',
  },
  children: [
    {
      path: 'showscore',
      name: 'showscore',
      component: () => import('/@/views/manage/StudentScore.vue'),
      meta: {
        title: '学生成绩分析',
      },
    },
    {
      path: 'lecturemanage',
      name: 'lecturemanage',
      component: () => import('/@/views/teacher/lecturemanage.vue'),
      meta: {
        title: '教师课程管理',
      },
    },
    {
      path: 'studentlist',
      name: 'studentlist',
      //component: () => import('/@/views/manage/StudentManage.vue'),
      meta: {
        title: '学生名单查询',
      },
    },
  ],
};

export default teacherpanel;

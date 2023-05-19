import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { RoleEnum } from '/@/enums/roleEnum';

const studentpanel: AppRouteModule = {
  path: '/studentpanel',
  name: 'studentpanel',
  component: LAYOUT,
  redirect: '/studentpanel/personal_info',
  meta: {
    orderNo: 100010,
    icon: 'ion:layers-outline',
    title: '学习管理（学生身份）',
    roles: [RoleEnum.STUDENT],
  },
  children: [
    {
      path: 'personal_info',
      name: 'personal_info',
      component: () => import('/@/views/student/StudentInfo.vue'),
      meta: {
        title: '我的个人信息',
      },
    },
    {
      path: 'lecturelist_stu',
      name: 'lecturelist',
      component: () => import('/@/views/student/StudentCalendar.vue'),
      meta: {
        title: '我的课表',
      },
    },
    {
      path: 'discussion',
      name: 'discussion',
      component: () => import('/@/views/student/Discussion.vue'),
      meta: {
        title: '参与课堂讨论',
      },
    },
    {
      path: 'lecturemanage',
      name: 'lecturemanage',
      component: () => import('/@/views/student/LearningManage.vue'),
      meta: {
        title: '课程学习管理',
      },
    },
  ],
};

export default studentpanel;

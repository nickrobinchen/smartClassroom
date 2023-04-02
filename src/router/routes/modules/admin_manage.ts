import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const adminmanage: AppRouteModule = {
  path: '/adminmanage',
  name: 'adminmanage',
  component: LAYOUT,
  redirect: '/adminmanage/teachermanage',
  meta: {
    orderNo: 100000,
    icon: 'ion:layers-outline',
    title: '用户管理（管理员身份）',
  },
  children: [
    {
      path: 'teachermanage',
      name: 'teachermanage',
      component: () => import('/@/views/manage/TeacherManage.vue'),
      meta: {
        title: '教师管理',
      },
    },
    {
      path: 'studentmanage',
      name: 'studentmanage',
      component: () => import('/@/views/manage/StudentManage.vue'),
      meta: {
        title: '学生管理',
      },
    },
    {
      path: 'coursemanage',
      name: 'coursemanage',
      component: () => import('/@/views/manage/CourseManage.vue'),
      meta: {
        title: '课程管理',
      },
    },
  ],
};

export default adminmanage;

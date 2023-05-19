import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { RoleEnum } from '/@/enums/roleEnum';

const adminmanage: AppRouteModule = {
  path: '/adminmanage',
  name: 'adminmanage',
  component: LAYOUT,
  redirect: '/adminmanage/homePage',
  meta: {
    orderNo: 100000,
    icon: 'ion:layers-outline',
    title: '用户管理（管理员身份）',
    roles: [RoleEnum.ADMIN],
  },
  children: [
    {
      path: 'homePage',
      name: 'homePage',
      component: () => import('/@/views/manage/ManagerHome.vue'),
      meta: {
        title: '管理员主页',
      },
    },
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
    {
      path: 'devicemanage',
      name: 'devicemanage',
      component: () => import('/@/views/manage/DeviceManage.vue'),
      meta: {
        title: '智慧教室设备控制',
      },
    },
  ],
};

export default adminmanage;

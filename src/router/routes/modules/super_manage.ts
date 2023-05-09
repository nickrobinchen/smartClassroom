import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { RoleEnum } from '/@/enums/roleEnum';

const adminmanage: AppRouteModule = {
  path: '/supermanage',
  name: 'adminmanage',
  component: LAYOUT,
  redirect: '/supermanage/managermanage',
  meta: {
    orderNo: 100000,
    icon: 'ion:layers-outline',
    title: '超级管理员管理',
    roles: [RoleEnum.SUPER],
  },
  children: [
    {
      path: 'managermanage',
      name: 'managermanage',
      component: () => import('/@/views/superadmin/ManagerManage.vue'),
      meta: {
        title: '管理员成员管理',
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
  ],
};

export default adminmanage;

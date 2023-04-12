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
    //roles: [RoleEnum.STUDENT, RoleEnum.SUPER],
  },
  children: [
    {
      path: 'personal_info',
      name: 'personal_info',
      component: () => import('/@/views/manage/StudentScore.vue'),
      meta: {
        title: '我的个人信息',
      },
    },
    {
      path: 'lecturelist_stu',
      name: 'lecturelist',
      component: () => import('/@/views/student/LectureList.vue'),
      meta: {
        title: '我的课程',
      },
    },
    {
      path: 'lecturemanage',
      name: 'lecturemanage',
      component: () => import('/@/views/student/LectureManage.vue'),
      meta: {
        title: '课程学习管理',
      },
    },
  ],
};

export default studentpanel;

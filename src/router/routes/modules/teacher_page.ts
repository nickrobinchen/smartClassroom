import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { RoleEnum } from '/@/enums/roleEnum';

const teacherpanel: AppRouteModule = {
  path: '/teacherpanel',
  name: 'teacherpanel',
  component: LAYOUT,
  redirect: '/teacherpanel/showscore',
  meta: {
    orderNo: 100010,
    roles: [RoleEnum.SUPER, RoleEnum.TEACHER],
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
      path: 'teachercalendar',
      name: 'teachercalendar',
      component: () => import('/@/views/teacher/TeacherCalendar.vue'),
      meta: {
        title: '教师课表',
      },
    },
    {
      path: 'lecturelist',
      name: 'lecturelist',
      component: () => import('/@/views/teacher/LectureList.vue'),
      meta: {
        title: '我的课程',
      },
    },
    {
      path: 'lecturemanage',
      name: 'lecturemanage',
      component: () => import('/@/views/teacher/LectureManage.vue'),
      meta: {
        title: '课程管理',
      },
    },
  ],
};

export default teacherpanel;

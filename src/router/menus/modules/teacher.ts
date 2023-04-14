import type { MenuModule } from '/@/router/types';
const teacher_menu: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/teacherpanel',
    name: '教学管理（教师身份）',
    children: [
      {
        path: 'showscore',
        name: '学生成绩分析',
      },
      {
        path: 'teachercalendar',
        name: '教师课表',
      },
      {
        path: 'lecturelist',
        name: '教师课程列表',
      },
      {
        path: 'lecturemanage',
        name: '教师教学管理',
      },
    ],
  },
};
export default teacher_menu;

import type { MenuModule } from '/@/router/types';
const student_menu: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/studentpanel',
    name: '学生学习管理',
    children: [
      {
        path: 'personal_info',
        name: '学生个人信息',
      },
      {
        path: 'lecturelist_stu',
        name: '我的课表',
      },
      {
        path: 'lecturemanage',
        name: '学习管理',
      },
    ],
  },
};

export default student_menu;

import type { MenuModule } from '/@/router/types';
const student_menu: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/studentpanel',
    name: 'studentpanel',
    children: [
      {
        path: 'personal_info',
        name: 'personal_info',
      },
      {
        path: 'lecturelist_stu',
        name: 'lecturelist',
      },
      {
        path: 'lecturemanage',
        name: 'lecturemanage',
      },
    ],
  },
};

export default student_menu;

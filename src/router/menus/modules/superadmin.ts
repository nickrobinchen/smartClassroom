import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const admin_menu: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/supermanage',
    name: '超级管理员管理（',
    children: [
      {
        path: 'managermanage',
        name: '管理员成员管理',
      },
      {
        path: 'teachermanage',
        name: '教师管理',
      },
      {
        path: 'studentmanage',
        name: '学生管理',
      },
      {
        path: 'coursemanage',
        name: '课程管理',
      },
    ],
  },
};
export default admin_menu;

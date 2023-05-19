import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const admin_menu: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/adminmanage',
    name: '教学管理（管理员身份）',
    children: [
      {
        path: 'homePage',
        name: '管理员主页',
      },
      {
        path: 'devicemanage',
        name: '教室设备控制',
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

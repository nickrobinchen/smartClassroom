import { defHttp } from '/@/utils/http/axios';
import { TeacherListParams, TeacherListGetResultModel } from './model/teacherModel';

enum Api {
<<<<<<< HEAD
  TEACHER_LIST = '/getTeacherList',
=======
  TEACHER_LIST = '/teacher/list', //'/teacher/list',
>>>>>>> b4506b6 (2023/4/1)
}

/**
 * @description: Get sample list value
 */

export const getTeacherListApi = (params: TeacherListParams) =>
  defHttp.get<TeacherListGetResultModel>({
<<<<<<< HEAD
    url: Api.TEACHER_LIST,
    params,
=======
    url: Api.TEACHER_LIST, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params: null,
>>>>>>> b4506b6 (2023/4/1)
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

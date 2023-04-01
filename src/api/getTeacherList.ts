import { defHttp } from '/@/utils/http/axios';
import { TeacherListParams, TeacherListGetResultModel } from './model/teacherModel';

enum Api {
  TEACHER_LIST = '/teacher/list', //'/teacher/list',
}

/**
 * @description: Get sample list value
 */

export const getTeacherListApi = (params: TeacherListParams) =>
  defHttp.get<TeacherListGetResultModel>({
    url: Api.TEACHER_LIST, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params: null,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

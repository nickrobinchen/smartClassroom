import { defHttp } from '/@/utils/http/axios';
import { TeacherListParams, TeacherListGetResultModel } from './model/teacherModel';

enum Api {
  TEACHER_LIST = '/getTeacherList',
}

/**
 * @description: Get sample list value
 */

export const getTeacherListApi = (params: TeacherListParams) =>
  defHttp.get<TeacherListGetResultModel>({
    url: Api.TEACHER_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

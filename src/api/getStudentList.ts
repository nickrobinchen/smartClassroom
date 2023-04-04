import { defHttp } from '/@/utils/http/axios';
import { StudentListParams, StudentListGetResultModel } from './model/studentModel';

enum Api {
  STUDENT_LIST = '/student/list',
}

/**
 * @description: Get sample list value
 */

export const studentListApi = (params: StudentListParams) =>
  defHttp.post<StudentListGetResultModel>({
    url: Api.STUDENT_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

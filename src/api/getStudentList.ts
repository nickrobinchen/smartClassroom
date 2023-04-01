import { defHttp } from '/@/utils/http/axios';
import { StudentListParams, StudentListGetResultModel } from './model/studentModel';

enum Api {
  STUDENT_LIST = '/getStudentList',
}

/**
 * @description: Get sample list value
 */

export const getTeacherListApi = (params: StudentListParams) =>
  defHttp.get<StudentListGetResultModel>({
    url: Api.STUDENT_LIST,
    params: null,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

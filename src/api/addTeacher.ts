import { defHttp } from '/@/utils/http/axios';
import { TeacherListParams, TeacherListGetResultModel } from './model/teacherModel';

import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type AddTeacherParams = {
  address: string;
  name: string;
  account: string;
  tel: string;
  email: string;
}; // BasicPageParams;

export interface TeacherListItem {
  id: number;
  address: string;
  name: string;
  account: string;
  tel: string;
  email: string;
  password: string;
}

/**
 * @description: Request list return value
 */
export type TeacherListGetResultModel = BasicFetchResult<TeacherListItem>;

enum Api {
  ADD_TEACHER = '/teacher/add', //'/teacher/list',
}

/**
 * @description: Get sample list value
 */

export const addTeacherApi = (params: AddTeacherParams) =>
  defHttp.post<Object>({
    url: Api.ADD_TEACHER, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

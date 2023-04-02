import { defHttp } from '/@/utils/http/axios';
import { BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type TeacherListParams = null; // BasicPageParams;

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

enum Api {
  TEACHER_LIST = '/teacher/list', //'/teacher/list',
  ADD_TEACHER = '/teacher/add', //'/teacher/list',
  DELETE_TEACHER = '/teacher/delete', //'/teacher/list',
  EDIT_TEACHER = '/teacher/edit', //'/teacher/list',
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

export type DeleteTeacherParams = {
  id: number;
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
export type EditTeacherParams = {
  id: number;
  address: string;
  name: string;
  account: string;
  tel: string;
  email: string;
};

export const deleteTeacherApi = (params: DeleteTeacherParams) =>
  defHttp.post<Object>({
    url: Api.DELETE_TEACHER, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
export const editTeacherApi = (params: EditTeacherParams) =>
  defHttp.post<Object>({
    url: Api.EDIT_TEACHER, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const getTeacherListApi = (_params: TeacherListParams) =>
  defHttp.get<TeacherListGetResultModel>({
    url: Api.TEACHER_LIST, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params: null,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

import { defHttp } from '/@/utils/http/axios';
import { BasicFetchResult } from '/@/api/model/baseModel';
export type CourseListParams = null;

export interface CourseListItem {
  id: number;
  address: string;
  name: string;
  account: string;
  tel: string;
  email: string;
  password: string;
}

export type CourseListGetResultModel = BasicFetchResult<CourseListItem>;
export type AddCourseParams = {
  name: string;
  grade: string;
}; // BasicPageParams;

enum Api {
  COURSE_LIST = '/course/list', //'/teacher/list',
  ADD_COURSE = '/course/add', //'/teacher/list',
  DELETE_COURSE = '/course/delete', //'/teacher/list',
  EDIT_COURSE = '/course/edit', //'/teacher/list',
}

export const addCourseApi = (params: AddCourseParams) =>
  defHttp.post<Object>({
    url: Api.ADD_COURSE, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export type DeleteCourseParams = {
  id: number;
}; // BasicPageParams;

export type EditCourseParams = {
  id: number;
  name: string;
  grade: string;
};

export const deleteCourseApi = (params: DeleteCourseParams) =>
  defHttp.post<Object>({
    url: Api.DELETE_COURSE, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
export const editCourseApi = (params: EditCourseParams) =>
  defHttp.post<Object>({
    url: Api.EDIT_COURSE, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const getCourseListApi = (_params: CourseListParams) =>
  defHttp.get<CourseListGetResultModel>({
    url: Api.COURSE_LIST, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
    params: null,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

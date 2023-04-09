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
export type StudentListParams = {
  college: string;
  grade: string;
  class_id: string;
}; // BasicPageParams;

enum Api {
  STUDENT_LIST = '/student/list', //'/teacher/list',
  ADD_COURSE = '/course/add', //'/teacher/list',
  DELETE_COURSE = '/course/delete', //'/teacher/list',
  EDIT_COURSE = '/course/edit', //'/teacher/list',
}

export const studentListApi = (params?: StudentListParams) =>
  defHttp.post<Object>({
    url: Api.STUDENT_LIST, //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
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

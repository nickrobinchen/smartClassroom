import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
<<<<<<< HEAD
export type TeacherListParams = BasicPageParams;

export interface TeacherListItem {
  id: string;
  address: string;
  name: string;
=======
export type TeacherListParams = null; // BasicPageParams;

export interface TeacherListItem {
  id: number;
  address: string;
  name: string;
  account: string;
  tel: string;
  email: string;
  password: string;
>>>>>>> b4506b6 (2023/4/1)
}

/**
 * @description: Request list return value
 */
export type TeacherListGetResultModel = BasicFetchResult<TeacherListItem>;

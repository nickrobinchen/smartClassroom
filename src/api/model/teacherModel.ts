import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
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

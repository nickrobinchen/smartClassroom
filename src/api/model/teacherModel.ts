import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type TeacherListParams = BasicPageParams;

export interface TeacherListItem {
  id: string;
  address: string;
  name: string;
}

/**
 * @description: Request list return value
 */
export type TeacherListGetResultModel = BasicFetchResult<TeacherListItem>;

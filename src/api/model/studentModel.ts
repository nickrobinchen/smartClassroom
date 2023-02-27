import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type StudentListParams = BasicPageParams;

export interface StudentListItem {
  id: string;
  address: string;
  name: string;
}

/**
 * @description: Request list return value
 */
export type StudentListGetResultModel = BasicFetchResult<StudentListItem>;

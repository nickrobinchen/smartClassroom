import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { resultPageSuccess } from './_util';

function getRandomPics(count = 10): string[] {
  const arr: string[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()));
  }
  return arr;
}

const teacherList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      //id: `${index}`,
      id: 'T' + Random.natural(2010, 2022) + Random.natural(10000, 20000),
      address: '@county(true)',
      name: '@cname()',
      name1: '@cname()',
      name2: '@cname()',
      name3: '@cname()',
      name4: '@cname()',
      name5: '@cname()',
      name6: '@cname()',
      name7: '@cname()',
      name8: '@cname()',
      radio1: `选项${index + 1}`,
      radio2: `选项${index + 1}`,
      radio3: `选项${index + 1}`,
      telephone: '1' + Random.natural(1000000009, 9999999999),
      avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      'no|100000-10000000': 100000,
      'status|1': ['normal', 'enable', 'disable'],
    });
  }
  console.log(result);
  return result;
})();
const studentList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      //id: `${index}`,
      id: 'U' + Random.natural(2019, 2022) + Random.natural(10000, 20000),
      address: '@county(true)',
      name: '@cname()',
      name1: '@cname()',
      name2: '@cname()',
      name3: '@cname()',
      name4: '@cname()',
      name5: '@cname()',
      name6: '@cname()',
      name7: '@cname()',
      name8: '@cname()',
      radio1: `选项${index + 1}`,
      radio2: `选项${index + 1}`,
      radio3: `选项${index + 1}`,
      telephone: '1' + Random.natural(1000000009, 9999999999),
      avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
      imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      'no|100000-10000000': 100000,
      'status|1': ['normal', 'enable', 'disable'],
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/getTeacherList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      console.log(resultPageSuccess(page, pageSize, teacherList));
      return resultPageSuccess(page, pageSize, teacherList);
    },
  },
  {
    url: '/basic-api/getStudentList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, studentList);
    },
  },
] as MockMethod[];

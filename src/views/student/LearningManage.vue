<template>
  <a-button type="primary" @click="signIn" style="margin-top: 40px; margin-left: 40px"
    >立即签到</a-button
  > </template
><script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { defHttp } from '/@/utils/http/axios';
  import { notification } from 'ant-design-vue';

  export default defineComponent({
    setup() {
      const signIn = (_e: Event) => {
        defHttp.post<any>({ url: '/signIn/student' }).then((results) => {
          results.forEach((result) => {
            notification[result.type || 'error']({
              message: result.message || '签到出错',
              description: result.description || '未知错误',
            });
          });
        });
      };
      return {
        signIn,
      };
    },
  });
</script>

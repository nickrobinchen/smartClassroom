<template>
  <PageWrapper>
    <a-page-header title="智慧教室设备控制" subtitle="">
      <template #extra>
        <a-space>请选择教室:</a-space
        ><a-space
          ><a-select ref="select" v-model:value="label" style="width: 240px" :defaultOpen="true"
            ><a-select-item value="A301教室">数据结构</a-select-item></a-select
          ></a-space
        >
      </template>
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card :title="item.title"
              >电源控制：<a-switch v-model:checked="item.checked"
            /></a-card>
          </a-list-item>
        </template>
      </a-list>
    </a-page-header>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { PageWrapper } from '/@/components/Page';
  export default defineComponent({
    components: { PageWrapper },
    setup() {
      const checked = ref<boolean>(false);
      const data: any[] = [
        {
          title: '电源总闸',
          checked: true,
        },
        {
          title: '投影仪',
          checked: false,
        },
        {
          title: '智慧白班',
          checked: true,
        },
        {
          title: '教室光源',
          checked: true,
        },
        {
          title: '音像采集系统',
          checked: false,
        },
      ];

      return {
        data,
        checked,
      };
    },
  });
</script>

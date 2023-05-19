<template>
  <PageWrapper>
    <a-page-header title="课堂讨论" subtitle="">
      <template #extra>
        <a-space>请选择课程:</a-space
        ><a-space
          ><a-select ref="select" v-model:value="label" style="width: 240px" :defaultOpen="true"
            ><a-select-item value="数据结构">数据结构</a-select-item></a-select
          ></a-space
        >
      </template>
      <a-list
        v-if="comments.length"
        :data-source="comments"
        :header="`共有${comments.length}条讨论`"
        item-layout="horizontal"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-comment
              :author="item.author"
              :avatar="item.avatar"
              :content="item.content"
              :datetime="item.datetime"
            />
          </a-list-item>
        </template>
      </a-list>
      <a-comment>
        <template #avatar>
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="郝帅"
          />
        </template>
        <template #content>
          <a-form-item>
            <a-textarea :rows="4" v-model:value="value" />
          </a-form-item>
          <a-form-item>
            <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
              发表讨论信息
            </a-button>
          </a-form-item>
        </template>
      </a-comment>
    </a-page-header>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import moment from 'moment';

  import { PageWrapper } from '/@/components/Page';
  type Comment = Record<string, string>;

  export default defineComponent({
    components: { PageWrapper },
    setup() {
      const comments = ref<Comment[]>([]);
      const submitting = ref<boolean>(false);
      const value = ref<string>('');
      comments.value.push({
        author: '郝帅',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: '因此我觉得应该这么处理',
        datetime: moment().fromNow(),
      });
      comments.value.push({
        author: '李一',
        avatar: '/@/assets/images/header.jpg',
        content: '我认为你说的非常有道理！',
        datetime: moment().fromNow(),
      });
      const handleSubmit = () => {
        if (!value.value) {
          return;
        }

        submitting.value = true;

        setTimeout(() => {
          submitting.value = false;
          comments.value = [
            {
              author: '郝帅',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: value.value,
              datetime: moment().fromNow(),
            },
            ...comments.value,
          ];
          value.value = '';
        }, 1000);
      };

      return {
        comments,
        submitting,
        value,
        handleSubmit,
      };
    },
  });
</script>

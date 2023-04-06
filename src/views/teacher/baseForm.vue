<template>
  <BasicModal v-bind="$attrs" @register="register" title="添加课程">
    <div class="pt-3px pr-3px">
      <BasicForm @register="register" />
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { BasicModal, useModalInner } from '/@/components/Modal';

  const schemas: FormSchema[] = [
    {
      component: 'Select',
      label: '请选择课程',
      field: '_select_course',
      colProps: {
        span: 24,
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
      itemProps: {
        labelCol: {},
        wrapperCol: {},
        labelAlign: 'right',
      },
    },
    {
      component: 'Select',
      label: '请选择班级',
      field: '_select_class',
      colProps: {
        span: 24,
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'RangePicker',
      label: '开课时间',
      field: '_range_picker_13',
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: ['开始日期', '结束日期'],
      },
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'RadioGroup',
      label: '单选框-组',
      field: '_radio_group_21',
      colProps: {
        span: 24,
      },
      componentProps: {
        options: [
          {
            label: '星期一',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
          {
            label: '选项3',
            value: '3',
          },
          {
            label: '选项4',
            value: '4',
          },
        ],
      },
      itemProps: {
        labelCol: {},
        wrapperCol: {},
        labelAlign: 'right',
      },
    },
  ];

  const [register] = useForm({
    schemas,
  });
</script>

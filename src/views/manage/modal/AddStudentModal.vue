<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="添加学生"
    @visible-change="handleVisibleChange"
    @ok="handleAdd"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { defHttp } from '/@/utils/http/axios';

  //姓名 工号 联系电话 地址 邮箱
  const rules = {
    name: [
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
    date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change',
      },
    ],
    resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
    desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
  };
  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'Input',
      label: '姓名',
      required: true,
      colProps: {
        span: 20,
      },
      //defaultValue: '111',
    },
    {
      field: 'account',
      component: 'Input',
      label: '学号',
      required: true,
      colProps: {
        span: 20,
      },
    },
    {
      component: 'Select',
      label: '学生班级',
      field: 'student_class',
      required: true,
      colProps: {
        span: 20,
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
      field: 'tel',
      component: 'Input',
      label: '联系电话',
      //required: true,
      colProps: {
        span: 20,
      },
    },
    {
      field: 'email',
      component: 'Input',
      //required: true,
      label: '邮箱',
      colProps: {
        span: 20,
      },
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const modelRef = ref({});
      const valid = true;
      const [registerForm, { getFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });
      const [register, { setModalProps }] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      function onDataReceive(data) {
        console.log('Data Received', data);
        // 方式1;
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });

        // // 方式2
        //modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        let options: any[] = [];
        defHttp.get({ url: '/student/classInfo' }).then((result) => {
          result.forEach((college) => {
            college.children.forEach((grade) => {
              grade.children.forEach((_class) => {
                options.push(_class);
              });
            });
          });

          updateSchema({
            field: 'student_class',
            componentProps: {
              options: options,
            },
          });
        });
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      function handleAdd(e: Event) {
        validate()
          .then(() => {
            var formData = getFieldsValue();
            console.log(formData);
            defHttp.post({ url: '/student/add', params: formData });
            //emit('posted', e);
            setModalProps({ visible: false });
          })
          .catch((error) => {
            console.log('error', error);
            //alid = false;
          });
        if (!valid) {
          return;
        }
      }
      return { register, schemas, registerForm, model: modelRef, handleVisibleChange, handleAdd };
    },
  });
</script>

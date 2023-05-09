<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="添加管理员"
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
  import { useMessage } from '/@/hooks/web/useMessage';

  // const rules = {
  //   name: [
  //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
  //     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  //   ],
  //   region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
  //   date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
  //   type: [
  //     {
  //       type: 'array',
  //       required: true,
  //       message: 'Please select at least one activity type',
  //       trigger: 'change',
  //     },
  //   ],
  //   resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
  //   desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
  // };

  const { createMessage } = useMessage();
  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'Input',
      label: '管理员姓名',
      required: true,
      colProps: {
        span: 20,
      },
      //defaultValue: '111',
    },
    {
      field: 'account',
      component: 'Input',
      label: '管理员账号',
      rules: [
        {
          type: 'regexp',
          pattern: RegExp('M.*'),
          message: '管理员账号格式不正确，必须以M开头！',
          trigger: 'blur',
        },
      ],
      required: true,
      colProps: {
        span: 20,
      },
    },
    {
      field: 'password',
      component: 'Input',
      label: '管理员密码',
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
      const [
        registerForm,
        {
          getFieldsValue,
          validate,
          // setFieldsValue,
          // setProps
        },
      ] = useForm({
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
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      function handleAdd(_e: Event) {
        validate()
          .then(() => {
            var formData = getFieldsValue();
            if (formData.account[0] != 'M') {
              createMessage.error('管理员账号格式不正确，必须以M开头！');
              return;
            }
            defHttp.post<any>({
              url: '/manager/add',
              params: {
                name: formData.name,
                account: formData.account,
                password: formData.password,
              },
            });
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

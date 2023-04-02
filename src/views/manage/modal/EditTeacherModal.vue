<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="修改教师"
    @visible-change="handleVisibleChange"
    @ok="handleEdit"
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
  import { EditTeacherParams, editTeacherApi } from '/@/api/teacherApi';

  let id = -1;
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
      label: '工号',
      required: true,
      colProps: {
        span: 20,
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
      field: 'address',
      component: 'Input',
      //required: true,
      label: '地址',
      colProps: {
        span: 20,
      },
    },
    {
      field: 'email',
      component: 'Input',
      // required: true,
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
      console.log(props);
      const valid = true;
      const [
        registerForm,
        {
          getFieldsValue,
          validate,
          setFieldsValue,
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
        id = data.id;
        // 方式1;

        setFieldsValue({
          name: data.name,
          tel: data.tel,
          account: data.account,
          address: data.address,
          email: data.email,
        });

        // // 方式2
        //modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      function handleEdit(e: Event) {
        validate()
          .then(() => {
            var formData = getFieldsValue();
            const params: EditTeacherParams = {
              name: formData.name,
              tel: formData.tel,
              account: formData.account,
              address: formData.address,
              email: formData.email,
              id: id,
            };
            editTeacherApi(params);
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
      return { register, schemas, registerForm, model: modelRef, handleVisibleChange, handleEdit };
    },
  });
</script>

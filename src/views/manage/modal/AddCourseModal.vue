<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="添加课程"
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
  import { AddCourseParams, addCourseApi } from '/@/api/courseApi';

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
  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'Input',
      label: '课程名称',
      required: true,
      colProps: {
        span: 20,
      },
      //defaultValue: '111',
    },
    {
      field: 'grade',
      component: 'Input',
      label: '课程年级',
      required: true,
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
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      function handleAdd(_e: Event) {
        validate()
          .then(() => {
            var formData = getFieldsValue();
            const params: AddCourseParams = {
              name: formData.name,
              grade: formData.grade,
            };
            addCourseApi(params);
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

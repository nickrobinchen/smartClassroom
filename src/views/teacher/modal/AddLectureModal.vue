<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="添加课程"
    :width="600"
    :minHeight="300"
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
  import { CourseListItem, getCourseListApi } from '/@/api/courseApi';
  import { defHttp } from '/@/utils/http/axios';
  const grade = ['大一', '大二', '大三', '大四'];
  const grade_name = ['22级', '21级', '20级', '19级'];
  let updated = false;
  let course_id: number;
  let courses: CourseListItem[];
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
      component: 'Select',
      label: '课程名称',
      field: 'select_course',
      colProps: {
        span: 24,
      },
      required: true,
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
      label: '上课班级',
      field: 'select_class',
      colProps: {
        span: 24,
      },

      componentProps: {
        disabled: true,
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
      required: true,
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'RangePicker',
      label: '开课时间',
      field: 'course_date',
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: ['开始日期', '结束日期'],
        format: 'YYYY/MM/DD',
        valueFormat: 'YYYY/MM/DD',
      },
      required: true,
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
    {
      component: 'CheckboxGroup',
      label: '周内上课时间',
      field: 'weekday',
      required: true,
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
            label: '星期二',
            value: '2',
          },
          {
            label: '星期三',
            value: '3',
          },
          {
            label: '星期四',
            value: '4',
          },
          {
            label: '星期五',
            value: '5',
          },
          {
            label: '星期六',
            value: '6',
          },
          {
            label: '星期日',
            value: '7',
          },
        ],
      },
      itemProps: {
        labelCol: {},
        wrapperCol: {},
      },
    },
  ];

  function getGradeByName(i: string) {
    return i == '22级'
      ? '大一'
      : i == '21级'
      ? '大二'
      : i == '20级'
      ? '大三'
      : i == '19级'
      ? '大四'
      : 'error';
  }

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
          updateSchema,
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
      function updateClass(id: number) {
        let opt: Array<any> = [];
        defHttp
          .get<any>({
            url: '/student/classInfo', //'http://localhost:5000/teacher/list', // Api.TEACHER_LIST,
            params: null,
            headers: {
              // @ts-ignore
              ignoreCancelToken: true,
            },
          })
          .then((result) => {
            for (var college of result) {
              for (var grade of college.children) {
                if (getGradeByName(grade.value) == courses[id].grade) {
                  grade.children.forEach((item, _index) => {
                    console.log(item);
                    opt.push({ label: item.label, value: item.value });
                  });
                }
              }
            }
            updateSchema({
              field: 'select_class',
              componentProps: {
                options: opt,
                disabled: false,
              },
            }).then(() => {
              console.log('done update class');
            });
          });
      }
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
        if (!updated) {
          let opt: any = [];
          getCourseListApi(null).then((result) => {
            courses = result.items;
            courses.forEach((item, index) => {
              console.log(item);

              opt.push({ label: item.name + '(' + item.grade + ')', value: index });
            });
            updateSchema({
              field: 'select_course',
              componentProps: {
                options: opt,

                onChange: (selected: number) => {
                  course_id = selected;
                  updateClass(selected);
                },
              },
            }).then(() => {
              updated = true;
            });
          });
        }
      }

      function handleAdd(_e: Event) {
        validate()
          .then(() => {
            var formData = getFieldsValue();
            console.log(formData);
            const params = {
              course: courses[formData.select_course].id,
              class: formData.select_class,
              weekDate: formData.weekday,
              startAndEndDate: formData.course_date,
            };
            defHttp.post<any>({ url: '/lecture/add', params: params }).then((e) => {
              console.log(e);
            });
            //addCourseApi(params);
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
      return {
        register,
        schemas,
        registerForm,
        model: modelRef,
        handleVisibleChange,
        handleAdd,
      };
    },
  });
</script>

<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">提交</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: {
	"schemas": [
		{
			"component": "Select",
			"label": "请选择课程",
			"field": "_select_course",
			"colProps": {
				"span": 24
			},
			"componentProps": {
				"options": [
					{
						"label": "选项1",
						"value": "1"
					},
					{
						"label": "选项2",
						"value": "2"
					}
				]
			},
			"itemProps": {
				"labelCol": {},
				"wrapperCol": {},
				"labelAlign": "right"
			}
		},
		{
			"component": "Select",
			"label": "请选择班级",
			"field": "_select_class",
			"colProps": {
				"span": 24
			},
			"componentProps": {
				"options": [
					{
						"label": "选项1",
						"value": "1"
					},
					{
						"label": "选项2",
						"value": "2"
					}
				]
			},
			"itemProps": {
				"labelCol": {},
				"wrapperCol": {}
			}
		},
		{
			"component": "RangePicker",
			"label": "开课时间",
			"field": "_range_picker_13",
			"colProps": {
				"span": 24
			},
			"componentProps": {
				"placeholder": [
					"开始日期",
					"结束日期"
				]
			},
			"itemProps": {
				"labelCol": {},
				"wrapperCol": {}
			}
		},
		{
			"component": "RadioGroup",
			"label": "单选框-组",
			"field": "_radio_group_21",
			"colProps": {
				"span": 24
			},
			"componentProps": {
				"options": [
					{
						"label": "星期一",
						"value": "1"
					},
					{
						"label": "选项2",
						"value": "2"
					},
					{
						"label": "选项3",
						"value": "3"
					},
					{
						"label": "选项4",
						"value": "4"
					}
				]
			},
			"itemProps": {
				"labelCol": {},
				"wrapperCol": {},
				"labelAlign": "right"
			}
		}
	],
	"layout": "horizontal",
	"labelLayout": "flex",
	"labelWidth": 100,
	"labelCol": {},
	"wrapperCol": {}
}
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
</script>
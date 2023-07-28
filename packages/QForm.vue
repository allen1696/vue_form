<template>
  <!-- v-bind="$attrs" v-on="$listeners" -->
  <!-- :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }" -->
<a-form-model  >
<slot></slot><button>btn</button>
</a-form-model>
</template>
<script>
export default{
    name: "QForm",
    props:  [{
    formName: {
      type: String,
      // required: true,
      default:'fform'
    }},
    {size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        // 这个值必须是这些之一
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    }},
    {labelAlign1:{
      type: String,
      default: 'right',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      },
    }}],

  computed: {
    getlabelalign(){
      // return this.labelAlign==="left"?"left":"right"
      return "left"
    }, 
    labelCol() {
      return { span: 4 };
    },
    wrapperCol() {
      return { span: 18 };
    },
    layoutStyle(){
      return "inline"
    }
  },
}
</script>
<style scoped>
.fm{
  color: red;
}
</style>
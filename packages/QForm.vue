<template>
<div id="form">
  <label class="formname">{{formName}}</label>
  <!-- v-bind="$attrs" v-on="$listeners" -->
<a-form-model 
  :label-align="getlabelalign"
  :label-col="{ span: 3 }" :wrapper-col="{ span: 18 }"
  layout="horizontal"
    >
    <slot></slot>
</a-form-model>
</div>
</template>
<script>
export default{
  inheritAttrs: false,
    name: "QForm",
    props: [ {
    formName: {
      type: String,
      // required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        // 这个值必须是这些之一
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
    labelAlign:{
      type: String,
      default: 'right',
      validator: function (value) {
        // 这个值必须是这些之一
        return ['left', 'right'].indexOf(value) !== -1
      },
    },
    
  }],
  computed: {
    getlabelalign(){
      return this.labelAlign==="left"?"left":"right"
    },
   
  },
}
</script>
<style scoped>
#form {
  display: flex;
  flex-direction: column;
  padding: 2% 2%;
  border: 1px solid blue;
}
.formname{
  margin-left: 45%;
  margin-bottom: 20px;
  font-size: 20px;
}
</style>
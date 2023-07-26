<template>
<div >
  <label class="formname">{{formName}}</label>
<a-form-model  v-bind="$attrs" v-on="$listeners" :style="formStyle"    >
    <slot></slot>
</a-form-model>
</div>
</template>
<script>
export default{
    name: "QForm",
    props: {
    formName: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        // 这个值必须是这些之一
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
    color:{
      type: String,
      default: '',

    },
  },
  computed: {
    formStyle() {
      switch (this.size) {
        case 'small':
          return { width: '100%' , color:this.color };
        case 'medium':
          return { width: '100%', color:this.color };
        case 'large':
          return { width: '100%', color:this.color};
        default:
          return {};
      }
    }, 
  },
}
</script>
<style scoped>
.form {
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
<template>
<div class="form" >
  <span class="formname">{{formStyle.formName}}</span>
  <a-divider v-if="formStyle.formName!==''" orientation="left"></a-divider>
    <a-form-model 
      ref="rform"
      v-bind="$attrs" v-on="$listeners"
      layout="vertical"
      :rules="rules"
        >
        <slot></slot>
    </a-form-model>
</div>
</template>
<script>
export default{
    name: "q-form-vertical",
    props: {
      formStyle: {
         type: Object,
         default:()=>{
           return{
            formName:'',
            layout:'vertical',
            labelAlign: 'left',
           }
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        // 这个值必须是这些之一
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
  },
  computed: {
    title(){
      return this.formStyle.title
    },
    layout(){
      return this.formStyle.layout
    },
    labelAlign(){
      return this.formStyle.layout==='vertical'?null:this.formStyle.labelAlign
    },
    wrappercol(){
      return this.formStyle.layout==='vertical'?null:this.formStyle.wrapper
    },
    labelcol(){
      return this.formStyle.layout==='vertical'?null:this.formStyle.label
    },
    rules(){
      return this.formStyle.rules
    },
  },
  methods:{
    submitForm() {
      console.log("submit");
      this.$refs['rform'].validate(valid => {
        if (!valid) return
      })
    },
    resetForm() {
      this.$refs['rform'].resetFields()
    },
  }
}
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 2% 2%;
  border: 1px solid rgb(168, 168, 168);
}
.formname{
  font-size: 18px;
}
</style>
<template>
  <div>
    <a-col :span="23">
    <a-form-model-item 
    v-bind="$attrs"
    v-on="$listeners"
    :prop="prop">
        <slot></slot>
    </a-form-model-item>
  </a-col>
    <a-col span="1"></a-col>
  </div>
</template>
<script>
export default{
    name: "q-form-item",
    props: {
    span: {
      type: String,
      default: 'whole',
      validator: function (value) {
        // 这个值必须是这些之一
        return ['whole', 'half'].indexOf(value) !== -1
      },
    },
    pop:{
      type: String,
      default: '',
    },
    
  },
  computed: {
    colSpan() {
      switch (this.span) {
        case 'whole':
          return 23;
        case 'half':
          return 11;
        default:
          return 23;
      }
    },
    prop(){
      return this.pop
    }
    },
}

</script>
<style scoped>

</style>
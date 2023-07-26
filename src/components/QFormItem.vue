<template>
  <div>
    <a-col :span="colSpan">
    <a-form-model-item v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </a-form-model-item>
    </a-col>
    <a-col span="1"></a-col>
  </div>
</template>
<script>
export default{
    name: "QFormItem",
    props: {
    span: {
      type: String,
      default: 'whole',
      validator: function (value) {
        // 这个值必须是这些之一
        return ['whole', 'half'].indexOf(value) !== -1
      },
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
          return {};
      }
    },
    },
}

</script>
<style scoped>
.a-col-item{
  color: red;
  width: 90%;
}
</style>
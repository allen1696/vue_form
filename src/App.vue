<template>
  <div class="main" >
    <!-- vertical horizontal inline -->
    <!-- :label-col="{ span: 3, offset: 1 }" :wrapper-col="{ span: 18, offset: 0 }" -->
    <QForm  formName="表单Form" labelAlign="left">
      <QFormItem label="单行文本1" prop="aInput1">
        <a-input v-model="aInput1" placeholder="请输入单行文本1"  allow-clear >
        </a-input>
      </QFormItem>
      <QFormItem label="单行" prop="aInput1"    >
        <a-input v-model="aInput1" placeholder="请输入单行文本2"  allow-clear>
        </a-input>
      </QFormItem>
    </QForm>
    <a-button type="primary" @click="showDrawer">
      Open
    </a-button>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      width="500"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
    <a-form-model>
      
    </a-form-model>

    </a-drawer>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      visible: false,
      value:1,
        aInput1: undefined,
        aInput2: undefined,
        aInput1rules: [
          { required: true, message: '不能为空', trigger: 'blur' },
          { min: 2, max: 5, message: '长度只能2-5', trigger: 'blur' },
        ],
     
    }
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },

}
</script>

<style>
.main{
  width: 50%;
  height: auto;
  border: 1px solid skyblue;
}
</style>

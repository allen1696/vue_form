<template>
  <div>
    <div class="main" >
      <q-form ref="ruleForm" :model="formData" :formStyle="formStyle"  >
        <a-row>
          <q-form-item label="标签1"  pop="aInput" >
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
          </q-form-item>

            <q-form-item label="标签2" pop="aInput">
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
            </q-form-item>

            <q-form-item label="单选框" pop="field104O">
              <a-radio-group v-model="formData.field104O">
              <a-radio v-for="(item, index) in field104Options " :key="index" :value="item.value"
                :disabled="item.disabled">{{item.label}}</a-radio>
             </a-radio-group>
            </q-form-item>
          </a-row>
          <a-form-model-item :wrapper-col="{ span: 18, offset: 8 }"> 
          <a-space>
            <a-button type="primary" @click="submitForm">提交</a-button>
            <a-button @click="resetForm">重置</a-button>
          </a-space>
        </a-form-model-item>
        </q-form>
      </div>
    <div class="main" >
      <q-form ref="ruleForm" :model="formData" :formStyle="formStyle1"  >
        <a-row>
          <q-form-item label="标签1"  pop="aInput" >
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
          </q-form-item>

            <q-form-item label="标签222222222" pop="aInput">
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
            </q-form-item>
            <q-form-item label="单选框" pop="field104O">
              <a-radio-group v-model="formData.field104O">
              <a-radio v-for="(item, index) in field104Options " :key="index" :value="item.value"
                :disabled="item.disabled">{{item.label}}</a-radio>
             </a-radio-group>
            </q-form-item>
          </a-row>
          <a-form-model-item :wrapper-col="{ span: 18, offset: 8 }"> 
          <a-space>
            <a-button type="primary" @click="submitForm">提交</a-button>
            <a-button @click="resetForm">重置</a-button>
          </a-space>
        </a-form-model-item>
        </q-form>
      </div>
  <!--  -->
      <div class="main" >
        <q-form ref="ruleForm" :model="formData" :formStyle="formStyle2"  >
        <a-row>
            <q-form-item label="标签3"  pop="aInput"   >
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
           </q-form-item>

            <q-form-item label="标签444444444" pop="aInput"  >
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
            </q-form-item>
            <q-form-item label="单选框" pop="field104O">
              <a-radio-group v-model="formData.field104O">
              <a-radio v-for="(item, index) in field104Options " :key="index" :value="item.value"
                :disabled="item.disabled">{{item.label}}</a-radio>
             </a-radio-group>
            </q-form-item>
          </a-row>
          <a-form-model-item :wrapper-col="{ span: 18, offset: 8 }"> 
          <a-space>
            <a-button type="primary" @click="submitForm">提交</a-button>
            <a-button @click="resetForm">重置</a-button>
          </a-space>
        </a-form-model-item>
        </q-form>
    </div>
    <div class="main" >
        <q-form ref="ruleForm" :model="formData" :formStyle="formStyle3"  >
        <a-row>
            <q-form-item-half label="标签5"  pop="aInput"   >
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
           </q-form-item-half>

            <q-form-item-half label="标签66666" pop="aInput"  >
              <a-input v-model="formData.aInput" placeholder="请输入单行文本1"  allow-clear ></a-input>
            </q-form-item-half>

            <q-form-item-half label="单选框1" pop="aInput"  >
              <a-radio-group v-model="formData.field104O">
              <a-radio v-for="(item, index) in field104Options " :key="index" :value="item.value"
                :disabled="item.disabled">{{item.label}}</a-radio>
             </a-radio-group>
            </q-form-item-half>
            <q-form-item-half label="单选框2" pop="aInput"  >
              <a-radio-group v-model="formData.field104O">
              <a-radio v-for="(item, index) in field104Options " :key="index" :value="item.value"
                :disabled="item.disabled">{{item.label}}</a-radio>
             </a-radio-group>
            </q-form-item-half>
          </a-row>
          <a-form-model-item :wrapper-col="{ span: 18, offset: 8 }"> 
          <a-space>
            <a-button type="primary" @click="submitForm">提交</a-button>
            <a-button @click="resetForm">重置</a-button>
          </a-space>
        </a-form-model-item>
        </q-form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      formData:{
        field104: 1,
        aInput:  undefined,
          radioBox: [{
            "label": "选项一",
            "value": 1
          }, {
            "label": "选项二",
            "value": 2
          }, {
            "label": "选项3",
            "value": 3
          }],
      },
      field104Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }, {
        "label": "选项3",
        "value": 3
      }],
      formStyle:{
        formName:"默认垂直排列布局",
        rules:{
          aInput: [{
                  required: true,
                  message: '输入不能为空',
                  trigger: 'blur'
                 }],
                }
      },
      formStyle1:{
        //vertical垂直排列(默认) horizontal水平排列  inline行内排列
        // span占长 offset偏移量
        formName:"水平左对齐布局",
        // 布局属性
        layout:"horizontal",
        label:{span:3,offset:1},
        wrapper:{span:20},
        // 左对齐
        labelAlign:"left",
        rules:{
          aInput: [{
                  required: true,
                  message: '请输入单行文本',
                  trigger: 'blur'
                 }],
                }
      },

       //vertical垂直排列(默认) horizontal水平排列  inline行内排列
        // span占长 offset偏移量
      formStyle2:{
        formName:"水平右对齐布局",
        layout:"horizontal",
        label:{span:4,},
        wrapper:{span:20},
        // 右对齐
        labelAlign:"right",
        rules:{
          aInput: [{
                  required: true,
                  message: '请输入单行文本',
                  trigger: 'blur'
                 }],
                }
      },  
      formStyle3:{
        formName:"水平右对齐布局",
        layout:"horizontal",
        label:{span:5,},
        wrapper:{span:18},
        labelAlign:"right",
        rules:{
          aInput: [{
                  required: true,
                  message: '请输入单行文本',
                  trigger: 'blur'
                 }],
                }
      }, 

    }
  },
  methods: {
    // 提交事件
    submitForm() {
      this.$refs.ruleForm.submitForm()
    },
    // 重置
    resetForm() {
      this.$refs.ruleForm.resetForm()
    },
  }
}
</script>

<style>
.main{
  width: 50%;
  height: auto;
  border: 1px solid skyblue;
}
</style>

// 导入你的组件
import QForm from './QForm.vue'
import QFormItem from './QFormItem.vue'

// 组件列表
const components = [
    QForm,
    QFormItem
]

// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 检测到Vue才自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出组件
export {
    QForm,
    QFormItem

}

// 导出 install 方法
export default {
  install
}
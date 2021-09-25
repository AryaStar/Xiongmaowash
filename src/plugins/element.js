import Vue from 'vue'
import { Message, Input, Button, Form, FormItem } from 'element-ui'
// 导入弹框提示
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 挂载到Vue原型组件上，可以永this进行访问
Vue.prototype.$message = Message

import Vue from 'vue'
import { MessageBox, Switch, TableColumn, Table, Row, Col, MenuItem, Submenu, Menu, Message, Input, Button, Form, FormItem, Container, Header, Aside, Main } from 'element-ui'
import { Option, Select, Tooltip, Dialog, Pagination, Breadcrumb, BreadcrumbItem, Card } from 'element-ui'
// 导入弹框提示
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tooltip)
Vue.use(Option)
Vue.use(Select)
// 挂载到Vue原型组件上，可以永this进行访问
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

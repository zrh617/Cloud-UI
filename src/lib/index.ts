import Switch  from './Switch.vue';
import Button  from './Button.vue';
import Select  from './Select.vue';
import Tabs  from './Tabs.vue';
import Tab  from './Tab.vue';
import Dialog  from './Dialog.vue';
export { openDialog as openDialog } from './openDialog';

const COMPONENTS = [
  Switch,
  Button,
  Select,
  Tabs,
  Tab,
  Dialog
]

const CloudUI = {
  install: undefined
};

CloudUI.install = function (Vue) {
  COMPONENTS.forEach((component) => {
    Vue.component(component.name, component);
  })
}

export default CloudUI;
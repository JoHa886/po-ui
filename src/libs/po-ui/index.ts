import Magnifier from "./components/Magnifier.vue";
import TestDemo from "./components/TestDemo.vue";

interface IPOui {
  install: any;
}
interface IComponents {
  [propName: string]: any;
}
const Components: IComponents = {
  Magnifier,
  TestDemo
};

const POui: IPOui = {
  install: function(Vue: any): void {
    Object.keys(Components).forEach(name => {
      Vue.component(Components[name].name, Components[name]);
    });
  }
};

export default POui;

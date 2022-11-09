// import Button from "./Button";
// // 导出Button组件
// export default Button;
import "uno.css";
import Button from "./Button";
import { App } from "vue";
// 导出 Button组件
export { Button };

// 导出 Vue插件

export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};

import { createApp } from "vue";
import SButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
createApp(JSXButton).mount("#app");
const s: string = "Hello Typescript";
console.log(s);

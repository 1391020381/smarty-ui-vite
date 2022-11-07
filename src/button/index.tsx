import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
};
export default defineComponent({
  name: "SButton",
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      m-1
      `}
      >
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});

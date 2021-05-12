import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Todo from '../Todo.vue';

export default {
  title: "Todo",
};

export const todo = () => ({
  components: { Todo },
  template: '<Todo></Todo>',
})

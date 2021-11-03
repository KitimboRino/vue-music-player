import { Form as VeeForm, Field as VeeField } from "vee-validate";

export default {
  install(app) {
    app.compoent("VeeForm", VeeForm);
    app.compoent("VeeField", VeeField);
  },
};

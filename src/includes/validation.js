import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("password_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This field ${ctx.field} is required`,
          min: `This field ${ctx.field} is too short`,
          max: `This field ${ctx.field} is too long`,
          alpa_spaces: `This field ${ctx.field} must contain only letters and spaces`,
          email: `This field ${ctx.field} must be a valid email`,
          min_value: `This field ${ctx.field} is too low`,
          max_value: `This field ${ctx.field} is too high`,
          excluded: `This field ${ctx.field} is not allowed`,
          country_excluded:
            "Due to restrictions, we don't accept users form this location.",
          pasword_mismatch: "The passwords do not match",
          tos: "You must agree to the terms of service",
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`;
      },
    });
  },
};

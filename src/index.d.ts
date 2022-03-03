export {
  HookSetState,
  InputProps,
  SelectOption,
  SelectProps,
} from "./components/protocols";

export { Config } from "./form-builder";

export { InputsOptions } from "./form-builder/fn";

import { FormConfig, JSXElement } from "./form-builder/FormBuilder";

export type FormBuilder = (props: FormConfig) => JSXElement;

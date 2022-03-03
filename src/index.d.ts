import configForm, { Config } from "./form-builder";

export {
  HookSetState,
  InputProps,
  SelectOption,
  SelectProps,
} from "./components/protocols";

export { InputsOptions } from "./form-builder/fn";

type ConfigForm = typeof configForm;

export { Config, ConfigForm };

export default ConfigForm;

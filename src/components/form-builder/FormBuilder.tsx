import FormBuilder, { Config } from "form-builder";
import Input from "components/input/Input";
import Select from "components/select/Select";

const config: Config = {
  inputsOptions: {
    input: Input,
    select: Select,
  },
};
const Component = FormBuilder(config);

export default Component;

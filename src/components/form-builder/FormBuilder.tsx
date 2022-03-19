import FormBuilder from "@src/form-builder";
import Input from "@src/components/input/Input";
import Select from "@src/components/select";
import DatePicker from "@src/components/date-picker/DatePicker";
import { Config } from "@src/form-builder/types";

const config: Config = {
  inputsOptions: {
    input: Input,
    select: Select,
    datePicker: DatePicker,
  },
};

const Component = FormBuilder(config);

export default Component;

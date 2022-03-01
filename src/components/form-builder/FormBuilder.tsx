import FormBuilder, { Config } from "form-builder";
import Input from "components/input/Input";
import Select from "components/select/Select";
import DatePicker from "components/date-picker/DatePicker";

const config: Config = {
  inputsOptions: {
    input: Input,
    select: Select,
    datePicker: DatePicker,
  },
};
const Component = FormBuilder(config);

export default Component;

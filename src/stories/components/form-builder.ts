// import { FormBuilder } from "../../../dist/index";
import FormBuilder from "../../form-builder";
import Input from "@src/components/input/Input";
import Select from "@src/components/select/Select";
import DatePicker from "@src/components/date-picker/DatePicker";
import { Config } from "@src/form-builder";

const config: Config = {
  inputsOptions: {
    input: Input,
    select: Select,
    datePicker: DatePicker,
  },
};

export default FormBuilder(config);

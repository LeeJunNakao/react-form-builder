import Input from "@src/components/input/Input";
import Select from "@src/components/select/Select";
import DatePicker from "@src/components/date-picker/DatePicker";
import Multiselect from "@src/components/multiselect/Multiselect";

import { InputsOptions } from "src/index.d";

export const inputsOptionsDefault: InputsOptions = {
  input: Input,
  select: Select,
  multiselect: Multiselect,
  datePicker: DatePicker,
};

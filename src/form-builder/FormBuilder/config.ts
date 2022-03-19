import Input from "@src/components/input/Input";
import Select from "@src/components/select";
import DatePicker from "@src/components/date-picker/DatePicker";
import Multiselect from "@src/components/multiselect/Multiselect";

import { InputsOptions } from "@src/form-builder/types";

export const inputsOptionsDefault: InputsOptions = {
  input: Input,
  select: Select,
  multiselect: Multiselect,
  datePicker: DatePicker,
};

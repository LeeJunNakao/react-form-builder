import { HookSetState } from "@src/utils/types";

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: HookSetState;
  shouldClear: Boolean;
  type?: string;
};

export type SelectOption = {
  label: string;
  value: any;
};

export type SelectProps = {
  options: SelectOption[];
  shouldClear: Boolean;
  value?: any;
  onChange?: HookSetState;
};

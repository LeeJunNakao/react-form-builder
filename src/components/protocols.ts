export type HookSetState = (value: any) => void;

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: HookSetState;
};

export type SelectOption = {
  label: string;
  value: any;
};

export type SelectProps = {
  options: SelectOption[];
  value?: any;
  onChange?: HookSetState;
};

export type HookSetState = (value: any) => void;

export type InputProps = {
  placeholder?: string;
  onChange?: HookSetState;
};

export type SelectOption = {
  label: string;
  value: any;
};

export type SelectProps = {
  options: SelectOption[];
  onChange?: HookSetState;
};

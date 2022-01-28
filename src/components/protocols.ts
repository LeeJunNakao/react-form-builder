export type HookSetState = (value: string) => void;

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

import { Dispatch, SetStateAction } from "react";
import { HookSetState } from "components/protocols";

export const handleChange =
  (
    setState: Dispatch<SetStateAction<string>>,
    onSetState: HookSetState | undefined
  ) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    const content = event.target.value;
    setState(content);
    if (onSetState) onSetState(content);
  };

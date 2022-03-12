import { Dispatch, RefObject, SetStateAction, FocusEvent } from "react";
import { HookSetState } from "@src/index.d";

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

export const handleDisplayBlur =
  (
    componentRef: RefObject<HTMLDivElement>,
    displayHandler: (status: boolean) => void
  ) =>
  (event: FocusEvent<HTMLInputElement | HTMLDivElement>) => {
    const { relatedTarget } = event;

    const isComponentRelated = componentRef.current?.contains(relatedTarget);

    if (!relatedTarget || !isComponentRelated) {
      displayHandler(false);
    }
  };

import { SubmitEvent, useState, useEffect } from "react";
import { Button } from "../../../components/Button/Button";
import { TextField } from "../../../components/TextField/TextField";
import { useAutoFocus } from "../../../customHooks/useAutoFocus";

export type AddToDoItemProps = {
  onAddClicked: (task: string) => void;
};

export const AddToDoItem = ({ onAddClicked }: AddToDoItemProps) => {
  const inputFieldRef = useAutoFocus();

  useEffect(() => {
    inputFieldRef.current?.focus();
  }, []);

  const [task, setTask] = useState<string>("");

  const onFormSubmitted: (event: SubmitEvent<HTMLFormElement>) => void = (
    event,
  ) => {
    event.preventDefault();
    onAddClicked(task);
    setTask("");
  };

  const onTextFieldChanged = (newValue: string) => {
    setTask(newValue);
  };

  /*const onFormSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClickAdd();
  };*/

  return (
    <form onSubmit={onFormSubmitted}>
      <div className="flex">
        <div className="flex-grow-1 mr-2">
          <TextField
            ref={inputFieldRef}
            value={task}
            onInput={onTextFieldChanged}
          />
        </div>
        <div>
          <Button type="submit" primary>
            Add
          </Button>
        </div>
      </div>
    </form>
  );
};

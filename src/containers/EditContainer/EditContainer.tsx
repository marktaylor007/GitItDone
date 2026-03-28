import { useEffect, useState, useCallback, useContext } from "react";
import { Button } from "../../components/Button/Button";
import { CanvasField } from "../../components/CanvasField/CanvasField";
import { CheckBoxField } from "../../components/CheckBoxField/CheckBoxFielld";
import { TextAreaField } from "../../components/TextAreaField/TextAreaField";
import { TextField } from "../../components/TextField/TextField";
import classes from "./EditContainer.module.scss";
import { ToDoService } from "../../services/ToDo.service";
import { useAppState } from "../../customHooks/useAppState";

type EditContainerProps = {
  toDoService: ToDoService;
};

export type ToDoState = {
  description: string;
  handNotes: string;
  task: string;
  isDone: boolean;
};

export const EditContainer = ({ toDoService }: EditContainerProps) => {
  const { appState, setAppState } = useAppState();
  const [toDo, setToDo] = useState<ToDoState>({
    description: "",
    handNotes: "",
    task: "",
    isDone: false,
  });

  useEffect(() => {
    toDoService.getToDo(appState.editToDoId).then((todo) => {
      setToDo(todo);
    });
  }, [appState.editToDoId, toDoService]);

  const onFormChanged = (updatedState: Partial<ToDoState>) => {
    setToDo((currentState) => ({
      ...currentState,
      ...updatedState,
    }));
  };

  const onClickSaveButton = () => {
    toDoService.updateToDo(appState.editToDoId, toDo).then(() => {
      setAppState({ editToDoId: -1, isDrawerOpen: false });
    });
  };

  const onClickCancelButton = () => {
    setAppState({ editToDoId: -1, isDrawerOpen: false });
  };

  const onTaskChanged = useCallback(
    (value: string) => onFormChanged({ task: value }),
    [],
  );

  const onDoneChanged = useCallback(
    (value: boolean) => onFormChanged({ isDone: value }),
    [],
  );

  const onDescriptionChanged = useCallback(
    (value: string) => onFormChanged({ description: value }),
    [],
  );

  const onHandNotesChanged = useCallback(
    (value: string) => onFormChanged({ handNotes: value }),
    [],
  );

  return (
    <>
      <div>
        <h2>Edit To Do</h2>
        <div>
          <TextField
            label="Task"
            name="Task"
            value={toDo.task}
            onInput={onTaskChanged}
          />
          <CheckBoxField
            label="Is Done?"
            name="isDone"
            value={toDo.isDone}
            onInput={onDoneChanged}
          />
          <TextAreaField
            name="description"
            label="Description"
            value={toDo.description}
            onInput={onDescriptionChanged}
          />
          <CanvasField
            onInput={onHandNotesChanged}
            label="Hand Notes"
            value={toDo.handNotes}
          />
        </div>
        <div className="flex mt-2">
          <Button
            className="flex-grow-1 mr-2"
            primary
            onClick={onClickSaveButton}
          >
            Save
          </Button>
          <Button
            className="flex-grow-1"
            secondary
            onClick={onClickCancelButton}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

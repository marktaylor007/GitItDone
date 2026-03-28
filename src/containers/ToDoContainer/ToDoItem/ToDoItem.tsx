import classes from "./ToDoItem.module.scss";
import { Button } from "../../../components/Button/Button";
import { CheckBoxField } from "../../../components/CheckBoxField/CheckBoxFielld";
import { ToDo } from "../../../models/ToDo";

export type ToDoItemProps = {
  toDo: ToDo;
  onEditClicked: (id: number) => void;
  onDeleteClicked: (id: number) => void;
  onDoneClicked: (id: number, isDone: boolean) => void;
};
export const ToDoItem = ({
  toDo,
  onDeleteClicked,
  onEditClicked,
  onDoneClicked,
}: ToDoItemProps) => {
  return (
    <div className={classes.ToDoItem + " flex"}>
      <div className="mt-2 mr-1">
        <CheckBoxField
          value={toDo.isDone}
          onInput={(value) => onDoneClicked(toDo.id, value)}
        />
      </div>
      <div
        className={
          "mr-auto mt-auto mb-auto " + (toDo.isDone && classes.ToDoIsDone)
        }
      >
        {toDo.task}
      </div>
      <div>
        <Button transparent>
          <i className="fa fa-pencil" onClick={() => onEditClicked(toDo.id)} />
        </Button>
      </div>
      <div>
        <Button transparent onClick={() => onDeleteClicked(toDo.id)}>
          <i className="fa fa-trash" />
        </Button>
      </div>
    </div>
  );
};

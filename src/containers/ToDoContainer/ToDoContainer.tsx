import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import { AddToDoItem } from "./AddToDoItem/AddToDoItem";
import { ToDo } from "../../models/ToDo";
import { ToDoService } from "../../services/ToDo.service";
//import { EditContainer } from "../EditContainer/EditContainer";
//import EditContainer from "../EditContainer";
import { ButtonSelect } from "../../components/ButtonSelect/ButtonSelect";
import { useAppState } from "../../customHooks/useAppState";

export type ToDoContainerProps = {
  toDoService: ToDoService;
};

export const ToDoContainer = ({ toDoService }: ToDoContainerProps) => {
  const { appState, setAppState } = useAppState();

  const buttonSelectedOptions = [
    { label: "All", value: "all" },
    { label: "Done", value: "true" },
    { label: "Not Done", value: "false" },
  ];

  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [toDoStateFilter, setToDoStateFilter] = useState<string>("all");

  const fetchToDos = () => {
    toDoService
      .getAllToDos()
      .then((todos: ToDo[]) => {
        setToDos(todos);
      })
      .catch((error) => {
        console.error("Error fetching to-dos:", error);
      });
  };

  useEffect(() => {
    if (appState.editToDoId === -1) {
      fetchToDos();
      setToDoStateFilter("all");
    }
  }, [appState.editToDoId]);

  const onAddClicked = (task: string) => {
    toDoService.addToDo(task).then(() => {
      fetchToDos();
    });
  };

  const onDoneClicked = (todoId: number, isDone: boolean) => {
    toDoService.updateToDo(todoId, { isDone }).then(() => {
      fetchToDos();
    });
    setToDoStateFilter("all");
  };

  const onEditClicked = (toDoId: number) => {
    setAppState({ editToDoId: toDoId, isDrawerOpen: true });
  };

  const onDeleteClicked = (toDoId: number) => {
    toDoService.deleteToDo(toDoId).then(() => {
      fetchToDos();
    });
  };

  const onSelectToDoStateFilter = (value: string) => {
    setToDoStateFilter(value);
    return toDoService
      .getAllToDos({ query: { isDone: value } })
      .then((todos: ToDo[]) => {
        setToDos(todos);
      })
      .catch((error) => {
        console.error("Error fetching to-dos:", error);
      });
  };

  return (
    <>
      <AddToDoItem onAddClicked={onAddClicked} />
      <div className="mt-3">
        <ButtonSelect
          value={toDoStateFilter}
          onInput={onSelectToDoStateFilter}
          options={buttonSelectedOptions}
        />
      </div>
      {toDos.map((toDo, index) => (
        <ToDoItem
          key={index}
          toDo={toDo}
          onDeleteClicked={onDeleteClicked}
          onDoneClicked={onDoneClicked}
          onEditClicked={onEditClicked}
        />
      ))}
    </>
  );
};

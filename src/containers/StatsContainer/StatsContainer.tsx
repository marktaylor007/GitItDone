import { useEffect, useState } from "react";
import { ToDo } from "../../models/ToDo";
import classes from "./StatsContainer.module.scss";
import { ToDoService } from "../../services/ToDo.service";

type TodoStatsContainerProps = {
  toDoService: ToDoService;
};

export const StatsContainer = ({ toDoService }: TodoStatsContainerProps) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    toDoService.getAllToDos().then((todos: ToDo[]) => {
      setTodos(todos);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doneTodos = todos.filter((todo) => todo.isDone);
  const notDoneTodos = todos.filter((todo) => !todo.isDone);

  return (
    <div>
      <h2>Stats</h2>
      <div className={classes.StatsBoardContainer}>
        <div className={classes.StatsBoard}>
          <div className={classes.BoardTitle}>
            To Do ({notDoneTodos.length})
          </div>
          <ul>
            {notDoneTodos.map((todo) => (
              <li key={todo.id}>{todo.task}</li>
            ))}
          </ul>
        </div>
        <div className={classes.StatsBoard}>
          <div className={classes.BoardTitle}>Done ({doneTodos.length})</div>
          <ul>
            {doneTodos.map((todo) => (
              <li key={todo.id}>{todo.task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

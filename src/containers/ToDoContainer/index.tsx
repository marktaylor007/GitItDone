import { withDependencies } from "../../hoc/withDependencies";
import { ToDoContainer } from "./ToDoContainer";
import { dependencies } from "../../dependencies";

export default withDependencies(
  {
    toDoService: dependencies.todoService,
  },
  ToDoContainer,
);

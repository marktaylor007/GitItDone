import { StatsContainer } from "./StatsContainer";
import { withDependencies } from "../../hoc/withDependencies";
import { dependencies } from "../../dependencies";

export default withDependencies(
  {
    toDoService: dependencies.todoService,
  },
  StatsContainer,
);

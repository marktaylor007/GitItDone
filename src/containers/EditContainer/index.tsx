import { withDependencies } from "../../hoc/withDependencies";
import { withAppState } from "../../hoc/withAppState";
import { dependencies } from "../../dependencies";
import { EditContainer } from "./EditContainer";
import { withSideDrawer } from "../../hoc/withSideDrawer/withSideDrawer";

export default withDependencies(
  { toDoService: dependencies.todoService },
  withSideDrawer(withAppState(EditContainer)),
);

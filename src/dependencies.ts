import { HttpAdapter } from "./adapters/HttpAdapter";
import { config } from "./config";
import { ToDoService } from "./services/ToDo.service";
import { IDependencyContainer } from "./types";

export class DependencyContainer implements IDependencyContainer {
  _dependencies = {};

  add<T>(key: symbol, dependency: T) {
    Object.defineProperty(this._dependencies, key, {
      value: dependency,
    });
  }

  get<T>(key: symbol): T {
    const descriptor = Object.getOwnPropertyDescriptor(this._dependencies, key);
    return descriptor?.value as T;
  }
}

const container = new DependencyContainer();

const httpAdapter = new HttpAdapter({ baseUrl: config.baseUrl });
const todoService = new ToDoService({ httpAdapter });

const dependencies = {
  httpAdapter: Symbol("httpAdapter"),
  todoService: Symbol("todoService"),
};

container.add(dependencies.httpAdapter, httpAdapter);
container.add(dependencies.todoService, todoService);

export { container, dependencies };

import { HttpAdapter } from "../adapters/HttpAdapter";
import { ToDo } from "../models/ToDo";

export class ToDoService {
  private readonly http: HttpAdapter;

  constructor({ httpAdapter }: { httpAdapter: HttpAdapter }) {
    this.http = httpAdapter;
  }

  getToDo(toDoId: number) {
    return this.http.get<ToDo>(`/todos/${toDoId}`);
  }

  getAllToDos(params?: { query: { isDone: string } }) {
    return this.http.get<ToDo[]>("/todos", params);
  }

  addToDo(task: string) {
    return this.http.post<{ todo: string }>("/todos", { todo: task });
  }

  updateToDo(toDoId: number, toDo: Partial<ToDo>) {
    return this.http.patch<Partial<ToDo>>(`/todos/${toDoId}`, toDo);
  }

  deleteToDo(toDoId: number) {
    return this.http.delete<{ id: number }>("/todos", { id: toDoId });
  }
}

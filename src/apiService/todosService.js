import {apiService} from "./apiService";
import {urls} from "../constanse/urls";

export const todosService={
    getAll:()=>apiService.get(urls.todos.base)
}
import {apiService} from "./apiService";
import {urls} from "../constanse/urls";

export const commentsService={
    getAll:()=>apiService.get(urls.comments.base)
}
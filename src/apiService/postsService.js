import {apiService} from "./apiService";
import {urls} from "../constanse/urls";

export const postsService={
    getAll:()=>apiService.get(urls.posts.base),
}
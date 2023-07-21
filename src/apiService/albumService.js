import {apiService} from "./apiService";
import {urls} from "../constanse/urls";

export const albumService={
    getAll:()=>apiService.get(urls.albums.base)
}



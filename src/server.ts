import {http} from "./http";
import "./websocket/client";

http.listen(3333, () => {
    console.log("Server is Working on port 3333");
});
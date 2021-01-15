import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone-app.herokuapp.com/",
});
export default instance;
// http://localhost:9000
// "https://whatsapp-clone-app.herokuapp.com/"

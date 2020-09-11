//import the axios HTTP client to communicate with the API
import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }

  registerUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }
  deleteUser() {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.delete(this.url + "/users/" + userName, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
export default DataService;

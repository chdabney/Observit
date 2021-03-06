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

  getUserName() {
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    return username;
  }

  getUser(username) {
    return this.client.get(this.url + "/users/" + username);
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

  getUserPicture() {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.get(this.url + "/users/" + userName + "/picture", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  postUserPicture(formData) {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.put(
      this.url + "/users/" + userName + "/picture",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }

  postMessage(message) {
    console.log("posting", message);
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.post(this.url + "/messages", message, {
      headers: { Authorization: `Bearer ${loginData.result.token} ` },
    });
  }

  updateUser(userData) {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    let userName = loginData.username;
    return this.client.patch(this.url + "/users/" + userName, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getMessageList(limit = 50) {
    return this.client.get(`${this.url}/messages?limit=${limit}`);
  }

  getMessage(messageId) {
    return this.client.get(`${this.url}/messages/${messageId}`);
  }

  deleteMessage(messageId) {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    return this.client.delete(this.url + "/messages/" + messageId, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  deleteLike(likeId) {
    let loginData = JSON.parse(localStorage.getItem("login")).result;
    let token = loginData.token;
    return this.client.delete(this.url + "/likes/" + likeId, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  postLikes(messageId) {
    const data = { messageId };
    let loginData = JSON.parse(localStorage.getItem("login"));
    return this.client
      .post(this.url + "/likes", data, {
        headers: { Authorization: `Bearer ${loginData.result.token} ` },
      })
      .then((response) => {
        console.log(response);
        return response.data.like;
      });
  }
}

export default DataService;

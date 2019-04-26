import axios from "axios";

export default axios.create({
  baseURL: "https://simple-plant-api.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json"
  }
});

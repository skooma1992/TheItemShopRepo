import axios from "axios";

export default {
  // Gets all fish
  getFish: function() {
    return axios.get("https://acnhapi.com/v1a/fish");
  },
  // Gets the fish with the given id
  getIndiFish: function(id) {
    return axios.get("https://acnhapi.com/v1a/fish/" + id);
  }
};
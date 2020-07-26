import axios from "axios";

export default ({ req }) => {
  return axios.create({
    baseUrl: "https://api.themoviedb.org/3/",
  });
};

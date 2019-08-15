import axios from "axios";

export const setContent = data => ({
  type: "SET_CONTENT",
  payload: data
});

export const openModal = () => ({
  type: "OPEN_MODAL"
});

export const closeModal = () => ({
  type: "CLOSE_MODAL"
});

export const fetchContent = () => {
  return dispatch => {
    return axios
      .get("http://localhost:5000")
      .then(res => {
        console.log(res.data.info);
        const markDownInfo = res.data.info;
        dispatch(setContent(markDownInfo));
      })
      .catch(err => console.log(err));
  };
};

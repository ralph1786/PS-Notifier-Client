const initialState = {
  content: null,
  isModalOpen: false
};

const psNotifierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RETRIEVE_CONTENT":
      return {
        ...state,
        content: action.payload
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        content: null,
        isModalOpen: false
      };
    default:
      return state;
  }
};

export default psNotifierReducer;

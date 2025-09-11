import {
  ADD_USER_MESSAGE,
  ADD_BOT_MESSAGE,
  SET_CHAT_LOADING
} from '../chatbotRedux/action';

const initialState = {
  messages: [
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ],
  loading: false,
};

const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_MESSAGE:
    case ADD_BOT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case SET_CHAT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default chatbotReducer;

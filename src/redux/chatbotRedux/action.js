import axios from 'axios';
import { ApiEndPoints } from '../../utils';
import { apiClient } from '../../api/server';

export const ADD_USER_MESSAGE = 'ADD_USER_MESSAGE';
export const ADD_BOT_MESSAGE = 'ADD_BOT_MESSAGE';
export const SET_CHAT_LOADING = 'SET_CHAT_LOADING';

export const addUserMessage = (text) => ({
  type: ADD_USER_MESSAGE,
  payload: { sender: 'user', text },
});

export const addBotMessage = (text) => ({
  type: ADD_BOT_MESSAGE,
  payload: { sender: 'bot', text },
});

export const setChatLoading = (status) => ({
  type: SET_CHAT_LOADING,
  payload: status,
});

export const sendMessageToBot = (message,userId) => async (dispatch) => {
  dispatch(addUserMessage(message));
  dispatch(setChatLoading(true));

  try {
    const response = await apiClient.post(ApiEndPoints.CHATBOT,{message,userId})
    dispatch(addBotMessage(response.data.reply));
  } catch (error) {
    dispatch(addBotMessage('Oops! Something went wrong. Please try again later.'));
  } finally {
    dispatch(setChatLoading(false));
  }
};

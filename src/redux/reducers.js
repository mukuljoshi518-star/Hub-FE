// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authentication/reducer';
import chatbotReducer from './chatbotRedux/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  chatbot: chatbotReducer
});

export default rootReducer;

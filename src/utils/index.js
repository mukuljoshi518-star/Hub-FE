/* eslint-disable no-unused-vars */
import { baseUrl } from '../constants'

export const ApiEndPoints = {
  USER_LOGIN: '/login',
  CHATBOT: '/chatbot/chat'
  
}

export const getImageUrl = (fileName) => {
  return `${baseUrl}download?fileName=${fileName}`
}

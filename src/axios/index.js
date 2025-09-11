import { apiClient } from '../api/server'
import { ApiEndPoints } from '../utils/index'
import { notification } from 'antd';


export const UserLoginData = async (username, email, password) => {

    const response = await apiClient.post(ApiEndPoints.USER_LOGIN, {
      username,
      email,
      password,
    });

    if (response && response.data) {
      // Success feedback (optional)
      notification.success({
        message: 'Login Successful',
        description: `Welcome, ${username}!`,
      });

      return response.data;
    }

    const message =
      response?.data?.message || 'Something went wrong. Please try again.';

    notification.error({
      message: 'Login Failed',
      description: message,
    });

    return { error: message };
  
};


// Function to get portfolio data
export const GetAllPortfolioApiData = async () => {
  try {
    // Assuming your API endpoint for getting all portfolios looks like '/portfolios'
    const response = await apiClient.get(`${ApiEndPoints.GET_PORTFOLIO}`);
    
    if (response && response.data) {
      // Show success notification
      // notification.success({
      //   message: 'Success',
      //   description: 'Portfolio data retrieved successfully!',
      // });
      
      // console.log('GetAllPortfolioApiData>>>', response.data.data);
      
      // Return the fetched portfolio data
      return response.data.data; // Return all portfolio data
    }
  } catch (error) {
    // Handle specific error status codes
    if (error?.response?.data?.statusCode) {
      // notification.error({
      //   message: 'Error',
      //   description: error?.response?.data?.message,
      // });
    } else {
      // Handle generic errors (like network errors)
      // notification.error({
      //   message: 'Error',
      //   description: 'Something went wrong. Please try again.',
      // });
    }

    // Optionally return the error for further use
    return { error: 'An error occurred while fetching all portfolio data.' };
  }
};


//  get all portfolio title
export const GetAllPortfolioApiTitle = async () => {
  try {
    // Assuming your API endpoint for getting all portfolios looks like '/portfolios'
    const response = await apiClient.get(`${ApiEndPoints.GET_PORTFOLIO_TITLE}`);
    
    if (response && response.data) {
      // console.log('titles>>>.',response)
      // Show success notification
      // notification.success({
      //   message: 'Success',
      //   description: 'Portfolio all title retrieved successfully!',
      // });
      
      // console.log('GetAllPortfolioApiData>>>', response.data.data);
      
      // Return the fetched portfolio data
      return response.data.data; // Return all portfolio data
    }
  } catch (error) {
    // Handle specific error status codes
    if (error?.response?.data?.statusCode) {
      // notification.error({
      //   message: 'Error',
      //   description: error?.response?.data?.message,
      // });
    } else {
      // Handle generic errors (like network errors)
      // notification.error({
      //   message: 'Error',
      //   description: 'Something went wrong. Please try again.',
      // });
    }

    // Optionally return the error for further use
    return { error: 'An error occurred while fetching all portfolio data.' };
  }
};



export const GetPortfolioMediasById = async (mediaId) => {
  try {
    // Assuming your API endpoint for fetching portfolio by ID looks like '/portfolios/:id'
    const response = await apiClient.get(`${ApiEndPoints.GET_PORTFOLIO_MEDIAS_BY_ID}/${mediaId}`);
    
    if (response && response.data) {
      // Show success notification
      // notification.success({
      //   message: 'Success',
      //   description: 'Portfolio medias retrieved successfully!',
      // });
      
      console.log('GetPortfolioBymedia>>>', response);
      
      // Return the fetched portfolio data by ID
      return response.data; // Return the specific portfolio data
    }
  } catch (error) {
    // Handle specific error status codes
    if (error?.response?.data?.statusCode) {
      // notification.error({
      //   message: 'Error',
      //   description: error?.response?.data?.message,
      // });
    } else {
      // Handle generic errors (like network errors)
      // notification.error({
      //   message: 'Error',
      //   description: 'Something went wrong. Please try again.',
      // });
    }

    // Optionally return the error for further use
    return { error: `An error occurred while fetching portfolio data for ID: ${mediaId}` };
  }
};

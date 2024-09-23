// import { postFakeLogin } from "helpers/fakebackend_helper";
// import { loginError, loginSuccess, logoutSuccess } from "./reducer";
// import { ThunkAction } from "redux-thunk";
// import { Action, Dispatch } from "redux";
// import { RootState } from "slices";
// import { getFirebaseBackend } from "helpers/firebase_helper";

// interface User {
//     email: string;
//     password: string;
// }

// export const loginUser = (
//     user: User,
//     history: any
// ): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
//     try {
//         let response: any;
//         if (process.env.REACT_APP_DEFAULTAUTH === "fake") {

//             response = await postFakeLogin({
//                 email: user.email,
//                 password: user.password,
//             });

//             localStorage.setItem("authUser", JSON.stringify(response));

//         } else if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//             let fireBaseBackend = await getFirebaseBackend();

//             response = await fireBaseBackend.loginUser(
//                 user.email,
//                 user.password
//             )
//         }

//         if (response) {
//             dispatch(loginSuccess(response));
//             history("/dashboard");
//         }
//     } catch (error) {

//         dispatch(loginError(error));
//     }
// };

// export const logoutUser = () => async (dispatch: Dispatch) => {
//     try {
//         localStorage.removeItem("authUser");

//         let fireBaseBackend = await getFirebaseBackend();

//         if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//             const response = fireBaseBackend.logout;
//             dispatch(logoutSuccess(response));
//         } else {
//             dispatch(logoutSuccess(true));
//         }
//     } catch (error) {
//         dispatch(loginError(error));
//     }
// }


// export const socialLogin = (type: any, history: any) => async (dispatch: any) => {
//     try {
//         let response: any;

//         if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//             const fireBaseBackend = getFirebaseBackend();
//             response = fireBaseBackend.socialLoginUser(type);
//         }

//         const socialData = await response;

//         if (socialData) {
//             sessionStorage.setItem("authUser", JSON.stringify(socialData));
//             dispatch(loginSuccess(socialData));
//             history('/dashboard');
//         }

//     } catch (error) {
//         dispatch(loginError(error));
//     }
// }

//my own login end point 

// slices/thunk.js
// import axios from 'axios';

// export const loginUser = (values, navigate) => async (dispatch) => {
//     try {
//         // Call your own login API endpoint
//         const response = await axios.post('https://your-api-endpoint.com/login', {
//             email: values.email,
//             password: values.password
//         });

//         // Dispatch success action
//         dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });

//         // Navigate to the desired page after successful login
//         navigate('/dashboard');
//     } catch (error) {
//         // Dispatch error action
//         dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
//     }
// }
// import axios from 'axios';
// import { loginError, loginSuccess, logoutSuccess } from "./reducer";
// import { ThunkAction } from "redux-thunk";
// import { Action, Dispatch } from "redux";
// import { RootState } from "slices";

// interface User {
//     email: string;
//     password: string;
// }

// export const loginUser = (
//     user: User,
//     history: any
// ): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
//     try {
//         // Make the actual login request to your real API
//         const response = await axios.post('https://e3a0d3e271e6.svanvc.org:9090/_matrix-internal/admin/v1/login', {
//             id: user.email,  // Assuming 'id' is the email in your API
//             pass: user.password,  // Assuming 'pass' is the password in your API
//         });

//         // Handle success response from the API
//         if (response.data && response.data.token) {
//             // Store the token in localStorage for future requests
//             localStorage.setItem("authUser", JSON.stringify(response.data.token));
            
//             // Dispatch success action
//             dispatch(loginSuccess(response.data));

//             // Redirect to dashboard or any other page after successful login
//             history("/dashboard");
//         } else {
//             // If the login response doesn't include a token, handle it as a failure
//             dispatch(loginError('Login failed, please check your credentials.'));
//         }
//     } catch (error) {
//         // Dispatch error action if login fails
//         dispatch(loginError(error.response ? error.response.data : "An error occurred during login."));
//     }
// };

// // Logout Thunk
// export const logoutUser = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
//     try {
//         // Clear auth information from localStorage
//         localStorage.removeItem("authUser");

//         // Dispatch logout success action
//         dispatch(logoutSuccess(true));

//         // Optionally, you can also clear other states or redirect the user after logout
//     } catch (error) {
//         dispatch(loginError(error));
//     }
// };

// import axios, { AxiosError } from 'axios';
// import { loginError, loginSuccess, logoutSuccess } from "./reducer";
// import { ThunkAction } from "redux-thunk";
// import { Action, Dispatch } from "redux";
// import { RootState } from "slices";

// interface User {
//     email: string;
//     password: string;
// }

// export const loginUser = (
//     user: User,
//     history: any
// ): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
//     try {
//         // Make the actual login request to your real API
//         const response = await axios.post('https://e3a0d3e271e6.svanvc.org:9090/_matrix-internal/admin/v1/login', {
//             id: user.email,  // Assuming 'id' is the email in your API
//             pass: user.password,  // Assuming 'pass' is the password in your API
//         });

//         // Handle success response from the API
//         if (response.data && response.data.token) {
//             // Store the token in localStorage for future requests
//             localStorage.setItem("authUser", JSON.stringify(response.data.token));
            
//             // Dispatch success action
//             dispatch(loginSuccess(response.data));

//             // Redirect to dashboard or any other page after successful login
//             history("/dashboard");
//         } else {
//             // If the login response doesn't include a token, handle it as a failure
//             dispatch(loginError('Login failed, please check your credentials.'));
//         }
//     } catch (error: unknown) {
//         let errorMessage = 'An error occurred during login.';

//         // Check if the error is an AxiosError
//         if (axios.isAxiosError(error)) {
//             if (error.response && error.response.data) {
//                 errorMessage = error.response.data;
//             } else if (error.message) {
//                 errorMessage = error.message;
//             }
//         }

//         // Dispatch error action if login fails
//         dispatch(loginError(errorMessage));
//     }
// };

// // Logout Thunk
// export const logoutUser = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
//     try {
//         // Clear auth information from localStorage
//         localStorage.removeItem("authUser");

//         // Dispatch logout success action
//         dispatch(logoutSuccess(true));

//         // Optionally, you can also clear other states or redirect the user after logout
//     } catch (error: unknown) {
//         let errorMessage = 'An error occurred during logout.';

//         if (axios.isAxiosError(error)) {
//             if (error.response && error.response.data) {
//                 errorMessage = error.response.data;
//             } else if (error.message) {
//                 errorMessage = error.message;
//             }
//         }

//         dispatch(loginError(errorMessage));
//     }
// };
import axios, { AxiosError } from 'axios';
import { loginError, loginSuccess, logoutSuccess } from "./reducer";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootState } from "slices";

interface User {
    username: string;  // Changed from 'email' to 'username'
    password: string;
}

export const loginUser = (
    user: User,
    history: any
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
    try {
        // Make the actual login request to your real API
        const response = await axios.post('https://e3a0d3e271e6.svanvc.org:9090/_matrix-internal/admin/v1/login', {
            id: user.username,  // Use 'username' instead of 'email'
            pass: user.password,  // Assuming 'pass' is the password in your API
        });

        // Handle success response from the API
        if (response.data && response.data.token) {
            // Store the token in localStorage for future requests
            localStorage.setItem("authUser", JSON.stringify(response.data.token));
            
            // Dispatch success action
            dispatch(loginSuccess(response.data));

            // Redirect to dashboard or any other page after successful login
            history("/dashboard");
        } else {
            // If the login response doesn't include a token, handle it as a failure
            dispatch(loginError('Login failed, please check your credentials.'));
        }
    } catch (error: unknown) {
        let errorMessage = 'An error occurred during login.';

        // Check if the error is an AxiosError
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                errorMessage = error.response.data;
            } else if (error.message) {
                errorMessage = error.message;
            }
        }

        // Dispatch error action if login fails
        dispatch(loginError(errorMessage));
    }
};

// Logout Thunk
export const logoutUser = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {
    try {
        // Clear auth information from localStorage
        localStorage.removeItem("authUser");

        // Dispatch logout success action
        dispatch(logoutSuccess(true));

        // Optionally, you can also clear other states or redirect the user after logout
    } catch (error: unknown) {
        let errorMessage = 'An error occurred during logout.';

        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                errorMessage = error.response.data;
            } else if (error.message) {
                errorMessage = error.message;
            }
        }

        dispatch(loginError(errorMessage));
    }
};

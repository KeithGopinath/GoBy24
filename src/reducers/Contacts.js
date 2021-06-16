// import * as CONTACTS from '../actionTypes/Contacts';

// const initialState = {
//   contacts: [],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case CONTACTS.GET_CONTACTS:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case CONTACTS.GET_CONTACTS_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         contacts: action.contacts,
//       };
//     case CONTACTS.GET_CONTACTS_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.error,
//       };
//     default:
//       return state;
//   }
// };

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTACTS_REQUEST':
      return {
        ...state,
        isLoading: true,
        login: false,
        error: false,
      };
    case 'GET_CONTACTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        login: action.login,
      };
    case 'GET_CONTACTS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

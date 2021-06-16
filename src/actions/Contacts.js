export const getContacts = (loginDetails) => ({
  type: 'GET_CONTACTS_REQUEST',
  loginDetails,
});

export const getContactsSucccess = (login) => ({
  type: 'GET_CONTACTS_SUCCESS',
  login,
});

export const getContactsFailure = (error) => ({
  type: 'GET_CONTACTS_FAILURE',
  error,
});

import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as goby24ActionCreators from '../actions/Contacts';
import { doGet } from '../utils/fetchWrapper';


export function* getContacts() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getContacts);
    yield put(goby24ActionCreators.getContactsSucccess(response));
  } catch (error) {
    yield put(goby24ActionCreators.getContactsFailure(error));
  }
}

export function* contactsWatchers() {
  yield [
    takeLatest('GET_CONTACTS_REQUEST', getContacts),
  ];
}

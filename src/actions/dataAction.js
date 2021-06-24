import * as actionTypes from './actionTypes';
import dataService from '../providers/dataService';


export const loadSystemEnvIntoRedux = systemEnv => ({ type: actionTypes.SYSTEM_ENV_LOADED, payload: systemEnv });

const onReset = error => ({
  type: actionTypes.FORM_RESET,
  payload: error
});

const onLoadError = error => ({
  type: actionTypes.API_ERROR,
  payload: error
});


export function filterItem({ items, type }) {
  return async dispatch => {
    try {
      var data = {
        items: items
      }
      if (type === 'reset') {
        dispatch(onReset(data));
      }
    } catch (error) {
      dispatch(onLoadError(error));
      return error;
    }
  };
}


export function defaultItem({ value, type }) {
  return async dispatch => {
    try {
      var data = {
        value: value
      }
      if (type === 'sort') {
        dispatch(onSaveSortDefaultValue(data))
      } else if (type === 'my-gem') {
        dispatch(onSaveMygemDefaultValue(data))
      } else if( type === 'type') {
        dispatch(onSaveGemTypeDefaultValue(data))
      } else if( type === 'category') {
        dispatch(onSaveCategoryDefaultValue(data))
      } else if(type === 'subcategory') {
        dispatch(onSaveSubCategoryDefaultValue(data))
      } else if(type === 'location') {
        dispatch(onSaveLocationDefaultValue(data))
      } else if(type === 'severity') {
        dispatch(onSaveSeverityDefaultValue(data))
      } else if(type === 'assigned-to-jobid') {
        dispatch(onSaveAssignToDefaultValue(data));
      } else if (type === 'from-opened-date') {
        dispatch(onSaveFilterFields(actionTypes.LEFT_DEFAULT_OPENED_DATE_FROM, data));
      } else if (type === 'to-opened-date') {
        dispatch(onSaveFilterFields(actionTypes.LEFT_DEFAULT_OPENED_DATE_TO, data));
      } else if (type === 'from-closed-date') {
        dispatch(onSaveFilterFields(actionTypes.LEFT_DEFAULT_CLOSED_DATE_FROM, data));
      } else if (type === 'to-closed-date') {
        dispatch(onSaveFilterFields(actionTypes.LEFT_DEFAULT_CLOSED_DATE_TO, data));
      } else if (type === 'affected-guest') {
        dispatch(onSaveFilterFields(actionTypes.LEFT_DEFAULT_SELECTED_PASSENGER, data));
      }

    } catch (error) {
      dispatch(onLoadError(error));
      return error;
    }
  };
}


export function getUser({ onSuccess }) {
  return async dispatch => {
    try {
      const user = await dataService.loginUser();
      dispatch(onLoadSuccess(user));
      onSuccess(user);
      return user;
    } catch (error) {
      dispatch(onLoadError(error));
      return error;
    }
  };
}









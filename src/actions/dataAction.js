import * as actionTypes from './actionTypes';
import dataService from '../providers/dataService';


export const loadSystemEnvIntoRedux = systemEnv => ({ type: actionTypes.SYSTEM_ENV_LOADED, payload: systemEnv });


const onLoadSuccess = data => ({
  type: actionTypes.GET_USER,
  payload: data,
});


const onSaveSortItems = data => ({
  type: actionTypes.LEFT_SORT_ITEMS,
  payload: data
});

const onSaveMygemItems = data => ({
  type: actionTypes.LEFT_MY_GEMS,
  payload: data
});

const onSaveGemType = data => ({
  type: actionTypes.LEFT_GEM_TYPE,
  payload: data
});


const onSavePassengers = data => ({
  type: actionTypes.LEFT_PASSENGERS,
  payload: data
});


const onSaveCategories = data => ({
  type: actionTypes.LEFT_CATEGORIES,
  payload: data
});

const onSaveSubCategories = data => ({
  type: actionTypes.LEFT_SUB_CATEGORIES,
  payload: data
});

const onSaveLocations = data => ({
  type: actionTypes.LEFT_LOCATIONS,
  payload: data
});

const onSaveSeverity = data => ({
  type: actionTypes.LEFT_SEVERITY,
  payload: data
});

const onSaveAssignTo = data => ({
  type: actionTypes.LEFT_ASSIGN_TO,
  payload: data
});

const onReset = data => ({
  type: actionTypes.LEFT_RESET,
  payload: data
});


const onSaveSortDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_SORT,
  payload: data
});

const onSaveMygemDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_MYGEM,
  payload: data
});

const onSaveGemTypeDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_GEM_TYPE,
  payload: data
});

const onSaveCategoryDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_CATEGORY,
  payload: data
});

const onSaveSubCategoryDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_SUB_CATEGORY,
  payload: data
});

const onSaveLocationDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_LOCATIONS,
  payload: data
});

const onSaveSeverityDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_SEVERITY,
  payload: data
});

const onSaveAssignToDefaultValue = data => ({
  type: actionTypes.LEFT_DEFAULT_ASSIGN_TO,
  payload: data
});

const onSaveFilterFields = (type, data) => ({
  type: type,
  payload: data
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
      if (type === 'sort') {
        dispatch(onSaveSortItems(data))
      } else if (type === 'mygem') {
        dispatch(onSaveMygemItems(data))
      } else if(type === 'type') {
        dispatch(onSaveGemType(data))
      } else if(type === 'passenger') {
        dispatch(onSavePassengers(data))
      } else if(type === 'categories') {
        dispatch(onSaveCategories(data))
      } else if(type === 'subcategory') {
        dispatch(onSaveSubCategories(data))
      } else if(type === 'location') {
        dispatch(onSaveLocations(data));
      } else if(type === 'severity') {
        dispatch(onSaveSeverity(data));
      } else if(type === 'assigned-to-jobid') {
        dispatch(onSaveAssignTo(data));
      } else if(type === 'reset') {
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









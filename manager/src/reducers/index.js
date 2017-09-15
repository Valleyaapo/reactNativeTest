import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormRedcuer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormRedcuer
});

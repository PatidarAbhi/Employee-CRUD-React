import { configureStore } from '@reduxjs/toolkit';
import display from '../slice/DisplaySlice';
import employee from '../slice/EmployeeSlice';
import employeeReducer from '../slice/EmployeeSlice'
import companyDisplay from '../slice/companyDisplay';
import companySlice from '../slice/compnaySlice';

const store= configureStore(
    {
         reducer:{
             showDisplay: display,
             data:    employee,
             employee: employeeReducer,
             showCompany: companyDisplay,
             companyData :companySlice
          },
    }
)
 export default store
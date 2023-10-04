import { configureStore } from '@reduxjs/toolkit';
import display from '../slice/DisplaySlice';
import companyDisplay from '../slice/companyDisplay';
import companyOperations from '../slice/compnaySlice';
import AllEmployeeSlice from '../slice/employeeOperation'

const store= configureStore(
    {
         reducer:{
             showDisplay: display,
             showCompany: companyDisplay,
             companyData :companyOperations,
             allEmp : AllEmployeeSlice,
          },
    }
)
 export default store
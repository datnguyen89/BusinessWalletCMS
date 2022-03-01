import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'
import { PAGES } from '../../utils/constant'
import HomePage from '../../pages/WebApp/HomePage/HomePage'
import BusinessProfileManagerPage from '../../pages/BusinessManager/BusinessProfileManagerPage'
import Business_UserManagerPage from '../../pages/BusinessManager/BusinessUserManagerPage/BusinessUserManagerPage'
import Customer_DepartmentManagerPage from '../../pages/BusinessManager/DepartmentManagerPage/DepartmentManagerPage'
import ApproveBusinessInfoPage from '../../pages/BusinessManager/ApproveBusinessInfoPage'
// Pages

const ProtectedModule = (props) => {
  return (
    <DefaultLayout>
      <Switch>
        <Route exact path={PAGES.HOME.PATH} component={HomePage} />
        <Route exact path={PAGES.BUSINESS_PROFILE_MANAGER.PATH} component={BusinessProfileManagerPage} />
        <Route exact path={PAGES.BUSINESS_USER_MANAGER.PATH} component={Business_UserManagerPage} />
        <Route exact path={PAGES.BUSINESS_DEPARTMENT_MANAGER.PATH} component={Customer_DepartmentManagerPage} />
        <Route exact path={PAGES.BUSINESS_APPROVE_MANAGER.PATH} component={ApproveBusinessInfoPage} />
      </Switch>
    </DefaultLayout>
  )

}

ProtectedModule.propTypes = {}

export default ProtectedModule
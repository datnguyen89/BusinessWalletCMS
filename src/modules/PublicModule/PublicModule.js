import React from 'react'
import { inject, observer } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'
import { PAGES } from '../../utils/constant'


const PublicModule = (props) => {
  return (
    <DefaultLayout>
      <Switch>

      </Switch>
    </DefaultLayout>
  )
}

PublicModule.propTypes = {}

export default inject('commonStore')(observer(PublicModule))
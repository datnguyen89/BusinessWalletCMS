import ICONS from '../icons'

export const PAGES = {
  HOME: {
    NAME: 'home',
    PATH: '/',
  },
  LOGIN: {
    NAME: 'login',
    PATH: '/login',
  },
  NOT_PERMISSION: {
    NAME: 'not-permission',
    PATH: '/not-permission',
  },
  BUSINESS_CUSTOMER_PROFILE: {
    NAME: 'business-customer-profile',
    PATH: '/business-customer-profile',
  },
  BUSINESS_USER_MANAGER: {
    NAME: 'business-user-manager',
    PATH: '/business-user-manager',
  },
  BUSINESS_DEPARTMENT: {
    NAME: 'business-department',
    PATH: '/business-department',
  },
  BUSINESS_APPROVE_BUSINESS: {
    NAME: 'business-approve-business',
    PATH: '/business-approve-business',
  },
  CUSTOMER_CREATE_CUSTOMER: {
    NAME: 'customer-create-customer-business',
    PATH: '/customer-create-customer-business',
  },
  CUSTOMER_CREATE_USER_BUSINESS: {
    NAME: 'customer-create-user-business',
    PATH: '/customer-create-user-business',
  },
  CUSTOMER_APPROVE_BUSINESS: {
    NAME: 'customer-approve-business',
    PATH: '/customer-approve-business',
  },
}

export const SIDEBAR_WIDTH_EXPAND = 240
export const SIDEBAR_WIDTH_COLLAPSE = 64
export const DEVICE = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
}

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAskgPKBcNpz71mi4NSYa5
    mazJrO0WZim7T2yy7qPxk2NqQE7OmWWakLJcaeUYnI0kO3yC57vck66RPCjKxWuW
    SGZ7dHXe0bWb5IXjcT4mNdnUIalR+lV8czsoH/wDUvkQdG1SJ+IxzW64WvoaCRZ+
    /4wBF2cSUh9oLwGEXiodUJ9oJXFZVPKGCEjPcBI0vC2ADBRmVQ1sKsZg8zbHN+gu
    U9rPLFzN4YNrCnEsSezVw/W1FKVS8J/Xx4HSSg7AyVwniz8eHi0e3a8VzFg+H09I
    5wK+w39sjDYfAdnJUkr6PjtSbN4/Sg/NMkKB2Ngn8oj7LCfe/7RNqIdiS+dQuSFg
    eQIDAQAB
    -----END PUBLIC KEY-----`

export const THEME_LIST = [
  {
    name: 'blue',
    borderRadius: '8px',
    solidColor: '#0465B0',
    solidLightColor: 'rgb(233, 245, 254)',
    gradientColor: 'linear-gradient(108.88deg, #04BEFE 0%, #4481EB 100%)',
    shadowColor: '0 2px 10px rgba(68, 129, 235, 0.5)',
    lightShadowColor: '0 2px 4px rgba(61, 147, 190, 0.24), 0 4px 8px rgba(61, 153, 190, 0.16)',
  },
  // {
  //   name: 'pink',
  //   borderRadius: '8px',
  //   solidColor: 'rgb(244, 67, 54)',
  //   solidLightColor: 'rgb(254, 237, 235)',
  //   gradientColor: 'linear-gradient(108.84deg, #F77062 0%, #FE5196 100%)',
  //   shadowColor: '0 2px 10px rgba(254, 81, 150, 0.5)',
  //   lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  // },
  {
    name: 'green',
    borderRadius: '8px',
    solidColor: '#3DBEA3',
    solidLightColor: '#ecf9f6',
    gradientColor: 'linear-gradient(167.51deg, #2ECF94 24.37%, #3DBEA3 78.07%)',
    shadowColor: '0 2px 10px rgba(46,207,148,0.6)',
    lightShadowColor: '0 2px 4px rgba(61, 190, 163, 0.24), 0 4px 8px rgba(61, 190, 163, 0.16)',
  },
  {
    name: 'violet',
    borderRadius: '8px',
    solidColor: 'rgb(229,46,113)',
    solidLightColor: 'rgba(229,46,113, .2)',
    gradientColor: 'linear-gradient(to top left,#ff8a00,#e52e71)',
    shadowColor: '0px 2px 10px rgba(229,46,113, 0.5)',
    lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  },
  {
    name: 'black',
    borderRadius: '8px',
    solidColor: 'rgb(70, 70, 70)',
    solidLightColor: 'rgb(200, 200, 200)',
    gradientColor: 'linear-gradient(108.88deg, rgb(121, 121, 121) 0%, rgb(70, 70, 70) 100%)',
    shadowColor: '0px 2px 10px rgba(70, 70, 70, 0.5)',
    lightShadowColor: '0 2px 4px rgba(0, 0, 0, 0.22), 0 4px 8px rgba(0, 0, 0, 0.04)',
  },
]
export const ACTION = {
  INSERT: 1,
  UPDATE: 2,
  DELETE: 3,
  ACTIVE: 4,
  INACTIVE: 5,
}
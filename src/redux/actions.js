export const addBusiness = (shop) => {
  return {
      type: 'ADD_BUSINESS',
      value: shop
  }
}

export const removeBusiness = (index) => {
  return {
      type: 'REMOVE_BUSINESS',
      value: index
  }
}

export const loginUser = (username) => {
  return {
      type: 'LOGIN',
      value: username
  }
}
'use strict'
const config = require('./../config')
const store = require('./../store')

const createChildren = function (data) {
  return $.ajax({
    url: config.apiUrl + '/children',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexChildren = function () {
  return $.ajax({
    url: config.apiUrl + '/children',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createChildren,
  indexChildren
}

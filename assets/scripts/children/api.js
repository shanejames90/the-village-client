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

const indexChildren = function (data) {
  return $.ajax({
    url: config.apiUrl + '/children',
    method: 'GET',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateChildren = function (data) {
  // store id in variable and pass it to end of path
  // const id = data.child.id
  const id = data.child.id
  return $.ajax({
    url: config.apiUrl + '/children/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const findChild = function (data) {
  // store id in variable and pass it to end of path
  // const id = data.child.id
  const id = data.child.id
  return $.ajax({
    url: config.apiUrl + '/children/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteChild = function (data) {
  // store id in variable and pass it to end of path
  // const id = data.child.id
  const id = data.child.id
  return $.ajax({
    url: config.apiUrl + '/children/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createChildren,
  indexChildren,
  updateChildren,
  findChild,
  deleteChild
}

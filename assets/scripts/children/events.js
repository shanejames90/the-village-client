'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateChildren = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()
  // get data from form
  // Pass the form DOM object to `getFormFields`:
  // Use event.target as the form
  const form = event.target
  const data = getFormFields(form)
  $('#addChildModal').modal('hide')
  api.createChildren(data)
    .then(ui.createChildrenSuccess)
    .catch(ui.createChildrenFailure)
}

const onIndexChildren = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.indexChildren(data)
    .then(ui.indexChildrenSuccess)
    .catch(ui.indexChildrenFailure)
}

const onUpdateChildren = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()
  // get data from form
  // Pass the form DOM object to `getFormFields`:
  // Use event.target as the form
  const form = event.target
  const data = getFormFields(form)
  $('#updateChildModal').modal('hide')
  $('#update-message').text('Your little one is up to date!')
  api.updateChildren(data)
    .then(ui.updateChildrenSuccess)
    .catch(ui.updateChildrenFailure)
}

const onFindChild = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()
  // get data from form
  // Pass the form DOM object to `getFormFields`:
  // Use event.target as the form
  const form = event.target
  const data = getFormFields(form)
  $('#findChildModal').modal('hide')
  api.findChild(data)
    .then(ui.findChildSuccess)
    .catch(ui.findChildFailure)
}

const onDeleteChild = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()
  // get data from form
  // Pass the form DOM object to `getFormFields`:
  // Use event.target as the form
  const form = event.target
  const data = getFormFields(form)
  $('#deleteChildModal').modal('hide')
  api.deleteChild(data)
    .then(ui.deleteChildSuccess)
    .catch(ui.deleteChildFailure)
}

module.exports = {
  onCreateChildren,
  onIndexChildren,
  onUpdateChildren,
  onFindChild,
  onDeleteChild
}

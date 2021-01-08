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
  api.createChildren(data)
    .then(ui.createChildrenSuccess)
    .catch(ui.createChildrenFailure)
}

const onIndexChildren = function (event) {
  event.preventDefault()

  api.indexChildren()
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
  api.updateChildren(data)
    .then(ui.updateChildrenSuccess)
    .catch(ui.updateChildrenFailure)
}

module.exports = {
  onCreateChildren,
  onIndexChildren,
  onUpdateChildren
}

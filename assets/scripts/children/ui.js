'use strict'

const store = require('./../store')

// The ajax function's .then
// will pass this funciton a response object from the API
const createChildrenSuccess = function (data) {
  // This generates a new game id when New Game button is hit.
  store.child = data.child
  $('.sign-in-message').text(`${store.child.name} successfully added to The Village!`)
  $('form').trigger('reset')
}

// The ajax function's .catch
// will pass this funciton an error object
const createChildrenFailure = function (error) {
  $('.sign-in-message').text('Sign up failed with error: ' + error.responseJSON.message)
}

const indexChildrenSuccess = function (response) {
  console.log(response)
  const allChildren = response.children
  let allListHTML = ''
  allChildren.forEach(myChild => {
    const myChildHTML = (`
      <ul class="list-group list-group-horizontal-md" id="myList">
        <li class="list-group-item" id="myListName">Name: ${myChild.name}</li>
        <li class="list-group-item" id="myListDob">Date of Birth: ${myChild.dob}</li>
      </ul>`)
    allListHTML += myChildHTML
  })
  $('.display-children').show()
  $('.display-children').html(allListHTML)
}

const indexChildrenFailure = function (error) {
  $('.sign-in-message').text('failed with error: ' + error.responseJSON.message)
}

const updateChildrenSuccess = function (response) {
  $('.sign-in-message').text('Successfully Updated')
  $('form').trigger('reset')
}

const updateChildrenFailure = function (error) {
  $('.sign-in-message').text('failed with error: ' + error.responseJSON.message)
}

const findChildSuccess = function (response) {
  // store response resource in a variable
  const foundChild = response.child
  // turn to string
  const foundString = JSON.stringify({ foundChild })
  $('.sign-in-message').text('Successfully Found Child!')
  $('#display-find').text(foundString)
  $('form').trigger('reset')
}

const findChildFailure = function (error) {
  $('.sign-in-message').text('failed with error: ' + error.responseJSON.message)
}

const deleteChildSuccess = function (response) {
  $('#delete-message').text('Successfully Deleted!')
  $('form').trigger('reset')
}

const deleteChildFailure = function (error) {
  $('#delete-message').text('failed with error: ' + error.responseJSON.message)
}

module.exports = {
  createChildrenSuccess,
  createChildrenFailure,
  indexChildrenSuccess,
  indexChildrenFailure,
  updateChildrenSuccess,
  updateChildrenFailure,
  findChildSuccess,
  findChildFailure,
  deleteChildSuccess,
  deleteChildFailure
}

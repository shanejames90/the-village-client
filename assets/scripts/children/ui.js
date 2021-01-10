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
  const allChildren = response.children
  let allListHTML = ''
  allChildren.forEach(myChild => {
    const myChildHTML = (`
        <ul class="list-group list-group-horizontal-md" id="myList">
          <li class="list-group-item flex-fill" id="myListName"><h5>Name:</h4> ${myChild.name}</li>
          <li class="list-group-item flex-fill" id="myListDob"><h5>Date of Birth:</h5> ${myChild.dob}</li>
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Weight:</h5> ${myChild.birthWeight}</li>
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Length:</h5> ${myChild.birthLength}</li>
        </ul>
      `)
    allListHTML += myChildHTML
  })
  $('.jumbo-two').show()
  $('.display-children').show()
  $('.display-children').html(allListHTML)
  $('#display-children').text('Successfully Found Your Children!')
}

const indexChildrenFailure = function (error) {
  $('#display-children').text('failed with error: ' + error.responseJSON.message)
}

const updateChildrenSuccess = function (response) {
  $('#update-message').text('Successfully Updated')
  $('form').trigger('reset')
}

const updateChildrenFailure = function (error) {
  $('#update-message').text('failed with error: ' + error.responseJSON.message)
}

const findChildSuccess = function (response) {
  // store response resource in a variable
  const foundChild = response.child
  // turn to string
  // const foundString = JSON.stringify({ foundChild })
  const myChildHTML = (`
        <ul class="list-group list-group-horizontal-md" id="oneList">
          <li class="list-group-item flex-fill" id="myListName"><h5>Name:</h4> ${foundChild.name}</li>
          <li class="list-group-item flex-fill" id="myListDob"><h5>Date of Birth:</h5> ${foundChild.dob}</li>
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Weight:</h5> ${foundChild.birthWeight}</li>
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Length:</h5> ${foundChild.birthLength}</li>
        </ul>
      `)
  $('.jumbo-one').show()
  $('.display-one').show()
  $('.display-one').html(myChildHTML)
  $('#display-find').text('Successfully Found Child!')
  // $('#display-find').text(foundString)
  $('form').trigger('reset')
}

const findChildFailure = function (error) {
  $('#display-find').text('failed with error: ' + error.responseJSON.message)
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

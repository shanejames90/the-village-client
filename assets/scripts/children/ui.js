'use strict'

const store = require('./../store')

// The ajax function's .then
// will pass this funciton a response object from the API
const createChildrenSuccess = function (data) {
  // This generates a new game id when New Game button is hit.
  store.child = data.child
  $('#create-child-message').show()
  $('.jumbo-addc').show()
  $('#create-child-message').text(`${store.child.name} is now a Villager!`)
  $('form').trigger('reset')
  $('.sign-in-message').hide()
  $('.jumbo-signin').hide()
  $('.jumbo-two').hide()
  $('#display-children').hide()
  $('.display-children').hide()
  $('#changepw-message').hide()
  $('.jumbo-updatepw').hide()
  $('#update-message').hide()
  $('.jumbo-updatec').hide()
  $('.jumbo-one').hide()
  $('.display-one').hide()
  $('#display-find').hide()
  $('#delete-message').hide()
  $('.jumbo-deletec').hide()
}

// The ajax function's .catch
// will pass this funciton an error object
const createChildrenFailure = function (error) {
  $('#create-child-message').show()
  $('.jumbo-addc').show()
  $('.sign-in-message').text('Sign up failed with error: ' + error.responseJSON.message)
}

const indexChildrenSuccess = function (response) {
  const allChildren = response.children
  let allListHTML = ''
  allChildren.forEach(myChild => {
    const myChildHTML = (`
        <ul class="list-group list-group-horizontal-md" id="myList" data-header="Your Children">
          <li class="list-group-item flex-fill" id="myListName"><h5>Name:</h4> ${myChild.name}</li>
          <li class="list-group-item flex-fill" id="myListDob"><h5>Date of Birth:</h5> ${myChild.dob}</li>
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Weight(lbs):</h5> ${myChild.birthWeight}</li>
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Length(in.):</h5> ${myChild.birthLength}</li>
        </ul>
      `)
    allListHTML += myChildHTML
  })
  $('.jumbo-two').show()
  $('.display-children').show()
  $('#display-children').show()
  $('.jumbo-one').hide()
  $('.display-one').hide()
  $('#display-find').hide()
  $('#update-message').hide()
  $('.jumbo-updatec').hide()
  $('.sign-in-message').hide()
  $('.jumbo-signin').hide()
  $('#changepw-message').hide()
  $('.jumbo-updatepw').hide()
  $('#create-child-message').hide()
  $('.jumbo-addc').hide()
  $('#delete-message').hide()
  $('.jumbo-deletec').hide()
  $('.display-children').html(allListHTML)
  $('#display-children').text('Here are all your little beauties:')
}

const indexChildrenFailure = function (error) {
  $('#display-children').show()
  $('#display-children').text('failed with error: ' + error.responseJSON.message)
}

const updateChildrenSuccess = function (response) {
  $('.sign-in-message').hide()
  $('.jumbo-signin').hide()
  $('.jumbo-two').hide()
  $('#changepw-message').hide()
  $('.jumbo-updatepw').hide()
  $('.jumbo-one').hide()
  $('.display-one').hide()
  $('#display-find').hide()
  $('#create-child-message').hide()
  $('.jumbo-addc').hide()
  $('.display-children').hide()
  $('#display-children').hide()
  $('#delete-message').hide()
  $('.jumbo-deletec').hide()
  $('#update-message').show()
  $('.jumbo-updatec').show()
  // $('#update-message').text('Your little ducky is up to date!')
  $('form').trigger('reset')
}

const updateChildrenFailure = function (error) {
  $('#update-message').show()
  $('.jumbo-updatec').show()
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
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Weight(lbs):</h5> ${foundChild.birthWeight}</li>
          <li class="list-group-item flex-fill" id="myListBw"><h5>Birth Length(in.):</h5> ${foundChild.birthLength}</li>
        </ul>
      `)
  $('.jumbo-one').show()
  $('.jumbo-two').hide()
  $('.display-one').show()
  $('#update-message').hide()
  $('.jumbo-updatec').hide()
  $('.sign-in-message').hide()
  $('.jumbo-signin').hide()
  $('#changepw-message').hide()
  $('.jumbo-updatepw').hide()
  $('#create-child-message').hide()
  $('.jumbo-addc').hide()
  $('.display-children').hide()
  $('#display-children').hide()
  $('#delete-message').hide()
  $('.jumbo-deletec').hide()
  $('#display-find').show()
  $('.display-one').html(myChildHTML)
  $('#display-find').text('Here is the little ducky:')
  // $('#display-find').text(foundString)
  $('form').trigger('reset')
}

const findChildFailure = function (error) {
  $('#display-find').show()
  $('#display-find').text('failed with error: ' + error.responseJSON.message)
}

const deleteChildSuccess = function (response) {
  $('.jumbo-one').hide()
  $('.display-one').hide()
  $('#display-find').hide()
  $('.sign-in-message').hide()
  $('.jumbo-signin').hide()
  $('.jumbo-two').hide()
  $('#update-message').hide()
  $('.jumbo-updatec').hide()
  $('#changepw-message').hide()
  $('.jumbo-updatepw').hide()
  $('#create-child-message').hide()
  $('.jumbo-addc').hide()
  $('.display-children').hide()
  $('#display-children').hide()
  $('#delete-message').show()
  $('.jumbo-deletec').show()
  $('#delete-message').text('We Miss You Already!')
  $('form').trigger('reset')
}

const deleteChildFailure = function (error) {
  $('#delete-message').show()
  $('.jumbo-deletec').show()
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

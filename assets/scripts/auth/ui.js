'use strict'

const store = require('./../store')

// The ajax function's .then
// will pass this funciton a response object from the API
const signUpSuccess = function (response) {
  $('.jumbo-three').hide()
  $('.jumbo-signup').show()
  $('.jumbo-signupbg').show()
  $('.sign-up-message').show()
  $('.error-message').hide()
  $('.sign-up-message').text('Congratulations, you are now apart of The Village! Sign in to your new home!')
  $('form').trigger('reset')
}

// The ajax function's .catch
// will pass this funciton an error object
const signUpFailure = function (error) {
  $('.sign-up-message').show()
  $('.sign-up-message').text('Sign up failed with error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  // "store" the User
  // Create a new key on the 'store' object
  // Give that key a value of 'response.user'
  store.user = response.user
  $('#cloud-happy').hide()
  $('#update-message').hide()
  $('.jumbo-updatec').hide()
  $('.jumbo-two').hide()
  $('.jumbo-one').hide()
  $('.sign-up-message').hide()
  $('.jumbo-signup').hide()
  $('.jumbo-signupbg').hide()
  $('.display-children').hide()
  $('#display-children').hide()
  $('.display-one').hide()
  $('#create-child-message').hide()
  $('.jumbo-addc').hide()
  $('.jumbo-addcbg').hide()
  $('.sign-out-message').hide()
  $('.jumbo-signoutbg').hide()
  $('.jumbo-signout').hide()
  $('.sign-in-message').show()
  $('.jumbo-signin').show()
  $('.jumbo-signinbg').show()
  $('#display-find').hide()
  $('#delete-message').hide()
  $('.jumbo-deletec').hide()
  $('.sign-in-message').text(`Welcome, ${store.user.firstName}!`)
  // $('.sign-in-message').text(`Welcome Back ${store.user.email}!`)
  $('#changepw-message').hide()
  $('.jumbo-updatepw').hide()
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('.sign-up-message').hide()
  $('.jumbo-signup').hide()
  $('.jumbo-signupbg').hide()
  $('.error-message').show()
  $('.error-message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const signOutSuccess = function () {
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('.welcome-message').hide()
  $('.sign-out-message').show()
  $('.jumbo-signoutbg').show()
  $('.jumbo-signout').show()
  $('.sign-out-message').text('See you soon!')
  store.user = null
  // Reset form:
  $('form').trigger('reset')
  $('.sign-in-message').hide()
  $('.jumbo-signin').hide()
  $('.jumbo-signinbg').hide()
  $('#display-children').hide()
  $('#update-message').hide()
  $('.jumbo-updatec').hide()
  $('#display-find').hide()
  $('.jumbo-two').hide()
  $('#changepw-message').hide()
  $('.jumbo-updatepw').hide()
  $('#create-child-message').hide()
  $('.jumbo-addc').hide()
  $('.jumbo-addcbg').hide()
  $('.jumbo-one').hide()
  $('.display-one').hide()
  $('#display-find').hide()
  $('#delete-message').hide()
  $('.jumbo-deletec').hide()
  $('.sign-up-message').hide()
  $('.jumbo-signup').hide()
  $('.jumbo-signupbg').hide()
  $('.jumbo-three').hide()
  $('.error-message').hide()
}

const signOutFailure = function (error) {
  $('.sign-out-message').text('Sign out fail: ' + error.responseJSON.message)
}

const changePasswordSuccess = function () {
  $('#changepw-message').show()
  $('.jumbo-updatepw').show()
  $('#update-message').hide()
  $('.jumbo-updatec').hide()
  $('#create-child-message').hide()
  $('.jumbo-addc').hide()
  $('.jumbo-addcbg').hide()
  $('.jumbo-two').hide()
  $('.sign-in-message').hide()
  $('.jumbo-signin').hide()
  $('.jumbo-signinbg').hide()
  $('#display-children').hide()
  $('.jumbo-one').hide()
  $('.display-one').hide()
  $('#display-find').hide()
  $('#delete-message').hide()
  $('.jumbo-deletec').hide()
  $('#changepw-message').text('Password changed successfully!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('.sign-in-message').text('Password change failed with error: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

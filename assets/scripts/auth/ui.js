'use strict'

const store = require('./../store')

// The ajax function's .then
// will pass this funciton a response object from the API
const signUpSuccess = function (response) {
  $('.sign-up-message').text('Signed up successfully! Welcome to The Village!')
  $('form').trigger('reset')
}

// The ajax function's .catch
// will pass this funciton an error object
const signUpFailure = function (error) {
  $('.sign-up-message').text('Sign up failed with error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  // "store" the User
  // Create a new key on the 'store' object
  // Give that key a value of 'response.user'
  store.user = response.user
  $('.display-children').hide()
  $('.sign-in-message').text(`Welcome Back ${store.user.firstName}!`)
  // $('.sign-in-message').text(`Welcome Back ${store.user.email}!`)
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('.sign-up-message').text('Sign in failed with error: ' + error.responseJSON.message)
}

const signOutSuccess = function () {
  $('.sign-up-message').text('Hurry back to The Village!')
  store.user = null
  // Reset form:
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('.sign-up-message').text('Sign out fail: ' + error.responseJSON.message)
}

const changePasswordSuccess = function () {
  $('.sign-in-message').text('Password changed successfully!')
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

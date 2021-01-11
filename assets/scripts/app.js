'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const childrenEvents = require('./children/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.jumbo-signup').hide()
  $('.jumbo-signupbg').hide()
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#menu-toggle').click(function (e) {
    e.preventDefault()
    $('#wrapper').toggleClass('toggled')
  })
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-children').on('submit', childrenEvents.onCreateChildren)
  $('#index-children').on('submit', childrenEvents.onIndexChildren)
  $('#update-children').on('submit', childrenEvents.onUpdateChildren)
  $('#find-child').on('submit', childrenEvents.onFindChild)
  $('#delete-child').on('submit', childrenEvents.onDeleteChild)
})

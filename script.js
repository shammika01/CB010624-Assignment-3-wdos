const navigation = document.getElementsByClassName('nav-links')[0]
const hamburgerbutton = document.getElementsByClassName('hamburger-button')[0]


hamburgerbutton.addEventListener('click', () => {
  navigation.classList.toggle('active')
})
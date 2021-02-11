/* eslint-disable no-unused-vars */
import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/krsnyder')
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function func({avatar_url, name, login, location, html_url, followers_url, following_url, bio}) {
  let card = document.createElement('div')
  card.classList.add('card')

  let avatar = document.createElement('img')
  avatar.setAttribute('src', avatar_url)
  card.appendChild(avatar)

  let cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)

  let myName = document.createElement('h3')
  myName.classList.add('name')
  myName.textContent = name
  cardInfo.appendChild(myName)

  let userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = login
  cardInfo.appendChild(userName)

  let myLocation = document.createElement('p')
  myLocation.textContent = `Location: ${location}`
  cardInfo.appendChild(myLocation)

  let link = document.createElement('a')
  link.setAttribute('src', html_url)
  link.textContent = html_url

  let profile = document.createElement('p')
  profile.textContent = `Profile: ${link}`
  cardInfo.appendChild(profile)

  let follower = document.createElement('p')
  follower.textContent = `Follower: ${followers_url}`
  cardInfo.appendChild(follower)

  let following = document.createElement('p')
  following.textContent = `Following: ${following_url}`
  cardInfo.appendChild(following)

  let myBio = document.createElement('p')
  myBio.textContent = `Bio: ${bio}`
  cardInfo.appendChild(myBio)

  return card
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

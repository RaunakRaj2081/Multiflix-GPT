
# Features

- Login/Sign Up
    -- sign In / sign Up Form
    -- redirect to browse page

- Browse (after authentication)
    -- Header
    -- Main Movie
          --- Trailor in background
          --- Title & Description
          --- Movie suggestions
               ----- MovieLists * N
                 ------ MovieCards * N

- NetflixGPT
   -- Search Bar
   -- Movie Suggestions

# useRef Hook

// regex for email and password

# Firebase for authentication of form

-- npm i firebase
-- npm i -g firebase-tools

 -- firebase login
 -- firebase init
 -- firebase deploy

 -- https://firebase.google.com/docs/auth/web/password-authentication ---> for signIn /signUp

 -- https://firebase.google.com/docs/auth/web/manage-users ---> for onAuthStateChanged

 # useNavigate()

 # fetch from TMDB movies

 # Browse page
    Maincontainer
     - videoBackground
     - videoTitle
    SecondaryContainer
     - MovieList * N
       - cards * N
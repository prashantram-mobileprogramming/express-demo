const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");


btnLogin.addEventListener('click', (e) => {

  const email = txtEmail.value;
  const password = txtPassword.value;

  firebase.auth().signInWithEmailAndPassword(email, password).then((userName) => {
    console.log(`logged In!!!`);
    console.log(userName.user.email);
  }).catch(function(error) {
    console.log("ERROR Logging In!!")
    console.log(error);
  });


})


btnSignUp.addEventListener('click', (e) => {

  const email = txtEmail.value;
  const password = txtPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then((userName)=>{
      console.log(userName.user.email);
      console.log("User Created!!!");
    }
).catch((error) => {
    console.log("ERROR Sign Up");
    console.log(error);
  });


})

btnLogout.addEventListener('click', (e) => {

  const email = txtEmail.value;
  const password = txtPassword.value;

  firebase.auth().signOut().then(() => {
    console.log("User was logged out!!")
  }, (error) => {
    console.log(error);
  });


})


//This function will fire EVERYTIME THERE IS A STATE CHANGE in AUTH()
firebase.auth().onAuthStateChanged((firebaseUser) => {

    if (firebaseUser) {
      console.log('Firebase user logged in!')
      console.log(firebaseUser.email);
    } else {
      console.log("not logged in")
    }

  }

);
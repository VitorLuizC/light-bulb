import application from './application.js'

export const authentication = application.auth()

export const signIn = async ({ email, password }) => {
  try {
    await authentication.signInWithEmailAndPassword(email, password)
  } catch (err) {
    console.log(err)
  }
}

export const signOut = async () => {
  try {
    await authentication.signOut()
  } catch (err) {
    console.log(err)
  }
}

export const signUp = async ({ name, email, password }) => {
  try {
    await authentication.createUserWithEmailAndPassword(email, password)
    await authentication.currentUser.updateProfile({ displayName: name })
  } catch (err) {
    console.log(err)
  }
}

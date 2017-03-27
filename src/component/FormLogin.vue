<template lang="pug">
  form.form-login
    form-field(type="email", label="E-Mail", :value="email", @update="updateEmail")
    form-field(type="password", label="Password", :value="password", @update="updatePassword")
    button(@click.prevent="signIn") Sign In
</template>

<script>
  import application from '../lib/application.js'
  import FormField from './FormField.vue'

  const authentication = application.auth()

  export default {
    components: { FormField },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn() {
        authentication
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => console.log(user))
          .catch(error => console.log(error))
      },
      updateEmail(email) {
        this.email = email
      },
      updatePassword(password) {
        this.password = password
      }
    }
  }
</script>

<template lang="pug">
  form.form-login(@submit.prevent="signIn")
    form-group(title="Login")
      form-field(label="E-Mail")
        input(slot="field" type="email", @input="email = $event.target.value")
      form-field(label="Password")
        input(slot="field" type="password", @input="password = $event.target.value")
      button(type="submit") Sign In
</template>

<script>
  import { authentication } from '../lib/application.js'
  import FormGroup from './FormGroup.vue'
  import FormField from './FormField.vue'

  export default {
    components: { FormField, FormGroup },
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
      }
    }
  }
</script>

<template lang="pug">
  form.form-login(@submit.prevent="signIn")
    form-group(title="Login")
      form-field(label="E-Mail")
        input(slot="field", type="email", v-model="email")
      form-field(label="Password")
        input(slot="field", type="password", v-model="password")
      button(type="submit") Sign In
      router-link(to="/subscribe") Sign Up
</template>

<script>
  import * as auth from '../lib/authentication.js'
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
      async signIn() {
        await auth.signIn({
          email: this.email,
          password: this.password
        })

        this.$router.push('/dashboard')
      }
    }
  }
</script>

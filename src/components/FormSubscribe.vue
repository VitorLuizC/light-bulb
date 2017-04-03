<template lang="pug">
  form.form-subscribe(@submit.prevent="signUp")
    form-group(title="Subscribe")
      form-field(label="Name")
        input(slot="field", type="text", v-model="name")
      form-field(label="E-Mail")
        input(slot="field", type="email", v-model="email")
      form-field(label="Password")
        input(slot="field", type="password", v-model="password")
      button(type="submit") Sign Up
      router-link(to="/login") Sign In
</template>

<script>
  import FormField from './FormField.vue'
  import FormGroup from './FormGroup.vue'
  import * as auth from '../lib/authentication.js'

  export default {
    components: { FormGroup, FormField },
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async signUp() {
        await auth.signUp({
          name: this.name,
          email: this.email,
          password: this.password
        })

        this.$router.push('/dashboard')
      }
    }
  }
</script>

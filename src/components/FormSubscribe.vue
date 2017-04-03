<template lang="pug">
  form.form-subscribe(@submit.prevent="signUp")
    form-group(title="Subscribe")
      form-field(label="Name")
        input(slot="field", type="text", @input="name = $event.target.value")
      form-field(label="E-Mail")
        input(slot="field", type="email", @input="email = $event.target.value")
      form-field(label="Password")
        input(slot="field", type="password", @input="password = $event.target.value")
      button(type="submit") Sign Up
      router-link(to="/login") Sign In
</template>

<script>
  import FormField from './FormField.vue'
  import FormGroup from './FormGroup.vue'
  import { authentication } from '../lib/application.js'

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
        await this.$store.dispatch('signUp', {
          name: this.name,
          email: this.email,
          password: this.password
        })

        this.$router.push('/dashboard')
      }
    }
  }
</script>

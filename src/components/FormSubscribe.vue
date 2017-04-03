<template lang="pug">
  form.form-subscribe(@submit.prevent="signUp")
    form-group(title="Subscribe")
      form-field(label="E-Mail")
        input(slot="field", type="email", @input="email = $event.target.value")
      form-field(label="Password")
        input(slot="field", type="password", @input="password = $event.target.value")
      button(type="submit") Sign Up
</template>

<script>
  import FormField from './FormField.vue'
  import FormGroup from './FormGroup.vue'
  import { authentication } from '../lib/application.js'

  export default {
    components: { FormGroup, FormField },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signUp() {
        let user = {
          email: this.email,
          password: this.password
        }

        await this.$store.commit('signUp', user)
      }
    }
  }
</script>

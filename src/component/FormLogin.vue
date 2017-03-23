<template lang="pug">
  form.form-login
    input(type="email", v-model="email")
    input(type="password", v-model="password")
    button(@click.prevent="signIn") Sign In
</template>

<script>
  import application from '../lib/application.js';

  const authentication = application.auth();

  export default {
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
          .catch(error => console.log(error));
      }
    }
  }
</script>

<style lang="stylus"></style>

<template>
  <v-container fluid class="message-container pa-10">
    <h1 class="display-3">Login</h1>  
    <v-layout row wrap>
      <v-text-field v-model="email" label="Email" required></v-text-field>
    </v-layout>

    <v-layout row wrap>
          <v-text-field type="password" v-model="password" label="password" required></v-text-field>
    </v-layout>

    <v-layout row wrap>
      <v-btn @click="login" color="info">Login</v-btn>
    </v-layout>

  </v-container>
</template>

<script>
const socket = io.connect("http://localhost:3000");
export default {
  props: {
    msg: String
  },
  data() {
    return {
      email: "",
      password : ""
    };
  },
  mounted() {
  },
  methods: {
    login() {
        console.log("login",this.email,this.password);
    }
  }
};
</script>

<style scoped>
.message-container{
  height:350px
}
.footer {
  margin-top: 2rem;
}
.flex-container {
  width: 100%;
}
.senderColor {
  color: white;
  background: #2196f3;
}
</style>

<template>
  <v-container fluid class="message-container pa-10">
    <v-layout row wrap>
      
      <v-flex v-for="(msg,index) in messages" :key="index" class="flex-container">
        <div  :class="user_id === msg.data.user_id ? 'text-xs-right' : 'text-xs-right' ">
          <v-chip :class="user_id === msg.data.user_id ? 'senderColor' : ''">{{msg.data.message}}</v-chip>
        </div>
      </v-flex>

      <v-flex class="flex-container">
        <div class="text-xs-left">
          <v-chip>How are you ?</v-chip>
        </div>
      </v-flex>

    </v-layout>

    <!-- bottom comp -->
    <v-layout class="footer" row wrap>
      <v-text-field v-model="message" label="Message" required></v-text-field>
      <v-btn @click="sendMessage" color="info">Send</v-btn>
    </v-layout>
    <!-- bottom comp -->
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
      message: "",
      messages : [],
      user_id: 1
    };
  },
  mounted() {
    socket.on("chat", (data) => {
      this.messages.push(data);
      console.log("chat", data);
    });
  },
  methods: {
    sendMessage() {
      socket.emit("chat", {message : this.message , user_id : 1});
      this.message = "" 
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

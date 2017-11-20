<template>
  <div class="hello">
    <h1>MetaCoin</h1>
    <h2>Example Truffle Dapp</h2>
    <h3>You have <span class="black"><span id="balance"></span> META</span></h3>

    <br>
    <h1>Send MetaCoin</h1>
    <br><label for="amount">Amount:</label><input type="text" id="amount" placeholder="e.g., 95"></input>
    <br><label for="receiver">To Address:</label><input type="text" id="receiver" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae"></input>
    <br><br><button id="send" onclick="App.sendCoin()">Send MetaCoin</button>
    <br><br>
    <span id="status"></span>
    <br>
    <span class="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>
  </div>
</template>

<script>
export default {
  name: 'MetaCoin',
  data () {
    return {
    //   msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>

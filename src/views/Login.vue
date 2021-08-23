<template>
  <div class="login" style="background-color: #2C2E43; color: #b2b1b9">

    <br />
    <br />
    <div class="card text-center" style="padding: 0.4em; width: 50%; margin: auto; background-color: #595260;">
      <div class="card-header" style="background-color: #b2b1b9; color: #595260; font-size: 1.5rem">Sign In</div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">
          <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email Address:</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="newSessionParams.email">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password:</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="newSessionParams.password">
      </div>
      <br/>
      <input class="btn btn-dark mt-auto" type="submit" value="Submit" />
    </form>
      </div>
      <div class="card-footer text-muted" style="background-color: #b2b1b9; color: #595260"></div>
    </div>
    <br />
    <br />


 
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

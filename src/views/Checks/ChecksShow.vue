<template>
  <div class="checks-index" style="background-color: #2C2E43; color: #b2b1b9">
    <br />
    <h1 style="margin: auto">{{ message }}</h1>
    <br />
    <p style="text-align: center">
      Ready to pay? Click the button below to generate your check!
      <br />
      <br />
      <a v-on:click="checksCreate()" class="btn btn-primary">Check Out</a>
    </p>
    <div
      class="card text-center"
      style="width: 50%; margin: auto"
      v-for="check in checks"
      v-bind:key="check.id"
    >
      <div class="card-header" style="background-color: #b2b1b9; color: #595260">Ramen Land Check</div>
      <div class="card-body" style="background-color:#595260">
        <h5 class="card-title">Check: {{ check.id }}</h5>
        <p class="card-text">
          Subtotal: {{ check.subtotal }}
          <br />
          Tax: {{ check.tax }}
          <br />
          Total: {{ check.total }}
          <br />
          Status: {{ check.status }}
        </p>
        <a class="btn btn-dark mt-auto" v-on:click="updateCheck(check)">Pay Now</a>
      </div>
      <div class="card-footer" style="background-color: #b2b1b9; color: #595260">Thank you! Please Come Again!</div>
    </div>
    <br />
    <br />
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Check Out",
      checks: [],
      check: {},
      // searchTerm: "",
    };
  },
  created: function () {
    this.indexChecks();
  },
  methods: {
    indexChecks: function () {
      axios.get("/checks").then((response) => {
        console.log(response.data);
        this.checks = response.data;
      });
    },
    checksCreate: function () {
      axios
        .post("/checks")
        .then((response) => {
          console.log(response.data);
          this.$router.push("/checks");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    updateCheck: function (check) {
      var editCheckParams = check;
      axios
        .patch("/checks/" + check.id, editCheckParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/thankyou");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

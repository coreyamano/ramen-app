<template>
  <div class="checks-index">
    <br />
    <h1 style="margin: auto">{{ message }}</h1>
    <br />
    <div
      class="card text-center"
      style="width: 50%; margin: auto"
      v-for="check in checks"
      v-bind:key="check.id"
    >
      <div class="card-header">Ramen Land Check</div>
      <div class="card-body">
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
        <a class="btn btn-primary" v-on:click="updateCheck(check)">Pay Now</a>
      </div>
      <div class="card-footer text-muted">Thank you! Please Come Again!</div>
    </div>
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
    updateCheck: function (check) {
      var editCheckParams = check;
      axios
        .patch("/checks/" + check.id, editCheckParams)
        .then((response) => {
          console.log(response.data);
          // this.$router.push("/checks");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="checks-index">
    <h1>{{ message }}</h1>
    <div v-for="check in checks" v-bind:key="check.id">
      <p>Check Number: {{ check.id }}</p>
      <p>Subtotal: {{ check.subtotal }}</p>
      <p>Tax: {{ check.tax }}</p>
      <p>Total: {{ check.total }}</p>
      <p>Status: {{ check.status }}</p>
      <br />
      <!-- <p>{{ product.image }}</p> -->
      <!-- <router-link v-bind:to="`/products/${product.id}`">
        <img v-bind:src="products.image" /> -->
      <!-- </router-link> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "All Checks",
      checks: [],
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
    // checksCreate: function () {
    //   axios
    //     .post("/checks")
    //     .then((response) => {
    //       console.log(response.data);
    //       this.$router.push("/checks");
    //     })
    //     .catch((error) => {
    //       this.errors = error.response.data.errors;
    //     });
    // },
  },
};
</script>

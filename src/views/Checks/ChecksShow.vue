<template>
  <div class="checks-index">
    <h1>{{ message }}</h1>
      <div class="row">
        <div class="col-sm-6" v-for="check in checks" v-bind:key="check.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> Check: {{ check.id }}</h5>
              <p class="card-text">
              Subtotal: {{ check.subtotal }}
              Tax: {{ check.tax }}
              Total: {{ check.total }}
              Status: {{ check.status }}
              </p>
              <a href="#" class="btn btn-primary">Payment</a>
            </div>
          </div>
        </div>
    </div>

    <!-- <div v-for="check in checks" v-bind:key="check.id"> -->
      <!-- <p>Check Number: {{ check.id }}</p>
      <p>Subtotal: {{ check.subtotal }}</p>
      <p>Tax: {{ check.tax }}</p>
      <p>Total: {{ check.total }}</p>
      <p>Status: {{ check.status }}</p>
      <br /> -->
      <!-- <p>{{ product.image }}</p> -->
      <!-- <router-link v-bind:to="`/products/${product.id}`">
        <img v-bind:src="products.image" /> -->
      <!-- </router-link> -->
    <!-- </div> -->
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

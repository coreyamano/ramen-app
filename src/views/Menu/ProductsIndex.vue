<template>
  <div class="products-index">
    <h1>{{ message }}</h1>

    <div v-for="product in products" v-bind:key="product.id">
      <p>{{ product.id }}</p>
      <p>{{ product.item_name }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <button v-on:click="orderedItemsCreate(product)">Add to Cart</button>
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
      message: "Full Menu",
      products: [],
      errors: [],
      tab_id: ""// searchTerm: "",
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    orderedItemsCreate: function (product) {
      var params = {
        item_name: product.item_name,
        product_id: product.id,
        tab_id: 4,
        quantity: 1,
        product_price: product.price,

        // check_id: 
      };
      axios
        .post("/ordered_items", params)
        .then((response) => {
          console.log(response.data);
          // this.$router.push("/ordered_items");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

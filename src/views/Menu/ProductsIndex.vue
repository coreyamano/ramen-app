<template>
  <div class="products-index">
    <h1>{{ message }}</h1>
    <div class="card w-50" v-for="product in products" v-bind:key="product.id">
      <div class="card-body">
        <h5 class="card-title">{{ product.item_name }}</h5>
          <p class="card-text">
          {{ product.description }}
          ${{ product.price }}
          </p>
          <!-- Special Instructions: <input type="text" v-model="customer_note"> -->
          <a class="btn btn-primary" v-on:click="orderedItemsCreate(product)"> Add to Cart </a>
      </div>
    </div>
      <!-- <p>{{ product.image }}</p> -->
      <!-- <router-link v-bind:to="`/products/${product.id}`">
        <img v-bind:src="products.image" /> -->
      <!-- </router-link> -->
    
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
      // quantity: null,
      tab_id: "",
      // customer_note: "",
      // searchTerm: "",
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
        quantity: 1, //this.quantity
        product_price: product.price,
        // customer_note: this.customer_note,

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

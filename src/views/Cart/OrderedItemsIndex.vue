<template>
  <div class="ordereditems-index">
    <h1>{{ message }}</h1>
    <a v-if="ordered_items.length !== 0" v-on:click="checksCreate()" class="btn btn-primary">Check Out</a>
    <br />
    <p v-if="ordered_items.length === 0">There's nothing in your order!</p>
    <a href="/products" class="btn btn-secondary">Back to Menu</a>
    <br />
      <form v-if="ordered_items.length !== 0">
      <p>Please select your dining experience:</p>
        <input type="radio" name="choice" value="Dine In" id="choice-dine-in"> 
        <label for="choice-yes">Dine In</label>
        <input type="radio" name="choice" value="Take Out" id="choice-take-out">
        <label for="choice-no">Take Out</label>
        <br />
        <br />
        <a class="btn btn-success">Place Order</a>
      </form>
    <br />
    <div v-for="ordered_item in ordered_items" v-bind:key="ordered_item.id">
      <p>Item: {{ ordered_item.product_item_name }}</p>
      <p>Price: {{ ordered_item.product_price }}</p>
      <p>Quantity: {{ ordered_item.quantity }}</p>
      <p>Status: {{ ordered_item.status }}</p>
      <p>Dining Option: {{ ordered_item.dining_option }}</p>
      <br />
      <form>
      <button v-on:click="orderedItemDestroy(ordered_item)" class="btn btn-danger">Remove Item</button>
      </form>
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
      message: "Your Order",
      ordered_items: [],
      dining_option: null,
      // searchTerm: "",
    };
  },
  created: function () {
    this.indexOrderedItems();
  },
  methods: {
    indexOrderedItems: function () {
      axios.get("/ordered_items").then((response) => {
        console.log(response.data);
        this.ordered_items = response.data;
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
    orderedItemDestroy: function (ordered_item) {
      axios.delete("/ordered_items/" + ordered_item.id).then((response) => {
        console.log("ordered item destroy", response);
        this.$routes.push("/ordered_items");
      });
    },
  },
};
</script>

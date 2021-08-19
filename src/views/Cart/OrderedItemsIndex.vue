<template>
  <div class="ordereditems-index" style="margin: auto; text-align: center;">
    <br/>
    <h1>{{ message }}</h1>
    <br/>
    <p v-if="ordered_items.length === 0">There's nothing in your order!</p>
    <a href="/products" class="btn btn-secondary">Back to Menu</a>
    <br/>
    <br/>
    <a v-if="ordered_items.length !== 0" v-on:click="checksCreate()" class="btn btn-primary">Check Out</a>
    <br/>
    <br/>

      <form v-if="ordered_items.length !== 0">
      <h3>Please select your dining experience:</h3>
        <input type="radio" name="choice" value="Dine In" id="choice-dine-in"> 
        <label for="choice-yes">Dine In</label>
        <input type="radio" name="choice" value="Take Out" id="choice-take-out">
        <label for="choice-no">Take Out</label>
        <br />
        <br />
        <a class="btn btn-success">Place Order</a>
        <!-- v-on:click="orderedItemsUpdate()" -->
      </form>

      <!-- <form v-if="ordered_items.length !== 0">
      <h3>Please select your dining experience:</h3>
        <input type="radio" name="choice" value="Dine In" id="choice-dine-in" v-model="ordered_item.dining_option"> 
        <label for="choice-yes">Dine In</label>
        <input type="radio" name="choice" value="Take Out" id="choice-take-out" v-model="ordered_item.dining_option">
        <label for="choice-no">Take Out</label>
        <br />
        <br />
        <a class="btn btn-success">Place Order</a>
        v-on:click="orderedItemsUpdate()"
      </form> -->

    <br />
    <div class="card mb-3" style="margin: auto; max-width: 540px;" v-for="ordered_item in ordered_items" v-bind:key="ordered_item.id">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Item: {{ ordered_item.product_item_name }}</h5>
            <p class="card-text">
            Price: {{ ordered_item.product_price }}
            <br/>
            Quantity: {{ ordered_item.quantity }}
            <br/>
            Status: {{ ordered_item.status }}
            <br/>
            Note: {{ ordered_item.customer_note }}
            </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="col-md-4">
          <p class="card-text">
            Update Quantity: <input type="number" v-model="ordered_item.quantity">
            <br/>
            Special Instructions: <input type="text" v-model="ordered_item.customer_note">
          </p>
          <!-- <form>
            <button v-on:click="orderedItemDestroy(ordered_item)" class="btn btn-danger">Remove Item</button>
          </form> -->
          <form>
            <button v-on:click="orderedItemDestroy(ordered_item)" class="btn btn-danger">Remove Item</button>
          </form>
        </div>
      </div>
    </div>
    <!-- <div v-for="ordered_item in ordered_items" v-bind:key="ordered_item.id">
      <p>Item: {{ ordered_item.product_item_name }}</p>
      <p>Price: {{ ordered_item.product_price }}</p>
      <p>Quantity: {{ ordered_item.quantity }}</p>
      <p>Status: {{ ordered_item.status }}</p>
      <p>Dining Option: {{ ordered_item.dining_option }}</p>
      <p>Customer Note: {{ ordered_item.customer_note }}</p>
      <br />
      <form>
      <button v-on:click="orderedItemDestroy(ordered_item)" class="btn btn-danger">Remove Item</button>
      </form> -->
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

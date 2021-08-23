<template>
  <div class="ordereditems-index" style="margin: auto; text-align: center; background-color: #2C2E43; color: #b2b1b9">
    <br />
    <h1>{{ message }}</h1>
    <br />
    <p v-if="ordered_items.length === 0">
      There's nothing sent to the kitchen yet!
    </p>
    <a href="/products" class="btn btn-secondary">Back to Menu</a>
    <br />
    <br />
    <a v-on:click="checksCreate()" class="btn btn-primary">Check Out</a>
    <br />

    <br />
    <div
      class="card mb-3"
      style="margin: auto; max-width: 540px"
      v-for="ordered_item in ordered_items"
      v-bind:key="ordered_item.id"
    >
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body" style="background-color: #595260">
            <h5 class="card-title">
              Item: {{ ordered_item.product_item_name }}
            </h5>
            <p class="card-text">
              Price: {{ ordered_item.product_price }}
              <br />
              Quantity: {{ ordered_item.quantity }}
              <br />
              Status: {{ ordered_item.status }}
              <br />
              Dining Option: {{ ordered_item.dining_option }}
              <br />
              Note: {{ ordered_item.customer_note }}
            </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        </div>
      </div>
      <br />
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
      dining_option: "",
      the_ordered_item: {},
      errors: [],
      status: "",
      // searchTerm: "",
    };
  },
  created: function () {
    this.indexOrderedItems();
  },
  methods: {
    indexOrderedItems: function () {
      axios.get("/order_updates").then((response) => {
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
  },
};
</script>
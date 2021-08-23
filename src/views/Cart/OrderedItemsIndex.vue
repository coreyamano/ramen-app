<template>
  <div class="ordereditems-index" style="margin: auto; text-align: center; background-color: #2C2E43; color: #b2b1b9">
    <br />
    <h1>{{ message }}</h1>
    <br />
    <p v-if="ordered_items.length === 0">
      There's nothing to send to the kitchen!
    </p>
    <a href="/products" class="btn btn-secondary">Back to Menu</a>
    <br />
    <br />
    <a href="/order_updates" class="btn btn-primary">Check Order Status</a>
    <br />
    <form v-if="ordered_items.length !== 0">
      <h3>Please enter your name for the order:</h3>
      <input type="text" v-model="tab_name" />
      <h3>Please select your dining experience:</h3>
      <input
        type="radio"
        name="dining_option"
        value="Dine In"
        id="choice-dine-in"
        v-model="dining_option"
      />
      <label for="choice-yes">Dine In</label>
      <input
        type="radio"
        name="dining_option"
        value="Take Out"
        id="choice-take-out"
        v-model="dining_option"
      />
      <label for="choice-no">Take Out</label>
      <br />
      <br />
      <a v-on:click="updateForKitchen()" class="btn btn-success">Place Order</a>
    </form>
    <br />
    <div
      class="card mb-3"
      style="margin: auto; max-width: 540px"
      v-for="ordered_item in ordered_items"
      v-bind:key="ordered_item.id"
    >
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body" style="background-color: #595260">
            <h5 class="card-title">
              Item: {{ ordered_item.product_item_name }}
            </h5>
            <p class="card-text">
              Price: {{ ordered_item.product_price }}
              <br />
              Status: {{ ordered_item.status }}
              <br />
              Dining Option: {{ dining_option }}
              <br />
              Note: {{ ordered_item.customer_note }}
            </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="col-md-4" style="background-color:#595260">
          <p class="card-text">
            <br />
            Special Instructions:
            <input type="text" v-model="ordered_item.customer_note" />
          </p>
          <form>
            <button
              v-on:click="updateOrderedItem(ordered_item)"
              class="btn btn-warning btn-sm"
            >
              Update Item
            </button>
          </form>
          <form style="margin: 0.3em">
            <button
              v-on:click="orderedItemDestroy(ordered_item)"
              class="btn btn-danger btn-sm"
            >
              Remove Item
            </button>
          </form>
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
      dining_option: null,
      the_ordered_item: {},
      errors: [],
      tab_name: "",
      status: "",
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

    updateOrderedItem: function (ordered_item) {
      var editOrderedItemParams = {
        customer_note: ordered_item.customer_note,
      };
      axios
        .patch("/ordered_items/" + ordered_item.id, editOrderedItemParams)
        .then((response) => {
          console.log("ordered item update", response);
          this.$router.push("/ordered_items");
        })
        .catch((error) => {
          console.log("ordered item update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    updateForKitchen: function () {
      var params = {
        dining_option: this.dining_option,
        tab_name: this.tab_name,
      }
      axios
        .post("/kitchen_orders", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/order_updates");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

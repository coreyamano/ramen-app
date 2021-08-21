<template>
  <div class="kitchen-index">
    <br />
    <h1 style="margin: auto">{{ message }}</h1>
    <br />
    <div
      class="card mb-3"
      style="margin: auto; max-width: 540px"
      v-for="kitchen_item in kitchen_items"
      v-bind:key="kitchen_item.id"
    >
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              Item: {{ kitchen_item.product_item_name }}
            </h5>
            <p class="card-text">
              Ordered At: {{ kitchen_item.submitted_time }}
              <br />
              Quantity: {{ kitchen_item.quantity }}
              <br />
              Status: {{ kitchen_item.status }}
              <br />
              Dining Option: {{ kitchen_item.dining_option }}
              <br />
              Note: {{ kitchen_item.customer_note }}
            </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="col-md-4">
          <form>
            <button
              class="btn btn-warning btn-sm"
              v-on:click="updateComplete(kitchen_item)"
            >
              Mark as Complete
            </button>
          </form>
          <form style="margin: 0.3em">
            <button class="btn btn-danger btn-sm">Remove Item</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
// import moment from "moment";
export default {
  data: function () {
    return {
      message: "Kitchen Orders",
      kitchen_items: [],
      kitchen_item: {},
      // searchTerm: "",
    };
  },
  // computed: {
  //   ordertime() {
  //     var time = moment(this.kitchen_items.created_at, "MMMM DD,  LT").format();
  //     return time;
  //   },
  // },
  created: function () {
    this.indexKitchenOrders();
  },
  methods: {
    indexKitchenOrders: function () {
      axios.get("/kitchen_orders").then((response) => {
        console.log(response.data);
        this.kitchen_items = response.data;
      });
    },
    updateComplete: function (kitchen_item) {
      var editKitchenOrderParams = {
        status: "complete",
      };
      axios
        .patch("/kitchen_orders/" + kitchen_item.id, editKitchenOrderParams)
        .then((response) => {
          console.log("ordered item update", response);
          // this.$router.push("/ordered_items");
        })
        .catch((error) => {
          console.log("ordered item update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

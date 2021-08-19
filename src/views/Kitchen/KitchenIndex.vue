<template>
  <div class="kitchen-index">
  <br/>
    <h1 style="margin: auto;">{{ message }}</h1>
    <br/>
      <div class="card mb-3" style="margin: auto; max-width: 540px;" v-for="kitchen_item in kitchen_items" v-bind:key="kitchen_item.id">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Item: {{ kitchen_item.product_item_name }}</h5>
            <p class="card-text">
            Ordered At: {{ ordertime }}
            <br/>
            Quantity: {{ kitchen_item.quantity }}
            <br/>
            Status: {{ kitchen_item.status }}
            <br/>
            Dining Option: {{ kitchen_item.dining_option }}
            <br/>
            Note: {{ kitchen_item.customer_note }}
            </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="col-md-4">
          <form>
            <button class="btn btn-warning btn-sm">Update Item</button>
          </form>
          <form style="margin: 0.3em;">
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
import moment from "moment";
export default {
  data: function () {
    return {
      message: "Kitchen Orders",
      kitchen_items: [],
      kitchen_item: {},
      // searchTerm: "",
    };
  },
  computed: {
    ordertime() {
      var time = moment(this.kitchen_items.created_at).format('MMMM DD,  LT')
      return time
    }
  },
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
  },
};
</script>

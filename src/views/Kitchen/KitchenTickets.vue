<template>
  <div class="kitchen-index" style="background-color: #2c2e43; color: #b2b1b9">
    <br />
    <h1 style="margin: auto">{{ message }}</h1>
    <br />
    <div
      class="card mb-3"
      style="margin: auto; max-width: 540px"
      v-for="kitchen_ticket in kitchen_tickets"
      v-bind:key="kitchen_ticket.id"
    >
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Tab: {{ kitchen_ticket.tab_id }}</h5>
            <p class="card-text">
              Item: {{ kitchen_ticket.product_item_name }}
              <br />
              Ordered At: {{ kitchen_ticket.submitted_time }}
              <br />
              Note: {{ kitchen_ticket.customer_note }}
              <br />
              Dining Option: {{ kitchen_ticket.dining_option }}
              <br />
              Status: {{ kitchen_ticket.status }}
            </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="col-md-4">
          <form>
            <button
              class="btn btn-warning btn-sm"
              v-on:click="updateToComplete(kitchen_ticket)"
            >
              Mark as Complete
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
// import moment from "moment";
export default {
  data: function () {
    return {
      message: "Kitchen Orders",
      kitchen_tickets: [],
      kitchen_ticket: {},
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
    this.indexKitchenTickets();
  },
  methods: {
    indexKitchenTickets: function () {
      axios.get("/kitchen_tickets").then((response) => {
        console.log(response.data);
        this.kitchen_tickets = response.data;
      });
    },
    updateToComplete: function (kitchen_ticket) {
      var editOrderedItemParams = {
        status: "completed",
      };
      axios
        .patch("/ordered_items/" + kitchen_ticket.id, editOrderedItemParams)
        .then((response) => {
          console.log("ordered item update", response);
          this.$router.push("/kitchen_tickets");
        })
        .catch((error) => {
          console.log("ordered item update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    updateToPreparing: function (kitchen_ticket) {
      var editOrderedItemParams = {
        status: "preparing",
      };
      axios
        .patch("/ordered_items/" + kitchen_ticket.id, editOrderedItemParams)
        .then((response) => {
          console.log("ordered item update", response);
          this.$router.push("/kitchen_tickets");
        })
        .catch((error) => {
          console.log("ordered item update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

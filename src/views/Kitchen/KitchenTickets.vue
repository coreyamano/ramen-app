<template>
  <div class="kitchen-index" style="background-color: #2c2e43; color: #b2b1b9">
    <br />
    <h1 style="margin: auto">{{ message }}</h1>
    <br />
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-3 row-cols-xl-4
            justify-content-center
          "
        >
          <div
            class="col mb-5"
            v-for="kitchen_ticket in kitchen_tickets"
            v-bind:key="kitchen_ticket.id"
          >
            <div
              class="card h-100"
              style="padding: 0.4em; background-color: #595260; color: #b2b1b9"
            >
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">Tab: {{ kitchen_ticket.tab_name }}</h5>
                  <!-- Product price-->
                  Item: {{ kitchen_ticket.product_item_name }}
              <br />
              Time: {{ kitchen_ticket.submitted_time }}
              <br />
              Note: {{ kitchen_ticket.customer_note }}
              <br />
              Dining Option: {{ kitchen_ticket.dining_option }}
              <br />
              Status: {{ kitchen_ticket.status }}
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                
                  </div>
                </div>
                <div class="text-center">
                  <a
                    tabindex="0"
                    class="btn btn-warning btn-sm"
                    type="button"
                    v-on:click="updateToComplete(kitchen_ticket)"
                    >Mark as Complete</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          this.$router.push("/kitchen_orders");
        })
        .catch((error) => {
          console.log("ordered item update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

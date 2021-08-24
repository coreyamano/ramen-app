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
            v-for="ordered_item in ordered_items"
            v-bind:key="ordered_item.id"
          >
            <div
              class="card h-100"
              style="padding: 0.4em; background-color: #595260; color: #b2b1b9"
            >
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">Tab: {{ ordered_item.tab_name }}</h5>
                  <!-- Product price-->
                  Item: {{ ordered_item.product_item_name }}
                  <br />
                  Time: {{ ordered_item.submitted_time }}
                  <br />
                  Note: {{ ordered_item.customer_note }}
                  <br />
                  Dining Option: {{ ordered_item.dining_option }}
                  <br />
                  Status: {{ ordered_item.status }}
                  <!-- Product actions-->
                  <div
                    class="card-footer p-4 pt-0 border-top-0 bg-transparent"
                  ></div>
                </div>
                <div class="text-center">
                  <form>
                    <button
                      tabindex="0"
                      class="btn btn-warning btn-sm"
                      type="button"
                      v-on:click="updateToCompleted(ordered_item)"
                    >
                      Mark as Complete
                    </button>
                  </form>
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
      ordered_items: [],
      ordered_item: {},
      status: "",
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
        this.ordered_items = response.data;
      });
    },
    updateToCompleted: function (ordered_item) {
      var editOrderedItemParams = {
        status: "completed",
      };
      axios
        .patch("/ordered_items/" + ordered_item.id, editOrderedItemParams)
        .then((response) => {
          console.log("ordered item update", response);
          this.$router.push("/kitchen_tickets");
        })
        .catch((error) => {
          console.log("ordered item update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    // updateToPreparing: function (kitchen_ticket) {
    //   var editOrderedItemParams = {
    //     status: "preparing",
    //   };
    //   axios
    //     .patch("/ordered_items/" + kitchen_ticket.id, editOrderedItemParams)
    //     .then((response) => {
    //       console.log("ordered item update", response);
    //       this.$router.push("/kitchen_tickets");
    //     })
    //     .catch((error) => {
    //       console.log("ordered item update error", error.response);
    //       this.errors = error.response.data.errors;
    //     });
    // },
  },
};
</script>

<template>
  <div class="products-index" style="margin: auto">
    <br />
    <h1>{{ message }}</h1>
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
            v-for="product in products"
            v-bind:key="product.id"
          >
            <div class="card h-100" style="padding: 0.4em">
              <!-- Product image-->
              <!-- <router-link v-bind:to="`/products/${product.id}`"> -->
              <img class="card-img-top" v-bind:src="product.image" alt="..." />
              <!-- </router-link> -->
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">{{ product.item_name }}</h5>
                  <!-- Product price-->
                  {{ product.description }}
                  <br />
                  ${{ product.price }}
                </div>
              </div>
              Quantity: <input type="number" v-model="product.quantity" />
              <br />
              Special Instructions:
              <input type="text" v-model="product.customer_note" />
              <br />
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Added to Cart</h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">{{ product.item_name }} was added!</div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <a
                    tabindex="0"
                    class="btn btn-outline-dark mt-auto"
                    type="button"
                    v-on:click="orderedItemsCreate(product)"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="right"
                    data-bs-content="Added to Cart!"
                    >Add to Cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import { createPopper } from '@popperjs/core';
export default {
  data: function () {
    return {
      message: "Full Menu",
      products: [],
      errors: [],
      // quantity: null,
      tab_id: "",
      // searchTerm: "",
    };
  },
  mounted(){
  const button = document.querySelector('#button');
  const tooltip = document.querySelector('#tooltip');
  createPopper(button, tooltip);
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
        quantity: product.quantity || 1,
        product_price: product.price,
        customer_note: product.customer_note,
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
      product.quantity = null;
      product.customer_note = null;
    },
  },
};
</script>

<template>
  <div class="products-new">
    <h1>New Product</h1>
    <form v-on:submit.prevent="createProduct()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newProductParams.item_name" />
      Description:
      <input type="text" v-model="newProductParams.description" />
      Menu Category:
      <input type="text" v-model="newProductParams.menu_category" />
      Price:
      <input type="text" v-model="newProductParams.price" />
      Image:
      <input type="text" v-model="newProductParams.image" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newProductParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createProduct: function () {
      axios
        .post("/products", this.newProductParams)
        .then((response) => {
          console.log("products create", response);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log("products create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

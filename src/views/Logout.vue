<template>
  <div class="logout" style="background-color: #2C2E43; color: #b2b1b9"></div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/login");
  },
};
</script>

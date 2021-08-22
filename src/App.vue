<template>
  <div id="app">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container px-4 px-lg-5" >
        <a class="navbar-brand" href="/">Ramen Land</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/products"
                >Menu</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ordered_items">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checks">Check Out</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/login">Log In</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/logout">Log Out</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/signup">Sign Up</a>
            </li>
            <!-- <form class="d-flex">
              <a class="btn btn-outline-dark" href="/ordered_items">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill"
                  >0</span
                >
              </a>
            </form> -->
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header-->
    <header
      class="bg-dark py-5"
      style="
        height: 350px;
        background-image: url('https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2016/10/Pabu-bar-lounge.jpg');
      "
    >
      <div class="container px-4 px-lg-5 my-5">
        <div
          class="text-center text-white"
          style="margin: auto; text-shadow: 2px 2px 4px black"
        >
          <h1 class="display-4 fw-bolder">Ramen Land</h1>
          <p class="lead fw-normal text-white-50 mb-0">San Fracisco, CA</p>
        </div>
      </div>
    </header>

    <router-view />
    <!-- Footer-->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; TurningTables 2021
        </p>
      </div>
    </footer>
  </div>
</template>

<style></style>

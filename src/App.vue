<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/products"></router-link>
      <router-link to="/ordered_items"></router-link>
      <router-link to="/checks"></router-link>
      <router-link to="/signup"></router-link>
      <router-link to="/login"></router-link>
      <router-link to="/logout"></router-link>
    </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/products">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ordered_items">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checks">Check Out</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/login">Log In</a></li>
                <li>
                  <a class="dropdown-item" href="/login">Log Out</a>
                </li>
                 <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>

</style>

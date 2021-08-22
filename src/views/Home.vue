<template>
  <div class="home">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      style="margin: 2em"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div
        class="carousel-inner"
        style="width: 70%; flex-wrap: wrap; margin: auto"
      >
        <div class="carousel-item active">
          <img
            src="https://ippudo-us.com/wordpress/wp-content/themes/ippudo-theme/images/menu/img_noodles.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="carousel-caption d-none d-md-block"
            style="text-shadow: 2px 2px 4px black"
          >
            <h5>Hand crafted Noodles</h5>
            <p>
              Our commitment to quality can be tasted in our fresh noodles
              prepared daily.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://ippudo-us.com/wordpress/wp-content/themes/ippudo-theme/images/menu/img_char-siu.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="carousel-caption d-none d-md-block"
            style="text-shadow: 2px 2px 4px black"
          >
            <h5>Slow Cooked and Smoked Pork Belly</h5>
            <p>Let the taste and aromas shine through with every bite.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://ippudo-us.com/wordpress/wp-content/themes/ippudo-theme/images/menu/img_soup.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="carousel-caption d-none d-md-block"
            style="text-shadow: 2px 2px 4px black"
          >
            <h5>Fresh and Never Frozen</h5>
            <p>
              We use high quality ingredients to craft the best ramen you can
              get in California.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
};
</script>

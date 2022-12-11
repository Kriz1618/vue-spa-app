<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-dark navbar-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Gif Router</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink active-class="bg-info text-dark fw-bold" class="nav-link" to="/">
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink active-class="bg-success text-white fw-bold" class="nav-link" to="/gifs">
              Gifs
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink active-class="bg-danger text-white fw-bold" class="nav-link" to="/stickers">
              Stickers
            </RouterLink>
          </li>
        </ul>

        <form class="d-flex" v-if="true">
          <div class="input-group">
            <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Configuration</button>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item text-black" active-class="bg-success text-white fw-bold" to="/gifs">
                  Gifs
                </RouterLink>
              </li>
              <li>
                <RouterLink active-class="bg-danger text-white fw-bold" class="dropdown-item" to="/stickers">
                  Stickers
                </RouterLink>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  components: {
    RouterLink
  }
}
</script>
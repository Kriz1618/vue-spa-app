<template>
  <h1>Search Gif</h1>

  <search @search="getGifs" />

  <pagination :prev="prev" :next="next" :loading="loading" @paginate="paginate" />

  <div class="row">
    <div v-for="gif in gifs" :key="gif.id" class="col-12 col-md-4 g-3">
      <card :data="gif" />
    </div>
  </div>
  <div class="my-2 fw-bold fs-2">
    <span>{{ read() }}/{{ total }}</span>
  </div>
</template>

<script>
import swal from 'sweetalert2';
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import Pagination from '../components/Pagination.vue';
export default {
  components: { Card, Search, Pagination },
  data: () => ({
    gifs: [],
    loading: true,
    gifSearch: 'inuyasha',
    limit: 9,
    offset: 0,
    total: 0,
    next: true,
    prev: false,
  }),
  created() {
    this.getGifs();
  },
  methods: {
    async getGifs(search = this.gifSearch) {
      if (!search.trim()) {
        swal.fire({
          title: 'Invalid search',
          icon: 'error',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });

        return;
      }

      if (this.gifSearch != search) {
        this.offset = 0;
        this.gifSearch = search;
      }

      this.loading = true;

      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=PVJXvwcGkEPXBIJI3MVfjQnoeLwgJXF0&q=${search}&offset=${this.offset}&limit=${this.limit}`
      );

      const { data, pagination } = await res.json();
      this.gifs = data;
      this.total = pagination.total_count;

      if (this.total < this.limit) {
        this.next = false;
      }

      setTimeout(() => {
        this.loading = false;
      }, 200);
    },
    async paginate(next = true) {
      if (this.loading || !next && !this.offset || next && this.total <= this.offset) {
        return;
      }

      if (next) {
        this.offset += this.limit;
      } else {
        this.offset -= this.limit;
      }

      await this.getGifs();

      this.next = this.offset + this.limit < this.total;
      this.prev = this.offset > 0;
    },
    read() {
      return Math.min(this.offset + this.limit, this.total)
    }
  }
}
</script>
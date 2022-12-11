<template>
  <h1>Search Stickers</h1>

  <search @search="getStickers" />

  <pagination :prev="prev" :next="next" :loading="loading" @paginate="paginate" />

  <div class="row">
    <div v-for="sticker in stickers" :key="sticker.id" class="col-12 col-md-4 g-3">
      <card :data="sticker" />
    </div>
  </div>
  <pagination :prev="prev" :next="next" :loading="loading" @paginate="paginate" />

</template>
  
<script>
import swal from 'sweetalert2';
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import Pagination from '../components/Pagination.vue';
export default {
  components: { Card, Search, Pagination },
  data: () => ({
    stickers: [],
    loading: true,
    searchVal: 'naruto',
    limit: 9,
    offset: 0,
    total: 0,
    next: true,
    prev: false,
  }),
  created() {
    this.getStickers();
  },
  methods: {
    async getStickers(search = this.searchVal) {
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

      this.searchVal = search;
      this.loading = true;

      const res = await fetch(
        `https://api.giphy.com/v1/stickers/search?api_key=PVJXvwcGkEPXBIJI3MVfjQnoeLwgJXF0&q=${search}&offset=${this.offset}&limit=${this.limit}`
      );
      const { data, pagination } = await res.json();
      this.stickers = data;
      this.total = pagination.total_count;

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

      await this.getStickers();

      this.next = this.offset + this.limit < this.total;
      this.prev = this.offset > 0;
    }
  }
}
</script>
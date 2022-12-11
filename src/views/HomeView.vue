<template>
  <h1>Gif Router</h1>
  <img :src="img" :alt="name">
</template>

<script>
  export default {
    data: () => ({
      img: '',
      name: ''
    }),
    created(){
      this.getRandomGif();
    },
    methods: {
      async getRandomGif() {
        const data = await fetch(
          'https://api.giphy.com/v1/gifs/random?api_key=PVJXvwcGkEPXBIJI3MVfjQnoeLwgJXF0',
        );
        const res = await data.json();
        this.name = res.data.title;
        this.img = res.data.images.original.url;
      }
    }
  }
</script>
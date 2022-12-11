<template>
    <div class="card">
        <img 
          height="250"
          :src="data.images.original.url"
          class="card-img-top"
          :alt="data.title"
          loading="lazy"
        >
        <div class="card-body">
          <h5 class="card-title">{{ data.title || data?.user.display_name }}</h5>
          <!-- 
          <a :href="data.images.original.url" class="btn btn-primary" download>
            Download
          </a> -->
        </div>
      </div>
</template>

<script>
export default {
    props: ["data"]
}
</script>
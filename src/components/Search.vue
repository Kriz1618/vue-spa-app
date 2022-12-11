<template>
    <form @submit.prevent="getData" class="row g-2">
        <div class="col-auto">
            <label class="col-form-label">Search:</label>
        </div>
        <div class="col-auto">                
            <input v-model.trim="search" class="form-control" type="text" placeholder="What are you looking for?">
        </div>
        <div class="col-auto">
            <button 
                class="btn btn-warning fw-bold"
                type="submit"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Click to search gifs"
            >
                Search
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data: () => ({
        search: ''
    }),
    methods: {
        getData() {
            this.$emit('search', this.search);
            this.search = '';
        }
    }
}
</script>
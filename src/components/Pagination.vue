<template>
  <div class="d-flex justify-content-between my-2">
    <div class="btn" @click="paginate(false)">
      <img v-if="prev" src="/left.png" alt="Left">
    </div>
    <div>
      <Loading v-show="loading" />
    </div>
    <div class="btn" @click="paginate()">
      <img v-if="next" src="/right.png" alt="Right">
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';

export default {
  components: { Loading },
  props: ['prev', 'next', 'loading'],
  methods: ({
    paginate(next = true) {
      this.$emit('paginate', next);
    }
  })
}
</script>
<template>
  <div>
    <div class="d-flex flex-column flex-md-row justify-content-between mb-5" v-for="item in experience" :key="item.id">
      <div class="flex-grow-1">
        <h3 class="mb-0 title-custom">{{ $t(item.title) }}</h3>
        <div class="subheading mb-3 title-custom-secondary">{{ $t(item.company) }}</div>
        <p class="text-custom">{{ $t(item.text) }}</p>
      </div>
      <div class="flex-shrink-0">
        <span class="title-custom-secondary">{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { experience } from "./experience"
  export default {
    name: 'Experience',
    data() {
      return {
        experience: experience
      }
    }
  }
</script>


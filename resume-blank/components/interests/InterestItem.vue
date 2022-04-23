<template>
  <div>
    <div v-for="item in interests" :key="item.id">
      <p class="text-custom">{{item.interest}}</p>
    </div>
  </div>
</template>

<script>
  import { interests } from "./interests"
  export default {
    name: 'InterestItem',
    data() {
      return {
        interests: interests
      }
    }
  }
</script>
<template>
  <div>
    <div class="d-flex flex-column flex-md-row justify-content-between mb-5" v-for="item in education" :key="item.id">
      <div class="flex-grow-1">
        <h3 class="mb-0 title-custom">{{ $t(item.school) }}</h3>
        <div class="subheading mb-3 title-custom-secondary">{{ $t(item.degree) }}</div>
        <div class="text-custom">{{ $t(item.department) }}</div>
        <p class="text-custom">GPA: {{ item.gpa }}</p>
      </div>
      <div class="flex-shrink-0">
        <span class="title-custom-secondary">{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { education } from "./education"
  export default {
    name: 'EducationItem',
    data() {
      return {
        education: education
      }
    }
  }
</script>
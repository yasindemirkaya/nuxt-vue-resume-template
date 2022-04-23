<template>
  <section class="resume-section" id="education">
    <div class="resume-section-content">
      <h2 class="mb-5 title-custom">{{$t('sidebar.education')}}</h2>
      <EducationItem />
    </div>
  </section>
</template>

<script>
  import EducationItem from '@/components/education/EducationItem.vue'
  export default {
    name: 'Education',
    components: {
      EducationItem
    }
  }
</script>
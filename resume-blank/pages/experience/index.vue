<template>
  <section class="resume-section" id="experience">
    <div class="resume-section-content">
      <h2 class="mb-5 title-custom">{{$t('sidebar.experience')}}</h2>
      <ExperienceItem />
    </div>
  </section>
</template>

<script>
  import ExperienceItem from "@/components/experience/ExperienceItem.vue"
  export default {
    name: 'Experience',
    components: {
      ExperienceItem
    }

  }
</script>

<style scoped>
  section.resume-section {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 0rem;
  }
</style>
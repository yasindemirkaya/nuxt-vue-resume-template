<template>
  <section class="resume-section" id="interests">
    <div class="resume-section-content">
      <h2 class="mb-5 title-custom">{{$t('sidebar.interests')}}</h2>
      <InterestItem />
    </div>
  </section>
</template>

<script>
  import InterestItem from "@/components/interests/InterestItem"
  export default {
    name: 'Interests',
    components: {
      InterestItem
    }
  }
</script>
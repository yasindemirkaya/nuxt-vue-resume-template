<template>
  <section class="resume-section" id="interests">
    <div class="resume-section-content">
      <h2 class="mb-5 title-custom">{{$t('sidebar.contact')}}</h2>
      <ContactItem />
    </div>
  </section>
</template>

<script>
  import ContactItem from '@/components/contact/ContactItem.vue'
  export default {
    name: 'Contact',
    components: {
      ContactItem
    },
  }
</script>

<style scoped>
  .social-icon {
    height: 2.5rem !important;
    width: 2.5rem !important;
  }
</style>
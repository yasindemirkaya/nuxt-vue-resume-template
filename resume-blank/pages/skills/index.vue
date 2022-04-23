<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5 title-custom">{{$t('sidebar.skills')}}</h2>
      <SkillItem />
    </div>
  </section>
</template>

<script>
  import SkillItem from "@/components/skills/SkillItem"
  export default {
    name: 'Skills',
    components: {
      SkillItem
    }
  }
</script>
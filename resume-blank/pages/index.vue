<template>
  <section class="resume-section" id="about">
    <div class="resume-section-content">
      <h1 class="mb-0 title-custom">
        John
        <span class="title-custom-secondary">Doe</span>
      </h1>
      <div class="subheading mb-5 position-custom">
        {{ $t('about.title')}}, {{ $t('about.title2')}}
        <a href="mailto:emailaddress">john@doe.com</a>
      </div>
      <p class="lead mb-5 text-custom">{{$t('about.text')}}</p>
      <div class="social-icons">
        <a class="social-icon" target="_blank" href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="social-icon" target="_blank" href="#">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'About',
  }
</script>
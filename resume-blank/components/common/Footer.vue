<template>
  <div>
    <div class="d-flex justify-content-between footer">
      <div class="text-custom">{{$t('footer.copyright')}} &copy; Yasin Demirkaya 2021. {{$t('footer.all-rights-reserved')}}</div>
      <!-- Languages -->
      <div class="d-flex align-items-center">
        <div class="me-3">
          <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
            <div class>English</div>
          </nuxt-link>
          <nuxt-link v-if="$i18n.locale !== 'tr'" :to="switchLocalePath('tr')">
            <div class>Türkçe</div>
          </nuxt-link>
        </div>
        <!-- Theme -->
        <div>
          <a @click="toggleTheme" class="btn btn-sm btn-primary">
            <i v-if="this.theme === 'dark-mode'" class="fa-solid fa-moon"></i>
            <i v-else class="fa-solid fa-sun"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        theme: ''
      }
    },
    methods: {
      toggleTheme() {
        this.theme = this.theme == 'dark-mode' ? '' : 'dark-mode';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme)
      }
    },
    mounted() {
      let localTheme = localStorage.getItem('theme');
      document.documentElement.setAttribute('data-theme', localTheme);

      if (localStorage.getItem('theme') == 'dark-mode') {
        this.theme = 'dark-mode';
      }
      else {
        this.theme = '';
      }
    }
  }
</script>


<style>
  .footer {
    padding-left: 3rem;
    padding-right: 3rem;
  }
</style>
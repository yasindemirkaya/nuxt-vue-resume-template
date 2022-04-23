<template>
  <nav class="navbar navbar-custom navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <nuxt-link to="/" tag="a" class="navbar-brand js-scroll-trigger">
      <span class="d-block d-lg-none">John Doe</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../assets/img/profile.jpg" alt="..." />
      </span>
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link :to="'/' + $i18n.locale + '/'">
            <a class="nav-link js-scroll-trigger">{{$t('sidebar.about')}}</a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="'/' + $i18n.locale + '/experience'">
            <a class="nav-link js-scroll-trigger">{{$t('sidebar.experience')}}</a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="'/' + $i18n.locale + '/education'">
            <a class="nav-link js-scroll-trigger">{{$t('sidebar.education')}}</a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="'/' + $i18n.locale + '/skills'">
            <a class="nav-link js-scroll-trigger">{{$t('sidebar.skills')}}</a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="'/' + $i18n.locale + '/interests'">
            <a class="nav-link js-scroll-trigger">{{$t('sidebar.interests')}}</a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link :to="'/' + $i18n.locale + '/contact'">
            <a class="nav-link js-scroll-trigger">{{$t('sidebar.contact')}}</a>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Sidebar'
  }
</script>

<style>
  a {
    text-decoration: none !important;
  }
</style>
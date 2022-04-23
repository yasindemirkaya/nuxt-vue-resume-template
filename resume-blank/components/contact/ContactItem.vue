<template>
  <div>
    <div class="container" v-for="item in contacts" :key="item.id">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0 text-custom">{{$t('contact.email')}}</h3>
              <div class="subheading mb-3 title-custom-secondary">{{item.email}}</div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0 text-custom">{{$t('contact.website')}}</h3>
              <div class="subheading mb-3">
                <a :href="item.website" target="_blank">{{item.website}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0 text-custom">{{$t('contact.phone')}}</h3>
              <div class="subheading mb-3 title-custom-secondary">{{item.phone}}</div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0 text-custom">{{$t('contact.socials')}}</h3>
              <div class="social-icons">
                <a class="social-icon" target="_blank" :href="item.linkedin.link">
                  <i :class="item.linkedin.icon"></i>
                </a>
                <a class="social-icon" target="_blank" :href="item.github.link">
                  <i :class="item.github.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { contacts } from './contacts'

  export default {
    name: 'ContactItem',
    data() {
      return {
        contacts: contacts
      }
    }
  }
</script>
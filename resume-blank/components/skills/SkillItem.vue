<template>
  <div>
    <div v-for="item in skills" :key="item.id">
      <hr class="text-custom" />
      <div class="subheading mb-3 title-custom-secondary">{{ $t(item.title) }}</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item text-custom" v-if="item.icon1 !== ''">
          <i :class="item.icon1"></i>
        </li>
        <li class="list-inline-item text-custom" v-if="item.icon2 !== ''">
          <i :class="item.icon2"></i>
        </li>
        <li class="list-inline-item text-custom" v-if="item.icon3 !== ''">
          <i :class="item.icon3"></i>
        </li>
      </ul>
      <ul class="fa-ul mb-0">
        <li v-if="item.experience">
          <span class="fa-li text-custom">
            <i class="fas fa-check"></i>
          </span>
          <p class="text-custom">{{ $t(item.experience) }}</p>
        </li>
        <li v-if="item.text">
          <span class="fa-li text-custom">
            <i class="fas fa-check"></i>
          </span>
          <p class="text-custom">{{ $t(item.text) }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { skills } from "./skills"
  export default {
    name: 'SkillItem',
    data() {
      return {
        skills: skills,
      }
    }
  }
</script>
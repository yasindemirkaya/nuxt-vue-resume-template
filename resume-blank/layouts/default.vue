<template>
  <div>
    <Sidebar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Sidebar from "@/components/common/Sidebar"
  import Footer from "@/components/common/Footer"
  export default {
    components: {
      Sidebar,
      Footer
    }
  }
</script>
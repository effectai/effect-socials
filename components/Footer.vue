<template>
  <footer class="footer is-transparent mt-6">
    <div class="container">
      <div class="has-text-centered">
        <small class="is-size-7">&copy; {{ new Date().getFullYear() }} EFFECT <b>SOCIALS</b> by <a href="https://effect.ai" target="_blank">EFFECT.AI</a></small>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  &.is-transparent {
    background: transparent;
  }
}
</style>

<template>
  <div id="app">
    <Nuxt  class="content"/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          &copy; {{ new Date().getFullYear() }} <b>Effect&#8226;IVE</b> by <a href="https://effect.ai" target="_blank">Effect.AI</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

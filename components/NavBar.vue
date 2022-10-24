<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img :src="$colorMode.value === 'dark' ? require('@/assets/images/effect-socials_white_h100.png') : require('@/assets/images/effect-socials_h100.png')"  class="logo">
          </nuxt-link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
             data-target="navbar" @click="mobileMenu = !mobileMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div id="navbar" class="navbar-menu" :class="{'is-active': mobileMenu}">
          <div class="navbar-start">

          </div>
          <div class="navbar-end is-align-items-center">

            <div class="navbar-item" exact-active-class="is-active">

              <nuxt-link to="/batch" class="button is-secondary is-outlined mx-2" :class="{'is-accent': $colorMode.value === 'dark'}" exact-active-class="is-active">
                Orders
              </nuxt-link>

              <nuxt-link to="/" class="button is-secondary is-outlined mx-2" :class="{'is-accent': $colorMode.value === 'dark'}" exact-active-class="is-active">
                Home
              </nuxt-link>

            </div>
            <darkmode-switcher class="ml-4" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import DarkmodeSwitcher from '@/components/DarkmodeSwitcher';
  export default {
    components: {
      DarkmodeSwitcher
    },
    data() {
      return {
        loading: false,
        mobileMenu: false
      }
    },
    methods: {
      scrollToElement(ref) {
        let el = this.$refs[ref];
        console.log("scroll", el)
        if(!el) {
          el = document.getElementById(ref);
        }
        if (el) {
          // Use el.scrollIntoView() to instantly scroll to the element
          el.scrollIntoView({behavior: 'smooth'});
        } else {
          this.$router.push('/#'+ref);
        }
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  .navbar {
    &.is-transparent {
      background: transparent;
    }
    .logo {
      height: 45px;
      max-width: none;
      max-height: none;
      margin-top: 5px;
      margin-right: 8px;
    }
    .navbar-brand {
      .navbar-item {
        &.is-active, &:hover {
          color: $primary;
        }
      }
    }

    .navbar-menu {
      margin-top: 8px;
      justify-content: center;

      .navbar-item {
        font-weight: 500;
        padding: 10px 20px;
        text-align: center;
        &.dapps {
          img {
            max-height: 2.5rem;
            width: auto;
            max-width: none;
          }
          .navbar-item:hover {
            background-color: whitesmoke !important;
          }
        }
        &:after {
          display: block;
          width: 0;
          height: 2px;
          position: absolute;
          transition: width 0.5s;
          bottom: 10px;
          background: $secondary;
          content: "";
        }

        &.is-active {
          color: $primary;
          font-weight: 700;

          &:after {
            width: calc(100% - 1.5rem - 15px);
          }
        }
      }
    }
  }
  .dark-mode {
    .navbar {
      .navbar-menu {
        .navbar-link {
          color: $grey-light;
          &:after {
            border-color: $grey-light;
          }
          &.is-active, &:hover {
            color: white;
            &:after {
              border-color: white;
            }
          }
        }
        .navbar-item {
          color: $grey-light;
          &:after {
            background: white;
          }
          &.is-active, &:hover {
            color: white;
          }
        }
      }
      .navbar-brand {
        .navbar-item {
          color: white;
          &.is-active, &:hover {
            color: white;
          }
        }
      }
    }
  }
</style>

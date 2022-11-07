<template>
  <nav class="nav">
    <router-link to="/" class="nav__link">Горный велосипед</router-link>
    <router-link to="/page2" class="nav__link">Женский велосипед</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
.nav {
  position: relative;
  top: -82px;

  &__link {
    width: 280px;

    background: #d9d9d9;
    border-radius: 20px 20px 0px 0px;
    padding: 20px 24px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #0c0c0c;
  }
}
</style>

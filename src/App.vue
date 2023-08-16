<template>
  <div class="app-container">
    <MenuOptions />
    <ProfilePanel />
  </div>
</template>

<script>
import MenuOptions from './components/MenuOptions.vue';
import ProfilePanel from './components/ProfilePanel.vue';

export default {
  name: 'App',
  components: {
    MenuOptions,
    ProfilePanel,
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  background-color: #FAFAFC;
}

.app-container {
  display: flex;
}
</style>

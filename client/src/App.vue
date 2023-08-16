<template>
  <NavigationComponent />
  <router-view/>
</template>

<script>
//import ProductComponent from './components/ProductComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'

export default {
  name: 'App',
  components: {
    NavigationComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#app{
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
</style>

<template>
  <div class="container">
    <div class="button-container">
      <div>
        <router-link to="/Body/overview">
          <button class='button button-blue mb-05 button-fit'>OVERVIEW</button>
        </router-link>
        <router-link to="/Body/skills">
          <button class='button button-blue mb-05 button-fit'>SKILLS</button>
        </router-link>
        <router-link to="/Body/Education">
          <button class='button button-blue mb-05 button-fit'>CARRER HISTORY</button>
        </router-link>
        <router-link to="/Body/Education">
          <button class='button button-blue mb-05 button-fit'>PROJECTS</button>
        </router-link>
        <router-link to="/Body/Education">
          <button class='button button-blue mb-05 button-fit'>EDUCATION</button>
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <button class='button button-orange mb-1 button-fit'>To opening</button>
        </router-link>
      </div>
    </div>
    <div class='content-container'>
      <router-view/>
    </div>
  </div>
</template>
<style scoped>
  .container {
    width: 95vw;
    height: 90vh;
    display: flex;
    justify-content: space-between;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
    padding: 1em;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 5px;
  }
  .content-container {
    width: 75%;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 5px;
  }
  .button-fit {
    width: 100%;
  }
</style>
<script>
export default {
  name: 'Body',
  components: {
  }
}
</script>

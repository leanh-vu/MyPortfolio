<template>
  <transition name='slide-fade'>
    <div v-if='isShow' class="container">
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
  </transition>
</template>
<style scoped>
  .container {
    width: 95vw;
    height: 95%;
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
    width: 80%;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 5px;
  }
  .button-fit {
    width: 100%;
  }
  .mb-05 {
    margin-bottom: 0.5rem;
  }
</style>
<script>
export default {
  name: 'Body',
  components: {
  },
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = true
    }, 500)
  }
}
</script>

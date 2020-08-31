<template>
  <div>
      <div v-for='(skill, i) in skills' :key='i'>
        <img class='skill-logo' :src="skill.pictureUrl" alt='VueJSLogo'>
        <div>{{skill.skillName}}</div>
        <div>{{skill.skillType}}</div>
        <div>{{skill.description}}</div>
        <div>{{skill.duration}}</div>
      </div>
  </div>
</template>

<style>
  .skill-logo {
    width: 20vw;
    min-width: 150px;
  }
</style>

<script>
export default {
  components: {
  },
  data () {
    return {
      skills: [
        {
          skillName: 'VueJs',
          skillType: 'Javascript Framework',
          description: '',
          duration: '1 year',
          pictureUrl: '../../public/Vue.png'
        }
      ]
    }
  }
}
</script>

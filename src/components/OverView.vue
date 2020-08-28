<template>
  <div class='overview-container'>
      <div class='left'>
        <div>
          <img class='image-container' alt="me" src="../../public/mylogo.png">
        </div>
        <div class='name-container'>
          <h1 class='m-0'>Lê Anh Vũ</h1>
          <h2 class='m-0'>(Louis)</h2>
        </div>
      </div>
      <div class="right">
        <div>
          <div v-for='(info,key) in personalInfo' v-bind:key='key'>
            <div>{{info}}</div>
          </div>
        </div>
        <div class='selfDescription'>
          {{description}}
        </div>
      </div>
  </div>
</template>

<style  scoped>
 .overview-container {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
   height:100%
 }
 .left {
   width: 40%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
 .right {
   width: 50%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
 }
 .image-container {
   border-radius: 15%;
   height:100px;
   width: 100px;
 }
  .name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .selfDescription {
    background-color: white;
    border-radius: 5px;
  }
</style>

<script>
export default {
  components: {
  },
  data () {
    return {
      personalInfo: {
        name: 'Lê Anh Vũ',
        email: 'vu.leanh2199@gmail.com',
        linkedin: 'https://www.linkedin.com/in/va-le/',
        location: 'District 10, Tp Ho Chi Minh, Viet Nam',
        sex: 'Male',
        role: 'Frontend Developer'
      },
      description: 'AA good manA good manA good manA good manA good manA good manA good manA good man  good man'
    }
  }
}
</script>

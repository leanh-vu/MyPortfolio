<template>
  <div class="home">
    <transition name='slide-fade'>
      <div v-if='showText' class='description-container up'>
        <div class='description-container h-fitcontainer'>
          <div class='w-50p'>
            <h1 class="c-white">LE ANH VU</h1>
            <h2 class="c-white">Front-end developer</h2>
            <p class="c-white">A developer who enthuses on the beauty of the details and the delicacy of every block I create.</p>
          </div>
          <div>
            <h2 class="c-white">Since 18 February, 2019</h2>
          </div>
        </div>
      </div>
    </transition>
    <transition name='jump'>
      <div v-if='showButton' class='down'>
        <router-link to="/Body/overview">
          <button class='button button-orange m-top-1'>Hire me&nbsp;&nbsp;<i class="arrow right"></i></button>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .h-fitcontainer {
    height: fit-content;
  }
  .up {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .down {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .me-avatar {
    height: 200px;
    width: 200px
  }
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .c-white {
    color: white;
  }
  .m-top-1 {
    margin-top: 1em;
  }
  .description-container {
    display: flex;
    justify-content: space-between;
  }
  .w-50p {
    width: 50%
  }
  .jump-enter-active {
    animation: jump-in 0.5s;
  }
  .jump-leave-active {
    animation: jump-in 0.5s reverse;
  }
  @keyframes jump-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

<script>

export default {
  name: 'Opening',
  components: {
  },
  data () {
    return {
      showText: false,
      showButton: false
    }
  },
  methods: {
    displayText () {
      this.showText = true
    },
    displayButton () {
      this.showButton = true
    }
  },
  mounted () {
    setTimeout(() => {
      this.displayText()
    }, 1000)
  },
  watch: {
    showText: function (val) {
      setTimeout(() => {
        this.displayButton()
      }, 2000)
    }
  }
}
</script>

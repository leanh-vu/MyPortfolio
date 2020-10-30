<template>
<div style="width: 90%">
  <v-timeline
      :reverse="reverse"
    >
      <v-timeline-item
        v-for="(company, index) in workExperience"
        :key="index"
      >

        <span>Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{company.company}}
          </v-card-title>
          <v-card-text>
            {{company.responsibility}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
</div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        reverse: false,
      }
    },
    computed: mapState(['workExperience']),
  }
</script>

<style lang="scss">
  .tim-note {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>

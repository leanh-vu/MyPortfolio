<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <v-card
      class="mx-auto"
      outlined
      v-for="(skill,index) in keySkills"
      :key='index'
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
    <v-rating
      background-color="purple lighten-3"
      color="purple"
      medium
      half-increments
      :value="skill.rating"
    ></v-rating>
        </div>
        <v-list-item-title class="headline mb-1">
          {{skill.skillName}}
        </v-list-item-title>
        <v-list-item-subtitle>{{skill.description}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>
  </v-container>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['keySkills']),
  }
</script>

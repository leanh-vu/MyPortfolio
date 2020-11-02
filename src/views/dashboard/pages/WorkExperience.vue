<template>
<div style="width: 90%">
  <v-timeline
      :reverse="reverse"
      dense
    >
    <v-timeline-item
      v-for="(company, index) in workExperience"
      :key="index"
    >
      <template v-slot:icon>
        <v-avatar
          size="62"
          rounded
        >
          <v-img
            v-if='company.company=="Teky Academy"'
            :src="require('../../../assets/teky.jpg')"
          />
          <v-img
            v-if='company.company=="I-ON Digital Corp"'
            :src="require('../../../assets/ion.gif')"
          />
          <v-img
            v-if='company.company=="Linkbynet Vietnam"'
            :src="require('../../../assets/lbn.jpg')"
          />
        </v-avatar>
      </template>
    <v-card>
      <v-toolbar
        flat
        color="blue-grey"
        dark
      >
        <v-toolbar-title>{{company.company}}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-card
          class="mx-auto my-5"
          style="background-color: #F5F5F5"
        >
          <v-card-title>Responsibility</v-card-title>
          <v-card-text>
            <div class="my-4 ">
              <ul>
                <li
                  v-for='(r, i) in company.responsibility'
                  :key='i'
                >
                  {{r}}
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
        <v-card
          class="mx-auto my-5"
          style="background-color: #F5F5F5"
          v-if='isProjectShow(company.projects)'
        >
          <v-card-title>Projects</v-card-title>
          <v-card-text>
            <div class="my-4">

            <v-expansion-panels inset>
              <v-expansion-panel
                v-for="(projects,i) in company.projects"
                :key="i"
              >
                <v-expansion-panel-header>
                  {{projects.projectName}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{projects.description}}
              <div>
                {{projects.time}}
              </div>
              <div>
                {{projects.teamSize}}
              </div>
              <div>
                {{projects.role}}
              </div>
              <div>
                {{projects.responsibility}}
              </div>
              <div>
                {{projects.technology}}
              </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            </div>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto my-5"
          style="background-color: #F5F5F5"
        >
          <v-card-title>Skill set</v-card-title>
          <v-card-text>
            <div>
              <ul>
                <li
                  v-for='(r, i) in company.technicalSkillSet'
                  :key='i'
                >{{r}}</li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  const path = require('path')
  export default {
    data () {
      return {
        reverse: false,
        test: require(path.join('..', '..', '..', 'assets', 'teky.jpg')),
      }
    },
    computed: mapState(['workExperience']),
    methods: {
      isProjectShow (project) {
        return project.length !== 0
      },
    },
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

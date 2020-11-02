<template>
  <v-container
    id="timeline"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <v-timeline align-top>
          <v-timeline-item
            v-for="(timeline, i) in schools"
            :key="i"
            :color="timeline.color"
            :icon="timeline.icon"
            fill-dot
            large
          >
            <v-card class="pa-6">
              <h2>
                {{ timeline.schoolName }}
              </h2>

              <div
                class="text-uppercase body-2"
                v-text="timeline.subtext"
              />
              <ul>
                <li
                  v-for='(des, i) in timeline.description'
                  :key='i'
                >
                  {{des}}
                </li>
              </ul>

              <template v-if="timeline.action">
              </template>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'DashboardPagesTimeline',

    data: () => ({
      menu: false,
    }),
    computed: mapState({
      schools: 'education',
    }),
  }
</script>

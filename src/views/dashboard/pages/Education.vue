<template>
  <v-container
    id="timeline"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Timelines"
      link="components/timelines"
    />

    <v-row>
      <v-col>
        <v-timeline align-top>
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            :color="timeline.color"
            :icon="timeline.icon"
            fill-dot
            large
          >
            <v-card class="pa-6">
              <h2>
                {{ timeline.chip }}
              </h2>

              <div
                class="text-uppercase body-2"
                v-text="timeline.subtext"
              />
              <p
                class="subtitle-1 font-weight-light"
                v-text="timeline.text"
              />

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
  export default {
    name: 'DashboardPagesTimeline',

    data: () => ({
      menu: false,
      timelines: [
        {
          chip: 'VNUHCM - University of Science',
          color: 'info',
          icon: 'mdi-briefcase',
          text: '',
          subtext: '',
        },
        {
          chip: 'INTEK Institute of Applied Technology',
          color: 'success',
          icon: 'mdi-puzzle',
          text: '',
        },
        {
          chip: 'VNUHCM - University of Technology',
          color: 'info',
          icon: 'mdi-fingerprint',
          text: '',
          action: 'info',
          actionIcon: 'mdi-wrench',
        },
      ],
    }),
  }
</script>

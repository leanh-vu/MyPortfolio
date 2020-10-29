<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              {{info.name}}
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Current company"
                    :value='info.currentCompany'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                    :value='info.email'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Full Name"
                    class="purple-input"
                    :value='info.name'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Birth"
                    class="purple-input"
                    :value='info.birth'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="City"
                    class="purple-input"
                    :value='info.city'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Country"
                    class="purple-input"
                    :value='info.country'
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    :value="info.aboutMe"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                />
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          avatar='true'
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              {{info.role}}
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              {{info.name}}
            </h4>

            <p class="font-weight-light grey--text">
              {{info.aboutMe}}
            </p>
            <a
              href="https://www.linkedin.com/in/la-vu/"
              target="_blank"
              style="color: black"
              class='p-05'
              >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/vuleanh2199"
              target="_blank"
              style="color: black"
              class='p-05'
              >
              <i class="fab fa-github-square"></i>
            </a>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
  .p-05 {
    padding: 0.5em
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      info: 'overviewInformation',
    }),
  }
</script>

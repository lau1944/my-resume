<template>
  <v-app>
    <v-main>
      <div class="resume">
        <intro />
        <School/>
        <Work />
        <Project />
        <Introduce />
        <Foot />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Intro from './components/Intro.vue'
import School from './components/School.vue'
import Work from './components/Work.vue'
import Project from './components/Project.vue'
import Introduce from './components/Introduction.vue';
import Foot from './components/Foot.vue'

export default {
  name: 'App',

  components: {
    Intro,
    School,
    Work,
    Project,
    Introduce,
    Foot,
  },
}
</script>

<style scoped>
.resume {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%
}
</style>

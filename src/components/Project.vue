<template>
  <div id="project">
    <div class="tag">My little side project</div>
    <div class="underline" />

    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col v-for="project in projects" :key="project" cols="12" md="4">
            <v-item>
              <v-card class="item" @click="toLink(project.link)">
                <div>
                  <img :src="project.icon" width="45" height="45" />
                  <div class="title">{{ project.title }}</div>
                  <div class="des">{{ project.description }}</div>
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import Roomi from "@/assets/roomi.png";
import Shark from "@/assets/shark.png";

export default {
  computed: {
    projects() {
      return [
        {
          title: "App hunt - 1M downloads",
          description: "iOS style android app store market",
          icon: "https://play-lh.googleusercontent.com/HNHSaLtXXAMwdb9zzva2V1QM0nAR8-Iwei0Zxi9Gr4VxcaU3to2SX3YSHB-XViHP9n4=w480-h960-rw",
          link: "https://play.google.com/store/apps/details?id=com.vau.apphunt.studiotech",
        },
        {
          title: "bun-rest",
          description: "An express-like API for bun http server",
          icon: "https://camo.githubusercontent.com/c47befdac93bb193ad67412084da005bcbdd2f7f311d88ddc5e1c0aa470b8681/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d766963746f72756c65722d666c61742d766963746f72756c65722f3334342f65787465726e616c2d62616f7a692d6368696e6573652d6e65772d796561722d766963746f72756c65722d666c61742d766963746f72756c65722e706e67",
          link: "https://github.com/lau1944/bunrest",
        },
        {
          title: "Shark",
          description: "A flutter server rendering framework",
          icon: Shark,
          link: "https://github.com/lau1944/shark",
        },
        {
          title: "Roomi",
          description: "Find roomi for college student",
          icon: Roomi,
          link: "https://find-roomi.vercel.app/",
        },
        {
          title: "Others",
          description: "My google play account",
          icon: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w480-h960-rw",
          link: "https://play.google.com/store/apps/dev?id=8105772416207754950",
        },
      ];
    },
  },
  methods: {
    toLink(link) {
      if (link) {
        window.open(link);
      }
    },
  },
};
</script>

<style scoped>
#project {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.underline {
  width: 20%;
  height: 5px;
  background: #2a9d8f;
}

.tag {
  font-size: 28px;
  margin-top: 30px;
  font-family: monospace;
  font-weight: 700;
}

.item {
  font-family: monospace;
  display: flex;
  padding: 35px;
  margin-top: 10px;
  cursor: pointer;
}

.item:hover {
  background: gainsboro;
  border-radius: 25px;
  opacity: 0.6;
}

.title {
  font-size: 20px;
  font-weight: 700;
}

.des {
  font-size: 14px;
}
</style>
<template>
  <div id="intro">
    <img
      class="avatar"
      src="https://avatars.githubusercontent.com/u/40358357?v=4"
    />
    <div class="info">
      <div class="description">Ruiquan Liu</div>
      <div class="plain">
        <vue-writer :array="plain" :typeSpeed="30" :eraseSpeed="30" />
      </div>
      <div class="social">
        <div v-for="social in socials" :key="social">
          <div class="social-item" @click="toLink(social.link)">
            <img :src="social.icon" width="18" height="18" />
          </div>
        </div>
      </div>

      <!-- <div class="stack">
        <div v-for="stack in stacks" :key="stack">
          <img class="stack-img" :src="stack"/>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import linkedin from "@assets/linkedin.png";
import medium from "@assets/medium.png";
import github from "@assets/github.png";

export default {
  data: () => ({
    plain: [
      "Just make it simple 😊",
      "I am a Software engineer",
      "My stack is Java, Dart, Kotlin, Node",
      "My career is Android -> Flutter -> Springboot -> Nodejs",
      "My Next probably is Golang, Rust",
      "Scroll down to see my other stuff",
    ],
    socials: [
      {
        title: linkedin,
        link: "https://linkedin.com/in/ruiquan-liu/",
        icon: linkedin,
      },
      {
        title: medium,
        link: "https://medium.com/@jimmyleo",
        icon: medium,
      },
      {
        title: github,
        link: "https://github.com/lau1944",
        icon: github,
      },
    ],
  }),
  methods: {
    toLink(link) {
      window.open(link);
    }
  }
};
</script>

<style scoped>
#intro {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.social {
  display: flex;
  margin-top: 25px;
}

.social-item {
  padding: 15px;
  cursor: pointer;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.description {
  font-size: 24px;
  margin-top: 30px;
  font-family: monospace;
  font-weight: 700;
}

.plain {
  font-size: 14px;
  margin-top: 5px;
  font-family: monospace;
  color: black;
}

.stack {
  margin-top: 25px;
  display: flex;
  align-items: center;
}

.stack-img {
  padding: 25px;
  width: 145px;
  height: 165px;
}
</style>
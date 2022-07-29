<template>
  <div id="introduce">
    <img class="home" :src="home"/>  
    <div>
      Enjoy writing code ❤️
    </div>
    <div>
        I started from Java, then found Kotlin and Dart
        I think I am good at them.
    </div>
    <div>
      I am starting NodeJs, definitely loving it ! But in the future, I am
      interested in building things with Golang.
    </div>
  </div>
</template>

<script>
import Home from "@/assets/home.jpeg";

export default {
    data: () => ({
        home: Home,
    })
}
</script>

<style scoped>
#introduce {
  min-width: 69%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: monospace;
}

.home {
    border-radius: 15px;
    width: 450px;
    height: 280px;
    margin-bottom: 50px;
}
</style>
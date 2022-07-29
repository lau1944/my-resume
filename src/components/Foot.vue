<template>
  <div id="foot">
    <div>That's all ! Thank you 👏</div>
    <a class="contact" :href="'mailto:lauchuen94@gmail.com'"> Contact me </a>
  </div>
</template>

<style scoped>
#foot {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: monospace;
}

.contact {
    padding: 10px;
    margin-top: 25px;
    background: black;
    color: whitesmoke;
    cursor: pointer;
    border-radius: 15px;
    text-decoration: none;
}

.contact:hover {
    border-radius: 15px;
    padding: 10px;
    background: gray;
}
</style>
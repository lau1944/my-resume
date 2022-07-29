<template>
  <div id="school">
    <div class="info">
      <div class="tag">Education</div>
      <div class="underline"></div>
      <div class="school-container">
        <div>
          <info
            :src="mclogo"
            :tag="'Bachelor degree'"
            :time="'2016 - 2020'"
            :text="'Major in Software engineering'"
            :redirect="'https://web.mcu.edu.tw/'"
          />
        </div>
        <div>
          <info
            :src="nyulogo"
            :tag="'Master degree'"
            :time="'2021 - 2023'"
            :text="'Major in Computer engineering, Tandon'"
            :redirect="'https://www.nyu.edu/'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MCLOGO from "@/assets/mc-logo.png";
import NYULOGO from "@/assets/nyu-logo.png";
import Info from "./InfoItem.vue";

export default {
  components: { Info },
  data: () => ({
    mclogo: MCLOGO,
    nyulogo: NYULOGO,
    mcText: "",
  }),
};
</script>

<style scoped>
#school {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.underline {
  width: 40%;
  height: 5px;
  background: #219ebc;
}

.school-container {
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tag {
  font-size: 28px;
  margin-top: 30px;
  font-family: monospace;
  font-weight: 700;
}
</style>
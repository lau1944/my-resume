<template>
  <div id="work">
    <div class="info">
      <div class="tag">Work experience</div>
      <div class="underline"></div>
      <div class="work-container">
        <div>
          <info
            :src="microsoft"
            :tag="'Summer intern'"
            :time="'2019/6 - 2017/8'"
            :text="'Internship in microsoft, mainly using Azure platform to do some AI experienment and projects'"
          />
        </div>
        <div>
          <info
            :src="duoyi"
            :tag="'Mobile developer'"
            :time="'2020/7 - 2021/5'"
            :text="'Mainly on developing Flutter application, writing dart or android modules. Main role of mobile developer on developing a social media platform'"
            :redirect="'https://en.wikipedia.org/wiki/Duoyi_Network'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import microsoft from "@/assets/microsoft.png";
import duoyi from "@/assets/duoyi.jpeg";
import Info from "./InfoItem.vue";

export default {
  components: { Info },
  data: () => ({
    duoyi: duoyi,
    microsoft: microsoft,
  }),
};
</script>

<style scoped>
#work {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.underline {
  width: 30%;
  height: 5px;
  background: #e76f51;
}

.work-container {
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
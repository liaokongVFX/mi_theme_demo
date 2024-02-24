<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img src="/test/1.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/2.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/3.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/4.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/5.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/6.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/7.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/8.webp" alt="">
      </div>

      <div class="slide">
        <img src="/test/1.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/2.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/3.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/4.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/5.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/6.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/7.webp" alt="">
      </div>
      <div class="slide">
        <img src="/test/8.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Object
})
console.log(props)
</script>

<style scoped lang="scss">
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 8));
  }
}

.slider {
  height: 250px;
  margin: auto;
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;

  .slide-track {
    display: flex;
    width: calc(250px * 16);
    animation: scroll 40s linear infinite;

    &:hover {
      animation-play-state: paused;
    }

    .slide {
      height: 200px;
      width: 250px;
      display: flex;
      align-items: center;
      padding: 15px;
      perspective: 100px;

      img {
        width: 100%;
        transition: transform 0.5s;

        &:hover {
          transform: translateZ(20px);

        }
      }
    }
  }
}
</style>
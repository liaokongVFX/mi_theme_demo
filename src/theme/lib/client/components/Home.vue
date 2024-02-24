<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'

import {ComponentsSet} from "@/ComponentsSet";
import {usePageFrontmatter} from "@vuepress/client";
import {ref} from "vue";

const frontmatter = usePageFrontmatter()
const components = ref(frontmatter.value.components)
console.log(components)
</script>

<template>
  <main class="home">
    <template v-for="item in components">
      <component :is="ComponentsSet[item.type]" :data="item.data"  />
    </template>
<!--<component :is="AutoLoopCard"  />-->
<!--    <AutoLoopCard/>-->
<!--    <HomeHero />-->
<!--    <HomeFeatures />-->
<!--    <HomeContent />-->
<!--    <HomeFooter />-->
  </main>
</template>

<style lang='scss' scoped>
.home {
  //margin: 50px 0 0 0;
  padding: 0;
  display: block;
}
</style>

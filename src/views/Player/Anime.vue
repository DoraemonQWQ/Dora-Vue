<template>
<div id="all-player">
  <BackToUp/>
  <FilterBox/>
  <Main />
</div>
</template>

<script>

import FilterBox from "@/components/Anime/FilterBox"
import BackToUp from "@/components/Public/BackToUp";
import Main from '@/components/Anime/Main'

export default {
  name: "AllPlayer",
  components: {
    BackToUp,
    FilterBox,
    Main,
  },
}
</script>

<style scoped>

</style>
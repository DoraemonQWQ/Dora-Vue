<template>
  <div id="home">
    <BackToUp/>
    <AnimeDiv></AnimeDiv>
    <MmdDiv></MmdDiv>
    <GamesDiv></GamesDiv>
  </div>
</template>

<script>
import AnimeDiv from "@/components/Home/AnimeDiv";
import GamesDiv from "@/components/Home/GamesDiv";
import MmdDiv from "@/components/Home/MmdDiv";
import BackToUp from "@/components/Public/BackToUp";


export default {
  name: 'Home',
  components: {
    BackToUp,
    AnimeDiv,
    GamesDiv,
    MmdDiv,
  }
}
</script>
<style scoped>

</style>

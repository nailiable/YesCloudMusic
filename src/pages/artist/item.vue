<script setup lang="tsx">
const id = useNumberRoute('id')
const { data: artistsResponse } = useArtists(true, id)
</script>

<template>
  <div class="p-safe-mini">
    <div w-full flex flex-col items-center gap6 sm:flex-row>
      <img h-full class="max-w-60% sm:max-w-30" rounded-full :src="artistsResponse.artist.img1v1Url" alt="avatar">
      <!-- eslint-disable -->
      <div flex flex-col sm:flex-row sm:gap5 md:gap8 justify-center items-center>
        <div flex flex-col gap5>
          <h1 text-center sm:text-left title-2>{{ artistsResponse.artist.name }}</h1>
          <p class="double-line">{{ artistsResponse.artist.briefDesc }}</p>
        </div>
        <div mt4 sm:min-w-30 flex gap5>
          <div flex justify-center flex-col>
            <div text-center opacity70>单曲数</div>
            <div text-center text-size-xl font-900>{{ artistsResponse.artist.musicSize }}</div>
          </div>
          <div flex justify-center flex-col items-center>
            <div text-center opacity70>专辑数</div>
            <div text-center text-size-xl font-900>{{ artistsResponse.artist.albumSize }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.double-line {
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

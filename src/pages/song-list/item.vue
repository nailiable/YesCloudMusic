<script setup lang="tsx">
const id = useNumberRoute('id')
const { data: playListDetail } = usePlaylistDetail(true, id)
</script>

<template>
  <div flex flex-col gap3 sm:flex-row>
    <HoverImage min-w-50 :src="playListDetail.playlist.coverImgUrl" alt="封面" rounded-2xl sm:max-w-50 />
    <div id="head-right" flex flex-col items-center justify-between gap5 text-center sm:items-start sm:text-left>
      <!-- eslint-disable -->
      <h1 sm:title-2 title-6>{{ playListDetail.playlist.name }}</h1>
      <p class="double-line" cursor-pointer smooth hover:opacity70>{{ playListDetail.playlist.description }}</p>
      <div flex flex-col>
        <div opacity70>创建时间: {{ new Date(playListDetail.playlist.createTime).toLocaleString() }}</div>
        <div opacity70>播放量: {{ playListDetail.playlist.playCount }}</div>
        <div opacity70 flex justify-center sm:justify-left text-center>
          <div hidden sm:block>标签: &nbsp;</div>
          <div v-for="(tag, index) in playListDetail.playlist.tags" :key="index" class="tag" opacity70>
            {{ tag }} &nbsp;
          </div>
        </div>
      </div>
      <div flex>
        <NTooltip>
          点击播放，会替换当前播放列表
          <template #trigger>
            <button flex items-center gap2 btn scale btn-primary>
              <div i-ph-play />
              播放
            </button>
          </template>
        </NTooltip>

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

<script setup lang="tsx">
const id = useNumberRoute('id')
const { data: playListDetail } = usePlaylistDetail(true, id)
const { data: playListTrackList } = usePlaylistTrackAll(true, id)

function formatTime(Milliseconds: number, format = 'HH:MM:SS') {
  const time = new Date(Milliseconds)
  const hours = time.getUTCHours()
  const minutes = time.getUTCMinutes()
  const seconds = time.getUTCSeconds()
  return format
    .replace('HH', String(hours).padStart(2, '0'))
    .replace('MM', String(minutes).padStart(2, '0'))
    .replace('SS', String(seconds).padStart(2, '0'))
}
</script>

<template>
  <div lg:mx30>
    <!-- 头部 -->
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
            <div v-if="playListDetail.playlist.tags.length" v-for="(tag, index) in playListDetail.playlist.tags" :key="index" class="tag" opacity70>
              {{ tag }} &nbsp;
            </div>
            <div v-else>无</div>
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
    <!-- 歌曲列表 -->
    <div flex-col flex mt10 gap1>
      <div v-for="(item, index) in playListTrackList.songs" :key="index" flex justify-between cursor-pointer items-center p3 rounded-2xl>
        <div flex items-center w-full gap3>
          <!-- <HoverImage class="w-auto min-w-0! max-w-20!" image-class="max-w-15! min-w-15!" :src="item.al.picUrl + '?param=50y50'" alt="封面" rounded-2xl min-w-50 /> -->
          <NImage scale :src="item.al.picUrl + '?param=50y50'" :preview-src="item.al.picUrl + '?param=500y500'" alt="封面" rounded-md />
          <div flex flex-col>
            <div title-5>{{ item.name }}</div>
            <div opacity70>{{ item.ar.map(_ => _.name).join('/') }}</div>
          </div>
        </div>
        <div flex>
          {{ formatTime(item.dt) }}
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

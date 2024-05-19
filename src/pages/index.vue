<script setup lang="tsx">
const { loading: PersonalizedLoading, data: PersonalizedData } = usePersonalized(true, 12)
const { loading: TopArtistsLoading, data: TopArtistsData } = useTopArtists(true, 6)
</script>

<template>
  <div id="home">
    <!-- 手机端标题 -->
    <!-- eslint-disable -->
    <h1 block title-1 md:hidden>{{ $t('home.listen-now') }}</h1>

    <div id="home-sections" mt3 flex flex-col gap10 md:mt20>
      <!-- 歌单推荐 -->
      <section>
        <h2 mb5 flex items-center gap2 title-2 font-size-xl>
          <div class="i-ph-list-numbers-duotone" />
          <!-- eslint-disable -->
          <div relative top--0.5>{{ $t('home.section.personalized-song-list.name') }}</div>
        </h2>
        <NSpin :show="PersonalizedLoading" :description="$t('home.listen-now-loading')">
          <div grid grid-cols-2 gap3 lg:grid-cols-6 md:grid-cols-4 lg:gap6 md:gap5>
            <div v-for="(item, index) in PersonalizedData.result" :key="index" class="song-list-item">
              <SongListCard :title="item.name" :src="item.picUrl" />
            </div>
          </div>
        </NSpin>
      </section>

      <!-- 热门歌手 -->
      <section>
        <h2 title-2 mb5 flex items-center gap2 font-size-xl>
          <div class="i-ph-users-three-duotone" />
          <!-- eslint-disable -->
          <div relative top--0.5>{{ $t('home.section.top-artists.name') }}</div>
        </h2>
        <NSpin :show="TopArtistsLoading" :description="$t('home.listen-now-loading')">
          <div flex gap3 overflow-y-auto w-full h-full p1 lg:gap10>
            <div v-for="(item, index) in TopArtistsData.artists" :key="index" class="min-w-30 h-full">
              <SongListCard :title="item.name" :src="item.picUrl" image-class="rounded-full!">
                <template #title="{ title }">
                  <div text-center overflow-hidden text-truncate smooth active:opacity80 hover:opacity65>
                    {{ title }}
                  </div>
                </template>
              </SongListCard>
            </div>
          </div>
        </NSpin>
      </section>
    </div>
  </div>
</template>

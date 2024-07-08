# vue-music-playlist

A hook for managing a music playlist in Vue 3.

## Installation

```bash
npm install vue-music-playlist
```

## Usage

Also you can see the [src/index.vue](./src/index.vue) for more details.

```vue
<script setup lang="ts">
import { usePlaylist } from 'vue-music-playlist'

// 测试的播放列表
const playlist = ref([2, 3, 4, 5, 6, 7, 8, 9, 10])
const { currentSong, playNextSong, playPrevSong, playMethod, togglePlayMethod } = usePlaylist({
  initialCurrentValue: playlist.value[0],
  initialPlaylist: playlist,
  initialPlayMethod: 'circle',
})
const playMethodText = computed(() => match(playMethod.value)
  .with('circle', () => '列表循环' as const)
  .with('random', () => '随机播放' as const)
  .with('single', () => '单曲循环' as const)
  .exhaustive())
</script>

<template>
  <div>
    当前播放: {{ currentSong }}
    <div>
      <!-- eslint-disable-next-line -->
      <button @click="playPrevSong">上一首</button>
      <!-- eslint-disable-next-line -->
      <button @click="togglePlayMethod">{{ playMethodText }}</button>
      <!-- eslint-disable-next-line -->
      <button @click="playNextSong">下一首</button>
    </div>

    <div>播放列表</div>
    <table>
      <tr v-for="song in playlist" :key="song">
        <td>{{ song }}</td>
        <!-- eslint-disable-next-line -->
        <td><button @click="currentSong = song">播放</button></td>
      </tr>
    </table>
  </div>
</template>
```

The api of `usePlaylist` hook has jsdoc comments to help you understand how to use it, and you can see the [lib/playList.ts](./lib/playList.ts) for more details.

## Author

👤 **Naily Zero** [zero@naily.cc](mailto:zero@naily.cc)

## License

MIT

<route lang="yaml">
meta:
  layout: blank
</route>

<h1 p0 m0>{{ $t('server.help.title') }}</h1>

<p>{{ $t('server.help.p1') }}</p>

<div flex justify-center mt10>
  <button @click="$router.push('/')" btn btn-primary scale>
  {{ $t('server.help.back') }}
  </button>
</div>

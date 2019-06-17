<template lang="pug">
v-app
  toolbar
  v-content
    v-container(fluid pa-0)
      nuxt
  v-footer.text-xs-center.pb-5.mb-5
    v-layout(justify-center).grey--text
      v-flex Copyright 2019, Introduce-maker team. All rights Reserved.
</template>

<script>
import toolbar from '@/components/layout/toolbar'

export default {
  components: {
    toolbar
  }
}
</script>

<template lang="pug">
  v-toolbar(flat dark).primary
    v-toolbar-title
      span.display-1.font-weight-bold 紹介メーカー
      span.caption 知り合った人をみんなに紹介！
    v-spacer
    v-layout(align-center justify-end v-if="user")
      span.mr-3
        v-avatar
          img(
            :src="user.photoURL"
            max-height="50px"
            :aspect-ratio="1"
          )
      span {{ user.displayName }}
      span.ml-3
        v-btn(text color="accent" @click="logout") ログアウト
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

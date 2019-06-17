<template lang="pug">
  v-toolbar(app flat dark).primary
    v-toolbar-title
      span.headline.font-weight-bold 紹介メーカー
      span.caption.hidden-sm-and-down 知り合った人をみんなに紹介！
    v-spacer
    v-layout(align-center justify-end v-if="user")
      span
        v-avatar
          img(
            :src="user.photoURL"
            max-height="50px"
            :aspect-ratio="1"
          )
      span.hidden-sm-and-down.ml-3 {{ user.displayName }}
      span
        v-btn(text color="accent" @click="logout")
          v-icon.white--text mdi-logout
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

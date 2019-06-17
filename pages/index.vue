<!-- prettier-ignore -->
<template lang="pug">
  v-layout(column)
    v-img(
      max-height="400px"
      src="https://publicdomainq.net/images/201712/08s/publicdomainq-0016529qvz.jpg"
      gradient="to top right, rgba(255,255,255,.9), rgba(255,255,255,.9)"
    ).px-4.py-5.secondary--text.text-xs-center
      v-flex(pt-5 px-4).headline あなたのおすすめSNSアカウントを
        br
        | おしゃれに紹介できる
      v-flex(tag="h1" py-5 px-4).display-4.font-weight-bold 紹介メーカー
    v-layout.pa-5(column).headline.font-weight-bold
      v-flex
        v-flex 紹介メーカーとは、あなたが知り合った人、紹介したい人のアカウントをSNSのタイムライン上で紹介できるサービスです。
      v-flex.mt-3 紹介の内容は自動で1枚の画像におしゃれにまとめられます。他の人が見てわかりやすい形で他己紹介できるのが特長です。
    v-layout(column).pa-5
      v-flex(pb-3) 利用規約に同意して
      v-layout(justify-center)
        v-btn(dark large @click="login").primary
          span.font-weight-bold.headline さっそく紹介する(Twitterログイン)
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    })
  }
}
</script>

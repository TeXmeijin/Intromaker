<template lang="pug">
v-layout(justify-center).grey.lighten-4
  v-flex(xs12 md8)
    v-card(flat)
      v-card-title
        v-flex(tag="h1").display-1.font-weight-bold 紹介する
      v-card-content
        v-layout(column).pa-3.my-2
          v-flex(tag="h2").title TwitterID
            span.caption.red--text (must)
          v-autocomplete(
            v-model="twitterId"
            placeholder="e.g. BarackObama"
            prepend-icon="mdi-at"
            :search-input.sync="searchName"
            :items="items"
            hide-no-data
            hide-selected
          )
        v-layout(column).pa-3.my-2
          v-flex(tag="h2").title 知ったきっかけ
            span.caption.red--text (must)
          v-textarea(
            placeholder="e.g. 偶然立ち寄ったバーで飲んでいるのを発見し声をかけました🍶"
          )
        v-layout(column).pa-3.my-2
          v-flex(tag="h2").title タグ
            span.caption.grey--text (optional)
          v-layout(wrap)
            template(v-for="masterTag in MASTER_TAGS")
              v-checkbox(
                v-model="tags"
                :label="masterTag.name"
                :value="masterTag.id"
              ).mt-1
        v-layout(column).pa-3.my-2
          v-flex(tag="h2").title この人のすごいところ
            span.caption.grey--text (optional)
          v-textarea(
            placeholder="e.g. 突然の声かけにも気さくに明るく応対していただいた姿が印象的でした！"
          )
        v-layout(column).pa-3.my-2
          v-flex(tag="h2").title Twitterフォローおすすめ度
            span.caption.grey--text (optional)
          v-slider(
            v-model="recommend"
            thumb-label="always"
          ).mt-5
  v-footer(fixed)
    v-btn(block dark large).my-3.primary
      span.headline.font-weight-bold 紹介する
</template>

<script>
export default {
  data() {
    return {
      searchName: null,
      items: null,
      twitterId: '',
      recommend: 50,
      tags: [],
      MASTER_TAGS: [
        { id: 1, name: 'お酒が好き' },
        { id: 2, name: '仕事に真面目' },
        { id: 3, name: '勉強熱心' },
        { id: 4, name: '面白い' }
      ]
    }
  },
  watch: {
    searchName(val) {
      this.items = ['meijin_garden', 'BarackObama']
    }
  }
}
</script>

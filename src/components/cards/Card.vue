<template>
  <a-card
    hoverable
    style="width: 300px; height: 250px"
    :title="`${magicId}.${magicName}`"
  >
    <a slot="extra">{{ isLearned === "true" ? '已完成' : '未完成' }}</a>
    <p>稀有度：{{ rare }}</p>
    <p>类型：{{ type }}</p>
    <p>获取地点：{{ wayToLearn.split('「')[0] }}</p>
    <p v-if="wayToLearn.split('「')[1]">击杀怪物：{{ wayToLearn.split('「')[1] }}</p>
  </a-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    magicId: String,
    magicName: String,
    type: String,
    wayToLearn: String,
    isLearned: String,
    rare: String
  }
}
</script>
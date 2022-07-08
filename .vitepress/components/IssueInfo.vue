<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps({
  createdAt: String,
  updatedAt: String,
  creator: String
})

const formatCteatedAt = dayjs(props.createdAt).format('YYYY-MM-DD HH:mm:ss')
const formatUpdatedAt = dayjs(props.updatedAt).format('YYYY-MM-DD HH:mm:ss')
</script>

<template>
  <div class="issue-info-wrap">
    <div class="item">
      <label>Created at</label>
      <div>{{ formatCteatedAt }}</div>
    </div>
    <div class="item">
      <label>Updated at</label>
      <div>{{ formatUpdatedAt }}</div>
    </div>
    <div class="item">
      <label>Creator</label>
      <div>{{ creator }}</div>
    </div>
  </div>
</template>

<style scoped>
.issue-info-wrap {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  transition: all .3s;
}
.issue-info-wrap:hover {
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
}

.item {
  display: flex;
}
.item label {
  opacity: 50%;
  width: 150px;
}
</style>

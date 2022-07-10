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
  <div flex="~ col" mt-4 mb-4 fs-14 text-4 shadow="~ white" hover-shadow="~ zinc" transition rounded>
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
.item {
  display: flex;
}
.item label {
  opacity: 50%;
  width: 150px;
}
</style>

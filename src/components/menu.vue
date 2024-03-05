<script setup lang="ts">
defineProps({
  scrollTop: {
    type: Number,
    default: 0
  }
});
</script>

<template>
  <view class="menu">
    <view class="item">
      <view>标题</view>
      <view>箭头</view>
    </view>
    <view class="item">
      <view>标题</view>
      <view>箭头</view>
    </view>
    <view class="item">
      <view>标题</view>
      <view>箭头</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.menu {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
</style>

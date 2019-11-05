<template>
  <div class="Category">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="电器" />
      <van-sidebar-item title="食物" />
      <van-sidebar-item title="服饰" />
      <van-sidebar-item title="美妆" />
    </van-sidebar>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    data() {
      return {
        activeKey: ''
      };
    }
  };
</script>

<style scoped>

</style>

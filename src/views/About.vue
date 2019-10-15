<template>
  <div class="about">
    {{num}}
    <ul v-if="this.$route.query.da != null">
      <li v-for="(val,index) in this.$route.query.da" :key="index">
        {{val}}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'about',
  props: ['datauser'],
  data() {
    return {
      num: 0,
    };
  },
};

</script>

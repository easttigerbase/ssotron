
<template>
    <v-app-bar
        absolute
        color="transparent"
      style="box-shadow: none"
        hide-on-scroll
        prominent
        scroll-target="#scrolling-techniques-4"
    >
      <v-img
          class="shrink mr-2"
          contain
          :src="require('@/assets/otron.png')"
          transition="scale-transition"
          width="200"
      />

      <v-app-bar-nav-icon  @click.stop="navClick"></v-app-bar-nav-icon>
    </v-app-bar>

</template>

<script>
export default {
  name: "AppBar",
  data:()=>({
    draw:false,
  }),
  methods:{
    navClick(){
      this.drawer = !this.drawer
      this.$emit('drawer',this.drawer);
    },
  }

}
</script>

<style scoped>

</style>
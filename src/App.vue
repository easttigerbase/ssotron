<template>
  <v-app class="overflow-hidden">
    <AppBar @drawer="getDrawer"></AppBar>
    <NavBar :drawer="drawer"></NavBar>
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container fluid
                   id="scrolling-techniques-4"
                   class="overflow-y-auto"
                   max-height="100%">
        <!-- If using vue-router -->
        <router-view style="height: 1000px;"></router-view>


      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar";
import NavBar from "@/components/AppBar/NavBar";
export default {
  name: 'App',
  components: {
    AppBar,NavBar
  },

  data: () => ({
    drawer:null,
    //
  }),
  methods:{
    getDrawer(val){
      this.drawer = val;

    }
  }
};
</script>

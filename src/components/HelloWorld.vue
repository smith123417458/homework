<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto" max-width="400">
        <v-list two-line>
          <v-subheader class="title">
            <v-btn icon>
              <v-icon color="green">mdi-run</v-icon>
            </v-btn>
            進行中</v-subheader
          >
          <template v-for="(item, index) in doing">
            <v-list-item :key="item.name">
              <v-list-item-avatar>
                <v-img :src="item.logo"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <span>
                  <span class="wordGreen">{{ item.status.type }} </span>
                  <span style="color: white"> -------- </span> 預計出貨日:{{ item.date }}
                </span>
                <p style="margin-top: 2%; line-height: 1.5">{{ item.name }}</p>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-divider v-if="index < doing.length - 1" :key="index"></v-divider>
          </template>

          <v-subheader class="title">
            <v-btn icon> <v-icon color="green">mdi-thumb-up-outline</v-icon> </v-btn
            >已完成</v-subheader
          >

          <template v-for="(item, index) in finished">
            <v-list-item :key="item.name">
              <v-list-item-avatar>
                <v-img src="../assets/logo.png"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <span class="wordGreen">{{ item.status.type }} </span>

                <p style="margin-top: 2%; line-height: 1.5">{{ item.name }}</p>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-divider v-if="index < finished.length - 1" :key="index.name"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    doing: [],
    finished: [],
  }),
  created() {
    this.rawDate = this.$store.state.getDate;
    if (this.rawDate.length !== 0) {
      this.doing = this.rawDate.filter((e) => e.status.code == 1 || e.status.code == 2);
      this.doing.sort((a, b) => a.date.localeCompare(b.date));
      this.finished = this.rawDate.filter(
        (e) => e.status.code == 3 || e.status.code == 4
      );
    }
  },
};
</script>
<style scoped>
.wordGreen {
  color: green;
  font-weight: bold !important;
}
.title {
  background-color: rgb(231, 230, 230);
  font-weight: bold !important;
}
</style>

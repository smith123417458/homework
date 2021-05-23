import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    getDate: [
      {
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
        status: {
          code: 3,
          type: "已取消",
        },
        date: "107/6/12",
      },
      {
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        name: "BALMUDA The Toaster 百慕達烤麵包機-黑色",
        status: {
          code: 2,
          type: "已成立",
        },
        date: "108/7/21",
      },
      {
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",

        status: {
          code: 4,
          type: "已送達",
        },
        date: "106/3/2",
      },
      {
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        name: "Apple AirPds 2",
        status: {
          code: 2,
          type: "處理中",
        },
        date: "108/6/7",
      },

      {
        name: "Travis Howard 贈三合一濾網「LG樂金」韓國原裝...",
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        status: {
          code: 2,
          type: "己送達",
        },
        date: "108/6/2",
      },
      {
        name: "小米手錶 贈-短慧萬用鍋HD2133+三合一濾網",
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        status: {
          code: 1,
          type: "己取消",
        },
        date: "108/6/2",
      },
    ],

  },
  mutations: {
  },
  actions: {
  },
})

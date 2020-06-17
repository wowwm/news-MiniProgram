// pages/index/index.js

var common = require("../../utils/common.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      { src:"http://img5.imgtn.bdimg.com/it/u=1035415831,1465727770&fm=26&gp=0.jpg"},
      { src: "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg" },
      { src: "http://bbs.jooyoo.net/attachment/Mon_0905/24_65548_2835f8eaa933ff6.jpg" }
    ],

    newsList:[ ]
  },

  goToDetail:function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
      
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getNewList();
    this.setData({
      newsList:list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
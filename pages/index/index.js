const app = getApp();

Page({
  data: {
    currentGrade: 'grade3',
    todayWords: 0,
    todayTests: 0,
    correctRate: 0,
    studyStats: {
      totalStudyTime: 0,
      totalWords: 0,
      correctWords: 0,
      streakDays: 0
    },
    favoriteCount: 0
  },

  onLoad() {
    this.loadProgress();
    this.loadStudyStats();
  },

  onShow() {
    this.loadProgress();
    this.loadStudyStats();
  },

  // 加载学习进度
  loadProgress() {
    const progress = wx.getStorageSync('studyProgress') || {};
    const today = new Date().toDateString();
    const todayData = progress[today] || { words: 0, tests: 0, correct: 0, total: 0 };

    const correctRate = todayData.total > 0
      ? Math.round((todayData.correct / todayData.total) * 100)
      : 0;

    this.setData({
      todayWords: todayData.words || 0,
      todayTests: todayData.tests || 0,
      correctRate: correctRate
    });
  },

  // 加载学习统计
  loadStudyStats() {
    const stats = app.getStudyStats();
    const favorites = app.getFavorites();

    this.setData({
      studyStats: stats,
      favoriteCount: favorites.length
    });
  },

  // 选择年级
  selectGrade(e) {
    const grade = e.currentTarget.dataset.grade;
    this.setData({ currentGrade: grade });
    app.globalData.currentGrade = grade;
    wx.setStorageSync('currentGrade', grade);
  },

  // 跳转到单词学习
  goToWords() {
    wx.setStorageSync('currentGrade', this.data.currentGrade);
    wx.switchTab({
      url: '/pages/words/words'
    });
  },

  // 跳转到课文朗读
  goToTexts() {
    wx.setStorageSync('currentGrade', this.data.currentGrade);
    wx.switchTab({
      url: '/pages/texts/texts'
    });
  },

  // 跳转到测试
  goToTest() {
    wx.setStorageSync('currentGrade', this.data.currentGrade);
    wx.switchTab({
      url: '/pages/test/test'
    });
  },

  // 跳转到听写练习
  goToDictation() {
    wx.setStorageSync('currentGrade', this.data.currentGrade);
    wx.navigateTo({
      url: '/package-words/pages/dictation/dictation'
    });
  },

  // 快速开始
  quickStart() {
    wx.setStorageSync('currentGrade', this.data.currentGrade);
    wx.switchTab({
      url: '/pages/words/words'
    });
  },

  // 跳转到隐私政策
  goToPrivacy() {
    wx.navigateTo({
      url: '/pages/privacy/privacy'
    });
  }
});

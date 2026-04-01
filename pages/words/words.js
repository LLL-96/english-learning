const { wordsData } = require('../../utils/wordsData.js');
const app = getApp();

Page({
  data: {
    currentGrade: 'grade3',
    currentUnit: 1,
    units: [],
    wordsList: [],
    currentIndex: 0,
    currentWord: null,
    showExample: false,
    wordProgress: null, // 当前单词学习进度
    isFavorite: false, // 是否收藏
    studyStartTime: null // 学习开始时间
  },

  onLoad() {
    const savedGrade = wx.getStorageSync('currentGrade') || 'grade3';
    this.setData({
      currentGrade: savedGrade,
      studyStartTime: Date.now()
    });
    this.loadGradeData(savedGrade);
  },

  onUnload() {
    // 记录学习时间
    if (this.data.studyStartTime) {
      const studyTime = Math.floor((Date.now() - this.data.studyStartTime) / 60000);
      if (studyTime > 0) {
        app.recordStudyTime(studyTime);
      }
    }
  },

  // 加载年级数据
  loadGradeData(grade) {
    const gradeData = wordsData[grade];
    if (!gradeData) {
      wx.showToast({
        title: '该年级数据正在准备中',
        icon: 'none'
      });
      return;
    }

    const units = gradeData.units || [];
    const currentUnitData = units.find(u => u.unit === this.data.currentUnit) || units[0];
    const currentWord = currentUnitData ? currentUnitData.words[0] : null;

    this.setData({
      units: units,
      currentUnit: currentUnitData ? currentUnitData.unit : 1,
      wordsList: currentUnitData ? currentUnitData.words : [],
      currentIndex: 0,
      currentWord: currentWord,
      showExample: false
    });

    // 更新当前单词进度和收藏状态
    if (currentWord) {
      this.updateWordStatus(currentWord.en);
    }
  },

  // 更新单词状态（进度和收藏）
  updateWordStatus(word) {
    const progress = app.getWordProgress(word);
    const isFavorite = app.isFavorite(word);
    this.setData({
      wordProgress: progress,
      isFavorite: isFavorite
    });
  },

  // 切换年级
  switchGrade(e) {
    const grade = e.currentTarget.dataset.grade;
    this.setData({ currentGrade: grade });
    wx.setStorageSync('currentGrade', grade);
    this.loadGradeData(grade);
  },

  // 切换单元
  switchUnit(e) {
    const unit = parseInt(e.currentTarget.dataset.unit);
    const gradeData = wordsData[this.data.currentGrade];
    const unitData = gradeData.units.find(u => u.unit === unit);

    if (unitData) {
      const currentWord = unitData.words[0];
      this.setData({
        currentUnit: unit,
        wordsList: unitData.words,
        currentIndex: 0,
        currentWord: currentWord,
        showExample: false
      });
      // 更新单词状态
      if (currentWord) {
        this.updateWordStatus(currentWord.en);
      }
    }
  },

  // 朗读单词
  speakWord() {
    if (this.data.currentWord) {
      app.speak(this.data.currentWord.en);
      // 记录学习进度
      app.recordWordStudy(this.data.currentWord.en, true);
      // 更新显示
      this.updateWordStatus(this.data.currentWord.en);
    }
  },

  // 切换收藏状态
  toggleFavorite() {
    if (!this.data.currentWord) return;

    const word = this.data.currentWord.en;
    if (this.data.isFavorite) {
      app.removeFavorite(word);
      wx.showToast({ title: '已取消收藏', icon: 'none' });
    } else {
      app.addFavorite(word);
      wx.showToast({ title: '已收藏', icon: 'success' });
    }
    this.setData({ isFavorite: !this.data.isFavorite });
  },

  // 朗读单个单词
  speakItem(e) {
    const word = e.currentTarget.dataset.word;
    app.speak(word);
  },

  // 切换例句显示
  toggleExample() {
    this.setData({
      showExample: !this.data.showExample
    });
  },

  // 上一个单词
  prevWord() {
    if (this.data.currentIndex > 0) {
      const newIndex = this.data.currentIndex - 1;
      const newWord = this.data.wordsList[newIndex];
      this.setData({
        currentIndex: newIndex,
        currentWord: newWord,
        showExample: false
      });
      this.updateWordStatus(newWord.en);
    }
  },

  // 下一个单词
  nextWord() {
    if (this.data.currentIndex < this.data.wordsList.length - 1) {
      const newIndex = this.data.currentIndex + 1;
      const newWord = this.data.wordsList[newIndex];
      this.setData({
        currentIndex: newIndex,
        currentWord: newWord,
        showExample: false
      });
      this.updateWordStatus(newWord.en);
    }
  },

  // 跳转到指定单词
  jumpToWord(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    const newWord = this.data.wordsList[index];
    this.setData({
      currentIndex: index,
      currentWord: newWord,
      showExample: false
    });
    this.updateWordStatus(newWord.en);
  }
});

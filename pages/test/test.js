const { wordsData } = require('../../utils/wordsData.js');
const app = getApp();

Page({
  data: {
    gradeArray: ['三年级上', '三年级下', '四年级上', '四年级下', '五年级上', '五年级下', '六年级上', '六年级下'],
    gradeIndex: 0,
    countArray: ['5', '10', '15', '20'],
    countIndex: 1,
    
    score: 0,
    currentQuestion: 1,
    totalQuestions: 10,
    correctCount: 0,
    wrongCount: 0,
    
    questionWords: [],
    currentWord: null,
    options: [],
    answered: false,
    selectedIndex: -1,
    isCorrect: false,
    testFinished: false,
    correctRate: 0
  },

  onLoad() {
    this.initTest();
  },

  // 初始化测试
  initTest() {
    const gradeKeys = ['grade3', 'grade3b', 'grade4', 'grade4b', 'grade5', 'grade5b', 'grade6', 'grade6b'];
    const gradeKey = gradeKeys[this.data.gradeIndex];
    const gradeData = wordsData[gradeKey];
    
    if (!gradeData) {
      wx.showToast({
        title: '该年级数据准备中',
        icon: 'none'
      });
      return;
    }

    // 收集所有单词
    let allWords = [];
    gradeData.units.forEach(unit => {
      allWords = allWords.concat(unit.words);
    });

    // 随机选择题目
    const totalQuestions = parseInt(this.data.countArray[this.data.countIndex]);
    const questionWords = this.shuffleArray(allWords).slice(0, totalQuestions);

    this.setData({
      score: 0,
      currentQuestion: 1,
      totalQuestions: totalQuestions,
      correctCount: 0,
      wrongCount: 0,
      questionWords: questionWords,
      testFinished: false,
      answered: false
    });

    this.generateQuestion();
  },

  // 生成题目
  generateQuestion() {
    const currentWord = this.data.questionWords[this.data.currentQuestion - 1];
    
    // 从所有单词中随机选择3个错误选项
    const allWords = this.data.questionWords;
    const wrongOptions = allWords
      .filter(w => w.en !== currentWord.en)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    // 合并并打乱选项
    const options = [...wrongOptions, currentWord]
      .map(word => ({...word, isCorrect: word.en === currentWord.en}))
      .sort(() => Math.random() - 0.5);

    this.setData({
      currentWord: currentWord,
      options: options,
      answered: false,
      selectedIndex: -1,
      isCorrect: false
    });

    // 自动播放
    setTimeout(() => {
      app.speak(currentWord.en);
    }, 500);
  },

  // 播放问题
  playQuestion() {
    if (this.data.currentWord) {
      app.speak(this.data.currentWord.en);
    }
  },

  // 选择选项
  selectOption(e) {
    if (this.data.answered) return;

    const index = parseInt(e.currentTarget.dataset.index);
    const selected = this.data.options[index];
    const isCorrect = selected.isCorrect;

    this.setData({
      answered: true,
      selectedIndex: index,
      isCorrect: isCorrect
    });

    if (isCorrect) {
      this.setData({
        score: this.data.score + 10,
        correctCount: this.data.correctCount + 1
      });
    } else {
      this.setData({
        wrongCount: this.data.wrongCount + 1
      });
    }

    // 记录测试进度
    this.recordTest(isCorrect);
  },

  // 下一题
  nextQuestion() {
    if (this.data.currentQuestion < this.data.totalQuestions) {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1
      });
      this.generateQuestion();
    } else {
      // 测试完成
      const correctRate = Math.round((this.data.correctCount / this.data.totalQuestions) * 100);
      this.setData({
        testFinished: true,
        correctRate: correctRate
      });
    }
  },

  // 重新测试
  restartTest() {
    this.initTest();
  },

  // 返回学习
  backToStudy() {
    wx.switchTab({
      url: '/pages/words/words'
    });
  },

  // 年级选择
  onGradeChange(e) {
    this.setData({ gradeIndex: parseInt(e.detail.value) });
    this.initTest();
  },

  // 题目数量选择
  onCountChange(e) {
    this.setData({ countIndex: parseInt(e.detail.value) });
    this.initTest();
  },

  // 打乱数组
  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  },

  // 记录测试进度
  recordTest(isCorrect) {
    const today = new Date().toDateString();
    let progress = wx.getStorageSync('studyProgress') || {};
    
    if (!progress[today]) {
      progress[today] = { words: 0, tests: 0, correct: 0, total: 0 };
    }
    
    progress[today].tests++;
    progress[today].total++;
    if (isCorrect) {
      progress[today].correct++;
    }
    
    wx.setStorageSync('studyProgress', progress);
  }
});

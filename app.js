App({
  onLaunch() {
    // 检查更新
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate();
                }
              }
            });
          });
        }
      });
    }

    // 初始化学习进度
    this.initStudyProgress();
  },

  globalData: {
    currentGrade: 3,
    currentUnit: 1,
    userInfo: null,
    studyProgress: {},
    audioCache: {}, // 音频缓存
    favoriteWords: [], // 收藏单词
    studyStats: { // 学习统计
      totalStudyTime: 0,
      totalWords: 0,
      correctWords: 0,
      streakDays: 0,
      lastStudyDate: null
    }
  },

  // 初始化学习进度
  initStudyProgress() {
    // 从本地存储加载学习进度
    const savedProgress = wx.getStorageSync('studyProgress') || {};
    const savedFavorites = wx.getStorageSync('favoriteWords') || [];
    const savedStats = wx.getStorageSync('studyStats') || {
      totalStudyTime: 0,
      totalWords: 0,
      correctWords: 0,
      streakDays: 0,
      lastStudyDate: null
    };

    this.globalData.studyProgress = savedProgress;
    this.globalData.favoriteWords = savedFavorites;
    this.globalData.studyStats = savedStats;

    // 检查连续学习天数
    this.checkStreakDays();
  },

  // 检查连续学习天数
  checkStreakDays() {
    const stats = this.globalData.studyStats;
    const today = new Date().toDateString();
    const lastDate = stats.lastStudyDate;

    if (lastDate) {
      const last = new Date(lastDate);
      const now = new Date();
      const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // 连续学习
        stats.streakDays++;
      } else if (diffDays > 1) {
        // 中断，重置
        stats.streakDays = 1;
      }
    }

    stats.lastStudyDate = today;
    this.saveStudyStats();
  },

  // 获取单词学习进度
  getWordProgress(word) {
    const progress = this.globalData.studyProgress;
    return progress[word] || {
      studyCount: 0,
      correctCount: 0,
      lastStudyTime: null,
      masteryLevel: 0 // 0-5 掌握程度
    };
  },

  // 记录单词学习
  recordWordStudy(word, isCorrect = true) {
    const progress = this.globalData.studyProgress;

    if (!progress[word]) {
      progress[word] = {
        studyCount: 0,
        correctCount: 0,
        lastStudyTime: null,
        masteryLevel: 0
      };
    }

    const wordProgress = progress[word];
    wordProgress.studyCount++;
    wordProgress.lastStudyTime = new Date().toISOString();

    if (isCorrect) {
      wordProgress.correctCount++;
      this.globalData.studyStats.correctWords++;
    }

    // 计算掌握程度 (0-5)
    const accuracy = wordProgress.correctCount / wordProgress.studyCount;
    wordProgress.masteryLevel = Math.min(5, Math.floor(accuracy * wordProgress.studyCount / 2));

    this.globalData.studyStats.totalWords++;
    this.saveStudyProgress();
    this.saveStudyStats();
  },

  // 保存学习进度
  saveStudyProgress() {
    wx.setStorageSync('studyProgress', this.globalData.studyProgress);
  },

  // 保存学习统计
  saveStudyStats() {
    wx.setStorageSync('studyStats', this.globalData.studyStats);
  },

  // 添加收藏
  addFavorite(word) {
    const favorites = this.globalData.favoriteWords;
    if (!favorites.includes(word)) {
      favorites.push(word);
      wx.setStorageSync('favoriteWords', favorites);
    }
  },

  // 移除收藏
  removeFavorite(word) {
    const favorites = this.globalData.favoriteWords;
    const index = favorites.indexOf(word);
    if (index > -1) {
      favorites.splice(index, 1);
      wx.setStorageSync('favoriteWords', favorites);
    }
  },

  // 检查是否收藏
  isFavorite(word) {
    return this.globalData.favoriteWords.includes(word);
  },

  // 获取收藏列表
  getFavorites() {
    return this.globalData.favoriteWords;
  },

  // 获取学习统计
  getStudyStats() {
    return this.globalData.studyStats;
  },

  // 记录学习时间（分钟）
  recordStudyTime(minutes) {
    this.globalData.studyStats.totalStudyTime += minutes;
    this.saveStudyStats();
  },

  // 语音合成播放
  speak(text, rate = 1.0) {
    if (!text) return;

    // 显示文字提示（始终可用）
    wx.showToast({
      title: text,
      icon: 'none',
      duration: 2000
    });

    // 优先使用本地音频
    this.playLocalAudio(text);
  },

  // 播放本地音频
  playLocalAudio(text) {
    // 将文本转换为文件名（去除特殊字符）
    const fileName = text.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const audioPath = `/audio/${fileName}.mp3`;

    // 检查本地文件是否存在
    const fs = wx.getFileSystemManager();

    try {
      // 尝试访问本地音频文件
      fs.accessSync(audioPath);
      // 文件存在，播放本地音频
      this.playAudioFile(audioPath, text);
    } catch (e) {
      // 本地文件不存在，显示提示
      console.log('本地音频不存在:', text);
      wx.showToast({
        title: '暂无音频',
        icon: 'none',
        duration: 1500
      });
    }
  },

  // 播放音频文件
  playAudioFile(filePath, text) {
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.src = filePath;

    innerAudioContext.onPlay(() => {
      console.log('本地音频播放成功:', text);
    });

    innerAudioContext.onError((err) => {
      console.error('本地音频播放失败:', err);
      innerAudioContext.destroy();
      wx.showToast({
        title: '音频播放失败',
        icon: 'none',
        duration: 1500
      });
    });

    innerAudioContext.onEnded(() => {
      innerAudioContext.destroy();
    });

    innerAudioContext.play();
  }
});

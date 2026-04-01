const { textsData } = require('../../utils/wordsData.js');
const app = getApp();

Page({
  data: {
    currentGrade: 'grade3',
    currentUnitIndex: 0,
    unitArray: [],
    currentUnitData: null
  },

  onLoad() {
    const savedGrade = wx.getStorageSync('currentGrade') || 'grade3';
    this.setData({ currentGrade: savedGrade });
    this.loadGradeData(savedGrade);
  },

  // 加载年级数据
  loadGradeData(grade) {
    const gradeData = textsData[grade];
    if (!gradeData || gradeData.length === 0) {
      this.setData({
        unitArray: [],
        currentUnitData: null
      });
      return;
    }

    const unitArray = gradeData.map(item => ({
      unit: item.unit,
      title: item.title
    }));

    this.setData({
      unitArray: unitArray,
      currentUnitIndex: 0,
      currentUnitData: gradeData[0]
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
  onUnitChange(e) {
    const index = parseInt(e.detail.value);
    const gradeData = textsData[this.data.currentGrade];
    
    this.setData({
      currentUnitIndex: index,
      currentUnitData: gradeData[index]
    });
  },

  // 朗读对话
  speakDialog(e) {
    const text = e.currentTarget.dataset.text;
    app.speak(text);
  },

  // 朗读全文
  speakFullText() {
    if (this.data.currentUnitData && this.data.currentUnitData.dialogs) {
      const fullText = this.data.currentUnitData.dialogs.map(d => d.en).join('. ');
      app.speak(fullText);
    }
  }
});

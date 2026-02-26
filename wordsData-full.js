// 小学英语单词数据（3-6年级，上下册）
const wordsData = {
  // 三年级上册
  grade3: {
    units: [
      {
        unit: 1,
        title: "Unit 1 Hello!",
        words: [
          {en: "ruler", phonetic: "/ˈruːlər/", cn: "尺子"},
          {en: "pencil", phonetic: "/ˈpensl/", cn: "铅笔"},
          {en: "eraser", phonetic: "/ɪˈreɪsər/", cn: "橡皮"},
          {en: "crayon", phonetic: "/ˈkreɪən/", cn: "蜡笔"},
          {en: "bag", phonetic: "/bæɡ/", cn: "书包"},
          {en: "pen", phonetic: "/pen/", cn: "钢笔"},
          {en: "book", phonetic: "/bʊk/", cn: "书"},
          {en: "no", phonetic: "/nəʊ/", cn: "不"},
          {en: "your", phonetic: "/jɔːr/", cn: "你的"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Colours!",
        words: [
          {en: "red", phonetic: "/red/", cn: "红色"},
          {en: "green", phonetic: "/ɡriːn/", cn: "绿色"},
          {en: "yellow", phonetic: "/ˈjeləʊ/", cn: "黄色"},
          {en: "blue", phonetic: "/bluː/", cn: "蓝色"},
          {en: "black", phonetic: "/blæk/", cn: "黑色"},
          {en: "brown", phonetic: "/braʊn/", cn: "棕色"},
          {en: "white", phonetic: "/waɪt/", cn: "白色"},
          {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙色"}
        ]
      }
    ]
  },
  // 三年级下册
  grade3b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 Welcome back!",
        words: [
          {en: "UK", phonetic: "/ˌjuː ˈkeɪ/", cn: "英国"},
          {en: "Canada", phonetic: "/ˈkænədə/", cn: "加拿大"},
          {en: "USA", phonetic: "/ˌjuː es ˈeɪ/", cn: "美国"},
          {en: "China", phonetic: "/ˈtʃaɪnə/", cn: "中国"},
          {en: "she", phonetic: "/ʃiː/", cn: "她"},
          {en: "student", phonetic: "/ˈstjuːdənt/", cn: "学生"},
          {en: "pupil", phonetic: "/ˈpjuːpl/", cn: "小学生"},
          {en: "he", phonetic: "/hiː/", cn: "他"},
          {en: "teacher", phonetic: "/ˈtiːtʃər/", cn: "教师"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My family",
        words: [
          {en: "father", phonetic: "/ˈfɑːðər/", cn: "父亲"},
          {en: "dad", phonetic: "/dæd/", cn: "爸爸"},
          {en: "mother", phonetic: "/ˈmʌðər/", cn: "母亲"},
          {en: "mom", phonetic: "/mɒm/", cn: "妈妈"},
          {en: "man", phonetic: "/mæn/", cn: "男人"},
          {en: "woman", phonetic: "/ˈwʊmən/", cn: "女人"},
          {en: "sister", phonetic: "/ˈsɪstər/", cn: "姐妹"},
          {en: "brother", phonetic: "/ˈbrʌðər/", cn: "兄弟"},
          {en: "family", phonetic: "/ˈfæməli/", cn: "家庭"}
        ]
      }
    ]
  },
  // 四年级上册
  grade4: {
    units: [
      {
        unit: 1,
        title: "Unit 1 My classroom",
        words: [
          {en: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室"},
          {en: "window", phonetic: "/ˈwɪndəʊ/", cn: "窗户"},
          {en: "blackboard", phonetic: "/ˈblækbɔːrd/", cn: "黑板"},
          {en: "light", phonetic: "/laɪt/", cn: "电灯"},
          {en: "picture", phonetic: "/ˈpɪktʃər/", cn: "图画"},
          {en: "door", phonetic: "/dɔːr/", cn: "门"},
          {en: "computer", phonetic: "/kəmˈpjuːtər/", cn: "计算机"},
          {en: "fan", phonetic: "/fæn/", cn: "风扇"},
          {en: "wall", phonetic: "/wɔːl/", cn: "墙壁"},
          {en: "floor", phonetic: "/flɔːr/", cn: "地板"}
        ]
      }
    ]
  },
  // 四年级下册
  grade4b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 My school",
        words: [
          {en: "first", phonetic: "/fɜːst/", cn: "第一"},
          {en: "second", phonetic: "/ˈsekənd/", cn: "第二"},
          {en: "third", phonetic: "/θɜːd/", cn: "第三"},
          {en: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆"},
          {en: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场"},
          {en: "art", phonetic: "/ɑːt/", cn: "美术"},
          {en: "music", phonetic: "/ˈmjuːzɪk/", cn: "音乐"},
          {en: "science", phonetic: "/ˈsaɪəns/", cn: "科学"}
        ]
      }
    ]
  },
  // 五年级上册
  grade5: {
    units: [
      {
        unit: 1,
        title: "Unit 1 What's he like?",
        words: [
          {en: "old", phonetic: "/əʊld/", cn: "老的"},
          {en: "young", phonetic: "/jʌŋ/", cn: "年轻的"},
          {en: "funny", phonetic: "/ˈfʌni/", cn: "滑稽的"},
          {en: "kind", phonetic: "/kaɪnd/", cn: "慈祥的"},
          {en: "strict", phonetic: "/strɪkt/", cn: "严格的"},
          {en: "polite", phonetic: "/pəˈlaɪt/", cn: "有礼貌的"},
          {en: "helpful", phonetic: "/ˈhelpfl/", cn: "有用的"},
          {en: "clever", phonetic: "/ˈklevər/", cn: "聪明的"},
          {en: "shy", phonetic: "/ʃaɪ/", cn: "羞怯的"}
        ]
      }
    ]
  },
  // 五年级下册
  grade5b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 My day",
        words: [
          {en: "eat breakfast", phonetic: "/iːt ˈbrekfəst/", cn: "吃早饭"},
          {en: "have class", phonetic: "/hæv klɑːs/", cn: "上课"},
          {en: "play sports", phonetic: "/pleɪ spɔːts/", cn: "做运动"},
          {en: "eat dinner", phonetic: "/iːt ˈdɪnər/", cn: "吃晚饭"},
          {en: "clean", phonetic: "/kliːn/", cn: "打扫"},
          {en: "go shopping", phonetic: "/ɡəʊ ˈʃɒpɪŋ/", cn: "购物"},
          {en: "take", phonetic: "/teɪk/", cn: "学习"},
          {en: "dancing", phonetic: "/ˈdɑːnsɪŋ/", cn: "跳舞"}
        ]
      }
    ]
  },
  // 六年级上册
  grade6: {
    units: [
      {
        unit: 1,
        title: "Unit 1 How can I get there?",
        words: [
          {en: "science", phonetic: "/ˈsaɪəns/", cn: "科学"},
          {en: "museum", phonetic: "/mjuˈziːəm/", cn: "博物馆"},
          {en: "post office", phonetic: "/pəʊst ˈɒfɪs/", cn: "邮局"},
          {en: "bookstore", phonetic: "/ˈbʊkstɔːr/", cn: "书店"},
          {en: "cinema", phonetic: "/ˈsɪnəmə/", cn: "电影院"},
          {en: "hospital", phonetic: "/ˈhɒspɪtl/", cn: "医院"},
          {en: "crossing", phonetic: "/ˈkrɒsɪŋ/", cn: "十字路口"},
          {en: "turn", phonetic: "/tɜːn/", cn: "转弯"},
          {en: "left", phonetic: "/left/", cn: "左"},
          {en: "right", phonetic: "/raɪt/", cn: "右"}
        ]
      }
    ]
  },
  // 六年级下册
  grade6b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 How tall are you?",
        words: [
          {en: "taller", phonetic: "/ˈtɔːlər/", cn: "更高的"},
          {en: "shorter", phonetic: "/ˈʃɔːrtər/", cn: "更矮的"},
          {en: "stronger", phonetic: "/ˈstrɒŋɡər/", cn: "更强壮的"},
          {en: "older", phonetic: "/ˈəʊldər/", cn: "更年长的"},
          {en: "younger", phonetic: "/ˈjʌŋɡər/", cn: "更年轻的"},
          {en: "metre", phonetic: "/ˈmiːtər/", cn: "米"},
          {en: "than", phonetic: "/ðæn/", cn: "比"},
          {en: "dinosaur", phonetic: "/ˈdaɪnəsɔːr/", cn: "恐龙"}
        ]
      }
    ]
  }
};

// 模块导出（兼容Node.js和浏览器）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { wordsData };
}

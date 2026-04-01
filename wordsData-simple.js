// 小学英语单词数据（简化版 - 3-6年级上册）
const wordsData = {
  // 三年级上册
  grade3: {
    units: [
      {
        unit: 1,
        title: "Unit 1 Hello!",
        words: [
          {en: "ruler", phonetic: "/ˈruːlər/", cn: "尺子", example: "I have a ruler."},
          {en: "pencil", phonetic: "/ˈpensl/", cn: "铅笔", example: "This is my pencil."},
          {en: "eraser", phonetic: "/ɪˈreɪsər/", cn: "橡皮", example: "The eraser is white."},
          {en: "crayon", phonetic: "/ˈkreɪən/", cn: "蜡笔", example: "I like the crayon."},
          {en: "bag", phonetic: "/bæɡ/", cn: "书包", example: "My bag is blue."},
          {en: "pen", phonetic: "/pen/", cn: "钢笔", example: "This is a pen."},
          {en: "pencil box", phonetic: "/ˈpensl bɒks/", cn: "铅笔盒", example: "Open your pencil box."},
          {en: "book", phonetic: "/bʊk/", cn: "书", example: "I have a book."},
          {en: "no", phonetic: "/nəʊ/", cn: "不", example: "No, thank you."},
          {en: "your", phonetic: "/jɔːr/", cn: "你的", example: "What's your name?"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Colours!",
        words: [
          {en: "red", phonetic: "/red/", cn: "红色", example: "I like red."},
          {en: "green", phonetic: "/ɡriːn/", cn: "绿色", example: "The grass is green."},
          {en: "yellow", phonetic: "/ˈjeləʊ/", cn: "黄色", example: "The banana is yellow."},
          {en: "blue", phonetic: "/bluː/", cn: "蓝色", example: "The sky is blue."},
          {en: "black", phonetic: "/blæk/", cn: "黑色", example: "The cat is black."},
          {en: "brown", phonetic: "/braʊn/", cn: "棕色", example: "The bear is brown."},
          {en: "white", phonetic: "/waɪt/", cn: "白色", example: "The snow is white."},
          {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙色", example: "I like orange."},
          {en: "OK", phonetic: "/əʊˈkeɪ/", cn: "好", example: "OK, let's go."},
          {en: "mum", phonetic: "/mʌm/", cn: "妈妈", example: "I love my mum."}
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
          {en: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", example: "This is my classroom."},
          {en: "window", phonetic: "/ˈwɪndəʊ/", cn: "窗户", example: "Open the window."},
          {en: "blackboard", phonetic: "/ˈblækbɔːrd/", cn: "黑板", example: "Look at the blackboard."},
          {en: "light", phonetic: "/laɪt/", cn: "电灯", example: "Turn on the light."},
          {en: "picture", phonetic: "/ˈpɪktʃər/", cn: "图画", example: "The picture is nice."},
          {en: "door", phonetic: "/dɔːr/", cn: "门", example: "Open the door."},
          {en: "computer", phonetic: "/kəmˈpjuːtər/", cn: "计算机", example: "I have a computer."},
          {en: "fan", phonetic: "/fæn/", cn: "风扇", example: "Turn on the fan."},
          {en: "wall", phonetic: "/wɔːl/", cn: "墙壁", example: "The wall is white."},
          {en: "floor", phonetic: "/flɔːr/", cn: "地板", example: "The floor is clean."}
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
          {en: "old", phonetic: "/əʊld/", cn: "老的", example: "My grandpa is old."},
          {en: "young", phonetic: "/jʌŋ/", cn: "年轻的", example: "She is young."},
          {en: "funny", phonetic: "/ˈfʌni/", cn: "滑稽的", example: "He is funny."},
          {en: "kind", phonetic: "/kaɪnd/", cn: "慈祥的", example: "She is kind."},
          {en: "strict", phonetic: "/strɪkt/", cn: "严格的", example: "He is strict."},
          {en: "polite", phonetic: "/pəˈlaɪt/", cn: "有礼貌的", example: "Be polite."},
          {en: "helpful", phonetic: "/ˈhelpfl/", cn: "有用的", example: "He is helpful."},
          {en: "clever", phonetic: "/ˈklevər/", cn: "聪明的", example: "She is clever."},
          {en: "hard-working", phonetic: "/ˌhɑːd ˈwɜːkɪŋ/", cn: "勤奋的", example: "He is hard-working."},
          {en: "shy", phonetic: "/ʃaɪ/", cn: "羞怯的", example: "She is shy."}
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
          {en: "science", phonetic: "/ˈsaɪəns/", cn: "科学", example: "I like science."},
          {en: "museum", phonetic: "/mjuˈziːəm/", cn: "博物馆", example: "Visit the museum."},
          {en: "post office", phonetic: "/pəʊst ˈɒfɪs/", cn: "邮局", example: "Go to the post office."},
          {en: "bookstore", phonetic: "/ˈbʊkstɔːr/", cn: "书店", example: "I go to the bookstore."},
          {en: "cinema", phonetic: "/ˈsɪnəmə/", cn: "电影院", example: "Let's go to the cinema."},
          {en: "hospital", phonetic: "/ˈhɒspɪtl/", cn: "医院", example: "Go to the hospital."},
          {en: "crossing", phonetic: "/ˈkrɒsɪŋ/", cn: "十字路口", example: "Turn at the crossing."},
          {en: "turn", phonetic: "/tɜːn/", cn: "转弯", example: "Turn left."},
          {en: "left", phonetic: "/left/", cn: "左", example: "Turn left."},
          {en: "right", phonetic: "/raɪt/", cn: "右", example: "Turn right."}
        ]
      }
    ]
  }
};

// 模块导出（兼容Node.js和浏览器）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { wordsData };
}

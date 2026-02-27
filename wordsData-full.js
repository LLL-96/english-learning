// 小学英语单词数据（3-6年级，上下册）
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
          {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙色", example: "I like orange."}
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
          {en: "UK", phonetic: "/ˌjuː ˈkeɪ/", cn: "英国", example: "I'm from the UK."},
          {en: "Canada", phonetic: "/ˈkænədə/", cn: "加拿大", example: "I'm from Canada."},
          {en: "USA", phonetic: "/ˌjuː es ˈeɪ/", cn: "美国", example: "I'm from the USA."},
          {en: "China", phonetic: "/ˈtʃaɪnə/", cn: "中国", example: "I'm from China."},
          {en: "she", phonetic: "/ʃiː/", cn: "她", example: "She is a student."},
          {en: "student", phonetic: "/ˈstjuːdənt/", cn: "学生", example: "I'm a student."},
          {en: "pupil", phonetic: "/ˈpjuːpl/", cn: "小学生", example: "I'm a pupil."},
          {en: "he", phonetic: "/hiː/", cn: "他", example: "He is my friend."},
          {en: "teacher", phonetic: "/ˈtiːtʃər/", cn: "教师", example: "She is a teacher."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My family",
        words: [
          {en: "father", phonetic: "/ˈfɑːðər/", cn: "父亲", example: "This is my father."},
          {en: "dad", phonetic: "/dæd/", cn: "爸爸", example: "Hi, Dad!"},
          {en: "mother", phonetic: "/ˈmʌðər/", cn: "母亲", example: "This is my mother."},
          {en: "mom", phonetic: "/mɒm/", cn: "妈妈", example: "I love my mom."},
          {en: "man", phonetic: "/mæn/", cn: "男人", example: "Who's that man?"},
          {en: "woman", phonetic: "/ˈwʊmən/", cn: "女人", example: "Who's that woman?"},
          {en: "sister", phonetic: "/ˈsɪstər/", cn: "姐妹", example: "This is my sister."},
          {en: "brother", phonetic: "/ˈbrʌðər/", cn: "兄弟", example: "I have a brother."},
          {en: "family", phonetic: "/ˈfæməli/", cn: "家庭", example: "I love my family."}
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
  // 四年级下册
  grade4b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 My school",
        words: [
          {en: "first", phonetic: "/fɜːst/", cn: "第一", example: "The first day."},
          {en: "second", phonetic: "/ˈsekənd/", cn: "第二", example: "The second floor."},
          {en: "third", phonetic: "/θɜːd/", cn: "第三", example: "The third grade."},
          {en: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆", example: "Go to the library."},
          {en: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", example: "Play on the playground."},
          {en: "art", phonetic: "/ɑːt/", cn: "美术", example: "I like art."},
          {en: "music", phonetic: "/ˈmjuːzɪk/", cn: "音乐", example: "I like music."},
          {en: "science", phonetic: "/ˈsaɪəns/", cn: "科学", example: "I like science."}
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
          {en: "shy", phonetic: "/ʃaɪ/", cn: "羞怯的", example: "She is shy."}
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
          {en: "eat breakfast", phonetic: "/iːt ˈbrekfəst/", cn: "吃早饭", example: "I eat breakfast at 7."},
          {en: "have class", phonetic: "/hæv klɑːs/", cn: "上课", example: "I have English class."},
          {en: "play sports", phonetic: "/pleɪ spɔːts/", cn: "做运动", example: "I play sports."},
          {en: "eat dinner", phonetic: "/iːt ˈdɪnər/", cn: "吃晚饭", example: "I eat dinner at 6."},
          {en: "clean", phonetic: "/kliːn/", cn: "打扫", example: "Clean the room."},
          {en: "go shopping", phonetic: "/ɡəʊ ˈʃɒpɪŋ/", cn: "购物", example: "Go shopping."},
          {en: "take", phonetic: "/teɪk/", cn: "学习", example: "Take a dancing class."},
          {en: "dancing", phonetic: "/ˈdɑːnsɪŋ/", cn: "跳舞", example: "I like dancing."}
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
          {en: "science", phonetic: "/ˈsaɪəns/", cn: "科学", example: "Where is the science museum?"},
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
  },
  // 六年级下册
  grade6b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 How tall are you?",
        words: [
          {en: "taller", phonetic: "/ˈtɔːlər/", cn: "更高的", example: "I'm taller than you."},
          {en: "shorter", phonetic: "/ˈʃɔːrtər/", cn: "更矮的", example: "I'm shorter than him."},
          {en: "stronger", phonetic: "/ˈstrɒŋɡər/", cn: "更强壮的", example: "He's stronger."},
          {en: "older", phonetic: "/ˈəʊldər/", cn: "更年长的", example: "I'm older."},
          {en: "younger", phonetic: "/ˈjʌŋɡər/", cn: "更年轻的", example: "I'm younger."},
          {en: "metre", phonetic: "/ˈmiːtər/", cn: "米", example: "I'm 1.6 metres."},
          {en: "than", phonetic: "/ðæn/", cn: "比", example: "Taller than me."},
          {en: "dinosaur", phonetic: "/ˈdaɪnəsɔːr/", cn: "恐龙", example: "The dinosaur is big."}
        ]
      }
    ]
  }
};

// 模块导出（兼容Node.js和浏览器）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { wordsData };
}

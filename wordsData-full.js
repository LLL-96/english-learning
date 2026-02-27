// 小学英语单词数据（3-6年级，上下册）- 完整版
const wordsData = {
  // ==================== 三年级上册 ====================
  grade3: {
    units: [
      {
        unit: 1,
        title: "Unit 1 Hello!",
        words: [
          {en: "ruler", phonetic: "/ˈruːlər/", cn: "尺子", example: "I have a ruler.", exampleCn: "我有一把尺子。"},
          {en: "pencil", phonetic: "/ˈpensl/", cn: "铅笔", example: "This is my pencil.", exampleCn: "这是我的铅笔。"},
          {en: "eraser", phonetic: "/ɪˈreɪsər/", cn: "橡皮", example: "The eraser is white.", exampleCn: "这块橡皮是白色的。"},
          {en: "crayon", phonetic: "/ˈkreɪən/", cn: "蜡笔", example: "I like the crayon.", exampleCn: "我喜欢蜡笔。"},
          {en: "bag", phonetic: "/bæɡ/", cn: "书包", example: "My bag is blue.", exampleCn: "我的书包是蓝色的。"},
          {en: "pen", phonetic: "/pen/", cn: "钢笔", example: "This is a pen.", exampleCn: "这是一支钢笔。"},
          {en: "pencil box", phonetic: "/ˈpensl bɒks/", cn: "铅笔盒", example: "Open your pencil box.", exampleCn: "打开你的铅笔盒。"},
          {en: "book", phonetic: "/bʊk/", cn: "书", example: "I have a book.", exampleCn: "我有一本书。"},
          {en: "no", phonetic: "/nəʊ/", cn: "不", example: "No, thank you.", exampleCn: "不，谢谢你。"},
          {en: "your", phonetic: "/jɔːr/", cn: "你的", example: "What's your name?", exampleCn: "你的名字是什么？"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Colours!",
        words: [
          {en: "red", phonetic: "/red/", cn: "红色", example: "I like red.", exampleCn: "我喜欢红色。"},
          {en: "green", phonetic: "/ɡriːn/", cn: "绿色", example: "The grass is green.", exampleCn: "草是绿色的。"},
          {en: "yellow", phonetic: "/ˈjeləʊ/", cn: "黄色", example: "The banana is yellow.", exampleCn: "香蕉是黄色的。"},
          {en: "blue", phonetic: "/bluː/", cn: "蓝色", example: "The sky is blue.", exampleCn: "天空是蓝色的。"},
          {en: "black", phonetic: "/blæk/", cn: "黑色", example: "The cat is black.", exampleCn: "这只猫是黑色的。"},
          {en: "brown", phonetic: "/braʊn/", cn: "棕色", example: "The bear is brown.", exampleCn: "这只熊是棕色的。"},
          {en: "white", phonetic: "/waɪt/", cn: "白色", example: "The snow is white.", exampleCn: "雪是白色的。"},
          {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙色", example: "I like orange.", exampleCn: "我喜欢橙色。"},
          {en: "OK", phonetic: "/ˌəʊˈkeɪ/", cn: "好；行", example: "OK, let's go.", exampleCn: "好的，让我们去。"},
          {en: "mum", phonetic: "/mʌm/", cn: "妈妈", example: "I love my mum.", exampleCn: "我爱我的妈妈。"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Look at me!",
        words: [
          {en: "face", phonetic: "/feɪs/", cn: "脸", example: "This is my face.", exampleCn: "这是我的脸。"},
          {en: "ear", phonetic: "/ɪər/", cn: "耳朵", example: "Touch your ear.", exampleCn: "摸摸你的耳朵。"},
          {en: "eye", phonetic: "/aɪ/", cn: "眼睛", example: "Look at my eye.", exampleCn: "看我的眼睛。"},
          {en: "nose", phonetic: "/nəʊz/", cn: "鼻子", example: "This is my nose.", exampleCn: "这是我的鼻子。"},
          {en: "mouth", phonetic: "/maʊθ/", cn: "嘴", example: "Open your mouth.", exampleCn: "张开你的嘴。"},
          {en: "arm", phonetic: "/ɑːm/", cn: "胳膊", example: "Wave your arm.", exampleCn: "挥挥你的胳膊。"},
          {en: "hand", phonetic: "/hænd/", cn: "手", example: "Clap your hands.", exampleCn: "拍拍你的手。"},
          {en: "head", phonetic: "/hed/", cn: "头", example: "Touch your head.", exampleCn: "摸摸你的头。"},
          {en: "body", phonetic: "/ˈbɒdi/", cn: "身体", example: "Shake your body.", exampleCn: "摇动你的身体。"},
          {en: "leg", phonetic: "/leɡ/", cn: "腿", example: "This is my leg.", exampleCn: "这是我的腿。"},
          {en: "foot", phonetic: "/fʊt/", cn: "脚", example: "Stamp your foot.", exampleCn: "跺你的脚。"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 We love animals",
        words: [
          {en: "duck", phonetic: "/dʌk/", cn: "鸭子", example: "It's a duck.", exampleCn: "它是一只鸭子。"},
          {en: "pig", phonetic: "/pɪɡ/", cn: "猪", example: "The pig is fat.", exampleCn: "这只猪是胖的。"},
          {en: "cat", phonetic: "/kæt/", cn: "猫", example: "I have a cat.", exampleCn: "我有一只猫。"},
          {en: "bear", phonetic: "/beər/", cn: "熊", example: "The bear is big.", exampleCn: "这只熊是大的。"},
          {en: "dog", phonetic: "/dɒɡ/", cn: "狗", example: "The dog is cute.", exampleCn: "这只狗是可爱的。"},
          {en: "elephant", phonetic: "/ˈelɪfənt/", cn: "大象", example: "The elephant is big.", exampleCn: "这只大象是大的。"},
          {en: "monkey", phonetic: "/ˈmʌŋki/", cn: "猴子", example: "The monkey is funny.", exampleCn: "这只猴子是有趣的。"},
          {en: "bird", phonetic: "/bɜːd/", cn: "鸟", example: "The bird can fly.", exampleCn: "这只鸟会飞。"},
          {en: "tiger", phonetic: "/ˈtaɪɡər/", cn: "老虎", example: "The tiger is strong.", exampleCn: "这只老虎是强壮的。"},
          {en: "panda", phonetic: "/ˈpændə/", cn: "熊猫", example: "I like pandas.", exampleCn: "我喜欢熊猫。"},
          {en: "zoo", phonetic: "/zuː/", cn: "动物园", example: "Let's go to the zoo.", exampleCn: "我们去动物园吧。"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Let's eat!",
        words: [
          {en: "bread", phonetic: "/bred/", cn: "面包", example: "Have some bread.", exampleCn: "吃些面包。"},
          {en: "juice", phonetic: "/dʒuːs/", cn: "果汁", example: "Drink some juice.", exampleCn: "喝些果汁。"},
          {en: "egg", phonetic: "/eɡ/", cn: "蛋", example: "Eat an egg.", exampleCn: "吃一个鸡蛋。"},
          {en: "milk", phonetic: "/mɪlk/", cn: "牛奶", example: "Drink some milk.", exampleCn: "喝些牛奶。"},
          {en: "water", phonetic: "/ˈwɔːtər/", cn: "水", example: "Drink some water.", exampleCn: "喝些水。"},
          {en: "cake", phonetic: "/keɪk/", cn: "蛋糕", example: "Eat some cake.", exampleCn: "吃些蛋糕。"},
          {en: "fish", phonetic: "/fɪʃ/", cn: "鱼", example: "Eat some fish.", exampleCn: "吃些鱼。"},
          {en: "rice", phonetic: "/raɪs/", cn: "米饭", example: "Eat some rice.", exampleCn: "吃些米饭。"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Happy birthday!",
        words: [
          {en: "one", phonetic: "/wʌn/", cn: "一", example: "I am one.", exampleCn: "我一。"},
          {en: "two", phonetic: "/tuː/", cn: "二", example: "I have two books.", exampleCn: "二"},
          {en: "three", phonetic: "/θriː/", cn: "三", example: "I am three.", exampleCn: "我三。"},
          {en: "four", phonetic: "/fɔːr/", cn: "四", example: "I have four pens.", exampleCn: "四"},
          {en: "five", phonetic: "/faɪv/", cn: "五", example: "I am five.", exampleCn: "我五。"},
          {en: "six", phonetic: "/sɪks/", cn: "六", example: "I have six toys.", exampleCn: "六"},
          {en: "seven", phonetic: "/ˈsevn/", cn: "七", example: "I am seven.", exampleCn: "我七。"},
          {en: "eight", phonetic: "/eɪt/", cn: "八", example: "I have eight books.", exampleCn: "八"},
          {en: "nine", phonetic: "/naɪn/", cn: "九", example: "I am nine.", exampleCn: "我九。"},
          {en: "ten", phonetic: "/ten/", cn: "十", example: "I have ten fingers.", exampleCn: "十"},
          {en: "brother", phonetic: "/ˈbrʌðər/", cn: "兄；弟", example: "This is my brother.", exampleCn: "这是我的兄弟。"},
          {en: "plate", phonetic: "/pleɪt/", cn: "盘子", example: "Pass me the plate.", exampleCn: "把plate递给我。"}
        ]
      }
    ]
  },
  // ==================== 三年级下册 ====================
  grade3b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 Welcome back to school!",
        words: [
          {en: "UK", phonetic: "/ˌjuː ˈkeɪ/", cn: "英国", example: "I'm from the UK.", exampleCn: "我来自the UK。"},
          {en: "Canada", phonetic: "/ˈkænədə/", cn: "加拿大", example: "I'm from Canada.", exampleCn: "我来自Canada。"},
          {en: "USA", phonetic: "/ˌjuː es ˈeɪ/", cn: "美国", example: "I'm from the USA.", exampleCn: "我来自the USA。"},
          {en: "China", phonetic: "/ˈtʃaɪnə/", cn: "中国", example: "I'm from China.", exampleCn: "我来自China。"},
          {en: "she", phonetic: "/ʃiː/", cn: "她", example: "She is a student.", exampleCn: "她是一名学生。"},
          {en: "student", phonetic: "/ˈstjuːdənt/", cn: "学生", example: "I'm a student.", exampleCn: "学生"},
          {en: "pupil", phonetic: "/ˈpjuːpl/", cn: "小学生", example: "I'm a pupil.", exampleCn: "小学生"},
          {en: "he", phonetic: "/hiː/", cn: "他", example: "He is my friend.", exampleCn: "他"},
          {en: "teacher", phonetic: "/ˈtiːtʃər/", cn: "教师", example: "She is a teacher.", exampleCn: "她是一名老师。"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My family",
        words: [
          {en: "father", phonetic: "/ˈfɑːðər/", cn: "父亲", example: "This is my father.", exampleCn: "这是我的爸爸。"},
          {en: "dad", phonetic: "/dæd/", cn: "爸爸", example: "Hi, Dad!", exampleCn: "爸爸"},
          {en: "mother", phonetic: "/ˈmʌðər/", cn: "母亲", example: "This is my mother.", exampleCn: "这是我的妈妈。"},
          {en: "mom", phonetic: "/mɒm/", cn: "妈妈", example: "I love my mom.", exampleCn: "我爱我的mom。"},
          {en: "man", phonetic: "/mæn/", cn: "男人", example: "Who's that man?", exampleCn: "男人"},
          {en: "woman", phonetic: "/ˈwʊmən/", cn: "女人", example: "Who's that woman?", exampleCn: "女人"},
          {en: "sister", phonetic: "/ˈsɪstər/", cn: "姐妹", example: "This is my sister.", exampleCn: "这是我的姐妹。"},
          {en: "brother", phonetic: "/ˈbrʌðər/", cn: "兄弟", example: "I have a brother.", exampleCn: "我有一个兄弟。"},
          {en: "grandmother", phonetic: "/ˈɡrænmʌðər/", cn: "奶奶", example: "This is my grandmother.", exampleCn: "这是我的奶奶。"},
          {en: "grandma", phonetic: "/ˈɡrænmɑː/", cn: "奶奶", example: "I love my grandma.", exampleCn: "我爱我的奶奶。"},
          {en: "grandfather", phonetic: "/ˈɡrænfɑːðər/", cn: "爷爷", example: "This is my grandfather.", exampleCn: "这是我的爷爷。"},
          {en: "grandpa", phonetic: "/ˈɡrænpɑː/", cn: "爷爷", example: "I love my grandpa.", exampleCn: "我爱我的爷爷。"},
          {en: "family", phonetic: "/ˈfæməli/", cn: "家庭", example: "I love my family.", exampleCn: "我爱我的家庭。"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 At the zoo",
        words: [
          {en: "thin", phonetic: "/θɪn/", cn: "瘦的", example: "The monkey is thin.", exampleCn: "这只猴子是瘦的。"},
          {en: "fat", phonetic: "/fæt/", cn: "胖的", example: "The pig is fat.", exampleCn: "这只猪是胖的。"},
          {en: "tall", phonetic: "/tɔːl/", cn: "高的", example: "The giraffe is tall.", exampleCn: "giraffe是高的。"},
          {en: "short", phonetic: "/ʃɔːt/", cn: "矮的", example: "The deer is short.", exampleCn: "deer是矮的。"},
          {en: "long", phonetic: "/lɒŋ/", cn: "长的", example: "The snake is long.", exampleCn: "snake是长的。"},
          {en: "small", phonetic: "/smɔːl/", cn: "小的", example: "The bird is small.", exampleCn: "这只鸟是小的。"},
          {en: "big", phonetic: "/bɪɡ/", cn: "大的", example: "The elephant is big.", exampleCn: "这只大象是大的。"},
          {en: "giraffe", phonetic: "/dʒəˈrɑːf/", cn: "长颈鹿", example: "The giraffe is tall.", exampleCn: "giraffe是高的。"},
          {en: "so", phonetic: "/səʊ/", cn: "这么", example: "It's so tall.", exampleCn: "这么"},
          {en: "children", phonetic: "/ˈtʃɪldrən/", cn: "孩子们", example: "Come here, children.", exampleCn: "过来here, children。"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 Where is my car?",
        words: [
          {en: "on", phonetic: "/ɒn/", cn: "在...上", example: "The book is on the desk.", exampleCn: "书是on the desk。"},
          {en: "in", phonetic: "/ɪn/", cn: "在...里", example: "The pen is in the bag.", exampleCn: "钢笔是in the bag。"},
          {en: "under", phonetic: "/ˈʌndər/", cn: "在...下", example: "The ball is under the chair.", exampleCn: "ball是under the chair。"},
          {en: "chair", phonetic: "/tʃeər/", cn: "椅子", example: "Sit on the chair.", exampleCn: "坐在椅子上。"},
          {en: "desk", phonetic: "/desk/", cn: "书桌", example: "The book is on the desk.", exampleCn: "书是on the desk。"},
          {en: "cap", phonetic: "/kæp/", cn: "帽子", example: "Put on your cap.", exampleCn: "戴上你的帽子。"},
          {en: "ball", phonetic: "/bɔːl/", cn: "球", example: "Bounce the ball.", exampleCn: "拍ball。"},
          {en: "car", phonetic: "/kɑːr/", cn: "小汽车", example: "Drive a car.", exampleCn: "开car。"},
          {en: "boat", phonetic: "/bəʊt/", cn: "小船", example: "Row a boat.", exampleCn: "划boat。"},
          {en: "map", phonetic: "/mæp/", cn: "地图", example: "Read a map.", exampleCn: "读map。"},
          {en: "toy", phonetic: "/tɔɪ/", cn: "玩具", example: "Where is my toy?", exampleCn: "我的toy在哪里？"},
          {en: "box", phonetic: "/bɒks/", cn: "盒子", example: "It's in the box.", exampleCn: "盒子"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Do you like pears?",
        words: [
          {en: "pear", phonetic: "/peər/", cn: "梨", example: "Do you like pears?", exampleCn: "你喜欢pears吗？"},
          {en: "apple", phonetic: "/ˈæpl/", cn: "苹果", example: "I like apples.", exampleCn: "我喜欢apples。"},
          {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙子", example: "Have an orange.", exampleCn: "橙子"},
          {en: "banana", phonetic: "/bəˈnɑːnə/", cn: "香蕉", example: "Eat a banana.", exampleCn: "香蕉"},
          {en: "watermelon", phonetic: "/ˈwɔːtəmelən/", cn: "西瓜", example: "I like watermelons.", exampleCn: "我喜欢watermelons。"},
          {en: "strawberry", phonetic: "/ˈstrɔːbəri/", cn: "草莓", example: "Have a strawberry.", exampleCn: "草莓"},
          {en: "grape", phonetic: "/ɡreɪp/", cn: "葡萄", example: "I like grapes.", exampleCn: "我喜欢grapes。"},
          {en: "buy", phonetic: "/baɪ/", cn: "买", example: "Let's buy some fruit.", exampleCn: "买"},
          {en: "fruit", phonetic: "/fruːt/", cn: "水果", example: "I like fruit.", exampleCn: "我喜欢fruit。"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 How many?",
        words: [
          {en: "eleven", phonetic: "/ɪˈlevn/", cn: "十一", example: "I see eleven.", exampleCn: "我看见十一。"},
          {en: "twelve", phonetic: "/twelv/", cn: "十二", example: "I have twelve.", exampleCn: "十二"},
          {en: "thirteen", phonetic: "/ˌθɜːˈtiːn/", cn: "十三", example: "I see thirteen.", exampleCn: "我看见十三。"},
          {en: "fourteen", phonetic: "/ˌfɔːˈtiːn/", cn: "十四", example: "I have fourteen.", exampleCn: "十四"},
          {en: "fifteen", phonetic: "/ˌfɪfˈtiːn/", cn: "十五", example: "I see fifteen.", exampleCn: "我看见十五。"},
          {en: "sixteen", phonetic: "/ˌsɪksˈtiːn/", cn: "十六", example: "I have sixteen.", exampleCn: "十六"},
          {en: "seventeen", phonetic: "/ˌsevnˈtiːn/", cn: "十七", example: "I see seventeen.", exampleCn: "我看见十七。"},
          {en: "eighteen", phonetic: "/ˌeɪˈtiːn/", cn: "十八", example: "I have eighteen.", exampleCn: "十八"},
          {en: "nineteen", phonetic: "/ˌnaɪnˈtiːn/", cn: "十九", example: "I see nineteen.", exampleCn: "我看见十九。"},
          {en: "twenty", phonetic: "/ˈtwenti/", cn: "二十", example: "I have twenty.", exampleCn: "二十"},
          {en: "kite", phonetic: "/kaɪt/", cn: "风筝", example: "I see twelve kites.", exampleCn: "我看见twelve kites。"},
          {en: "beautiful", phonetic: "/ˈbjuːtɪfl/", cn: "美丽的", example: "How beautiful!", exampleCn: "美丽的"}
        ]
      }
    ]
  },
  // ==================== 四年级上册 ====================
  grade4: {
    units: [
      {
        unit: 1,
        title: "Unit 1 My classroom",
        words: [
          {en: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", example: "This is my classroom.", exampleCn: "这是我的教室。"},
          {en: "window", phonetic: "/ˈwɪndəʊ/", cn: "窗户", example: "Open the window.", exampleCn: "打开窗户。"},
          {en: "blackboard", phonetic: "/ˈblækbɔːrd/", cn: "黑板", example: "Look at the blackboard.", exampleCn: "看这个blackboard。"},
          {en: "light", phonetic: "/laɪt/", cn: "电灯", example: "Turn on the light.", exampleCn: "打开灯。"},
          {en: "picture", phonetic: "/ˈpɪktʃər/", cn: "图画", example: "The picture is nice.", exampleCn: "图画是好的。"},
          {en: "door", phonetic: "/dɔːr/", cn: "门", example: "Open the door.", exampleCn: "打开门。"},
          {en: "computer", phonetic: "/kəmˈpjuːtər/", cn: "计算机", example: "I have a computer.", exampleCn: "我有一个电脑。"},
          {en: "fan", phonetic: "/fæn/", cn: "风扇", example: "Turn on the fan.", exampleCn: "打开风扇。"},
          {en: "wall", phonetic: "/wɔːl/", cn: "墙壁", example: "The wall is white.", exampleCn: "墙是白色。"},
          {en: "floor", phonetic: "/flɔːr/", cn: "地板", example: "The floor is clean.", exampleCn: "地板是打扫。"},
          {en: "really", phonetic: "/ˈrɪəli/", cn: "真的", example: "Really? Let me see.", exampleCn: "真的"},
          {en: "near", phonetic: "/nɪər/", cn: "距离近", example: "It's near the window.", exampleCn: "距离近"},
          {en: "TV", phonetic: "/ˌtiː ˈviː/", cn: "电视", example: "Turn on the TV.", exampleCn: "打开电视。"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My schoolbag",
        words: [
          {en: "schoolbag", phonetic: "/ˈskuːlbæɡ/", cn: "书包", example: "My schoolbag is heavy.", exampleCn: "我的schoolbag是heavy。"},
          {en: "maths book", phonetic: "/mæθs bʊk/", cn: "数学书", example: "I have a maths book.", exampleCn: "我有一个maths book。"},
          {en: "English book", phonetic: "/ˈɪŋɡlɪʃ bʊk/", cn: "英语书", example: "Put your English book in your bag.", exampleCn: "英语书"},
          {en: "Chinese book", phonetic: "/ˌtʃaɪˈniːz bʊk/", cn: "语文书", example: "I have a Chinese book.", exampleCn: "我有一个Chinese book。"},
          {en: "storybook", phonetic: "/ˈstɔːribʊk/", cn: "故事书", example: "I like storybooks.", exampleCn: "我喜欢storybooks。"},
          {en: "candy", phonetic: "/ˈkændi/", cn: "糖果", example: "I have some candies.", exampleCn: "糖果"},
          {en: "notebook", phonetic: "/ˈnəʊtbʊk/", cn: "笔记本", example: "This is my notebook.", exampleCn: "这是我的notebook。"},
          {en: "toy", phonetic: "/tɔɪ/", cn: "玩具", example: "I have a toy.", exampleCn: "我有一个toy。"},
          {en: "key", phonetic: "/kiː/", cn: "钥匙", example: "Where is my key?", exampleCn: "我的key在哪里？"},
          {en: "wow", phonetic: "/waʊ/", cn: "哇", example: "Wow, it's so big!", exampleCn: "哇"},
          {en: "lost", phonetic: "/lɒst/", cn: "丢失", example: "I lost my key.", exampleCn: "我丢了我的key。"},
          {en: "so much", phonetic: "/səʊ mʌtʃ/", cn: "非常地", example: "Thank you so much.", exampleCn: "非常地"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My friends",
        words: [
          {en: "strong", phonetic: "/strɒŋ/", cn: "强壮的", example: "He is strong.", exampleCn: "强壮的"},
          {en: "friendly", phonetic: "/ˈfrendli/", cn: "友好的", example: "She is friendly.", exampleCn: "友好的"},
          {en: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", example: "He is quiet.", exampleCn: "安静的"},
          {en: "hair", phonetic: "/heər/", cn: "头发", example: "She has long hair.", exampleCn: "她有long hair。"},
          {en: "shoe", phonetic: "/ʃuː/", cn: "鞋", example: "Put on your shoes.", exampleCn: "戴上你的鞋子。"},
          {en: "glasses", phonetic: "/ˈɡlɑːsɪz/", cn: "眼镜", example: "He has glasses.", exampleCn: "他有眼镜。"},
          {en: "his", phonetic: "/hɪz/", cn: "他的", example: "This is his bag.", exampleCn: "他的"},
          {en: "or", phonetic: "/ɔːr/", cn: "或者", example: "Is it blue or green?", exampleCn: "或者"},
          {en: "right", phonetic: "/raɪt/", cn: "正确的", example: "You're right.", exampleCn: "正确的"},
          {en: "hat", phonetic: "/hæt/", cn: "帽子", example: "I have a hat.", exampleCn: "我有一个帽子。"},
          {en: "her", phonetic: "/hɜːr/", cn: "她的", example: "This is her book.", exampleCn: "她的"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 My home",
        words: [
          {en: "bedroom", phonetic: "/ˈbedruːm/", cn: "卧室", example: "This is my bedroom.", exampleCn: "这是我的卧室。"},
          {en: "living room", phonetic: "/ˈlɪvɪŋ ruːm/", cn: "客厅", example: "Watch TV in the living room.", exampleCn: "客厅"},
          {en: "study", phonetic: "/ˈstʌdi/", cn: "书房", example: "Read in the study.", exampleCn: "书房"},
          {en: "kitchen", phonetic: "/ˈkɪtʃɪn/", cn: "厨房", example: "Cook in the kitchen.", exampleCn: "厨房"},
          {en: "bathroom", phonetic: "/ˈbɑːθruːm/", cn: "浴室", example: "Take a shower in the bathroom.", exampleCn: "浴室"},
          {en: "phone", phonetic: "/fəʊn/", cn: "电话", example: "Answer the phone.", exampleCn: "电话"},
          {en: "bed", phonetic: "/bed/", cn: "床", example: "Make the bed.", exampleCn: "床"},
          {en: "sofa", phonetic: "/ˈsəʊfə/", cn: "沙发", example: "Sit on the sofa.", exampleCn: "坐在沙发上。"},
          {en: "fridge", phonetic: "/frɪdʒ/", cn: "冰箱", example: "Open the fridge.", exampleCn: "打开冰箱。"},
          {en: "table", phonetic: "/ˈteɪbl/", cn: "桌子", example: "Put it on the table.", exampleCn: "桌子"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Dinner's ready",
        words: [
          {en: "beef", phonetic: "/biːf/", cn: "牛肉", example: "I'd like some beef.", exampleCn: "我想要一些牛肉。"},
          {en: "chicken", phonetic: "/ˈtʃɪkɪn/", cn: "鸡肉", example: "I like chicken.", exampleCn: "我喜欢鸡肉。"},
          {en: "noodles", phonetic: "/ˈnuːdlz/", cn: "面条", example: "Have some noodles.", exampleCn: "吃些面条。"},
          {en: "soup", phonetic: "/suːp/", cn: "汤", example: "The soup is hot.", exampleCn: "汤是热的。"},
          {en: "vegetable", phonetic: "/ˈvedʒtəbl/", cn: "蔬菜", example: "Eat your vegetables.", exampleCn: "蔬菜"},
          {en: "chopsticks", phonetic: "/ˈtʃɒpstɪks/", cn: "筷子", example: "Use chopsticks.", exampleCn: "筷子"},
          {en: "bowl", phonetic: "/bəʊl/", cn: "碗", example: "Pass me the bowl.", exampleCn: "把碗递给我。"},
          {en: "fork", phonetic: "/fɔːk/", cn: "叉子", example: "Use the fork.", exampleCn: "叉子"},
          {en: "knife", phonetic: "/naɪf/", cn: "刀", example: "Pass me the knife.", exampleCn: "把刀递给我。"},
          {en: "spoon", phonetic: "/spuːn/", cn: "勺子", example: "Use the spoon.", exampleCn: "勺子"},
          {en: "dinner", phonetic: "/ˈdɪnər/", cn: "晚餐", example: "Dinner's ready!", exampleCn: "晚餐"},
          {en: "ready", phonetic: "/ˈredi/", cn: "准备好", example: "Are you ready?", exampleCn: "准备好"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Meet my family",
        words: [
          {en: "family", phonetic: "/ˈfæməli/", cn: "家庭", example: "Meet my family.", exampleCn: "家庭"},
          {en: "parents", phonetic: "/ˈpeərənts/", cn: "父母", example: "These are my parents.", exampleCn: "父母"},
          {en: "uncle", phonetic: "/ˈʌŋkl/", cn: "叔叔", example: "This is my uncle.", exampleCn: "这是我的叔叔。"},
          {en: "aunt", phonetic: "/ɑːnt/", cn: "阿姨", example: "That is my aunt.", exampleCn: "阿姨"},
          {en: "baby", phonetic: "/ˈbeɪbi/", cn: "婴儿", example: "The baby is cute.", exampleCn: "婴儿是可爱的。"},
          {en: "cousin", phonetic: "/ˈkʌzn/", cn: "堂兄弟", example: "He's my cousin.", exampleCn: "堂兄弟"},
          {en: "doctor", phonetic: "/ˈdɒktər/", cn: "医生", example: "My uncle is a doctor.", exampleCn: "我的叔叔是a doctor。"},
          {en: "cook", phonetic: "/kʊk/", cn: "厨师", example: "My aunt is a cook.", exampleCn: "我的阿姨是a cook。"},
          {en: "driver", phonetic: "/ˈdraɪvər/", cn: "司机", example: "He's a driver.", exampleCn: "司机"},
          {en: "farmer", phonetic: "/ˈfɑːmər/", cn: "农民", example: "My grandpa is a farmer.", exampleCn: "我的爷爷是a farmer。"},
          {en: "nurse", phonetic: "/nɜːs/", cn: "护士", example: "She's a nurse.", exampleCn: "护士"}
        ]
      }
    ]
  },
  // ==================== 四年级下册 ====================
  grade4b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 My school",
        words: [
          {en: "first", phonetic: "/fɜːst/", cn: "第一", example: "The first day.", exampleCn: "第一"},
          {en: "second", phonetic: "/ˈsekənd/", cn: "第二", example: "The second floor.", exampleCn: "第二"},
          {en: "third", phonetic: "/θɜːd/", cn: "第三", example: "The third grade.", exampleCn: "第三"},
          {en: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆", example: "Go to the library.", exampleCn: "去the library。"},
          {en: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", example: "Play on the playground.", exampleCn: "在操场上玩。"},
          {en: "art", phonetic: "/ɑːt/", cn: "美术", example: "I like art.", exampleCn: "我喜欢art。"},
          {en: "music", phonetic: "/ˈmjuːzɪk/", cn: "音乐", example: "I like music.", exampleCn: "我喜欢music。"},
          {en: "computer room", phonetic: "/kəmˈpjuːtə ruːm/", cn: "电脑室", example: "Go to the computer room.", exampleCn: "去the computer room。"},
          {en: "homework", phonetic: "/ˈhəʊmwɜːk/", cn: "作业", example: "Do your homework.", exampleCn: "作业"},
          {en: "class", phonetic: "/klɑːs/", cn: "课", example: "I have a class.", exampleCn: "我有一个class。"},
          {en: "forty", phonetic: "/ˈfɔːti/", cn: "四十", example: "There are forty students.", exampleCn: "四十"},
          {en: "way", phonetic: "/weɪ/", cn: "方向", example: "This way, please.", exampleCn: "方向"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 What time is it?",
        words: [
          {en: "breakfast", phonetic: "/ˈbrekfəst/", cn: "早餐", example: "Have breakfast.", exampleCn: "早餐"},
          {en: "lunch", phonetic: "/lʌntʃ/", cn: "午餐", example: "Have lunch.", exampleCn: "午餐"},
          {en: "dinner", phonetic: "/ˈdɪnər/", cn: "晚餐", example: "Have dinner.", exampleCn: "晚餐"},
          {en: "English class", phonetic: "/ˈɪŋɡlɪʃ klɑːs/", cn: "英语课", example: "It's time for English class.", exampleCn: "英语课"},
          {en: "music class", phonetic: "/ˈmjuːzɪk klɑːs/", cn: "音乐课", example: "It's time for music class.", exampleCn: "音乐课"},
          {en: "PE class", phonetic: "/ˌpiː ˈiː klɑːs/", cn: "体育课", example: "It's time for PE class.", exampleCn: "体育课"},
          {en: "get up", phonetic: "/ɡet ʌp/", cn: "起床", example: "Time to get up.", exampleCn: "起床"},
          {en: "go to school", phonetic: "/ɡəʊ tuː skuːl/", cn: "去上学", example: "Let's go to school.", exampleCn: "去上学"},
          {en: "go home", phonetic: "/ɡəʊ həʊm/", cn: "回家", example: "Time to go home.", exampleCn: "回家"},
          {en: "go to bed", phonetic: "/ɡəʊ tuː bed/", cn: "上床睡觉", example: "Time to go to bed.", exampleCn: "上床睡觉"},
          {en: "over", phonetic: "/ˈəʊvər/", cn: "结束", example: "School is over.", exampleCn: "结束"},
          {en: "now", phonetic: "/naʊ/", cn: "现在", example: "What time is it now?", exampleCn: "现在"},
          {en: "o'clock", phonetic: "/əˈklɒk/", cn: "点钟", example: "It's 3 o'clock.", exampleCn: "点钟"},
          {en: "kid", phonetic: "/kɪd/", cn: "小孩", example: "Hurry up, kids!", exampleCn: "小孩"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Weather",
        words: [
          {en: "cold", phonetic: "/kəʊld/", cn: "冷的", example: "It's cold today.", exampleCn: "冷的"},
          {en: "cool", phonetic: "/kuːl/", cn: "凉爽的", example: "It's cool.", exampleCn: "凉爽的"},
          {en: "warm", phonetic: "/wɔːm/", cn: "温暖的", example: "It's warm.", exampleCn: "温暖的"},
          {en: "hot", phonetic: "/hɒt/", cn: "热的", example: "It's hot today.", exampleCn: "热的"},
          {en: "sunny", phonetic: "/ˈsʌni/", cn: "晴朗的", example: "It's sunny.", exampleCn: "晴朗的"},
          {en: "windy", phonetic: "/ˈwɪndi/", cn: "有风的", example: "It's windy.", exampleCn: "有风的"},
          {en: "cloudy", phonetic: "/ˈklaʊdi/", cn: "多云的", example: "It's cloudy.", exampleCn: "多云的"},
          {en: "snowy", phonetic: "/ˈsnəʊi/", cn: "下雪的", example: "It's snowy.", exampleCn: "下雪的"},
          {en: "rainy", phonetic: "/ˈreɪni/", cn: "下雨的", example: "It's rainy.", exampleCn: "下雨的"},
          {en: "outside", phonetic: "/ˌaʊtˈsaɪd/", cn: "外面", example: "Can I go outside?", exampleCn: "我能go outside吗？"},
          {en: "be careful", phonetic: "/biː ˈkeəfl/", cn: "小心", example: "Be careful!", exampleCn: "小心"},
          {en: "weather", phonetic: "/ˈweðər/", cn: "天气", example: "What's the weather like?", exampleCn: "天气"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 At the farm",
        words: [
          {en: "tomato", phonetic: "/təˈmɑːtəʊ/", cn: "西红柿", example: "I like tomatoes.", exampleCn: "我喜欢tomatoes。"},
          {en: "potato", phonetic: "/pəˈteɪtəʊ/", cn: "土豆", example: "These are potatoes.", exampleCn: "土豆"},
          {en: "green beans", phonetic: "/ɡriːn biːnz/", cn: "豆角", example: "I like green beans.", exampleCn: "我喜欢green beans。"},
          {en: "carrot", phonetic: "/ˈkærət/", cn: "胡萝卜", example: "The rabbit likes carrots.", exampleCn: "胡萝卜"},
          {en: "horse", phonetic: "/hɔːs/", cn: "马", example: "Ride a horse.", exampleCn: "马"},
          {en: "cow", phonetic: "/kaʊ/", cn: "奶牛", example: "Milk a cow.", exampleCn: "奶牛"},
          {en: "sheep", phonetic: "/ʃiːp/", cn: "绵羊", example: "The sheep is white.", exampleCn: "sheep是白色。"},
          {en: "hen", phonetic: "/hen/", cn: "母鸡", example: "Feed the hens.", exampleCn: "母鸡"},
          {en: "these", phonetic: "/ðiːz/", cn: "这些", example: "What are these?", exampleCn: "这些"},
          {en: "those", phonetic: "/ðəʊz/", cn: "那些", example: "What are those?", exampleCn: "那些"},
          {en: "yum", phonetic: "/jʌm/", cn: "好吃", example: "Yum! It's tasty.", exampleCn: "好吃"},
          {en: "animal", phonetic: "/ˈænɪml/", cn: "动物", example: "I like animals.", exampleCn: "我喜欢animals。"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 My clothes",
        words: [
          {en: "clothes", phonetic: "/kləʊðz/", cn: "衣服", example: "I like my clothes.", exampleCn: "我喜欢my clothes。"},
          {en: "pants", phonetic: "/pænts/", cn: "裤子", example: "These are my pants.", exampleCn: "裤子"},
          {en: "hat", phonetic: "/hæt/", cn: "帽子", example: "Put on your hat.", exampleCn: "戴上你的帽子。"},
          {en: "dress", phonetic: "/dres/", cn: "连衣裙", example: "I like this dress.", exampleCn: "我喜欢this dress。"},
          {en: "skirt", phonetic: "/skɜːt/", cn: "女裙", example: "This is my skirt.", exampleCn: "这是我的裙子。"},
          {en: "coat", phonetic: "/kəʊt/", cn: "外套", example: "Put on your coat.", exampleCn: "戴上你的外套。"},
          {en: "sweater", phonetic: "/ˈswetər/", cn: "毛衣", example: "Wear a sweater.", exampleCn: "毛衣"},
          {en: "sock", phonetic: "/sɒk/", cn: "短袜", example: "Put on your socks.", exampleCn: "戴上你的袜子。"},
          {en: "shorts", phonetic: "/ʃɔːts/", cn: "短裤", example: "These are my shorts.", exampleCn: "短裤"},
          {en: "jacket", phonetic: "/ˈdʒækɪt/", cn: "夹克衫", example: "Wear a jacket.", exampleCn: "夹克衫"},
          {en: "shirt", phonetic: "/ʃɜːt/", cn: "衬衫", example: "This is my shirt.", exampleCn: "这是我的衬衫。"},
          {en: "yours", phonetic: "/jɔːz/", cn: "你的", example: "Are these yours?", exampleCn: "你的"},
          {en: "mine", phonetic: "/maɪn/", cn: "我的", example: "This is mine.", exampleCn: "我的"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Shopping",
        words: [
          {en: "glove", phonetic: "/ɡlʌv/", cn: "手套", example: "Try on the gloves.", exampleCn: "手套"},
          {en: "scarf", phonetic: "/skɑːf/", cn: "围巾", example: "The scarf is pretty.", exampleCn: "围巾是pretty。"},
          {en: "umbrella", phonetic: "/ʌmˈbrelə/", cn: "雨伞", example: "Take an umbrella.", exampleCn: "雨伞"},
          {en: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", cn: "太阳镜", example: "Wear sunglasses.", exampleCn: "太阳镜"},
          {en: "expensive", phonetic: "/ɪkˈspensɪv/", cn: "昂贵的", example: "It's too expensive.", exampleCn: "昂贵的"},
          {en: "cheap", phonetic: "/tʃiːp/", cn: "便宜的", example: "It's cheap.", exampleCn: "便宜的"},
          {en: "nice", phonetic: "/naɪs/", cn: "好看的", example: "It's very nice.", exampleCn: "好看的"},
          {en: "pretty", phonetic: "/ˈprɪti/", cn: "美观的", example: "How pretty!", exampleCn: "美观的"},
          {en: "how much", phonetic: "/haʊ mʌtʃ/", cn: "多少钱", example: "How much is it?", exampleCn: "多少钱"},
          {en: "dollar", phonetic: "/ˈdɒlər/", cn: "美元", example: "It's ten dollars.", exampleCn: "美元"}
        ]
      }
    ]
  },
  // ==================== 五年级上册 ====================
  grade5: {
    units: [
      {
        unit: 1,
        title: "Unit 1 What's he like?",
        words: [
          {en: "old", phonetic: "/əʊld/", cn: "老的", example: "My grandpa is old.", exampleCn: "我的爷爷是老的。"},
          {en: "young", phonetic: "/jʌŋ/", cn: "年轻的", example: "She is young.", exampleCn: "年轻的"},
          {en: "funny", phonetic: "/ˈfʌni/", cn: "滑稽的", example: "He is funny.", exampleCn: "滑稽的"},
          {en: "kind", phonetic: "/kaɪnd/", cn: "慈祥的", example: "She is kind.", exampleCn: "慈祥的"},
          {en: "strict", phonetic: "/strɪkt/", cn: "严格的", example: "He is strict.", exampleCn: "严格的"},
          {en: "polite", phonetic: "/pəˈlaɪt/", cn: "有礼貌的", example: "Be polite.", exampleCn: "有礼貌的"},
          {en: "helpful", phonetic: "/ˈhelpfl/", cn: "有用的", example: "He is helpful.", exampleCn: "有用的"},
          {en: "clever", phonetic: "/ˈklevər/", cn: "聪明的", example: "She is clever.", exampleCn: "聪明的"},
          {en: "shy", phonetic: "/ʃaɪ/", cn: "羞怯的", example: "She is shy.", exampleCn: "羞怯的"},
          {en: "know", phonetic: "/nəʊ/", cn: "知道", example: "I know him.", exampleCn: "知道"},
          {en: "our", phonetic: "/ˈaʊər/", cn: "我们的", example: "This is our teacher.", exampleCn: "我们的"},
          {en: "Ms", phonetic: "/mɪz/", cn: "女士", example: "Ms Wang is kind.", exampleCn: "女士"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My week",
        words: [
          {en: "Monday", phonetic: "/ˈmʌndeɪ/", cn: "星期一", example: "I have English on Monday.", exampleCn: "星期一"},
          {en: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", cn: "星期二", example: "What do you do on Tuesday?", exampleCn: "星期二"},
          {en: "Wednesday", phonetic: "/ˈwenzdeɪ/", cn: "星期三", example: "I play football on Wednesday.", exampleCn: "星期三"},
          {en: "Thursday", phonetic: "/ˈθɜːzdeɪ/", cn: "星期四", example: "I read books on Thursday.", exampleCn: "我读了books on Thursday。"},
          {en: "Friday", phonetic: "/ˈfraɪdeɪ/", cn: "星期五", example: "I have art on Friday.", exampleCn: "星期五"},
          {en: "Saturday", phonetic: "/ˈsætədeɪ/", cn: "星期六", example: "I watch TV on Saturday.", exampleCn: "星期六"},
          {en: "Sunday", phonetic: "/ˈsʌndeɪ/", cn: "星期日", example: "I play games on Sunday.", exampleCn: "星期日"},
          {en: "weekend", phonetic: "/ˌwiːkˈend/", cn: "周末", example: "What do you do on the weekend?", exampleCn: "周末"},
          {en: "wash", phonetic: "/wɒʃ/", cn: "洗", example: "I wash my clothes.", exampleCn: "洗"},
          {en: "watch", phonetic: "/wɒtʃ/", cn: "看", example: "I watch TV.", exampleCn: "看"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 What would you like?",
        words: [
          {en: "sandwich", phonetic: "/ˈsænwɪtʃ/", cn: "三明治", example: "I'd like a sandwich.", exampleCn: "三明治"},
          {en: "salad", phonetic: "/ˈsæləd/", cn: "沙拉", example: "Have some salad.", exampleCn: "吃些salad。"},
          {en: "hamburger", phonetic: "/ˈhæmbɜːɡər/", cn: "汉堡包", example: "I like hamburgers.", exampleCn: "我喜欢hamburgers。"},
          {en: "ice cream", phonetic: "/ˌaɪs ˈkriːm/", cn: "冰淇淋", example: "I love ice cream.", exampleCn: "我爱ice cream。"},
          {en: "tea", phonetic: "/tiː/", cn: "茶", example: "Drink some tea.", exampleCn: "喝些tea。"},
          {en: "fresh", phonetic: "/freʃ/", cn: "新鲜的", example: "The fruit is fresh.", exampleCn: "fruit是fresh。"},
          {en: "healthy", phonetic: "/ˈhelθi/", cn: "健康的", example: "Vegetables are healthy.", exampleCn: "健康的"},
          {en: "delicious", phonetic: "/dɪˈlɪʃəs/", cn: "美味的", example: "The food is delicious.", exampleCn: "food是delicious。"},
          {en: "hot", phonetic: "/hɒt/", cn: "辣的", example: "The soup is hot.", exampleCn: "汤是热的。"},
          {en: "sweet", phonetic: "/swiːt/", cn: "甜的", example: "The cake is sweet.", exampleCn: "蛋糕是sweet。"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 What can you do?",
        words: [
          {en: "sing", phonetic: "/sɪŋ/", cn: "唱", example: "I can sing English songs.", exampleCn: "我能sing English songs。"},
          {en: "song", phonetic: "/sɒŋ/", cn: "歌曲", example: "Sing a song.", exampleCn: "歌曲"},
          {en: "dance", phonetic: "/dɑːns/", cn: "跳舞", example: "I can dance.", exampleCn: "我能跳舞。"},
          {en: "draw", phonetic: "/drɔː/", cn: "画", example: "I can draw cartoons.", exampleCn: "我能draw cartoons。"},
          {en: "cartoon", phonetic: "/kɑːˈtuːn/", cn: "漫画", example: "Draw a cartoon.", exampleCn: "漫画"},
          {en: "cook", phonetic: "/kʊk/", cn: "烹饪", example: "I can cook.", exampleCn: "我能烹饪。"},
          {en: "swim", phonetic: "/swɪm/", cn: "游泳", example: "I can swim.", exampleCn: "我能游泳。"},
          {en: "play basketball", phonetic: "/pleɪ ˈbɑːskɪtbɔːl/", cn: "打篮球", example: "I can play basketball.", exampleCn: "我能play basketball。"},
          {en: "play ping-pong", phonetic: "/pleɪ ˈpɪŋ pɒŋ/", cn: "打乒乓球", example: "I can play ping-pong.", exampleCn: "我能play ping-pong。"},
          {en: "speak English", phonetic: "/spiːk ˈɪŋɡlɪʃ/", cn: "说英语", example: "I can speak English.", exampleCn: "我能speak English。"},
          {en: "learn", phonetic: "/lɜːn/", cn: "学习", example: "I want to learn.", exampleCn: "我想要to learn。"},
          {en: "any", phonetic: "/ˈeni/", cn: "任何的", example: "Can you do any kung fu?", exampleCn: "任何的"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 There is a big bed",
        words: [
          {en: "clock", phonetic: "/klɒk/", cn: "时钟", example: "There is a clock.", exampleCn: "时钟"},
          {en: "plant", phonetic: "/plɑːnt/", cn: "植物", example: "Water the plant.", exampleCn: "植物"},
          {en: "bottle", phonetic: "/ˈbɒtl/", cn: "瓶子", example: "A water bottle.", exampleCn: "瓶子"},
          {en: "water bottle", phonetic: "/ˈwɔːtər ˈbɒtl/", cn: "水瓶", example: "I have a water bottle.", exampleCn: "我有一个water bottle。"},
          {en: "bike", phonetic: "/baɪk/", cn: "自行车", example: "Ride a bike.", exampleCn: "自行车"},
          {en: "photo", phonetic: "/ˈfəʊtəʊ/", cn: "照片", example: "Look at the photo.", exampleCn: "看这个photo。"},
          {en: "in front of", phonetic: "/ɪn frʌnt ɒv/", cn: "在...前面", example: "The tree is in front of the house.", exampleCn: "tree是in front of the house。"},
          {en: "beside", phonetic: "/bɪˈsaɪd/", cn: "在旁边", example: "The cat is beside the dog.", exampleCn: "这只猫是beside the dog。"},
          {en: "between", phonetic: "/bɪˈtwiːn/", cn: "在中间", example: "The ball is between the boxes.", exampleCn: "ball是between the boxes。"},
          {en: "behind", phonetic: "/bɪˈhaɪnd/", cn: "在后面", example: "The tree is behind the house.", exampleCn: "tree是behind the house。"},
          {en: "above", phonetic: "/əˈbʌv/", cn: "在上面", example: "The picture is above the bed.", exampleCn: "图画是above the bed。"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 In a nature park",
        words: [
          {en: "forest", phonetic: "/ˈfɒrɪst/", cn: "森林", example: "There is a forest.", exampleCn: "森林"},
          {en: "river", phonetic: "/ˈrɪvər/", cn: "河流", example: "There is a river.", exampleCn: "河流"},
          {en: "lake", phonetic: "/leɪk/", cn: "湖泊", example: "There is a lake.", exampleCn: "湖泊"},
          {en: "mountain", phonetic: "/ˈmaʊntən/", cn: "高山", example: "There is a mountain.", exampleCn: "高山"},
          {en: "hill", phonetic: "/hɪl/", cn: "小山", example: "There is a hill.", exampleCn: "小山"},
          {en: "tree", phonetic: "/triː/", cn: "树", example: "There are many trees.", exampleCn: "树"},
          {en: "bridge", phonetic: "/brɪdʒ/", cn: "桥", example: "There is a bridge.", exampleCn: "桥"},
          {en: "building", phonetic: "/ˈbɪldɪŋ/", cn: "建筑物", example: "There is a tall building.", exampleCn: "建筑物"},
          {en: "village", phonetic: "/ˈvɪlɪdʒ/", cn: "村庄", example: "There is a village.", exampleCn: "村庄"},
          {en: "house", phonetic: "/haʊs/", cn: "房子", example: "There is a house.", exampleCn: "房子"},
          {en: "boating", phonetic: "/ˈbəʊtɪŋ/", cn: "划船", example: "Go boating.", exampleCn: "划船"},
          {en: "go boating", phonetic: "/ɡəʊ ˈbəʊtɪŋ/", cn: "去划船", example: "Let's go boating.", exampleCn: "去划船"}
        ]
      }
    ]
  },
  // ==================== 五年级下册 ====================
  grade5b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 My day",
        words: [
          {en: "eat breakfast", phonetic: "/iːt ˈbrekfəst/", cn: "吃早饭", example: "I eat breakfast at 7.", exampleCn: "吃早饭"},
          {en: "have class", phonetic: "/hæv klɑːs/", cn: "上课", example: "I have English class.", exampleCn: "上课"},
          {en: "play sports", phonetic: "/pleɪ spɔːts/", cn: "做运动", example: "I play sports.", exampleCn: "做运动"},
          {en: "eat dinner", phonetic: "/iːt ˈdɪnər/", cn: "吃晚饭", example: "I eat dinner at 6.", exampleCn: "吃晚饭"},
          {en: "clean", phonetic: "/kliːn/", cn: "打扫", example: "Clean the room.", exampleCn: "打扫"},
          {en: "go shopping", phonetic: "/ɡəʊ ˈʃɒpɪŋ/", cn: "购物", example: "Go shopping.", exampleCn: "购物"},
          {en: "take", phonetic: "/teɪk/", cn: "学习", example: "Take a dancing class.", exampleCn: "学习"},
          {en: "dancing", phonetic: "/ˈdɑːnsɪŋ/", cn: "跳舞", example: "I like dancing.", exampleCn: "我喜欢dancing。"},
          {en: "when", phonetic: "/wen/", cn: "什么时候", example: "When do you get up?", exampleCn: "什么时候"},
          {en: "after", phonetic: "/ˈɑːftər/", cn: "在...之后", example: "After school.", exampleCn: "在...之后"},
          {en: "start", phonetic: "/stɑːt/", cn: "开始", example: "Classes start at 8.", exampleCn: "开始"},
          {en: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常", example: "I usually get up early.", exampleCn: "我通常get up early。"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My favourite season",
        words: [
          {en: "spring", phonetic: "/sprɪŋ/", cn: "春天", example: "I like spring.", exampleCn: "我喜欢春天。"},
          {en: "summer", phonetic: "/ˈsʌmər/", cn: "夏天", example: "I like summer.", exampleCn: "我喜欢夏天。"},
          {en: "autumn", phonetic: "/ˈɔːtəm/", cn: "秋天", example: "I like autumn.", exampleCn: "我喜欢秋天。"},
          {en: "winter", phonetic: "/ˈwɪntər/", cn: "冬天", example: "I like winter.", exampleCn: "我喜欢冬天。"},
          {en: "season", phonetic: "/ˈsiːzn/", cn: "季节", example: "What's your favourite season?", exampleCn: "你的favourite season是什么？"},
          {en: "pick", phonetic: "/pɪk/", cn: "采摘", example: "Pick apples.", exampleCn: "采摘"},
          {en: "snow", phonetic: "/snəʊ/", cn: "雪", example: "Play in the snow.", exampleCn: "雪"},
          {en: "good job", phonetic: "/ɡʊd dʒɒb/", cn: "做得好", example: "Good job!", exampleCn: "做得好"},
          {en: "because", phonetic: "/bɪˈkɒz/", cn: "因为", example: "Because I like swimming.", exampleCn: "因为"},
          {en: "vacation", phonetic: "/vəˈkeɪʃn/", cn: "假期", example: "Summer vacation.", exampleCn: "假期"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My school calendar",
        words: [
          {en: "January", phonetic: "/ˈdʒænjuəri/", cn: "一月", example: "My birthday is in January.", exampleCn: "我的birthday是in January。"},
          {en: "February", phonetic: "/ˈfebruəri/", cn: "二月", example: "February is short.", exampleCn: "二月"},
          {en: "March", phonetic: "/mɑːtʃ/", cn: "三月", example: "Tree Planting Day is in March.", exampleCn: "三月"},
          {en: "April", phonetic: "/ˈeɪprəl/", cn: "四月", example: "Easter is in April.", exampleCn: "四月"},
          {en: "May", phonetic: "/meɪ/", cn: "五月", example: "May Day is in May.", exampleCn: "五月"},
          {en: "June", phonetic: "/dʒuːn/", cn: "六月", example: "Children's Day is in June.", exampleCn: "六月"},
          {en: "July", phonetic: "/dʒuˈlaɪ/", cn: "七月", example: "Summer vacation is in July.", exampleCn: "七月"},
          {en: "August", phonetic: "/ˈɔːɡəst/", cn: "八月", example: "August is hot.", exampleCn: "八月"},
          {en: "September", phonetic: "/sepˈtembər/", cn: "九月", example: "School starts in September.", exampleCn: "九月"},
          {en: "October", phonetic: "/ɒkˈtəʊbər/", cn: "十月", example: "National Day is in October.", exampleCn: "十月"},
          {en: "November", phonetic: "/nəʊˈvembər/", cn: "十一月", example: "November is cool.", exampleCn: "十一月"},
          {en: "December", phonetic: "/dɪˈsembər/", cn: "十二月", example: "Christmas is in December.", exampleCn: "十二月"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 When is Easter?",
        words: [
          {en: "first", phonetic: "/fɜːst/", cn: "第一", example: "The first of June.", exampleCn: "第一"},
          {en: "second", phonetic: "/ˈsekənd/", cn: "第二", example: "The second month.", exampleCn: "第二"},
          {en: "third", phonetic: "/θɜːd/", cn: "第三", example: "The third day.", exampleCn: "第三"},
          {en: "fourth", phonetic: "/fɔːθ/", cn: "第四", example: "The fourth floor.", exampleCn: "第四"},
          {en: "fifth", phonetic: "/fɪfθ/", cn: "第五", example: "The fifth lesson.", exampleCn: "第五"},
          {en: "twelfth", phonetic: "/twelfθ/", cn: "第十二", example: "The twelfth month.", exampleCn: "第十二"},
          {en: "twentieth", phonetic: "/ˈtwentiəθ/", cn: "第二十", example: "The twentieth day.", exampleCn: "第二十"},
          {en: "twenty-first", phonetic: "/ˌtwenti ˈfɜːst/", cn: "第二十一", example: "The twenty-first of May.", exampleCn: "第二十一"},
          {en: "twenty-third", phonetic: "/ˌtwenti θɜːd/", cn: "第二十三", example: "The twenty-third of August.", exampleCn: "第二十三"},
          {en: "thirtieth", phonetic: "/ˈθɜːtiəθ/", cn: "第三十", example: "The thirtieth of April.", exampleCn: "第三十"},
          {en: "special", phonetic: "/ˈspeʃl/", cn: "特殊的", example: "A special day.", exampleCn: "特殊的"},
          {en: "fool", phonetic: "/fuːl/", cn: "蠢人", example: "April Fool's Day.", exampleCn: "蠢人"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Whose dog is it?",
        words: [
          {en: "mine", phonetic: "/maɪn/", cn: "我的", example: "The book is mine.", exampleCn: "书是mine。"},
          {en: "yours", phonetic: "/jɔːz/", cn: "你的", example: "Is this yours?", exampleCn: "你的"},
          {en: "his", phonetic: "/hɪz/", cn: "他的", example: "The pen is his.", exampleCn: "钢笔是his。"},
          {en: "hers", phonetic: "/hɜːz/", cn: "她的", example: "The bag is hers.", exampleCn: "这块书包是书包。"},
          {en: "theirs", phonetic: "/ðeəz/", cn: "他们的", example: "The house is theirs.", exampleCn: "house是theirs。"},
          {en: "ours", phonetic: "/ˈaʊəz/", cn: "我们的", example: "The classroom is ours.", exampleCn: "教室是ours。"},
          {en: "climbing", phonetic: "/ˈklaɪmɪŋ/", cn: "攀爬", example: "The monkey is climbing.", exampleCn: "这只猴子是climbing。"},
          {en: "eating", phonetic: "/ˈiːtɪŋ/", cn: "吃", example: "The rabbit is eating.", exampleCn: "rabbit是eating。"},
          {en: "playing", phonetic: "/ˈpleɪɪŋ/", cn: "玩耍", example: "The dog is playing.", exampleCn: "这只狗是playing。"},
          {en: "jumping", phonetic: "/ˈdʒʌmpɪŋ/", cn: "跳", example: "The cat is jumping.", exampleCn: "这只猫是jumping。"},
          {en: "drinking", phonetic: "/ˈdrɪŋkɪŋ/", cn: "喝", example: "The elephant is drinking.", exampleCn: "这只大象是drinking。"},
          {en: "sleeping", phonetic: "/ˈsliːpɪŋ/", cn: "睡觉", example: "The bear is sleeping.", exampleCn: "这只熊是sleeping。"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Work quietly!",
        words: [
          {en: "doing morning exercises", phonetic: "/ˈduːɪŋ ˈmɔːnɪŋ ˈeksəsaɪzɪz/", cn: "做早操", example: "We are doing morning exercises.", exampleCn: "做早操"},
          {en: "having class", phonetic: "/ˈhævɪŋ klɑːs/", cn: "上课", example: "We are having class.", exampleCn: "上课"},
          {en: "eating lunch", phonetic: "/ˈiːtɪŋ lʌntʃ/", cn: "吃午饭", example: "We are eating lunch.", exampleCn: "吃午饭"},
          {en: "reading a book", phonetic: "/ˈriːdɪŋ ə bʊk/", cn: "看书", example: "She is reading a book.", exampleCn: "看书"},
          {en: "listening to music", phonetic: "/ˈlɪsənɪŋ tuː ˈmjuːzɪk/", cn: "听音乐", example: "He is listening to music.", exampleCn: "听音乐"},
          {en: "keep", phonetic: "/kiːp/", cn: "保持", example: "Keep to the right.", exampleCn: "保持"},
          {en: "keep to the right", phonetic: "/kiːp tuː ðə raɪt/", cn: "靠右", example: "Keep to the right.", exampleCn: "靠右"},
          {en: "turn", phonetic: "/tɜːn/", cn: "顺序", example: "Take turns.", exampleCn: "顺序"},
          {en: "take turns", phonetic: "/teɪk tɜːnz/", cn: "轮流", example: "Please take turns.", exampleCn: "轮流"},
          {en: "bamboo", phonetic: "/bæmˈbuː/", cn: "竹子", example: "The panda is eating bamboo.", exampleCn: "这只熊猫是eating bamboo。"},
          {en: "its", phonetic: "/ɪts/", cn: "它的", example: "The monkey is eating its banana.", exampleCn: "这只猴子是eating its banana。"},
          {en: "show", phonetic: "/ʃəʊ/", cn: "给人看", example: "Show me your book.", exampleCn: "给我看看你的书。"},
          {en: "anything", phonetic: "/ˈeniθɪŋ/", cn: "任何事情", example: "Is there anything else?", exampleCn: "任何事情"},
          {en: "else", phonetic: "/els/", cn: "另外", example: "What else do you see?", exampleCn: "另外"},
          {en: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", cn: "展览", example: "There is a world robot exhibition.", exampleCn: "展览"},
          {en: "say", phonetic: "/seɪ/", cn: "说", example: "Please say something.", exampleCn: "说"}
        ]
      }
    ]
  },
  // ==================== 六年级上册 ====================
  grade6: {
    units: [
      {
        unit: 1,
        title: "Unit 1 How can I get there?",
        words: [
          {en: "science museum", phonetic: "/ˈsaɪəns mjuːˈziːəm/", cn: "科学博物馆", example: "Where is the science museum?", exampleCn: "科学博物馆"},
          {en: "post office", phonetic: "/pəʊst ˈɒfɪs/", cn: "邮局", example: "Is there a post office near here?", exampleCn: "邮局"},
          {en: "bookstore", phonetic: "/ˈbʊkstɔːr/", cn: "书店", example: "I want to go to the bookstore.", exampleCn: "我想要to go to the bookstore。"},
          {en: "cinema", phonetic: "/ˈsɪnəmə/", cn: "电影院", example: "Let's go to the cinema.", exampleCn: "电影院"},
          {en: "hospital", phonetic: "/ˈhɒspɪtl/", cn: "医院", example: "The hospital is near the park.", exampleCn: "hospital是near the park。"},
          {en: "crossing", phonetic: "/ˈkrɒsɪŋ/", cn: "十字路口", example: "Turn left at the crossing.", exampleCn: "十字路口"},
          {en: "turn", phonetic: "/tɜːn/", cn: "转弯", example: "Turn right here.", exampleCn: "转弯"},
          {en: "left", phonetic: "/left/", cn: "左", example: "Turn left.", exampleCn: "左转。"},
          {en: "straight", phonetic: "/streɪt/", cn: "笔直地", example: "Go straight.", exampleCn: "直走。"},
          {en: "right", phonetic: "/raɪt/", cn: "右", example: "Turn right.", exampleCn: "右转。"},
          {en: "ask", phonetic: "/ɑːsk/", cn: "问", example: "Ask the policeman.", exampleCn: "问"},
          {en: "sir", phonetic: "/sɜːr/", cn: "先生", example: "Excuse me, sir.", exampleCn: "先生"},
          {en: "interesting", phonetic: "/ˈɪntrəstɪŋ/", cn: "有趣的", example: "That's interesting.", exampleCn: "有趣的"},
          {en: "Italian", phonetic: "/ɪˈtæliən/", cn: "意大利的", example: "I like Italian food.", exampleCn: "我喜欢Italian food。"},
          {en: "restaurant", phonetic: "/ˈrestrɒnt/", cn: "餐馆", example: "Let's go to the restaurant.", exampleCn: "餐馆"},
          {en: "pizza", phonetic: "/ˈpiːtsə/", cn: "比萨饼", example: "I want some pizza.", exampleCn: "我想要some pizza。"},
          {en: "street", phonetic: "/striːt/", cn: "街道", example: "It's on Dongfang Street.", exampleCn: "街道"},
          {en: "get", phonetic: "/ɡet/", cn: "到达", example: "How can I get there?", exampleCn: "到达"},
          {en: "GPS", phonetic: "/ˌdʒiː piː ˈes/", cn: "导航", example: "Use the GPS.", exampleCn: "导航"},
          {en: "gave", phonetic: "/ɡeɪv/", cn: "提供（give的过去式）", example: "He gave me a book.", exampleCn: "提供（give的过去式）"},
          {en: "feature", phonetic: "/ˈfiːtʃər/", cn: "特点", example: "What are the features?", exampleCn: "特点"},
          {en: "follow", phonetic: "/ˈfɒləʊ/", cn: "跟随", example: "Follow me.", exampleCn: "跟随"},
          {en: "far", phonetic: "/fɑːr/", cn: "远的", example: "Is it far?", exampleCn: "远的"},
          {en: "tell", phonetic: "/tel/", cn: "告诉", example: "Can you tell me the way?", exampleCn: "告诉"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Ways to go to school",
        words: [
          {en: "on foot", phonetic: "/ɒn fʊt/", cn: "步行", example: "I go to school on foot.", exampleCn: "步行"},
          {en: "by", phonetic: "/baɪ/", cn: "乘", example: "I go by bus.", exampleCn: "乘"},
          {en: "bus", phonetic: "/bʌs/", cn: "公共汽车", example: "Take the No. 57 bus.", exampleCn: "公共汽车"},
          {en: "plane", phonetic: "/pleɪn/", cn: "飞机", example: "I go by plane.", exampleCn: "飞机"},
          {en: "taxi", phonetic: "/ˈtæksi/", cn: "出租汽车", example: "Let's go by taxi.", exampleCn: "出租汽车"},
          {en: "ship", phonetic: "/ʃɪp/", cn: "船", example: "I go by ship.", exampleCn: "船"},
          {en: "subway", phonetic: "/ˈsʌbweɪ/", cn: "地铁", example: "I go by subway.", exampleCn: "地铁"},
          {en: "train", phonetic: "/treɪn/", cn: "火车", example: "I go by train.", exampleCn: "火车"},
          {en: "slow", phonetic: "/sləʊ/", cn: "慢的", example: "The bus is slow.", exampleCn: "bus是慢的。"},
          {en: "down", phonetic: "/daʊn/", cn: "减少；降低", example: "Slow down.", exampleCn: "减少；降低"},
          {en: "slow down", phonetic: "/sləʊ daʊn/", cn: "慢下来", example: "Slow down and stop.", exampleCn: "慢下来"},
          {en: "stop", phonetic: "/stɒp/", cn: "停下", example: "Stop at a red light.", exampleCn: "停下"},
          {en: "wait", phonetic: "/weɪt/", cn: "等待", example: "Wait at a yellow light.", exampleCn: "等待"},
          {en: "go", phonetic: "/ɡəʊ/", cn: "走", example: "Go at a green light.", exampleCn: "走"},
          {en: "traffic lights", phonetic: "/ˈtræfɪk laɪts/", cn: "交通信号灯", example: "Look at the traffic lights.", exampleCn: "看这个traffic lights。"},
          {en: "helmet", phonetic: "/ˈhelmɪt/", cn: "头盔", example: "Wear a helmet.", exampleCn: "头盔"},
          {en: "must", phonetic: "/mʌst/", cn: "必须", example: "You must wear a helmet.", exampleCn: "必须"},
          {en: "attention", phonetic: "/əˈtenʃn/", cn: "注意", example: "Pay attention to the traffic lights.", exampleCn: "注意"},
          {en: "pay attention to", phonetic: "/peɪ əˈtenʃn tuː/", cn: "注意", example: "Pay attention to the cars.", exampleCn: "注意"},
          {en: "traffic", phonetic: "/ˈtræfɪk/", cn: "交通", example: "There is heavy traffic.", exampleCn: "交通"},
          {en: "sled", phonetic: "/sled/", cn: "雪橇", example: "Some kids go to school by sled.", exampleCn: "雪橇"},
          {en: "fast", phonetic: "/fɑːst/", cn: "快的", example: "The train is fast.", exampleCn: "train是快的。"},
          {en: "ferry", phonetic: "/ˈferi/", cn: "轮渡", example: "Some kids go by ferry.", exampleCn: "轮渡"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My weekend plan",
        words: [
          {en: "visit", phonetic: "/ˈvɪzɪt/", cn: "拜访", example: "I'm going to visit my grandparents.", exampleCn: "我要去看望我的祖父母。"},
          {en: "film", phonetic: "/fɪlm/", cn: "电影", example: "I'm going to see a film.", exampleCn: "电影"},
          {en: "see a film", phonetic: "/siː ə fɪlm/", cn: "看电影", example: "Let's see a film.", exampleCn: "看电影"},
          {en: "trip", phonetic: "/trɪp/", cn: "旅行", example: "I'm going to take a trip.", exampleCn: "旅行"},
          {en: "take a trip", phonetic: "/teɪk ə trɪp/", cn: "去旅行", example: "I'm going to take a trip.", exampleCn: "去旅行"},
          {en: "supermarket", phonetic: "/ˈsuːpəmɑːkɪt/", cn: "超市", example: "I'm going to the supermarket.", exampleCn: "超市"},
          {en: "evening", phonetic: "/ˈiːvnɪŋ/", cn: "晚上", example: "What are you going to do this evening?", exampleCn: "你今晚要做什么？"},
          {en: "tonight", phonetic: "/təˈnaɪt/", cn: "在今晚", example: "What are you going to do tonight?", exampleCn: "在今晚"},
          {en: "tomorrow", phonetic: "/təˈmɒrəʊ/", cn: "明天", example: "What are you going to do tomorrow?", exampleCn: "明天"},
          {en: "next week", phonetic: "/nekst wiːk/", cn: "下周", example: "I'm going to Beijing next week.", exampleCn: "下周"},
          {en: "dictionary", phonetic: "/ˈdɪkʃənri/", cn: "词典", example: "I want to buy a dictionary.", exampleCn: "我想要to buy a dictionary。"},
          {en: "comic book", phonetic: "/ˈkɒmɪk bʊk/", cn: "漫画书", example: "I'm going to buy a comic book.", exampleCn: "我要买一本漫画书。"},
          {en: "word book", phonetic: "/wɜːd bʊk/", cn: "单词书", example: "I'm going to buy a word book.", exampleCn: "单词书"},
          {en: "postcard", phonetic: "/ˈpəʊstkɑːd/", cn: "明信片", example: "I'm going to buy a postcard.", exampleCn: "明信片"},
          {en: "lesson", phonetic: "/ˈlesn/", cn: "课", example: "I have a lesson.", exampleCn: "我有一个lesson。"},
          {en: "space", phonetic: "/speɪs/", cn: "太空", example: "I'm going to space.", exampleCn: "太空"},
          {en: "travel", phonetic: "/ˈtrævl/", cn: "旅行", example: "I love to travel.", exampleCn: "我爱to travel。"},
          {en: "half price", phonetic: "/hɑːf praɪs/", cn: "半价", example: "The ticket is half price.", exampleCn: "ticket是half price。"},
          {en: "moon", phonetic: "/muːn/", cn: "月亮", example: "I'm going to the moon.", exampleCn: "月亮"},
          {en: "star", phonetic: "/stɑːr/", cn: "星星", example: "Look at the stars.", exampleCn: "看这个stars。"},
          {en: "get together", phonetic: "/ɡet təˈɡeðər/", cn: "聚会", example: "We are going to get together.", exampleCn: "聚会"},
          {en: "poem", phonetic: "/ˈpəʊɪm/", cn: "诗", example: "I'm going to read a poem.", exampleCn: "诗"},
          {en: "mooncake", phonetic: "/ˈmuːnkeɪk/", cn: "月饼", example: "I'm going to eat mooncakes.", exampleCn: "月饼"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 I have a pen pal",
        words: [
          {en: "studies", phonetic: "/ˈstʌdiz/", cn: "学习（第三人称单数）", example: "He studies Chinese.", exampleCn: "学习（第三人称单数）"},
          {en: "puzzle", phonetic: "/ˈpʌzl/", cn: "谜", example: "I like doing word puzzles.", exampleCn: "我喜欢doing word puzzles。"},
          {en: "hiking", phonetic: "/ˈhaɪkɪŋ/", cn: "远足", example: "I like going hiking.", exampleCn: "我喜欢going hiking。"},
          {en: "hobby", phonetic: "/ˈhɒbi/", cn: "业余爱好", example: "What's your hobby?", exampleCn: "你的hobby是什么？"},
          {en: "jasmine", phonetic: "/ˈdʒæzmɪn/", cn: "茉莉", example: "Her name is Jasmine.", exampleCn: "她的名字是Jasmine。"},
          {en: "idea", phonetic: "/aɪˈdɪə/", cn: "想法", example: "That's a good idea.", exampleCn: "想法"},
          {en: "Canberra", phonetic: "/ˈkænbərə/", cn: "堪培拉", example: "Canberra is the capital of Australia.", exampleCn: "堪培拉"},
          {en: "amazing", phonetic: "/əˈmeɪzɪŋ/", cn: "令人惊奇的", example: "That's amazing!", exampleCn: "令人惊奇的"},
          {en: "shall", phonetic: "/ʃæl/", cn: "表示征求意见", example: "Shall we go?", exampleCn: "表示征求意见"},
          {en: "goal", phonetic: "/ɡəʊl/", cn: "射门", example: "He scores a goal.", exampleCn: "射门"},
          {en: "join", phonetic: "/dʒɔɪn/", cn: "加入", example: "Can I join you?", exampleCn: "我能join you吗？"},
          {en: "club", phonetic: "/klʌb/", cn: "俱乐部", example: "I want to join the football club.", exampleCn: "我想要to join the football club。"},
          {en: "share", phonetic: "/ʃeər/", cn: "分享", example: "We can share.", exampleCn: "分享"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 What does he do?",
        words: [
          {en: "factory worker", phonetic: "/ˈfæktri ˈwɜːkər/", cn: "工厂工人", example: "My father is a factory worker.", exampleCn: "我的爸爸是a factory worker。"},
          {en: "postman", phonetic: "/ˈpəʊstmən/", cn: "邮递员", example: "He is a postman.", exampleCn: "他是一名postman。"},
          {en: "businessman", phonetic: "/ˈbɪznəsmæn/", cn: "商人", example: "He is a businessman.", exampleCn: "他是一名businessman。"},
          {en: "police officer", phonetic: "/pəˈliːs ˈɒfɪsər/", cn: "警察", example: "My uncle is a police officer.", exampleCn: "我的叔叔是a police officer。"},
          {en: "fisherman", phonetic: "/ˈfɪʃəmən/", cn: "渔民", example: "He is a fisherman.", exampleCn: "他是一名fisherman。"},
          {en: "scientist", phonetic: "/ˈsaɪəntɪst/", cn: "科学家", example: "She is a scientist.", exampleCn: "她是一名scientist。"},
          {en: "pilot", phonetic: "/ˈpaɪlət/", cn: "飞行员", example: "He is a pilot.", exampleCn: "他是一名pilot。"},
          {en: "coach", phonetic: "/kəʊtʃ/", cn: "教练", example: "My father is a coach.", exampleCn: "我的爸爸是a coach。"},
          {en: "country", phonetic: "/ˈkʌntri/", cn: "国家", example: "He works in another country.", exampleCn: "国家"},
          {en: "head teacher", phonetic: "/hed ˈtiːtʃər/", cn: "校长", example: "She is a head teacher.", exampleCn: "她是一名head teacher。"},
          {en: "sea", phonetic: "/siː/", cn: "大海", example: "He works at sea.", exampleCn: "大海"},
          {en: "stay", phonetic: "/steɪ/", cn: "保持", example: "Stay healthy.", exampleCn: "保持"},
          {en: "university", phonetic: "/ˌjuːnɪˈvɜːsəti/", cn: "大学", example: "She works at a university.", exampleCn: "大学"},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "He works in a gym.", exampleCn: "体育馆"},
          {en: "if", phonetic: "/ɪf/", cn: "如果", example: "If you like sports...", exampleCn: "如果"},
          {en: "reporter", phonetic: "/rɪˈpɔːtər/", cn: "记者", example: "She is a reporter.", exampleCn: "她是一名reporter。"},
          {en: "use", phonetic: "/juːz/", cn: "使用", example: "I use a computer.", exampleCn: "使用"},
          {en: "type", phonetic: "/taɪp/", cn: "打字", example: "I type quickly.", exampleCn: "打字"},
          {en: "quickly", phonetic: "/ˈkwɪkli/", cn: "迅速地", example: "I type quickly.", exampleCn: "迅速地"},
          {en: "secretary", phonetic: "/ˈsekrətri/", cn: "秘书", example: "She is a secretary.", exampleCn: "她是一名secretary。"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 How do you feel?",
        words: [
          {en: "angry", phonetic: "/ˈæŋɡri/", cn: "生气的", example: "The cat is angry with them.", exampleCn: "这只猫是angry with them。"},
          {en: "afraid", phonetic: "/əˈfreɪd/", cn: "害怕", example: "The cat is afraid.", exampleCn: "这只猫是afraid。"},
          {en: "sad", phonetic: "/sæd/", cn: "难过的", example: "Sarah is sad.", exampleCn: "难过的"},
          {en: "worried", phonetic: "/ˈwʌrid/", cn: "担心的", example: "The cat is worried.", exampleCn: "这只猫是worried。"},
          {en: "happy", phonetic: "/ˈhæpi/", cn: "高兴的", example: "The cat is happy.", exampleCn: "这只猫是快乐的。"},
          {en: "ill", phonetic: "/ɪl/", cn: "有病", example: "The cat is ill.", exampleCn: "这只猫是ill。"},
          {en: "wrong", phonetic: "/rɒŋ/", cn: "有毛病", example: "What's wrong?", exampleCn: "有毛病"},
          {en: "see a doctor", phonetic: "/siː ə ˈdɒktər/", cn: "看病", example: "You should see a doctor.", exampleCn: "看病"},
          {en: "take a deep breath", phonetic: "/teɪk ə diːp breθ/", cn: "深深吸一口气", example: "Take a deep breath.", exampleCn: "深深吸一口气"},
          {en: "count to ten", phonetic: "/kaʊnt tuː ten/", cn: "数到十", example: "Count to ten.", exampleCn: "数到十"},
          {en: "wear", phonetic: "/weər/", cn: "穿", example: "Wear warm clothes.", exampleCn: "穿"},
          {en: "more", phonetic: "/mɔːr/", cn: "更多的", example: "Do more exercise.", exampleCn: "更多的"},
          {en: "deep", phonetic: "/diːp/", cn: "深的", example: "Take a deep breath.", exampleCn: "深的"},
          {en: "breath", phonetic: "/breθ/", cn: "呼吸", example: "Take a deep breath.", exampleCn: "呼吸"},
          {en: "count", phonetic: "/kaʊnt/", cn: "数数", example: "Count to ten.", exampleCn: "数数"},
          {en: "chase", phonetic: "/tʃeɪs/", cn: "追赶", example: "Chase the mice.", exampleCn: "追赶"},
          {en: "mice", phonetic: "/maɪs/", cn: "老鼠（复数）", example: "The mice are bad.", exampleCn: "老鼠（复数）"},
          {en: "bad", phonetic: "/bæd/", cn: "邪恶的", example: "The mice are bad.", exampleCn: "邪恶的"},
          {en: "hurt", phonetic: "/hɜːt/", cn: "受伤", example: "My foot hurts.", exampleCn: "受伤"},
          {en: "feel", phonetic: "/fiːl/", cn: "觉得", example: "How do you feel?", exampleCn: "觉得"},
          {en: "should", phonetic: "/ʃʊd/", cn: "应该", example: "You should see a doctor.", exampleCn: "应该"},
          {en: "sit", phonetic: "/sɪt/", cn: "坐", example: "Sit down, please.", exampleCn: "坐"},
          {en: "grass", phonetic: "/ɡrɑːs/", cn: "草坪", example: "Don't sit on the grass.", exampleCn: "草坪"},
          {en: "hear", phonetic: "/hɪər/", cn: "听见", example: "I hear something.", exampleCn: "听见"},
          {en: "ant", phonetic: "/ænt/", cn: "蚂蚁", example: "The ant is worried.", exampleCn: "ant是worried。"},
          {en: "worry", phonetic: "/ˈwʌri/", cn: "担心", example: "Don't worry.", exampleCn: "担心"},
          {en: "stuck", phonetic: "/stʌk/", cn: "陷住", example: "The ant is stuck.", exampleCn: "ant是stuck。"},
          {en: "mud", phonetic: "/mʌd/", cn: "泥", example: "The ant is stuck in the mud.", exampleCn: "ant是stuck in the mud。"},
          {en: "pull", phonetic: "/pʊl/", cn: "拉", example: "Pull Robin out of the mud.", exampleCn: "拉"},
          {en: "everyone", phonetic: "/ˈevriwʌn/", cn: "每人", example: "Everyone is happy.", exampleCn: "每人"}
        ]
      }
    ]
  },
  // ==================== 六年级下册 ====================
  grade6b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 How tall are you?",
        words: [
          {en: "taller", phonetic: "/ˈtɔːlər/", cn: "更高的", example: "You are taller than me.", exampleCn: "更高的"},
          {en: "shorter", phonetic: "/ˈʃɔːrtər/", cn: "更矮的", example: "He is shorter than me.", exampleCn: "更矮的"},
          {en: "stronger", phonetic: "/ˈstrɒŋɡər/", cn: "更强壮的", example: "The elephant is stronger.", exampleCn: "这只大象是stronger。"},
          {en: "older", phonetic: "/ˈəʊldər/", cn: "年龄更大的", example: "My brother is older than me.", exampleCn: "我的兄弟是older than me。"},
          {en: "younger", phonetic: "/ˈjʌŋɡər/", cn: "更年轻的", example: "My sister is younger than me.", exampleCn: "我的姐妹是younger than me。"},
          {en: "bigger", phonetic: "/ˈbɪɡər/", cn: "更大的", example: "The sun is bigger.", exampleCn: "sun是bigger。"},
          {en: "smaller", phonetic: "/ˈsmɔːlər/", cn: "更小的", example: "The moon is smaller.", exampleCn: "moon是smaller。"},
          {en: "dinosaur", phonetic: "/ˈdaɪnəsɔːr/", cn: "恐龙", example: "Look at that dinosaur.", exampleCn: "看that dinosaur。"},
          {en: "hall", phonetic: "/hɔːl/", cn: "大厅", example: "In the dining hall.", exampleCn: "大厅"},
          {en: "metre", phonetic: "/ˈmiːtər/", cn: "米", example: "I'm 1.6 metres tall.", exampleCn: "米"},
          {en: "than", phonetic: "/ðæn/", cn: "比", example: "You are older than me.", exampleCn: "比"},
          {en: "both", phonetic: "/bəʊθ/", cn: "两个都", example: "We are both students.", exampleCn: "两个都"},
          {en: "kilogram", phonetic: "/ˈkɪləɡræm/", cn: "千克", example: "I'm 40 kilograms.", exampleCn: "千克"},
          {en: "countryside", phonetic: "/ˈkʌntrisaɪd/", cn: "乡村", example: "In the countryside.", exampleCn: "乡村"},
          {en: "lower", phonetic: "/ˈləʊər/", cn: "更低的", example: "The shadow is getting lower.", exampleCn: "shadow是getting lower。"},
          {en: "shadow", phonetic: "/ˈʃædəʊ/", cn: "影子", example: "Look at my shadow.", exampleCn: "看我的shadow。"},
          {en: "smarter", phonetic: "/ˈsmɑːtər/", cn: "更聪明的", example: "You are smarter than me.", exampleCn: "更聪明的"},
          {en: "become", phonetic: "/bɪˈkʌm/", cn: "开始变得", example: "The shadow becomes longer.", exampleCn: "开始变得"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Last weekend",
        words: [
          {en: "cleaned", phonetic: "/kliːnd/", cn: "打扫（过去式）", example: "I cleaned my room.", exampleCn: "我打扫了我的房间。"},
          {en: "stayed", phonetic: "/steɪd/", cn: "停留（过去式）", example: "I stayed at home.", exampleCn: "我待在家。"},
          {en: "washed", phonetic: "/wɒʃt/", cn: "洗（过去式）", example: "I washed my clothes.", exampleCn: "我洗了我的衣服。"},
          {en: "watched", phonetic: "/wɒtʃt/", cn: "看（过去式）", example: "I watched TV.", exampleCn: "我看了电视。"},
          {en: "had", phonetic: "/hæd/", cn: "有（过去式）", example: "I had a cold.", exampleCn: "我有a cold。"},
          {en: "had a cold", phonetic: "/hæd ə kəʊld/", cn: "感冒", example: "I had a cold last week.", exampleCn: "我有a cold last week。"},
          {en: "slept", phonetic: "/slept/", cn: "睡觉（过去式）", example: "I slept late.", exampleCn: "我睡得晚的。"},
          {en: "read", phonetic: "/red/", cn: "读（过去式）", example: "I read a book.", exampleCn: "我读了a book。"},
          {en: "saw", phonetic: "/sɔː/", cn: "看见（过去式）", example: "I saw a film.", exampleCn: "我看见了a film。"},
          {en: "last", phonetic: "/lɑːst/", cn: "最近的", example: "Last weekend.", exampleCn: "最近的"},
          {en: "yesterday", phonetic: "/ˈjestədeɪ/", cn: "昨天", example: "Yesterday was Sunday.", exampleCn: "昨天"},
          {en: "before", phonetic: "/bɪˈfɔːr/", cn: "在...之前", example: "The day before yesterday.", exampleCn: "在...之前"},
          {en: "drank", phonetic: "/dræŋk/", cn: "喝（过去式）", example: "I drank tea.", exampleCn: "我喝了tea。"},
          {en: "show", phonetic: "/ʃəʊ/", cn: "演出", example: "There was a show.", exampleCn: "演出"},
          {en: "magazine", phonetic: "/ˌmæɡəˈziːn/", cn: "杂志", example: "I read a magazine.", exampleCn: "我读了a magazine。"},
          {en: "better", phonetic: "/ˈbetər/", cn: "更好的", example: "I feel better now.", exampleCn: "更好的"},
          {en: "faster", phonetic: "/ˈfɑːstər/", cn: "更快的", example: "He runs faster than me.", exampleCn: "更快的"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Where did you go?",
        words: [
          {en: "went", phonetic: "/went/", cn: "去（过去式）", example: "I went to Sanya.", exampleCn: "我去了Sanya。"},
          {en: "camp", phonetic: "/kæmp/", cn: "野营", example: "I went to a forest park.", exampleCn: "我去了a forest park。"},
          {en: "went camping", phonetic: "/went ˈkæmpɪŋ/", cn: "去野营", example: "I went camping.", exampleCn: "我去camping。"},
          {en: "fish", phonetic: "/fɪʃ/", cn: "钓鱼", example: "I went fishing.", exampleCn: "我去fishing。"},
          {en: "went fishing", phonetic: "/went ˈfɪʃɪŋ/", cn: "去钓鱼", example: "I went fishing with my father.", exampleCn: "我去fishing with my father。"},
          {en: "rode", phonetic: "/rəʊd/", cn: "骑（马；自行车）（过去式）", example: "I rode a bike.", exampleCn: "骑（马；自行车）（过去式）"},
          {en: "hurt", phonetic: "/hɜːt/", cn: "受伤（过去式）", example: "I hurt my foot.", exampleCn: "我伤了我的脚。"},
          {en: "ate", phonetic: "/et/", cn: "吃（过去式）", example: "I ate fresh food.", exampleCn: "我吃了fresh food。"},
          {en: "took", phonetic: "/tʊk/", cn: "拍照（过去式）", example: "I took pictures.", exampleCn: "我带了pictures。"},
          {en: "took pictures", phonetic: "/tʊk ˈpɪktʃərz/", cn: "照相", example: "I took many pictures.", exampleCn: "我带了many pictures。"},
          {en: "bought", phonetic: "/bɔːt/", cn: "买（过去式）", example: "I bought gifts.", exampleCn: "我买了gifts。"},
          {en: "gift", phonetic: "/ɡɪft/", cn: "礼物", example: "I bought some gifts.", exampleCn: "我买了some gifts。"},
          {en: "fell", phonetic: "/fel/", cn: "摔倒（过去式）", example: "I fell off my bike.", exampleCn: "摔倒（过去式）"},
          {en: "off", phonetic: "/ɒf/", cn: "从（某处）落下", example: "I fell off the bike.", exampleCn: "从（某处）落下"},
          {en: "mule", phonetic: "/mjuːl/", cn: "骡子", example: "I rode a mule.", exampleCn: "骡子"},
          {en: "Turpan", phonetic: "/ˈtʊəpɑːn/", cn: "吐鲁番", example: "I went to Turpan.", exampleCn: "我去了Turpan。"},
          {en: "beach", phonetic: "/biːtʃ/", cn: "海滩", example: "I went to the beach.", exampleCn: "我去了the beach。"},
          {en: "basket", phonetic: "/ˈbɑːskɪt/", cn: "篮；筐", example: "I fixed the broken basket.", exampleCn: "篮；筐"},
          {en: "part", phonetic: "/pɑːt/", cn: "角色", example: "I played a part in the film.", exampleCn: "我玩了a part in the film。"},
          {en: "licked", phonetic: "/lɪkt/", cn: "舔（过去式）", example: "The dog licked me.", exampleCn: "舔（过去式）"},
          {en: "laughed", phonetic: "/lɑːft/", cn: "笑（过去式）", example: "We laughed and laughed.", exampleCn: "笑（过去式）"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 Then and now",
        words: [
          {en: "dining hall", phonetic: "/ˈdaɪnɪŋ hɔːl/", cn: "饭厅", example: "There was no dining hall.", exampleCn: "饭厅"},
          {en: "grass", phonetic: "/ɡrɑːs/", cn: "草坪", example: "There was no grass.", exampleCn: "草坪"},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "There was no gym.", exampleCn: "体育馆"},
          {en: "ago", phonetic: "/əˈɡəʊ/", cn: "以前", example: "Twenty years ago.", exampleCn: "以前"},
          {en: "cycling", phonetic: "/ˈsaɪklɪŋ/", cn: "骑自行车运动", example: "I love to go cycling.", exampleCn: "我爱to go cycling。"},
          {en: "go cycling", phonetic: "/ɡəʊ ˈsaɪklɪŋ/", cn: "去骑自行车", example: "I often go cycling.", exampleCn: "我经常go cycling。"},
          {en: "ice-skate", phonetic: "/ˈaɪs skeɪt/", cn: "滑冰", example: "I love to ice-skate.", exampleCn: "我爱to ice-skate。"},
          {en: "badminton", phonetic: "/ˈbædmɪntən/", cn: "羽毛球", example: "I play badminton.", exampleCn: "羽毛球"},
          {en: "star", phonetic: "/stɑːr/", cn: "星", example: "I was a star.", exampleCn: "星"},
          {en: "easy", phonetic: "/ˈiːzi/", cn: "容易的", example: "It is easy.", exampleCn: "容易的"},
          {en: "look up", phonetic: "/lʊk ʌp/", cn: "查阅", example: "Look it up on the Internet.", exampleCn: "查阅"},
          {en: "Internet", phonetic: "/ˈɪntənet/", cn: "互联网", example: "On the Internet.", exampleCn: "互联网"},
          {en: "different", phonetic: "/ˈdɪfrənt/", cn: "不同的", example: "We are different now.", exampleCn: "不同的"},
          {en: "active", phonetic: "/ˈæktɪv/", cn: "积极的；活跃的", example: "I was very active.", exampleCn: "积极的；活跃的"},
          {en: "race", phonetic: "/reɪs/", cn: "赛跑", example: "I won the race.", exampleCn: "赛跑"},
          {en: "nothing", phonetic: "/ˈnʌθɪŋ/", cn: "没有什么", example: "I thought I could do nothing.", exampleCn: "没有什么"},
          {en: "thought", phonetic: "/θɔːt/", cn: "想（过去式）", example: "I thought I could do nothing.", exampleCn: "想（过去式）"},
          {en: "felt", phonetic: "/felt/", cn: "感觉（过去式）", example: "I felt worried.", exampleCn: "感觉（过去式）"},
          {en: "cheetah", phonetic: "/ˈtʃiːtə/", cn: "猎豹", example: "The cheetah is fast.", exampleCn: "cheetah是快的。"},
          {en: "trip", phonetic: "/trɪp/", cn: "绊倒", example: "He tripped and fell.", exampleCn: "绊倒"},
          {en: "woke", phonetic: "/wəʊk/", cn: "醒（过去式）", example: "I woke up early.", exampleCn: "醒（过去式）"},
          {en: "dream", phonetic: "/driːm/", cn: "梦", example: "I had a dream.", exampleCn: "我有a dream。"}
        ]
      },
      {
        unit: 5,
        title: "Unit 4 Then and now",
        words: [
          {en: "dining hall", phonetic: "/ˈdaɪnɪŋ hɔːl/", cn: "饭厅", example: "There was no dining hall.", exampleCn: "饭厅"},
          {en: "grass", phonetic: "/ɡrɑːs/", cn: "草坪", example: "There was no grass.", exampleCn: "草坪"},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "There was no gym.", exampleCn: "体育馆"},
          {en: "ago", phonetic: "/əˈɡəʊ/", cn: "以前", example: "Twenty years ago.", exampleCn: "以前"},
          {en: "cycling", phonetic: "/ˈsaɪklɪŋ/", cn: "骑自行车运动", example: "I love to go cycling.", exampleCn: "我爱to go cycling。"},
          {en: "go cycling", phonetic: "/ɡəʊ ˈsaɪklɪŋ/", cn: "去骑自行车", example: "I often go cycling.", exampleCn: "我经常go cycling。"},
          {en: "ice-skate", phonetic: "/ˈaɪs skeɪt/", cn: "滑冰", example: "I love to ice-skate.", exampleCn: "我爱to ice-skate。"},
          {en: "badminton", phonetic: "/ˈbædmɪntən/", cn: "羽毛球", example: "I play badminton.", exampleCn: "羽毛球"},
          {en: "star", phonetic: "/stɑːr/", cn: "星", example: "I was a star.", exampleCn: "星"},
          {en: "easy", phonetic: "/ˈiːzi/", cn: "容易的", example: "It is easy.", exampleCn: "容易的"},
          {en: "look up", phonetic: "/lʊk ʌp/", cn: "查阅", example: "Look it up on the Internet.", exampleCn: "查阅"},
          {en: "Internet", phonetic: "/ˈɪntənet/", cn: "互联网", example: "On the Internet.", exampleCn: "互联网"},
          {en: "different", phonetic: "/ˈdɪfrənt/", cn: "不同的", example: "We are different now.", exampleCn: "不同的"},
          {en: "active", phonetic: "/ˈæktɪv/", cn: "积极的；活跃的", example: "I was very active.", exampleCn: "积极的；活跃的"},
          {en: "race", phonetic: "/reɪs/", cn: "赛跑", example: "I won the race.", exampleCn: "赛跑"},
          {en: "nothing", phonetic: "/ˈnʌθɪŋ/", cn: "没有什么", example: "I thought I could do nothing.", exampleCn: "没有什么"},
          {en: "thought", phonetic: "/θɔːt/", cn: "想（过去式）", example: "I thought I could do nothing.", exampleCn: "想（过去式）"},
          {en: "felt", phonetic: "/felt/", cn: "感觉（过去式）", example: "I felt worried.", exampleCn: "感觉（过去式）"},
          {en: "cheetah", phonetic: "/ˈtʃiːtə/", cn: "猎豹", example: "The cheetah is fast.", exampleCn: "cheetah是快的。"},
          {en: "trip", phonetic: "/trɪp/", cn: "绊倒", example: "He tripped and fell.", exampleCn: "绊倒"},
          {en: "woke", phonetic: "/wəʊk/", cn: "醒（过去式）", example: "I woke up early.", exampleCn: "醒（过去式）"},
          {en: "dream", phonetic: "/driːm/", cn: "梦", example: "I had a dream.", exampleCn: "我有a dream。"}
        ]
      },
      {
        unit: 6,
        title: "Recycle Mike's happy days",
        words: [
          {en: "farewell", phonetic: "/ˌfeəˈwel/", cn: "告别", example: "It's a farewell party.", exampleCn: "它是一个farewell party。"},
          {en: "party", phonetic: "/ˈpɑːti/", cn: "聚会", example: "We have a party.", exampleCn: "聚会"},
          {en: "invite", phonetic: "/ɪnˈvaɪt/", cn: "邀请", example: "I want to invite you.", exampleCn: "我想要to invite you。"},
          {en: "cute", phonetic: "/kjuːt/", cn: "可爱的", example: "The baby is cute.", exampleCn: "婴儿是可爱的。"},
          {en: "handsome", phonetic: "/ˈhænsəm/", cn: "英俊的", example: "He is handsome.", exampleCn: "英俊的"},
          {en: "smart", phonetic: "/smɑːt/", cn: "聪明的", example: "She is smart.", exampleCn: "聪明的"},
          {en: "excellent", phonetic: "/ˈeksələnt/", cn: "极好的", example: "That's excellent!", exampleCn: "极好的"},
          {en: "wonderful", phonetic: "/ˈwʌndəfl/", cn: "精彩的", example: "What a wonderful day!", exampleCn: "精彩的"},
          {en: "beautiful", phonetic: "/ˈbjuːtɪfl/", cn: "美丽的", example: "You look beautiful.", exampleCn: "美丽的"},
          {en: "kind", phonetic: "/kaɪnd/", cn: "友善的", example: "You are very kind.", exampleCn: "友善的"},
          {en: "helpful", phonetic: "/ˈhelpfl/", cn: "有帮助的", example: "You are helpful.", exampleCn: "有帮助的"},
          {en: "polite", phonetic: "/pəˈlaɪt/", cn: "有礼貌的", example: "He is polite.", exampleCn: "有礼貌的"},
          {en: "hard-working", phonetic: "/ˌhɑːd ˈwɜːkɪŋ/", cn: "勤奋的", example: "She is hard-working.", exampleCn: "勤奋的"},
          {en: "funny", phonetic: "/ˈfʌni/", cn: "有趣的", example: "He is funny.", exampleCn: "有趣的"},
          {en: "friendly", phonetic: "/ˈfrendli/", cn: "友好的", example: "They are friendly.", exampleCn: "友好的"},
          {en: "shy", phonetic: "/ʃaɪ/", cn: "害羞的", example: "She is a bit shy.", exampleCn: "她是一名bit shy。"},
          {en: "clever", phonetic: "/ˈklevər/", cn: "聪明的", example: "The dog is clever.", exampleCn: "这只狗是clever。"},
          {en: "strict", phonetic: "/strɪkt/", cn: "严厉的", example: "My teacher is strict.", exampleCn: "我的老师是strict。"},
          {en: "young", phonetic: "/jʌŋ/", cn: "年轻的", example: "She looks young.", exampleCn: "年轻的"},
          {en: "old", phonetic: "/əʊld/", cn: "年老的", example: "My grandpa is old.", exampleCn: "我的爷爷是老的。"},
          {en: "thin", phonetic: "/θɪn/", cn: "瘦的", example: "He is thin.", exampleCn: "瘦的"},
          {en: "heavy", phonetic: "/ˈhevi/", cn: "重的", example: "The box is heavy.", exampleCn: "box是heavy。"},
          {en: "tall", phonetic: "/tɔːl/", cn: "高的", example: "He is tall.", exampleCn: "高的"},
          {en: "short", phonetic: "/ʃɔːt/", cn: "矮的", example: "She is short.", exampleCn: "矮的"},
          {en: "long", phonetic: "/lɒŋ/", cn: "长的", example: "The hair is long.", exampleCn: "头发是长的。"},
          {en: "small", phonetic: "/smɔːl/", cn: "小的", example: "The cat is small.", exampleCn: "这只猫是小的。"},
          {en: "big", phonetic: "/bɪɡ/", cn: "大的", example: "The dog is big.", exampleCn: "这只狗是大的。"},
          {en: "strong", phonetic: "/strɒŋ/", cn: "强壮的", example: "He is strong.", exampleCn: "强壮的"},
          {en: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", example: "She is quiet.", exampleCn: "安静的"},
          {en: "fun", phonetic: "/fʌn/", cn: "乐趣", example: "We have fun.", exampleCn: "乐趣"}
        ]
      }
    ]
  }
};
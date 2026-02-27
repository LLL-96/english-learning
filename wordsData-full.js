// 小学英语单词数据（3-6年级，上下册）- 完整版
const wordsData = {
  // ==================== 三年级上册 ====================
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
          {en: "OK", phonetic: "/ˌəʊˈkeɪ/", cn: "好；行", example: "OK, let's go."},
          {en: "mum", phonetic: "/mʌm/", cn: "妈妈", example: "I love my mum."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Look at me!",
        words: [
          {en: "face", phonetic: "/feɪs/", cn: "脸", example: "This is my face."},
          {en: "ear", phonetic: "/ɪər/", cn: "耳朵", example: "Touch your ear."},
          {en: "eye", phonetic: "/aɪ/", cn: "眼睛", example: "Look at my eye."},
          {en: "nose", phonetic: "/nəʊz/", cn: "鼻子", example: "This is my nose."},
          {en: "mouth", phonetic: "/maʊθ/", cn: "嘴", example: "Open your mouth."},
          {en: "arm", phonetic: "/ɑːm/", cn: "胳膊", example: "Wave your arm."},
          {en: "hand", phonetic: "/hænd/", cn: "手", example: "Clap your hands."},
          {en: "head", phonetic: "/hed/", cn: "头", example: "Touch your head."},
          {en: "body", phonetic: "/ˈbɒdi/", cn: "身体", example: "Shake your body."},
          {en: "leg", phonetic: "/leɡ/", cn: "腿", example: "This is my leg."},
          {en: "foot", phonetic: "/fʊt/", cn: "脚", example: "Stamp your foot."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 We love animals",
        words: [
          {en: "duck", phonetic: "/dʌk/", cn: "鸭子", example: "It's a duck."},
          {en: "pig", phonetic: "/pɪɡ/", cn: "猪", example: "The pig is fat."},
          {en: "cat", phonetic: "/kæt/", cn: "猫", example: "I have a cat."},
          {en: "bear", phonetic: "/beər/", cn: "熊", example: "The bear is big."},
          {en: "dog", phonetic: "/dɒɡ/", cn: "狗", example: "The dog is cute."},
          {en: "elephant", phonetic: "/ˈelɪfənt/", cn: "大象", example: "The elephant is big."},
          {en: "monkey", phonetic: "/ˈmʌŋki/", cn: "猴子", example: "The monkey is funny."},
          {en: "bird", phonetic: "/bɜːd/", cn: "鸟", example: "The bird can fly."},
          {en: "tiger", phonetic: "/ˈtaɪɡər/", cn: "老虎", example: "The tiger is strong."},
          {en: "panda", phonetic: "/ˈpændə/", cn: "熊猫", example: "I like pandas."},
          {en: "zoo", phonetic: "/zuː/", cn: "动物园", example: "Let's go to the zoo."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Let's eat!",
        words: [
          {en: "bread", phonetic: "/bred/", cn: "面包", example: "Have some bread."},
          {en: "juice", phonetic: "/dʒuːs/", cn: "果汁", example: "Drink some juice."},
          {en: "egg", phonetic: "/eɡ/", cn: "蛋", example: "Eat an egg."},
          {en: "milk", phonetic: "/mɪlk/", cn: "牛奶", example: "Drink some milk."},
          {en: "water", phonetic: "/ˈwɔːtər/", cn: "水", example: "Drink some water."},
          {en: "cake", phonetic: "/keɪk/", cn: "蛋糕", example: "Eat some cake."},
          {en: "fish", phonetic: "/fɪʃ/", cn: "鱼", example: "Eat some fish."},
          {en: "rice", phonetic: "/raɪs/", cn: "米饭", example: "Eat some rice."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Happy birthday!",
        words: [
          {en: "one", phonetic: "/wʌn/", cn: "一", example: "I am one."},
          {en: "two", phonetic: "/tuː/", cn: "二", example: "I have two books."},
          {en: "three", phonetic: "/θriː/", cn: "三", example: "I am three."},
          {en: "four", phonetic: "/fɔːr/", cn: "四", example: "I have four pens."},
          {en: "five", phonetic: "/faɪv/", cn: "五", example: "I am five."},
          {en: "six", phonetic: "/sɪks/", cn: "六", example: "I have six toys."},
          {en: "seven", phonetic: "/ˈsevn/", cn: "七", example: "I am seven."},
          {en: "eight", phonetic: "/eɪt/", cn: "八", example: "I have eight books."},
          {en: "nine", phonetic: "/naɪn/", cn: "九", example: "I am nine."},
          {en: "ten", phonetic: "/ten/", cn: "十", example: "I have ten fingers."},
          {en: "brother", phonetic: "/ˈbrʌðər/", cn: "兄；弟", example: "This is my brother."},
          {en: "plate", phonetic: "/pleɪt/", cn: "盘子", example: "Pass me the plate."}
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
          {en: "grandmother", phonetic: "/ˈɡrænmʌðər/", cn: "奶奶", example: "This is my grandmother."},
          {en: "grandma", phonetic: "/ˈɡrænmɑː/", cn: "奶奶", example: "I love my grandma."},
          {en: "grandfather", phonetic: "/ˈɡrænfɑːðər/", cn: "爷爷", example: "This is my grandfather."},
          {en: "grandpa", phonetic: "/ˈɡrænpɑː/", cn: "爷爷", example: "I love my grandpa."},
          {en: "family", phonetic: "/ˈfæməli/", cn: "家庭", example: "I love my family."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 At the zoo",
        words: [
          {en: "thin", phonetic: "/θɪn/", cn: "瘦的", example: "The monkey is thin."},
          {en: "fat", phonetic: "/fæt/", cn: "胖的", example: "The pig is fat."},
          {en: "tall", phonetic: "/tɔːl/", cn: "高的", example: "The giraffe is tall."},
          {en: "short", phonetic: "/ʃɔːt/", cn: "矮的", example: "The deer is short."},
          {en: "long", phonetic: "/lɒŋ/", cn: "长的", example: "The snake is long."},
          {en: "small", phonetic: "/smɔːl/", cn: "小的", example: "The bird is small."},
          {en: "big", phonetic: "/bɪɡ/", cn: "大的", example: "The elephant is big."},
          {en: "giraffe", phonetic: "/dʒəˈrɑːf/", cn: "长颈鹿", example: "The giraffe is tall."},
          {en: "so", phonetic: "/səʊ/", cn: "这么", example: "It's so tall."},
          {en: "children", phonetic: "/ˈtʃɪldrən/", cn: "孩子们", example: "Come here, children."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 Where is my car?",
        words: [
          {en: "on", phonetic: "/ɒn/", cn: "在...上", example: "The book is on the desk."},
          {en: "in", phonetic: "/ɪn/", cn: "在...里", example: "The pen is in the bag."},
          {en: "under", phonetic: "/ˈʌndər/", cn: "在...下", example: "The ball is under the chair."},
          {en: "chair", phonetic: "/tʃeər/", cn: "椅子", example: "Sit on the chair."},
          {en: "desk", phonetic: "/desk/", cn: "书桌", example: "The book is on the desk."},
          {en: "cap", phonetic: "/kæp/", cn: "帽子", example: "Put on your cap."},
          {en: "ball", phonetic: "/bɔːl/", cn: "球", example: "Bounce the ball."},
          {en: "car", phonetic: "/kɑːr/", cn: "小汽车", example: "Drive a car."},
          {en: "boat", phonetic: "/bəʊt/", cn: "小船", example: "Row a boat."},
          {en: "map", phonetic: "/mæp/", cn: "地图", example: "Read a map."},
          {en: "toy", phonetic: "/tɔɪ/", cn: "玩具", example: "Where is my toy?"},
          {en: "box", phonetic: "/bɒks/", cn: "盒子", example: "It's in the box."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Do you like pears?",
        words: [
          {en: "pear", phonetic: "/peər/", cn: "梨", example: "Do you like pears?"},
          {en: "apple", phonetic: "/ˈæpl/", cn: "苹果", example: "I like apples."},
          {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙子", example: "Have an orange."},
          {en: "banana", phonetic: "/bəˈnɑːnə/", cn: "香蕉", example: "Eat a banana."},
          {en: "watermelon", phonetic: "/ˈwɔːtəmelən/", cn: "西瓜", example: "I like watermelons."},
          {en: "strawberry", phonetic: "/ˈstrɔːbəri/", cn: "草莓", example: "Have a strawberry."},
          {en: "grape", phonetic: "/ɡreɪp/", cn: "葡萄", example: "I like grapes."},
          {en: "buy", phonetic: "/baɪ/", cn: "买", example: "Let's buy some fruit."},
          {en: "fruit", phonetic: "/fruːt/", cn: "水果", example: "I like fruit."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 How many?",
        words: [
          {en: "eleven", phonetic: "/ɪˈlevn/", cn: "十一", example: "I see eleven."},
          {en: "twelve", phonetic: "/twelv/", cn: "十二", example: "I have twelve."},
          {en: "thirteen", phonetic: "/ˌθɜːˈtiːn/", cn: "十三", example: "I see thirteen."},
          {en: "fourteen", phonetic: "/ˌfɔːˈtiːn/", cn: "十四", example: "I have fourteen."},
          {en: "fifteen", phonetic: "/ˌfɪfˈtiːn/", cn: "十五", example: "I see fifteen."},
          {en: "sixteen", phonetic: "/ˌsɪksˈtiːn/", cn: "十六", example: "I have sixteen."},
          {en: "seventeen", phonetic: "/ˌsevnˈtiːn/", cn: "十七", example: "I see seventeen."},
          {en: "eighteen", phonetic: "/ˌeɪˈtiːn/", cn: "十八", example: "I have eighteen."},
          {en: "nineteen", phonetic: "/ˌnaɪnˈtiːn/", cn: "十九", example: "I see nineteen."},
          {en: "twenty", phonetic: "/ˈtwenti/", cn: "二十", example: "I have twenty."},
          {en: "kite", phonetic: "/kaɪt/", cn: "风筝", example: "I see twelve kites."},
          {en: "beautiful", phonetic: "/ˈbjuːtɪfl/", cn: "美丽的", example: "How beautiful!"}
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
          {en: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", example: "This is my classroom."},
          {en: "window", phonetic: "/ˈwɪndəʊ/", cn: "窗户", example: "Open the window."},
          {en: "blackboard", phonetic: "/ˈblækbɔːrd/", cn: "黑板", example: "Look at the blackboard."},
          {en: "light", phonetic: "/laɪt/", cn: "电灯", example: "Turn on the light."},
          {en: "picture", phonetic: "/ˈpɪktʃər/", cn: "图画", example: "The picture is nice."},
          {en: "door", phonetic: "/dɔːr/", cn: "门", example: "Open the door."},
          {en: "computer", phonetic: "/kəmˈpjuːtər/", cn: "计算机", example: "I have a computer."},
          {en: "fan", phonetic: "/fæn/", cn: "风扇", example: "Turn on the fan."},
          {en: "wall", phonetic: "/wɔːl/", cn: "墙壁", example: "The wall is white."},
          {en: "floor", phonetic: "/flɔːr/", cn: "地板", example: "The floor is clean."},
          {en: "really", phonetic: "/ˈrɪəli/", cn: "真的", example: "Really? Let me see."},
          {en: "near", phonetic: "/nɪər/", cn: "距离近", example: "It's near the window."},
          {en: "TV", phonetic: "/ˌtiː ˈviː/", cn: "电视", example: "Turn on the TV."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My schoolbag",
        words: [
          {en: "schoolbag", phonetic: "/ˈskuːlbæɡ/", cn: "书包", example: "My schoolbag is heavy."},
          {en: "maths book", phonetic: "/mæθs bʊk/", cn: "数学书", example: "I have a maths book."},
          {en: "English book", phonetic: "/ˈɪŋɡlɪʃ bʊk/", cn: "英语书", example: "Put your English book in your bag."},
          {en: "Chinese book", phonetic: "/ˌtʃaɪˈniːz bʊk/", cn: "语文书", example: "I have a Chinese book."},
          {en: "storybook", phonetic: "/ˈstɔːribʊk/", cn: "故事书", example: "I like storybooks."},
          {en: "candy", phonetic: "/ˈkændi/", cn: "糖果", example: "I have some candies."},
          {en: "notebook", phonetic: "/ˈnəʊtbʊk/", cn: "笔记本", example: "This is my notebook."},
          {en: "toy", phonetic: "/tɔɪ/", cn: "玩具", example: "I have a toy."},
          {en: "key", phonetic: "/kiː/", cn: "钥匙", example: "Where is my key?"},
          {en: "wow", phonetic: "/waʊ/", cn: "哇", example: "Wow, it's so big!"},
          {en: "lost", phonetic: "/lɒst/", cn: "丢失", example: "I lost my key."},
          {en: "so much", phonetic: "/səʊ mʌtʃ/", cn: "非常地", example: "Thank you so much."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My friends",
        words: [
          {en: "strong", phonetic: "/strɒŋ/", cn: "强壮的", example: "He is strong."},
          {en: "friendly", phonetic: "/ˈfrendli/", cn: "友好的", example: "She is friendly."},
          {en: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", example: "He is quiet."},
          {en: "hair", phonetic: "/heər/", cn: "头发", example: "She has long hair."},
          {en: "shoe", phonetic: "/ʃuː/", cn: "鞋", example: "Put on your shoes."},
          {en: "glasses", phonetic: "/ˈɡlɑːsɪz/", cn: "眼镜", example: "He has glasses."},
          {en: "his", phonetic: "/hɪz/", cn: "他的", example: "This is his bag."},
          {en: "or", phonetic: "/ɔːr/", cn: "或者", example: "Is it blue or green?"},
          {en: "right", phonetic: "/raɪt/", cn: "正确的", example: "You're right."},
          {en: "hat", phonetic: "/hæt/", cn: "帽子", example: "I have a hat."},
          {en: "her", phonetic: "/hɜːr/", cn: "她的", example: "This is her book."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 My home",
        words: [
          {en: "bedroom", phonetic: "/ˈbedruːm/", cn: "卧室", example: "This is my bedroom."},
          {en: "living room", phonetic: "/ˈlɪvɪŋ ruːm/", cn: "客厅", example: "Watch TV in the living room."},
          {en: "study", phonetic: "/ˈstʌdi/", cn: "书房", example: "Read in the study."},
          {en: "kitchen", phonetic: "/ˈkɪtʃɪn/", cn: "厨房", example: "Cook in the kitchen."},
          {en: "bathroom", phonetic: "/ˈbɑːθruːm/", cn: "浴室", example: "Take a shower in the bathroom."},
          {en: "phone", phonetic: "/fəʊn/", cn: "电话", example: "Answer the phone."},
          {en: "bed", phonetic: "/bed/", cn: "床", example: "Make the bed."},
          {en: "sofa", phonetic: "/ˈsəʊfə/", cn: "沙发", example: "Sit on the sofa."},
          {en: "fridge", phonetic: "/frɪdʒ/", cn: "冰箱", example: "Open the fridge."},
          {en: "table", phonetic: "/ˈteɪbl/", cn: "桌子", example: "Put it on the table."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Dinner's ready",
        words: [
          {en: "beef", phonetic: "/biːf/", cn: "牛肉", example: "I'd like some beef."},
          {en: "chicken", phonetic: "/ˈtʃɪkɪn/", cn: "鸡肉", example: "I like chicken."},
          {en: "noodles", phonetic: "/ˈnuːdlz/", cn: "面条", example: "Have some noodles."},
          {en: "soup", phonetic: "/suːp/", cn: "汤", example: "The soup is hot."},
          {en: "vegetable", phonetic: "/ˈvedʒtəbl/", cn: "蔬菜", example: "Eat your vegetables."},
          {en: "chopsticks", phonetic: "/ˈtʃɒpstɪks/", cn: "筷子", example: "Use chopsticks."},
          {en: "bowl", phonetic: "/bəʊl/", cn: "碗", example: "Pass me the bowl."},
          {en: "fork", phonetic: "/fɔːk/", cn: "叉子", example: "Use the fork."},
          {en: "knife", phonetic: "/naɪf/", cn: "刀", example: "Pass me the knife."},
          {en: "spoon", phonetic: "/spuːn/", cn: "勺子", example: "Use the spoon."},
          {en: "dinner", phonetic: "/ˈdɪnər/", cn: "晚餐", example: "Dinner's ready!"},
          {en: "ready", phonetic: "/ˈredi/", cn: "准备好", example: "Are you ready?"}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Meet my family",
        words: [
          {en: "family", phonetic: "/ˈfæməli/", cn: "家庭", example: "Meet my family."},
          {en: "parents", phonetic: "/ˈpeərənts/", cn: "父母", example: "These are my parents."},
          {en: "uncle", phonetic: "/ˈʌŋkl/", cn: "叔叔", example: "This is my uncle."},
          {en: "aunt", phonetic: "/ɑːnt/", cn: "阿姨", example: "That is my aunt."},
          {en: "baby", phonetic: "/ˈbeɪbi/", cn: "婴儿", example: "The baby is cute."},
          {en: "cousin", phonetic: "/ˈkʌzn/", cn: "堂兄弟", example: "He's my cousin."},
          {en: "doctor", phonetic: "/ˈdɒktər/", cn: "医生", example: "My uncle is a doctor."},
          {en: "cook", phonetic: "/kʊk/", cn: "厨师", example: "My aunt is a cook."},
          {en: "driver", phonetic: "/ˈdraɪvər/", cn: "司机", example: "He's a driver."},
          {en: "farmer", phonetic: "/ˈfɑːmər/", cn: "农民", example: "My grandpa is a farmer."},
          {en: "nurse", phonetic: "/nɜːs/", cn: "护士", example: "She's a nurse."}
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
          {en: "first", phonetic: "/fɜːst/", cn: "第一", example: "The first day."},
          {en: "second", phonetic: "/ˈsekənd/", cn: "第二", example: "The second floor."},
          {en: "third", phonetic: "/θɜːd/", cn: "第三", example: "The third grade."},
          {en: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆", example: "Go to the library."},
          {en: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", example: "Play on the playground."},
          {en: "art", phonetic: "/ɑːt/", cn: "美术", example: "I like art."},
          {en: "music", phonetic: "/ˈmjuːzɪk/", cn: "音乐", example: "I like music."},
          {en: "computer room", phonetic: "/kəmˈpjuːtə ruːm/", cn: "电脑室", example: "Go to the computer room."},
          {en: "homework", phonetic: "/ˈhəʊmwɜːk/", cn: "作业", example: "Do your homework."},
          {en: "class", phonetic: "/klɑːs/", cn: "课", example: "I have a class."},
          {en: "forty", phonetic: "/ˈfɔːti/", cn: "四十", example: "There are forty students."},
          {en: "way", phonetic: "/weɪ/", cn: "方向", example: "This way, please."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 What time is it?",
        words: [
          {en: "breakfast", phonetic: "/ˈbrekfəst/", cn: "早餐", example: "Have breakfast."},
          {en: "lunch", phonetic: "/lʌntʃ/", cn: "午餐", example: "Have lunch."},
          {en: "dinner", phonetic: "/ˈdɪnər/", cn: "晚餐", example: "Have dinner."},
          {en: "English class", phonetic: "/ˈɪŋɡlɪʃ klɑːs/", cn: "英语课", example: "It's time for English class."},
          {en: "music class", phonetic: "/ˈmjuːzɪk klɑːs/", cn: "音乐课", example: "It's time for music class."},
          {en: "PE class", phonetic: "/ˌpiː ˈiː klɑːs/", cn: "体育课", example: "It's time for PE class."},
          {en: "get up", phonetic: "/ɡet ʌp/", cn: "起床", example: "Time to get up."},
          {en: "go to school", phonetic: "/ɡəʊ tuː skuːl/", cn: "去上学", example: "Let's go to school."},
          {en: "go home", phonetic: "/ɡəʊ həʊm/", cn: "回家", example: "Time to go home."},
          {en: "go to bed", phonetic: "/ɡəʊ tuː bed/", cn: "上床睡觉", example: "Time to go to bed."},
          {en: "over", phonetic: "/ˈəʊvər/", cn: "结束", example: "School is over."},
          {en: "now", phonetic: "/naʊ/", cn: "现在", example: "What time is it now?"},
          {en: "o'clock", phonetic: "/əˈklɒk/", cn: "点钟", example: "It's 3 o'clock."},
          {en: "kid", phonetic: "/kɪd/", cn: "小孩", example: "Hurry up, kids!"}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Weather",
        words: [
          {en: "cold", phonetic: "/kəʊld/", cn: "冷的", example: "It's cold today."},
          {en: "cool", phonetic: "/kuːl/", cn: "凉爽的", example: "It's cool."},
          {en: "warm", phonetic: "/wɔːm/", cn: "温暖的", example: "It's warm."},
          {en: "hot", phonetic: "/hɒt/", cn: "热的", example: "It's hot today."},
          {en: "sunny", phonetic: "/ˈsʌni/", cn: "晴朗的", example: "It's sunny."},
          {en: "windy", phonetic: "/ˈwɪndi/", cn: "有风的", example: "It's windy."},
          {en: "cloudy", phonetic: "/ˈklaʊdi/", cn: "多云的", example: "It's cloudy."},
          {en: "snowy", phonetic: "/ˈsnəʊi/", cn: "下雪的", example: "It's snowy."},
          {en: "rainy", phonetic: "/ˈreɪni/", cn: "下雨的", example: "It's rainy."},
          {en: "outside", phonetic: "/ˌaʊtˈsaɪd/", cn: "外面", example: "Can I go outside?"},
          {en: "be careful", phonetic: "/biː ˈkeəfl/", cn: "小心", example: "Be careful!"},
          {en: "weather", phonetic: "/ˈweðər/", cn: "天气", example: "What's the weather like?"}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 At the farm",
        words: [
          {en: "tomato", phonetic: "/təˈmɑːtəʊ/", cn: "西红柿", example: "I like tomatoes."},
          {en: "potato", phonetic: "/pəˈteɪtəʊ/", cn: "土豆", example: "These are potatoes."},
          {en: "green beans", phonetic: "/ɡriːn biːnz/", cn: "豆角", example: "I like green beans."},
          {en: "carrot", phonetic: "/ˈkærət/", cn: "胡萝卜", example: "The rabbit likes carrots."},
          {en: "horse", phonetic: "/hɔːs/", cn: "马", example: "Ride a horse."},
          {en: "cow", phonetic: "/kaʊ/", cn: "奶牛", example: "Milk a cow."},
          {en: "sheep", phonetic: "/ʃiːp/", cn: "绵羊", example: "The sheep is white."},
          {en: "hen", phonetic: "/hen/", cn: "母鸡", example: "Feed the hens."},
          {en: "these", phonetic: "/ðiːz/", cn: "这些", example: "What are these?"},
          {en: "those", phonetic: "/ðəʊz/", cn: "那些", example: "What are those?"},
          {en: "yum", phonetic: "/jʌm/", cn: "好吃", example: "Yum! It's tasty."},
          {en: "animal", phonetic: "/ˈænɪml/", cn: "动物", example: "I like animals."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 My clothes",
        words: [
          {en: "clothes", phonetic: "/kləʊðz/", cn: "衣服", example: "I like my clothes."},
          {en: "pants", phonetic: "/pænts/", cn: "裤子", example: "These are my pants."},
          {en: "hat", phonetic: "/hæt/", cn: "帽子", example: "Put on your hat."},
          {en: "dress", phonetic: "/dres/", cn: "连衣裙", example: "I like this dress."},
          {en: "skirt", phonetic: "/skɜːt/", cn: "女裙", example: "This is my skirt."},
          {en: "coat", phonetic: "/kəʊt/", cn: "外套", example: "Put on your coat."},
          {en: "sweater", phonetic: "/ˈswetər/", cn: "毛衣", example: "Wear a sweater."},
          {en: "sock", phonetic: "/sɒk/", cn: "短袜", example: "Put on your socks."},
          {en: "shorts", phonetic: "/ʃɔːts/", cn: "短裤", example: "These are my shorts."},
          {en: "jacket", phonetic: "/ˈdʒækɪt/", cn: "夹克衫", example: "Wear a jacket."},
          {en: "shirt", phonetic: "/ʃɜːt/", cn: "衬衫", example: "This is my shirt."},
          {en: "yours", phonetic: "/jɔːz/", cn: "你的", example: "Are these yours?"},
          {en: "mine", phonetic: "/maɪn/", cn: "我的", example: "This is mine."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Shopping",
        words: [
          {en: "glove", phonetic: "/ɡlʌv/", cn: "手套", example: "Try on the gloves."},
          {en: "scarf", phonetic: "/skɑːf/", cn: "围巾", example: "The scarf is pretty."},
          {en: "umbrella", phonetic: "/ʌmˈbrelə/", cn: "雨伞", example: "Take an umbrella."},
          {en: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", cn: "太阳镜", example: "Wear sunglasses."},
          {en: "expensive", phonetic: "/ɪkˈspensɪv/", cn: "昂贵的", example: "It's too expensive."},
          {en: "cheap", phonetic: "/tʃiːp/", cn: "便宜的", example: "It's cheap."},
          {en: "nice", phonetic: "/naɪs/", cn: "好看的", example: "It's very nice."},
          {en: "pretty", phonetic: "/ˈprɪti/", cn: "美观的", example: "How pretty!"},
          {en: "how much", phonetic: "/haʊ mʌtʃ/", cn: "多少钱", example: "How much is it?"},
          {en: "dollar", phonetic: "/ˈdɒlər/", cn: "美元", example: "It's ten dollars."}
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
          {en: "old", phonetic: "/əʊld/", cn: "老的", example: "My grandpa is old."},
          {en: "young", phonetic: "/jʌŋ/", cn: "年轻的", example: "She is young."},
          {en: "funny", phonetic: "/ˈfʌni/", cn: "滑稽的", example: "He is funny."},
          {en: "kind", phonetic: "/kaɪnd/", cn: "慈祥的", example: "She is kind."},
          {en: "strict", phonetic: "/strɪkt/", cn: "严格的", example: "He is strict."},
          {en: "polite", phonetic: "/pəˈlaɪt/", cn: "有礼貌的", example: "Be polite."},
          {en: "helpful", phonetic: "/ˈhelpfl/", cn: "有用的", example: "He is helpful."},
          {en: "clever", phonetic: "/ˈklevər/", cn: "聪明的", example: "She is clever."},
          {en: "shy", phonetic: "/ʃaɪ/", cn: "羞怯的", example: "She is shy."},
          {en: "know", phonetic: "/nəʊ/", cn: "知道", example: "I know him."},
          {en: "our", phonetic: "/ˈaʊər/", cn: "我们的", example: "This is our teacher."},
          {en: "Ms", phonetic: "/mɪz/", cn: "女士", example: "Ms Wang is kind."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My week",
        words: [
          {en: "Monday", phonetic: "/ˈmʌndeɪ/", cn: "星期一", example: "I have English on Monday."},
          {en: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", cn: "星期二", example: "What do you do on Tuesday?"},
          {en: "Wednesday", phonetic: "/ˈwenzdeɪ/", cn: "星期三", example: "I play football on Wednesday."},
          {en: "Thursday", phonetic: "/ˈθɜːzdeɪ/", cn: "星期四", example: "I read books on Thursday."},
          {en: "Friday", phonetic: "/ˈfraɪdeɪ/", cn: "星期五", example: "I have art on Friday."},
          {en: "Saturday", phonetic: "/ˈsætədeɪ/", cn: "星期六", example: "I watch TV on Saturday."},
          {en: "Sunday", phonetic: "/ˈsʌndeɪ/", cn: "星期日", example: "I play games on Sunday."},
          {en: "weekend", phonetic: "/ˌwiːkˈend/", cn: "周末", example: "What do you do on the weekend?"},
          {en: "wash", phonetic: "/wɒʃ/", cn: "洗", example: "I wash my clothes."},
          {en: "watch", phonetic: "/wɒtʃ/", cn: "看", example: "I watch TV."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 What would you like?",
        words: [
          {en: "sandwich", phonetic: "/ˈsænwɪtʃ/", cn: "三明治", example: "I'd like a sandwich."},
          {en: "salad", phonetic: "/ˈsæləd/", cn: "沙拉", example: "Have some salad."},
          {en: "hamburger", phonetic: "/ˈhæmbɜːɡər/", cn: "汉堡包", example: "I like hamburgers."},
          {en: "ice cream", phonetic: "/ˌaɪs ˈkriːm/", cn: "冰淇淋", example: "I love ice cream."},
          {en: "tea", phonetic: "/tiː/", cn: "茶", example: "Drink some tea."},
          {en: "fresh", phonetic: "/freʃ/", cn: "新鲜的", example: "The fruit is fresh."},
          {en: "healthy", phonetic: "/ˈhelθi/", cn: "健康的", example: "Vegetables are healthy."},
          {en: "delicious", phonetic: "/dɪˈlɪʃəs/", cn: "美味的", example: "The food is delicious."},
          {en: "hot", phonetic: "/hɒt/", cn: "辣的", example: "The soup is hot."},
          {en: "sweet", phonetic: "/swiːt/", cn: "甜的", example: "The cake is sweet."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 What can you do?",
        words: [
          {en: "sing", phonetic: "/sɪŋ/", cn: "唱", example: "I can sing English songs."},
          {en: "song", phonetic: "/sɒŋ/", cn: "歌曲", example: "Sing a song."},
          {en: "dance", phonetic: "/dɑːns/", cn: "跳舞", example: "I can dance."},
          {en: "draw", phonetic: "/drɔː/", cn: "画", example: "I can draw cartoons."},
          {en: "cartoon", phonetic: "/kɑːˈtuːn/", cn: "漫画", example: "Draw a cartoon."},
          {en: "cook", phonetic: "/kʊk/", cn: "烹饪", example: "I can cook."},
          {en: "swim", phonetic: "/swɪm/", cn: "游泳", example: "I can swim."},
          {en: "play basketball", phonetic: "/pleɪ ˈbɑːskɪtbɔːl/", cn: "打篮球", example: "I can play basketball."},
          {en: "play ping-pong", phonetic: "/pleɪ ˈpɪŋ pɒŋ/", cn: "打乒乓球", example: "I can play ping-pong."},
          {en: "speak English", phonetic: "/spiːk ˈɪŋɡlɪʃ/", cn: "说英语", example: "I can speak English."},
          {en: "learn", phonetic: "/lɜːn/", cn: "学习", example: "I want to learn."},
          {en: "any", phonetic: "/ˈeni/", cn: "任何的", example: "Can you do any kung fu?"}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 There is a big bed",
        words: [
          {en: "clock", phonetic: "/klɒk/", cn: "时钟", example: "There is a clock."},
          {en: "plant", phonetic: "/plɑːnt/", cn: "植物", example: "Water the plant."},
          {en: "bottle", phonetic: "/ˈbɒtl/", cn: "瓶子", example: "A water bottle."},
          {en: "water bottle", phonetic: "/ˈwɔːtər ˈbɒtl/", cn: "水瓶", example: "I have a water bottle."},
          {en: "bike", phonetic: "/baɪk/", cn: "自行车", example: "Ride a bike."},
          {en: "photo", phonetic: "/ˈfəʊtəʊ/", cn: "照片", example: "Look at the photo."},
          {en: "in front of", phonetic: "/ɪn frʌnt ɒv/", cn: "在...前面", example: "The tree is in front of the house."},
          {en: "beside", phonetic: "/bɪˈsaɪd/", cn: "在旁边", example: "The cat is beside the dog."},
          {en: "between", phonetic: "/bɪˈtwiːn/", cn: "在中间", example: "The ball is between the boxes."},
          {en: "behind", phonetic: "/bɪˈhaɪnd/", cn: "在后面", example: "The tree is behind the house."},
          {en: "above", phonetic: "/əˈbʌv/", cn: "在上面", example: "The picture is above the bed."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 In a nature park",
        words: [
          {en: "forest", phonetic: "/ˈfɒrɪst/", cn: "森林", example: "There is a forest."},
          {en: "river", phonetic: "/ˈrɪvər/", cn: "河流", example: "There is a river."},
          {en: "lake", phonetic: "/leɪk/", cn: "湖泊", example: "There is a lake."},
          {en: "mountain", phonetic: "/ˈmaʊntən/", cn: "高山", example: "There is a mountain."},
          {en: "hill", phonetic: "/hɪl/", cn: "小山", example: "There is a hill."},
          {en: "tree", phonetic: "/triː/", cn: "树", example: "There are many trees."},
          {en: "bridge", phonetic: "/brɪdʒ/", cn: "桥", example: "There is a bridge."},
          {en: "building", phonetic: "/ˈbɪldɪŋ/", cn: "建筑物", example: "There is a tall building."},
          {en: "village", phonetic: "/ˈvɪlɪdʒ/", cn: "村庄", example: "There is a village."},
          {en: "house", phonetic: "/haʊs/", cn: "房子", example: "There is a house."},
          {en: "boating", phonetic: "/ˈbəʊtɪŋ/", cn: "划船", example: "Go boating."},
          {en: "go boating", phonetic: "/ɡəʊ ˈbəʊtɪŋ/", cn: "去划船", example: "Let's go boating."}
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
          {en: "eat breakfast", phonetic: "/iːt ˈbrekfəst/", cn: "吃早饭", example: "I eat breakfast at 7."},
          {en: "have class", phonetic: "/hæv klɑːs/", cn: "上课", example: "I have English class."},
          {en: "play sports", phonetic: "/pleɪ spɔːts/", cn: "做运动", example: "I play sports."},
          {en: "eat dinner", phonetic: "/iːt ˈdɪnər/", cn: "吃晚饭", example: "I eat dinner at 6."},
          {en: "clean", phonetic: "/kliːn/", cn: "打扫", example: "Clean the room."},
          {en: "go shopping", phonetic: "/ɡəʊ ˈʃɒpɪŋ/", cn: "购物", example: "Go shopping."},
          {en: "take", phonetic: "/teɪk/", cn: "学习", example: "Take a dancing class."},
          {en: "dancing", phonetic: "/ˈdɑːnsɪŋ/", cn: "跳舞", example: "I like dancing."},
          {en: "when", phonetic: "/wen/", cn: "什么时候", example: "When do you get up?"},
          {en: "after", phonetic: "/ˈɑːftər/", cn: "在...之后", example: "After school."},
          {en: "start", phonetic: "/stɑːt/", cn: "开始", example: "Classes start at 8."},
          {en: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常", example: "I usually get up early."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My favourite season",
        words: [
          {en: "spring", phonetic: "/sprɪŋ/", cn: "春天", example: "I like spring."},
          {en: "summer", phonetic: "/ˈsʌmər/", cn: "夏天", example: "I like summer."},
          {en: "autumn", phonetic: "/ˈɔːtəm/", cn: "秋天", example: "I like autumn."},
          {en: "winter", phonetic: "/ˈwɪntər/", cn: "冬天", example: "I like winter."},
          {en: "season", phonetic: "/ˈsiːzn/", cn: "季节", example: "What's your favourite season?"},
          {en: "pick", phonetic: "/pɪk/", cn: "采摘", example: "Pick apples."},
          {en: "snow", phonetic: "/snəʊ/", cn: "雪", example: "Play in the snow."},
          {en: "good job", phonetic: "/ɡʊd dʒɒb/", cn: "做得好", example: "Good job!"},
          {en: "because", phonetic: "/bɪˈkɒz/", cn: "因为", example: "Because I like swimming."},
          {en: "vacation", phonetic: "/vəˈkeɪʃn/", cn: "假期", example: "Summer vacation."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My school calendar",
        words: [
          {en: "January", phonetic: "/ˈdʒænjuəri/", cn: "一月", example: "My birthday is in January."},
          {en: "February", phonetic: "/ˈfebruəri/", cn: "二月", example: "February is short."},
          {en: "March", phonetic: "/mɑːtʃ/", cn: "三月", example: "Tree Planting Day is in March."},
          {en: "April", phonetic: "/ˈeɪprəl/", cn: "四月", example: "Easter is in April."},
          {en: "May", phonetic: "/meɪ/", cn: "五月", example: "May Day is in May."},
          {en: "June", phonetic: "/dʒuːn/", cn: "六月", example: "Children's Day is in June."},
          {en: "July", phonetic: "/dʒuˈlaɪ/", cn: "七月", example: "Summer vacation is in July."},
          {en: "August", phonetic: "/ˈɔːɡəst/", cn: "八月", example: "August is hot."},
          {en: "September", phonetic: "/sepˈtembər/", cn: "九月", example: "School starts in September."},
          {en: "October", phonetic: "/ɒkˈtəʊbər/", cn: "十月", example: "National Day is in October."},
          {en: "November", phonetic: "/nəʊˈvembər/", cn: "十一月", example: "November is cool."},
          {en: "December", phonetic: "/dɪˈsembər/", cn: "十二月", example: "Christmas is in December."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 When is Easter?",
        words: [
          {en: "first", phonetic: "/fɜːst/", cn: "第一", example: "The first of June."},
          {en: "second", phonetic: "/ˈsekənd/", cn: "第二", example: "The second month."},
          {en: "third", phonetic: "/θɜːd/", cn: "第三", example: "The third day."},
          {en: "fourth", phonetic: "/fɔːθ/", cn: "第四", example: "The fourth floor."},
          {en: "fifth", phonetic: "/fɪfθ/", cn: "第五", example: "The fifth lesson."},
          {en: "twelfth", phonetic: "/twelfθ/", cn: "第十二", example: "The twelfth month."},
          {en: "twentieth", phonetic: "/ˈtwentiəθ/", cn: "第二十", example: "The twentieth day."},
          {en: "twenty-first", phonetic: "/ˌtwenti ˈfɜːst/", cn: "第二十一", example: "The twenty-first of May."},
          {en: "twenty-third", phonetic: "/ˌtwenti θɜːd/", cn: "第二十三", example: "The twenty-third of August."},
          {en: "thirtieth", phonetic: "/ˈθɜːtiəθ/", cn: "第三十", example: "The thirtieth of April."},
          {en: "special", phonetic: "/ˈspeʃl/", cn: "特殊的", example: "A special day."},
          {en: "fool", phonetic: "/fuːl/", cn: "蠢人", example: "April Fool's Day."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Whose dog is it?",
        words: [
          {en: "mine", phonetic: "/maɪn/", cn: "我的", example: "The book is mine."},
          {en: "yours", phonetic: "/jɔːz/", cn: "你的", example: "Is this yours?"},
          {en: "his", phonetic: "/hɪz/", cn: "他的", example: "The pen is his."},
          {en: "hers", phonetic: "/hɜːz/", cn: "她的", example: "The bag is hers."},
          {en: "theirs", phonetic: "/ðeəz/", cn: "他们的", example: "The house is theirs."},
          {en: "ours", phonetic: "/ˈaʊəz/", cn: "我们的", example: "The classroom is ours."},
          {en: "climbing", phonetic: "/ˈklaɪmɪŋ/", cn: "攀爬", example: "The monkey is climbing."},
          {en: "eating", phonetic: "/ˈiːtɪŋ/", cn: "吃", example: "The rabbit is eating."},
          {en: "playing", phonetic: "/ˈpleɪɪŋ/", cn: "玩耍", example: "The dog is playing."},
          {en: "jumping", phonetic: "/ˈdʒʌmpɪŋ/", cn: "跳", example: "The cat is jumping."},
          {en: "drinking", phonetic: "/ˈdrɪŋkɪŋ/", cn: "喝", example: "The elephant is drinking."},
          {en: "sleeping", phonetic: "/ˈsliːpɪŋ/", cn: "睡觉", example: "The bear is sleeping."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Work quietly!",
        words: [
          {en: "doing morning exercises", phonetic: "/ˈduːɪŋ ˈmɔːnɪŋ ˈeksəsaɪzɪz/", cn: "做早操", example: "We are doing morning exercises."},
          {en: "having class", phonetic: "/ˈhævɪŋ klɑːs/", cn: "上课", example: "We are having class."},
          {en: "eating lunch", phonetic: "/ˈiːtɪŋ lʌntʃ/", cn: "吃午饭", example: "We are eating lunch."},
          {en: "reading a book", phonetic: "/ˈriːdɪŋ ə bʊk/", cn: "看书", example: "She is reading a book."},
          {en: "listening to music", phonetic: "/ˈlɪsənɪŋ tuː ˈmjuːzɪk/", cn: "听音乐", example: "He is listening to music."},
          {en: "keep", phonetic: "/kiːp/", cn: "保持", example: "Keep to the right."},
          {en: "keep to the right", phonetic: "/kiːp tuː ðə raɪt/", cn: "靠右", example: "Keep to the right."},
          {en: "turn", phonetic: "/tɜːn/", cn: "顺序", example: "Take turns."},
          {en: "take turns", phonetic: "/teɪk tɜːnz/", cn: "轮流", example: "Please take turns."},
          {en: "bamboo", phonetic: "/bæmˈbuː/", cn: "竹子", example: "The panda is eating bamboo."},
          {en: "its", phonetic: "/ɪts/", cn: "它的", example: "The monkey is eating its banana."},
          {en: "show", phonetic: "/ʃəʊ/", cn: "给人看", example: "Show me your book."},
          {en: "anything", phonetic: "/ˈeniθɪŋ/", cn: "任何事情", example: "Is there anything else?"},
          {en: "else", phonetic: "/els/", cn: "另外", example: "What else do you see?"},
          {en: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", cn: "展览", example: "There is a world robot exhibition."},
          {en: "say", phonetic: "/seɪ/", cn: "说", example: "Please say something."}
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
          {en: "science museum", phonetic: "/ˈsaɪəns mjuːˈziːəm/", cn: "科学博物馆", example: "Where is the science museum?"},
          {en: "post office", phonetic: "/pəʊst ˈɒfɪs/", cn: "邮局", example: "Is there a post office near here?"},
          {en: "bookstore", phonetic: "/ˈbʊkstɔːr/", cn: "书店", example: "I want to go to the bookstore."},
          {en: "cinema", phonetic: "/ˈsɪnəmə/", cn: "电影院", example: "Let's go to the cinema."},
          {en: "hospital", phonetic: "/ˈhɒspɪtl/", cn: "医院", example: "The hospital is near the park."},
          {en: "crossing", phonetic: "/ˈkrɒsɪŋ/", cn: "十字路口", example: "Turn left at the crossing."},
          {en: "turn", phonetic: "/tɜːn/", cn: "转弯", example: "Turn right here."},
          {en: "left", phonetic: "/left/", cn: "左", example: "Turn left."},
          {en: "straight", phonetic: "/streɪt/", cn: "笔直地", example: "Go straight."},
          {en: "right", phonetic: "/raɪt/", cn: "右", example: "Turn right."},
          {en: "ask", phonetic: "/ɑːsk/", cn: "问", example: "Ask the policeman."},
          {en: "sir", phonetic: "/sɜːr/", cn: "先生", example: "Excuse me, sir."},
          {en: "interesting", phonetic: "/ˈɪntrəstɪŋ/", cn: "有趣的", example: "That's interesting."},
          {en: "Italian", phonetic: "/ɪˈtæliən/", cn: "意大利的", example: "I like Italian food."},
          {en: "restaurant", phonetic: "/ˈrestrɒnt/", cn: "餐馆", example: "Let's go to the restaurant."},
          {en: "pizza", phonetic: "/ˈpiːtsə/", cn: "比萨饼", example: "I want some pizza."},
          {en: "street", phonetic: "/striːt/", cn: "街道", example: "It's on Dongfang Street."},
          {en: "get", phonetic: "/ɡet/", cn: "到达", example: "How can I get there?"},
          {en: "GPS", phonetic: "/ˌdʒiː piː ˈes/", cn: "导航", example: "Use the GPS."},
          {en: "gave", phonetic: "/ɡeɪv/", cn: "提供（give的过去式）", example: "He gave me a book."},
          {en: "feature", phonetic: "/ˈfiːtʃər/", cn: "特点", example: "What are the features?"},
          {en: "follow", phonetic: "/ˈfɒləʊ/", cn: "跟随", example: "Follow me."},
          {en: "far", phonetic: "/fɑːr/", cn: "远的", example: "Is it far?"},
          {en: "tell", phonetic: "/tel/", cn: "告诉", example: "Can you tell me the way?"}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Ways to go to school",
        words: [
          {en: "on foot", phonetic: "/ɒn fʊt/", cn: "步行", example: "I go to school on foot."},
          {en: "by", phonetic: "/baɪ/", cn: "乘", example: "I go by bus."},
          {en: "bus", phonetic: "/bʌs/", cn: "公共汽车", example: "Take the No. 57 bus."},
          {en: "plane", phonetic: "/pleɪn/", cn: "飞机", example: "I go by plane."},
          {en: "taxi", phonetic: "/ˈtæksi/", cn: "出租汽车", example: "Let's go by taxi."},
          {en: "ship", phonetic: "/ʃɪp/", cn: "船", example: "I go by ship."},
          {en: "subway", phonetic: "/ˈsʌbweɪ/", cn: "地铁", example: "I go by subway."},
          {en: "train", phonetic: "/treɪn/", cn: "火车", example: "I go by train."},
          {en: "slow", phonetic: "/sləʊ/", cn: "慢的", example: "The bus is slow."},
          {en: "down", phonetic: "/daʊn/", cn: "减少；降低", example: "Slow down."},
          {en: "slow down", phonetic: "/sləʊ daʊn/", cn: "慢下来", example: "Slow down and stop."},
          {en: "stop", phonetic: "/stɒp/", cn: "停下", example: "Stop at a red light."},
          {en: "wait", phonetic: "/weɪt/", cn: "等待", example: "Wait at a yellow light."},
          {en: "go", phonetic: "/ɡəʊ/", cn: "走", example: "Go at a green light."},
          {en: "traffic lights", phonetic: "/ˈtræfɪk laɪts/", cn: "交通信号灯", example: "Look at the traffic lights."},
          {en: "helmet", phonetic: "/ˈhelmɪt/", cn: "头盔", example: "Wear a helmet."},
          {en: "must", phonetic: "/mʌst/", cn: "必须", example: "You must wear a helmet."},
          {en: "attention", phonetic: "/əˈtenʃn/", cn: "注意", example: "Pay attention to the traffic lights."},
          {en: "pay attention to", phonetic: "/peɪ əˈtenʃn tuː/", cn: "注意", example: "Pay attention to the cars."},
          {en: "traffic", phonetic: "/ˈtræfɪk/", cn: "交通", example: "There is heavy traffic."},
          {en: "sled", phonetic: "/sled/", cn: "雪橇", example: "Some kids go to school by sled."},
          {en: "fast", phonetic: "/fɑːst/", cn: "快的", example: "The train is fast."},
          {en: "ferry", phonetic: "/ˈferi/", cn: "轮渡", example: "Some kids go by ferry."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My weekend plan",
        words: [
          {en: "visit", phonetic: "/ˈvɪzɪt/", cn: "拜访", example: "I'm going to visit my grandparents."},
          {en: "film", phonetic: "/fɪlm/", cn: "电影", example: "I'm going to see a film."},
          {en: "see a film", phonetic: "/siː ə fɪlm/", cn: "看电影", example: "Let's see a film."},
          {en: "trip", phonetic: "/trɪp/", cn: "旅行", example: "I'm going to take a trip."},
          {en: "take a trip", phonetic: "/teɪk ə trɪp/", cn: "去旅行", example: "I'm going to take a trip."},
          {en: "supermarket", phonetic: "/ˈsuːpəmɑːkɪt/", cn: "超市", example: "I'm going to the supermarket."},
          {en: "evening", phonetic: "/ˈiːvnɪŋ/", cn: "晚上", example: "What are you going to do this evening?"},
          {en: "tonight", phonetic: "/təˈnaɪt/", cn: "在今晚", example: "What are you going to do tonight?"},
          {en: "tomorrow", phonetic: "/təˈmɒrəʊ/", cn: "明天", example: "What are you going to do tomorrow?"},
          {en: "next week", phonetic: "/nekst wiːk/", cn: "下周", example: "I'm going to Beijing next week."},
          {en: "dictionary", phonetic: "/ˈdɪkʃənri/", cn: "词典", example: "I want to buy a dictionary."},
          {en: "comic book", phonetic: "/ˈkɒmɪk bʊk/", cn: "漫画书", example: "I'm going to buy a comic book."},
          {en: "word book", phonetic: "/wɜːd bʊk/", cn: "单词书", example: "I'm going to buy a word book."},
          {en: "postcard", phonetic: "/ˈpəʊstkɑːd/", cn: "明信片", example: "I'm going to buy a postcard."},
          {en: "lesson", phonetic: "/ˈlesn/", cn: "课", example: "I have a lesson."},
          {en: "space", phonetic: "/speɪs/", cn: "太空", example: "I'm going to space."},
          {en: "travel", phonetic: "/ˈtrævl/", cn: "旅行", example: "I love to travel."},
          {en: "half price", phonetic: "/hɑːf praɪs/", cn: "半价", example: "The ticket is half price."},
          {en: "moon", phonetic: "/muːn/", cn: "月亮", example: "I'm going to the moon."},
          {en: "star", phonetic: "/stɑːr/", cn: "星星", example: "Look at the stars."},
          {en: "get together", phonetic: "/ɡet təˈɡeðər/", cn: "聚会", example: "We are going to get together."},
          {en: "poem", phonetic: "/ˈpəʊɪm/", cn: "诗", example: "I'm going to read a poem."},
          {en: "mooncake", phonetic: "/ˈmuːnkeɪk/", cn: "月饼", example: "I'm going to eat mooncakes."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 I have a pen pal",
        words: [
          {en: "studies", phonetic: "/ˈstʌdiz/", cn: "学习（第三人称单数）", example: "He studies Chinese."},
          {en: "puzzle", phonetic: "/ˈpʌzl/", cn: "谜", example: "I like doing word puzzles."},
          {en: "hiking", phonetic: "/ˈhaɪkɪŋ/", cn: "远足", example: "I like going hiking."},
          {en: "hobby", phonetic: "/ˈhɒbi/", cn: "业余爱好", example: "What's your hobby?"},
          {en: "jasmine", phonetic: "/ˈdʒæzmɪn/", cn: "茉莉", example: "Her name is Jasmine."},
          {en: "idea", phonetic: "/aɪˈdɪə/", cn: "想法", example: "That's a good idea."},
          {en: "Canberra", phonetic: "/ˈkænbərə/", cn: "堪培拉", example: "Canberra is the capital of Australia."},
          {en: "amazing", phonetic: "/əˈmeɪzɪŋ/", cn: "令人惊奇的", example: "That's amazing!"},
          {en: "shall", phonetic: "/ʃæl/", cn: "表示征求意见", example: "Shall we go?"},
          {en: "goal", phonetic: "/ɡəʊl/", cn: "射门", example: "He scores a goal."},
          {en: "join", phonetic: "/dʒɔɪn/", cn: "加入", example: "Can I join you?"},
          {en: "club", phonetic: "/klʌb/", cn: "俱乐部", example: "I want to join the football club."},
          {en: "share", phonetic: "/ʃeər/", cn: "分享", example: "We can share."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 What does he do?",
        words: [
          {en: "factory worker", phonetic: "/ˈfæktri ˈwɜːkər/", cn: "工厂工人", example: "My father is a factory worker."},
          {en: "postman", phonetic: "/ˈpəʊstmən/", cn: "邮递员", example: "He is a postman."},
          {en: "businessman", phonetic: "/ˈbɪznəsmæn/", cn: "商人", example: "He is a businessman."},
          {en: "police officer", phonetic: "/pəˈliːs ˈɒfɪsər/", cn: "警察", example: "My uncle is a police officer."},
          {en: "fisherman", phonetic: "/ˈfɪʃəmən/", cn: "渔民", example: "He is a fisherman."},
          {en: "scientist", phonetic: "/ˈsaɪəntɪst/", cn: "科学家", example: "She is a scientist."},
          {en: "pilot", phonetic: "/ˈpaɪlət/", cn: "飞行员", example: "He is a pilot."},
          {en: "coach", phonetic: "/kəʊtʃ/", cn: "教练", example: "My father is a coach."},
          {en: "country", phonetic: "/ˈkʌntri/", cn: "国家", example: "He works in another country."},
          {en: "head teacher", phonetic: "/hed ˈtiːtʃər/", cn: "校长", example: "She is a head teacher."},
          {en: "sea", phonetic: "/siː/", cn: "大海", example: "He works at sea."},
          {en: "stay", phonetic: "/steɪ/", cn: "保持", example: "Stay healthy."},
          {en: "university", phonetic: "/ˌjuːnɪˈvɜːsəti/", cn: "大学", example: "She works at a university."},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "He works in a gym."},
          {en: "if", phonetic: "/ɪf/", cn: "如果", example: "If you like sports..."},
          {en: "reporter", phonetic: "/rɪˈpɔːtər/", cn: "记者", example: "She is a reporter."},
          {en: "use", phonetic: "/juːz/", cn: "使用", example: "I use a computer."},
          {en: "type", phonetic: "/taɪp/", cn: "打字", example: "I type quickly."},
          {en: "quickly", phonetic: "/ˈkwɪkli/", cn: "迅速地", example: "I type quickly."},
          {en: "secretary", phonetic: "/ˈsekrətri/", cn: "秘书", example: "She is a secretary."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 How do you feel?",
        words: [
          {en: "angry", phonetic: "/ˈæŋɡri/", cn: "生气的", example: "The cat is angry with them."},
          {en: "afraid", phonetic: "/əˈfreɪd/", cn: "害怕", example: "The cat is afraid."},
          {en: "sad", phonetic: "/sæd/", cn: "难过的", example: "Sarah is sad."},
          {en: "worried", phonetic: "/ˈwʌrid/", cn: "担心的", example: "The cat is worried."},
          {en: "happy", phonetic: "/ˈhæpi/", cn: "高兴的", example: "The cat is happy."},
          {en: "ill", phonetic: "/ɪl/", cn: "有病", example: "The cat is ill."},
          {en: "wrong", phonetic: "/rɒŋ/", cn: "有毛病", example: "What's wrong?"},
          {en: "see a doctor", phonetic: "/siː ə ˈdɒktər/", cn: "看病", example: "You should see a doctor."},
          {en: "take a deep breath", phonetic: "/teɪk ə diːp breθ/", cn: "深深吸一口气", example: "Take a deep breath."},
          {en: "count to ten", phonetic: "/kaʊnt tuː ten/", cn: "数到十", example: "Count to ten."},
          {en: "wear", phonetic: "/weər/", cn: "穿", example: "Wear warm clothes."},
          {en: "more", phonetic: "/mɔːr/", cn: "更多的", example: "Do more exercise."},
          {en: "deep", phonetic: "/diːp/", cn: "深的", example: "Take a deep breath."},
          {en: "breath", phonetic: "/breθ/", cn: "呼吸", example: "Take a deep breath."},
          {en: "count", phonetic: "/kaʊnt/", cn: "数数", example: "Count to ten."},
          {en: "chase", phonetic: "/tʃeɪs/", cn: "追赶", example: "Chase the mice."},
          {en: "mice", phonetic: "/maɪs/", cn: "老鼠（复数）", example: "The mice are bad."},
          {en: "bad", phonetic: "/bæd/", cn: "邪恶的", example: "The mice are bad."},
          {en: "hurt", phonetic: "/hɜːt/", cn: "受伤", example: "My foot hurts."},
          {en: "feel", phonetic: "/fiːl/", cn: "觉得", example: "How do you feel?"},
          {en: "should", phonetic: "/ʃʊd/", cn: "应该", example: "You should see a doctor."},
          {en: "sit", phonetic: "/sɪt/", cn: "坐", example: "Sit down, please."},
          {en: "grass", phonetic: "/ɡrɑːs/", cn: "草坪", example: "Don't sit on the grass."},
          {en: "hear", phonetic: "/hɪər/", cn: "听见", example: "I hear something."},
          {en: "ant", phonetic: "/ænt/", cn: "蚂蚁", example: "The ant is worried."},
          {en: "worry", phonetic: "/ˈwʌri/", cn: "担心", example: "Don't worry."},
          {en: "stuck", phonetic: "/stʌk/", cn: "陷住", example: "The ant is stuck."},
          {en: "mud", phonetic: "/mʌd/", cn: "泥", example: "The ant is stuck in the mud."},
          {en: "pull", phonetic: "/pʊl/", cn: "拉", example: "Pull Robin out of the mud."},
          {en: "everyone", phonetic: "/ˈevriwʌn/", cn: "每人", example: "Everyone is happy."}
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
          {en: "taller", phonetic: "/ˈtɔːlər/", cn: "更高的", example: "You are taller than me."},
          {en: "shorter", phonetic: "/ˈʃɔːrtər/", cn: "更矮的", example: "He is shorter than me."},
          {en: "stronger", phonetic: "/ˈstrɒŋɡər/", cn: "更强壮的", example: "The elephant is stronger."},
          {en: "older", phonetic: "/ˈəʊldər/", cn: "年龄更大的", example: "My brother is older than me."},
          {en: "younger", phonetic: "/ˈjʌŋɡər/", cn: "更年轻的", example: "My sister is younger than me."},
          {en: "bigger", phonetic: "/ˈbɪɡər/", cn: "更大的", example: "The sun is bigger."},
          {en: "smaller", phonetic: "/ˈsmɔːlər/", cn: "更小的", example: "The moon is smaller."},
          {en: "dinosaur", phonetic: "/ˈdaɪnəsɔːr/", cn: "恐龙", example: "Look at that dinosaur."},
          {en: "hall", phonetic: "/hɔːl/", cn: "大厅", example: "In the dining hall."},
          {en: "metre", phonetic: "/ˈmiːtər/", cn: "米", example: "I'm 1.6 metres tall."},
          {en: "than", phonetic: "/ðæn/", cn: "比", example: "You are older than me."},
          {en: "both", phonetic: "/bəʊθ/", cn: "两个都", example: "We are both students."},
          {en: "kilogram", phonetic: "/ˈkɪləɡræm/", cn: "千克", example: "I'm 40 kilograms."},
          {en: "countryside", phonetic: "/ˈkʌntrisaɪd/", cn: "乡村", example: "In the countryside."},
          {en: "lower", phonetic: "/ˈləʊər/", cn: "更低的", example: "The shadow is getting lower."},
          {en: "shadow", phonetic: "/ˈʃædəʊ/", cn: "影子", example: "Look at my shadow."},
          {en: "smarter", phonetic: "/ˈsmɑːtər/", cn: "更聪明的", example: "You are smarter than me."},
          {en: "become", phonetic: "/bɪˈkʌm/", cn: "开始变得", example: "The shadow becomes longer."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Last weekend",
        words: [
          {en: "cleaned", phonetic: "/kliːnd/", cn: "打扫（过去式）", example: "I cleaned my room."},
          {en: "stayed", phonetic: "/steɪd/", cn: "停留（过去式）", example: "I stayed at home."},
          {en: "washed", phonetic: "/wɒʃt/", cn: "洗（过去式）", example: "I washed my clothes."},
          {en: "watched", phonetic: "/wɒtʃt/", cn: "看（过去式）", example: "I watched TV."},
          {en: "had", phonetic: "/hæd/", cn: "有（过去式）", example: "I had a cold."},
          {en: "had a cold", phonetic: "/hæd ə kəʊld/", cn: "感冒", example: "I had a cold last week."},
          {en: "slept", phonetic: "/slept/", cn: "睡觉（过去式）", example: "I slept late."},
          {en: "read", phonetic: "/red/", cn: "读（过去式）", example: "I read a book."},
          {en: "saw", phonetic: "/sɔː/", cn: "看见（过去式）", example: "I saw a film."},
          {en: "last", phonetic: "/lɑːst/", cn: "最近的", example: "Last weekend."},
          {en: "yesterday", phonetic: "/ˈjestədeɪ/", cn: "昨天", example: "Yesterday was Sunday."},
          {en: "before", phonetic: "/bɪˈfɔːr/", cn: "在...之前", example: "The day before yesterday."},
          {en: "drank", phonetic: "/dræŋk/", cn: "喝（过去式）", example: "I drank tea."},
          {en: "show", phonetic: "/ʃəʊ/", cn: "演出", example: "There was a show."},
          {en: "magazine", phonetic: "/ˌmæɡəˈziːn/", cn: "杂志", example: "I read a magazine."},
          {en: "better", phonetic: "/ˈbetər/", cn: "更好的", example: "I feel better now."},
          {en: "faster", phonetic: "/ˈfɑːstər/", cn: "更快的", example: "He runs faster than me."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Where did you go?",
        words: [
          {en: "went", phonetic: "/went/", cn: "去（过去式）", example: "I went to Sanya."},
          {en: "camp", phonetic: "/kæmp/", cn: "野营", example: "I went to a forest park."},
          {en: "went camping", phonetic: "/went ˈkæmpɪŋ/", cn: "去野营", example: "I went camping."},
          {en: "fish", phonetic: "/fɪʃ/", cn: "钓鱼", example: "I went fishing."},
          {en: "went fishing", phonetic: "/went ˈfɪʃɪŋ/", cn: "去钓鱼", example: "I went fishing with my father."},
          {en: "rode", phonetic: "/rəʊd/", cn: "骑（马；自行车）（过去式）", example: "I rode a bike."},
          {en: "hurt", phonetic: "/hɜːt/", cn: "受伤（过去式）", example: "I hurt my foot."},
          {en: "ate", phonetic: "/et/", cn: "吃（过去式）", example: "I ate fresh food."},
          {en: "took", phonetic: "/tʊk/", cn: "拍照（过去式）", example: "I took pictures."},
          {en: "took pictures", phonetic: "/tʊk ˈpɪktʃərz/", cn: "照相", example: "I took many pictures."},
          {en: "bought", phonetic: "/bɔːt/", cn: "买（过去式）", example: "I bought gifts."},
          {en: "gift", phonetic: "/ɡɪft/", cn: "礼物", example: "I bought some gifts."},
          {en: "fell", phonetic: "/fel/", cn: "摔倒（过去式）", example: "I fell off my bike."},
          {en: "off", phonetic: "/ɒf/", cn: "从（某处）落下", example: "I fell off the bike."},
          {en: "mule", phonetic: "/mjuːl/", cn: "骡子", example: "I rode a mule."},
          {en: "Turpan", phonetic: "/ˈtʊəpɑːn/", cn: "吐鲁番", example: "I went to Turpan."},
          {en: "beach", phonetic: "/biːtʃ/", cn: "海滩", example: "I went to the beach."},
          {en: "basket", phonetic: "/ˈbɑːskɪt/", cn: "篮；筐", example: "I fixed the broken basket."},
          {en: "part", phonetic: "/pɑːt/", cn: "角色", example: "I played a part in the film."},
          {en: "licked", phonetic: "/lɪkt/", cn: "舔（过去式）", example: "The dog licked me."},
          {en: "laughed", phonetic: "/lɑːft/", cn: "笑（过去式）", example: "We laughed and laughed."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 Then and now",
        words: [
          {en: "dining hall", phonetic: "/ˈdaɪnɪŋ hɔːl/", cn: "饭厅", example: "There was no dining hall."},
          {en: "grass", phonetic: "/ɡrɑːs/", cn: "草坪", example: "There was no grass."},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "There was no gym."},
          {en: "ago", phonetic: "/əˈɡəʊ/", cn: "以前", example: "Twenty years ago."},
          {en: "cycling", phonetic: "/ˈsaɪklɪŋ/", cn: "骑自行车运动", example: "I love to go cycling."},
          {en: "go cycling", phonetic: "/ɡəʊ ˈsaɪklɪŋ/", cn: "去骑自行车", example: "I often go cycling."},
          {en: "ice-skate", phonetic: "/ˈaɪs skeɪt/", cn: "滑冰", example: "I love to ice-skate."},
          {en: "badminton", phonetic: "/ˈbædmɪntən/", cn: "羽毛球", example: "I play badminton."},
          {en: "star", phonetic: "/stɑːr/", cn: "星", example: "I was a star."},
          {en: "easy", phonetic: "/ˈiːzi/", cn: "容易的", example: "It is easy."},
          {en: "look up", phonetic: "/lʊk ʌp/", cn: "查阅", example: "Look it up on the Internet."},
          {en: "Internet", phonetic: "/ˈɪntənet/", cn: "互联网", example: "On the Internet."},
          {en: "different", phonetic: "/ˈdɪfrənt/", cn: "不同的", example: "We are different now."},
          {en: "active", phonetic: "/ˈæktɪv/", cn: "积极的；活跃的", example: "I was very active."},
          {en: "race", phonetic: "/reɪs/", cn: "赛跑", example: "I won the race."},
          {en: "nothing", phonetic: "/ˈnʌθɪŋ/", cn: "没有什么", example: "I thought I could do nothing."},
          {en: "thought", phonetic: "/θɔːt/", cn: "想（过去式）", example: "I thought I could do nothing."},
          {en: "felt", phonetic: "/felt/", cn: "感觉（过去式）", example: "I felt worried."},
          {en: "cheetah", phonetic: "/ˈtʃiːtə/", cn: "猎豹", example: "The cheetah is fast."},
          {en: "trip", phonetic: "/trɪp/", cn: "绊倒", example: "He tripped and fell."},
          {en: "woke", phonetic: "/wəʊk/", cn: "醒（过去式）", example: "I woke up early."},
          {en: "dream", phonetic: "/driːm/", cn: "梦", example: "I had a dream."}
        ]
      },
      {
        unit: 5,
        title: "Unit 4 Then and now",
        words: [
          {en: "dining hall", phonetic: "/ˈdaɪnɪŋ hɔːl/", cn: "饭厅", example: "There was no dining hall."},
          {en: "grass", phonetic: "/ɡrɑːs/", cn: "草坪", example: "There was no grass."},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "There was no gym."},
          {en: "ago", phonetic: "/əˈɡəʊ/", cn: "以前", example: "Twenty years ago."},
          {en: "cycling", phonetic: "/ˈsaɪklɪŋ/", cn: "骑自行车运动", example: "I love to go cycling."},
          {en: "go cycling", phonetic: "/ɡəʊ ˈsaɪklɪŋ/", cn: "去骑自行车", example: "I often go cycling."},
          {en: "ice-skate", phonetic: "/ˈaɪs skeɪt/", cn: "滑冰", example: "I love to ice-skate."},
          {en: "badminton", phonetic: "/ˈbædmɪntən/", cn: "羽毛球", example: "I play badminton."},
          {en: "star", phonetic: "/stɑːr/", cn: "星", example: "I was a star."},
          {en: "easy", phonetic: "/ˈiːzi/", cn: "容易的", example: "It is easy."},
          {en: "look up", phonetic: "/lʊk ʌp/", cn: "查阅", example: "Look it up on the Internet."},
          {en: "Internet", phonetic: "/ˈɪntənet/", cn: "互联网", example: "On the Internet."},
          {en: "different", phonetic: "/ˈdɪfrənt/", cn: "不同的", example: "We are different now."},
          {en: "active", phonetic: "/ˈæktɪv/", cn: "积极的；活跃的", example: "I was very active."},
          {en: "race", phonetic: "/reɪs/", cn: "赛跑", example: "I won the race."},
          {en: "nothing", phonetic: "/ˈnʌθɪŋ/", cn: "没有什么", example: "I thought I could do nothing."},
          {en: "thought", phonetic: "/θɔːt/", cn: "想（过去式）", example: "I thought I could do nothing."},
          {en: "felt", phonetic: "/felt/", cn: "感觉（过去式）", example: "I felt worried."},
          {en: "cheetah", phonetic: "/ˈtʃiːtə/", cn: "猎豹", example: "The cheetah is fast."},
          {en: "trip", phonetic: "/trɪp/", cn: "绊倒", example: "He tripped and fell."},
          {en: "woke", phonetic: "/wəʊk/", cn: "醒（过去式）", example: "I woke up early."},
          {en: "dream", phonetic: "/driːm/", cn: "梦", example: "I had a dream."}
        ]
      },
      {
        unit: 6,
        title: "Recycle Mike's happy days",
        words: [
          {en: "farewell", phonetic: "/ˌfeəˈwel/", cn: "告别", example: "It's a farewell party."},
          {en: "party", phonetic: "/ˈpɑːti/", cn: "聚会", example: "We have a party."},
          {en: "invite", phonetic: "/ɪnˈvaɪt/", cn: "邀请", example: "I want to invite you."},
          {en: "cute", phonetic: "/kjuːt/", cn: "可爱的", example: "The baby is cute."},
          {en: "handsome", phonetic: "/ˈhænsəm/", cn: "英俊的", example: "He is handsome."},
          {en: "smart", phonetic: "/smɑːt/", cn: "聪明的", example: "She is smart."},
          {en: "excellent", phonetic: "/ˈeksələnt/", cn: "极好的", example: "That's excellent!"},
          {en: "wonderful", phonetic: "/ˈwʌndəfl/", cn: "精彩的", example: "What a wonderful day!"},
          {en: "beautiful", phonetic: "/ˈbjuːtɪfl/", cn: "美丽的", example: "You look beautiful."},
          {en: "kind", phonetic: "/kaɪnd/", cn: "友善的", example: "You are very kind."},
          {en: "helpful", phonetic: "/ˈhelpfl/", cn: "有帮助的", example: "You are helpful."},
          {en: "polite", phonetic: "/pəˈlaɪt/", cn: "有礼貌的", example: "He is polite."},
          {en: "hard-working", phonetic: "/ˌhɑːd ˈwɜːkɪŋ/", cn: "勤奋的", example: "She is hard-working."},
          {en: "funny", phonetic: "/ˈfʌni/", cn: "有趣的", example: "He is funny."},
          {en: "friendly", phonetic: "/ˈfrendli/", cn: "友好的", example: "They are friendly."},
          {en: "shy", phonetic: "/ʃaɪ/", cn: "害羞的", example: "She is a bit shy."},
          {en: "clever", phonetic: "/ˈklevər/", cn: "聪明的", example: "The dog is clever."},
          {en: "strict", phonetic: "/strɪkt/", cn: "严厉的", example: "My teacher is strict."},
          {en: "young", phonetic: "/jʌŋ/", cn: "年轻的", example: "She looks young."},
          {en: "old", phonetic: "/əʊld/", cn: "年老的", example: "My grandpa is old."},
          {en: "thin", phonetic: "/θɪn/", cn: "瘦的", example: "He is thin."},
          {en: "heavy", phonetic: "/ˈhevi/", cn: "重的", example: "The box is heavy."},
          {en: "tall", phonetic: "/tɔːl/", cn: "高的", example: "He is tall."},
          {en: "short", phonetic: "/ʃɔːt/", cn: "矮的", example: "She is short."},
          {en: "long", phonetic: "/lɒŋ/", cn: "长的", example: "The hair is long."},
          {en: "small", phonetic: "/smɔːl/", cn: "小的", example: "The cat is small."},
          {en: "big", phonetic: "/bɪɡ/", cn: "大的", example: "The dog is big."},
          {en: "strong", phonetic: "/strɒŋ/", cn: "强壮的", example: "He is strong."},
          {en: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", example: "She is quiet."},
          {en: "fun", phonetic: "/fʌn/", cn: "乐趣", example: "We have fun."}
        ]
      }
    ]
  }
};
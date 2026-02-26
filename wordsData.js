// 人教版PEP小学英语完整单词数据 (3-6年级，上下册)
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
      },
      {
        unit: 3,
        title: "Unit 3 Look at me!",
        words: [
          {en: "face", phonetic: "/feɪs/", cn: "脸", example: "Touch your face."},
          {en: "ear", phonetic: "/ɪər/", cn: "耳朵", example: "I have two ears."},
          {en: "eye", phonetic: "/aɪ/", cn: "眼睛", example: "Close your eyes."},
          {en: "nose", phonetic: "/nəʊz/", cn: "鼻子", example: "This is my nose."},
          {en: "mouth", phonetic: "/maʊθ/", cn: "嘴", example: "Open your mouth."},
          {en: "arm", phonetic: "/ɑːrm/", cn: "胳膊", example: "Wave your arms."},
          {en: "hand", phonetic: "/hænd/", cn: "手", example: "Clap your hands."},
          {en: "head", phonetic: "/hed/", cn: "头", example: "Touch your head."},
          {en: "body", phonetic: "/ˈbɒdi/", cn: "身体", example: "Shake your body."},
          {en: "leg", phonetic: "/leɡ/", cn: "腿", example: "I have two legs."},
          {en: "foot", phonetic: "/fʊt/", cn: "脚", example: "Stamp your foot."},
          {en: "school", phonetic: "/skuːl/", cn: "学校", example: "Let's go to school."}
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
          {en: "dog", phonetic: "/dɒɡ/", cn: "狗", example: "I like the dog."},
          {en: "elephant", phonetic: "/ˈelɪfənt/", cn: "大象", example: "The elephant is big."},
          {en: "monkey", phonetic: "/ˈmʌŋki/", cn: "猴子", example: "The monkey is funny."},
          {en: "bird", phonetic: "/bɜːrd/", cn: "鸟", example: "The bird can fly."},
          {en: "tiger", phonetic: "/ˈtaɪɡər/", cn: "老虎", example: "The tiger is strong."},
          {en: "panda", phonetic: "/ˈpændə/", cn: "熊猫", example: "I like the panda."},
          {en: "zoo", phonetic: "/zuː/", cn: "动物园", example: "Let's go to the zoo."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Let's eat!",
        words: [
          {en: "juice", phonetic: "/dʒuːs/", cn: "果汁", example: "I like juice."},
          {en: "egg", phonetic: "/eɡ/", cn: "蛋", example: "Have an egg."},
          {en: "milk", phonetic: "/mɪlk/", cn: "牛奶", example: "Drink some milk."},
          {en: "bread", phonetic: "/bred/", cn: "面包", example: "Eat some bread."},
          {en: "water", phonetic: "/ˈwɔːtər/", cn: "水", example: "Drink some water."},
          {en: "cake", phonetic: "/keɪk/", cn: "蛋糕", example: "Have some cake."},
          {en: "fish", phonetic: "/fɪʃ/", cn: "鱼", example: "Eat some fish."},
          {en: "rice", phonetic: "/raɪs/", cn: "米饭", example: "Have some rice."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Happy birthday!",
        words: [
          {en: "one", phonetic: "/wʌn/", cn: "一", example: "I'm one."},
          {en: "two", phonetic: "/tuː/", cn: "二", example: "I have two books."},
          {en: "three", phonetic: "/θriː/", cn: "三", example: "I'm three years old."},
          {en: "four", phonetic: "/fɔːr/", cn: "四", example: "I have four pens."},
          {en: "five", phonetic: "/faɪv/", cn: "五", example: "Show me five."},
          {en: "six", phonetic: "/sɪks/", cn: "六", example: "I'm six."},
          {en: "seven", phonetic: "/ˈsevn/", cn: "七", example: "I'm seven years old."},
          {en: "eight", phonetic: "/eɪt/", cn: "八", example: "Show me eight."},
          {en: "nine", phonetic: "/naɪn/", cn: "九", example: "I'm nine."},
          {en: "ten", phonetic: "/ten/", cn: "十", example: "I'm ten years old."},
          {en: "brother", phonetic: "/ˈbrʌðər/", cn: "兄；弟", example: "This is my brother."},
          {en: "plate", phonetic: "/pleɪt/", cn: "盘子", example: "I see a plate."}
        ]
      }
    ]
  },
  // 三年级下册
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
          {en: "grandmother", phonetic: "/ˈɡrænmʌðər/", cn: "祖母", example: "My grandmother is kind."},
          {en: "grandma", phonetic: "/ˈɡrænmɑː/", cn: "奶奶", example: "I visit my grandma."},
          {en: "grandfather", phonetic: "/ˈɡrænfɑːðər/", cn: "祖父", example: "My grandfather is tall."},
          {en: "grandpa", phonetic: "/ˈɡrænpɑː/", cn: "爷爷", example: "I love my grandpa."},
          {en: "sister", phonetic: "/ˈsɪstər/", cn: "姐妹", example: "This is my sister."},
          {en: "brother", phonetic: "/ˈbrʌðər/", cn: "兄弟", example: "I have a brother."},
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
          {en: "short", phonetic: "/ʃɔːrt/", cn: "矮的", example: "The dog is short."},
          {en: "long", phonetic: "/lɒŋ/", cn: "长的", example: "The snake is long."},
          {en: "small", phonetic: "/smɔːl/", cn: "小的", example: "The mouse is small."},
          {en: "big", phonetic: "/bɪɡ/", cn: "大的", example: "The elephant is big."},
          {en: "giraffe", phonetic: "/dʒəˈrɑːf/", cn: "长颈鹿", example: "The giraffe is tall."},
          {en: "so", phonetic: "/səʊ/", cn: "这么", example: "It's so tall!"},
          {en: "children", phonetic: "/ˈtʃɪldrən/", cn: "孩子们", example: "Come here, children."},
          {en: "tail", phonetic: "/teɪl/", cn: "尾巴", example: "It has a long tail."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 Where is my car",
        words: [
          {en: "on", phonetic: "/ɒn/", cn: "在......上", example: "The book is on the desk."},
          {en: "in", phonetic: "/ɪn/", cn: "在......里", example: "The pen is in the bag."},
          {en: "under", phonetic: "/ˈʌndər/", cn: "在......下面", example: "The cat is under the table."},
          {en: "chair", phonetic: "/tʃeər/", cn: "椅子", example: "Sit on the chair."},
          {en: "desk", phonetic: "/desk/", cn: "书桌", example: "The book is on the desk."},
          {en: "cap", phonetic: "/kæp/", cn: "帽子", example: "Put on your cap."},
          {en: "ball", phonetic: "/bɔːl/", cn: "球", example: "Bounce the ball."},
          {en: "car", phonetic: "/kɑːr/", cn: "小汽车", example: "Drive a car."},
          {en: "boat", phonetic: "/bəʊt/", cn: "小船", example: "Row a boat."},
          {en: "map", phonetic: "/mæp/", cn: "地图", example: "Read the map."},
          {en: "toy", phonetic: "/tɔɪ/", cn: "玩具", example: "I have a toy."},
          {en: "box", phonetic: "/bɒks/", cn: "盒子", example: "Open the box."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Do you like pears",
        words: [
          {en: "pear", phonetic: "/peər/", cn: "梨", example: "I like pears."},
          {en: "apple", phonetic: "/ˈæpl/", cn: "苹果", example: "Have an apple."},
          {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙子", example: "I like oranges."},
          {en: "banana", phonetic: "/bəˈnɑːnə/", cn: "香蕉", example: "I like bananas."},
          {en: "watermelon", phonetic: "/ˈwɔːtərmelən/", cn: "西瓜", example: "I like watermelons."},
          {en: "strawberry", phonetic: "/ˈstrɔːbəri/", cn: "草莓", example: "I like strawberries."},
          {en: "grape", phonetic: "/ɡreɪp/", cn: "葡萄", example: "I like grapes."},
          {en: "buy", phonetic: "/baɪ/", cn: "买", example: "Let's buy some fruit."},
          {en: "fruit", phonetic: "/fruːt/", cn: "水果", example: "I like fruit."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 How many",
        words: [
          {en: "eleven", phonetic: "/ɪˈlevn/", cn: "十一", example: "I see eleven."},
          {en: "twelve", phonetic: "/twelv/", cn: "十二", example: "I see twelve."},
          {en: "thirteen", phonetic: "/ˌθɜːrˈtiːn/", cn: "十三", example: "I see thirteen."},
          {en: "fourteen", phonetic: "/ˌfɔːrˈtiːn/", cn: "十四", example: "I see fourteen."},
          {en: "fifteen", phonetic: "/ˌfɪfˈtiːn/", cn: "十五", example: "I see fifteen."},
          {en: "sixteen", phonetic: "/ˌsɪksˈtiːn/", cn: "十六", example: "I see sixteen."},
          {en: "seventeen", phonetic: "/ˌsevnˈtiːn/", cn: "十七", example: "I see seventeen."},
          {en: "eighteen", phonetic: "/ˌeɪˈtiːn/", cn: "十八", example: "I see eighteen."},
          {en: "nineteen", phonetic: "/ˌnaɪnˈtiːn/", cn: "十九", example: "I see nineteen."},
          {en: "twenty", phonetic: "/ˈtwenti/", cn: "二十", example: "I see twenty."},
          {en: "kite", phonetic: "/kaɪt/", cn: "风筝", example: "I have a kite."},
          {en: "beautiful", phonetic: "/ˈbjuːtɪfl/", cn: "美丽的", example: "How beautiful!"}
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
          {en: "teacher's desk", phonetic: "/ˈtiːtʃərz desk/", cn: "讲台", example: "Clean the teacher's desk."},
          {en: "computer", phonetic: "/kəmˈpjuːtər/", cn: "计算机", example: "I have a computer."},
          {en: "fan", phonetic: "/fæn/", cn: "风扇", example: "Turn on the fan."},
          {en: "wall", phonetic: "/wɔːl/", cn: "墙壁", example: "The wall is white."},
          {en: "floor", phonetic: "/flɔːr/", cn: "地板", example: "The floor is clean."},
          {en: "really", phonetic: "/ˈrɪəli/", cn: "真的", example: "Really?"},
          {en: "near", phonetic: "/nɪər/", cn: "距离近", example: "It's near the door."},
          {en: "TV", phonetic: "/ˌtiː ˈviː/", cn: "电视", example: "Watch TV."},
          {en: "clean", phonetic: "/kliːn/", cn: "打扫", example: "Let's clean the classroom."},
          {en: "help", phonetic: "/help/", cn: "帮助", example: "Let me help you."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My schoolbag",
        words: [
          {en: "schoolbag", phonetic: "/ˈskuːlbæɡ/", cn: "书包", example: "I have a new schoolbag."},
          {en: "maths book", phonetic: "/mæθs bʊk/", cn: "数学书", example: "Put your maths book in your desk."},
          {en: "English book", phonetic: "/ˈɪŋɡlɪʃ bʊk/", cn: "英语书", example: "I have an English book."},
          {en: "Chinese book", phonetic: "/ˌtʃaɪˈniːz bʊk/", cn: "语文书", example: "Put your Chinese book in your desk."},
          {en: "storybook", phonetic: "/ˈstɔːribʊk/", cn: "故事书", example: "I have a storybook."},
          {en: "candy", phonetic: "/ˈkændi/", cn: "糖果", example: "I have some candy."},
          {en: "notebook", phonetic: "/ˈnəʊtbʊk/", cn: "笔记本", example: "I have a notebook."},
          {en: "toy", phonetic: "/tɔɪ/", cn: "玩具", example: "I have a toy."},
          {en: "key", phonetic: "/kiː/", cn: "钥匙", example: "I have a key."},
          {en: "wow", phonetic: "/waʊ/", cn: "哇", example: "Wow, it's so big!"},
          {en: "lost", phonetic: "/lɒst/", cn: "丢失", example: "I lost my key."},
          {en: "cute", phonetic: "/kjuːt/", cn: "可爱的", example: "It's so cute!"}
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
          {en: "shoe", phonetic: "/ʃuː/", cn: "鞋", example: "His shoes are blue."},
          {en: "glasses", phonetic: "/ˈɡlɑːsɪz/", cn: "眼镜", example: "He has glasses."},
          {en: "his", phonetic: "/hɪz/", cn: "他的", example: "His name is Zhang Peng."},
          {en: "her", phonetic: "/hɜːr/", cn: "她的", example: "Her name is Amy."},
          {en: "or", phonetic: "/ɔːr/", cn: "或者", example: "A boy or girl?"},
          {en: "right", phonetic: "/raɪt/", cn: "正确的", example: "You're right."},
          {en: "hat", phonetic: "/hæt/", cn: "帽子", example: "A blue hat."},
          {en: "she's", phonetic: "/ʃiːz/", cn: "她是", example: "She's quiet."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 My home",
        words: [
          {en: "bedroom", phonetic: "/ˈbedruːm/", cn: "卧室", example: "This is my bedroom."},
          {en: "living room", phonetic: "/ˈlɪvɪŋ ruːm/", cn: "客厅", example: "This is the living room."},
          {en: "study", phonetic: "/ˈstʌdi/", cn: "书房", example: "This is my study."},
          {en: "kitchen", phonetic: "/ˈkɪtʃɪn/", cn: "厨房", example: "This is the kitchen."},
          {en: "bathroom", phonetic: "/ˈbɑːθruːm/", cn: "浴室", example: "This is the bathroom."},
          {en: "phone", phonetic: "/fəʊn/", cn: "电话", example: "Answer the phone."},
          {en: "bed", phonetic: "/bed/", cn: "床", example: "Make the bed."},
          {en: "sofa", phonetic: "/ˈsəʊfə/", cn: "沙发", example: "Sit on the sofa."},
          {en: "fridge", phonetic: "/frɪdʒ/", cn: "冰箱", example: "Open the fridge."},
          {en: "table", phonetic: "/ˈteɪbl/", cn: "桌子", example: "The phone is on the table."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Dinner's ready",
        words: [
          {en: "beef", phonetic: "/biːf/", cn: "牛肉", example: "I'd like some beef."},
          {en: "chicken", phonetic: "/ˈtʃɪkɪn/", cn: "鸡肉", example: "I'd like some chicken."},
          {en: "noodles", phonetic: "/ˈnuːdlz/", cn: "面条", example: "I'd like some noodles."},
          {en: "soup", phonetic: "/suːp/", cn: "汤", example: "I'd like some soup."},
          {en: "vegetable", phonetic: "/ˈvedʒtəbl/", cn: "蔬菜", example: "I'd like some vegetables."},
          {en: "chopsticks", phonetic: "/ˈtʃɒpstɪks/", cn: "筷子", example: "I can use chopsticks."},
          {en: "bowl", phonetic: "/bəʊl/", cn: "碗", example: "Pass me the bowl."},
          {en: "fork", phonetic: "/fɔːrk/", cn: "叉子", example: "Pass me the fork."},
          {en: "knife", phonetic: "/naɪf/", cn: "刀", example: "Pass me the knife."},
          {en: "spoon", phonetic: "/spuːn/", cn: "勺子", example: "Pass me the spoon."},
          {en: "dinner", phonetic: "/ˈdɪnər/", cn: "正餐", example: "What's for dinner?"},
          {en: "ready", phonetic: "/ˈredi/", cn: "准备好", example: "Dinner's ready!"},
          {en: "help yourself", phonetic: "/help jɔːrˈself/", cn: "为(自己)取用", example: "Help yourself."},
          {en: "pass", phonetic: "/pɑːs/", cn: "给；递", example: "Pass me the bowl."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Meet my family",
        words: [
          {en: "parents", phonetic: "/ˈpeərənts/", cn: "父母", example: "Meet my parents."},
          {en: "cousin", phonetic: "/ˈkʌzn/", cn: "同辈表亲", example: "This is my cousin."},
          {en: "uncle", phonetic: "/ˈʌŋkl/", cn: "舅父", example: "This is my uncle."},
          {en: "aunt", phonetic: "/ɑːnt/", cn: "姑母", example: "This is my aunt."},
          {en: "baby brother", phonetic: "/ˈbeɪbi ˈbrʌðər/", cn: "婴儿小弟弟", example: "I have a baby brother."},
          {en: "doctor", phonetic: "/ˈdɒktər/", cn: "医生", example: "My uncle is a doctor."},
          {en: "cook", phonetic: "/kʊk/", cn: "厨师", example: "My aunt is a cook."},
          {en: "driver", phonetic: "/ˈdraɪvər/", cn: "司机", example: "My father is a driver."},
          {en: "farmer", phonetic: "/ˈfɑːrmər/", cn: "农民", example: "My grandpa is a farmer."},
          {en: "nurse", phonetic: "/nɜːrs/", cn: "护士", example: "My mother is a nurse."},
          {en: "people", phonetic: "/ˈpiːpl/", cn: "人们", example: "How many people?"},
          {en: "but", phonetic: "/bʌt/", cn: "但是", example: "But that's only five."},
          {en: "little", phonetic: "/ˈlɪtl/", cn: "小的", example: "A little puppy."},
          {en: "puppy", phonetic: "/ˈpʌpi/", cn: "小狗", example: "A little puppy."},
          {en: "football player", phonetic: "/ˈfʊtbɔːl ˈpleɪər/", cn: "足球运动员", example: "My brother is a football player."},
          {en: "job", phonetic: "/dʒɒb/", cn: "工作", example: "What's his job?"},
          {en: "basketball", phonetic: "/ˈbɑːskɪtbɔːl/", cn: "篮球", example: "Play basketball."}
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
          {en: "first floor", phonetic: "/fɜːrst flɔːr/", cn: "一楼", example: "It's on the first floor."},
          {en: "second floor", phonetic: "/ˈsekənd flɔːr/", cn: "二楼", example: "It's on the second floor."},
          {en: "teachers' office", phonetic: "/ˈtiːtʃərz ˈɒfɪs/", cn: "教师办公室", example: "Where's the teachers' office?"},
          {en: "library", phonetic: "/ˈlaɪbreri/", cn: "图书馆", example: "Do you have a library?"},
          {en: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", example: "That is the playground."},
          {en: "computer room", phonetic: "/kəmˈpjuːtər ruːm/", cn: "计算机房", example: "This is the computer room."},
          {en: "art room", phonetic: "/ɑːrt ruːm/", cn: "美术教室", example: "That is the art room."},
          {en: "music room", phonetic: "/ˈmjuːzɪk ruːm/", cn: "音乐教室", example: "Is this the music room?"},
          {en: "next to", phonetic: "/nekst tuː/", cn: "紧邻", example: "It's next to the art room."},
          {en: "homework", phonetic: "/ˈhəʊmwɜːrk/", cn: "作业", example: "Do you have homework?"},
          {en: "class", phonetic: "/klɑːs/", cn: "班；班级", example: "Forty students in my class."},
          {en: "forty", phonetic: "/ˈfɔːrti/", cn: "四十", example: "Forty students."},
          {en: "way", phonetic: "/weɪ/", cn: "方向", example: "This way, please."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 What time is it",
        words: [
          {en: "breakfast", phonetic: "/ˈbrekfəst/", cn: "早餐", example: "It's time for breakfast."},
          {en: "lunch", phonetic: "/lʌntʃ/", cn: "午餐", example: "It's time for lunch."},
          {en: "dinner", phonetic: "/ˈdɪnər/", cn: "晚餐", example: "It's time for dinner."},
          {en: "English class", phonetic: "/ˈɪŋɡlɪʃ klɑːs/", cn: "英语课", example: "It's time for English class."},
          {en: "music class", phonetic: "/ˈmjuːzɪk klɑːs/", cn: "音乐课", example: "It's time for music class."},
          {en: "PE class", phonetic: "/ˌpiː ˈiː klɑːs/", cn: "体育课", example: "It's time for PE class."},
          {en: "get up", phonetic: "/ɡet ʌp/", cn: "起床", example: "It's time to get up."},
          {en: "go to school", phonetic: "/ɡəʊ tuː skuːl/", cn: "去上学", example: "It's time to go to school."},
          {en: "go home", phonetic: "/ɡəʊ həʊm/", cn: "回家", example: "It's time to go home."},
          {en: "go to bed", phonetic: "/ɡəʊ tuː bed/", cn: "上床睡觉", example: "It's time to go to bed."},
          {en: "over", phonetic: "/ˈəʊvər/", cn: "结束", example: "School is over."},
          {en: "now", phonetic: "/naʊ/", cn: "现在", example: "What time is it now?"},
          {en: "o'clock", phonetic: "/əˈklɒk/", cn: "......点钟", example: "It's 5 o'clock."},
          {en: "kid", phonetic: "/kɪd/", cn: "小孩", example: "Just a minute, kids."},
          {en: "thirty", phonetic: "/ˈθɜːrti/", cn: "三十", example: "It's 6:30."},
          {en: "hurry up", phonetic: "/ˈhʌri ʌp/", cn: "快点", example: "Hurry up!"},
          {en: "come on", phonetic: "/kʌm ɒn/", cn: "快；加油", example: "Come on!"},
          {en: "just a minute", phonetic: "/dʒʌst ə ˈmɪnɪt/", cn: "稍等一会儿", example: "Just a minute."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Weather",
        words: [
          {en: "cold", phonetic: "/kəʊld/", cn: "冷的", example: "It's cold today."},
          {en: "cool", phonetic: "/kuːl/", cn: "凉的", example: "It's cool."},
          {en: "warm", phonetic: "/wɔːrm/", cn: "温暖的", example: "It's warm today."},
          {en: "hot", phonetic: "/hɒt/", cn: "热的", example: "It's hot."},
          {en: "sunny", phonetic: "/ˈsʌni/", cn: "阳光充足的", example: "It's sunny."},
          {en: "windy", phonetic: "/ˈwɪndi/", cn: "多风的", example: "It's windy."},
          {en: "cloudy", phonetic: "/ˈklaʊdi/", cn: "多云的", example: "It's cloudy."},
          {en: "snowy", phonetic: "/ˈsnəʊi/", cn: "下雪的", example: "It's snowy."},
          {en: "rainy", phonetic: "/ˈreɪni/", cn: "阴雨的", example: "It's rainy."},
          {en: "outside", phonetic: "/ˌaʊtˈsaɪd/", cn: "在户外", example: "Can I go outside?"},
          {en: "be careful", phonetic: "/biː ˈkeəfl/", cn: "小心", example: "Be careful!"},
          {en: "weather", phonetic: "/ˈweðər/", cn: "天气", example: "What's the weather like?"},
          {en: "New York", phonetic: "/njuː jɔːrk/", cn: "纽约", example: "It's rainy in New York."},
          {en: "degree", phonetic: "/dɪˈɡriː/", cn: "度", example: "It's 26 degrees."},
          {en: "world", phonetic: "/wɜːrld/", cn: "世界", example: "What's the weather like around the world?"},
          {en: "London", phonetic: "/ˈlʌndən/", cn: "伦敦", example: "It's rainy in London."},
          {en: "Moscow", phonetic: "/ˈmɒskəʊ/", cn: "莫斯科", example: "It's snowy in Moscow."},
          {en: "Singapore", phonetic: "/ˌsɪŋəˈpɔːr/", cn: "新加坡", example: "It's sunny in Singapore."},
          {en: "Sydney", phonetic: "/ˈsɪdni/", cn: "悉尼", example: "It's hot in Sydney."},
          {en: "fly", phonetic: "/flaɪ/", cn: "放(风筝等)", example: "Fly a kite."},
          {en: "love", phonetic: "/lʌv/", cn: "爱你的", example: "Love, Dad."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 At the farm",
        words: [
          {en: "tomato", phonetic: "/təˈmɑːtəʊ/", cn: "西红柿", example: "I like tomatoes."},
          {en: "potato", phonetic: "/pəˈteɪtəʊ/", cn: "土豆", example: "I like potatoes."},
          {en: "green beans", phonetic: "/ɡriːn biːnz/", cn: "豆角", example: "I like green beans."},
          {en: "carrot", phonetic: "/ˈkærət/", cn: "胡萝卜", example: "I like carrots."},
          {en: "horse", phonetic: "/hɔːrs/", cn: "马", example: "These are horses."},
          {en: "cow", phonetic: "/kaʊ/", cn: "奶牛", example: "Those are cows."},
          {en: "sheep", phonetic: "/ʃiːp/", cn: "绵羊", example: "These are sheep."},
          {en: "hen", phonetic: "/hen/", cn: "母鸡", example: "Those are hens."},
          {en: "these", phonetic: "/ðiːz/", cn: "这些", example: "What are these?"},
          {en: "those", phonetic: "/ðəʊz/", cn: "那些", example: "What are those?"},
          {en: "yum", phonetic: "/jʌm/", cn: "表示味道或气味非常好", example: "Yum!"},
          {en: "animal", phonetic: "/ˈænɪml/", cn: "动物", example: "I love animals."},
          {en: "garden", phonetic: "/ˈɡɑːrdn/", cn: "花园", example: "This is the vegetable garden."},
          {en: "farm", phonetic: "/fɑːrm/", cn: "农场", example: "Welcome to the farm."},
          {en: "goat", phonetic: "/ɡəʊt/", cn: "山羊", example: "Those are goats."},
          {en: "eat", phonetic: "/iːt/", cn: "吃", example: "I love to eat carrots."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 My clothes",
        words: [
          {en: "clothes", phonetic: "/kləʊðz/", cn: "衣服", example: "I like these clothes."},
          {en: "hat", phonetic: "/hæt/", cn: "帽子", example: "Take off your hat."},
          {en: "skirt", phonetic: "/skɜːrt/", cn: "女裙", example: "I like that skirt."},
          {en: "pants", phonetic: "/pænts/", cn: "裤子", example: "I like those pants."},
          {en: "dress", phonetic: "/dres/", cn: "连衣裙", example: "I like that dress."},
          {en: "coat", phonetic: "/kəʊt/", cn: "外衣", example: "Put on your coat."},
          {en: "sweater", phonetic: "/ˈswetər/", cn: "毛衣", example: "I like that sweater."},
          {en: "sock", phonetic: "/sɒk/", cn: "短袜", example: "Put on your socks."},
          {en: "shorts", phonetic: "/ʃɔːrts/", cn: "短裤", example: "I like those shorts."},
          {en: "jacket", phonetic: "/ˈdʒækɪt/", cn: "夹克衫", example: "I like that jacket."},
          {en: "shirt", phonetic: "/ʃɜːrt/", cn: "衬衫", example: "I like that shirt."},
          {en: "yours", phonetic: "/jɔːrz/", cn: "你的", example: "Are these yours?"},
          {en: "whose", phonetic: "/huːz/", cn: "谁的", example: "Whose coat is this?"},
          {en: "mine", phonetic: "/maɪn/", cn: "我的", example: "It's mine."},
          {en: "pack", phonetic: "/pæk/", cn: "收拾(行李)", example: "Let me pack my clothes."},
          {en: "wait", phonetic: "/weɪt/", cn: "等待", example: "Please wait."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Shopping",
        words: [
          {en: "gloves", phonetic: "/ˈɡlʌvz/", cn: "手套", example: "The gloves are nice."},
          {en: "scarf", phonetic: "/skɑːrf/", cn: "围巾", example: "The scarf is pretty."},
          {en: "umbrella", phonetic: "/ʌmˈbrelə/", cn: "伞", example: "The umbrella is cheap."},
          {en: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", cn: "太阳镜", example: "The sunglasses are nice."},
          {en: "nice", phonetic: "/naɪs/", cn: "好看的", example: "They're very nice."},
          {en: "pretty", phonetic: "/ˈprɪti/", cn: "美观的", example: "They're pretty."},
          {en: "cheap", phonetic: "/tʃiːp/", cn: "便宜的", example: "They're cheap."},
          {en: "expensive", phonetic: "/ɪkˈspensɪv/", cn: "昂贵的", example: "They're expensive."},
          {en: "how much", phonetic: "/haʊ mʌtʃ/", cn: "多少钱", example: "How much is it?"},
          {en: "eighty", phonetic: "/ˈeɪti/", cn: "八十", example: "It's eighty yuan."},
          {en: "dollar", phonetic: "/ˈdɒlər/", cn: "美元", example: "Ten dollars."},
          {en: "sale", phonetic: "/seɪl/", cn: "特价销售", example: "Great! I'll take them."},
          {en: "more", phonetic: "/mɔːr/", cn: "更多的", example: "More than ten."},
          {en: "us", phonetic: "/ʌs/", cn: "我们", example: "Let us show you."},
          {en: "help", phonetic: "/help/", cn: "帮助", example: "Can I help you?"},
          {en: "them", phonetic: "/ðem/", cn: "他们", example: "I'll take them."}
        ]
      }
    ]
  },
  // 五年级上册
  grade5: {
    units: [
      {
        unit: 1,
        title: "Unit 1 What's he like",
        words: [
          {en: "old", phonetic: "/əʊld/", cn: "老的", example: "My grandpa is old."},
          {en: "young", phonetic: "/jʌŋ/", cn: "年轻的", example: "My sister is young."},
          {en: "funny", phonetic: "/ˈfʌni/", cn: "滑稽的", example: "He is funny."},
          {en: "kind", phonetic: "/kaɪnd/", cn: "体贴的", example: "She is kind."},
          {en: "strict", phonetic: "/strɪkt/", cn: "要求严格的", example: "He is strict."},
          {en: "polite", phonetic: "/pəˈlaɪt/", cn: "有礼貌的", example: "She is polite."},
          {en: "helpful", phonetic: "/ˈhelpfl/", cn: "有用的", example: "He is helpful."},
          {en: "clever", phonetic: "/ˈklevər/", cn: "聪明的", example: "She is clever."},
          {en: "hard-working", phonetic: "/ˌhɑːrd ˈwɜːrkɪŋ/", cn: "工作努力的", example: "He is hard-working."},
          {en: "shy", phonetic: "/ʃaɪ/", cn: "羞怯的", example: "She is shy."},
          {en: "know", phonetic: "/nəʊ/", cn: "知道", example: "Do you know him?"},
          {en: "our", phonetic: "/ˈaʊər/", cn: "我们的", example: "This is our classroom."},
          {en: "Ms", phonetic: "/mɪz/", cn: "女士", example: "Ms Wang will be our teacher."},
          {en: "will", phonetic: "/wɪl/", cn: "将要", example: "I will go to school."},
          {en: "sometimes", phonetic: "/ˈsʌmtaɪmz/", cn: "有时", example: "Sometimes he is strict."},
          {en: "robot", phonetic: "/ˈrəʊbɒt/", cn: "机器人", example: "I have a robot."},
          {en: "him", phonetic: "/hɪm/", cn: "他", example: "Do you know him?"},
          {en: "speak", phonetic: "/spiːk/", cn: "会说", example: "I can speak English."},
          {en: "finish", phonetic: "/ˈfɪnɪʃ/", cn: "完成", example: "Let's finish the work."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My week",
        words: [
          {en: "Monday", phonetic: "/ˈmʌndeɪ/", cn: "星期一", example: "I have English on Mondays."},
          {en: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", cn: "星期二", example: "I have maths on Tuesdays."},
          {en: "Wednesday", phonetic: "/ˈwenzdeɪ/", cn: "星期三", example: "I have music on Wednesdays."},
          {en: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", cn: "星期四", example: "I have art on Thursdays."},
          {en: "Friday", phonetic: "/ˈfraɪdeɪ/", cn: "星期五", example: "I have PE on Fridays."},
          {en: "Saturday", phonetic: "/ˈsætərdeɪ/", cn: "星期六", example: "I watch TV on Saturdays."},
          {en: "Sunday", phonetic: "/ˈsʌndeɪ/", cn: "星期日", example: "I read books on Sundays."},
          {en: "weekend", phonetic: "/ˌwiːkˈend/", cn: "周末", example: "What do you do on the weekend?"},
          {en: "wash", phonetic: "/wɒʃ/", cn: "洗", example: "I wash my clothes."},
          {en: "watch", phonetic: "/wɒtʃ/", cn: "看", example: "I watch TV."},
          {en: "do", phonetic: "/duː/", cn: "做", example: "I do homework."},
          {en: "read", phonetic: "/riːd/", cn: "看", example: "I read books."},
          {en: "play", phonetic: "/pleɪ/", cn: "踢", example: "I play football."},
          {en: "cooking", phonetic: "/ˈkʊkɪŋ/", cn: "烹饪", example: "I like cooking."},
          {en: "often", phonetic: "/ˈɒfn/", cn: "时常", example: "I often read books."},
          {en: "park", phonetic: "/pɑːrk/", cn: "公园", example: "I go to the park."},
          {en: "tired", phonetic: "/ˈtaɪərd/", cn: "疲倦的", example: "I'm tired."},
          {en: "sport", phonetic: "/spɔːrt/", cn: "体育运动", example: "I play sports."},
          {en: "should", phonetic: "/ʃʊd/", cn: "应该", example: "You should play sports."},
          {en: "every", phonetic: "/ˈevri/", cn: "每一个", example: "Every day."},
          {en: "day", phonetic: "/deɪ/", cn: "一天", example: "Every day."},
          {en: "schedule", phonetic: "/ˈʃedʒuːl/", cn: "工作计划", example: "This is my schedule."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 What would you like",
        words: [
          {en: "sandwich", phonetic: "/ˈsænwɪtʃ/", cn: "三明治", example: "I'd like a sandwich."},
          {en: "salad", phonetic: "/ˈsæləd/", cn: "蔬菜沙拉", example: "I'd like a salad."},
          {en: "hamburger", phonetic: "/ˈhæmbɜːrɡər/", cn: "汉堡包", example: "I'd like a hamburger."},
          {en: "ice cream", phonetic: "/ˌaɪs ˈkriːm/", cn: "冰激凌", example: "I'd like ice cream."},
          {en: "tea", phonetic: "/tiː/", cn: "茶", example: "I'd like some tea."},
          {en: "fresh", phonetic: "/freʃ/", cn: "新鲜的", example: "The vegetables are fresh."},
          {en: "healthy", phonetic: "/ˈhelθi/", cn: "健康的", example: "I like healthy food."},
          {en: "delicious", phonetic: "/dɪˈlɪʃəs/", cn: "美味的", example: "The food is delicious."},
          {en: "hot", phonetic: "/hɒt/", cn: "辣的", example: "The soup is hot."},
          {en: "sweet", phonetic: "/swiːt/", cn: "甜的", example: "The ice cream is sweet."},
          {en: "drink", phonetic: "/drɪŋk/", cn: "喝", example: "What would you like to drink?"},
          {en: "thirsty", phonetic: "/ˈθɜːrsti/", cn: "渴的", example: "I'm thirsty."},
          {en: "favourite", phonetic: "/ˈfeɪvərɪt/", cn: "特别喜爱的", example: "What's your favourite food?"},
          {en: "food", phonetic: "/fuːd/", cn: "食物", example: "I like Chinese food."},
          {en: "Dear", phonetic: "/dɪər/", cn: "亲爱的", example: "Dear Robin."},
          {en: "onion", phonetic: "/ˈʌnjən/", cn: "洋葱", example: "I don't like onions."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 What can you do",
        words: [
          {en: "sing", phonetic: "/sɪŋ/", cn: "唱", example: "I can sing English songs."},
          {en: "song", phonetic: "/sɒŋ/", cn: "歌曲", example: "I like this song."},
          {en: "sing English songs", phonetic: "/sɪŋ ˈɪŋɡlɪʃ sɒŋz/", cn: "唱英文歌曲", example: "Can you sing English songs?"},
          {en: "play the pipa", phonetic: "/pleɪ ðə piːˈpɑː/", cn: "弹琵琶", example: "I can play the pipa."},
          {en: "kung fu", phonetic: "/ˌkʌŋ ˈfuː/", cn: "功夫", example: "I can do some kung fu."},
          {en: "do kung fu", phonetic: "/duː ˌkʌŋ ˈfuː/", cn: "练武术", example: "Can you do any kung fu?"},
          {en: "dance", phonetic: "/dɑːns/", cn: "跳舞", example: "I can dance."},
          {en: "draw", phonetic: "/drɔː/", cn: "画", example: "I can draw cartoons."},
          {en: "cartoon", phonetic: "/kɑːrˈtuːn/", cn: "漫画", example: "I can draw cartoons."},
          {en: "draw cartoons", phonetic: "/drɔː kɑːrˈtuːnz/", cn: "画漫画", example: "Can you draw cartoons?"},
          {en: "cook", phonetic: "/kʊk/", cn: "烹饪", example: "I can cook."},
          {en: "swim", phonetic: "/swɪm/", cn: "游泳", example: "I can swim."},
          {en: "play basketball", phonetic: "/pleɪ ˈbɑːskɪtbɔːl/", cn: "打篮球", example: "Can you play basketball?"},
          {en: "play ping-pong", phonetic: "/pleɪ ˈpɪŋ pɒŋ/", cn: "打乒乓球", example: "I can play ping-pong."},
          {en: "speak English", phonetic: "/spiːk ˈɪŋɡlɪʃ/", cn: "说英语", example: "Can you speak English?"},
          {en: "learn", phonetic: "/lɜːrn/", cn: "学", example: "I want to learn."},
          {en: "any", phonetic: "/ˈeni/", cn: "任何的", example: "Do you have any books?"},
          {en: "problem", phonetic: "/ˈprɒbləm/", cn: "问题", example: "No problem."},
          {en: "want", phonetic: "/wɒnt/", cn: "想要", example: "I want to try."},
          {en: "send", phonetic: "/send/", cn: "邮寄", example: "Please send me an email."},
          {en: "email", phonetic: "/ˈiːmeɪl/", cn: "电子邮件", example: "I have an email."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 There is a big bed",
        words: [
          {en: "clock", phonetic: "/klɒk/", cn: "时钟", example: "There is a clock."},
          {en: "plant", phonetic: "/plɑːnt/", cn: "植物", example: "There is a plant."},
          {en: "bottle", phonetic: "/ˈbɒtl/", cn: "瓶子", example: "There is a bottle."},
          {en: "water bottle", phonetic: "/ˈwɔːtər ˈbɒtl/", cn: "水瓶", example: "There is a water bottle."},
          {en: "bike", phonetic: "/baɪk/", cn: "自行车", example: "There is a bike."},
          {en: "photo", phonetic: "/ˈfəʊtəʊ/", cn: "照片", example: "There is a photo."},
          {en: "in front of", phonetic: "/ɪn frʌnt ɒv/", cn: "在......前面", example: "The ball is in front of the dog."},
          {en: "beside", phonetic: "/bɪˈsaɪd/", cn: "在旁边", example: "The ball is beside the dog."},
          {en: "behind", phonetic: "/bɪˈhaɪnd/", cn: "在(或向)......后面", example: "The ball is behind the dog."},
          {en: "above", phonetic: "/əˈbʌv/", cn: "在(或向)......上面", example: "The photo is above the bed."},
          {en: "between", phonetic: "/bɪˈtwiːn/", cn: "在(两者)之间", example: "The ball is between the dogs."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 In a nature park",
        words: [
          {en: "forest", phonetic: "/ˈfɒrɪst/", cn: "森林", example: "There is a forest."},
          {en: "river", phonetic: "/ˈrɪvər/", cn: "河", example: "There is a river."},
          {en: "lake", phonetic: "/leɪk/", cn: "湖", example: "There is a lake."},
          {en: "mountain", phonetic: "/ˈmaʊntən/", cn: "山", example: "There is a mountain."},
          {en: "hill", phonetic: "/hɪl/", cn: "山丘", example: "There is a hill."},
          {en: "tree", phonetic: "/triː/", cn: "树", example: "There is a tree."},
          {en: "bridge", phonetic: "/brɪdʒ/", cn: "桥", example: "There is a bridge."},
          {en: "building", phonetic: "/ˈbɪldɪŋ/", cn: "建筑物", example: "There is a building."},
          {en: "village", phonetic: "/ˈvɪlɪdʒ/", cn: "村庄", example: "There is a village."},
          {en: "house", phonetic: "/haʊs/", cn: "房子", example: "There is a house."},
          {en: "boating", phonetic: "/ˈbəʊtɪŋ/", cn: "划船", example: "Let's go boating."},
          {en: "go boating", phonetic: "/ɡəʊ ˈbəʊtɪŋ/", cn: "去划船", example: "Let's go boating."},
          {en: "rabbit", phonetic: "/ˈræbɪt/", cn: "兔子", example: "I see a rabbit."},
          {en: "high", phonetic: "/haɪ/", cn: "高的", example: "High mountains."}
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
          {en: "have...class", phonetic: "/hæv klɑːs/", cn: "上......课", example: "I have English class."},
          {en: "play sports", phonetic: "/pleɪ ˈspɔːrts/", cn: "做体育运动", example: "I play sports."},
          {en: "exercise", phonetic: "/ˈeksərsaɪz/", cn: "活动；运动", example: "I exercise every day."},
          {en: "do morning exercises", phonetic: "/duː ˈmɔːrnɪŋ ˈeksərsaɪzɪz/", cn: "做早操", example: "Do morning exercises."},
          {en: "eat dinner", phonetic: "/iːt ˈdɪnər/", cn: "吃晚饭", example: "I eat dinner at 6."},
          {en: "clean my room", phonetic: "/kliːn maɪ ruːm/", cn: "打扫房间", example: "I clean my room."},
          {en: "go for a walk", phonetic: "/ɡəʊ fɔːr ə wɔːk/", cn: "散步", example: "Go for a walk."},
          {en: "go shopping", phonetic: "/ɡəʊ ˈʃɒpɪŋ/", cn: "购物", example: "I go shopping."},
          {en: "take", phonetic: "/teɪk/", cn: "学习；上(课)", example: "Take a dancing class."},
          {en: "dancing", phonetic: "/ˈdɑːnsɪŋ/", cn: "跳舞", example: "I like dancing."},
          {en: "when", phonetic: "/wen/", cn: "什么时候", example: "When do you...?"},
          {en: "after", phonetic: "/ˈɑːftər/", cn: "在(时间)后", example: "After school."},
          {en: "start", phonetic: "/stɑːrt/", cn: "开始", example: "School starts."},
          {en: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常地", example: "I usually..."},
          {en: "Spain", phonetic: "/speɪn/", cn: "西班牙", example: "I'm from Spain."},
          {en: "late", phonetic: "/leɪt/", cn: "晚；迟", example: "Don't be late."},
          {en: "a.m.", phonetic: "/ˌeɪ ˈem/", cn: "午前", example: "At 7 a.m."},
          {en: "p.m.", phonetic: "/ˌpiː ˈem/", cn: "午后", example: "At 3 p.m."},
          {en: "why", phonetic: "/waɪ/", cn: "为什么", example: "Why do you...?"},
          {en: "shop", phonetic: "/ʃɒp/", cn: "去买东西", example: "I go shopping."},
          {en: "work", phonetic: "/wɜːrk/", cn: "工作", example: "I work at night."},
          {en: "last", phonetic: "/lɑːst/", cn: "上一个的", example: "Last weekend."},
          {en: "sound", phonetic: "/saʊnd/", cn: "听起来", example: "That sounds good."},
          {en: "also", phonetic: "/ˈɔːlsəʊ/", cn: "还；也", example: "I also..."},
          {en: "busy", phonetic: "/ˈbɪzi/", cn: "忙的", example: "I'm busy."},
          {en: "need", phonetic: "/niːd/", cn: "需要", example: "I need..."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 My favourite season",
        words: [
          {en: "spring", phonetic: "/sprɪŋ/", cn: "春天", example: "I like spring."},
          {en: "summer", phonetic: "/ˈsʌmər/", cn: "夏天", example: "I like summer."},
          {en: "autumn", phonetic: "/ˈɔːtəm/", cn: "秋天", example: "I like autumn."},
          {en: "fall", phonetic: "/fɔːl/", cn: "秋天", example: "I like fall."},
          {en: "winter", phonetic: "/ˈwɪntər/", cn: "冬天", example: "I like winter."},
          {en: "season", phonetic: "/ˈsiːzn/", cn: "季节", example: "My favourite season."},
          {en: "picnic", phonetic: "/ˈpɪknɪk/", cn: "野餐", example: "Go on a picnic."},
          {en: "go on a picnic", phonetic: "/ɡəʊ ɒn ə ˈpɪknɪk/", cn: "去野餐", example: "We go on a picnic."},
          {en: "pick", phonetic: "/pɪk/", cn: "摘", example: "Pick apples."},
          {en: "pick apples", phonetic: "/pɪk ˈæplz/", cn: "摘苹果", example: "We pick apples."},
          {en: "snowman", phonetic: "/ˈsnəʊmæn/", cn: "雪人", example: "Make a snowman."},
          {en: "make a snowman", phonetic: "/meɪk ə ˈsnəʊmæn/", cn: "堆雪人", example: "Let's make a snowman."},
          {en: "go swimming", phonetic: "/ɡəʊ ˈswɪmɪŋ/", cn: "去游泳", example: "I go swimming."},
          {en: "which", phonetic: "/wɪtʃ/", cn: "哪一个", example: "Which season?"},
          {en: "best", phonetic: "/best/", cn: "最", example: "I like spring best."},
          {en: "snow", phonetic: "/snəʊ/", cn: "雪", example: "I like snow."},
          {en: "good job", phonetic: "/ɡʊd dʒɒb/", cn: "做得好", example: "Good job!"},
          {en: "because", phonetic: "/bɪˈkɒz/", cn: "因为", example: "Because I like..."},
          {en: "vacation", phonetic: "/veɪˈkeɪʃn/", cn: "假期", example: "Summer vacation."},
          {en: "all", phonetic: "/ɔːl/", cn: "全；完全", example: "All year."},
          {en: "pink", phonetic: "/pɪŋk/", cn: "粉色", example: "I like pink."},
          {en: "lovely", phonetic: "/ˈlʌvli/", cn: "可爱的", example: "Lovely flowers."},
          {en: "leaf", phonetic: "/liːf/", cn: "叶子", example: "Fall leaves."},
          {en: "leaves", phonetic: "/liːvz/", cn: "叶子(复数)", example: "The leaves fall."},
          {en: "paint", phonetic: "/peɪnt/", cn: "用颜料绘画", example: "Paint a picture."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My school calendar",
        words: [
          {en: "January", phonetic: "/ˈdʒænjuəri/", cn: "一月", example: "In January."},
          {en: "February", phonetic: "/ˈfebruəri/", cn: "二月", example: "In February."},
          {en: "March", phonetic: "/mɑːtʃ/", cn: "三月", example: "In March."},
          {en: "April", phonetic: "/ˈeɪprəl/", cn: "四月", example: "In April."},
          {en: "May", phonetic: "/meɪ/", cn: "五月", example: "In May."},
          {en: "June", phonetic: "/dʒuːn/", cn: "六月", example: "In June."},
          {en: "July", phonetic: "/dʒuˈlaɪ/", cn: "七月", example: "In July."},
          {en: "August", phonetic: "/ˈɔːɡəst/", cn: "八月", example: "In August."},
          {en: "September", phonetic: "/sepˈtembər/", cn: "九月", example: "In September."},
          {en: "October", phonetic: "/ɒkˈtəʊbər/", cn: "十月", example: "In October."},
          {en: "November", phonetic: "/nəʊˈvembər/", cn: "十一月", example: "In November."},
          {en: "December", phonetic: "/dɪˈsembər/", cn: "十二月", example: "In December."},
          {en: "few", phonetic: "/fjuː/", cn: "不多", example: "A few."},
          {en: "a few", phonetic: "/ə fjuː/", cn: "一些", example: "A few days."},
          {en: "thing", phonetic: "/θɪŋ/", cn: "事情", example: "Fun things."},
          {en: "meet", phonetic: "/miːt/", cn: "集会", example: "Sports meet."},
          {en: "sports meet", phonetic: "/spɔːrts miːt/", cn: "运动会", example: "The sports meet."},
          {en: "Easter", phonetic: "/ˈiːstər/", cn: "复活节", example: "At Easter."},
          {en: "trip", phonetic: "/trɪp/", cn: "旅行", example: "School trip."},
          {en: "year", phonetic: "/jɪər/", cn: "年", example: "This year."},
          {en: "plant", phonetic: "/plɑːnt/", cn: "种植", example: "Plant trees."},
          {en: "contest", phonetic: "/ˈkɒntest/", cn: "比赛", example: "Singing contest."},
          {en: "the Great Wall", phonetic: "/ðə ɡreɪt wɔːl/", cn: "长城", example: "Go to the Great Wall."},
          {en: "national", phonetic: "/ˈnæʃnəl/", cn: "国家的", example: "National Day."},
          {en: "American", phonetic: "/əˈmerɪkən/", cn: "美国的", example: "American Thanksgiving."},
          {en: "Thanksgiving", phonetic: "/ˌθæŋksˈɡɪvɪŋ/", cn: "感恩节", example: "Thanksgiving Day."},
          {en: "Christmas", phonetic: "/ˈkrɪsməs/", cn: "圣诞节", example: "At Christmas."},
          {en: "holiday", phonetic: "/ˈhɒlədeɪ/", cn: "假日", example: "Winter holiday."},
          {en: "game", phonetic: "/ɡeɪm/", cn: "游戏", example: "Play games."},
          {en: "roll", phonetic: "/rəʊl/", cn: "滚动", example: "Roll the eggs."},
          {en: "look for", phonetic: "/lʊk fɔːr/", cn: "寻找", example: "Look for eggs."},
          {en: "chocolate", phonetic: "/ˈtʃɒklət/", cn: "巧克力", example: "I like chocolate."},
          {en: "bunny", phonetic: "/ˈbʌni/", cn: "兔子", example: "Easter bunny."},
          {en: "RSVP", phonetic: "/ˌɑːr es viː ˈpiː/", cn: "请赐复", example: "Please RSVP."},
          {en: "by", phonetic: "/baɪ/", cn: "在......之前", example: "By March 23rd."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 When is Easter",
        words: [
          {en: "first", phonetic: "/fɜːrst/", cn: "第一(的)", example: "The first day."},
          {en: "second", phonetic: "/ˈsekənd/", cn: "第二(的)", example: "The second day."},
          {en: "third", phonetic: "/θɜːrd/", cn: "第三(的)", example: "The third day."},
          {en: "fourth", phonetic: "/fɔːrθ/", cn: "第四(的)", example: "The fourth day."},
          {en: "fifth", phonetic: "/fɪfθ/", cn: "第五(的)", example: "The fifth day."},
          {en: "twelfth", phonetic: "/twelfθ/", cn: "第十二(的)", example: "The twelfth day."},
          {en: "twentieth", phonetic: "/ˈtwentiəθ/", cn: "第二十(的)", example: "The twentieth day."},
          {en: "twenty-first", phonetic: "/ˌtwenti ˈfɜːrst/", cn: "第二十一(的)", example: "The twenty-first day."},
          {en: "twenty-third", phonetic: "/ˌtwenti θɜːrd/", cn: "第二十三(的)", example: "The twenty-third day."},
          {en: "thirtieth", phonetic: "/ˈθɜːrtiəθ/", cn: "第三十(的)", example: "The thirtieth day."},
          {en: "special", phonetic: "/ˈspeʃl/", cn: "特殊的", example: "A special day."},
          {en: "fool", phonetic: "/fuːl/", cn: "蠢人", example: "April Fool's Day."},
          {en: "kitten", phonetic: "/ˈkɪtn/", cn: "小猫", example: "A cute kitten."},
          {en: "diary", phonetic: "/ˈdaɪəri/", cn: "日记", example: "Write a diary."},
          {en: "still", phonetic: "/stɪl/", cn: "仍然", example: "Still young."},
          {en: "noise", phonetic: "/nɔɪz/", cn: "声音", example: "Make noises."},
          {en: "fur", phonetic: "/fɜːr/", cn: "皮毛", example: "White fur."},
          {en: "open", phonetic: "/ˈəʊpən/", cn: "开着的", example: "Open eyes."},
          {en: "walk", phonetic: "/wɔːk/", cn: "行走", example: "Walk around."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 Whose dog is it",
        words: [
          {en: "mine", phonetic: "/maɪn/", cn: "我的", example: "It's mine."},
          {en: "yours", phonetic: "/jɔːrz/", cn: "你的", example: "It's yours."},
          {en: "his", phonetic: "/hɪz/", cn: "他的", example: "It's his."},
          {en: "hers", phonetic: "/hɜːrz/", cn: "她的", example: "It's hers."},
          {en: "theirs", phonetic: "/ðeərz/", cn: "他们的", example: "It's theirs."},
          {en: "ours", phonetic: "/ˈaʊərz/", cn: "我们的", example: "It's ours."},
          {en: "climbing", phonetic: "/ˈklaɪmɪŋ/", cn: "攀登", example: "Is climbing."},
          {en: "eating", phonetic: "/ˈiːtɪŋ/", cn: "吃", example: "Is eating."},
          {en: "playing", phonetic: "/ˈpleɪɪŋ/", cn: "玩耍", example: "Is playing."},
          {en: "jumping", phonetic: "/ˈdʒʌmpɪŋ/", cn: "跳", example: "Is jumping."},
          {en: "drinking", phonetic: "/ˈdrɪŋkɪŋ/", cn: "喝", example: "Is drinking."},
          {en: "sleeping", phonetic: "/ˈsliːpɪŋ/", cn: "睡觉", example: "Is sleeping."},
          {en: "each", phonetic: "/iːtʃ/", cn: "每个", example: "Each other."},
          {en: "other", phonetic: "/ˈʌðər/", cn: "其他", example: "Each other."},
          {en: "each other", phonetic: "/iːtʃ ˈʌðər/", cn: "相互", example: "Play with each other."},
          {en: "excited", phonetic: "/ɪkˈsaɪtɪd/", cn: "兴奋的", example: "I'm excited."},
          {en: "like", phonetic: "/laɪk/", cn: "像......那样", example: "Like flying."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 Work quietly",
        words: [
          {en: "doing morning exercises", phonetic: "/ˈduːɪŋ ˈmɔːrnɪŋ ˈeksərsaɪzɪz/", cn: "做早操", example: "Are doing morning exercises."},
          {en: "having...class", phonetic: "/ˈhævɪŋ klɑːs/", cn: "上......课", example: "Are having English class."},
          {en: "eating lunch", phonetic: "/ˈiːtɪŋ lʌntʃ/", cn: "吃午饭", example: "Are eating lunch."},
          {en: "reading a book", phonetic: "/ˈriːdɪŋ ə bʊk/", cn: "看书", example: "Is reading a book."},
          {en: "listening to music", phonetic: "/ˈlɪsənɪŋ tuː ˈmjuːzɪk/", cn: "听音乐", example: "Is listening to music."},
          {en: "keep", phonetic: "/kiːp/", cn: "保持", example: "Keep to the right."},
          {en: "keep to the right", phonetic: "/kiːp tuː ðə raɪt/", cn: "靠右", example: "Keep to the right."},
          {en: "keep your desk clean", phonetic: "/kiːp jɔːr desk kliːn/", cn: "保持桌面整洁", example: "Keep your desk clean."},
          {en: "talk quietly", phonetic: "/tɔːk ˈkwaɪətli/", cn: "小声讲话", example: "Talk quietly."},
          {en: "turn", phonetic: "/tɜːrn/", cn: "顺序", example: "Take turns."},
          {en: "take turns", phonetic: "/teɪk tɜːrnz/", cn: "按顺序来", example: "Take turns."},
          {en: "bamboo", phonetic: "/ˌbæmˈbuː/", cn: "竹子", example: "Bamboo shoots."},
          {en: "its", phonetic: "/ɪts/", cn: "它的", example: "Its eyes."},
          {en: "show", phonetic: "/ʃəʊ/", cn: "给人看", example: "Show me."},
          {en: "anything", phonetic: "/ˈeniθɪŋ/", cn: "任何事", example: "Do anything."},
          {en: "else", phonetic: "/els/", cn: "另外", example: "What else?"},
          {en: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", cn: "展览", example: "Art exhibition."},
          {en: "say", phonetic: "/seɪ/", cn: "说", example: "Say something."},
          {en: "have a look", phonetic: "/hæv ə lʊk/", cn: "看一看", example: "Have a look."},
          {en: "sushi", phonetic: "/ˈsuːʃi/", cn: "寿司", example: "I like sushi."},
          {en: "teach", phonetic: "/tiːtʃ/", cn: "教", example: "Teach English."},
          {en: "sure", phonetic: "/ʃʊər/", cn: "当然", example: "Sure."},
          {en: "Canadian", phonetic: "/kəˈneɪdiən/", cn: "加拿大的", example: "I'm Canadian."},
          {en: "Spanish", phonetic: "/ˈspænɪʃ/", cn: "西班牙的", example: "I'm Spanish."},
          {en: "American", phonetic: "/əˈmerɪkən/", cn: "美国的", example: "I'm American."}
        ]
      }
    ]
  },
  // 六年级上册
  grade6: {
    units: [
      {
        unit: 1,
        title: "Unit 1 How can I get there",
        words: [
          {en: "science", phonetic: "/ˈsaɪəns/", cn: "科学", example: "I like science."},
          {en: "museum", phonetic: "/mjuˈziːəm/", cn: "博物馆", example: "Go to the museum."},
          {en: "post office", phonetic: "/pəʊst ˈɒfɪs/", cn: "邮局", example: "At the post office."},
          {en: "bookstore", phonetic: "/ˈbʊkstɔːr/", cn: "书店", example: "In the bookstore."},
          {en: "cinema", phonetic: "/ˈsɪnəmə/", cn: "电影院", example: "At the cinema."},
          {en: "hospital", phonetic: "/ˈhɒspɪtl/", cn: "医院", example: "Go to the hospital."},
          {en: "crossing", phonetic: "/ˈkrɒsɪŋ/", cn: "十字路口", example: "At the crossing."},
          {en: "turn", phonetic: "/tɜːrn/", cn: "转弯", example: "Turn left."},
          {en: "left", phonetic: "/left/", cn: "左", example: "Turn left."},
          {en: "straight", phonetic: "/streɪt/", cn: "笔直地", example: "Go straight."},
          {en: "right", phonetic: "/raɪt/", cn: "右", example: "Turn right."},
          {en: "ask", phonetic: "/ɑːsk/", cn: "问", example: "Ask the way."},
          {en: "sir", phonetic: "/sɜːr/", cn: "先生", example: "Excuse me, sir."},
          {en: "interesting", phonetic: "/ˈɪntrəstɪŋ/", cn: "有趣的", example: "It's interesting."},
          {en: "Italian", phonetic: "/ɪˈtæliən/", cn: "意大利的", example: "Italian food."},
          {en: "restaurant", phonetic: "/ˈrestrɒnt/", cn: "餐馆", example: "At the restaurant."},
          {en: "pizza", phonetic: "/ˈpiːtsə/", cn: "比萨饼", example: "I like pizza."},
          {en: "street", phonetic: "/striːt/", cn: "大街", example: "On the street."},
          {en: "get", phonetic: "/ɡet/", cn: "到达", example: "Get there."},
          {en: "GPS", phonetic: "/ˌdʒiː piː ˈes/", cn: "导航", example: "Use GPS."},
          {en: "gave", phonetic: "/ɡeɪv/", cn: "提供(give的过去式)", example: "He gave me..."},
          {en: "feature", phonetic: "/ˈfiːtʃər/", cn: "特点", example: "A new feature."},
          {en: "follow", phonetic: "/ˈfɒləʊ/", cn: "跟着", example: "Follow me."},
          {en: "far", phonetic: "/fɑːr/", cn: "较远的", example: "It's far."},
          {en: "tell", phonetic: "/tel/", cn: "告诉", example: "Tell me."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Ways to go to school",
        words: [
          {en: "on foot", phonetic: "/ɒn fʊt/", cn: "步行", example: "I go on foot."},
          {en: "by", phonetic: "/baɪ/", cn: "乘", example: "By bus."},
          {en: "bus", phonetic: "/bʌs/", cn: "公共汽车", example: "By bus."},
          {en: "plane", phonetic: "/pleɪn/", cn: "飞机", example: "By plane."},
          {en: "taxi", phonetic: "/ˈtæksi/", cn: "出租汽车", example: "By taxi."},
          {en: "ship", phonetic: "/ʃɪp/", cn: "船", example: "By ship."},
          {en: "subway", phonetic: "/ˈsʌbweɪ/", cn: "地铁", example: "By subway."},
          {en: "train", phonetic: "/treɪn/", cn: "火车", example: "By train."},
          {en: "slow", phonetic: "/sləʊ/", cn: "慢的", example: "Slow down."},
          {en: "down", phonetic: "/daʊn/", cn: "减少；降低", example: "Slow down."},
          {en: "slow down", phonetic: "/sləʊ daʊn/", cn: "慢下来", example: "Slow down."},
          {en: "stop", phonetic: "/stɒp/", cn: "停下", example: "Stop."},
          {en: "wait", phonetic: "/weɪt/", cn: "等待", example: "Wait."},
          {en: "Mrs", phonetic: "/ˈmɪsɪz/", cn: "夫人", example: "Mrs Smith."},
          {en: "early", phonetic: "/ˈɜːrli/", cn: "早到的", example: "Be early."},
          {en: "helmet", phonetic: "/ˈhelmɪt/", cn: "头盔", example: "Wear a helmet."},
          {en: "must", phonetic: "/mʌst/", cn: "必须", example: "You must..."},
          {en: "wear", phonetic: "/weər/", cn: "戴", example: "Wear a helmet."},
          {en: "attention", phonetic: "/əˈtenʃn/", cn: "注意", example: "Pay attention."},
          {en: "pay attention to", phonetic: "/peɪ əˈtenʃn tuː/", cn: "注意", example: "Pay attention to..."},
          {en: "traffic", phonetic: "/ˈtræfɪk/", cn: "交通", example: "Traffic lights."},
          {en: "traffic lights", phonetic: "/ˈtræfɪk laɪts/", cn: "交通信号灯", example: "Look at traffic lights."},
          {en: "Munich", phonetic: "/ˈmjuːnɪk/", cn: "慕尼黑", example: "In Munich."},
          {en: "Germany", phonetic: "/ˈdʒɜːrməni/", cn: "德国", example: "In Germany."},
          {en: "Alaska", phonetic: "/əˈlæskə/", cn: "阿拉斯加州", example: "In Alaska."},
          {en: "sled", phonetic: "/sled/", cn: "雪橇", example: "By sled."},
          {en: "fast", phonetic: "/fɑːst/", cn: "快的", example: "Fast and fun."},
          {en: "ferry", phonetic: "/ˈferi/", cn: "轮渡", example: "By ferry."},
          {en: "Papa Westray", phonetic: "/ˈpɑːpə ˈwestreɪ/", cn: "帕帕韦斯特雷岛", example: "Papa Westray."},
          {en: "Scotland", phonetic: "/ˈskɒtlənd/", cn: "苏格兰", example: "In Scotland."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 My weekend plan",
        words: [
          {en: "visit", phonetic: "/ˈvɪzɪt/", cn: "拜访", example: "Visit my grandparents."},
          {en: "film", phonetic: "/fɪlm/", cn: "电影", example: "See a film."},
          {en: "see a film", phonetic: "/siː ə fɪlm/", cn: "看电影", example: "I'm going to see a film."},
          {en: "trip", phonetic: "/trɪp/", cn: "旅行", example: "Take a trip."},
          {en: "take a trip", phonetic: "/teɪk ə trɪp/", cn: "去旅行", example: "I'm going to take a trip."},
          {en: "supermarket", phonetic: "/ˈsuːpəmɑːrkɪt/", cn: "超市", example: "Go to the supermarket."},
          {en: "evening", phonetic: "/ˈiːvnɪŋ/", cn: "晚上", example: "This evening."},
          {en: "tonight", phonetic: "/təˈnaɪt/", cn: "在今晚", example: "Tonight."},
          {en: "tomorrow", phonetic: "/təˈmɒrəʊ/", cn: "明天", example: "Tomorrow."},
          {en: "next week", phonetic: "/nekst wiːk/", cn: "下周", example: "Next week."},
          {en: "dictionary", phonetic: "/ˈdɪkʃəneri/", cn: "词典", example: "A dictionary."},
          {en: "comic", phonetic: "/ˈkɒmɪk/", cn: "滑稽的", example: "Comic book."},
          {en: "comic book", phonetic: "/ˈkɒmɪk bʊk/", cn: "连环画册", example: "Buy a comic book."},
          {en: "word book", phonetic: "/wɜːrd bʊk/", cn: "单词书", example: "Buy a word book."},
          {en: "postcard", phonetic: "/ˈpəʊstkɑːrd/", cn: "明信片", example: "Buy a postcard."},
          {en: "lesson", phonetic: "/ˈlesn/", cn: "课", example: "Take a lesson."},
          {en: "space", phonetic: "/speɪs/", cn: "太空", example: "Space travel."},
          {en: "travel", phonetic: "/ˈtrævl/", cn: "旅行", example: "Space travel."},
          {en: "half price", phonetic: "/hɑːf praɪs/", cn: "半价", example: "Half price."},
          {en: "moon", phonetic: "/muːn/", cn: "月亮", example: "Go to the moon."},
          {en: "get together", phonetic: "/ɡet təˈɡeðər/", cn: "聚会", example: "Get together."},
          {en: "poem", phonetic: "/ˈpəʊɪm/", cn: "诗", example: "Read a poem."},
          {en: "mooncake", phonetic: "/ˈmuːnkeɪk/", cn: "月饼", example: "Eat mooncakes."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 I have a pen pal",
        words: [
          {en: "studies", phonetic: "/ˈstʌdiz/", cn: "学习", example: "He studies Chinese."},
          {en: "puzzle", phonetic: "/ˈpʌzl/", cn: "谜", example: "Do word puzzles."},
          {en: "hiking", phonetic: "/ˈhaɪkɪŋ/", cn: "远足", example: "Go hiking."},
          {en: "jasmine", phonetic: "/ˈdʒæzmɪn/", cn: "茉莉", example: "Jasmine flower."},
          {en: "idea", phonetic: "/aɪˈdɪə/", cn: "想法", example: "Good idea."},
          {en: "Canberra", phonetic: "/ˈkænbərə/", cn: "堪培拉", example: "In Canberra."},
          {en: "amazing", phonetic: "/əˈmeɪzɪŋ/", cn: "令人惊奇的", example: "That's amazing."},
          {en: "shall", phonetic: "/ʃæl/", cn: "表示征求意见", example: "Shall we...?"},
          {en: "goal", phonetic: "/ɡəʊl/", cn: "射门", example: "Score a goal."},
          {en: "join", phonetic: "/dʒɔɪn/", cn: "加入", example: "Join us."},
          {en: "club", phonetic: "/klʌb/", cn: "俱乐部", example: "Join the club."},
          {en: "share", phonetic: "/ʃeər/", cn: "分享", example: "Share with me."}
        ]
      },
      {
        unit: 5,
        title: "Unit 5 What does he do",
        words: [
          {en: "factory worker", phonetic: "/ˈfæktri ˈwɜːrkər/", cn: "工厂工人", example: "He's a factory worker."},
          {en: "postman", phonetic: "/ˈpəʊstmən/", cn: "邮递员", example: "He's a postman."},
          {en: "businessman", phonetic: "/ˈbɪznəsmæn/", cn: "商人", example: "He's a businessman."},
          {en: "police officer", phonetic: "/pəˈliːs ˈɒfɪsər/", cn: "警察", example: "He's a police officer."},
          {en: "fisherman", phonetic: "/ˈfɪʃərmən/", cn: "渔民", example: "He's a fisherman."},
          {en: "scientist", phonetic: "/ˈsaɪəntɪst/", cn: "科学家", example: "He's a scientist."},
          {en: "pilot", phonetic: "/ˈpaɪlət/", cn: "飞行员", example: "He's a pilot."},
          {en: "coach", phonetic: "/kəʊtʃ/", cn: "教练", example: "He's a coach."},
          {en: "country", phonetic: "/ˈkʌntri/", cn: "国家", example: "In this country."},
          {en: "head teacher", phonetic: "/hed ˈtiːtʃər/", cn: "校长", example: "She's a head teacher."},
          {en: "sea", phonetic: "/siː/", cn: "大海", example: "By the sea."},
          {en: "stay", phonetic: "/steɪ/", cn: "保持", example: "Stay healthy."},
          {en: "university", phonetic: "/ˌjuːnɪˈvɜːrsəti/", cn: "大学", example: "At a university."},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "In a gym."},
          {en: "if", phonetic: "/ɪf/", cn: "如果", example: "If you like..."},
          {en: "reporter", phonetic: "/rɪˈpɔːrtər/", cn: "记者", example: "He's a reporter."},
          {en: "use", phonetic: "/juːz/", cn: "使用", example: "Use a computer."},
          {en: "type", phonetic: "/taɪp/", cn: "打字", example: "Type quickly."},
          {en: "quickly", phonetic: "/ˈkwɪkli/", cn: "迅速地", example: "Type quickly."},
          {en: "secretary", phonetic: "/ˈsekrəteri/", cn: "秘书", example: "She's a secretary."}
        ]
      },
      {
        unit: 6,
        title: "Unit 6 How do you feel",
        words: [
          {en: "angry", phonetic: "/ˈæŋɡri/", cn: "生气的", example: "I'm angry."},
          {en: "afraid", phonetic: "/əˈfreɪd/", cn: "害怕", example: "I'm afraid."},
          {en: "sad", phonetic: "/sæd/", cn: "难过的", example: "I'm sad."},
          {en: "worried", phonetic: "/ˈwʌrid/", cn: "担心的", example: "I'm worried."},
          {en: "happy", phonetic: "/ˈhæpi/", cn: "高兴的", example: "I'm happy."},
          {en: "see a doctor", phonetic: "/siː ə ˈdɒktər/", cn: "看病", example: "You should see a doctor."},
          {en: "wear", phonetic: "/weər/", cn: "穿", example: "Wear warm clothes."},
          {en: "more", phonetic: "/mɔːr/", cn: "更多的", example: "Do more exercise."},
          {en: "deep", phonetic: "/diːp/", cn: "深的", example: "Take a deep breath."},
          {en: "breath", phonetic: "/breθ/", cn: "呼吸", example: "Take a breath."},
          {en: "take a deep breath", phonetic: "/teɪk ə diːp breθ/", cn: "深深吸一口气", example: "Take a deep breath."},
          {en: "count", phonetic: "/kaʊnt/", cn: "数数", example: "Count to ten."},
          {en: "count to ten", phonetic: "/kaʊnt tuː ten/", cn: "数到十", example: "Count to ten."}
        ]
      }
    ]
  },
  // 六年级下册
  grade6b: {
    units: [
      {
        unit: 1,
        title: "Unit 1 How tall are you",
        words: [
          {en: "taller", phonetic: "/ˈtɔːlər/", cn: "更高的", example: "I'm taller."},
          {en: "shorter", phonetic: "/ˈʃɔːrtər/", cn: "更矮的", example: "He's shorter."},
          {en: "stronger", phonetic: "/ˈstrɒŋɡər/", cn: "更强壮的", example: "He's stronger."},
          {en: "older", phonetic: "/ˈəʊldər/", cn: "更年长的", example: "I'm older."},
          {en: "younger", phonetic: "/ˈjʌŋɡər/", cn: "更年轻的", example: "She's younger."},
          {en: "bigger", phonetic: "/ˈbɪɡər/", cn: "更大的", example: "It's bigger."},
          {en: "smaller", phonetic: "/ˈsmɔːlər/", cn: "更小的", example: "It's smaller."},
          {en: "metre", phonetic: "/ˈmiːtər/", cn: "米", example: "I'm 1.6 metres."},
          {en: "than", phonetic: "/ðæn/", cn: "比", example: "Taller than me."},
          {en: "dinosaur", phonetic: "/ˈdaɪnəsɔːr/", cn: "恐龙", example: "A big dinosaur."},
          {en: "hall", phonetic: "/hɔːl/", cn: "大厅", example: "In the hall."},
          {en: "dining hall", phonetic: "/ˈdaɪnɪŋ hɔːl/", cn: "饭厅", example: "In the dining hall."},
          {en: "both", phonetic: "/bəʊθ/", cn: "两个都", example: "We both..."},
          {en: "kilogram", phonetic: "/ˈkɪləɡræm/", cn: "千克", example: "40 kilograms."},
          {en: "countryside", phonetic: "/ˈkʌntrisaɪd/", cn: "乡村", example: "In the countryside."},
          {en: "lower", phonetic: "/ˈləʊər/", cn: "更低的", example: "Lower and lower."},
          {en: "shadow", phonetic: "/ˈʃædəʊ/", cn: "影子", example: "My shadow."},
          {en: "smarter", phonetic: "/ˈsmɑːrtər/", cn: "更聪明的", example: "I'm smarter."},
          {en: "become", phonetic: "/bɪˈkʌm/", cn: "开始变得", example: "Become longer."}
        ]
      },
      {
        unit: 2,
        title: "Unit 2 Last weekend",
        words: [
          {en: "cleaned", phonetic: "/kliːnd/", cn: "打扫", example: "I cleaned my room."},
          {en: "stayed", phonetic: "/steɪd/", cn: "停留", example: "I stayed at home."},
          {en: "washed", phonetic: "/wɒʃt/", cn: "洗", example: "I washed my clothes."},
          {en: "watched", phonetic: "/wɒtʃt/", cn: "看", example: "I watched TV."},
          {en: "had", phonetic: "/hæd/", cn: "有", example: "I had a cold."},
          {en: "had a cold", phonetic: "/hæd ə kəʊld/", cn: "感冒", example: "I had a cold."},
          {en: "slept", phonetic: "/slept/", cn: "睡觉", example: "I slept late."},
          {en: "read", phonetic: "/riːd/", cn: "读", example: "I read a book."},
          {en: "saw", phonetic: "/sɔː/", cn: "看见", example: "I saw a film."},
          {en: "last", phonetic: "/lɑːst/", cn: "最近的", example: "Last weekend."},
          {en: "yesterday", phonetic: "/ˈjestərdeɪ/", cn: "昨天", example: "Yesterday."},
          {en: "before", phonetic: "/bɪˈfɔːr/", cn: "在......之前", example: "The day before yesterday."},
          {en: "drank", phonetic: "/dræŋk/", cn: "喝", example: "I drank tea."},
          {en: "show", phonetic: "/ʃəʊ/", cn: "演出", example: "A fashion show."},
          {en: "magazine", phonetic: "/ˌmæɡəˈziːn/", cn: "杂志", example: "A magazine."},
          {en: "better", phonetic: "/ˈbetər/", cn: "更好的", example: "Feel better."},
          {en: "faster", phonetic: "/ˈfæstər/", cn: "更快的", example: "Run faster."},
          {en: "hotel", phonetic: "/həʊˈtel/", cn: "旅馆", example: "In a hotel."},
          {en: "fixed", phonetic: "/fɪkst/", cn: "修理", example: "I fixed the bike."},
          {en: "broken", phonetic: "/ˈbrəʊkən/", cn: "破损的", example: "A broken bike."},
          {en: "lamp", phonetic: "/læmp/", cn: "台灯", example: "A lamp."},
          {en: "loud", phonetic: "/laʊd/", cn: "大声的", example: "Too loud."},
          {en: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", cn: "享受", example: "Enjoy the moon."},
          {en: "stay", phonetic: "/steɪ/", cn: "暂住", example: "Stay with us."}
        ]
      },
      {
        unit: 3,
        title: "Unit 3 Where did you go",
        words: [
          {en: "went", phonetic: "/went/", cn: "去", example: "I went to..."},
          {en: "camp", phonetic: "/kæmp/", cn: "野营", example: "Go camping."},
          {en: "went camping", phonetic: "/went ˈkæmpɪŋ/", cn: "去野营", example: "I went camping."},
          {en: "fish", phonetic: "/fɪʃ/", cn: "钓鱼", example: "Go fishing."},
          {en: "went fishing", phonetic: "/went ˈfɪʃɪŋ/", cn: "去钓鱼", example: "I went fishing."},
          {en: "rode", phonetic: "/rəʊd/", cn: "骑", example: "I rode a bike."},
          {en: "hurt", phonetic: "/hɜːrt/", cn: "受伤", example: "I hurt my foot."},
          {en: "ate", phonetic: "/et/", cn: "吃", example: "I ate fresh food."},
          {en: "took", phonetic: "/tʊk/", cn: "拍照", example: "I took pictures."},
          {en: "took pictures", phonetic: "/tʊk ˈpɪktʃərz/", cn: "照相", example: "I took pictures."},
          {en: "bought", phonetic: "/bɔːt/", cn: "买", example: "I bought gifts."},
          {en: "gift", phonetic: "/ɡɪft/", cn: "礼物", example: "Buy gifts."},
          {en: "fell", phonetic: "/fel/", cn: "摔倒", example: "I fell off."},
          {en: "off", phonetic: "/ɒf/", cn: "从......落下", example: "Fall off."},
          {en: "fell off", phonetic: "/fel ɒf/", cn: "从......摔下来", example: "I fell off."},
          {en: "Labour Day", phonetic: "/ˈleɪbər deɪ/", cn: "劳动节", example: "On Labour Day."},
          {en: "mule", phonetic: "/mjuːl/", cn: "骡子", example: "Ride a mule."},
          {en: "Turpan", phonetic: "/ˈtʊəpɑːn/", cn: "吐鲁番", example: "In Turpan."},
          {en: "could", phonetic: "/kʊd/", cn: "能", example: "I could..."},
          {en: "till", phonetic: "/tɪl/", cn: "直到", example: "Till next time."}
        ]
      },
      {
        unit: 4,
        title: "Unit 4 Then and now",
        words: [
          {en: "dining hall", phonetic: "/ˈdaɪnɪŋ hɔːl/", cn: "饭厅", example: "In the dining hall."},
          {en: "grass", phonetic: "/ɡrɑːs/", cn: "草坪", example: "On the grass."},
          {en: "gym", phonetic: "/dʒɪm/", cn: "体育馆", example: "In the gym."},
          {en: "ago", phonetic: "/əˈɡəʊ/", cn: "以前", example: "Years ago."},
          {en: "cycling", phonetic: "/ˈsaɪklɪŋ/", cn: "骑自行车运动", example: "Go cycling."},
          {en: "go cycling", phonetic: "/ɡəʊ ˈsaɪklɪŋ/", cn: "去骑自行车", example: "I went cycling."},
          {en: "ice-skate", phonetic: "/ˈaɪs skeɪt/", cn: "滑冰", example: "Go ice-skating."},
          {en: "badminton", phonetic: "/ˈbædmɪntən/", cn: "羽毛球", example: "Play badminton."},
          {en: "star", phonetic: "/stɑːr/", cn: "星", example: "A movie star."},
          {en: "easy", phonetic: "/ˈiːzi/", cn: "容易的", example: "It's easy."},
          {en: "look up", phonetic: "/lʊk ʌp/", cn: "查阅", example: "Look it up."},
          {en: "Internet", phonetic: "/ˈɪntərnet/", cn: "互联网", example: "On the Internet."},
          {en: "different", phonetic: "/ˈdɪfrənt/", cn: "不同的", example: "Very different."},
          {en: "active", phonetic: "/ˈæktɪv/", cn: "积极的", example: "Be active."},
          {en: "race", phonetic: "/reɪs/", cn: "赛跑", example: "A race."},
          {en: "nothing", phonetic: "/ˈnʌθɪŋ/", cn: "没有什么", example: "Nothing."},
          {en: "thought", phonetic: "/θɔːt/", cn: "想", example: "I thought..."},
          {en: "felt", phonetic: "/felt/", cn: "感觉", example: "I felt happy."},
          {en: "cheetah", phonetic: "/ˈtʃiːtə/", cn: "猎豹", example: "A cheetah."},
          {en: "trip", phonetic: "/trɪp/", cn: "绊倒", example: "Trip over."},
          {en: "woke", phonetic: "/wəʊk/", cn: "醒", example: "I woke up."},
          {en: "dream", phonetic: "/driːm/", cn: "梦", example: "A dream."}
        ]
      }
    ]
  }
};

// 生成课文数据（从单词数据中提取）
const textsData = {};

// 为每个年级生成课文数据
Object.keys(wordsData).forEach(gradeKey => {
  const gradeData = wordsData[gradeKey];
  if (gradeData && gradeData.units) {
    textsData[gradeKey] = gradeData.units.map(unit => ({
      unit: unit.unit,
      title: unit.title,
      dialogs: unit.words.map(word => ({
        en: word.example,
        cn: word.cn
      }))
    }));
  }
});

// 同时导出 wordsData 和 textsData
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    wordsData,
    textsData
  };
}
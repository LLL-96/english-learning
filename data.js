// 小学英语单词和课文数据 - 1-6年级全覆盖
const englishData = {
    // 一年级单词 (基础词汇)
    1: {
        words: [
            {en: "hello", phonetic: "/həˈloʊ/", cn: "你好", example: "Hello, how are you?", exampleCn: "你好，你好吗？"},
            {en: "hi", phonetic: "/haɪ/", cn: "嗨", example: "Hi, I'm Tom.", exampleCn: "嗨，我是汤姆。"},
            {en: "goodbye", phonetic: "/ˌɡʊdˈbaɪ/", cn: "再见", example: "Goodbye, see you tomorrow.", exampleCn: "再见，明天见。"},
            {en: "bye", phonetic: "/baɪ/", cn: "拜拜", example: "Bye, mom!", exampleCn: "拜拜，妈妈！"},
            {en: "I", phonetic: "/aɪ/", cn: "我", example: "I am a student.", exampleCn: "我是一名学生。"},
            {en: "am", phonetic: "/æm/", cn: "是", example: "I am happy.", exampleCn: "我很开心。"},
            {en: "is", phonetic: "/ɪz/", cn: "是", example: "She is my friend.", exampleCn: "她是我的朋友。"},
            {en: "are", phonetic: "/ɑːr/", cn: "是", example: "You are nice.", exampleCn: "你很好。"},
            {en: "you", phonetic: "/juː/", cn: "你", example: "How are you?", exampleCn: "你好吗？"},
            {en: "he", phonetic: "/hiː/", cn: "他", example: "He is my brother.", exampleCn: "他是我的哥哥。"},
            {en: "she", phonetic: "/ʃiː/", cn: "她", example: "She is my sister.", exampleCn: "她是我的姐姐。"},
            {en: "it", phonetic: "/ɪt/", cn: "它", example: "It is a cat.", exampleCn: "它是一只猫。"},
            {en: "my", phonetic: "/maɪ/", cn: "我的", example: "This is my book.", exampleCn: "这是我的书。"},
            {en: "your", phonetic: "/jɔːr/", cn: "你的", example: "What's your name?", exampleCn: "你叫什么名字？"},
            {en: "name", phonetic: "/neɪm/", cn: "名字", example: "My name is Lucy.", exampleCn: "我的名字是露西。"},
            {en: "what", phonetic: "/wɒt/", cn: "什么", example: "What is this?", exampleCn: "这是什么？"},
            {en: "this", phonetic: "/ðɪs/", cn: "这个", example: "This is an apple.", exampleCn: "这是一个苹果。"},
            {en: "that", phonetic: "/ðæt/", cn: "那个", example: "That is a dog.", exampleCn: "那是一只狗。"},
            {en: "a", phonetic: "/ə/", cn: "一个", example: "I have a pen.", exampleCn: "我有一支笔。"},
            {en: "an", phonetic: "/ən/", cn: "一个", example: "This is an egg.", exampleCn: "这是一个鸡蛋。"},
            {en: "the", phonetic: "/ðə/", cn: "这个/那个", example: "The sun is hot.", exampleCn: "太阳很热。"},
            {en: "apple", phonetic: "/ˈæpl/", cn: "苹果", example: "I like apples.", exampleCn: "我喜欢苹果。"},
            {en: "banana", phonetic: "/bəˈnɑːnə/", cn: "香蕉", example: "Eat a banana.", exampleCn: "吃一根香蕉。"},
            {en: "cat", phonetic: "/kæt/", cn: "猫", example: "The cat is cute.", exampleCn: "这只猫很可爱。"},
            {en: "dog", phonetic: "/dɒɡ/", cn: "狗", example: "I have a dog.", exampleCn: "我有一只狗。"},
            {en: "book", phonetic: "/bʊk/", cn: "书", example: "Open your book.", exampleCn: "打开你的书。"},
            {en: "pen", phonetic: "/pen/", cn: "钢笔", example: "This is my pen.", exampleCn: "这是我的钢笔。"},
            {en: "pencil", phonetic: "/ˈpensl/", cn: "铅笔", example: "I need a pencil.", exampleCn: "我需要一支铅笔。"},
            {en: "bag", phonetic: "/bæɡ/", cn: "书包", example: "My bag is blue.", exampleCn: "我的书包是蓝色的。"},
            {en: "red", phonetic: "/red/", cn: "红色", example: "I like red.", exampleCn: "我喜欢红色。"},
            {en: "blue", phonetic: "/bluː/", cn: "蓝色", example: "The sky is blue.", exampleCn: "天空是蓝色的。"},
            {en: "yellow", phonetic: "/ˈjeləʊ/", cn: "黄色", example: "The banana is yellow.", exampleCn: "香蕉是黄色的。"},
            {en: "green", phonetic: "/ɡriːn/", cn: "绿色", example: "Grass is green.", exampleCn: "草是绿色的。"},
            {en: "one", phonetic: "/wʌn/", cn: "一", example: "I have one apple.", exampleCn: "我有一个苹果。"},
            {en: "two", phonetic: "/tuː/", cn: "二", example: "I have two books.", exampleCn: "我有两本书。"},
            {en: "three", phonetic: "/θriː/", cn: "三", example: "I am three years old.", exampleCn: "我三岁了。"},
            {en: "four", phonetic: "/fɔːr/", cn: "四", example: "I have four pens.", exampleCn: "我有四支钢笔。"},
            {en: "five", phonetic: "/faɪv/", cn: "五", example: "I have five fingers.", exampleCn: "我有五根手指。"},
            {en: "six", phonetic: "/sɪks/", cn: "六", example: "I am six years old.", exampleCn: "我六岁了。"},
            {en: "seven", phonetic: "/ˈsevn/", cn: "七", example: "There are seven days.", exampleCn: "一周有七天。"},
            {en: "eight", phonetic: "/eɪt/", cn: "八", example: "I have eight toys.", exampleCn: "我有八个玩具。"},
            {en: "nine", phonetic: "/naɪn/", cn: "九", example: "Nine cats are sleeping.", exampleCn: "九只猫在睡觉。"},
            {en: "ten", phonetic: "/ten/", cn: "十", example: "I have ten fingers.", exampleCn: "我有十根手指。"},
            {en: "boy", phonetic: "/bɔɪ/", cn: "男孩", example: "He is a good boy.", exampleCn: "他是个好男孩。"},
            {en: "girl", phonetic: "/ɡɜːrl/", cn: "女孩", example: "She is a pretty girl.", exampleCn: "她是个漂亮的女孩。"},
            {en: "teacher", phonetic: "/ˈtiːtʃər/", cn: "老师", example: "My teacher is kind.", exampleCn: "我的老师很和蔼。"},
            {en: "friend", phonetic: "/frend/", cn: "朋友", example: "Tom is my friend.", exampleCn: "汤姆是我的朋友。"},
            {en: "mom", phonetic: "/mɒm/", cn: "妈妈", example: "I love my mom.", exampleCn: "我爱我的妈妈。"},
            {en: "dad", phonetic: "/dæd/", cn: "爸爸", example: "My dad is tall.", exampleCn: "我的爸爸很高。"}
        ],
        texts: [
            {
                title: "自我介绍",
                content: [
                    {en: "Hello! I'm Tom.", cn: "你好！我是汤姆。"},
                    {en: "I am a boy.", cn: "我是一个男孩。"},
                    {en: "I am six years old.", cn: "我六岁了。"},
                    {en: "I like apples.", cn: "我喜欢苹果。"},
                    {en: "Goodbye!", cn: "再见！"}
                ]
            },
            {
                title: "我的家人",
                content: [
                    {en: "This is my mom.", cn: "这是我的妈妈。"},
                    {en: "She is nice.", cn: "她很好。"},
                    {en: "This is my dad.", cn: "这是我的爸爸。"},
                    {en: "He is tall.", cn: "他很高。"},
                    {en: "I love my family.", cn: "我爱我的家人。"}
                ]
            },
            {
                title: "我的学校",
                content: [
                    {en: "I go to school.", cn: "我去上学。"},
                    {en: "My teacher is kind.", cn: "我的老师很和蔼。"},
                    {en: "I have many friends.", cn: "我有很多朋友。"},
                    {en: "I like my school.", cn: "我喜欢我的学校。"},
                    {en: "School is fun!", cn: "学校很有趣！"}
                ]
            }
        ]
    },
    // 二年级单词
    2: {
        words: [
            {en: "how", phonetic: "/haʊ/", cn: "怎样", example: "How are you?", exampleCn: "你好吗？"},
            {en: "fine", phonetic: "/faɪn/", cn: "好的", example: "I'm fine, thank you.", exampleCn: "我很好，谢谢。"},
            {en: "thank", phonetic: "/θæŋk/", cn: "谢谢", example: "Thank you very much.", exampleCn: "非常感谢你。"},
            {en: "please", phonetic: "/pliːz/", cn: "请", example: "Please sit down.", exampleCn: "请坐下。"},
            {en: "sorry", phonetic: "/ˈsɒri/", cn: "对不起", example: "I'm sorry.", exampleCn: "对不起。"},
            {en: "yes", phonetic: "/jes/", cn: "是", example: "Yes, I can.", exampleCn: "是的，我能。"},
            {en: "no", phonetic: "/nəʊ/", cn: "不", example: "No, thank you.", exampleCn: "不，谢谢。"},
            {en: "can", phonetic: "/kæn/", cn: "能", example: "I can sing.", exampleCn: "我会唱歌。"},
            {en: "do", phonetic: "/duː/", cn: "做", example: "What do you do?", exampleCn: "你做什么？"},
            {en: "like", phonetic: "/laɪk/", cn: "喜欢", example: "I like dogs.", exampleCn: "我喜欢狗。"},
            {en: "have", phonetic: "/hæv/", cn: "有", example: "I have a cat.", exampleCn: "我有一只猫。"},
            {en: "has", phonetic: "/hæz/", cn: "有", example: "She has a book.", exampleCn: "她有一本书。"},
            {en: "big", phonetic: "/bɪɡ/", cn: "大的", example: "The elephant is big.", exampleCn: "大象很大。"},
            {en: "small", phonetic: "/smɔːl/", cn: "小的", example: "The mouse is small.", exampleCn: "老鼠很小。"},
            {en: "long", phonetic: "/lɒŋ/", cn: "长的", example: "The snake is long.", exampleCn: "蛇很长。"},
            {en: "short", phonetic: "/ʃɔːt/", cn: "短的", example: "My hair is short.", exampleCn: "我的头发很短。"},
            {en: "tall", phonetic: "/tɔːl/", cn: "高的", example: "He is very tall.", exampleCn: "他很高。"},
            {en: "fat", phonetic: "/fæt/", cn: "胖的", example: "The pig is fat.", exampleCn: "猪很胖。"},
            {en: "thin", phonetic: "/θɪn/", cn: "瘦的", example: "The monkey is thin.", exampleCn: "猴子很瘦。"},
            {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙子", example: "I like oranges.", exampleCn: "我喜欢橙子。"},
            {en: "pear", phonetic: "/peər/", cn: "梨", example: "This pear is sweet.", exampleCn: "这个梨很甜。"},
            {en: "peach", phonetic: "/piːtʃ/", cn: "桃子", example: "The peach is pink.", exampleCn: "桃子是粉色的。"},
            {en: "watermelon", phonetic: "/ˈwɔːtəmelən/", cn: "西瓜", example: "Watermelon is juicy.", exampleCn: "西瓜很多汁。"},
            {en: "strawberry", phonetic: "/ˈstrɔːbəri/", cn: "草莓", example: "Strawberries are red.", exampleCn: "草莓是红色的。"},
            {en: "grape", phonetic: "/ɡreɪp/", cn: "葡萄", example: "Grapes are purple.", exampleCn: "葡萄是紫色的。"},
            {en: "elephant", phonetic: "/ˈelɪfənt/", cn: "大象", example: "The elephant is big.", exampleCn: "大象很大。"},
            {en: "tiger", phonetic: "/ˈtaɪɡər/", cn: "老虎", example: "The tiger is strong.", exampleCn: "老虎很强壮。"},
            {en: "lion", phonetic: "/ˈlaɪən/", cn: "狮子", example: "The lion is the king.", exampleCn: "狮子是百兽之王。"},
            {en: "monkey", phonetic: "/ˈmʌŋki/", cn: "猴子", example: "The monkey likes bananas.", exampleCn: "猴子喜欢香蕉。"},
            {en: "panda", phonetic: "/ˈpændə/", cn: "熊猫", example: "Pandas are black and white.", exampleCn: "熊猫是黑白相间的。"},
            {en: "rabbit", phonetic: "/ˈræbɪt/", cn: "兔子", example: "The rabbit has long ears.", exampleCn: "兔子有长耳朵。"},
            {en: "bird", phonetic: "/bɜːrd/", cn: "鸟", example: "The bird can fly.", exampleCn: "鸟会飞。"},
            {en: "fish", phonetic: "/fɪʃ/", cn: "鱼", example: "Fish swim in water.", exampleCn: "鱼在水里游。"},
            {en: "duck", phonetic: "/dʌk/", cn: "鸭子", example: "The duck says quack.", exampleCn: "鸭子嘎嘎叫。"},
            {en: "chicken", phonetic: "/ˈtʃɪkɪn/", cn: "鸡", example: "The chicken lays eggs.", exampleCn: "鸡会下蛋。"},
            {en: "pig", phonetic: "/pɪɡ/", cn: "猪", example: "The pig says oink.", exampleCn: "猪哼哼叫。"},
            {en: "cow", phonetic: "/kaʊ/", cn: "奶牛", example: "The cow gives milk.", exampleCn: "奶牛产奶。"},
            {en: "sheep", phonetic: "/ʃiːp/", cn: "绵羊", example: "The sheep has wool.", exampleCn: "绵羊有羊毛。"},
            {en: "horse", phonetic: "/hɔːrs/", cn: "马", example: "The horse runs fast.", exampleCn: "马跑得很快。"},
            {en: "bear", phonetic: "/beər/", cn: "熊", example: "The bear is big and strong.", exampleCn: "熊又大又强壮。"},
            {en: "zoo", phonetic: "/zuː/", cn: "动物园", example: "Let's go to the zoo.", exampleCn: "我们去动物园吧。"},
            {en: "run", phonetic: "/rʌn/", cn: "跑", example: "I can run fast.", exampleCn: "我能跑得很快。"},
            {en: "jump", phonetic: "/dʒʌmp/", cn: "跳", example: "The rabbit can jump.", exampleCn: "兔子会跳。"},
            {en: "swim", phonetic: "/swɪm/", cn: "游泳", example: "Fish can swim.", exampleCn: "鱼会游泳。"},
            {en: "fly", phonetic: "/flaɪ/", cn: "飞", example: "Birds can fly.", exampleCn: "鸟会飞。"},
            {en: "walk", phonetic: "/wɔːk/", cn: "走", example: "I walk to school.", exampleCn: "我走路去上学。"},
            {en: "sing", phonetic: "/sɪŋ/", cn: "唱歌", example: "I like to sing.", exampleCn: "我喜欢唱歌。"},
            {en: "dance", phonetic: "/dɑːns/", cn: "跳舞", example: "She can dance well.", exampleCn: "她跳舞跳得很好。"}
        ],
        texts: [
            {
                title: "在动物园",
                content: [
                    {en: "Let's go to the zoo!", cn: "我们去动物园吧！"},
                    {en: "Look at the elephant.", cn: "看那头大象。"},
                    {en: "It is big and strong.", cn: "它又大又强壮。"},
                    {en: "The monkey is funny.", cn: "猴子很有趣。"},
                    {en: "It can jump high.", cn: "它能跳得很高。"},
                    {en: "I like animals!", cn: "我喜欢动物！"}
                ]
            },
            {
                title: "我的能力",
                content: [
                    {en: "I can run.", cn: "我会跑。"},
                    {en: "I can jump.", cn: "我会跳。"},
                    {en: "I can swim.", cn: "我会游泳。"},
                    {en: "I can sing.", cn: "我会唱歌。"},
                    {en: "I can dance.", cn: "我会跳舞。"},
                    {en: "What can you do?", cn: "你会做什么？"}
                ]
            }
        ]
    },
    // 三年级单词
    3: {
        words: [
            {en: "school", phonetic: "/skuːl/", cn: "学校", example: "I go to school every day.", exampleCn: "我每天去上学。"},
            {en: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", example: "This is my classroom.", exampleCn: "这是我的教室。"},
            {en: "desk", phonetic: "/desk/", cn: "书桌", example: "My desk is clean.", exampleCn: "我的书桌很干净。"},
            {en: "chair", phonetic: "/tʃeər/", cn: "椅子", example: "Sit on the chair.", exampleCn: "坐在椅子上。"},
            {en: "blackboard", phonetic: "/ˈblækbɔːrd/", cn: "黑板", example: "Look at the blackboard.", exampleCn: "看黑板。"},
            {en: "window", phonetic: "/ˈwɪndəʊ/", cn: "窗户", example: "Open the window.", exampleCn: "打开窗户。"},
            {en: "door", phonetic: "/dɔːr/", cn: "门", example: "Close the door.", exampleCn: "关上门。"},
            {en: "floor", phonetic: "/flɔːr/", cn: "地板", example: "Sweep the floor.", exampleCn: "扫地。"},
            {en: "light", phonetic: "/laɪt/", cn: "灯", example: "Turn on the light.", exampleCn: "开灯。"},
            {en: "picture", phonetic: "/ˈpɪktʃər/", cn: "图画", example: "This is a nice picture.", exampleCn: "这是一幅好看的画。"},
            {en: "computer", phonetic: "/kəmˈpjuːtər/", cn: "电脑", example: "I like playing computer games.", exampleCn: "我喜欢玩电脑游戏。"},
            {en: "fan", phonetic: "/fæn/", cn: "风扇", example: "The fan is cool.", exampleCn: "风扇很凉快。"},
            {en: "wall", phonetic: "/wɔːl/", cn: "墙", example: "The wall is white.", exampleCn: "墙是白色的。"},
            {en: "morning", phonetic: "/ˈmɔːrnɪŋ/", cn: "早上", example: "Good morning!", exampleCn: "早上好！"},
            {en: "afternoon", phonetic: "/ˌæftərˈnuːn/", cn: "下午", example: "Good afternoon!", exampleCn: "下午好！"},
            {en: "evening", phonetic: "/ˈiːvnɪŋ/", cn: "晚上", example: "Good evening!", exampleCn: "晚上好！"},
            {en: "night", phonetic: "/naɪt/", cn: "夜晚", example: "Good night!", exampleCn: "晚安！"},
            {en: "today", phonetic: "/təˈdeɪ/", cn: "今天", example: "Today is Monday.", exampleCn: "今天是星期一。"},
            {en: "tomorrow", phonetic: "/təˈmɒrəʊ/", cn: "明天", example: "See you tomorrow.", exampleCn: "明天见。"},
            {en: "yesterday", phonetic: "/ˈjestərdeɪ/", cn: "昨天", example: "Yesterday was Sunday.", exampleCn: "昨天是星期天。"},
            {en: "Monday", phonetic: "/ˈmʌndeɪ/", cn: "星期一", example: "I like Monday.", exampleCn: "我喜欢星期一。"},
            {en: "Tuesday", phonetic: "/ˈtjuːzdeɪ/", cn: "星期二", example: "Tuesday is fun.", exampleCn: "星期二很有趣。"},
            {en: "Wednesday", phonetic: "/ˈwenzdeɪ/", cn: "星期三", example: "It's Wednesday today.", exampleCn: "今天是星期三。"},
            {en: "Thursday", phonetic: "/ˈθɜːrzdeɪ/", cn: "星期四", example: "Thursday is near Friday.", exampleCn: "星期四离星期五很近。"},
            {en: "Friday", phonetic: "/ˈfraɪdeɪ/", cn: "星期五", example: "I love Friday!", exampleCn: "我喜欢星期五！"},
            {en: "Saturday", phonetic: "/ˈsætərdeɪ/", cn: "星期六", example: "Saturday is the weekend.", exampleCn: "星期六是周末。"},
            {en: "Sunday", phonetic: "/ˈsʌndeɪ/", cn: "星期日", example: "Sunday is a rest day.", exampleCn: "星期日是休息日。"},
            {en: "breakfast", phonetic: "/ˈbrekfəst/", cn: "早餐", example: "I eat breakfast at 7.", exampleCn: "我7点吃早餐。"},
            {en: "lunch", phonetic: "/lʌntʃ/", cn: "午餐", example: "Lunch is at 12.", exampleCn: "午餐在12点。"},
            {en: "dinner", phonetic: "/ˈdɪnər/", cn: "晚餐", example: "Dinner is ready.", exampleCn: "晚餐准备好了。"},
            {en: "time", phonetic: "/taɪm/", cn: "时间", example: "What time is it?", exampleCn: "几点了？"},
            {en: "o'clock", phonetic: "/əˈklɒk/", cn: "点钟", example: "It's 3 o'clock.", exampleCn: "3点钟了。"},
            {en: "minute", phonetic: "/ˈmɪnɪt/", cn: "分钟", example: "Wait a minute.", exampleCn: "等一分钟。"},
            {en: "hour", phonetic: "/ˈaʊər/", cn: "小时", example: "An hour has 60 minutes.", exampleCn: "一小时有60分钟。"},
            {en: "day", phonetic: "/deɪ/", cn: "天", example: "Have a nice day!", exampleCn: "祝你今天愉快！"},
            {en: "week", phonetic: "/wiːk/", cn: "周", example: "There are 7 days in a week.", exampleCn: "一周有7天。"},
            {en: "month", phonetic: "/mʌnθ/", cn: "月", example: "January is the first month.", exampleCn: "一月是第一个月。"},
            {en: "year", phonetic: "/jɪər/", cn: "年", example: "A year has 12 months.", exampleCn: "一年有12个月。"},
            {en: "January", phonetic: "/ˈdʒænjuəri/", cn: "一月", example: "January is cold.", exampleCn: "一月很冷。"},
            {en: "February", phonetic: "/ˈfebruəri/", cn: "二月", example: "February is short.", exampleCn: "二月很短。"},
            {en: "March", phonetic: "/mɑːrtʃ/", cn: "三月", example: "March is in spring.", exampleCn: "三月在春天。"},
            {en: "April", phonetic: "/ˈeɪprəl/", cn: "四月", example: "April has rain.", exampleCn: "四月有雨。"},
            {en: "May", phonetic: "/meɪ/", cn: "五月", example: "May is warm.", exampleCn: "五月很暖和。"},
            {en: "June", phonetic: "/dʒuːn/", cn: "六月", example: "June is the start of summer.", exampleCn: "六月是夏天的开始。"},
            {en: "July", phonetic: "/dʒuˈlaɪ/", cn: "七月", example: "July is hot.", exampleCn: "七月很热。"},
            {en: "August", phonetic: "/ˈɔːɡəst/", cn: "八月", example: "August is summer holiday.", exampleCn: "八月是暑假。"},
            {en: "September", phonetic: "/sepˈtembər/", cn: "九月", example: "School starts in September.", exampleCn: "九月开学。"},
            {en: "October", phonetic: "/ɒkˈtəʊbər/", cn: "十月", example: "October has golden leaves.", exampleCn: "十月有金色的叶子。"},
            {en: "November", phonetic: "/nəʊˈvembər/", cn: "十一月", example: "November is cool.", exampleCn: "十一月很凉爽。"},
            {en: "December", phonetic: "/dɪˈsembər/", cn: "十二月", example: "December is the last month.", exampleCn: "十二月是最后一个月。"}
        ],
        texts: [
            {
                title: "我的教室",
                content: [
                    {en: "This is my classroom.", cn: "这是我的教室。"},
                    {en: "It is big and clean.", cn: "它又大又干净。"},
                    {en: "There are many desks.", cn: "有很多书桌。"},
                    {en: "The blackboard is on the wall.", cn: "黑板在墙上。"},
                    {en: "I like my classroom.", cn: "我喜欢我的教室。"}
                ]
            },
            {
                title: "我的一天",
                content: [
                    {en: "I get up at 7 o'clock.", cn: "我7点起床。"},
                    {en: "I eat breakfast at 7:30.", cn: "我7点半吃早餐。"},
                    {en: "I go to school at 8.", cn: "我8点去上学。"},
                    {en: "I have lunch at 12.", cn: "我12点吃午餐。"},
                    {en: "I go home at 4.", cn: "我4点回家。"},
                    {en: "I go to bed at 9.", cn: "我9点睡觉。"}
                ]
            }
        ]
    },
    // 四年级单词
    4: {
        words: [
            {en: "weather", phonetic: "/ˈweðər/", cn: "天气", example: "How's the weather?", exampleCn: "天气怎么样？"},
            {en: "sunny", phonetic: "/ˈsʌni/", cn: "晴朗的", example: "It's sunny today.", exampleCn: "今天天气晴朗。"},
            {en: "cloudy", phonetic: "/ˈklaʊdi/", cn: "多云的", example: "The sky is cloudy.", exampleCn: "天空多云。"},
            {en: "rainy", phonetic: "/ˈreɪni/", cn: "下雨的", example: "It's rainy outside.", exampleCn: "外面在下雨。"},
            {en: "snowy", phonetic: "/ˈsnəʊi/", cn: "下雪的", example: "It's snowy in winter.", exampleCn: "冬天下雪。"},
            {en: "windy", phonetic: "/ˈwɪndi/", cn: "有风的", example: "It's windy today.", exampleCn: "今天有风。"},
            {en: "hot", phonetic: "/hɒt/", cn: "热的", example: "Summer is hot.", exampleCn: "夏天很热。"},
            {en: "cold", phonetic: "/kəʊld/", cn: "冷的", example: "Winter is cold.", exampleCn: "冬天很冷。"},
            {en: "warm", phonetic: "/wɔːrm/", cn: "温暖的", example: "Spring is warm.", exampleCn: "春天很温暖。"},
            {en: "cool", phonetic: "/kuːl/", cn: "凉爽的", example: "Autumn is cool.", exampleCn: "秋天很凉爽。"},
            {en: "spring", phonetic: "/sprɪŋ/", cn: "春天", example: "Flowers bloom in spring.", exampleCn: "春天花开。"},
            {en: "summer", phonetic: "/ˈsʌmər/", cn: "夏天", example: "I like summer vacation.", exampleCn: "我喜欢暑假。"},
            {en: "autumn", phonetic: "/ˈɔːtəm/", cn: "秋天", example: "Leaves fall in autumn.", exampleCn: "秋天落叶。"},
            {en: "fall", phonetic: "/fɔːl/", cn: "秋天", example: "Fall is beautiful.", exampleCn: "秋天很美。"},
            {en: "winter", phonetic: "/ˈwɪntər/", cn: "冬天", example: "It snows in winter.", exampleCn: "冬天下雪。"},
            {en: "season", phonetic: "/ˈsiːzn/", cn: "季节", example: "There are four seasons.", exampleCn: "一年有四个季节。"},
            {en: "clothes", phonetic: "/kləʊðz/", cn: "衣服", example: "I need new clothes.", exampleCn: "我需要新衣服。"},
            {en: "shirt", phonetic: "/ʃɜːrt/", cn: "衬衫", example: "This shirt is white.", exampleCn: "这件衬衫是白色的。"},
            {en: "T-shirt", phonetic: "/ˈtiː ʃɜːrt/", cn: "T恤", example: "I like this T-shirt.", exampleCn: "我喜欢这件T恤。"},
            {en: "skirt", phonetic: "/skɜːrt/", cn: "裙子", example: "She wears a skirt.", exampleCn: "她穿着裙子。"},
            {en: "dress", phonetic: "/dres/", cn: "连衣裙", example: "The dress is pretty.", exampleCn: "这条连衣裙很漂亮。"},
            {en: "pants", phonetic: "/pænts/", cn: "裤子", example: "These pants are blue.", exampleCn: "这条裤子是蓝色的。"},
            {en: "shorts", phonetic: "/ʃɔːrts/", cn: "短裤", example: "I wear shorts in summer.", exampleCn: "我夏天穿短裤。"},
            {en: "shoes", phonetic: "/ʃuːz/", cn: "鞋子", example: "My shoes are new.", exampleCn: "我的鞋子是新的。"},
            {en: "socks", phonetic: "/sɒks/", cn: "袜子", example: "I need clean socks.", exampleCn: "我需要干净的袜子。"},
            {en: "coat", phonetic: "/kəʊt/", cn: "外套", example: "Wear your coat.", exampleCn: "穿上你的外套。"},
            {en: "jacket", phonetic: "/ˈdʒækɪt/", cn: "夹克", example: "This jacket is warm.", exampleCn: "这件夹克很暖和。"},
            {en: "sweater", phonetic: "/ˈswetər/", cn: "毛衣", example: "I like this sweater.", exampleCn: "我喜欢这件毛衣。"},
            {en: "hat", phonetic: "/hæt/", cn: "帽子", example: "Put on your hat.", exampleCn: "戴上你的帽子。"},
            {en: "cap", phonetic: "/kæp/", cn: "鸭舌帽", example: "He wears a cap.", exampleCn: "他戴着鸭舌帽。"},
            {en: "scarf", phonetic: "/skɑːrf/", cn: "围巾", example: "The scarf is red.", exampleCn: "这条围巾是红色的。"},
            {en: "gloves", phonetic: "/ɡlʌvz/", cn: "手套", example: "Wear your gloves.", exampleCn: "戴上你的手套。"},
            {en: "umbrella", phonetic: "/ʌmˈbrelə/", cn: "雨伞", example: "Take an umbrella.", exampleCn: "带把雨伞。"},
            {en: "sunglasses", phonetic: "/ˈsʌnɡlɑːsɪz/", cn: "太阳镜", example: "I wear sunglasses.", exampleCn: "我戴太阳镜。"},
            {en: "put on", phonetic: "/pʊt ɒn/", cn: "穿上", example: "Put on your jacket.", exampleCn: "穿上你的夹克。"},
            {en: "take off", phonetic: "/teɪk ɒf/", cn: "脱下", example: "Take off your shoes.", exampleCn: "脱下你的鞋子。"},
            {en: "wear", phonetic: "/weər/", cn: "穿着", example: "What are you wearing?", exampleCn: "你穿着什么？"},
            {en: "colour", phonetic: "/ˈkʌlər/", cn: "颜色", example: "What colour is it?", exampleCn: "它是什么颜色？"},
            {en: "white", phonetic: "/waɪt/", cn: "白色", example: "Snow is white.", exampleCn: "雪是白色的。"},
            {en: "black", phonetic: "/blæk/", cn: "黑色", example: "The cat is black.", exampleCn: "这只猫是黑色的。"},
            {en: "pink", phonetic: "/pɪŋk/", cn: "粉色", example: "I like pink.", exampleCn: "我喜欢粉色。"},
            {en: "purple", phonetic: "/ˈpɜːrpl/", cn: "紫色", example: "Grapes are purple.", exampleCn: "葡萄是紫色的。"},
            {en: "brown", phonetic: "/braʊn/", cn: "棕色", example: "The bear is brown.", exampleCn: "熊是棕色的。"},
            {en: "gray", phonetic: "/ɡreɪ/", cn: "灰色", example: "The sky is gray.", exampleCn: "天空是灰色的。"},
            {en: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙色", example: "Oranges are orange.", exampleCn: "橙子是橙色的。"},
            {en: "expensive", phonetic: "/ɪkˈspensɪv/", cn: "贵的", example: "This is expensive.", exampleCn: "这个很贵。"},
            {en: "cheap", phonetic: "/tʃiːp/", cn: "便宜的", example: "This is cheap.", exampleCn: "这个很便宜。"},
            {en: "pretty", phonetic: "/ˈprɪti/", cn: "漂亮的", example: "You look pretty.", exampleCn: "你看起来很漂亮。"},
            {en: "nice", phonetic: "/naɪs/", cn: "好的", example: "That's nice.", exampleCn: "那很好。"},
            {en: "beautiful", phonetic: "/ˈbjuːtɪfl/", cn: "美丽的", example: "The flower is beautiful.", exampleCn: "这朵花很美丽。"}
        ],
        texts: [
            {
                title: "四季",
                content: [
                    {en: "There are four seasons in a year.", cn: "一年有四个季节。"},
                    {en: "Spring is warm and rainy.", cn: "春天温暖多雨。"},
                    {en: "Summer is hot and sunny.", cn: "夏天炎热晴朗。"},
                    {en: "Autumn is cool and windy.", cn: "秋天凉爽多风。"},
                    {en: "Winter is cold and snowy.", cn: "冬天寒冷多雪。"},
                    {en: "I like all the seasons!", cn: "我喜欢所有的季节！"}
                ]
            },
            {
                title: "买衣服",
                content: [
                    {en: "Can I help you?", cn: "我能帮你吗？"},
                    {en: "Yes, I want a T-shirt.", cn: "是的，我想要一件T恤。"},
                    {en: "What colour do you like?", cn: "你喜欢什么颜色？"},
                    {en: "I like blue.", cn: "我喜欢蓝色。"},
                    {en: "How about this one?", cn: "这件怎么样？"},
                    {en: "It's nice. I'll take it.", cn: "很好。我要买它。"}
                ]
            }
        ]
    },
    // 五年级单词
    5: {
        words: [
            {en: "subject", phonetic: "/ˈsʌbdʒɪkt/", cn: "科目", example: "What's your favorite subject?", exampleCn: "你最喜欢的科目是什么？"},
            {en: "Chinese", phonetic: "/ˌtʃaɪˈniːz/", cn: "语文", example: "I like Chinese class.", exampleCn: "我喜欢语文课。"},
            {en: "English", phonetic: "/ˈɪŋɡlɪʃ/", cn: "英语", example: "English is interesting.", exampleCn: "英语很有趣。"},
            {en: "math", phonetic: "/mæθ/", cn: "数学", example: "Math is difficult.", exampleCn: "数学很难。"},
            {en: "science", phonetic: "/ˈsaɪəns/", cn: "科学", example: "I love science.", exampleCn: "我喜欢科学。"},
            {en: "music", phonetic: "/ˈmjuːzɪk/", cn: "音乐", example: "Music is fun.", exampleCn: "音乐很有趣。"},
            {en: "art", phonetic: "/ɑːrt/", cn: "美术", example: "I like drawing in art class.", exampleCn: "我喜欢在美术课上画画。"},
            {en: "PE", phonetic: "/ˌpiː ˈiː/", cn: "体育", example: "PE is my favorite.", exampleCn: "体育是我最喜欢的。"},
            {en: "history", phonetic: "/ˈhɪstri/", cn: "历史", example: "History tells us about the past.", exampleCn: "历史告诉我们过去的事。"},
            {en: "geography", phonetic: "/dʒiˈɒɡrəfi/", cn: "地理", example: "Geography is about the earth.", exampleCn: "地理是关于地球的。"},
            {en: "homework", phonetic: "/ˈhəʊmwɜːrk/", cn: "作业", example: "I have a lot of homework.", exampleCn: "我有很多作业。"},
            {en: "class", phonetic: "/klɑːs/", cn: "课", example: "Class begins.", exampleCn: "开始上课。"},
            {en: "lesson", phonetic: "/ˈlesn/", cn: "课程", example: "This is an interesting lesson.", exampleCn: "这是一节有趣的课。"},
            {en: "exercise", phonetic: "/ˈeksərsaɪz/", cn: "练习", example: "Do your exercises.", exampleCn: "做你的练习。"},
            {en: "test", phonetic: "/test/", cn: "测试", example: "We have a test today.", exampleCn: "我们今天有测试。"},
            {en: "exam", phonetic: "/ɪɡˈzæm/", cn: "考试", example: "The exam is difficult.", exampleCn: "考试很难。"},
            {en: "grade", phonetic: "/ɡreɪd/", cn: "成绩", example: "I got a good grade.", exampleCn: "我取得了好成绩。"},
            {en: "study", phonetic: "/ˈstʌdi/", cn: "学习", example: "I study hard.", exampleCn: "我努力学习。"},
            {en: "learn", phonetic: "/lɜːrn/", cn: "学会", example: "I learn English every day.", exampleCn: "我每天学英语。"},
            {en: "read", phonetic: "/riːd/", cn: "读", example: "I like to read books.", exampleCn: "我喜欢读书。"},
            {en: "write", phonetic: "/raɪt/", cn: "写", example: "Write your name.", exampleCn: "写下你的名字。"},
            {en: "listen", phonetic: "/ˈlɪsn/", cn: "听", example: "Listen to the teacher.", exampleCn: "听老师讲。"},
            {en: "speak", phonetic: "/spiːk/", cn: "说", example: "Speak English, please.", exampleCn: "请说英语。"},
            {en: "draw", phonetic: "/drɔː/", cn: "画", example: "Draw a picture.", exampleCn: "画一幅画。"},
            {en: "paint", phonetic: "/peɪnt/", cn: "绘画", example: "Paint with colors.", exampleCn: "用颜料绘画。"},
            {en: "count", phonetic: "/kaʊnt/", cn: "数数", example: "Count from 1 to 10.", exampleCn: "从1数到10。"},
            {en: "calculate", phonetic: "/ˈkælkjuleɪt/", cn: "计算", example: "Calculate the answer.", exampleCn: "计算答案。"},
            {en: "remember", phonetic: "/rɪˈmembər/", cn: "记住", example: "Remember this word.", exampleCn: "记住这个单词。"},
            {en: "forget", phonetic: "/fərˈɡet/", cn: "忘记", example: "Don't forget.", exampleCn: "不要忘记。"},
            {en: "understand", phonetic: "/ˌʌndərˈstænd/", cn: "理解", example: "Do you understand?", exampleCn: "你理解了吗？"},
            {en: "know", phonetic: "/nəʊ/", cn: "知道", example: "I know the answer.", exampleCn: "我知道答案。"},
            {en: "think", phonetic: "/θɪŋk/", cn: "思考", example: "Think before you answer.", exampleCn: "回答前先思考。"},
            {en: "answer", phonetic: "/ˈɑːnsər/", cn: "回答", example: "Answer the question.", exampleCn: "回答问题。"},
            {en: "question", phonetic: "/ˈkwestʃən/", cn: "问题", example: "I have a question.", exampleCn: "我有一个问题。"},
            {en: "problem", phonetic: "/ˈprɒbləm/", cn: "难题", example: "This is a difficult problem.", exampleCn: "这是一道难题。"},
            {en: "easy", phonetic: "/ˈiːzi/", cn: "容易的", example: "This is easy.", exampleCn: "这很容易。"},
            {en: "difficult", phonetic: "/ˈdɪfɪkəlt/", cn: "困难的", example: "This is difficult.", exampleCn: "这很困难。"},
            {en: "interesting", phonetic: "/ˈɪntrəstɪŋ/", cn: "有趣的", example: "This book is interesting.", exampleCn: "这本书很有趣。"},
            {en: "boring", phonetic: "/ˈbɔːrɪŋ/", cn: "无聊的", example: "This is boring.", exampleCn: "这很无聊。"},
            {en: "favorite", phonetic: "/ˈfeɪvərɪt/", cn: "最喜欢的", example: "Blue is my favorite color.", exampleCn: "蓝色是我最喜欢的颜色。"},
            {en: "hobby", phonetic: "/ˈhɒbi/", cn: "爱好", example: "Reading is my hobby.", exampleCn: "阅读是我的爱好。"},
            {en: "piano", phonetic: "/piˈænəʊ/", cn: "钢琴", example: "I play the piano.", exampleCn: "我弹钢琴。"},
            {en: "guitar", phonetic: "/ɡɪˈtɑːr/", cn: "吉他", example: "He plays the guitar.", exampleCn: "他弹吉他。"},
            {en: "violin", phonetic: "/ˌvaɪəˈlɪn/", cn: "小提琴", example: "She plays the violin.", exampleCn: "她拉小提琴。"},
            {en: "drum", phonetic: "/drʌm/", cn: "鼓", example: "Play the drum.", exampleCn: "打鼓。"},
            {en: "sport", phonetic: "/spɔːrt/", cn: "运动", example: "I like sports.", exampleCn: "我喜欢运动。"},
            {en: "football", phonetic: "/ˈfʊtbɔːl/", cn: "足球", example: "Let's play football.", exampleCn: "我们踢足球吧。"},
            {en: "basketball", phonetic: "/ˈbɑːskɪtbɔːl/", cn: "篮球", example: "I play basketball.", exampleCn: "我打篮球。"},
            {en: "volleyball", phonetic: "/ˈvɒlibɔːl/", cn: "排球", example: "Volleyball is fun.", exampleCn: "排球很有趣。"},
            {en: "tennis", phonetic: "/ˈtenɪs/", cn: "网球", example: "I like tennis.", exampleCn: "我喜欢网球。"},
            {en: "ping-pong", phonetic: "/ˈpɪŋ pɒŋ/", cn: "乒乓球", example: "Ping-pong is popular in China.", exampleCn: "乒乓球在中国很流行。"}
        ],
        texts: [
            {
                title: "我的学校生活",
                content: [
                    {en: "I go to school from Monday to Friday.", cn: "我周一到周五上学。"},
                    {en: "I have six classes every day.", cn: "我每天有六节课。"},
                    {en: "My favorite subject is English.", cn: "我最喜欢的科目是英语。"},
                    {en: "I study hard and do my homework.", cn: "我努力学习，做作业。"},
                    {en: "After school, I play sports.", cn: "放学后，我做运动。"},
                    {en: "School life is busy but happy!", cn: "学校生活忙碌但快乐！"}
                ]
            },
            {
                title: "我的爱好",
                content: [
                    {en: "I have many hobbies.", cn: "我有很多爱好。"},
                    {en: "I like playing the piano.", cn: "我喜欢弹钢琴。"},
                    {en: "I also like playing basketball.", cn: "我也喜欢打篮球。"},
                    {en: "Reading books is my favorite.", cn: "读书是我的最爱。"},
                    {en: "Hobbies make my life colorful.", cn: "爱好让我的生活丰富多彩。"}
                ]
            }
        ]
    },
    // 六年级单词
    6: {
        words: [
            {en: "country", phonetic: "/ˈkʌntri/", cn: "国家", example: "China is a big country.", exampleCn: "中国是一个大国。"},
            {en: "China", phonetic: "/ˈtʃaɪnə/", cn: "中国", example: "I live in China.", exampleCn: "我住在中国。"},
            {en: "America", phonetic: "/əˈmerɪkə/", cn: "美国", example: "America is far away.", exampleCn: "美国很远。"},
            {en: "England", phonetic: "/ˈɪŋɡlənd/", cn: "英国", example: "England is in Europe.", exampleCn: "英国在欧洲。"},
            {en: "Japan", phonetic: "/dʒəˈpæn/", cn: "日本", example: "Japan is an island country.", exampleCn: "日本是一个岛国。"},
            {en: "Australia", phonetic: "/ɒˈstreɪliə/", cn: "澳大利亚", example: "Australia has kangaroos.", exampleCn: "澳大利亚有袋鼠。"},
            {en: "Canada", phonetic: "/ˈkænədə/", cn: "加拿大", example: "Canada is in North America.", exampleCn: "加拿大在北美洲。"},
            {en: "France", phonetic: "/frɑːns/", cn: "法国", example: "France is famous for wine.", exampleCn: "法国以葡萄酒闻名。"},
            {en: "Germany", phonetic: "/ˈdʒɜːrməni/", cn: "德国", example: "Germany is in Europe.", exampleCn: "德国在欧洲。"},
            {en: "city", phonetic: "/ˈsɪti/", cn: "城市", example: "Beijing is a big city.", exampleCn: "北京是一个大城市。"},
            {en: "capital", phonetic: "/ˈkæpɪtl/", cn: "首都", example: "Beijing is the capital of China.", exampleCn: "北京是中国的首都。"},
            {en: "language", phonetic: "/ˈlæŋɡwɪdʒ/", cn: "语言", example: "English is a global language.", exampleCn: "英语是全球语言。"},
            {en: "people", phonetic: "/ˈpiːpl/", cn: "人们", example: "Chinese people are friendly.", exampleCn: "中国人很友好。"},
            {en: "culture", phonetic: "/ˈkʌltʃər/", cn: "文化", example: "Chinese culture is rich.", exampleCn: "中国文化很丰富。"},
            {en: "travel", phonetic: "/ˈtrævl/", cn: "旅行", example: "I love to travel.", exampleCn: "我喜欢旅行。"},
            {en: "trip", phonetic: "/trɪp/", cn: "旅行", example: "We had a nice trip.", exampleCn: "我们有一次愉快的旅行。"},
            {en: "visit", phonetic: "/ˈvɪzɪt/", cn: "参观", example: "I want to visit Paris.", exampleCn: "我想参观巴黎。"},
            {en: "passport", phonetic: "/ˈpɑːspɔːrt/", cn: "护照", example: "I need a passport.", exampleCn: "我需要护照。"},
            {en: "ticket", phonetic: "/ˈtɪkɪt/", cn: "票", example: "I bought a ticket.", exampleCn: "我买了一张票。"},
            {en: "hotel", phonetic: "/həʊˈtel/", cn: "酒店", example: "We stayed at a hotel.", exampleCn: "我们住在酒店。"},
            {en: "airport", phonetic: "/ˈeərpɔːrt/", cn: "机场", example: "The airport is busy.", exampleCn: "机场很繁忙。"},
            {en: "plane", phonetic: "/pleɪn/", cn: "飞机", example: "I went by plane.", exampleCn: "我坐飞机去的。"},
            {en: "train", phonetic: "/treɪn/", cn: "火车", example: "The train is fast.", exampleCn: "火车很快。"},
            {en: "bus", phonetic: "/bʌs/", cn: "公交车", example: "I take the bus.", exampleCn: "我坐公交车。"},
            {en: "subway", phonetic: "/ˈsʌbweɪ/", cn: "地铁", example: "The subway is convenient.", exampleCn: "地铁很方便。"},
            {en: "taxi", phonetic: "/ˈtæksi/", cn: "出租车", example: "I took a taxi.", exampleCn: "我坐了出租车。"},
            {en: "map", phonetic: "/mæp/", cn: "地图", example: "I need a map.", exampleCn: "我需要地图。"},
            {en: "direction", phonetic: "/dəˈrekʃn/", cn: "方向", example: "Which direction?", exampleCn: "哪个方向？"},
            {en: "north", phonetic: "/nɔːrθ/", cn: "北", example: "Beijing is in the north.", exampleCn: "北京在北方。"},
            {en: "south", phonetic: "/saʊθ/", cn: "南", example: "Guangzhou is in the south.", exampleCn: "广州在南方。"},
            {en: "east", phonetic: "/iːst/", cn: "东", example: "The sun rises in the east.", exampleCn: "太阳从东方升起。"},
            {en: "west", phonetic: "/west/", cn: "西", example: "Xinjiang is in the west.", exampleCn: "新疆在西方。"},
            {en: "restaurant", phonetic: "/ˈrestrɒnt/", cn: "餐厅", example: "Let's go to a restaurant.", exampleCn: "我们去餐厅吧。"},
            {en: "menu", phonetic: "/ˈmenjuː/", cn: "菜单", example: "Can I see the menu?", exampleCn: "我能看一下菜单吗？"},
            {en: "delicious", phonetic: "/dɪˈlɪʃəs/", cn: "美味的", example: "The food is delicious.", exampleCn: "食物很美味。"},
            {en: "restaurant", phonetic: "/ˈrestrɒnt/", cn: "饭店", example: "This is a nice restaurant.", exampleCn: "这是一家好饭店。"},
            {en: "order", phonetic: "/ˈɔːrdər/", cn: "点餐", example: "Can I take your order?", exampleCn: "可以为您点餐了吗？"},
            {en: "bill", phonetic: "/bɪl/", cn: "账单", example: "Can I have the bill?", exampleCn: "能把账单给我吗？"},
            {en: "tip", phonetic: "/tɪp/", cn: "小费", example: "Do I need to give a tip?", exampleCn: "我需要给小费吗？"},
            {en: "museum", phonetic: "/mjuˈziːəm/", cn: "博物馆", example: "The museum is interesting.", exampleCn: "博物馆很有趣。"},
            {en: "park", phonetic: "/pɑːrk/", cn: "公园", example: "Let's go to the park.", exampleCn: "我们去公园吧。"},
            {en: "zoo", phonetic: "/zuː/", cn: "动物园", example: "The zoo has many animals.", exampleCn: "动物园有很多动物。"},
            {en: "cinema", phonetic: "/ˈsɪnəmə/", cn: "电影院", example: "I went to the cinema.", exampleCn: "我去了电影院。"},
            {en: "theater", phonetic: "/ˈθiːətər/", cn: "剧院", example: "The theater is beautiful.", exampleCn: "剧院很漂亮。"},
            {en: "library", phonetic: "/ˈlaɪbreri/", cn: "图书馆", example: "I like the library.", exampleCn: "我喜欢图书馆。"},
            {en: "hospital", phonetic: "/ˈhɒspɪtl/", cn: "医院", example: "He is in the hospital.", exampleCn: "他在医院。"},
            {en: "bank", phonetic: "/bæŋk/", cn: "银行", example: "I need to go to the bank.", exampleCn: "我需要去银行。"},
            {en: "post office", phonetic: "/pəʊst ˈɒfɪs/", cn: "邮局", example: "Where is the post office?", exampleCn: "邮局在哪里？"},
            {en: "police station", phonetic: "/pəˈliːs ˈsteɪʃn/", cn: "警察局", example: "Go to the police station.", exampleCn: "去警察局。"},
            {en: "shopping mall", phonetic: "/ˈʃɒpɪŋ mɔːl/", cn: "商场", example: "I went to the shopping mall.", exampleCn: "我去了商场。"},
            {en: "supermarket", phonetic: "/ˈsuːpəmɑːrkɪt/", cn: "超市", example: "I shop at the supermarket.", exampleCn: "我在超市购物。"}
        ],
        texts: [
            {
                title: "环游世界",
                content: [
                    {en: "I want to travel around the world.", cn: "我想环游世界。"},
                    {en: "First, I will visit Japan.", cn: "首先，我会去日本。"},
                    {en: "Then I will go to America.", cn: "然后我会去美国。"},
                    {en: "I also want to see Europe.", cn: "我也想去看看欧洲。"},
                    {en: "Traveling opens my eyes.", cn: "旅行开阔我的眼界。"},
                    {en: "I love different cultures!", cn: "我喜欢不同的文化！"}
                ]
            },
            {
                title: "问路",
                content: [
                    {en: "Excuse me, where is the museum?", cn: "打扰一下，博物馆在哪里？"},
                    {en: "Go straight and turn left.", cn: "直走然后左转。"},
                    {en: "It's on your right.", cn: "它在你的右边。"},
                    {en: "How far is it?", cn: "有多远？"},
                    {en: "About ten minutes' walk.", cn: "大约步行十分钟。"},
                    {en: "Thank you very much!", cn: "非常感谢！"}
                ]
            }
        ]
    }
};

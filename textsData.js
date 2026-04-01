// 小学英语课文数据 - 人教版PEP
// 3-6年级上下册完整课文内容（含中文翻译）

const textsData = {
    // 三年级上册
    grade3: {
        units: [
            {
                title: "Unit 1 Hello!",
                content: [
                    {en: "Hello! I'm Miss White.", cn: "你好！我是怀特老师。"},
                    {en: "Hello! I'm Wu Yifan.", cn: "你好！我是吴一凡。"},
                    {en: "Hi! I'm Sarah.", cn: "嗨！我是萨拉。"},
                    {en: "I have a ruler.", cn: "我有一把尺子。"},
                    {en: "I have an eraser.", cn: "我有一块橡皮。"},
                    {en: "Hello, I'm Mike. What's your name?", cn: "你好，我是迈克。你叫什么名字？"},
                    {en: "My name's John.", cn: "我叫约翰。"},
                    {en: "Goodbye!", cn: "再见！"},
                    {en: "Bye, Miss White.", cn: "再见，怀特老师。"}
                ]
            },
            {
                title: "Unit 2 Colours",
                content: [
                    {en: "Mr Jones, this is Miss Green.", cn: "琼斯先生，这是格林老师。"},
                    {en: "Good morning, Miss Green.", cn: "早上好，格林老师。"},
                    {en: "Good morning.", cn: "早上好。"},
                    {en: "I see red.", cn: "我看见红色。"},
                    {en: "I see green.", cn: "我看见绿色。"},
                    {en: "Show me green.", cn: "给我看看绿色。"},
                    {en: "Show me red.", cn: "给我看看红色。"},
                    {en: "Good afternoon, Wu Yifan.", cn: "下午好，吴一凡。"},
                    {en: "Good afternoon. Nice to meet you.", cn: "下午好。很高兴认识你。"},
                    {en: "Nice to meet you, too.", cn: "我也很高兴认识你。"}
                ]
            },
            {
                title: "Unit 3 Look at me!",
                content: [
                    {en: "How are you?", cn: "你好吗？"},
                    {en: "I'm fine, thank you.", cn: "我很好，谢谢你。"},
                    {en: "Let's go to school.", cn: "我们去上学吧。"},
                    {en: "OK!", cn: "好的！"},
                    {en: "Look at me! This is my face.", cn: "看我！这是我的脸。"},
                    {en: "Look at me! This is my nose.", cn: "看我！这是我的鼻子。"},
                    {en: "This is my ear.", cn: "这是我的耳朵。"},
                    {en: "This is my eye.", cn: "这是我的眼睛。"},
                    {en: "This is my mouth.", cn: "这是我的嘴巴。"},
                    {en: "How are you?", cn: "你好吗？"},
                    {en: "Very well, thanks.", cn: "非常好，谢谢。"},
                    {en: "Let's make a puppet.", cn: "我们来做个木偶吧。"},
                    {en: "Great!", cn: "太棒了！"}
                ]
            },
            {
                title: "Unit 4 We love animals",
                content: [
                    {en: "What's this?", cn: "这是什么？"},
                    {en: "It's a duck.", cn: "它是一只鸭子。"},
                    {en: "What's this?", cn: "这是什么？"},
                    {en: "It's a dog.", cn: "它是一只狗。"},
                    {en: "What's this?", cn: "这是什么？"},
                    {en: "It's a bear.", cn: "它是一只熊。"},
                    {en: "Look! A funny dog!", cn: "看！一只有趣的狗！"},
                    {en: "Cool! I like it.", cn: "酷！我喜欢它。"},
                    {en: "What's that?", cn: "那是什么？"},
                    {en: "It's an elephant.", cn: "它是一头大象。"},
                    {en: "What's that?", cn: "那是什么？"},
                    {en: "It's a tiger.", cn: "它是一只老虎。"},
                    {en: "Look! A funny pig!", cn: "看！一只有趣的猪！"},
                    {en: "Cool! I like it.", cn: "酷！我喜欢它。"}
                ]
            },
            {
                title: "Unit 5 Let's eat!",
                content: [
                    {en: "I'd like some juice, please.", cn: "请给我一些果汁。"},
                    {en: "Here you are.", cn: "给你。"},
                    {en: "Have some bread, too.", cn: "也吃一些面包吧。"},
                    {en: "Thanks.", cn: "谢谢。"},
                    {en: "I'd like some milk.", cn: "我想要一些牛奶。"},
                    {en: "Here you are.", cn: "给你。"},
                    {en: "Have some eggs.", cn: "吃一些鸡蛋吧。"},
                    {en: "Thanks.", cn: "谢谢。"},
                    {en: "Can I have some water, please?", cn: "请给我一些水好吗？"},
                    {en: "Here you are.", cn: "给你。"},
                    {en: "Thank you.", cn: "谢谢你。"},
                    {en: "You're welcome.", cn: "不客气。"},
                    {en: "Have some fish.", cn: "吃一些鱼吧。"},
                    {en: "Thank you.", cn: "谢谢你。"}
                ]
            },
            {
                title: "Unit 6 Happy birthday!",
                content: [
                    {en: "This one, please.", cn: "请给我这个。"},
                    {en: "Sure. How many plates?", cn: "好的。要几个盘子？"},
                    {en: "Five.", cn: "五个。"},
                    {en: "OK. Here you are.", cn: "好的。给你。"},
                    {en: "Thanks.", cn: "谢谢。"},
                    {en: "Happy birthday!", cn: "生日快乐！"},
                    {en: "Thank you.", cn: "谢谢你。"},
                    {en: "How old are you?", cn: "你几岁了？"},
                    {en: "I'm six years old.", cn: "我六岁了。"},
                    {en: "I'm seven years old.", cn: "我七岁了。"},
                    {en: "Happy birthday!", cn: "生日快乐！"},
                    {en: "Make a wish.", cn: "许个愿吧。"},
                    {en: "Thank you.", cn: "谢谢你。"}
                ]
            }
        ]
    },
    // 三年级下册
    grade3b: {
        units: [
            {
                title: "Unit 1 Welcome back to school!",
                content: [
                    {en: "Boys and girls, we have two new friends today.", cn: "孩子们，今天我们有两位新朋友。"},
                    {en: "Hi, I'm Amy. I'm from the UK.", cn: "嗨，我是艾米。我来自英国。"},
                    {en: "Hi, I'm Zhang Peng. I'm from Shandong.", cn: "嗨，我是张鹏。我来自山东。"},
                    {en: "Welcome!", cn: "欢迎！"},
                    {en: "Where are you from?", cn: "你来自哪里？"},
                    {en: "I'm from the UK.", cn: "我来自英国。"},
                    {en: "What about you?", cn: "你呢？"},
                    {en: "I'm from the USA.", cn: "我来自美国。"},
                    {en: "Welcome back!", cn: "欢迎回来！"},
                    {en: "Nice to see you again.", cn: "很高兴再次见到你。"},
                    {en: "Nice to see you, too.", cn: "我也很高兴见到你。"}
                ]
            },
            {
                title: "Unit 2 My family",
                content: [
                    {en: "Who's that man?", cn: "那个男人是谁？"},
                    {en: "He's my father.", cn: "他是我爸爸。"},
                    {en: "Who's that woman?", cn: "那个女人是谁？"},
                    {en: "She's my mother.", cn: "她是我妈妈。"},
                    {en: "Is she your sister?", cn: "她是你姐姐吗？"},
                    {en: "Yes, she is.", cn: "是的，她是。"},
                    {en: "Is he your brother?", cn: "他是你哥哥吗？"},
                    {en: "No, he isn't. He's my friend.", cn: "不，他不是。他是我的朋友。"},
                    {en: "This is my family.", cn: "这是我的家人。"},
                    {en: "Who's that boy?", cn: "那个男孩是谁？"},
                    {en: "He's my brother.", cn: "他是我哥哥/弟弟。"},
                    {en: "Who's that girl?", cn: "那个女孩是谁？"},
                    {en: "She's my sister.", cn: "她是我姐姐/妹妹。"}
                ]
            },
            {
                title: "Unit 3 At the zoo",
                content: [
                    {en: "Look at that giraffe.", cn: "看那只长颈鹿。"},
                    {en: "Wow! It's so tall!", cn: "哇！它好高啊！"},
                    {en: "Look at that bear.", cn: "看那只熊。"},
                    {en: "Ha! It's short and fat!", cn: "哈！它又矮又胖！"},
                    {en: "Look at the elephant.", cn: "看那头大象。"},
                    {en: "It has a long nose.", cn: "它有一个长鼻子。"},
                    {en: "Look at the monkey.", cn: "看那只猴子。"},
                    {en: "It has a long tail.", cn: "它有一条长尾巴。"},
                    {en: "Come here, children!", cn: "过来，孩子们！"},
                    {en: "Look at the panda.", cn: "看那只熊猫。"},
                    {en: "It's black and white.", cn: "它是黑白相间的。"},
                    {en: "It has a fat body.", cn: "它有一个胖胖的身体。"}
                ]
            },
            {
                title: "Unit 4 Where is my car?",
                content: [
                    {en: "Where is my pencil box?", cn: "我的铅笔盒在哪里？"},
                    {en: "It's in your desk.", cn: "它在你的书桌里。"},
                    {en: "Where is my ruler?", cn: "我的尺子在哪里？"},
                    {en: "It's under the chair.", cn: "它在椅子下面。"},
                    {en: "Silly me! Thanks!", cn: "我真傻！谢谢！"},
                    {en: "Where is my cap?", cn: "我的帽子在哪里？"},
                    {en: "Is it in your bag?", cn: "它在你的包里吗？"},
                    {en: "No, it isn't.", cn: "不，不在。"},
                    {en: "Is it in your toy box?", cn: "它在你的玩具盒里吗？"},
                    {en: "Yes, it is.", cn: "是的，它在。"},
                    {en: "Have a good time!", cn: "玩得开心！"},
                    {en: "Thank you.", cn: "谢谢你。"}
                ]
            },
            {
                title: "Unit 5 Do you like pears?",
                content: [
                    {en: "Honey, let's buy some fruit.", cn: "亲爱的，我们买些水果吧。"},
                    {en: "Do you like oranges?", cn: "你喜欢橙子吗？"},
                    {en: "No, I don't. I like apples.", cn: "不，我不喜欢。我喜欢苹果。"},
                    {en: "Do you like pears?", cn: "你喜欢梨吗？"},
                    {en: "Yes, I do.", cn: "是的，我喜欢。"},
                    {en: "Here you are.", cn: "给你。"},
                    {en: "Thanks.", cn: "谢谢。"},
                    {en: "Have some grapes.", cn: "吃一些葡萄吧。"},
                    {en: "Sorry, I don't like grapes.", cn: "对不起，我不喜欢葡萄。"},
                    {en: "Can I have some bananas?", cn: "我可以吃一些香蕉吗？"},
                    {en: "Here you are.", cn: "给你。"}
                ]
            },
            {
                title: "Unit 6 How many?",
                content: [
                    {en: "How many kites do you see?", cn: "你看见多少只风筝？"},
                    {en: "I see twelve!", cn: "我看见十二只！"},
                    {en: "Wow, so beautiful!", cn: "哇，真漂亮！"},
                    {en: "How many birds do you see?", cn: "你看见多少只鸟？"},
                    {en: "I see thirteen!", cn: "我看见十三只！"},
                    {en: "How many crayons do you have?", cn: "你有多少支蜡笔？"},
                    {en: "I have sixteen.", cn: "我有十六支。"},
                    {en: "Open it and see!", cn: "打开看看！"},
                    {en: "What's this?", cn: "这是什么？"},
                    {en: "My new crayons.", cn: "我的新蜡笔。"},
                    {en: "How many?", cn: "多少支？"}
                ]
            }
        ]
    },
    // 四年级上册
    grade4: {
        units: [
            {
                title: "Unit 1 My classroom",
                content: [
                    {en: "Hey, Zhang Peng. We have a new classroom.", cn: "嘿，张鹏。我们有一个新教室。"},
                    {en: "Really? Let's go and see!", cn: "真的吗？我们去看看吧！"},
                    {en: "Wow! It's so big!", cn: "哇！它真大！"},
                    {en: "Look! My picture!", cn: "看！我的画！"},
                    {en: "Where is it?", cn: "它在哪里？"},
                    {en: "It's near the window.", cn: "它在窗户附近。"},
                    {en: "Let's clean the classroom.", cn: "我们来打扫教室吧。"},
                    {en: "OK.", cn: "好的。"},
                    {en: "Let me clean the teacher's desk.", cn: "我来擦讲台。"},
                    {en: "Let me clean the windows.", cn: "我来擦窗户。"},
                    {en: "Let me help you.", cn: "我来帮你。"},
                    {en: "Thank you.", cn: "谢谢你。"}
                ]
            },
            {
                title: "Unit 2 My schoolbag",
                content: [
                    {en: "What's in your schoolbag?", cn: "你的书包里有什么？"},
                    {en: "An English book, a Chinese book, a maths book and three storybooks.", cn: "一本英语书、一本语文书、一本数学书和三本故事书。"},
                    {en: "What's in your hand?", cn: "你手里是什么？"},
                    {en: "Guess.", cn: "猜一猜。"},
                    {en: "A pencil?", cn: "一支铅笔？"},
                    {en: "No.", cn: "不是。"},
                    {en: "An eraser?", cn: "一块橡皮？"},
                    {en: "Yes, you're right.", cn: "是的，你说对了。"},
                    {en: "What colour is it?", cn: "它是什么颜色的？"},
                    {en: "It's blue and white.", cn: "它是蓝白相间的。"},
                    {en: "I lost my notebook.", cn: "我的笔记本丢了。"},
                    {en: "What colour is it?", cn: "它是什么颜色的？"},
                    {en: "It's green.", cn: "它是绿色的。"},
                    {en: "Here it is!", cn: "它在这里！"}
                ]
            },
            {
                title: "Unit 3 My friends",
                content: [
                    {en: "What's his name?", cn: "他叫什么名字？"},
                    {en: "His name is Zhang Peng.", cn: "他叫张鹏。"},
                    {en: "Who's he?", cn: "他是谁？"},
                    {en: "He has glasses and his shoes are blue.", cn: "他戴眼镜，他的鞋子是蓝色的。"},
                    {en: "Is he Wu Yifan?", cn: "他是吴一凡吗？"},
                    {en: "No, he isn't. He's Mike.", cn: "不，他不是。他是迈克。"},
                    {en: "What's her name?", cn: "她叫什么名字？"},
                    {en: "Her name is Amy.", cn: "她叫艾米。"},
                    {en: "She's tall and thin.", cn: "她又高又瘦。"},
                    {en: "She has long hair.", cn: "她有长头发。"},
                    {en: "Who's she?", cn: "她是谁？"},
                    {en: "She's Chen Jie.", cn: "她是陈洁。"},
                    {en: "She's quiet.", cn: "她很文静。"}
                ]
            },
            {
                title: "Unit 4 My home",
                content: [
                    {en: "Where are the keys?", cn: "钥匙在哪里？"},
                    {en: "Are they on the table?", cn: "它们在桌子上吗？"},
                    {en: "No, they aren't.", cn: "不，不在。"},
                    {en: "Are they near the phone?", cn: "它们在电话附近吗？"},
                    {en: "No, they aren't.", cn: "不，不在。"},
                    {en: "Look! They're in the door.", cn: "看！它们在门上。"},
                    {en: "Open the door, please.", cn: "请开门。"},
                    {en: "OK.", cn: "好的。"},
                    {en: "Where is Amy?", cn: "艾米在哪里？"},
                    {en: "Is she in the study?", cn: "她在书房里吗？"},
                    {en: "No, she isn't.", cn: "不，她不在。"},
                    {en: "Is she in the living room?", cn: "她在客厅里吗？"},
                    {en: "Yes, she is.", cn: "是的，她在。"}
                ]
            },
            {
                title: "Unit 5 Dinner's ready",
                content: [
                    {en: "What would you like?", cn: "你想要什么？"},
                    {en: "I'd like some vegetables, please.", cn: "请给我一些蔬菜。"},
                    {en: "Would you like some beef?", cn: "你想要一些牛肉吗？"},
                    {en: "Yes, please.", cn: "好的，谢谢。"},
                    {en: "Would you like a knife and fork?", cn: "你想要刀叉吗？"},
                    {en: "No, thanks. I can use chopsticks.", cn: "不用了，谢谢。我会用筷子。"},
                    {en: "Dinner's ready!", cn: "晚餐准备好了！"},
                    {en: "Thanks.", cn: "谢谢。"},
                    {en: "Help yourself.", cn: "请随便吃。"},
                    {en: "Thank you.", cn: "谢谢你。"},
                    {en: "Would you like some soup?", cn: "你想要一些汤吗？"},
                    {en: "Yes, please.", cn: "好的，谢谢。"}
                ]
            },
            {
                title: "Unit 6 Meet my family!",
                content: [
                    {en: "How many people are there in your family?", cn: "你家有几口人？"},
                    {en: "Three. My parents and me.", cn: "三口人。我父母和我。"},
                    {en: "But that's only three.", cn: "但那只有三口人啊。"},
                    {en: "And my little puppy.", cn: "还有我的小狗。"},
                    {en: "What's your father's job?", cn: "你爸爸是做什么工作的？"},
                    {en: "He's a doctor.", cn: "他是一名医生。"},
                    {en: "Is this your uncle?", cn: "这是你叔叔吗？"},
                    {en: "Yes, it is.", cn: "是的。"},
                    {en: "What's his job?", cn: "他是做什么工作的？"},
                    {en: "He's a football player.", cn: "他是一名足球运动员。"},
                    {en: "This is my family.", cn: "这是我的家人。"},
                    {en: "They're all great!", cn: "他们都很棒！"}
                ]
            }
        ]
    },
    // 四年级下册
    grade4b: {
        units: [
            {
                title: "Unit 1 My school",
                content: [
                    {en: "Where's the teachers' office?", cn: "教师办公室在哪里？"},
                    {en: "It's on the second floor.", cn: "它在二楼。"},
                    {en: "Is this the teachers' office?", cn: "这是教师办公室吗？"},
                    {en: "No, it isn't. It's the computer room.", cn: "不，不是。这是计算机房。"},
                    {en: "Is that the computer room?", cn: "那是计算机房吗？"},
                    {en: "No, it isn't. It's the teachers' office.", cn: "不，不是。那是教师办公室。"},
                    {en: "Do you have a library?", cn: "你们有图书馆吗？"},
                    {en: "Yes, we do.", cn: "是的，我们有。"},
                    {en: "Where is it?", cn: "它在哪里？"},
                    {en: "It's on the first floor.", cn: "它在一楼。"},
                    {en: "Welcome to our school!", cn: "欢迎来到我们学校！"},
                    {en: "This is my school.", cn: "这是我的学校。"}
                ]
            },
            {
                title: "Unit 2 What time is it?",
                content: [
                    {en: "What time is it?", cn: "几点了？"},
                    {en: "It's 6 o'clock. It's time for dinner.", cn: "六点了。该吃晚饭了。"},
                    {en: "Time to go home, kids.", cn: "该回家了，孩子们。"},
                    {en: "It's time to get up.", cn: "该起床了。"},
                    {en: "Hurry up! It's time to go to school.", cn: "快点！该上学了。"},
                    {en: "I'm ready.", cn: "我准备好了。"},
                    {en: "Breakfast is ready.", cn: "早餐准备好了。"},
                    {en: "What time is it in London?", cn: "伦敦现在几点？"},
                    {en: "It's 12 o'clock. It's time for lunch.", cn: "十二点了。该吃午饭了。"},
                    {en: "It's 3 o'clock. It's time for PE class.", cn: "三点了。该上体育课了。"},
                    {en: "Let's jump and run.", cn: "我们跳和跑吧。"}
                ]
            },
            {
                title: "Unit 3 Weather",
                content: [
                    {en: "Can I go outside now?", cn: "我现在可以出去吗？"},
                    {en: "No, you can't. It's cold outside.", cn: "不，你不能。外面很冷。"},
                    {en: "Can I have some soup?", cn: "我可以喝点汤吗？"},
                    {en: "Yes, you can.", cn: "是的，你可以。"},
                    {en: "Be careful! It's very hot.", cn: "小心！它很烫。"},
                    {en: "What's the weather like in New York?", cn: "纽约天气怎么样？"},
                    {en: "It's rainy.", cn: "下雨了。"},
                    {en: "Is it cold?", cn: "冷吗？"},
                    {en: "No, it isn't.", cn: "不，不冷。"},
                    {en: "It's 26 degrees.", cn: "26度。"},
                    {en: "It's warm.", cn: "很暖和。"},
                    {en: "What's the weather like in London?", cn: "伦敦天气怎么样？"},
                    {en: "It's windy.", cn: "刮风了。"}
                ]
            },
            {
                title: "Unit 4 At the farm",
                content: [
                    {en: "What are these?", cn: "这些是什么？"},
                    {en: "They're carrots.", cn: "它们是胡萝卜。"},
                    {en: "What are those?", cn: "那些是什么？"},
                    {en: "They're tomatoes.", cn: "它们是西红柿。"},
                    {en: "Are these carrots?", cn: "这些是胡萝卜吗？"},
                    {en: "No, they aren't. They're potatoes.", cn: "不，不是。它们是土豆。"},
                    {en: "Look at these green beans. They're so long!", cn: "看这些青豆。它们真长！"},
                    {en: "Yes, and the potatoes are big.", cn: "是的，而且土豆很大。"},
                    {en: "What are those?", cn: "那些是什么？"},
                    {en: "They're horses.", cn: "它们是马。"},
                    {en: "Are they hens?", cn: "它们是母鸡吗？"},
                    {en: "No, they aren't. They're ducks.", cn: "不，不是。它们是鸭子。"},
                    {en: "How many horses do you have?", cn: "你有多少匹马？"}
                ]
            },
            {
                title: "Unit 5 My clothes",
                content: [
                    {en: "Are these yours?", cn: "这些是你的吗？"},
                    {en: "No, they aren't. They're Chen Jie's.", cn: "不，不是。它们是陈洁的。"},
                    {en: "Is this John's?", cn: "这是约翰的吗？"},
                    {en: "No, it isn't. It's Mike's.", cn: "不，不是。它是迈克的。"},
                    {en: "Whose coat is this?", cn: "这是谁的外套？"},
                    {en: "It's mine.", cn: "是我的。"},
                    {en: "Whose pants are those?", cn: "那条裤子是谁的？"},
                    {en: "They're your father's.", cn: "是你爸爸的。"},
                    {en: "I like that green skirt.", cn: "我喜欢那条绿色的裙子。"},
                    {en: "Me too. And those pants are nice.", cn: "我也是。而且那条裤子很好看。"},
                    {en: "Can you help me, please?", cn: "你能帮我吗？"},
                    {en: "OK.", cn: "好的。"},
                    {en: "Whose socks are those?", cn: "那些袜子是谁的？"},
                    {en: "They're mine.", cn: "是我的。"}
                ]
            },
            {
                title: "Unit 6 Shopping",
                content: [
                    {en: "Can I help you?", cn: "我能帮您吗？"},
                    {en: "Yes. These shoes are nice.", cn: "是的。这双鞋很好看。"},
                    {en: "Can I try them on?", cn: "我能试穿吗？"},
                    {en: "Size 6, please.", cn: "请给我6号的。"},
                    {en: "Of course. Here you are.", cn: "当然。给你。"},
                    {en: "They're too small.", cn: "它们太小了。"},
                    {en: "Let's try size 7.", cn: "我们试试7号的吧。"},
                    {en: "They're just right!", cn: "它们正合适！"},
                    {en: "How do you like this skirt?", cn: "你觉得这条裙子怎么样？"},
                    {en: "It's pretty.", cn: "它很漂亮。"},
                    {en: "How much is it?", cn: "多少钱？"},
                    {en: "It's $89.", cn: "89美元。"},
                    {en: "That's expensive.", cn: "那很贵。"},
                    {en: "I like it, Mum.", cn: "妈妈，我喜欢它。"},
                    {en: "Sorry, Amy. It's too expensive.", cn: "对不起，艾米。它太贵了。"}
                ]
            }
        ]
    },
    // 五年级上册
    grade5: {
        units: [
            {
                title: "Unit 1 What's he like?",
                content: [
                    {en: "Who's your art teacher?", cn: "谁是你的美术老师？"},
                    {en: "Mr Jones.", cn: "琼斯先生。"},
                    {en: "Is he young?", cn: "他年轻吗？"},
                    {en: "Yes, he is.", cn: "是的，他年轻。"},
                    {en: "What's Wu Yifan like?", cn: "吴一凡是什么样的人？"},
                    {en: "He's hard-working.", cn: "他很勤奋。"},
                    {en: "Who's your English teacher?", cn: "谁是你的英语老师？"},
                    {en: "Miss White.", cn: "怀特老师。"},
                    {en: "What's she like?", cn: "她是什么样的人？"},
                    {en: "She's kind.", cn: "她很和蔼。"},
                    {en: "Is she strict?", cn: "她严格吗？"},
                    {en: "Yes, sometimes.", cn: "是的，有时候。"},
                    {en: "Do you know Mr Young?", cn: "你认识杨先生吗？"},
                    {en: "No, I don't. Who is he?", cn: "不，不认识。他是谁？"},
                    {en: "He's our music teacher.", cn: "他是我们的音乐老师。"},
                    {en: "Is he funny?", cn: "他风趣吗？"},
                    {en: "Yes, he is.", cn: "是的，他很风趣。"}
                ]
            },
            {
                title: "Unit 2 My week",
                content: [
                    {en: "What do you have on Mondays?", cn: "你星期一有什么课？"},
                    {en: "I have Chinese, English, maths and music.", cn: "我有语文、英语、数学和音乐。"},
                    {en: "What do you have on Tuesdays?", cn: "你星期二有什么课？"},
                    {en: "I have maths, science and art.", cn: "我有数学、科学和美术。"},
                    {en: "What do you do on Saturdays?", cn: "你星期六做什么？"},
                    {en: "I often do homework and watch TV.", cn: "我经常做作业和看电视。"},
                    {en: "What about Sundays?", cn: "星期天呢？"},
                    {en: "I often read books and play football.", cn: "我经常看书和踢足球。"},
                    {en: "Do you often play sports?", cn: "你经常做运动吗？"},
                    {en: "No, I don't.", cn: "不，我不经常。"},
                    {en: "Do you often read books in this park?", cn: "你经常在这个公园看书吗？"},
                    {en: "Yes, I do.", cn: "是的，我经常。"}
                ]
            },
            {
                title: "Unit 3 What would you like?",
                content: [
                    {en: "What would you like to eat?", cn: "你想吃什么？"},
                    {en: "I'd like a sandwich, please.", cn: "请给我一个三明治。"},
                    {en: "What would you like to drink?", cn: "你想喝什么？"},
                    {en: "I'd like some water.", cn: "我想喝点水。"},
                    {en: "I'm hungry.", cn: "我饿了。"},
                    {en: "What would you like to eat?", cn: "你想吃什么？"},
                    {en: "I'd like some noodles.", cn: "我想吃些面条。"},
                    {en: "What's your favourite food?", cn: "你最喜欢的食物是什么？"},
                    {en: "Noodles. They're delicious.", cn: "面条。它们很美味。"},
                    {en: "What's your favourite drink?", cn: "你最喜欢的饮料是什么？"},
                    {en: "Milk.", cn: "牛奶。"},
                    {en: "I like beef noodles.", cn: "我喜欢牛肉面。"},
                    {en: "They're delicious.", cn: "它们很美味。"}
                ]
            },
            {
                title: "Unit 4 What can you do?",
                content: [
                    {en: "What can you do for the party, children?", cn: "孩子们，你们能为派对做什么？"},
                    {en: "I can sing English songs.", cn: "我会唱英文歌。"},
                    {en: "Wonderful! How about you, John?", cn: "太棒了！你呢，约翰？"},
                    {en: "I can do some kung fu!", cn: "我会练功夫！"},
                    {en: "Thank you, John.", cn: "谢谢你，约翰。"},
                    {en: "What can you do?", cn: "你会做什么？"},
                    {en: "I can draw pictures.", cn: "我会画画。"},
                    {en: "Can you swim?", cn: "你会游泳吗？"},
                    {en: "Yes, I can.", cn: "是的，我会。"},
                    {en: "Can you cook?", cn: "你会做饭吗？"},
                    {en: "No, I can't.", cn: "不，我不会。"},
                    {en: "I can play ping-pong.", cn: "我会打乒乓球。"},
                    {en: "I can play basketball.", cn: "我会打篮球。"}
                ]
            },
            {
                title: "Unit 5 There is a big bed",
                content: [
                    {en: "This is my room.", cn: "这是我的房间。"},
                    {en: "There is a big bed.", cn: "有一张大床。"},
                    {en: "There is a nice photo, too.", cn: "还有一张漂亮的照片。"},
                    {en: "Wow! You look cool!", cn: "哇！你看起来很酷！"},
                    {en: "Thank you.", cn: "谢谢你。"},
                    {en: "There is a big bed in my room.", cn: "我的房间里有一张大床。"},
                    {en: "There are so many pictures here.", cn: "这里有这么多画。"},
                    {en: "There are so many plants here, too.", cn: "这里也有这么多植物。"},
                    {en: "Let's go to the nature park!", cn: "我们去自然公园吧！"},
                    {en: "Cool! Is there a river in the forest?", cn: "酷！森林里有河吗？"},
                    {en: "Yes, there is.", cn: "是的，有。"},
                    {en: "Is there a lake?", cn: "有湖吗？"},
                    {en: "No, there isn't.", cn: "不，没有。"}
                ]
            },
            {
                title: "Unit 6 In a nature park",
                content: [
                    {en: "Is there a river in the forest, Miss White?", cn: "怀特老师，森林里有河吗？"},
                    {en: "No, there isn't.", cn: "不，没有。"},
                    {en: "Is there a lake, Miss White?", cn: "有湖吗，怀特老师？"},
                    {en: "Yes, there is.", cn: "是的，有。"},
                    {en: "Are there any tall buildings in the nature park?", cn: "自然公园里有高楼吗？"},
                    {en: "No, there aren't.", cn: "不，没有。"},
                    {en: "Are there any animals?", cn: "有动物吗？"},
                    {en: "Yes, there are. There are ducks and rabbits.", cn: "是的，有。有鸭子和兔子。"},
                    {en: "The nature park is so quiet.", cn: "自然公园真安静。"},
                    {en: "Yes, Zhang Peng. There aren't many people.", cn: "是的，张鹏。人不多。"},
                    {en: "Are there any lakes on the mountains?", cn: "山上有湖吗？"},
                    {en: "Yes, there is one.", cn: "是的，有一个。"}
                ]
            }
        ]
    },
    // 五年级下册
    grade5b: {
        units: [
            {
                title: "Unit 1 My day",
                content: [
                    {en: "When do you get up?", cn: "你什么时候起床？"},
                    {en: "I often get up at 6:30.", cn: "我经常六点半起床。"},
                    {en: "When do you eat breakfast?", cn: "你什么时候吃早餐？"},
                    {en: "At 7 o'clock.", cn: "七点。"},
                    {en: "What do you do on the weekend?", cn: "你周末做什么？"},
                    {en: "I often watch TV and play ping-pong with my father.", cn: "我经常看电视和跟爸爸打乒乓球。"},
                    {en: "That sounds like a lot of fun.", cn: "听起来很有趣。"},
                    {en: "When do you finish class in the morning?", cn: "你上午什么时候下课？"},
                    {en: "We finish class at 1 o'clock.", cn: "我们一点下课。"},
                    {en: "Then we eat lunch at home.", cn: "然后我们在家吃午饭。"},
                    {en: "When do you go back to school after lunch?", cn: "午饭后你什么时候回学校？"},
                    {en: "At 2:30.", cn: "两点半。"},
                    {en: "When do you usually eat dinner?", cn: "你通常什么时候吃晚饭？"},
                    {en: "Usually at 9:30 or 10 o'clock.", cn: "通常在九点半或十点。"}
                ]
            },
            {
                title: "Unit 2 My favourite season",
                content: [
                    {en: "Which season do you like best?", cn: "你最喜欢哪个季节？"},
                    {en: "Winter. I like snow.", cn: "冬天。我喜欢雪。"},
                    {en: "I like summer best.", cn: "我最喜欢夏天。"},
                    {en: "Why?", cn: "为什么？"},
                    {en: "Because I like summer vacation!", cn: "因为我喜欢暑假！"},
                    {en: "Do you like the music, children?", cn: "孩子们，你们喜欢这首音乐吗？"},
                    {en: "Yes. It's very beautiful.", cn: "是的。它很优美。"},
                    {en: "What is it?", cn: "它是什么？"},
                    {en: "The Four Seasons.", cn: "《四季》。"},
                    {en: "I like spring best. There are beautiful flowers everywhere.", cn: "我最喜欢春天。到处都有美丽的花。"},
                    {en: "I like autumn best. The weather is good and the colours are beautiful.", cn: "我最喜欢秋天。天气很好，色彩很美。"}
                ]
            },
            {
                title: "Unit 3 My school calendar",
                content: [
                    {en: "When is the party?", cn: "派对在什么时候？"},
                    {en: "It's in April.", cn: "在四月。"},
                    {en: "When is the singing contest?", cn: "歌唱比赛在什么时候？"},
                    {en: "It's usually in May.", cn: "通常在五月。"},
                    {en: "When is the school trip this year?", cn: "今年的学校旅行在什么时候？"},
                    {en: "It's in October.", cn: "在十月。"},
                    {en: "We'll go to the Great Wall.", cn: "我们要去长城。"},
                    {en: "When is Tree Planting Day?", cn: "植树节在什么时候？"},
                    {en: "It's in March.", cn: "在三月。"},
                    {en: "When is Mother's Day?", cn: "母亲节在什么时候？"},
                    {en: "It's on the second Sunday in May.", cn: "在五月的第二个星期天。"},
                    {en: "Is the singing contest in May?", cn: "歌唱比赛在五月吗？"},
                    {en: "Yes, it is.", cn: "是的。"}
                ]
            },
            {
                title: "Unit 4 When is Easter?",
                content: [
                    {en: "When is April Fool's Day?", cn: "愚人节在什么时候？"},
                    {en: "It's on April 1st.", cn: "在四月一日。"},
                    {en: "When is your birthday?", cn: "你的生日在什么时候？"},
                    {en: "My birthday is on April 4th.", cn: "我的生日在四月四日。"},
                    {en: "When is your birthday?", cn: "你的生日在什么时候？"},
                    {en: "It's on March 5th.", cn: "在三月五日。"},
                    {en: "When is the art show?", cn: "艺术展在什么时候？"},
                    {en: "It's on May 1st.", cn: "在五月一日。"},
                    {en: "When is the reading festival?", cn: "阅读节在什么时候？"},
                    {en: "It's on May 5th.", cn: "在五月五日。"},
                    {en: "Happy birthday!", cn: "生日快乐！"},
                    {en: "Thank you.", cn: "谢谢你。"},
                    {en: "When is Mid-Autumn Day this year?", cn: "今年中秋节在什么时候？"}
                ]
            },
            {
                title: "Unit 5 Whose dog is it?",
                content: [
                    {en: "The yellow picture is mine.", cn: "那张黄色的画是我的。"},
                    {en: "Are these all ours?", cn: "这些都是我们的吗？"},
                    {en: "Yes, they are.", cn: "是的。"},
                    {en: "Wow! That picture of Beijing is beautiful.", cn: "哇！那张北京的画很漂亮。"},
                    {en: "Whose is it?", cn: "它是谁的？"},
                    {en: "It's Zhang Peng's.", cn: "是张鹏的。"},
                    {en: "Look! There is a rabbit eating carrots.", cn: "看！有一只兔子在吃胡萝卜。"},
                    {en: "Is the dog drinking water?", cn: "狗在喝水吗？"},
                    {en: "No, it isn't. It's eating.", cn: "不，不是。它在吃东西。"},
                    {en: "What's the monkey doing?", cn: "猴子在做什么？"},
                    {en: "It's playing with its mother.", cn: "它在和妈妈玩。"},
                    {en: "What are they doing?", cn: "它们在做什么？"},
                    {en: "They're climbing trees.", cn: "它们在爬树。"}
                ]
            },
            {
                title: "Unit 6 Work quietly!",
                content: [
                    {en: "Look at the pandas.", cn: "看那些熊猫。"},
                    {en: "What are they doing?", cn: "它们在做什么？"},
                    {en: "Haha. They're eating lunch!", cn: "哈哈。它们在吃午饭！"},
                    {en: "They're so cute.", cn: "它们真可爱。"},
                    {en: "What's the little monkey doing?", cn: "小猴子在做什么？"},
                    {en: "It's playing with its mother.", cn: "它在和妈妈玩。"},
                    {en: "Shh. Talk quietly.", cn: "嘘。小声说话。"},
                    {en: "I can show you the English books.", cn: "我可以给你看英语书。"},
                    {en: "Here they are.", cn: "它们在这里。"},
                    {en: "Keep your desk clean.", cn: "保持桌面整洁。"},
                    {en: "Work quietly!", cn: "安静工作！"},
                    {en: "Keep to the right.", cn: "靠右行。"},
                    {en: "Take turns.", cn: "轮流来。"}
                ]
            }
        ]
    },
    // 六年级上册
    grade6: {
        units: [
            {
                title: "Unit 1 How can I get there?",
                content: [
                    {en: "Robin has GPS.", cn: "罗宾有GPS。"},
                    {en: "Is it far?", cn: "远吗？"},
                    {en: "No. Now we are behind the hospital.", cn: "不远。现在我们在医院后面。"},
                    {en: "Let's turn left and then turn right.", cn: "我们左转然后右转。"},
                    {en: "Where is the museum shop?", cn: "博物馆商店在哪里？"},
                    {en: "It's near the door.", cn: "它在门附近。"},
                    {en: "Where is the post office?", cn: "邮局在哪里？"},
                    {en: "It's next to the museum.", cn: "它在博物馆旁边。"},
                    {en: "How can I get there?", cn: "我怎么去那里？"},
                    {en: "Turn left at the bookstore.", cn: "在书店左转。"},
                    {en: "Then turn right at the hospital.", cn: "然后在医院右转。"},
                    {en: "Is the Thames far from here?", cn: "泰晤士河离这里远吗？"},
                    {en: "No. Go straight and turn left.", cn: "不远。直走然后左转。"},
                    {en: "Thanks.", cn: "谢谢。"}
                ]
            },
            {
                title: "Unit 2 Ways to go to school",
                content: [
                    {en: "How do you come to school?", cn: "你怎么来学校？"},
                    {en: "Usually, I come on foot.", cn: "通常，我走路来。"},
                    {en: "Sometimes I come by bus.", cn: "有时候我坐公交车来。"},
                    {en: "I often come by bike.", cn: "我经常骑自行车来。"},
                    {en: "How do you get to the USA from China?", cn: "你怎么从中国去美国？"},
                    {en: "By plane.", cn: "坐飞机。"},
                    {en: "Don't go at the red light!", cn: "别闯红灯！"},
                    {en: "I must pay attention to the traffic lights!", cn: "我必须注意交通信号灯！"},
                    {en: "In the UK you drive on the left side.", cn: "在英国你靠左行驶。"},
                    {en: "In China, people drive on the right side.", cn: "在中国，人们靠右行驶。"},
                    {en: "Some kids go to school by sled.", cn: "有些孩子坐雪橇上学。"},
                    {en: "It's fast.", cn: "它很快。"},
                    {en: "Some children in Jiangxi, China, go to school by ferry every day.", cn: "中国江西的一些孩子每天坐渡船上学。"}
                ]
            },
            {
                title: "Unit 3 My weekend plan",
                content: [
                    {en: "What are you going to do tomorrow?", cn: "你明天要做什么？"},
                    {en: "I'm going to have an art lesson.", cn: "我要上美术课。"},
                    {en: "What are you going to do in your lesson?", cn: "你课上要做什么？"},
                    {en: "We're going to draw some pictures in Renmin Park.", cn: "我们要去人民公园画画。"},
                    {en: "Where are you going?", cn: "你要去哪里？"},
                    {en: "I'm going to visit my grandparents.", cn: "我要去看望我的祖父母。"},
                    {en: "When are you going?", cn: "你什么时候去？"},
                    {en: "This afternoon.", cn: "今天下午。"},
                    {en: "What is Mike going to do tomorrow?", cn: "迈克明天要做什么？"},
                    {en: "He's going to see a film.", cn: "他要去看电影。"},
                    {en: "Who is he going with?", cn: "他要和谁一起去？"},
                    {en: "He's going with Zhang Peng.", cn: "他要和张鹏一起去。"},
                    {en: "I'm going to see a film tomorrow.", cn: "我明天要去看电影。"}
                ]
            },
            {
                title: "Unit 4 I have a pen pal",
                content: [
                    {en: "What are Peter's hobbies?", cn: "彼得的爱好是什么？"},
                    {en: "He likes reading stories.", cn: "他喜欢读故事。"},
                    {en: "He lives on a farm, so sometimes he reads to the cows!", cn: "他住在农场，所以有时候他读给牛听！"},
                    {en: "That's interesting!", cn: "那很有趣！"},
                    {en: "He likes doing kung fu and swimming.", cn: "他喜欢练功夫和游泳。"},
                    {en: "Does he live in Sydney?", cn: "他住在悉尼吗？"},
                    {en: "No, he doesn't.", cn: "不，不是。"},
                    {en: "Does he like doing word puzzles and going hiking?", cn: "他喜欢猜字谜和远足吗？"},
                    {en: "Yes, he does.", cn: "是的，他喜欢。"},
                    {en: "What are your hobbies?", cn: "你的爱好是什么？"},
                    {en: "I like singing and dancing.", cn: "我喜欢唱歌和跳舞。"},
                    {en: "I also like playing football.", cn: "我也喜欢踢足球。"},
                    {en: "Does Oliver do word puzzles every day?", cn: "奥利弗每天都猜字谜吗？"}
                ]
            },
            {
                title: "Unit 5 What does he do?",
                content: [
                    {en: "Is your father a postman?", cn: "你爸爸是邮递员吗？"},
                    {en: "No, he isn't.", cn: "不，不是。"},
                    {en: "What does he do?", cn: "他是做什么的？"},
                    {en: "He's a businessman.", cn: "他是商人。"},
                    {en: "He often goes to other countries.", cn: "他经常去其他国家。"},
                    {en: "What does your mother do?", cn: "你妈妈是做什么的？"},
                    {en: "She's a head teacher.", cn: "她是校长。"},
                    {en: "That's nice.", cn: "那很好。"},
                    {en: "Yeah. She'll be here today.", cn: "是的。她今天会来这里。"},
                    {en: "Do you want to be a head teacher, too?", cn: "你也想成为一名校长吗？"},
                    {en: "No, I want to be a businessman.", cn: "不，我想成为一名商人。"},
                    {en: "What does he do?", cn: "他是做什么的？"},
                    {en: "He's a pilot.", cn: "他是飞行员。"},
                    {en: "Where does he work?", cn: "他在哪里工作？"},
                    {en: "He works at sea.", cn: "他在海上工作。"}
                ]
            },
            {
                title: "Unit 6 How do you feel?",
                content: [
                    {en: "They are afraid of him.", cn: "它们害怕他。"},
                    {en: "The cat is angry with them.", cn: "猫对它们很生气。"},
                    {en: "Maybe our cat is chasing a mouse now!", cn: "也许我们的猫正在追老鼠！"},
                    {en: "What's this cartoon about?", cn: "这部卡通片是关于什么的？"},
                    {en: "It's about a cat.", cn: "是关于一只猫的。"},
                    {en: "The cat is a police officer.", cn: "这只猫是一名警察。"},
                    {en: "Cool!", cn: "酷！"},
                    {en: "How does Sam feel?", cn: "萨姆感觉怎么样？"},
                    {en: "He's worried.", cn: "他很担心。"},
                    {en: "What should he do?", cn: "他应该做什么？"},
                    {en: "He should see a doctor.", cn: "他应该去看医生。"},
                    {en: "How does Dad feel now?", cn: "爸爸现在感觉怎么样？"},
                    {en: "Not well.", cn: "不太好。"},
                    {en: "Don't be sad.", cn: "别难过。"},
                    {en: "Don't be angry.", cn: "别生气。"},
                    {en: "You should take a deep breath and count to ten.", cn: "你应该深呼吸，数到十。"}
                ]
            }
        ]
    },
    // 六年级下册
    grade6b: {
        units: [
            {
                title: "Unit 1 How tall are you?",
                content: [
                    {en: "Look! That's the tallest dinosaur in this hall.", cn: "看！那是这个展厅里最高的恐龙。"},
                    {en: "Yes, it is. How tall is it?", cn: "是的。它有多高？"},
                    {en: "Maybe 4 metres.", cn: "大概4米。"},
                    {en: "Wow! It's taller than both of us together.", cn: "哇！它比我们两个加起来还高。"},
                    {en: "How tall are you?", cn: "你有多高？"},
                    {en: "I'm 1.65 metres.", cn: "我1.65米。"},
                    {en: "What size are your shoes?", cn: "你穿多大码的鞋？"},
                    {en: "Size 7.", cn: "7码。"},
                    {en: "Your feet are bigger than mine.", cn: "你的脚比我的大。"},
                    {en: "How heavy are you?", cn: "你有多重？"},
                    {en: "I'm 48 kilograms.", cn: "我48公斤。"},
                    {en: "I'm thinner than you, and shorter.", cn: "我比你瘦，也比你矮。"},
                    {en: "Yes. I'm bigger and stronger than you.", cn: "是的。我比你大，也比你强壮。"},
                    {en: "Who is taller than you?", cn: "谁比你高？"},
                    {en: "Zhang Peng is.", cn: "张鹏比我高。"}
                ]
            },
            {
                title: "Unit 2 Last weekend",
                content: [
                    {en: "What did you do last weekend?", cn: "你上周末做了什么？"},
                    {en: "I stayed at home and watched TV.", cn: "我待在家里看电视。"},
                    {en: "How was your weekend?", cn: "你周末过得怎么样？"},
                    {en: "It was good, thank you.", cn: "很好，谢谢你。"},
                    {en: "What did you do?", cn: "你做了什么？"},
                    {en: "I saw a film.", cn: "我看了一部电影。"},
                    {en: "Did you like it?", cn: "你喜欢吗？"},
                    {en: "Yes, I did. It was great.", cn: "是的，我喜欢。它很棒。"},
                    {en: "What did you do last weekend?", cn: "你上周末做了什么？"},
                    {en: "I washed my clothes.", cn: "我洗了衣服。"},
                    {en: "I cleaned my room.", cn: "我打扫了房间。"},
                    {en: "I watched TV.", cn: "我看了电视。"},
                    {en: "I drank tea.", cn: "我喝了茶。"},
                    {en: "What did you do yesterday?", cn: "你昨天做了什么？"},
                    {en: "I went fishing with my grandpa.", cn: "我和爷爷去钓鱼了。"}
                ]
            },
            {
                title: "Unit 3 Where did you go?",
                content: [
                    {en: "Where did you go over the winter holiday?", cn: "你寒假去哪里了？"},
                    {en: "My family and I went to Sanya.", cn: "我和家人去了三亚。"},
                    {en: "Really? Did you like it?", cn: "真的吗？你喜欢吗？"},
                    {en: "Yes, it was so warm.", cn: "是的，那里很暖和。"},
                    {en: "Hainan is far from here.", cn: "海南离这里很远。"},
                    {en: "How did you go there?", cn: "你怎么去那里的？"},
                    {en: "We went there by plane.", cn: "我们坐飞机去的。"},
                    {en: "How was the beach?", cn: "海滩怎么样？"},
                    {en: "It was beautiful.", cn: "它很美。"},
                    {en: "I took lots of pictures, and I also went swimming.", cn: "我拍了很多照片，我还去游泳了。"},
                    {en: "Sounds great! Can I see your pictures sometime?", cn: "听起来很棒！我什么时候能看看你的照片？"},
                    {en: "Sure.", cn: "当然可以。"},
                    {en: "Where did you go last Saturday?", cn: "你上周六去哪里了？"},
                    {en: "I went to a forest park.", cn: "我去了一个森林公园。"}
                ]
            },
            {
                title: "Unit 4 Then and now",
                content: [
                    {en: "There was no library in my old school.", cn: "我以前的学校没有图书馆。"},
                    {en: "Tell us about your school, please.", cn: "请给我们讲讲你的学校。"},
                    {en: "There was only one small building on a hill.", cn: "山上只有一座小楼。"},
                    {en: "Could you see stars at night?", cn: "你晚上能看到星星吗？"},
                    {en: "Yes, I liked the stars.", cn: "是的，我喜欢星星。"},
                    {en: "There were no computers or Internet in my time.", cn: "我那时候没有电脑和互联网。"},
                    {en: "What was Grandpa's school like?", cn: "爷爷的学校是什么样的？"},
                    {en: "There was no gym.", cn: "没有体育馆。"},
                    {en: "There was only one small building.", cn: "只有一座小楼。"},
                    {en: "Tell me about your old school, Grandma.", cn: "奶奶，给我讲讲你以前的学校。"},
                    {en: "There was no library, and there were no computers at all.", cn: "没有图书馆，也根本没有电脑。"},
                    {en: "Wow, no gym!", cn: "哇，没有体育馆！"},
                    {en: "How did you learn?", cn: "你们怎么学习？"},
                    {en: "I listened to the teachers and did lots of reading.", cn: "我听老师讲课，还读了很多书。"}
                ]
            },
            {
                title: "Unit 5 Mike's summer camp",
                content: [
                    {en: "Welcome to the summer camp.", cn: "欢迎来到夏令营。"},
                    {en: "Today we'll learn some useful skills.", cn: "今天我们要学习一些有用的技能。"},
                    {en: "First, we should learn how to cook.", cn: "首先，我们应该学习做饭。"},
                    {en: "That's important.", cn: "那很重要。"},
                    {en: "Then we'll learn how to swim.", cn: "然后我们要学习游泳。"},
                    {en: "That's fun.", cn: "那很有趣。"},
                    {en: "Finally, we'll learn first aid.", cn: "最后，我们要学习急救。"},
                    {en: "That's useful.", cn: "那很有用。"},
                    {en: "What did you do at the camp?", cn: "你在营地做了什么？"},
                    {en: "I learned to cook.", cn: "我学会了做饭。"},
                    {en: "I learned to swim.", cn: "我学会了游泳。"},
                    {en: "I learned first aid.", cn: "我学会了急救。"},
                    {en: "Did you have fun?", cn: "你玩得开心吗？"},
                    {en: "Yes, it was exciting.", cn: "是的，很刺激。"},
                    {en: "I made new friends too.", cn: "我也交了新朋友。"}
                ]
            },
            {
                title: "Unit 6 Mike's happy days",
                content: [
                    {en: "It was a busy day.", cn: "这是忙碌的一天。"},
                    {en: "I got up early and had breakfast.", cn: "我早起吃了早餐。"},
                    {en: "Then I went to school.", cn: "然后我去上学。"},
                    {en: "In the morning, I had four classes.", cn: "上午，我上了四节课。"},
                    {en: "At noon, I ate lunch with my friends.", cn: "中午，我和朋友们一起吃午饭。"},
                    {en: "In the afternoon, I played sports.", cn: "下午，我做运动。"},
                    {en: "After school, I did my homework.", cn: "放学后，我做了作业。"},
                    {en: "In the evening, I watched TV with my family.", cn: "晚上，我和家人一起看电视。"},
                    {en: "It was a wonderful day.", cn: "这是美好的一天。"},
                    {en: "I was tired but happy.", cn: "我很累但很开心。"},
                    {en: "What did you do yesterday?", cn: "你昨天做了什么？"},
                    {en: "I had a busy day too.", cn: "我也度过了忙碌的一天。"},
                    {en: "Every day is a new day.", cn: "每一天都是新的一天。"},
                    {en: "Enjoy your life!", cn: "享受生活！"}
                ]
            }
        ]
    }
};

// 导出数据（用于模块化环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = textsData;
}

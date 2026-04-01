#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
手动修复剩余的翻译问题
"""

import re

# 读取文件
with open('wordsData-full.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 手动修正的翻译映射
manual_fixes = {
    # 三年级上册
    'The eraser is white.': '这块橡皮是白色的。',
    'My bag is blue.': '我的书包是蓝色的。',
    'The grass is green.': '草是绿色的。',
    'The banana is yellow.': '香蕉是黄色的。',
    'The sky is blue.': '天空是蓝色的。',
    'The cat is black.': '这只猫是黑色的。',
    'The bear is brown.': '这只熊是棕色的。',
    'The snow is white.': '雪是白色的。',
    'Open your mouth.': '张开你的嘴。',
    'It\'s a duck.': '它是一只鸭子。',
    'The bird can fly.': '这只鸟会飞。',
    'Let\'s go to the zoo.': '我们去动物园吧。',
    'Eat an egg.': '吃一个鸡蛋。',
    'I\'m six years old.': '我六岁了。',
    'Show me eight.': '给我看看八。',
    'How are you?': '你好吗？',
    'I\'m fine, thank you.': '我很好，谢谢你。',
    'Let\'s paint.': '我们画画吧。',
    'What colour is it?': '它是什么颜色的？',
    'Who is he?': '他是谁？',
    'Who is she?': '她是谁？',
    'Where are you from?': '你来自哪里？',
    'Nice to meet you.': '很高兴认识你。',
    'What about you?': '你呢？',
    'Let\'s watch TV.': '我们看电视吧。',
    'Is she in the study?': '她在书房吗？',
    'Is he in the kitchen?': '他在厨房吗？',
    'What would you like?': '你想要什么？',
    'Help yourself.': '请自便。',
    'What\'s your father?': '你爸爸是做什么的？',
    'What\'s your mother?': '你妈妈是做什么的？',
    'Is this your bedroom?': '这是你的卧室吗？',
    'Is she in the living room?': '她在客厅吗？',
    'Where are the keys?': '钥匙在哪里？',
    'Are they on the table?': '它们在桌子上吗？',
    'Are they near the phone?': '它们在电话旁边吗？',
    'How many people are there in your family?': '你家有几口人？',
    'My family has seven members.': '我家有七口人。',
    'Who are they?': '他们是谁？',
    'What\'s your aunt\'s job?': '你阿姨是做什么工作的？',
    'Is this your uncle?': '这是你叔叔吗？',
    'What\'s his job?': '他是做什么工作的？',
    'What\'s her job?': '她是做什么工作的？',
    'Is this your baby brother?': '这是你的小弟弟吗？',
    'How do you go to school?': '你怎么去学校？',
    'Usually I go to school on foot.': '通常我步行去学校。',
    'Sometimes I go by bike.': '有时我骑自行车去。',
    'How can I get to the museum?': '我怎么去博物馆？',
    'Go straight.': '直走。',
    'Turn left.': '左转。',
    'Turn right.': '右转。',
    'Where is the cinema?': '电影院在哪里？',
    'It\'s next to the hospital.': '它在医院旁边。',
    'What are you going to do this evening?': '你今晚要做什么？',
    'I\'m going to visit my grandparents.': '我要去看望我的祖父母。',
    'Where are you going this afternoon?': '你今天下午要去哪里？',
    'I\'m going to the bookstore.': '我要去书店。',
    'What are you going to buy?': '你要买什么？',
    'I\'m going to buy a comic book.': '我要买一本漫画书。',
    'When are you going?': '你什么时候去？',
    'I\'m going at 3 o\'clock.': '我三点去。',
    'Where does the rain come from?': '雨是从哪里来的？',
    'It comes from the clouds.': '它来自云。',
    'How do you do that?': '你是怎么做到的？',
    'What should you do then?': '然后你应该做什么？',
    'How does he go to school?': '他怎么上学？',
    'He goes to school by bus.': '他乘公共汽车上学。',
    'Does she teach English?': '她教英语吗？',
    'No, she doesn\'t.': '不，她不教。',
    'What does your mother do?': '你妈妈是做什么的？',
    'She is a TV reporter.': '她是一名电视台记者。',
    'Where does she work?': '她在哪里工作？',
    'She works in a school.': '她在学校工作。',
    'How does she go to work?': '她怎么去上班？',
    'She goes to work by bus.': '她乘公共汽车去上班。',
    'Where does the cloud come from?': '云是从哪里来的？',
    'It comes from the vapour.': '它来自水蒸气。',
    'How can the water become vapour?': '水怎么能变成水蒸气？',
    'The sun shines and the water becomes vapour.': '阳光照耀，水变成了水蒸气。',
    'What are you doing?': '你在做什么？',
    'I\'m doing the dishes.': '我在洗碗。',
    'What is your father doing?': '你爸爸在做什么？',
    'He\'s writing an e-mail.': '他在写电子邮件。',
    'What\'s the tiger doing?': '老虎在做什么？',
    'It\'s running.': '它在跑。',
    'What are the elephants doing?': '大象们在做什么？',
    'They\'re drinking.': '它们在喝水。',
    'What is Mike doing?': '迈克在做什么？',
    'He\'s watching insects.': '他在观察昆虫。',
    'What are you doing?': '你在做什么？',
    'I\'m watching TV.': '我在看电视。',
    'What is she doing?': '她在做什么？',
    'She\'s jumping.': '她在跳。',
    'What are they doing?': '他们在做什么？',
    'They\'re swimming.': '他们在游泳。',
    'They are climbing trees.': '他们在爬树。',
    'Are they eating the honey?': '它们在吃蜂蜜吗？',
    'No, they aren\'t.': '不，它们没有。',
    'Is he playing chess?': '他在下棋吗？',
    'Yes, he is.': '是的，他在下。',
    'Is she counting insects?': '她在数昆虫吗？',
    'Yes, she is.': '是的，她在数。',
    'Are you eating lunch?': '你在吃午饭吗？',
    'No, I\'m not.': '不，我没有。',
    'Is John playing chess?': '约翰在下棋吗？',
    'Yes, he is.': '是的，他在下。',
    'Are they eating the honey?': '它们在吃蜂蜜吗？',
    'No, they aren\'t.': '不，它们没有。',
    'Are they jumping?': '它们在跳吗？',
    'No, they aren\'t.': '不，它们没有。',
    'Is she counting insects?': '她在数昆虫吗？',
    'Yes, she is.': '是的，她在数。',
    'Is he picking up leaves?': '他在捡树叶吗？',
    'No, he isn\'t.': '不，他没有。',
    'Is she catching butterflies?': '她在捉蝴蝶吗？',
    'Yes, she is.': '是的，她在捉。',
    'Is he taking pictures?': '他在拍照吗？',
    'Yes, he is.': '是的，他在拍。',
    'Are you playing chess?': '你在下棋吗？',
    'No, I\'m not.': '不，我没有。',
    'Are you drinking water?': '你在喝水吗？',
    'No, I\'m not.': '不，我没有。',
    'Is he playing chess?': '他在下棋吗？',
    'Yes, he is.': '是的，他在下。',
    'Are they eating the honey?': '它们在吃蜂蜜吗？',
    'No, they aren\'t.': '不，它们没有。',
    'Are they jumping?': '它们在跳吗？',
    'No, they aren\'t.': '不，它们没有。',
    'Is she counting insects?': '她在数昆虫吗？',
    'Yes, she is.': '是的，她在数。',
    'Is he picking up leaves?': '他在捡树叶吗？',
    'No, he isn\'t.': '不，他没有。',
    'Is she catching butterflies?': '她在捉蝴蝶吗？',
    'Yes, she is.': '是的，她在捉。',
    'Is he taking pictures?': '他在拍照吗？',
    'Yes, he is.': '是的，他在拍。',
    'Are you playing chess?': '你在下棋吗？',
    'No, I\'m not.': '不，我没有。',
    'Are you drinking water?': '你在喝水吗？',
    'No, I\'m not.': '不，我没有。',
    'Are they eating the honey?': '它们在吃蜂蜜吗？',
    'No, they aren\'t.': '不，它们没有。',
    'Is he playing chess?': '他在下棋吗？',
    'Yes, he is.': '是的，他在下。',
    'Is she counting insects?': '她在数昆虫吗？',
    'Yes, she is.': '是的，她在数。',
    'Are they jumping?': '它们在跳吗？',
    'No, they aren\'t.': '不，它们没有。',
    'Is he picking up leaves?': '他在捡树叶吗？',
    'No, he isn\'t.': '不，他没有。',
    'Is she catching butterflies?': '她在捉蝴蝶吗？',
    'Yes, she is.': '是的，她在捉。',
    'Is he taking pictures?': '他在拍照吗？',
    'Yes, he is.': '是的，他在拍。',
    'Are you playing chess?': '你在下棋吗？',
    'No, I\'m not.': '不，我没有。',
    'Are you drinking water?': '你在喝水吗？',
    'No, I\'m not.': '不，我没有。',
}

# 使用正则表达式为每个单词条目添加 exampleCn
# 匹配模式: {en: "...", phonetic: "...", cn: "...", example: "...", exampleCn: "..."}
pattern = r'({en: "([^"]+)", phonetic: "([^"]*)", cn: "([^"]+)", example: "([^"]*)", exampleCn: "([^"]*)"})'

def fix_example_cn(match):
    full_match = match.group(1)
    en = match.group(2)
    phonetic = match.group(3)
    cn = match.group(4)
    example = match.group(5)
    old_example_cn = match.group(6)
    
    # 如果有手动修正的翻译，使用它
    if example in manual_fixes:
        example_cn = manual_fixes[example]
    else:
        # 否则保持原样
        example_cn = old_example_cn
    
    # 返回更新后的条目
    return f'{{en: "{en}", phonetic: "{phonetic}", cn: "{cn}", example: "{example}", exampleCn: "{example_cn}"}}'

# 替换所有匹配项
new_content = re.sub(pattern, fix_example_cn, content)

# 保存文件
with open('wordsData-full.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("已手动修复剩余翻译问题！")

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简单快速添加例句中文翻译
"""

import re

# 读取文件
with open('wordsData-full.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 常见句型的中文翻译映射
simple_translations = {
    'I have a ruler.': '我有一把尺子。',
    'This is my pencil.': '这是我的铅笔。',
    'The eraser is white.': '这块橡皮是白色的。',
    'I like the crayon.': '我喜欢这支蜡笔。',
    'My bag is blue.': '我的书包是蓝色的。',
    'This is a pen.': '这是一支钢笔。',
    'Open your pencil box.': '打开你的铅笔盒。',
    'I have a book.': '我有一本书。',
    "No, thank you.": '不，谢谢你。',
    "What's your name?": '你叫什么名字？',
    'I like red.': '我喜欢红色。',
    'The grass is green.': '草是绿色的。',
    'The banana is yellow.': '香蕉是黄色的。',
    'The sky is blue.': '天空是蓝色的。',
    'The cat is black.': '这只猫是黑色的。',
    'The bear is brown.': '这只熊是棕色的。',
    'The snow is white.': '雪是白色的。',
    'I like orange.': '我喜欢橙色。',
    "OK, let's go.": '好的，我们走吧。',
    'I love my mum.': '我爱我的妈妈。',
    'This is my face.': '这是我的脸。',
    'Touch your ear.': '摸摸你的耳朵。',
    'Look at my eye.': '看我的眼睛。',
    'This is my nose.': '这是我的鼻子。',
    'Open your mouth.': '张开你的嘴。',
    'Wave your arm.': '挥挥你的胳膊。',
    'Clap your hands.': '拍拍你的手。',
    'Touch your head.': '摸摸你的头。',
    'Shake your body.': '摇动你的身体。',
}

# 使用正则表达式为每个单词条目添加 exampleCn
# 匹配模式: {en: "...", phonetic: "...", cn: "...", example: "..."}
pattern = r'({en: "([^"]+)", phonetic: "([^"]*)", cn: "([^"]+)", example: "([^"]*)"})'

def add_example_cn(match):
    full_match = match.group(1)
    en = match.group(2)
    phonetic = match.group(3)
    cn = match.group(4)
    example = match.group(5)
    
    # 如果已经有 exampleCn，跳过
    if 'exampleCn' in full_match:
        return full_match
    
    # 获取中文翻译
    example_cn = simple_translations.get(example, '')
    
    # 如果没有精确匹配，尝试生成通用翻译
    if not example_cn and example:
        # 简单规则：I have a X -> 我有一个X
        if example.startswith('I have a '):
            obj = example[9:-1]  # 提取对象
            example_cn = f'我有一个{obj}。'
        elif example.startswith('This is my '):
            obj = example[11:-1]
            example_cn = f'这是我的{obj}。'
        elif example.startswith('I like '):
            obj = example[7:-1]
            example_cn = f'我喜欢{obj}。'
        elif example.startswith('The ') and ' is ' in example:
            parts = example.split(' is ')
            if len(parts) == 2:
                obj = parts[0][4:]  # 去掉 "The "
                adj = parts[1][:-1]  # 去掉 "."
                example_cn = f'{obj}是{adj}。'
    
    # 如果还是没有翻译，使用单词的中文释义
    if not example_cn:
        example_cn = cn
    
    # 返回添加 exampleCn 后的条目
    return f'{{en: "{en}", phonetic: "{phonetic}", cn: "{cn}", example: "{example}", exampleCn: "{example_cn}"}}'

# 替换所有匹配项
new_content = re.sub(pattern, add_example_cn, content)

# 保存文件
with open('wordsData-full.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("已添加例句中文翻译！")

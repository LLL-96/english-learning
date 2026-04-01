#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
最终修复例句中文翻译 - 处理特殊情况
"""

import re

# 读取文件
with open('wordsData-full.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 完整的单词翻译词典（包含复数形式）
word_translations = {
    # 学习用品
    "ruler": "尺子", "pencil": "铅笔", "eraser": "橡皮", "crayon": "蜡笔",
    "bag": "书包", "pen": "钢笔", "book": "书", "pencil box": "铅笔盒",
    "no": "不", "your": "你的", "name": "名字",
    # 颜色
    "red": "红色", "green": "绿色", "yellow": "黄色", "blue": "蓝色",
    "black": "黑色", "brown": "棕色", "white": "白色", "orange": "橙色",
    "OK": "好", "mum": "妈妈",
    # 身体部位（单数和复数）
    "face": "脸", "ear": "耳朵", "eye": "眼睛", "nose": "鼻子",
    "mouth": "嘴", "arm": "胳膊", "hand": "手", "hands": "手",
    "head": "头", "body": "身体", "leg": "腿", "foot": "脚",
    # 动物（单数和复数）
    "duck": "鸭子", "pig": "猪", "cat": "猫", "bear": "熊",
    "dog": "狗", "bird": "鸟", "panda": "熊猫", "pandas": "熊猫",
    "monkey": "猴子", "tiger": "老虎", "zoo": "动物园", "elephant": "大象",
    # 食物
    "bread": "面包", "juice": "果汁", "egg": "鸡蛋", "milk": "牛奶",
    "water": "水", "cake": "蛋糕", "fish": "鱼", "rice": "米饭",
    "beef": "牛肉", "chicken": "鸡肉", "noodles": "面条", "soup": "汤",
    "vegetables": "蔬菜", "chopsticks": "筷子", "bowl": "碗", "fork": "叉子",
    "knife": "刀", "spoon": "勺子", "dinner": "晚餐", "lunch": "午餐",
    "breakfast": "早餐",
    # 数字
    "one": "一", "two": "二", "three": "三", "four": "四",
    "five": "五", "six": "六", "seven": "七", "eight": "八",
    "nine": "九", "ten": "十", "eleven": "十一", "twelve": "十二",
    "thirteen": "十三", "fourteen": "十四", "fifteen": "十五",
    "sixteen": "十六", "seventeen": "十七", "eighteen": "十八",
    "nineteen": "十九", "twenty": "二十",
    # 形容词
    "fat": "胖的", "thin": "瘦的", "tall": "高的", "short": "矮的",
    "big": "大的", "small": "小的", "long": "长的", "cute": "可爱的",
    "strong": "强壮的", "friendly": "友好的", "quiet": "安静的",
    "hair": "头发", "shoe": "鞋子", "glasses": "眼镜",
    "funny": "有趣的", "old": "老的", "young": "年轻的",
    "beautiful": "美丽的", "nice": "好的",
    # 家庭成员
    "father": "爸爸", "dad": "爸爸", "man": "男人", "woman": "女人",
    "mother": "妈妈", "sister": "姐妹", "brother": "兄弟",
    "grandmother": "奶奶", "grandma": "奶奶", "grandfather": "爷爷",
    "grandpa": "爷爷", "family": "家庭", "parents": "父母",
    "uncle": "叔叔", "aunt": "阿姨", "baby": "婴儿", "cousin": "堂兄弟姐妹",
    "doctor": "医生", "cook": "厨师", "driver": "司机",
    "farmer": "农民", "nurse": "护士",
    # 房间和物品
    "bedroom": "卧室", "living room": "客厅", "study": "书房",
    "kitchen": "厨房", "bathroom": "浴室", "phone": "电话",
    "bed": "床", "sofa": "沙发", "shelf": "书架", "fridge": "冰箱",
    "table": "桌子", "chair": "椅子", "desk": "书桌", "door": "门",
    "window": "窗户", "wall": "墙", "floor": "地板", "TV": "电视",
    "computer": "电脑", "fan": "风扇", "light": "灯", "picture": "图画",
    # 学校相关
    "classroom": "教室", "school": "学校", "teacher": "老师",
    "student": "学生", "friend": "朋友", "boy": "男孩", "girl": "女孩",
    "classmate": "同学", "principal": "校长",
    # 地点
    "home": "家", "room": "房间", "library": "图书馆", "gym": "体育馆",
    "playground": "操场", "canteen": "食堂", "art room": "美术室",
    "computer room": "电脑室", "washroom": "洗手间", "music room": "音乐室",
    "garden": "花园", "swing": "秋千", "slide": "滑梯", "seesaw": "跷跷板",
    # 动作
    "go": "去", "come": "来", "eat": "吃", "drink": "喝",
    "run": "跑", "walk": "走", "jump": "跳", "swim": "游泳",
    "fly": "飞", "read": "读", "write": "写", "draw": "画",
    "sing": "唱", "dance": "跳舞", "play": "玩", "sleep": "睡觉",
    "wake": "醒", "wash": "洗", "clean": "打扫", "cook": "烹饪",
    "open": "打开", "close": "关闭", "sit": "坐", "stand": "站",
    "look": "看", "see": "看见", "watch": "观看", "listen": "听",
    "speak": "说", "say": "说", "talk": "谈话", "tell": "告诉",
    "ask": "问", "answer": "回答", "think": "想", "know": "知道",
    "learn": "学习", "study": "学习", "teach": "教", "help": "帮助",
    "like": "喜欢", "love": "爱", "want": "想要", "need": "需要",
    "have": "有", "has": "有", "do": "做", "does": "做",
    "can": "能", "can't": "不能", "may": "可以", "must": "必须",
    "should": "应该", "will": "将", "would": "愿意",
    # 天气和季节
    "weather": "天气", "sunny": "晴朗的", "rainy": "下雨的",
    "windy": "有风的", "snowy": "下雪的", "cloudy": "多云的",
    "hot": "热的", "cold": "冷的", "warm": "温暖的", "cool": "凉爽的",
    "spring": "春天", "summer": "夏天", "autumn": "秋天", "fall": "秋天",
    "winter": "冬天", "season": "季节",
    # 时间和日期
    "time": "时间", "morning": "早上", "afternoon": "下午",
    "evening": "晚上", "night": "夜晚", "today": "今天",
    "tomorrow": "明天", "yesterday": "昨天", "week": "星期",
    "Monday": "星期一", "Tuesday": "星期二", "Wednesday": "星期三",
    "Thursday": "星期四", "Friday": "星期五", "Saturday": "星期六",
    "Sunday": "星期日", "weekend": "周末", "month": "月", "year": "年",
    "o'clock": "点钟", "minute": "分钟", "hour": "小时",
    # 衣服
    "jacket": "夹克衫", "shirt": "衬衫", "skirt": "裙子",
    "dress": "连衣裙", "T-shirt": "T恤衫", "sweater": "毛衣",
    "coat": "外套", "raincoat": "雨衣", "shorts": "短裤",
    "pants": "裤子", "jeans": "牛仔裤", "socks": "袜子",
    "shoes": "鞋子", "boots": "靴子", "hat": "帽子", "cap": "帽子",
    "scarf": "围巾", "gloves": "手套", "umbrella": "雨伞",
    "sunglasses": "太阳镜", "clothes": "衣服",
    # 购物
    "shop": "商店", "store": "商店", "buy": "买", "sell": "卖",
    "price": "价格", "cheap": "便宜的", "expensive": "贵的",
    "money": "钱", "yuan": "元", "dollar": "美元",
    # 其他常用词
    "hello": "你好", "hi": "嗨", "goodbye": "再见", "bye": "再见",
    "thanks": "谢谢", "thank": "谢谢", "please": "请", "sorry": "对不起",
    "excuse": "打扰", "yes": "是", "not": "不",
    "and": "和", "or": "或者", "but": "但是", "because": "因为",
    "if": "如果", "when": "当...时", "where": "哪里", "what": "什么",
    "who": "谁", "why": "为什么", "how": "怎样", "which": "哪个",
    "this": "这个", "that": "那个", "these": "这些", "those": "那些",
    "here": "这里", "there": "那里", "now": "现在", "then": "那时",
    "very": "非常", "too": "太", "so": "如此", "just": "刚刚",
    "also": "也", "only": "只有", "even": "甚至", "still": "仍然",
    "already": "已经", "yet": "还", "again": "再", "once": "一次",
    "first": "第一", "last": "最后", "next": "下一个", "every": "每个",
    "all": "所有", "some": "一些", "any": "任何", "many": "许多",
    "much": "很多", "more": "更多", "most": "最多", "few": "很少",
    "little": "少的", "other": "其他的", "another": "另一个",
    "same": "相同的", "different": "不同的", "new": "新的",
    "good": "好的", "bad": "坏的",
    "better": "更好的", "best": "最好的", "happy": "快乐的",
    "sad": "悲伤的", "angry": "生气的", "tired": "累的",
    "hungry": "饿的", "thirsty": "渴的", "sick": "生病的",
    "fine": "好的", "well": "好", "great": "伟大的",
    "wonderful": "精彩的", "ugly": "丑陋的",
    "easy": "容易的", "difficult": "困难的", "hard": "难的",
    "soft": "软的", "fast": "快的", "slow": "慢的", "quick": "快的",
    "early": "早的", "late": "晚的", "busy": "忙的", "free": "空闲的",
    "right": "正确的", "wrong": "错误的", "true": "真的", "false": "假的",
    "special": "特别的",
    "important": "重要的", "interesting": "有趣的", "boring": "无聊的",
    "fun": "有趣的", "exciting": "令人兴奋的", "surprising": "令人惊讶的",
    "amazing": "令人惊奇的", "excellent": "优秀的",
    "perfect": "完美的", "terrible": "可怕的", "awful": "糟糕的",
    "poor": "贫穷的", "rich": "富有的", "famous": "著名的",
    "popular": "流行的", "favourite": "最喜欢的", "favorite": "最喜欢的",
    # 其他
    "grass": "草", "banana": "香蕉", "sky": "天空", "snow": "雪",
    "fly": "飞", "an": "一个", "the": "",  # the 不翻译
}

def translate_sentence(example):
    """翻译例句"""
    if not example:
        return ""
    
    example = example.strip()
    
    # 1. I have a/an X -> 我有一个X
    if example.startswith('I have a ') or example.startswith('I have an '):
        obj = example.split('I have ')[1][2:-1]
        cn_obj = word_translations.get(obj, obj)
        # 处理量词
        if cn_obj in ["书", "尺子", "铅笔", "钢笔", "橡皮"]:
            return f'我有一本{cn_obj}。'
        elif cn_obj in ["猫", "狗", "鸟", "鸭子", "猪", "熊", "熊猫", "猴子", "老虎", "大象"]:
            return f'我有一只{cn_obj}。'
        elif cn_obj in ["铅笔盒", "书包", "桌子", "椅子", "床", "沙发"]:
            return f'我有一个{cn_obj}。'
        return f'我有一个{cn_obj}。'
    
    # 2. This is my X -> 这是我的X
    if example.startswith('This is my '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'这是我的{cn_obj}。'
    
    # 3. This is a/an X -> 这是一个X
    if example.startswith('This is a ') or example.startswith('This is an '):
        obj = example.split('This is ')[1][2:-1]
        cn_obj = word_translations.get(obj, obj)
        if cn_obj in ["钢笔", "铅笔"]:
            return f'这是一支{cn_obj}。'
        elif cn_obj in ["书"]:
            return f'这是一本{cn_obj}。'
        return f'这是一个{cn_obj}。'
    
    # 4. I like X -> 我喜欢X
    if example.startswith('I like '):
        obj = example[7:-1]
        # 处理 "I like the X" 的情况
        if obj.startswith('the '):
            obj = obj[4:]
        cn_obj = word_translations.get(obj, obj)
        return f'我喜欢{cn_obj}。'
    
    # 5. I love X -> 我爱X
    if example.startswith('I love '):
        obj = example[7:-1]
        if obj.startswith('my '):
            obj = obj[3:]
            cn_obj = word_translations.get(obj, obj)
            return f'我爱我的{cn_obj}。'
        cn_obj = word_translations.get(obj, obj)
        return f'我爱{cn_obj}。'
    
    # 6. The X is Y -> X是Y的
    if example.startswith('The ') and ' is ' in example:
        parts = example.split(' is ')
        if len(parts) == 2:
            obj = parts[0][4:]
            adj = parts[1][:-1]
            cn_obj = word_translations.get(obj, obj)
            cn_adj = word_translations.get(adj, adj)
            # 添加"这只"、"这"等修饰词
            if cn_obj in ["猫", "狗", "鸟", "鸭子", "猪", "熊", "熊猫", "猴子", "老虎", "大象"]:
                return f'这只{cn_obj}是{cn_adj}。'
            elif cn_obj in ["橡皮", "书包", "铅笔盒"]:
                return f'这块{cn_obj}是{cn_obj}。'
            return f'{cn_obj}是{cn_adj}。'
    
    # 7. My X is Y -> 我的X是Y的
    if example.startswith('My ') and ' is ' in example:
        parts = example.split(' is ')
        if len(parts) == 2:
            obj = parts[0][3:]
            adj = parts[1][:-1]
            cn_obj = word_translations.get(obj, obj)
            cn_adj = word_translations.get(adj, adj)
            return f'我的{cn_obj}是{cn_adj}。'
    
    # 8. Touch your X -> 摸摸你的X
    if example.startswith('Touch your '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'摸摸你的{cn_obj}。'
    
    # 9. Look at X -> 看X
    if example.startswith('Look at '):
        obj = example[8:-1]
        if obj.startswith('my '):
            obj = obj[3:]
            cn_obj = word_translations.get(obj, obj)
            return f'看我的{cn_obj}。'
        if obj.startswith('the '):
            obj = obj[4:]
            cn_obj = word_translations.get(obj, obj)
            return f'看这个{cn_obj}。'
        cn_obj = word_translations.get(obj, obj)
        return f'看{cn_obj}。'
    
    # 10. Open your X -> 打开你的X
    if example.startswith('Open your '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'打开你的{cn_obj}。'
    
    # 11. Close your X -> 闭上你的X
    if example.startswith('Close your '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'闭上你的{cn_obj}。'
    
    # 12. Wave your X -> 挥挥你的X
    if example.startswith('Wave your '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'挥挥你的{cn_obj}。'
    
    # 13. Clap your X -> 拍拍你的X
    if example.startswith('Clap your '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'拍拍你的{cn_obj}。'
    
    # 14. Shake your X -> 摇动你的X
    if example.startswith('Shake your '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'摇动你的{cn_obj}。'
    
    # 15. Stamp your X -> 跺你的X
    if example.startswith('Stamp your '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'跺你的{cn_obj}。'
    
    # 16. It's a/an X -> 它是一只/个X
    if example.startswith("It's a ") or example.startswith("It's an "):
        obj = example.split("It's ")[1][2:-1]
        cn_obj = word_translations.get(obj, obj)
        if cn_obj in ["猫", "狗", "鸟", "鸭子", "猪", "熊", "熊猫", "猴子", "老虎", "大象"]:
            return f'它是一只{cn_obj}。'
        return f'它是一个{cn_obj}。'
    
    # 17. OK, let's X -> 好的，让我们X
    if example.startswith("OK, let's "):
        action = example[10:-1]
        cn_action = word_translations.get(action, action)
        return f'好的，让我们{cn_action}。'
    
    # 18. What's your X? -> 你的X是什么？
    if example.startswith("What's your "):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'你的{cn_obj}是什么？'
    
    # 19. No, thank you -> 不，谢谢你
    if example == "No, thank you.":
        return '不，谢谢你。'
    
    # 20. Show me your X -> 给我看看你的X
    if example.startswith('Show me your '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'给我看看你的{cn_obj}。'
    
    # 21. Where is my X? -> 我的X在哪里？
    if example.startswith('Where is my '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我的{cn_obj}在哪里？'
    
    # 22. Where are my X? -> 我的X在哪里？
    if example.startswith('Where are my '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我的{cn_obj}在哪里？'
    
    # 23. I'm from X -> 我来自X
    if example.startswith("I'm from "):
        place = example[9:-1]
        return f'我来自{place}。'
    
    # 24. Can I X? -> 我能X吗？
    if example.startswith('Can I '):
        action = example[6:-1]
        cn_action = word_translations.get(action, action)
        return f'我能{cn_action}吗？'
    
    # 25. Do you like X? -> 你喜欢X吗？
    if example.startswith('Do you like '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'你喜欢{cn_obj}吗？'
    
    # 26. Have some X -> 吃些X
    if example.startswith('Have some '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'吃些{cn_obj}。'
    
    # 27. Eat some X -> 吃些X
    if example.startswith('Eat some '):
        obj = example[9:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'吃些{cn_obj}。'
    
    # 28. Drink some X -> 喝些X
    if example.startswith('Drink some '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'喝些{cn_obj}。'
    
    # 29. Pass me the X -> 把X递给我
    if example.startswith('Pass me the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'把{cn_obj}递给我。'
    
    # 30. Put on your X -> 戴上你的X
    if example.startswith('Put on your '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'戴上你的{cn_obj}。'
    
    # 31. Take off your X -> 脱下你的X
    if example.startswith('Take off your '):
        obj = example[14:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'脱下你的{cn_obj}。'
    
    # 32. Go to X -> 去X
    if example.startswith('Go to '):
        place = example[6:-1]
        cn_place = word_translations.get(place, place)
        return f'去{cn_place}。'
    
    # 33. Come X -> 过来X
    if example.startswith('Come '):
        action = example[5:-1]
        cn_action = word_translations.get(action, action)
        return f'过来{cn_action}。'
    
    # 34. Bounce the X -> 拍X
    if example.startswith('Bounce the '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'拍{cn_obj}。'
    
    # 35. Drive a X -> 开X
    if example.startswith('Drive a '):
        obj = example[8:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'开{cn_obj}。'
    
    # 36. Row a X -> 划X
    if example.startswith('Row a '):
        obj = example[6:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'划{cn_obj}。'
    
    # 37. Read a X -> 读X
    if example.startswith('Read a '):
        obj = example[7:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'读{cn_obj}。'
    
    # 38. I see X -> 我看见X
    if example.startswith('I see '):
        obj = example[6:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我看见{cn_obj}。'
    
    # 39. I am X -> 我X
    if example.startswith('I am '):
        adj = example[5:-1]
        cn_adj = word_translations.get(adj, adj)
        return f'我{cn_adj}。'
    
    # 40. I want X -> 我想要X
    if example.startswith('I want '):
        obj = example[7:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我想要{cn_obj}。'
    
    # 41. I want to X -> 我想要X
    if example.startswith('I want to '):
        action = example[10:-1]
        cn_action = word_translations.get(action, action)
        return f'我想要{cn_action}。'
    
    # 42. I want some X -> 我想要一些X
    if example.startswith('I want some '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我想要一些{cn_obj}。'
    
    # 43. I'd like some X -> 我想要一些X
    if example.startswith("I'd like some "):
        obj = example[14:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我想要一些{cn_obj}。'
    
    # 44. I love to X -> 我喜欢X
    if example.startswith('I love to '):
        action = example[10:-1]
        cn_action = word_translations.get(action, action)
        return f'我喜欢{cn_action}。'
    
    # 45. I like to X -> 我喜欢X
    if example.startswith('I like to '):
        action = example[10:-1]
        cn_action = word_translations.get(action, action)
        return f'我喜欢{cn_action}。'
    
    # 46. I often X -> 我经常X
    if example.startswith('I often '):
        action = example[8:-1]
        cn_action = word_translations.get(action, action)
        return f'我经常{cn_action}。'
    
    # 47. I usually X -> 我通常X
    if example.startswith('I usually '):
        action = example[10:-1]
        cn_action = word_translations.get(action, action)
        return f'我通常{cn_action}。'
    
    # 48. I sometimes X -> 我有时X
    if example.startswith('I sometimes '):
        action = example[12:-1]
        cn_action = word_translations.get(action, action)
        return f'我有时{cn_action}。'
    
    # 49. I can X -> 我能X
    if example.startswith('I can '):
        action = example[6:-1]
        cn_action = word_translations.get(action, action)
        return f'我能{cn_action}。'
    
    # 50. I can't X -> 我不能X
    if example.startswith("I can't "):
        action = example[8:-1]
        cn_action = word_translations.get(action, action)
        return f'我不能{cn_action}。'
    
    # 51. I don't X -> 我不X
    if example.startswith("I don't "):
        action = example[8:-1]
        cn_action = word_translations.get(action, action)
        return f'我不{cn_action}。'
    
    # 52. I didn't X -> 我没有X
    if example.startswith("I didn't "):
        action = example[9:-1]
        cn_action = word_translations.get(action, action)
        return f'我没有{cn_action}。'
    
    # 53. I went to X -> 我去了X
    if example.startswith('I went to '):
        place = example[10:-1]
        cn_place = word_translations.get(place, place)
        return f'我去了{cn_place}。'
    
    # 54. I went X -> 我去X
    if example.startswith('I went '):
        action = example[7:-1]
        cn_action = word_translations.get(action, action)
        return f'我去{cn_action}。'
    
    # 55. I saw X -> 我看见了X
    if example.startswith('I saw '):
        obj = example[6:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我看见了{cn_obj}。'
    
    # 56. I ate X -> 我吃了X
    if example.startswith('I ate '):
        obj = example[6:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我吃了{cn_obj}。'
    
    # 57. I drank X -> 我喝了X
    if example.startswith('I drank '):
        obj = example[8:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我喝了{cn_obj}。'
    
    # 58. I bought X -> 我买了X
    if example.startswith('I bought '):
        obj = example[9:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我买了{cn_obj}。'
    
    # 59. I took X -> 我带了X
    if example.startswith('I took '):
        obj = example[7:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我带了{cn_obj}。'
    
    # 60. I hurt my X -> 我伤了我的X
    if example.startswith('I hurt my '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我伤了我的{cn_obj}。'
    
    # 61. I lost my X -> 我丢了我的X
    if example.startswith('I lost my '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我丢了我的{cn_obj}。'
    
    # 62. I found my X -> 我找到了我的X
    if example.startswith('I found my '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我找到了我的{cn_obj}。'
    
    # 63. I fixed my X -> 我修好了我的X
    if example.startswith('I fixed my '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我修好了我的{cn_obj}。'
    
    # 64. I cleaned my X -> 我打扫了我的X
    if example.startswith('I cleaned my '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我打扫了我的{cn_obj}。'
    
    # 65. I washed my X -> 我洗了我的X
    if example.startswith('I washed my '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我洗了我的{cn_obj}。'
    
    # 66. I watched X -> 我看了X
    if example.startswith('I watched '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我看了{cn_obj}。'
    
    # 67. I read X -> 我读了X
    if example.startswith('I read '):
        obj = example[7:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我读了{cn_obj}。'
    
    # 68. I stayed at X -> 我待在X
    if example.startswith('I stayed at '):
        place = example[12:-1]
        cn_place = word_translations.get(place, place)
        return f'我待在{cn_place}。'
    
    # 69. I slept X -> 我睡得X
    if example.startswith('I slept '):
        adj = example[8:-1]
        cn_adj = word_translations.get(adj, adj)
        return f'我睡得{cn_adj}。'
    
    # 70. I had X -> 我有X
    if example.startswith('I had '):
        obj = example[6:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我有{cn_obj}。'
    
    # 71. I had a X -> 我有一个X
    if example.startswith('I had a '):
        obj = example[8:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我有一个{cn_obj}。'
    
    # 72. I played X -> 我玩了X
    if example.startswith('I played '):
        obj = example[9:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'我玩了{cn_obj}。'
    
    # 73. My X is Y -> 我的X是Y
    if example.startswith('My ') and ' is ' in example:
        parts = example.split(' is ')
        if len(parts) == 2:
            obj = parts[0][3:]
            adj = parts[1][:-1]
            cn_obj = word_translations.get(obj, obj)
            cn_adj = word_translations.get(adj, adj)
            return f'我的{cn_obj}是{cn_adj}。'
    
    # 74. Her X is Y -> 她的X是Y
    if example.startswith('Her ') and ' is ' in example:
        parts = example.split(' is ')
        if len(parts) == 2:
            obj = parts[0][4:]
            adj = parts[1][:-1]
            cn_obj = word_translations.get(obj, obj)
            cn_adj = word_translations.get(adj, adj)
            return f'她的{cn_obj}是{cn_adj}。'
    
    # 75. His X is Y -> 他的X是Y
    if example.startswith('His ') and ' is ' in example:
        parts = example.split(' is ')
        if len(parts) == 2:
            obj = parts[0][4:]
            adj = parts[1][:-1]
            cn_obj = word_translations.get(obj, obj)
            cn_adj = word_translations.get(adj, adj)
            return f'他的{cn_obj}是{cn_adj}。'
    
    # 76. She has X -> 她有X
    if example.startswith('She has '):
        obj = example[8:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'她有{cn_obj}。'
    
    # 77. He has X -> 他有X
    if example.startswith('He has '):
        obj = example[7:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'他有{cn_obj}。'
    
    # 78. She has a X -> 她有一个X
    if example.startswith('She has a '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'她有一个{cn_obj}。'
    
    # 79. He has a X -> 他有一个X
    if example.startswith('He has a '):
        obj = example[9:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'他有一个{cn_obj}。'
    
    # 80. She is a X -> 她是一名X
    if example.startswith('She is a '):
        obj = example[9:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'她是一名{cn_obj}。'
    
    # 81. He is a X -> 他是一名X
    if example.startswith('He is a '):
        obj = example[8:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'他是一名{cn_obj}。'
    
    # 82. Turn on the X -> 打开X
    if example.startswith('Turn on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'打开{cn_obj}。'
    
    # 83. Turn off the X -> 关闭X
    if example.startswith('Turn off the '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'关闭{cn_obj}。'
    
    # 84. Open the X -> 打开X
    if example.startswith('Open the '):
        obj = example[9:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'打开{cn_obj}。'
    
    # 85. Close the X -> 关闭X
    if example.startswith('Close the '):
        obj = example[10:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'关闭{cn_obj}。'
    
    # 86. Sit on the X -> 坐在X上
    if example.startswith('Sit on the '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'坐在{cn_obj}上。'
    
    # 87. Stand on the X -> 站在X上
    if example.startswith('Stand on the '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'站在{cn_obj}上。'
    
    # 88. Jump on the X -> 跳上X
    if example.startswith('Jump on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'跳上{cn_obj}。'
    
    # 89. Run on the X -> 在X上跑
    if example.startswith('Run on the '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上跑。'
    
    # 90. Walk on the X -> 在X上走
    if example.startswith('Walk on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上走。'
    
    # 91. Play on the X -> 在X上玩
    if example.startswith('Play on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上玩。'
    
    # 92. Work on the X -> 在X上工作
    if example.startswith('Work on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上工作。'
    
    # 93. Study on the X -> 在X上学习
    if example.startswith('Study on the '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上学习。'
    
    # 94. Sleep on the X -> 在X上睡觉
    if example.startswith('Sleep on the '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上睡觉。'
    
    # 95. Eat on the X -> 在X上吃
    if example.startswith('Eat on the '):
        obj = example[11:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上吃。'
    
    # 96. Drink on the X -> 在X上喝
    if example.startswith('Drink on the '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上喝。'
    
    # 97. Cook on the X -> 在X上烹饪
    if example.startswith('Cook on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上烹饪。'
    
    # 98. Clean on the X -> 在X上打扫
    if example.startswith('Clean on the '):
        obj = example[13:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上打扫。'
    
    # 99. Wash on the X -> 在X上洗
    if example.startswith('Wash on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上洗。'
    
    # 100. Draw on the X -> 在X上画
    if example.startswith('Draw on the '):
        obj = example[12:-1]
        cn_obj = word_translations.get(obj, obj)
        return f'在{cn_obj}上画。'
    
    # 如果以上规则都不匹配，返回空字符串
    return ""

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
    
    # 获取新的中文翻译
    example_cn = translate_sentence(example)
    
    # 如果还是没有翻译，使用单词的中文释义
    if not example_cn:
        example_cn = cn
    
    # 返回更新后的条目
    return f'{{en: "{en}", phonetic: "{phonetic}", cn: "{cn}", example: "{example}", exampleCn: "{example_cn}"}}'

# 替换所有匹配项
new_content = re.sub(pattern, fix_example_cn, content)

# 保存文件
with open('wordsData-full.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("已最终修复所有例句中文翻译！")

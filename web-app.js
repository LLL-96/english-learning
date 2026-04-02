// 网页版英语单词学习应用

// 当前状态
let currentGrade = 3;
let currentSemester = ''; // '' = 上册, 'b' = 下册
let currentUnit = 'all'; // 'all' = 全部单元, 或具体单元编号
let currentWordIndex = 0;
let currentMode = 'words';
let speechRate = 0.8;
let voices = [];

// 本地存储键名
const STORAGE_KEY = 'english_learning_progress';

// 加载保存的学习进度
function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const progress = JSON.parse(saved);
            currentGrade = progress.grade || 3;
            currentSemester = progress.semester || '';
            currentUnit = progress.unit || 'all';
            currentWordIndex = progress.wordIndex || 0;
            return true;
        }
    } catch (e) {
        // 忽略存储错误
    }
    return false;
}

// 保存学习进度
function saveProgress() {
    try {
        const progress = {
            grade: currentGrade,
            semester: currentSemester,
            unit: currentUnit,
            wordIndex: currentWordIndex,
            timestamp: Date.now()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        // 忽略存储错误
    }
}

// 清除学习进度
function clearProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        // 忽略错误
    }
}

// 重置学习进度（用户触发）
function resetProgress() {
    if (confirm('确定要重置学习进度吗？这将清除所有保存的学习记录。')) {
        clearProgress();
        // 重置到默认状态
        currentGrade = 3;
        currentSemester = '';
        currentUnit = 'all';
        currentWordIndex = 0;
        
        // 恢复UI状态
        document.querySelectorAll('.grade-btn').forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.grade) === 3) {
                btn.classList.add('active');
            }
        });
        
        document.querySelectorAll('.semester-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.semester === '') {
                btn.classList.add('active');
            }
        });
        
        loadGrade(3);
        showNotification('学习进度已重置', 'info');
    }
}

// 初始化
function init() {
    loadVoices();
    setupEventListeners();
    setupKeyboardShortcuts();
    setupTouchGestures();
    
    // 尝试加载保存的进度
    const hasProgress = loadProgress();
    if (hasProgress) {
        // 恢复UI状态
        restoreUIState();
    }
    
    loadGrade(currentGrade);
}

// 恢复UI状态
function restoreUIState() {
    // 恢复年级按钮状态
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.grade) === currentGrade) {
            btn.classList.add('active');
        }
    });
    
    // 恢复上下册按钮状态
    document.querySelectorAll('.semester-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.semester === currentSemester) {
            btn.classList.add('active');
        }
    });
}

// 等待 DOM 和数据加载完成
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM 已经加载完成，延迟一点确保数据也加载了
    setTimeout(init, 100);
}

// 加载语音列表
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select');
    if (voiceSelect) {
        voiceSelect.innerHTML = '<option value="">默认语音</option>';
        voices.forEach((voice, index) => {
            if (voice.lang.includes('en') || voice.lang.includes('zh')) {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `${voice.name} (${voice.lang})`;
                voiceSelect.appendChild(option);
            }
        });
    }
}

// 设置事件监听
function setupEventListeners() {
    // 年级按钮
    const gradeButtons = document.querySelectorAll('.grade-btn');
    
    gradeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGrade = parseInt(btn.dataset.grade);
            loadGrade(currentGrade);
        });
    });

    // 上下册按钮
    const semesterButtons = document.querySelectorAll('.semester-btn');
    
    semesterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.semester-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSemester = btn.dataset.semester;
            loadGrade(currentGrade);
        });
    });

    // 单元选择器
    const unitSelect = document.getElementById('unit-select');
    if (unitSelect) {
        unitSelect.addEventListener('change', (e) => {
            currentUnit = e.target.value;
            currentWordIndex = 0;
            const words = getCurrentWords();
            updateWordDisplay(words);
        });
    }

    // 模式按钮
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.dataset.mode;
            switchMode(currentMode);
        });
    });

    // 朗读速度
    const rateSlider = document.getElementById('rate');
    if (rateSlider) {
        rateSlider.addEventListener('input', (e) => {
            speechRate = parseFloat(e.target.value);
            document.getElementById('rate-value').textContent = speechRate;
        });
    }

    // 语音选择
    const voiceSelect = document.getElementById('voice-select');
    if (voiceSelect) {
        voiceSelect.addEventListener('change', loadVoices);
    }

    // 监听语音加载
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}

// 设置键盘快捷键
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // 只在单词学习模式下响应
        if (currentMode !== 'words') return;
        
        // 防止在输入框中触发
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                prevWord();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextWord();
                break;
            case ' ':
                e.preventDefault();
                speakWord();
                break;
            case 'e':
            case 'E':
                e.preventDefault();
                showExample();
                break;
            case 's':
            case 'S':
                e.preventDefault();
                speakSentence();
                break;
        }
    });
}

// 设置触摸滑动手势（移动端支持）
function setupTouchGestures() {
    const wordCard = document.querySelector('.word-card');
    if (!wordCard) return;
    
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let isSwiping = false;
    const minSwipeDistance = 50; // 最小滑动距离
    
    wordCard.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        isSwiping = true;
        wordCard.style.transition = 'none';
    }, { passive: true });
    
    wordCard.addEventListener('touchmove', (e) => {
        if (!isSwiping || currentMode !== 'words') return;
        
        const currentX = e.changedTouches[0].screenX;
        const currentY = e.changedTouches[0].screenY;
        const deltaX = currentX - touchStartX;
        const deltaY = currentY - touchStartY;
        
        // 只有当水平滑动大于垂直滑动时才响应
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // 添加视觉反馈：卡片跟随手指移动
            const rotate = deltaX * 0.05;
            wordCard.style.transform = `translateX(${deltaX * 0.3}px) rotate(${rotate}deg)`;
        }
    }, { passive: true });
    
    wordCard.addEventListener('touchend', (e) => {
        // 只在单词学习模式下响应
        if (currentMode !== 'words' || !isSwiping) return;
        
        isSwiping = false;
        touchEndX = e.changedTouches[0].screenX;
        
        // 恢复卡片位置
        wordCard.style.transition = 'transform 0.3s ease';
        wordCard.style.transform = '';
        
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // 向右滑动 -> 上一个单词
                prevWord();
            } else {
                // 向左滑动 -> 下一个单词
                nextWord();
            }
        }
    }
}

// 加载年级数据
function loadGrade(grade) {
    currentGrade = grade;
    
    // 填充单元选择器
    populateUnitSelect(grade);
    
    // 恢复单元选择
    const unitSelect = document.getElementById('unit-select');
    if (unitSelect && currentUnit !== 'all') {
        unitSelect.value = currentUnit;
    }
    
    // 获取当前单词列表
    const words = getCurrentWords();
    
    // 确保索引不超出范围
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
    }
    
    // 更新显示
    updateWordDisplay(words);
}

// 填充单元选择器
function populateUnitSelect(grade) {
    const unitSelect = document.getElementById('unit-select');
    if (!unitSelect) return;
    
    // 清空现有选项
    unitSelect.innerHTML = '<option value="all">全部单元</option>';
    
    const gradeKey = `grade${grade}${currentSemester}`;
    
    if (typeof wordsData !== 'undefined' && wordsData[gradeKey] && wordsData[gradeKey].units) {
        wordsData[gradeKey].units.forEach((unit, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = unit.title;
            unitSelect.appendChild(option);
        });
    }
}

// 更新单词显示
function updateWordDisplay(words) {
    const wordDisplay = document.querySelector('.word-display');
    const progressText = document.querySelector('.progress-text');
    const progressFill = document.querySelector('.progress-fill');
    
    if (words.length > 0 && currentWordIndex < words.length) {
        const word = words[currentWordIndex];
        
        if (wordDisplay) {
            wordDisplay.innerHTML = `
                <h2 class="english-word">${word.en || word.english || 'Hello'}</h2>
                <p class="phonetic">${word.phonetic || ''}</p>
                <p class="chinese-meaning">${word.cn || word.chinese || ''}</p>
            `;
        }
        
        if (progressText) {
            progressText.textContent = `${currentWordIndex + 1} / ${words.length}`;
        }
        
        // 更新进度条
        if (progressFill) {
            const progress = ((currentWordIndex + 1) / words.length) * 100;
            progressFill.style.width = `${progress}%`;
        }
        
        // 更新例句内容
        updateExampleSentence(word);
        
        // 更新页面标题
        updatePageTitle(word);
    } else {
        if (wordDisplay) {
            wordDisplay.innerHTML = `
                <h2 class="english-word">暂无数据</h2>
                <p class="phonetic"></p>
                <p class="chinese-meaning">该年级暂无单词数据</p>
            `;
        }
        if (progressText) {
            progressText.textContent = '0 / 0';
        }
        if (progressFill) {
            progressFill.style.width = '0%';
        }
    }
}

// 更新例句显示
function updateExampleSentence(word) {
    const sentenceEn = document.querySelector('.sentence-en');
    const sentenceCn = document.querySelector('.sentence-cn');
    
    if (sentenceEn && sentenceCn && word) {
        if (word.example) {
            sentenceEn.textContent = word.example;
            // 如果有中文翻译则显示，否则显示单词的中文释义
            sentenceCn.textContent = word.exampleCn || word.cn || '';
        } else {
            // 如果没有例句，使用默认例句
            sentenceEn.textContent = `This is a ${word.en || word.english}.`;
            sentenceCn.textContent = `这是一个${word.cn || word.chinese || '单词'}。`;
        }
    }
}

// 更新页面标题
function updatePageTitle(word) {
    if (word && word.en) {
        document.title = `${word.en} - 小学英语单词学习`;
    } else {
        document.title = '小学英语单词学习 - 3-6年级';
    }
}

// 切换模式
function switchMode(mode) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(`${mode}-section`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // 根据模式初始化内容
    if (mode === 'texts') {
        loadTexts();
    } else if (mode === 'test') {
        initTest();
    }
}

// 朗读单词
function speakWord() {
    const wordElement = document.querySelector('.english-word');
    if (wordElement && window.speechSynthesis) {
        const text = wordElement.textContent;
        speak(text);
    }
}

// 朗读句子
function speakSentence() {
    const sentenceElement = document.querySelector('.sentence-en');
    if (sentenceElement && window.speechSynthesis) {
        const text = sentenceElement.textContent;
        speak(text);
    }
}

// 语音合成
function speak(text) {
    if (!window.speechSynthesis) {
        showNotification('您的浏览器不支持语音合成', 'warning');
        return;
    }
    
    try {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = speechRate;
        utterance.pitch = 1;
        
        // 选择英语语音
        const englishVoice = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en-GB'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        showNotification('语音播放失败，请重试', 'error');
    }
}

// 显示例句
function showExample() {
    const exampleSection = document.querySelector('.example-sentence');
    if (exampleSection) {
        exampleSection.style.display = exampleSection.style.display === 'none' ? 'block' : 'none';
    }
}

// 上一个单词
function prevWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        const words = getCurrentWords();
        updateWordDisplay(words);
        saveProgress(); // 保存进度
    }
}

// 下一个单词
function nextWord() {
    const words = getCurrentWords();
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        updateWordDisplay(words);
        saveProgress(); // 保存进度
    }
}

// 获取当前单词列表（根据上下册和单元选择）
function getCurrentWords() {
    let words = [];
    
    try {
        if (typeof wordsData !== 'undefined') {
            const gradeKey = `grade${currentGrade}${currentSemester}`;
            
            if (wordsData[gradeKey] && wordsData[gradeKey].units) {
                if (currentUnit === 'all') {
                    // 加载全部单元
                    wordsData[gradeKey].units.forEach((unit) => {
                        if (unit.words && Array.isArray(unit.words)) {
                            words = words.concat(unit.words);
                        }
                    });
                } else {
                    // 加载指定单元
                    const unitIndex = parseInt(currentUnit);
                    if (wordsData[gradeKey].units[unitIndex] && 
                        wordsData[gradeKey].units[unitIndex].words) {
                        words = wordsData[gradeKey].units[unitIndex].words;
                    }
                }
            }
        }
    } catch (error) {
        showNotification('加载单词数据失败', 'error');
    }
    
    return words;
}

// 当前课文选择的上下册
let textCurrentSemester = '';

// 加载课文内容
function loadTexts() {
    const textSelect = document.getElementById('text-select');
    const textTitle = document.getElementById('text-title');
    const textBody = document.getElementById('text-body');
    
    if (!textSelect || !textTitle || !textBody) return;
    
    // 绑定课文上下册按钮事件
    const textSemesterButtons = document.querySelectorAll('.text-semester-btn');
    textSemesterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.text-semester-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            textCurrentSemester = btn.dataset.semester;
            loadTextUnits();
        });
    });
    
    // 加载单元列表
    loadTextUnits();
    
    // 绑定选择事件
    textSelect.onchange = function() {
        showText(this.value);
    };
}

// 加载课文单元列表
function loadTextUnits() {
    const textSelect = document.getElementById('text-select');
    if (!textSelect) return;
    
    // 清空并重新填充选择框
    textSelect.innerHTML = '';
    
    const gradeKey = `grade${currentGrade}${textCurrentSemester}`;
    
    // 优先使用textsData课文数据，如果没有则使用wordsData
    const dataSource = (typeof textsData !== 'undefined' && textsData[gradeKey]) 
        ? textsData[gradeKey] 
        : wordsData[gradeKey];
    
    if (dataSource && dataSource.units) {
        dataSource.units.forEach((unit, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = unit.title;
            textSelect.appendChild(option);
        });
        
        // 显示第一个单元
        if (dataSource.units.length > 0) {
            showText(0);
        }
    }
}

// 显示指定课文
function showText(unitIndex) {
    const textTitle = document.getElementById('text-title');
    const textBody = document.getElementById('text-body');
    
    if (!textTitle || !textBody) return;
    
    const gradeKey = `grade${currentGrade}${textCurrentSemester}`;
    
    try {
        // 优先使用textsData课文数据
        if (typeof textsData !== 'undefined' && textsData[gradeKey] && textsData[gradeKey].units[unitIndex]) {
            const unit = textsData[gradeKey].units[unitIndex];
            textTitle.textContent = unit.title;
            
            // 使用课文内容（新格式：数组包含{en, cn}对象）
            if (unit.content && Array.isArray(unit.content)) {
                let html = '';
                unit.content.forEach((item) => {
                    // 判断是否为对话（包含问号的句子）
                    const isQuestion = item.en.includes('?');
                    const className = isQuestion ? 'text-line dialogue question' : 'text-line dialogue';
                    html += `<p class="${className}">${item.en}<br><span class="text-cn">${item.cn}</span></p>`;
                });
                textBody.innerHTML = html;
            } else if (unit.content && typeof unit.content === 'string') {
                // 兼容旧格式：字符串使用换行分割
                const paragraphs = unit.content.split('\n').filter(line => line.trim());
                let html = '';
                paragraphs.forEach((paragraph) => {
                    const isQuestion = paragraph.includes('?');
                    const className = isQuestion ? 'text-line dialogue question' : 'text-line dialogue';
                    html += `<p class="${className}">${paragraph.trim()}</p>`;
                });
                textBody.innerHTML = html;
            } else {
                textBody.innerHTML = '<p class="empty-state">暂无课文内容</p>';
            }
        } else if (wordsData[gradeKey] && wordsData[gradeKey].units[unitIndex]) {
            // 回退到使用wordsData
            const unit = wordsData[gradeKey].units[unitIndex];
            textTitle.textContent = unit.title;
            
            // 生成课文内容（使用例句）
            let html = '';
            if (unit.words) {
                unit.words.forEach((word) => {
                    if (word.example) {
                        html += `<p class="text-line"><strong>${word.en}</strong>: ${word.example}</p>`;
                    }
                });
            }
            textBody.innerHTML = html || '<p class="empty-state">暂无课文内容</p>';
        } else {
            textTitle.textContent = '暂无数据';
            textBody.innerHTML = '<p class="empty-state">该年级暂无课文数据</p>';
        }
    } catch (error) {
        textTitle.textContent = '加载失败';
        textBody.innerHTML = '<p class="empty-state">课文加载失败，请重试</p>';
        showNotification('课文加载失败', 'error');
    }
}

// 朗读全文
function speakFullText() {
    const textBody = document.getElementById('text-body');
    const gradeKey = `grade${currentGrade}${textCurrentSemester}`;
    const textSelect = document.getElementById('text-select');
    const unitIndex = textSelect ? parseInt(textSelect.value) : 0;
    
    if (!window.speechSynthesis) {
        showNotification('您的浏览器不支持语音合成', 'warning');
        return;
    }
    
    try {
        // 优先使用textsData中的英文内容
        if (typeof textsData !== 'undefined' && textsData[gradeKey] && textsData[gradeKey].units[unitIndex]) {
            const unit = textsData[gradeKey].units[unitIndex];
            if (unit.content && Array.isArray(unit.content)) {
                const text = unit.content.map(item => item.en).join('. ');
                speak(text);
                return;
            }
        }
        // 回退到使用DOM内容
        if (textBody) {
            const text = textBody.textContent;
            speak(text);
        }
    } catch (error) {
        showNotification('朗读失败，请重试', 'error');
    }
}

// 测试功能
let testScore = 0;
let testQuestionIndex = 0;
let testQuestions = [];

function initTest() {
    testScore = 0;
    testQuestionIndex = 0;
    
    // 生成测试题目
    const words = getCurrentWords();
    
    if (words.length === 0) {
        showNotification('暂无单词数据，无法进行测试', 'warning');
        return;
    }
    
    testQuestions = generateTestQuestions(words);
    
    // 更新分数显示
    const scoreElement = document.getElementById('score');
    if (scoreElement) scoreElement.textContent = '0';
    
    showTestQuestion();
}

function generateTestQuestions(words) {
    // 随机选择10个单词生成题目
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(10, shuffled.length));
}

function showTestQuestion() {
    const questionNum = document.getElementById('question-num');
    const testQuestion = document.getElementById('test-question');
    const testOptions = document.getElementById('test-options');
    const testResult = document.getElementById('test-result');
    
    if (testResult) testResult.style.display = 'none';
    
    if (testQuestionIndex >= testQuestions.length) {
        // 测试结束
        if (testQuestion) {
            testQuestion.textContent = `测试完成！得分：${testScore}/${testQuestions.length}`;
        }
        if (testOptions) testOptions.innerHTML = '';
        return;
    }
    
    const currentQuestion = testQuestions[testQuestionIndex];
    
    if (questionNum) {
        questionNum.textContent = `${testQuestionIndex + 1}`;
    }
    
    if (testQuestion) {
        testQuestion.textContent = `请听发音，选择正确的中文意思`;
    }
    
    // 生成选项（正确答案 + 3个干扰项）
    if (testOptions) {
        const allWords = getCurrentWords();
        const wrongOptions = allWords
            .filter(w => w.cn !== currentQuestion.cn)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        
        const options = [...wrongOptions, currentQuestion].sort(() => 0.5 - Math.random());
        
        testOptions.innerHTML = options.map((opt) => `
            <button class="option-btn" onclick="checkAnswer('${opt.cn}', '${currentQuestion.cn}')">
                ${opt.cn}
            </button>
        `).join('');
    }
}

function playTestAudio() {
    if (testQuestionIndex < testQuestions.length) {
        const word = testQuestions[testQuestionIndex];
        speak(word.en);
    }
}

function checkAnswer(selected, correct) {
    const testResult = document.getElementById('test-result');
    const resultText = document.getElementById('result-text');
    
    const isCorrect = selected === correct;
    
    if (isCorrect) {
        testScore++;
        const scoreElement = document.getElementById('score');
        if (scoreElement) scoreElement.textContent = testScore;
    }
    
    if (testResult && resultText) {
        testResult.style.display = 'block';
        resultText.textContent = isCorrect ? '✅ 回答正确！' : `❌ 错误，正确答案是：${correct}`;
        resultText.className = isCorrect ? 'correct' : 'wrong';
    }
}

function nextQuestion() {
    testQuestionIndex++;
    showTestQuestion();
}

// 通知系统
function showNotification(message, type = 'info') {
    // 移除现有的通知
    const existingNotification = document.querySelector('.app-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 创建新通知
    const notification = document.createElement('div');
    notification.className = `app-notification ${type}`;
    notification.textContent = message;
    
    // 样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        z-index: 10000;
        animation: slideDown 0.3s ease;
        background: ${type === 'error' ? '#e74c3c' : type === 'warning' ? '#f39c12' : '#3498db'};
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
    .empty-state {
        text-align: center;
        color: #999;
        padding: 40px;
        font-size: 16px;
    }
`;
document.head.appendChild(style);

// 全局错误处理
window.addEventListener('error', (event) => {
    showNotification('发生错误，请刷新页面重试', 'error');
});

window.addEventListener('unhandledrejection', (event) => {
    showNotification('操作失败，请重试', 'error');
});

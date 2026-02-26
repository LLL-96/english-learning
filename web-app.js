// 网页版英语单词学习应用

// 当前状态
let currentGrade = 3;
let currentUnit = 1;
let currentWordIndex = 0;
let currentMode = 'words';
let speechRate = 0.8;
let voices = [];

// 初始化
function init() {
    console.log('Initializing app...');
    console.log('wordsData available:', typeof wordsData !== 'undefined');
    
    loadVoices();
    setupEventListeners();
    loadGrade(3);
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
    console.log('Setting up event listeners...');
    
    // 年级按钮
    const gradeButtons = document.querySelectorAll('.grade-btn');
    console.log('Found grade buttons:', gradeButtons.length);
    
    gradeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Grade button clicked:', e.target.dataset.grade);
            document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentGrade = parseInt(btn.dataset.grade);
            loadGrade(currentGrade);
        });
    });

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

// 加载年级数据
function loadGrade(grade) {
    currentGrade = grade;
    currentWordIndex = 0;
    
    console.log('Loading grade:', grade);
    console.log('wordsData available:', typeof wordsData !== 'undefined');
    
    // 获取数据
    let words = [];
    
    // 尝试不同的键名格式
    let gradeData = null;
    if (typeof wordsData !== 'undefined') {
        // 尝试 grade3, grade4, grade5, grade6, grade3b, grade4b, grade5b, grade6b
        const gradeKey = `grade${grade}`;
        const gradeKeyB = `grade${grade}b`;
        
        if (wordsData[gradeKey] && wordsData[gradeKey].units) {
            gradeData = wordsData[gradeKey];
        } else if (wordsData[gradeKeyB] && wordsData[gradeKeyB].units) {
            gradeData = wordsData[gradeKeyB];
        }
        
        console.log('Grade data found:', gradeData ? 'yes' : 'no');
        
        if (gradeData && gradeData.units) {
            gradeData.units.forEach(unit => {
                if (unit.words && Array.isArray(unit.words)) {
                    words = words.concat(unit.words);
                }
            });
        }
    }
    
    console.log('Total words:', words.length);
    
    // 更新显示
    updateWordDisplay(words);
}

// 更新单词显示
function updateWordDisplay(words) {
    console.log('Updating word display, words count:', words.length);
    
    const wordDisplay = document.querySelector('.word-display');
    const progressText = document.querySelector('.progress-text');
    
    console.log('wordDisplay element:', wordDisplay ? 'found' : 'not found');
    console.log('progressText element:', progressText ? 'found' : 'not found');
    
    if (words.length > 0 && currentWordIndex < words.length) {
        const word = words[currentWordIndex];
        console.log('Current word:', word);
        
        if (wordDisplay) {
            wordDisplay.innerHTML = `
                <h2 class="english-word">${word.en || word.english || 'Hello'}</h2>
                <p class="phonetic">${word.phonetic || ''}</p>
                <p class="chinese-meaning">${word.cn || word.chinese || ''}</p>
            `;
            console.log('Word display updated');
        }
        
        if (progressText) {
            progressText.textContent = `${currentWordIndex + 1} / ${words.length}`;
        }
    } else {
        console.log('No words to display');
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
        alert('您的浏览器不支持语音合成');
        return;
    }
    
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
        loadGrade(currentGrade);
    }
}

// 下一个单词
function nextWord() {
    const words = getCurrentWords();
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        loadGrade(currentGrade);
    }
}

// 获取当前单词列表
function getCurrentWords() {
    let words = [];
    if (typeof wordsData !== 'undefined') {
        const gradeKey = `grade${currentGrade}`;
        const gradeKeyB = `grade${currentGrade}b`;
        let gradeData = wordsData[gradeKey] || wordsData[gradeKeyB];
        
        if (gradeData && gradeData.units) {
            gradeData.units.forEach(unit => {
                if (unit.words && Array.isArray(unit.words)) {
                    words = words.concat(unit.words);
                }
            });
        }
    }
    return words;
}

// 加载课文内容
function loadTexts() {
    const textSelect = document.getElementById('text-select');
    const textTitle = document.getElementById('text-title');
    const textBody = document.getElementById('text-body');
    
    if (!textSelect || !textTitle || !textBody) return;
    
    // 清空并重新填充选择框
    textSelect.innerHTML = '';
    
    const gradeKey = `grade${currentGrade}`;
    const gradeKeyB = `grade${currentGrade}b`;
    const gradeData = wordsData[gradeKey] || wordsData[gradeKeyB];
    
    if (gradeData && gradeData.units) {
        gradeData.units.forEach((unit, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = unit.title;
            textSelect.appendChild(option);
        });
        
        // 显示第一个单元
        if (gradeData.units.length > 0) {
            showText(0);
        }
    }
    
    // 绑定选择事件
    textSelect.onchange = function() {
        showText(this.value);
    };
}

// 显示指定课文
function showText(unitIndex) {
    const textTitle = document.getElementById('text-title');
    const textBody = document.getElementById('text-body');
    
    if (!textTitle || !textBody) return;
    
    const gradeKey = `grade${currentGrade}`;
    const gradeKeyB = `grade${currentGrade}b`;
    const gradeData = wordsData[gradeKey] || wordsData[gradeKeyB];
    
    if (gradeData && gradeData.units[unitIndex]) {
        const unit = gradeData.units[unitIndex];
        textTitle.textContent = unit.title;
        
        // 生成课文内容（使用例句）
        let html = '';
        if (unit.words) {
            unit.words.forEach((word, idx) => {
                if (word.example) {
                    html += `<p class="text-line"><strong>${word.en}</strong>: ${word.example}</p>`;
                }
            });
        }
        textBody.innerHTML = html || '<p>暂无课文内容</p>';
    }
}

// 朗读全文
function speakFullText() {
    const textBody = document.getElementById('text-body');
    if (textBody && window.speechSynthesis) {
        const text = textBody.textContent;
        speak(text);
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
        
        testOptions.innerHTML = options.map((opt, idx) => `
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

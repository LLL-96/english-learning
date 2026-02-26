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
    loadVoices();
    setupEventListeners();
    loadGrade(3);
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
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', () => {
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
    
    // 获取数据
    let words = [];
    if (window.wordsData && window.wordsData[`grade${grade}`]) {
        const gradeData = window.wordsData[`grade${grade}`];
        if (gradeData.units) {
            gradeData.units.forEach(unit => {
                if (unit.words) {
                    words = words.concat(unit.words);
                }
            });
        }
    }
    
    // 更新显示
    updateWordDisplay(words);
}

// 更新单词显示
function updateWordDisplay(words) {
    const wordDisplay = document.querySelector('.word-display');
    const progressText = document.querySelector('.progress-text');
    
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
    if (window.wordsData && window.wordsData[`grade${currentGrade}`]) {
        const gradeData = window.wordsData[`grade${currentGrade}`];
        if (gradeData.units) {
            gradeData.units.forEach(unit => {
                if (unit.words) {
                    words = words.concat(unit.words);
                }
            });
        }
    }
    return words;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

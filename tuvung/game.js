/* ================= 1. BIG DATA (KHO TỪ VỰNG KHỔNG LỒ) ================= */
const DATA = {
    colors: [
        { id: 'c1', word: 'Red', emoji: '🔴' }, { id: 'c2', word: 'Blue', emoji: '🔵' },
        { id: 'c3', word: 'Green', emoji: '🟢' }, { id: 'c4', word: 'Yellow', emoji: '🟡' },
        { id: 'c5', word: 'Orange', emoji: '🟠' }, { id: 'c6', word: 'Purple', emoji: '🟣' },
        { id: 'c7', word: 'Black', emoji: '⚫' }, { id: 'c8', word: 'White', emoji: '⚪' },
        { id: 'c9', word: 'Pink', emoji: '🩷' }, { id: 'c10', word: 'Brown', emoji: '🟤' }
    ],
    numbers: [
        { id: 'n1', word: 'One', emoji: '1️⃣' }, { id: 'n2', word: 'Two', emoji: '2️⃣' },
        { id: 'n3', word: 'Three', emoji: '3️⃣' }, { id: 'n4', word: 'Four', emoji: '4️⃣' },
        { id: 'n5', word: 'Five', emoji: '5️⃣' }, { id: 'n6', word: 'Six', emoji: '6️⃣' },
        { id: 'n7', word: 'Seven', emoji: '7️⃣' }, { id: 'n8', word: 'Eight', emoji: '8️⃣' },
        { id: 'n9', word: 'Nine', emoji: '9️⃣' }, { id: 'n10', word: 'Ten', emoji: '🔟' }
    ],
    animals: [
        { id: 'a1', word: 'Cat', emoji: '🐱' }, { id: 'a2', word: 'Dog', emoji: '🐶' },
        { id: 'a3', word: 'Lion', emoji: '🦁' }, { id: 'a4', word: 'Fish', emoji: '🐠' },
        { id: 'a5', word: 'Rabbit', emoji: '🐰' }, { id: 'a6', word: 'Bear', emoji: '🐻' },
        { id: 'a7', word: 'Tiger', emoji: '🐯' }, { id: 'a8', word: 'Pig', emoji: '🐷' },
        { id: 'a9', word: 'Monkey', emoji: '🐵' }, { id: 'a10', word: 'Cow', emoji: '🐮' },
        { id: 'a11', word: 'Chicken', emoji: '🐔' }, { id: 'a12', word: 'Duck', emoji: '🦆' }
    ],
    fruits: [
        { id: 'f1', word: 'Apple', emoji: '🍎' }, { id: 'f2', word: 'Banana', emoji: '🍌' },
        { id: 'f3', word: 'Grape', emoji: '🍇' }, { id: 'f4', word: 'Orange', emoji: '🍊' },
        { id: 'f5', word: 'Strawberry', emoji: '🍓' }, { id: 'f6', word: 'Watermelon', emoji: '🍉' },
        { id: 'f7', word: 'Peach', emoji: '🍑' }, { id: 'f8', word: 'Cherry', emoji: '🍒' },
        { id: 'f9', word: 'Pineapple', emoji: '🍍' }, { id: 'f10', word: 'Mango', emoji: '🥭' }
    ],
    vehicles: [
        { id: 'v1', word: 'Car', emoji: '🚗' }, { id: 'v2', word: 'Bus', emoji: '🚌' },
        { id: 'v3', word: 'Police Car', emoji: '🚓' }, { id: 'v4', word: 'Ambulance', emoji: '🚑' },
        { id: 'v5', word: 'Fire Truck', emoji: '🚒' }, { id: 'v6', word: 'Bicycle', emoji: '🚲' },
        { id: 'v7', word: 'Train', emoji: '🚂' }, { id: 'v8', word: 'Airplane', emoji: '✈️' },
        { id: 'v9', word: 'Rocket', emoji: '🚀' }, { id: 'v10', word: 'Boat', emoji: '🚤' }
    ],
    food: [
        { id: 'fd1', word: 'Burger', emoji: '🍔' }, { id: 'fd2', word: 'Pizza', emoji: '🍕' },
        { id: 'fd3', word: 'Fries', emoji: '🍟' }, { id: 'fd4', word: 'Hotdog', emoji: '🌭' },
        { id: 'fd5', word: 'Egg', emoji: '🥚' }, { id: 'fd6', word: 'Bread', emoji: '🍞' },
        { id: 'fd7', word: 'Cake', emoji: '🍰' }, { id: 'fd8', word: 'Ice Cream', emoji: '🍦' },
        { id: 'fd9', word: 'Donut', emoji: '🍩' }, { id: 'fd10', word: 'Cookie', emoji: '🍪' }
    ],
    body: [
        { id: 'b1', word: 'Eye', emoji: '👁️' }, { id: 'b2', word: 'Ear', emoji: '👂' },
        { id: 'b3', word: 'Nose', emoji: '👃' }, { id: 'b4', word: 'Mouth', emoji: '👄' },
        { id: 'b5', word: 'Hand', emoji: '✋' }, { id: 'b6', word: 'Foot', emoji: '🦶' },
        { id: 'b7', word: 'Brain', emoji: '🧠' }, { id: 'b8', word: 'Tooth', emoji: '🦷' }
    ],
    nature: [
        { id: 'nt1', word: 'Sun', emoji: '☀️' }, { id: 'nt2', word: 'Moon', emoji: '🌙' },
        { id: 'nt3', word: 'Star', emoji: '⭐' }, { id: 'nt4', word: 'Cloud', emoji: '☁️' },
        { id: 'nt5', word: 'Rain', emoji: '🌧️' }, { id: 'nt6', word: 'Fire', emoji: '🔥' },
        { id: 'nt7', word: 'Flower', emoji: '🌻' }, { id: 'nt8', word: 'Tree', emoji: '🌳' }
    ],
    school: [
        { id: 's1', word: 'Book', emoji: '📖' }, { id: 's2', word: 'Pencil', emoji: '✏️' },
        { id: 's3', word: 'Backpack', emoji: '🎒' }, { id: 's4', word: 'Scissor', emoji: '✂️' },
        { id: 's5', word: 'Computer', emoji: '💻' }, { id: 's6', word: 'Light', emoji: '💡' }
    ],
    sports: [
        { id: 'sp1', word: 'Soccer', emoji: '⚽' }, { id: 'sp2', word: 'Basketball', emoji: '🏀' },
        { id: 'sp3', word: 'Tennis', emoji: '🎾' }, { id: 'sp4', word: 'Baseball', emoji: '⚾' }
    ]
};

const STICKERS = [
    { id: 'st1', icon: '🦄', name: 'Unicorn', price: 50 },
    { id: 'st2', icon: '🦖', name: 'Dino', price: 60 },
    { id: 'st3', icon: '🧚', name: 'Fairy', price: 70 },
    { id: 'st4', icon: '🧜‍♀️', name: 'Mermaid', price: 80 },
    { id: 'st5', icon: '🦸', name: 'Hero', price: 90 },
    { id: 'st6', icon: '🐉', name: 'Dragon', price: 100 },
    { id: 'st7', icon: '🐢', name: 'Ninja', price: 40 },
    { id: 'st8', icon: '🤖', name: 'Robot', price: 50 },
    { id: 'st9', icon: '👽', name: 'Alien', price: 60 }
];

const ACHIEVEMENTS = [
    { id: 'first', title: 'Start Journey', desc: 'Finish Level 1', check: (s) => s.unlockedLevel > 1 },
    { id: 'coin100', title: 'Piggy Bank', desc: 'Earn 100 Coins', check: (s) => s.coins >= 100 },
    { id: 'star50', title: 'Star Catcher', desc: 'Collect 50 Stars', check: (s) => calcTotalStars(s) >= 50 },
    { id: 'master', title: 'Genius', desc: 'Unlock Level 50', check: (s) => s.unlockedLevel >= 50 },
    { id: 'expert', title: 'Legend', desc: 'Finish all 100 Levels', check: (s) => s.unlockedLevel >= 100 }
];

/* ================= 2. STATE & UTILS ================= */
let state = {
    unlockedLevel: 1,
    starsByLevel: {},
    coins: 0,
    stickersOwned: [],
    achievements: [],
    settings: { age: '2-3', sound: true, coop: false },
    lastClaimDate: null
};

let currentLevel = 1;
let currentQuestion = {};
let mistakes = 0;
let tempChildAnswer = null;

const $ = (id) => document.getElementById(id);
const calcTotalStars = (s) => Object.values(s.starsByLevel).reduce((a,b)=>a+b,0);

function init() {
    loadData();
    checkDailyReward();
    renderMenu();
    setupParentMode();
    requestAnimationFrame(loopConfetti);
}

function loadData() {
    const saved = localStorage.getItem('bunny_pro_save_v2'); // New key for fresh data
    if (saved) state = { ...state, ...JSON.parse(saved) };
    updateHUD();
}

function saveData() {
    localStorage.setItem('bunny_pro_save_v2', JSON.stringify(state));
    updateHUD();
}

function updateHUD() {
    $('coinDisplay').innerText = state.coins;
    $('starDisplay').innerText = calcTotalStars(state);
}

/* ================= 3. LOGIC "GIÁO TRÌNH" 100 LEVEL ================= */

// Hàm này quy định Level nào học cái gì (Curriculum)
function getLevelConfig(level) {
    let topics = [];
    
    // PHẦN 1: BASIC (1-20)
    if (level <= 5) topics = ['colors']; // Làm quen màu
    else if (level <= 10) topics = ['numbers']; // Làm quen số
    else if (level <= 15) topics = ['colors', 'numbers']; // Ôn tập
    else if (level <= 20) topics = ['animals']; // Thú

    // PHẦN 2: EXPLORER (21-50)
    else if (level <= 30) topics = ['fruits', 'food']; 
    else if (level <= 40) topics = ['vehicles', 'body'];
    else if (level <= 50) topics = ['animals', 'nature', 'colors']; // Tổng hợp

    // PHẦN 3: ADVANCED (51-80)
    else if (level <= 60) topics = ['school', 'sports', 'vehicles'];
    else if (level <= 70) topics = ['body', 'food', 'fruits'];
    else if (level <= 80) topics = ['colors', 'numbers', 'animals', 'vehicles']; // Review lớn

    // PHẦN 4: MASTER (81-100) - Tất cả trộn lẫn
    else {
        topics = Object.keys(DATA);
    }
    
    return topics;
}

function getLevelData(level) {
    // 1. Xác định chủ đề dựa trên Level
    const allowedTopics = getLevelConfig(level);
    
    // 2. Chọn ngẫu nhiên 1 chủ đề trong list cho phép
    const topicKey = allowedTopics[Math.floor(Math.random() * allowedTopics.length)];
    const pool = DATA[topicKey];
    
    // 3. Chọn đáp án đúng (Target)
    const target = pool[Math.floor(Math.random() * pool.length)];
    
    // 4. Chọn số lượng đáp án dựa trên Tuổi hoặc Level (Càng cao càng khó)
    let numOptions = 2;
    if (state.settings.age === '4-5') numOptions = 3;
    if (state.settings.age === '6') numOptions = 4;
    
    // Level cao (>50) tự động tăng khó
    if (level > 50 && numOptions < 3) numOptions = 3;
    if (level > 80) numOptions = 4;

    // 5. Tạo distractors (đáp án sai)
    let options = [target];
    // Cố gắng lấy distractor cùng chủ đề cho khó
    let distractorPool = pool; 
    
    // Nếu level thấp (<10), lấy distractor khác chủ đề cho dễ phân biệt (nếu muốn),
    // nhưng ở đây ta lấy cùng chủ đề để bé học tốt hơn.
    
    while (options.length < numOptions) {
        // Nếu pool hết, lấy random toàn cục
        if(distractorPool.length < numOptions) {
            const randomKey = Object.keys(DATA)[Math.floor(Math.random()*Object.keys(DATA).length)];
            distractorPool = DATA[randomKey];
        }
        
        const random = distractorPool[Math.floor(Math.random() * distractorPool.length)];
        if (!options.some(o => o.id === random.id)) options.push(random);
    }
    
    options.sort(() => Math.random() - 0.5);
    
    // Xen kẽ kỹ năng: Level chẵn = Nghe, Level lẻ = Nhìn chữ (hoặc Nghe hết cho bé nhỏ)
    // Ở đây ta ưu tiên "Listen & Tap"
    const type = 'listen'; 

    return { target, options, type, topic: topicKey };
}

/* ================= 4. GAMEPLAY ENGINE ================= */
const game = {
    startLevel: (lvl) => {
        currentLevel = lvl;
        mistakes = 0;
        currentQuestion = getLevelData(lvl);
        
        app.navTo('game');
        renderGameUI();
        setBunny('idle');
        
        // Auto speak
        setTimeout(() => speak(currentQuestion.target.word), 600);
    },

    checkAnswer: (selectedItem) => {
        if (state.settings.coop) {
            tempChildAnswer = selectedItem;
            $('childSelection').innerText = selectedItem.emoji + " " + selectedItem.word;
            $('coopOverlay').classList.remove('hidden');
            return;
        }
        processAnswer(selectedItem);
    },
    
    nextLevel: () => {
        $('levelCompleteModal').classList.add('hidden');
        if (currentLevel < 100) {
            game.startLevel(currentLevel + 1);
        } else {
            alert("CONGRATULATIONS! YOU FINISHED THE GAME! 🐰🎉");
            app.navTo('map');
        }
    }
};

function processAnswer(selectedItem) {
    const isCorrect = selectedItem.id === currentQuestion.target.id;
    
    if (isCorrect) {
        setBunny('happy');
        playSound('cheer');
        triggerConfetti();
        
        // Random praise words
        const praise = ['Brilliant!', 'Fantastic!', 'Excellent!', 'Good job!', 'Amazing!'];
        speak(praise[Math.floor(Math.random()*praise.length)]);
        
        let stars = mistakes === 0 ? 3 : (mistakes <= 2 ? 2 : 1);
        let rewardCoins = 10 + Math.floor(Math.random() * 5);
        
        // Unlock next
        if (currentLevel === state.unlockedLevel && currentLevel < 100) state.unlockedLevel++;
        
        // Save stars
        if (!state.starsByLevel[currentLevel] || stars > state.starsByLevel[currentLevel]) {
            state.starsByLevel[currentLevel] = stars;
        }
        
        state.coins += rewardCoins;
        checkAchievements();
        saveData();

        setTimeout(() => {
            $('levelStars').innerText = "⭐".repeat(stars);
            $('levelCoins').innerText = rewardCoins;
            $('levelCompleteModal').classList.remove('hidden');
        }, 1500);

    } else {
        mistakes++;
        setBunny('sad');
        playSound('oops');
        speak('Oops, try again!');
        
        const cards = document.querySelectorAll('.answer-card');
        cards.forEach(card => {
            if (card.dataset.id === selectedItem.id) {
                card.classList.add('wrong');
                setTimeout(() => card.classList.remove('wrong'), 500);
            }
        });
    }
}

// Co-op Handlers
$('coopConfirm').onclick = () => { $('coopOverlay').classList.add('hidden'); processAnswer(tempChildAnswer); };
$('coopReject').onclick = () => { 
    $('coopOverlay').classList.add('hidden'); 
    mistakes++; 
    setBunny('thinking'); 
    speak("Let's try another one!"); 
};

/* ================= 5. RENDER UI ================= */
function renderGameUI() {
    const q = currentQuestion;
    $('questionText').innerText = `Where is "${q.target.word}"?`;
    $('btnListen').onclick = () => speak(q.target.word);
    
    const container = $('answerArea');
    container.innerHTML = '';
    
    q.options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'answer-card';
        div.dataset.id = opt.id;
        
        // Luôn hiện Emoji to
        let html = `<div style="font-size:4.5rem; line-height: 1.2;">${opt.emoji}</div>`;
        
        // Tuổi nhỏ không hiện chữ để tránh rối, tuổi lớn hiện chữ
        if (state.settings.age !== '2-3') {
             html += `<div style="font-size:1.5rem; margin-top:5px; color:#555;">${opt.word}</div>`;
        }
        
        div.innerHTML = html;
        div.onclick = () => game.checkAnswer(opt);
        container.appendChild(div);
    });
    
    $('gameProgress').style.width = ((currentLevel / 100) * 100) + '%';
}

function renderMap() {
    const grid = $('levelGrid');
    grid.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        const btn = document.createElement('div');
        const locked = i > state.unlockedLevel;
        const current = i === state.unlockedLevel;
        const stars = state.starsByLevel[i] || 0;
        
        btn.className = `level-btn ${locked ? 'locked' : ''} ${current ? 'current' : ''} ${stars > 0 ? 'completed' : ''}`;
        
        // Xác định icon chủ đề cho map sinh động
        let mapIcon = '';
        if(i===1) mapIcon = '🎨'; 
        else if(i===11) mapIcon = '🦁';
        else if(i===21) mapIcon = '🍎';
        else if(i===50) mapIcon = '🏆';
        else if(i===100) mapIcon = '👑';
        
        btn.innerHTML = `<span>${i}</span>${mapIcon ? `<div style="font-size:10px">${mapIcon}</div>`:''}`;
        
        if (stars > 0) {
            btn.innerHTML += `<div class="stars-mini">${'⭐'.repeat(stars)}</div>`;
        }
        
        btn.onclick = () => { if (!locked) game.startLevel(i); };
        grid.appendChild(btn);
    }
    
    // Nút nhảy tới level đang chơi
    $('btnJumpLast').onclick = () => {
        const currentBtn = document.querySelector('.level-btn.current');
        if(currentBtn) currentBtn.scrollIntoView({behavior: "smooth", block: "center"});
    }
}

function renderShop() {
    const grid = $('shopGrid');
    grid.innerHTML = '';
    STICKERS.forEach(s => {
        const owned = state.stickersOwned.includes(s.id);
        const div = document.createElement('div');
        div.className = `sticker-item ${owned ? '' : 'locked'}`;
        div.innerHTML = `
            <div style="font-size:3rem">${s.icon}</div>
            <div>${s.name}</div>
            ${!owned ? `<div class="price-tag">💰 ${s.price}</div>` : '<div style="color:green; font-weight:bold">✓ OWNED</div>'}
        `;
        div.onclick = () => buySticker(s);
        grid.appendChild(div);
    });
}

function buySticker(s) {
    if (state.stickersOwned.includes(s.id)) return;
    if (state.coins >= s.price) {
        state.coins -= s.price;
        state.stickersOwned.push(s.id);
        playSound('buy');
        saveData();
        renderShop();
        alert(`You bought ${s.name}!`);
    } else {
        playSound('oops');
        alert("Need more coins! Play levels to earn.");
    }
}

function renderAlbum() {
    const grid = $('albumGrid');
    grid.innerHTML = '';
    if (state.stickersOwned.length === 0) {
        grid.innerHTML = '<p style="grid-column: span 3">Go to Shop to buy stickers!</p>';
        return;
    }
    state.stickersOwned.forEach(sid => {
        const s = STICKERS.find(x => x.id === sid);
        if(s) {
            const div = document.createElement('div');
            div.className = 'sticker-item';
            div.innerHTML = `<div style="font-size:3.5rem">${s.icon}</div><div>${s.name}</div>`;
            grid.appendChild(div);
        }
    });
}

function renderAchievements() {
    const grid = $('achieveGrid');
    grid.innerHTML = '';
    ACHIEVEMENTS.forEach(a => {
        const unlocked = state.achievements.includes(a.id);
        const div = document.createElement('div');
        div.style.cssText = `padding: 10px; margin: 5px; border-radius: 10px; background: ${unlocked ? '#d4edda' : '#eee'}; opacity: ${unlocked ? 1 : 0.6}; display:flex; align-items:center; gap:10px;`;
        div.innerHTML = `
            <div style="font-size:1.5rem">${unlocked ? '🏆' : '🔒'}</div>
            <div style="text-align:left">
                <div style="font-weight:bold">${a.title}</div>
                <div style="font-size:0.8rem">${a.desc}</div>
            </div>
        `;
        grid.appendChild(div);
    });
}

/* ================= 6. SYSTEM (AUDIO & SETTINGS) ================= */
const app = {
    navTo: (viewName) => {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        $(`view-${viewName}`).classList.add('active');
        if (viewName === 'map') renderMap();
        if (viewName === 'shop') renderShop();
        if (viewName === 'album') renderAlbum();
        if (viewName === 'achievements') renderAchievements();
    },
    closeDailyReward: () => { $('dailyRewardModal').classList.add('hidden'); },
    closeParent: () => { $('parentModal').classList.add('hidden'); },
    exportData: () => { navigator.clipboard.writeText(JSON.stringify(state)); alert("Data copied to clipboard!"); }
};

function setBunny(mood) {
    const bunny = $('gameBunny');
    const menuBunny = $('menuBunny');
    const faces = { idle: '🐰', happy: '🥰', wow: '🤩', thinking: '🤔', sad: '😢' };
    bunny.innerText = faces[mood] || '🐰';
    if(mood === 'idle') menuBunny.innerText = '🐰';
}

// BRITISH ACCENT CONFIG
function speak(text) {
    if (!state.settings.sound) return;
    window.speechSynthesis.cancel(); // Stop prev sound
    const u = new SpeechSynthesisUtterance(text);
    
    // Tìm giọng Anh Anh (UK)
    const voices = window.speechSynthesis.getVoices();
    const gbVoice = voices.find(v => v.lang.includes('GB') || v.lang.includes('UK'));
    if (gbVoice) u.voice = gbVoice;
    
    u.lang = 'en-GB'; // Fallback
    u.rate = 0.9;
    u.pitch = 1.1; // Hơi cao cho giống giọng hoạt hình
    window.speechSynthesis.speak(u);
}

// Preload voices
window.speechSynthesis.onvoiceschanged = () => {};

function playSound(type) {
    if (!state.settings.sound) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    const now = ctx.currentTime;
    if (type === 'cheer') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now); osc.stop(now + 0.5);
    } else if (type === 'buy') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now); osc.stop(now + 0.2);
    } else if (type === 'oops') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    }
}

function checkDailyReward() {
    const today = new Date().toISOString().split('T')[0];
    if (state.lastClaimDate !== today) {
        state.coins += 20;
        state.lastClaimDate = today;
        $('dailyRewardModal').classList.remove('hidden');
        saveData();
    }
}

function checkAchievements() {
    ACHIEVEMENTS.forEach(a => {
        if (!state.achievements.includes(a.id) && a.check(state)) {
            state.achievements.push(a.id);
            alert(`🏆 UNLOCKED: ${a.title}`);
            triggerConfetti();
        }
    });
}

// Parent Mode
let parentTimer;
const btnP = $('btnParent');
const startP = () => { parentTimer = setTimeout(() => { $('parentModal').classList.remove('hidden'); }, 2000); };
const endP = () => clearTimeout(parentTimer);
btnP.onmousedown = startP; btnP.onmouseup = endP; btnP.ontouchstart = startP; btnP.ontouchend = endP;

$('settingAge').onchange = (e) => { state.settings.age = e.target.value; saveData(); };
$('settingCoop').onchange = (e) => { state.settings.coop = e.target.checked; saveData(); };
const dataManager = {
    resetProgress: () => { if(confirm('Reset all?')) { localStorage.removeItem('bunny_pro_save_v2'); location.reload(); }},
    unlockAll: () => { state.unlockedLevel = 100; saveData(); renderMap(); alert('Unlocked 100 levels!'); }
};

/* ================= 7. FX ================= */
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
canvas.width = window.innerWidth; canvas.height = window.innerHeight;

function triggerConfetti() {
    for(let i=0; i<60; i++) {
        particles.push({
            x: window.innerWidth/2, y: window.innerHeight/2,
            vx: (Math.random()-0.5)*15, vy: (Math.random()-0.5)*15,
            color: `hsl(${Math.random()*360}, 100%, 50%)`, life: 100
        });
    }
}
function loopConfetti() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; p.life--; p.vy += 0.2; // Gravity
        ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, 8, 8);
        if(p.life <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(loopConfetti);
}

window.onload = init;

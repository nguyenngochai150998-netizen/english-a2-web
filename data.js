// --- GLOBAL CONFIGURATION ---
const chaptersConfig = [
    { prefix: '1.', count: 4, names: ['Morning Routine', 'Family & Friends', 'Daily Activities', 'Weekend Plans'] },
    { prefix: '2.', count: 4, names: ['At the Airport', 'Asking Directions', 'Public Transport', 'Hotel Check-in'] },
    { prefix: '3.', count: 5, names: ['Ordering Food', 'Cooking Verbs', 'At the Café', 'Grocery Shopping', 'Traditional Dishes'] },
    { prefix: '4.', count: 4, names: ['Jobs & Professions', 'Daily Work', 'School Subjects', 'Career Plans'] },
    { prefix: '5.', count: 4, names: ['Common Ailments', 'At the Pharmacy', 'Feelings & Emotions', 'Healthy Lifestyle'] },
    { prefix: '6.', count: 4, names: ['A Memorable Trip', 'Childhood Memories', 'Telling a Story', 'Apologies & Excuses'] },
    { prefix: '7.', count: 4, names: ['At the Clothes Shop', 'Comparing Products', 'Online Shopping', 'Asking for a Refund'] },
    { prefix: '8.', count: 4, names: ['Movie Genres', 'Life Experiences', 'Music & Concerts', 'Social Media'] },
    { prefix: '9.', count: 4, names: ['Weather Forecast', 'Geography & Nature', 'Environmental Issues', 'Future Predictions'] },
    { prefix: '10.', count: 4, names: ['Rooms & Furniture', 'Household Chores', 'Renting an Apartment', 'Prepositions of Place'] }
];

// --- DETAILED LESSON DATA ---
const lessonData = {
    "1.1": {
        chapter: "Chapter 1",
        emoji: "🌅",
        title: "Morning Routine",
        time: "45 min",
        level: "A2",
        videoUrl: "https://www.youtube.com/embed/T0B226SZ3KU", // Placeholder English learning video
        vocab: [
            { word: "Wake up", pron: "/weɪk ʌp/", meaning: "Thức giấc (mở mắt)", example: "I usually wake up at 6 AM but stay in bed.", synonyms: "awaken, arise", antonyms: "go to sleep", family: "waking (n)", tip: "Khác với 'get up' (rời khỏi giường)." },
            { word: "Get up", pron: "/ɡɛt ʌp/", meaning: "Thức dậy (rời giường)", example: "She gets up early every morning to jog.", synonyms: "arise", antonyms: "lie down", tip: "Dùng để chỉ hành động vật lý rời khỏi giường." },
            { word: "Brush teeth", pron: "/brʌʃ tiːθ/", meaning: "Đánh răng", example: "Don't forget to brush your teeth after breakfast.", synonyms: "clean teeth", tip: "Luôn dùng tính từ sở hữu: brush my/your/his teeth." },
            { word: "Wash face", pron: "/wɒʃ feɪs/", meaning: "Rửa mặt", example: "Washing my face with cold water helps me wake up.", synonyms: "cleanse face", family: "washer (n)" },
            { word: "Have breakfast", pron: "/hæv ˈbrɛkfəst/", meaning: "Ăn sáng", example: "We are having breakfast in the kitchen.", synonyms: "eat breakfast", tip: "Người bản xứ thường dùng 'have' thay vì 'eat'." },
            { word: "Commute", pron: "/kəˈmjuːt/", meaning: "Đi lại (từ nhà tới chỗ làm/học)", example: "My morning commute takes about 45 minutes.", synonyms: "travel, journey", family: "commuter (n)", tip: "Thường dùng làm danh từ hoặc động từ." },
            { word: "Get dressed", pron: "/ɡɛt drɛst/", meaning: "Mặc quần áo", example: "I take a shower and then get dressed for work.", synonyms: "put on clothes", antonyms: "get undressed", tip: "Dùng chung chung, không chỉ rõ loại quần áo nào." },
            { word: "Make the bed", pron: "/meɪk ðə bɛd/", meaning: "Dọn dẹp giường ngủ", example: "My mother always tells me to make the bed.", synonyms: "tidy the bed", antonyms: "mess up the bed", tip: "Dùng 'make' chứ không dùng 'do'." },
            { word: "Take a shower", pron: "/teɪk ə ˈʃaʊər/", meaning: "Tắm vòi sen", example: "I take a cold shower to wake myself up.", synonyms: "have a shower", tip: "Ở Anh (UK) hay dùng 'have a shower', Mỹ (US) hay dùng 'take a shower'." },
            { word: "Put on makeup", pron: "/pʊt ɒn ˈmeɪkʌp/", meaning: "Trang điểm", example: "It takes her 10 minutes to put on her makeup.", synonyms: "apply cosmetics", antonyms: "take off makeup" },
            { word: "Pack a lunch", pron: "/pæk ə lʌntʃ/", meaning: "Chuẩn bị bữa trưa mang đi", example: "I pack a lunch to save money at the office.", synonyms: "prepare a lunchbox" },
            { word: "Leave home", pron: "/liːv hoʊm/", meaning: "Rời khỏi nhà", example: "I usually leave home at 7:30 AM to avoid traffic.", synonyms: "depart", antonyms: "arrive home" }
        ],
        grammar: [
            {
                title: "1. Present Simple (Thì Hiện Tại Đơn)",
                explanation: "Dùng để diễn tả thói quen, hành động lặp đi lặp lại hàng ngày (daily routines). Thường đi kèm với các trạng từ chỉ tần suất.",
                examples: [
                    "I wake up at 7 o'clock every day.",
                    "She brushes her teeth twice a day.",
                    "They do not (don't) commute by train."
                ],
                notes: "Thêm s/es cho ngôi thứ 3 số ít (He/She/It). Ví dụ: goes, watches, studies, plays.",
                mistake: {
                    title: "Quên chia động từ",
                    wrong: "He go to work at 8 AM.",
                    correct: "He goes to work at 8 AM."
                }
            },
            {
                title: "2. Adverbs of Frequency (Trạng từ chỉ tần suất)",
                explanation: "Bao gồm: always (100%), usually (80%), often (70%), sometimes (50%), rarely (10%), never (0%). Dùng để chỉ mức độ thường xuyên.",
                examples: [
                    "I am always energetic in the morning.",
                    "He usually takes a shower before breakfast.",
                    "We rarely eat fast food for breakfast."
                ],
                notes: "VỊ TRÍ QUAN TRỌNG: Đứng TRƯỚC động từ thường (I always wake up) nhưng ĐỨNG SAU to-be (I am always late).",
                mistake: {
                    title: "Sai vị trí trạng từ",
                    wrong: "I play usually tennis on weekends.",
                    correct: "I usually play tennis on weekends."
                }
            },
            {
                title: "3. Prepositions of Time (Giới từ chỉ thời gian: in, on, at)",
                explanation: "AT dùng cho giờ cụ thể. ON dùng cho ngày/thứ cụ thể. IN dùng cho buổi trong ngày, tháng, năm.",
                examples: [
                    "I wake up AT 6:30 AM.",
                    "We have team meetings ON Mondays.",
                    "I prefer to exercise IN the morning."
                ],
                notes: "Ngoại lệ: vào buổi tối (tối muộn) dùng 'AT night'. Cuối tuần dùng 'AT the weekend' (UK) hoặc 'ON the weekend' (US)."
            }
        ],
        conversation: [
            { speaker: "Alex", text: "Hey Sarah, you look very energetic today! What time do you usually wake up?" },
            { speaker: "Sarah", text: "Hi Alex! Thanks. I am an early bird, so I always wake up at 5:30 AM." },
            { speaker: "Alex", text: "Wow, that's incredibly early! What do you do so early in the morning? It's still dark outside." },
            { speaker: "Sarah", text: "Well, first I make the bed and drink a large glass of warm water. It helps my body wake up." },
            { speaker: "Alex", text: "Water? I need a strong coffee immediately. Do you exercise?" },
            { speaker: "Sarah", text: "Yes, I usually go for a 30-minute run in the park near my house. The fresh air is amazing." },
            { speaker: "Alex", text: "Running? I could never do that. I just hit the snooze button three times before I finally get up." },
            { speaker: "Sarah", text: "It's hard at first, but it gives me energy for the whole day. After running, I take a cold shower and get dressed." },
            { speaker: "Alex", text: "A cold shower?! You are so brave. Do you have time for a proper breakfast?" },
            { speaker: "Sarah", text: "Absolutely! I never skip breakfast. I usually have oatmeal with berries and a cup of black coffee." },
            { speaker: "Alex", text: "I see. I just grab a slice of toast and run to the train station. My commute takes an hour, so I'm always rushing." },
            { speaker: "Sarah", text: "That sounds stressful. You should try waking up just 15 minutes earlier. You could have a peaceful morning." },
            { speaker: "Alex", text: "Maybe you're right. I'll try to set my alarm for 6:45 AM tomorrow and see how it goes." },
            { speaker: "Sarah", text: "Good luck! Don't forget to put your alarm clock across the room so you have to get out of bed to turn it off." },
            { speaker: "Alex", text: "Haha, that's a great tip. Thanks, Sarah!" }
        ],
        practice: [
            { q: "1. Fill in the blank: She always ______ up at 6 AM.", a: "wakes", explain: "Ngôi thứ 3 số ít (She) nên động từ 'wake' phải thêm 's'." },
            { q: "2. Translate to English: 'Tôi đánh răng sau khi ăn sáng.'", a: "I brush my teeth after having breakfast.", explain: "Sử dụng 'brush my teeth' và danh động từ V-ing sau giới từ 'after'." },
            { q: "3. Find the mistake: 'I usually taking a shower in the morning.'", a: "taking -> take", explain: "Thì hiện tại đơn diễn tả thói quen, động từ phải ở dạng nguyên thể (take) với chủ ngữ 'I'." },
            { q: "4. Fill in the blank: We have a meeting ____ Monday morning ____ 9 AM.", a: "on / at", explain: "Dùng 'on' cho thứ/ngày cụ thể, và 'at' cho giờ cụ thể." },
            { q: "5. What is the difference between 'wake up' and 'get up'?", a: "Wake up is opening your eyes. Get up is physically leaving the bed.", explain: "Đây là 2 hành động liên tiếp nhau vào buổi sáng." },
            { q: "6. Put the words in order: never / breakfast / skips / he / .", a: "He never skips breakfast.", explain: "Trạng từ tần suất 'never' phải đứng trước động từ thường 'skips'." },
            { q: "7. Fill in the blanks: I prefer to read a book ___ the evening, but I sleep ___ night.", a: "in / at", explain: "Cụm cố định: in the morning/afternoon/evening, nhưng at night." },
            { q: "8. Match the synonym: 'depart' means the same as...", a: "leave", explain: "Depart = Leave (Rời khỏi)." },
            { q: "9. True or False: 'I am always late' is grammatically correct.", a: "True", explain: "Trạng từ 'always' đứng SAU động từ to-be 'am', đây là cấu trúc chính xác." },
            { q: "10. What does 'commute' mean?", a: "To travel regularly between work and home.", explain: "Commute là việc di chuyển qua lại giữa nhà và chỗ làm/học mỗi ngày." }
        ]
    }
};

// --- IRREGULAR VERBS ---
const irregularVerbs = [
    { v1: 'arise', v2: 'arose', v3: 'arisen', meaning: 'phát sinh, nảy sinh' },
    { v1: 'awake', v2: 'awoke', v3: 'awoken', meaning: 'đánh thức, thức tỉnh' },
    { v1: 'be', v2: 'was/were', v3: 'been', meaning: 'thì, là, ở' },
    { v1: 'bear', v2: 'bore', v3: 'borne/born', meaning: 'mang, chịu đựng, sinh đẻ' },
    { v1: 'beat', v2: 'beat', v3: 'beaten', meaning: 'đánh, đập' },
    { v1: 'become', v2: 'became', v3: 'become', meaning: 'trở nên, trở thành' },
    { v1: 'begin', v2: 'began', v3: 'begun', meaning: 'bắt đầu' },
    { v1: 'bend', v2: 'bent', v3: 'bent', meaning: 'bẻ cong' },
    { v1: 'bet', v2: 'bet', v3: 'bet', meaning: 'đánh cược' },
    { v1: 'bind', v2: 'bound', v3: 'bound', meaning: 'buộc, trói' },
    { v1: 'bite', v2: 'bit', v3: 'bitten', meaning: 'cắn' },
    { v1: 'bleed', v2: 'bled', v3: 'bled', meaning: 'chảy máu' },
    { v1: 'blow', v2: 'blew', v3: 'blown', meaning: 'thổi' },
    { v1: 'break', v2: 'broke', v3: 'broken', meaning: 'đập vỡ, làm hỏng' },
    { v1: 'bring', v2: 'brought', v3: 'brought', meaning: 'mang đến' },
    { v1: 'broadcast', v2: 'broadcast', v3: 'broadcast', meaning: 'phát sóng' },
    { v1: 'build', v2: 'built', v3: 'built', meaning: 'xây dựng' },
    { v1: 'burn', v2: 'burnt/burned', v3: 'burnt/burned', meaning: 'đốt cháy' },
    { v1: 'burst', v2: 'burst', v3: 'burst', meaning: 'nổ tung, vỡ' },
    { v1: 'buy', v2: 'bought', v3: 'bought', meaning: 'mua' },
    { v1: 'catch', v2: 'caught', v3: 'caught', meaning: 'bắt, chụp' },
    { v1: 'choose', v2: 'chose', v3: 'chosen', meaning: 'chọn lựa' },
    { v1: 'come', v2: 'came', v3: 'come', meaning: 'đến' },
    { v1: 'cost', v2: 'cost', v3: 'cost', meaning: 'trị giá' },
    { v1: 'creep', v2: 'crept', v3: 'crept', meaning: 'bò, trườn' },
    { v1: 'cut', v2: 'cut', v3: 'cut', meaning: 'cắt' },
    { v1: 'deal', v2: 'dealt', v3: 'dealt', meaning: 'giao thiệp, giải quyết' },
    { v1: 'dig', v2: 'dug', v3: 'dug', meaning: 'đào' },
    { v1: 'do', v2: 'did', v3: 'done', meaning: 'làm' },
    { v1: 'draw', v2: 'drew', v3: 'drawn', meaning: 'vẽ' },
    { v1: 'dream', v2: 'dreamt/dreamed', v3: 'dreamt/dreamed', meaning: 'mơ' },
    { v1: 'drink', v2: 'drank', v3: 'drunk', meaning: 'uống' },
    { v1: 'drive', v2: 'drove', v3: 'driven', meaning: 'lái xe' },
    { v1: 'eat', v2: 'ate', v3: 'eaten', meaning: 'ăn' },
    { v1: 'fall', v2: 'fell', v3: 'fallen', meaning: 'rơi, ngã' },
    { v1: 'feed', v2: 'fed', v3: 'fed', meaning: 'cho ăn' },
    { v1: 'feel', v2: 'felt', v3: 'felt', meaning: 'cảm thấy' },
    { v1: 'fight', v2: 'fought', v3: 'fought', meaning: 'chiến đấu' },
    { v1: 'find', v2: 'found', v3: 'found', meaning: 'tìm thấy' },
    { v1: 'flee', v2: 'fled', v3: 'fled', meaning: 'chạy trốn' },
    { v1: 'fly', v2: 'flew', v3: 'flown', meaning: 'bay' },
    { v1: 'forbid', v2: 'forbade', v3: 'forbidden', meaning: 'cấm' },
    { v1: 'forget', v2: 'forgot', v3: 'forgotten', meaning: 'quên' },
    { v1: 'forgive', v2: 'forgave', v3: 'forgiven', meaning: 'tha thứ' },
    { v1: 'freeze', v2: 'froze', v3: 'frozen', meaning: 'đóng băng' },
    { v1: 'get', v2: 'got', v3: 'got/gotten', meaning: 'có được, lấy' },
    { v1: 'give', v2: 'gave', v3: 'given', meaning: 'cho, tặng' },
    { v1: 'go', v2: 'went', v3: 'gone', meaning: 'đi' },
    { v1: 'grow', v2: 'grew', v3: 'grown', meaning: 'mọc, trồng' },
    { v1: 'hang', v2: 'hung', v3: 'hung', meaning: 'treo' },
    { v1: 'have', v2: 'had', v3: 'had', meaning: 'có' },
    { v1: 'hear', v2: 'heard', v3: 'heard', meaning: 'nghe' },
    { v1: 'hide', v2: 'hid', v3: 'hidden', meaning: 'giấu, trốn' },
    { v1: 'hit', v2: 'hit', v3: 'hit', meaning: 'đánh, va chạm' },
    { v1: 'hold', v2: 'held', v3: 'held', meaning: 'cầm, nắm, giữ' },
    { v1: 'hurt', v2: 'hurt', v3: 'hurt', meaning: 'làm đau' },
    { v1: 'keep', v2: 'kept', v3: 'kept', meaning: 'giữ' },
    { v1: 'kneel', v2: 'knelt/kneeled', v3: 'knelt/kneeled', meaning: 'quỳ' },
    { v1: 'know', v2: 'knew', v3: 'known', meaning: 'biết' },
    { v1: 'lay', v2: 'laid', v3: 'laid', meaning: 'đặt, để' },
    { v1: 'lead', v2: 'led', v3: 'led', meaning: 'dẫn dắt' },
    { v1: 'learn', v2: 'learnt/learned', v3: 'learnt/learned', meaning: 'học' },
    { v1: 'leave', v2: 'left', v3: 'left', meaning: 'rời khỏi, để lại' },
    { v1: 'lend', v2: 'lent', v3: 'lent', meaning: 'cho mượn' },
    { v1: 'let', v2: 'let', v3: 'let', meaning: 'để cho, cho phép' },
    { v1: 'lie', v2: 'lay', v3: 'lain', meaning: 'nằm' },
    { v1: 'light', v2: 'lit/lighted', v3: 'lit/lighted', meaning: 'thắp sáng' },
    { v1: 'lose', v2: 'lost', v3: 'lost', meaning: 'đánh mất' },
    { v1: 'make', v2: 'made', v3: 'made', meaning: 'làm, chế tạo' },
    { v1: 'mean', v2: 'meant', v3: 'meant', meaning: 'có nghĩa là' },
    { v1: 'meet', v2: 'met', v3: 'met', meaning: 'gặp gỡ' },
    { v1: 'pay', v2: 'paid', v3: 'paid', meaning: 'trả tiền' },
    { v1: 'put', v2: 'put', v3: 'put', meaning: 'đặt, để' },
    { v1: 'quit', v2: 'quit', v3: 'quit', meaning: 'từ bỏ' },
    { v1: 'read', v2: 'read', v3: 'read', meaning: 'đọc' },
    { v1: 'ride', v2: 'rode', v3: 'ridden', meaning: 'cưỡi (ngựa, xe đạp)' },
    { v1: 'ring', v2: 'rang', v3: 'rung', meaning: 'rung chuông' },
    { v1: 'rise', v2: 'rose', v3: 'risen', meaning: 'mọc lên, dâng lên' },
    { v1: 'run', v2: 'ran', v3: 'run', meaning: 'chạy' },
    { v1: 'say', v2: 'said', v3: 'said', meaning: 'nói' },
    { v1: 'see', v2: 'saw', v3: 'seen', meaning: 'nhìn thấy' },
    { v1: 'seek', v2: 'sought', v3: 'sought', meaning: 'tìm kiếm' },
    { v1: 'sell', v2: 'sold', v3: 'sold', meaning: 'bán' },
    { v1: 'send', v2: 'sent', v3: 'sent', meaning: 'gửi' },
    { v1: 'set', v2: 'set', v3: 'set', meaning: 'đặt, thiết lập' },
    { v1: 'sew', v2: 'sewed', v3: 'sewn/sewed', meaning: 'may, khâu' },
    { v1: 'shake', v2: 'shook', v3: 'shaken', meaning: 'rung, lắc' },
    { v1: 'shine', v2: 'shone', v3: 'shone', meaning: 'chiếu sáng' },
    { v1: 'shoot', v2: 'shot', v3: 'shot', meaning: 'bắn' },
    { v1: 'show', v2: 'showed', v3: 'shown', meaning: 'chỉ cho xem' },
    { v1: 'shrink', v2: 'shrank', v3: 'shrunk', meaning: 'co lại' },
    { v1: 'shut', v2: 'shut', v3: 'shut', meaning: 'đóng' },
    { v1: 'sing', v2: 'sang', v3: 'sung', meaning: 'hát' },
    { v1: 'sink', v2: 'sank', v3: 'sunk', meaning: 'chìm' },
    { v1: 'sit', v2: 'sat', v3: 'sat', meaning: 'ngồi' },
    { v1: 'sleep', v2: 'slept', v3: 'slept', meaning: 'ngủ' },
    { v1: 'slide', v2: 'slid', v3: 'slid', meaning: 'trượt' },
    { v1: 'speak', v2: 'spoke', v3: 'spoken', meaning: 'nói' },
    { v1: 'speed', v2: 'sped', v3: 'sped', meaning: 'tăng tốc' },
    { v1: 'spend', v2: 'spent', v3: 'spent', meaning: 'tiêu xài' },
    { v1: 'spill', v2: 'spilt/spilled', v3: 'spilt/spilled', meaning: 'làm đổ' },
    { v1: 'spin', v2: 'spun', v3: 'spun', meaning: 'quay' },
    { v1: 'split', v2: 'split', v3: 'split', meaning: 'chia sẻ, chẻ' },
    { v1: 'spread', v2: 'spread', v3: 'spread', meaning: 'lan truyền' },
    { v1: 'spring', v2: 'sprang', v3: 'sprung', meaning: 'nảy, bật lên' },
    { v1: 'stand', v2: 'stood', v3: 'stood', meaning: 'đứng' },
    { v1: 'steal', v2: 'stole', v3: 'stolen', meaning: 'ăn cắp' },
    { v1: 'stick', v2: 'stuck', v3: 'stuck', meaning: 'dính, dán' },
    { v1: 'sting', v2: 'stung', v3: 'stung', meaning: 'châm, đốt' },
    { v1: 'stink', v2: 'stank', v3: 'stunk', meaning: 'bốc mùi hôi' },
    { v1: 'strike', v2: 'struck', v3: 'struck', meaning: 'đánh đập, đình công' },
    { v1: 'swear', v2: 'swore', v3: 'sworn', meaning: 'thề' },
    { v1: 'sweep', v2: 'swept', v3: 'swept', meaning: 'quét' },
    { v1: 'swim', v2: 'swam', v3: 'swum', meaning: 'bơi' },
    { v1: 'swing', v2: 'swung', v3: 'swung', meaning: 'đung đưa' },
    { v1: 'take', v2: 'took', v3: 'taken', meaning: 'lấy, mang đi' },
    { v1: 'teach', v2: 'taught', v3: 'taught', meaning: 'dạy' },
    { v1: 'tear', v2: 'tore', v3: 'torn', meaning: 'xé' },
    { v1: 'tell', v2: 'told', v3: 'told', meaning: 'kể, bảo' },
    { v1: 'think', v2: 'thought', v3: 'thought', meaning: 'nghĩ' },
    { v1: 'throw', v2: 'threw', v3: 'thrown', meaning: 'ném, vứt' },
    { v1: 'understand', v2: 'understood', v3: 'understood', meaning: 'hiểu' },
    { v1: 'wake', v2: 'woke', v3: 'woken', meaning: 'thức giấc' },
    { v1: 'wear', v2: 'wore', v3: 'worn', meaning: 'mặc, đội' },
    { v1: 'weep', v2: 'wept', v3: 'wept', meaning: 'khóc' },
    { v1: 'win', v2: 'won', v3: 'won', meaning: 'chiến thắng' },
    { v1: 'write', v2: 'wrote', v3: 'written', meaning: 'viết' }
];

// --- FALLBACK LOGIC ---
const allTags = [
    {emoji: '🌟', count: 0}, {emoji: '📚', count: 0}, {emoji: '🔥', count: 0}, {emoji: '✨', count: 0},
    {emoji: '💡', count: 0}, {emoji: '🎯', count: 0}, {emoji: '💬', count: 0}, {emoji: '🚀', count: 0}
];

function getEmojiForIndex(idx) {
    return allTags[idx % allTags.length].emoji;
}

// Generate MASSIVE fallback data for any lessons not explicitly defined above
chaptersConfig.forEach((ch, chIdx) => {
    let chapterNum = chIdx + 1;
    for(let i=1; i<=ch.count; i++) {
        let lessonId = `${chapterNum}.${i}`;
        if (!lessonData[lessonId]) {
            let name = ch.names[i-1] || `Lesson ${lessonId}`;
            let emj = getEmojiForIndex(i);
            
            lessonData[lessonId] = {
                chapter: `Chapter ${chapterNum < 10 ? '0'+chapterNum : chapterNum}`,
                emoji: emj,
                title: name,
                time: "45 min",
                level: "A2",
                videoUrl: "https://www.youtube.com/embed/T0B226SZ3KU",
                vocab: [
                    { word: "Essential", pron: "/ɪˈsenʃl/", meaning: "Cần thiết, cốt yếu", example: "It is essential to learn vocabulary every day.", synonyms: "crucial, vital", antonyms: "unimportant", family: "essentially (adv)" },
                    { word: "Fascinating", pron: "/ˈfæsɪneɪtɪŋ/", meaning: "Hấp dẫn, lôi cuốn", example: "The history of this city is absolutely fascinating.", synonyms: "interesting, captivating", antonyms: "boring" },
                    { word: "Improve", pron: "/ɪmˈpruːv/", meaning: "Cải thiện", example: "I want to improve my English speaking skills.", synonyms: "enhance, upgrade", antonyms: "worsen", family: "improvement (n)" },
                    { word: "Recommend", pron: "/ˌrekəˈmend/", meaning: "Đề nghị, khuyên", example: "I highly recommend this book for beginners.", synonyms: "suggest", family: "recommendation (n)" },
                    { word: "Convenient", pron: "/kənˈviːniənt/", meaning: "Tiện lợi", example: "Online shopping is very convenient.", synonyms: "handy, practical", antonyms: "inconvenient", family: "convenience (n)" },
                    { word: "Complicated", pron: "/ˈkɒmplɪkeɪtɪd/", meaning: "Phức tạp", example: "The grammar rules can be quite complicated.", synonyms: "complex", antonyms: "simple" },
                    { word: "Struggle", pron: "/ˈstrʌɡl/", meaning: "Đấu tranh, vất vả", example: "Many students struggle with pronunciation at first.", synonyms: "fight, try hard", family: "struggling (adj)" },
                    { word: "Achieve", pron: "/əˈtʃiːv/", meaning: "Đạt được", example: "If you work hard, you will achieve your goals.", synonyms: "accomplish, reach", family: "achievement (n)" }
                ],
                grammar: [
                    {
                        title: "1. Advanced Sentence Structure",
                        explanation: "Cách ghép các câu đơn thành câu ghép sử dụng liên từ (conjunctions) như and, but, so, because, although.",
                        examples: [
                            "I wanted to go out, but it was raining heavily.",
                            "She studied very hard because she wanted to pass the exam.",
                            "Although he was tired, he finished his homework."
                        ],
                        notes: "Luôn dùng dấu phẩy (,) trước liên từ khi nối hai mệnh đề độc lập hoàn chỉnh."
                    },
                    {
                        title: "2. Using 'used to' for Past Habits",
                        explanation: "Cấu trúc 'Used to + V(nguyên thể)' dùng để miêu tả một thói quen hoặc trạng thái trong quá khứ nay không còn nữa.",
                        examples: [
                            "I used to play tennis when I was young. (Now I don't)",
                            "She didn't use to eat vegetables, but now she loves them.",
                            "Did you use to live in London?"
                        ],
                        notes: "Chú ý ở thể phủ định và nghi vấn, mượn trợ động từ 'did' nên 'use' KHÔNG có 'd'."
                    }
                ],
                conversation: [
                    { speaker: "David", text: "Hi Emma! I haven't seen you in a long time. How have you been?" },
                    { speaker: "Emma", text: "Hey David! I've been great, thanks. Just very busy with my new project at work." },
                    { speaker: "David", text: "Oh, a new project? That sounds fascinating. What is it about?" },
                    { speaker: "Emma", text: "We are developing a new app for language learning. It's quite complicated but very exciting." },
                    { speaker: "David", text: "That is amazing! I'm actually struggling to improve my Spanish right now." },
                    { speaker: "Emma", text: "Really? Well, it is essential to practice every day. I highly recommend spending at least 20 minutes a day listening to podcasts." },
                    { speaker: "David", text: "That's a good tip. I used to go to a class, but it wasn't very convenient." },
                    { speaker: "Emma", text: "Online learning is much more convenient nowadays. If you work hard, you will definitely achieve fluency." },
                    { speaker: "David", text: "Thank you for the encouragement. We should catch up properly over coffee sometime." },
                    { speaker: "Emma", text: "I would love that. Let me know when you are free next week." }
                ],
                practice: [
                    { q: "1. Fill in the blank: It is raining, ______ I will stay at home.", a: "so", explain: "Dùng 'so' (vì vậy) để chỉ kết quả." },
                    { q: "2. Translate: 'Tôi từng sống ở Paris.'", a: "I used to live in Paris.", explain: "Sử dụng 'used to + V' cho thói quen trong quá khứ." },
                    { q: "3. Find the synonym for 'fascinating'.", a: "interesting / captivating", explain: "Cả hai từ đều mang nghĩa hấp dẫn." },
                    { q: "4. True or False: 'He didn't used to smoke' is correct.", a: "False", explain: "Sai ngữ pháp. Phải là 'didn't use to' (bỏ 'd' vì đã có mượn trợ động từ did)." },
                    { q: "5. Fill in the blank: She studies hard ______ she wants to get a scholarship.", a: "because", explain: "Dùng 'because' (bởi vì) để chỉ nguyên nhân." },
                    { q: "6. Match the antonym: The opposite of 'convenient' is ______.", a: "inconvenient", explain: "Thêm tiền tố 'in-' để tạo nghĩa trái ngược." },
                    { q: "7. Rewrite the sentence using 'Although': It was cold. We went swimming.", a: "Although it was cold, we went swimming.", explain: "Mệnh đề nhượng bộ đi với Although." },
                    { q: "8. What is the noun form of 'achieve'?", a: "achievement", explain: "Thêm hậu tố '-ment'." }
                ]
            };
        }
    }
});


// --- A2 VOCABULARY DICTIONARY ---
const a2Vocabulary = [
    { word: "Ability", pron: "/əˈbɪl.ə.ti/", meaning: "Khả năng", example: "He has the ability to learn languages quickly." },
    { word: "Abroad", pron: "/əˈbrɔːd/", meaning: "Ở nước ngoài", example: "She went abroad to study for a year." },
    { word: "Accept", pron: "/əkˈsept/", meaning: "Chấp nhận", example: "They offered him the job, and he accepted it." },
    { word: "Accident", pron: "/ˈæk.sɪ.dənt/", meaning: "Tai nạn", example: "She broke her leg in a car accident." },
    { word: "Achieve", pron: "/əˈtʃiːv/", meaning: "Đạt được", example: "You can achieve anything if you work hard." },
    { word: "Advantage", pron: "/ədˈvɑːn.tɪdʒ/", meaning: "Lợi thế", example: "One advantage of living in the city is public transport." },
    { word: "Advice", pron: "/ədˈvaɪs/", meaning: "Lời khuyên", example: "Can you give me some advice on what to wear?" },
    { word: "Afraid", pron: "/əˈfreɪd/", meaning: "Sợ hãi", example: "I am afraid of spiders." },
    { word: "Agree", pron: "/əˈɡriː/", meaning: "Đồng ý", example: "I agree with you completely." },
    { word: "Amazing", pron: "/əˈmeɪ.zɪŋ/", meaning: "Tuyệt vời, đáng kinh ngạc", example: "The view from the mountain was amazing." },
    { word: "Amount", pron: "/əˈmaʊnt/", meaning: "Số lượng", example: "You need a large amount of money to buy that house." },
    { word: "Angry", pron: "/ˈæŋ.ɡri/", meaning: "Tức giận", example: "He was very angry when I broke his phone." },
    { word: "Appearance", pron: "/əˈpɪə.rəns/", meaning: "Ngoại hình", example: "You shouldn't judge people by their appearance." },
    { word: "Appointment", pron: "/əˈpɔɪnt.mənt/", meaning: "Cuộc hẹn", example: "I have a dentist appointment tomorrow morning." },
    { word: "Argue", pron: "/ˈɑːɡ.juː/", meaning: "Cãi nhau, tranh luận", example: "They always argue about money." },
    { word: "Arrive", pron: "/əˈraɪv/", meaning: "Đến nơi", example: "What time does the train arrive?" },
    { word: "Article", pron: "/ˈɑː.tɪ.kəl/", meaning: "Bài báo", example: "I read an interesting article about space." },
    { word: "Available", pron: "/əˈveɪ.lə.bəl/", meaning: "Có sẵn", example: "Is this dress available in size M?" },
    { word: "Avoid", pron: "/əˈvɔɪd/", meaning: "Tránh xa", example: "You should avoid eating too much sugar." },
    { word: "Awful", pron: "/ˈɔː.fəl/", meaning: "Tồi tệ, khủng khiếp", example: "The weather was awful yesterday." },
    { word: "Basic", pron: "/ˈbeɪ.sɪk/", meaning: "Cơ bản", example: "I only know some basic French." },
    { word: "Beautiful", pron: "/ˈbjuː.tɪ.fəl/", meaning: "Xinh đẹp", example: "She wore a beautiful dress to the party." },
    { word: "Behavior", pron: "/bɪˈheɪ.vjər/", meaning: "Hành vi, cách cư xử", example: "His behavior in class was unacceptable." },
    { word: "Benefit", pron: "/ˈben.ɪ.fɪt/", meaning: "Lợi ích", example: "There are many health benefits of eating vegetables." },
    { word: "Borrow", pron: "/ˈbɒr.əʊ/", meaning: "Mượn", example: "Can I borrow your pen for a moment?" },
    { word: "Bother", pron: "/ˈbɒð.ər/", meaning: "Làm phiền", example: "Please don't bother me while I am working." },
    { word: "Careful", pron: "/ˈkeə.fəl/", meaning: "Cẩn thận", example: "Be careful when you cross the street." },
    { word: "Celebrate", pron: "/ˈsel.ə.breɪt/", meaning: "Ăn mừng", example: "We are going to celebrate my birthday on Friday." },
    { word: "Certain", pron: "/ˈsɜː.tən/", meaning: "Chắc chắn", example: "Are you certain that he is coming?" },
    { word: "Challenge", pron: "/ˈtʃæl.ɪndʒ/", meaning: "Thử thách", example: "Learning a new language is a big challenge." },
    { word: "Character", pron: "/ˈkær.ək.tər/", meaning: "Tính cách, nhân vật", example: "She is a very strong character." },
    { word: "Comfortable", pron: "/ˈkʌm.fə.tə.bəl/", meaning: "Thoải mái", example: "This sofa is really comfortable." },
    { word: "Common", pron: "/ˈkɒm.ən/", meaning: "Phổ biến", example: "Smith is a very common name in the UK." },
    { word: "Communicate", pron: "/kəˈmjuː.nɪ.keɪt/", meaning: "Giao tiếp", example: "We communicate mostly by email." },
    { word: "Compare", pron: "/kəmˈpeər/", meaning: "So sánh", example: "If you compare the prices, this one is cheaper." },
    { word: "Complain", pron: "/kəmˈpleɪn/", meaning: "Phàn nàn", example: "The customer complained about the cold food." },
    { word: "Condition", pron: "/kənˈdɪʃ.ən/", meaning: "Điều kiện, tình trạng", example: "The car is old but in good condition." },
    { word: "Confident", pron: "/ˈkɒn.fɪ.dənt/", meaning: "Tự tin", example: "She is very confident when speaking in public." },
    { word: "Connect", pron: "/kəˈnekt/", meaning: "Kết nối", example: "Can I connect my phone to the Wi-Fi?" },
    { word: "Consider", pron: "/kənˈsɪd.ər/", meaning: "Cân nhắc, xem xét", example: "I am considering buying a new car." },
    { word: "Continue", pron: "/kənˈtɪn.juː/", meaning: "Tiếp tục", example: "Please continue reading the story." },
    { word: "Control", pron: "/kənˈtrəʊl/", meaning: "Kiểm soát", example: "You need to learn how to control your temper." },
    { word: "Create", pron: "/kriˈeɪt/", meaning: "Tạo ra", example: "He wants to create a new app." },
    { word: "Customer", pron: "/ˈkʌs.tə.mər/", meaning: "Khách hàng", example: "The shop offers a discount to regular customers." },
    { word: "Damage", pron: "/ˈdæm.ɪdʒ/", meaning: "Thiệt hại, làm hỏng", example: "The storm caused a lot of damage to the roof." },
    { word: "Dangerous", pron: "/ˈdeɪn.dʒər.əs/", meaning: "Nguy hiểm", example: "It is dangerous to swim in this river." },
    { word: "Decision", pron: "/dɪˈsɪʒ.ən/", meaning: "Quyết định", example: "Making a decision can be difficult." },
    { word: "Decrease", pron: "/dɪˈkriːs/", meaning: "Giảm xuống", example: "The temperature will decrease in the evening." },
    { word: "Depend", pron: "/dɪˈpend/", meaning: "Phụ thuộc", example: "It depends on the weather if we go out." },
    { word: "Describe", pron: "/dɪˈskraɪb/", meaning: "Miêu tả", example: "Can you describe the man you saw?" },
    { word: "Detail", pron: "/ˈdiː.teɪl/", meaning: "Chi tiết", example: "Please tell me the story in detail." },
    { word: "Develop", pron: "/dɪˈvel.əp/", meaning: "Phát triển", example: "Children develop very quickly." },
    { word: "Difference", pron: "/ˈdɪf.ər.əns/", meaning: "Sự khác biệt", example: "What is the difference between these two phones?" },
    { word: "Difficult", pron: "/ˈdɪf.ɪ.kəlt/", meaning: "Khó khăn", example: "The math test was very difficult." },
    { word: "Disappoint", pron: "/ˌdɪs.əˈpɔɪnt/", meaning: "Làm thất vọng", example: "I don't want to disappoint my parents." },
    { word: "Discover", pron: "/dɪˈskʌv.ər/", meaning: "Khám phá", example: "Scientists discover new things every day." },
    { word: "Disease", pron: "/dɪˈziːz/", meaning: "Bệnh tật", example: "He suffers from a rare disease." },
    { word: "Distance", pron: "/ˈdɪs.təns/", meaning: "Khoảng cách", example: "The distance from my house to the school is 2 km." },
    { word: "Education", pron: "/ˌedʒ.ʊˈkeɪ.ʃən/", meaning: "Giáo dục", example: "Education is very important for your future." },
    { word: "Effect", pron: "/ɪˈfekt/", meaning: "Tác động, hiệu ứng", example: "The medicine had an immediate effect." },
    { word: "Encourage", pron: "/ɪnˈkʌr.ɪdʒ/", meaning: "Khuyến khích", example: "My teacher always encourages me to try my best." },
    { word: "Energy", pron: "/ˈen.ə.dʒi/", meaning: "Năng lượng", example: "I have no energy left after the gym." },
    { word: "Entertainment", pron: "/ˌen.təˈteɪn.mənt/", meaning: "Giải trí", example: "There is plenty of entertainment in the city." },
    { word: "Environment", pron: "/ɪnˈvaɪ.rən.mənt/", meaning: "Môi trường", example: "We must protect the environment." },
    { word: "Especially", pron: "/ɪˈspeʃ.əl.i/", meaning: "Đặc biệt là", example: "I love sports, especially football." },
    { word: "Essential", pron: "/ɪˈsen.ʃəl/", meaning: "Cần thiết", example: "Water is essential for life." },
    { word: "Excellent", pron: "/ˈek.səl.ənt/", meaning: "Xuất sắc", example: "She gave an excellent presentation." },
    { word: "Exchange", pron: "/ɪksˈtʃeɪndʒ/", meaning: "Trao đổi", example: "We exchange gifts on Christmas." },
    { word: "Experience", pron: "/ɪkˈspɪə.ri.əns/", meaning: "Kinh nghiệm, trải nghiệm", example: "Traveling gives you a lot of experience." },
    { word: "Explain", pron: "/ɪkˈspleɪn/", meaning: "Giải thích", example: "Can you explain this grammar rule to me?" },
    { word: "Famous", pron: "/ˈfeɪ.məs/", meaning: "Nổi tiếng", example: "Paris is famous for the Eiffel Tower." },
    { word: "Feature", pron: "/ˈfiː.tʃər/", meaning: "Tính năng, đặc điểm", example: "This phone has a lot of new features." },
    { word: "Finally", pron: "/ˈfaɪ.nəl.i/", meaning: "Cuối cùng", example: "Finally, the train arrived." },
    { word: "Focus", pron: "/ˈfəʊ.kəs/", meaning: "Tập trung", example: "It is hard to focus with so much noise." },
    { word: "Foreign", pron: "/ˈfɒr.ən/", meaning: "Nước ngoài", example: "I want to learn a foreign language." },
    { word: "Frequent", pron: "/ˈfriː.kwənt/", meaning: "Thường xuyên", example: "He is a frequent visitor to the museum." },
    { word: "Gather", pron: "/ˈɡæð.ər/", meaning: "Tụ tập, thu thập", example: "The family gathers every Sunday for dinner." },
    { word: "Generally", pron: "/ˈdʒen.ər.əl.i/", meaning: "Nhìn chung, nói chung", example: "Generally, the weather here is warm." },
    { word: "Guess", pron: "/ɡes/", meaning: "Đoán", example: "Can you guess how old I am?" },
    { word: "Habit", pron: "/ˈhæb.ɪt/", meaning: "Thói quen", example: "Biting your nails is a bad habit." },
    { word: "Health", pron: "/helθ/", meaning: "Sức khỏe", example: "Smoking is bad for your health." },
    { word: "Highlight", pron: "/ˈhaɪ.laɪt/", meaning: "Làm nổi bật", example: "Please highlight the important words." },
    { word: "However", pron: "/haʊˈev.ər/", meaning: "Tuy nhiên", example: "I am very tired. However, I must finish this work." },
    { word: "Identify", pron: "/aɪˈden.tɪ.faɪ/", meaning: "Nhận dạng, xác định", example: "Can you identify the man in this photo?" },
    { word: "Ignore", pron: "/ɪɡˈnɔːr/", meaning: "Phớt lờ", example: "She completely ignored my question." },
    { word: "Imagination", pron: "/ɪˌmædʒ.ɪˈneɪ.ʃən/", meaning: "Sự tưởng tượng", example: "Children have a great imagination." },
    { word: "Important", pron: "/ɪmˈpɔː.tənt/", meaning: "Quan trọng", example: "It is important to eat healthy food." },
    { word: "Improve", pron: "/ɪmˈpruːv/", meaning: "Cải thiện", example: "I want to improve my English speaking skills." },
    { word: "Include", pron: "/ɪnˈkluːd/", meaning: "Bao gồm", example: "Does the price include breakfast?" },
    { word: "Increase", pron: "/ɪnˈkriːs/", meaning: "Tăng lên", example: "The number of tourists will increase next year." },
    { word: "Independent", pron: "/ˌɪn.dɪˈpen.dənt/", meaning: "Độc lập", example: "She is a very independent young woman." },
    { word: "Influence", pron: "/ˈɪn.flu.əns/", meaning: "Ảnh hưởng", example: "Friends have a big influence on teenagers." },
    { word: "Information", pron: "/ˌɪn.fəˈmeɪ.ʃən/", meaning: "Thông tin", example: "You can find more information on our website." },
    { word: "Instead", pron: "/ɪnˈsted/", meaning: "Thay vì", example: "I don't have coffee, can I have tea instead?" },
    { word: "Introduce", pron: "/ˌɪn.trəˈdjuːs/", meaning: "Giới thiệu", example: "Let me introduce you to my brother." },
    { word: "Invent", pron: "/ɪnˈvent/", meaning: "Phát minh", example: "Who invented the telephone?" },
    { word: "Involve", pron: "/ɪnˈvɒlv/", meaning: "Liên quan đến", example: "The job involves a lot of traveling." },
    { word: "Knowledge", pron: "/ˈnɒl.ɪdʒ/", meaning: "Kiến thức", example: "He has a lot of knowledge about history." },
    { word: "Language", pron: "/ˈlæŋ.ɡwɪdʒ/", meaning: "Ngôn ngữ", example: "How many languages do you speak?" },
    { word: "Listen", pron: "/ˈlɪs.ən/", meaning: "Lắng nghe", example: "You should listen to your parents." },
    { word: "Location", pron: "/ləʊˈkeɪ.ʃən/", meaning: "Vị trí", example: "The hotel is in a beautiful location." },
    { word: "Manage", pron: "/ˈmæn.ɪdʒ/", meaning: "Quản lý, xoay xở", example: "How do you manage to do everything?" },
    { word: "Material", pron: "/məˈtɪə.ri.əl/", meaning: "Chất liệu, vật liệu", example: "What material is this dress made of?" },
    { word: "Memory", pron: "/ˈmem.ər.i/", meaning: "Trí nhớ, kỉ niệm", example: "I have a very bad memory for names." },
    { word: "Message", pron: "/ˈmes.ɪdʒ/", meaning: "Tin nhắn, thông điệp", example: "Did you get my text message?" },
    { word: "Method", pron: "/ˈmeθ.əd/", meaning: "Phương pháp", example: "What is the best method to learn vocabulary?" },
    { word: "Mistake", pron: "/mɪˈsteɪk/", meaning: "Lỗi lầm", example: "Don't worry, everyone makes mistakes." },
    { word: "Natural", pron: "/ˈnætʃ.ər.əl/", meaning: "Tự nhiên", example: "It is natural to feel nervous before a test." },
    { word: "Necessary", pron: "/ˈnes.ə.ser.i/", meaning: "Cần thiết", example: "Is it necessary to wear a suit?" },
    { word: "Negative", pron: "/ˈneɡ.ə.tɪv/", meaning: "Tiêu cực", example: "Try not to have negative thoughts." },
    { word: "Notice", pron: "/ˈnəʊ.tɪs/", meaning: "Chú ý, nhận ra", example: "Did you notice his new haircut?" },
    { word: "Opinion", pron: "/əˈpɪn.jən/", meaning: "Ý kiến", example: "What is your opinion on this matter?" },
    { word: "Opportunity", pron: "/ˌɒp.əˈtjuː.nə.ti/", meaning: "Cơ hội", example: "This is a great opportunity for your career." },
    { word: "Organize", pron: "/ˈɔː.ɡən.aɪz/", meaning: "Tổ chức, sắp xếp", example: "I need to organize my desk." },
    { word: "Participate", pron: "/pɑːˈtɪs.ɪ.peɪt/", meaning: "Tham gia", example: "Everyone should participate in the game." },
    { word: "Patient", pron: "/ˈpeɪ.ʃənt/", meaning: "Kiên nhẫn", example: "You need to be patient when teaching children." },
    { word: "Perfect", pron: "/ˈpɜː.fekt/", meaning: "Hoàn hảo", example: "The weather was perfect for a picnic." },
    { word: "Performance", pron: "/pəˈfɔː.məns/", meaning: "Màn trình diễn", example: "Her performance in the play was amazing." },
    { word: "Personal", pron: "/ˈpɜː.sən.əl/", meaning: "Cá nhân", example: "Please keep your personal belongings with you." },
    { word: "Popular", pron: "/ˈpɒp.jə.lər/", meaning: "Phổ biến, được yêu thích", example: "This song is very popular among teenagers." },
    { word: "Positive", pron: "/ˈpɒz.ə.tɪv/", meaning: "Tích cực", example: "Try to stay positive." },
    { word: "Practice", pron: "/ˈpræk.tɪs/", meaning: "Thực hành", example: "You need more practice to play the piano well." },
    { word: "Prepare", pron: "/prɪˈpeər/", meaning: "Chuẩn bị", example: "I am preparing dinner." },
    { word: "Prevent", pron: "/prɪˈvent/", meaning: "Ngăn chặn", example: "Exercise can help prevent disease." },
    { word: "Produce", pron: "/prəˈdʒuːs/", meaning: "Sản xuất", example: "This factory produces cars." },
    { word: "Provide", pron: "/prəˈvaɪd/", meaning: "Cung cấp", example: "The hotel provides clean towels every day." },
    { word: "Purpose", pron: "/ˈpɜː.pəs/", meaning: "Mục đích", example: "What is the purpose of your visit?" },
    { word: "Quality", pron: "/ˈkwɒl.ə.ti/", meaning: "Chất lượng", example: "These shoes are of very high quality." },
    { word: "Realize", pron: "/ˈrɪə.laɪz/", meaning: "Nhận ra", example: "I didn't realize how late it was." },
    { word: "Reason", pron: "/ˈriː.zən/", meaning: "Lý do", example: "What is the reason for your absence?" },
    { word: "Receive", pron: "/rɪˈsiːv/", meaning: "Nhận", example: "Did you receive my email?" },
    { word: "Recognize", pron: "/ˈrek.əɡ.naɪz/", meaning: "Nhận ra", example: "I didn't recognize you with your new glasses." },
    { word: "Recommend", pron: "/ˌrek.əˈmend/", meaning: "Gợi ý, khuyên", example: "Can you recommend a good restaurant?" },
    { word: "Regular", pron: "/ˈreɡ.jə.lər/", meaning: "Thường xuyên, đều đặn", example: "He exercises on a regular basis." },
    { word: "Remember", pron: "/rɪˈmem.bər/", meaning: "Nhớ", example: "I can't remember his name." },
    { word: "Require", pron: "/rɪˈkwaɪər/", meaning: "Yêu cầu", example: "This job requires a lot of patience." },
    { word: "Respect", pron: "/rɪˈspekt/", meaning: "Tôn trọng", example: "You should respect your elders." },
    { word: "Result", pron: "/rɪˈzʌlt/", meaning: "Kết quả", example: "He got good results in his exams." },
    { word: "Review", pron: "/rɪˈvjuː/", meaning: "Đánh giá, ôn tập", example: "We need to review the grammar rules." },
    { word: "Satisfied", pron: "/ˈsæt.ɪs.faɪd/", meaning: "Hài lòng", example: "I am very satisfied with the service." },
    { word: "Science", pron: "/ˈsaɪ.əns/", meaning: "Khoa học", example: "I like studying science at school." },
    { word: "Section", pron: "/ˈsek.ʃən/", meaning: "Phần, mục", example: "The vocabulary section is at the end of the book." },
    { word: "Serious", pron: "/ˈsɪə.ri.əs/", meaning: "Nghiêm trọng, nghiêm túc", example: "It was a very serious accident." },
    { word: "Share", pron: "/ʃeər/", meaning: "Chia sẻ", example: "Can I share this book with you?" },
    { word: "Similar", pron: "/ˈsɪm.ɪ.lər/", meaning: "Tương tự", example: "Your dress is very similar to mine." },
    { word: "Situation", pron: "/ˌsɪtʃ.uˈeɪ.ʃən/", meaning: "Tình huống", example: "This is a very difficult situation." },
    { word: "Society", pron: "/səˈsaɪ.ə.ti/", meaning: "Xã hội", example: "We live in a modern society." },
    { word: "Solution", pron: "/səˈluː.ʃən/", meaning: "Giải pháp", example: "We need to find a solution to this problem." },
    { word: "Special", pron: "/ˈspeʃ.əl/", meaning: "Đặc biệt", example: "I made a special dinner for you." },
    { word: "Specific", pron: "/spəˈsɪf.ɪk/", meaning: "Cụ thể", example: "Can you give me a specific example?" },
    { word: "Success", pron: "/səkˈses/", meaning: "Thành công", example: "Hard work is the key to success." },
    { word: "Suggest", pron: "/səˈdʒest/", meaning: "Đề xuất", example: "I suggest that we go home now." },
    { word: "Support", pron: "/səˈpɔːt/", meaning: "Hỗ trợ", example: "Thank you for all your support." },
    { word: "Surprise", pron: "/səˈpraɪz/", meaning: "Bất ngờ", example: "The party was a big surprise." },
    { word: "Technology", pron: "/tekˈnɒl.ə.dʒi/", meaning: "Công nghệ", example: "Technology is changing very fast." },
    { word: "Traditional", pron: "/trəˈdɪʃ.ən.əl/", meaning: "Truyền thống", example: "We ate a traditional meal." },
    { word: "Understand", pron: "/ˌʌn.dəˈstænd/", meaning: "Hiểu", example: "Do you understand what I mean?" },
    { word: "Useful", pron: "/ˈjuːs.fəl/", meaning: "Hữu ích", example: "This dictionary is very useful." },
    { word: "Various", pron: "/ˈveə.ri.əs/", meaning: "Nhiều loại, đa dạng", example: "We have bags in various colors." },
    { word: "Vocabulary", pron: "/vəˈkæb.jə.lər.i/", meaning: "Từ vựng", example: "I need to learn more English vocabulary." },
    { word: "Wonder", pron: "/ˈwʌn.dər/", meaning: "Tự hỏi, thắc mắc", example: "I wonder where he is now." }
];


// --- GRAMMAR CHEAT SHEET ---
const grammarCheatSheet = [
    {
        title: 'Present Simple (Hiện tại đơn)',
        formula: 'S + V(s/es) / S + am/is/are',
        usage: 'Sự thật hiển nhiên, thói quen, lịch trình.',
        examples: ['I work every day.', 'The train leaves at 8 AM.']
    },
    {
        title: 'Present Continuous (Hiện tại tiếp diễn)',
        formula: 'S + am/is/are + V-ing',
        usage: 'Hành động đang xảy ra lúc nói, hoặc dự định tương lai gần.',
        examples: ['She is reading a book now.', 'We are leaving tomorrow.']
    },
    {
        title: 'Past Simple (Quá khứ đơn)',
        formula: 'S + V2/ed / S + was/were',
        usage: 'Hành động đã bắt đầu và kết thúc trong quá khứ.',
        examples: ['I visited Paris last year.', 'They didn\'t go to school yesterday.']
    },
    {
        title: 'Future Simple (Tương lai đơn)',
        formula: 'S + will + V(nguyên mẫu)',
        usage: 'Dự đoán không có căn cứ, quyết định ngay lúc nói.',
        examples: ['I think it will rain.', 'I\'ll take this shirt.']
    },
    {
        title: 'Comparatives (So sánh hơn)',
        formula: 'Tính từ ngắn + er / more + Tính từ dài',
        usage: 'So sánh giữa 2 người hoặc 2 vật.',
        examples: ['He is taller than me.', 'This car is more expensive than that one.']
    },
    {
        title: 'First Conditional (Câu điều kiện loại 1)',
        formula: 'If + Present Simple, S + will + V',
        usage: 'Điều kiện có thể xảy ra ở hiện tại hoặc tương lai.',
        examples: ['If it rains, I will stay home.', 'If you study hard, you will pass.']
    }
];

// --- PHRASAL VERBS ---
const phrasalVerbs = [
    { verb: 'Wake up', meaning: 'Thức giấc', example: 'I wake up at 6 AM.' },
    { verb: 'Get up', meaning: 'Ra khỏi giường', example: 'I get up 10 minutes later.' },
    { verb: 'Turn on / Turn off', meaning: 'Bật / Tắt (máy móc)', example: 'Please turn off the lights.' },
    { verb: 'Put on', meaning: 'Mặc vào', example: 'Put on your jacket, it\'s cold.' },
    { verb: 'Take off', meaning: 'Cởi ra / Cất cánh', example: 'The plane takes off at 9 PM.' },
    { verb: 'Look for', meaning: 'Tìm kiếm', example: 'I am looking for my keys.' },
    { verb: 'Give up', meaning: 'Từ bỏ', example: 'Never give up on your dreams.' },
    { verb: 'Look after', meaning: 'Chăm sóc', example: 'Can you look after my cat?' },
    { verb: 'Find out', meaning: 'Tìm ra (thông tin)', example: 'I need to find out the truth.' },
    { verb: 'Grow up', meaning: 'Lớn lên', example: 'She grew up in London.' }
];

// --- EVERYDAY EXPRESSIONS ---
const everydayExpressions = [
    {
        category: 'Greetings & Small Talk (Chào hỏi)',
        expressions: [
            { en: "How's it going?", vi: "Dạo này sao rồi?" },
            { en: "Long time no see.", vi: "Lâu rồi không gặp." },
            { en: "What have you been up to?", vi: "Dạo này bạn bận gì không?" }
        ]
    },
    {
        category: 'Apologizing (Xin lỗi)',
        expressions: [
            { en: "I'm so sorry about that.", vi: "Tôi rất xin lỗi về điều đó." },
            { en: "It was my fault.", vi: "Đó là lỗi của tôi." },
            { en: "Please forgive me.", vi: "Xin hãy tha lỗi cho tôi." }
        ]
    },
    {
        category: 'At a Restaurant (Nhà hàng)',
        expressions: [
            { en: "Can I get the menu, please?", vi: "Cho tôi xem thực đơn được không?" },
            { en: "I would like to order...", vi: "Tôi muốn gọi món..." },
            { en: "Could we have the bill, please?", vi: "Cho tôi xin hóa đơn." }
        ]
    },
    {
        category: 'Shopping (Mua sắm)',
        expressions: [
            { en: "I'm just looking, thanks.", vi: "Tôi chỉ xem thôi, cảm ơn." },
            { en: "How much does this cost?", vi: "Cái này giá bao nhiêu?" },
            { en: "Do you have this in a smaller size?", vi: "Bạn có cái này size nhỏ hơn không?" }
        ]
    }
];

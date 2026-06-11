const STORAGE_KEY = "cat-ending-state-v1";
const dimensions = ["comfort", "curiosity", "expressive", "boundary", "order", "care"];

const questions = [
  {
    text: "周末终于空下来，你最想怎么度过？",
    options: [
      { id: "A", text: "把房间收拾舒服，窝在熟悉的位置慢慢回血。", scores: { comfort: 2, order: 1 } },
      { id: "B", text: "出门随便走走，看看会不会遇到新鲜的小事。", scores: { curiosity: 2, expressive: 1 } },
      { id: "C", text: "约喜欢的人聊天吃东西，让心情热闹一点。", scores: { expressive: 2, care: 1 } },
      { id: "D", text: "先不安排，保持可撤退的自由空间。", scores: { boundary: 2, comfort: 1 } },
    ],
  },
  {
    text: "进入一个新环境时，你通常会先做什么？",
    options: [
      { id: "A", text: "找到最安心的位置，观察大家怎么行动。", scores: { comfort: 1, boundary: 2 } },
      { id: "B", text: "主动探索路线，弄清楚哪里有趣、哪里方便。", scores: { curiosity: 2, order: 1 } },
      { id: "C", text: "先和看起来合拍的人建立一点连接。", scores: { expressive: 2, care: 1 } },
      { id: "D", text: "看清规则和节奏，再决定投入多少精力。", scores: { order: 2, boundary: 1 } },
    ],
  },
  {
    text: "别人突然夸你，你的第一反应更接近？",
    options: [
      { id: "A", text: "有点害羞，但会认真收下这份好意。", scores: { care: 2, comfort: 1 } },
      { id: "B", text: "立刻精神起来，也想把快乐传回去。", scores: { expressive: 2, care: 1 } },
      { id: "C", text: "表面淡定，心里会反复回味很久。", scores: { boundary: 1, comfort: 2 } },
      { id: "D", text: "会想知道具体哪里做得好，下次继续优化。", scores: { order: 2, curiosity: 1 } },
    ],
  },
  {
    text: "朋友临时约你出门，你会怎么判断？",
    options: [
      { id: "A", text: "看体力和心情，如果被打乱太多就婉拒。", scores: { boundary: 2, comfort: 1 } },
      { id: "B", text: "如果听起来有意思，就当作今日随机事件。", scores: { curiosity: 2, expressive: 1 } },
      { id: "C", text: "对方需要陪伴的话，我会尽量出现。", scores: { care: 2, expressive: 1 } },
      { id: "D", text: "先确认时间地点和结束方式，再决定。", scores: { order: 2, boundary: 1 } },
    ],
  },
  {
    text: "如果你的桌面被别人弄乱了，你更可能？",
    options: [
      { id: "A", text: "立刻恢复原状，不然脑内会持续报警。", scores: { order: 2, boundary: 1 } },
      { id: "B", text: "有点不舒服，但先看看是不是有原因。", scores: { care: 1, comfort: 2 } },
      { id: "C", text: "直接说清楚：这里不能随便动。", scores: { boundary: 2, expressive: 1 } },
      { id: "D", text: "顺手换个摆法，也许能发现新布局。", scores: { curiosity: 2, order: 1 } },
    ],
  },
  {
    text: "压力变大时，你最需要的是？",
    options: [
      { id: "A", text: "一个安静角落，让情绪先落地。", scores: { comfort: 2, boundary: 1 } },
      { id: "B", text: "拆成清单，一项项处理掉。", scores: { order: 2, comfort: 1 } },
      { id: "C", text: "找可信的人说出来，不想独自憋着。", scores: { expressive: 2, care: 1 } },
      { id: "D", text: "换个场景，让新的刺激把我拉出来。", scores: { curiosity: 2, expressive: 1 } },
    ],
  },
  {
    text: "你最喜欢哪种被人惦记的方式？",
    options: [
      { id: "A", text: "不用太频繁，但每次都真诚稳定。", scores: { comfort: 2, boundary: 1 } },
      { id: "B", text: "生活小事也愿意分享，像把窗户打开。", scores: { expressive: 2, care: 1 } },
      { id: "C", text: "记得我的习惯，并尊重我的节奏。", scores: { boundary: 2, order: 1 } },
      { id: "D", text: "带我去试没试过的东西，制造一点新鲜。", scores: { curiosity: 2, expressive: 1 } },
    ],
  },
  {
    text: "当大家意见不一致时，你通常会？",
    options: [
      { id: "A", text: "先让气氛稳住，再慢慢找折中点。", scores: { care: 2, comfort: 1 } },
      { id: "B", text: "把各自逻辑摆清楚，问题自然会变小。", scores: { order: 2, boundary: 1 } },
      { id: "C", text: "直接说出我真实的想法，不绕太多弯。", scores: { expressive: 2, boundary: 1 } },
      { id: "D", text: "跳出原来的框架，试试第三种方案。", scores: { curiosity: 2, order: 1 } },
    ],
  },
  {
    text: "一件事情快要结束时，你更在意？",
    options: [
      { id: "A", text: "有没有好好收尾，别留下乱糟糟的尾巴。", scores: { order: 2, care: 1 } },
      { id: "B", text: "过程里有没有被认真感受和记住。", scores: { care: 2, expressive: 1 } },
      { id: "C", text: "下一站会是什么，心已经探出头了。", scores: { curiosity: 2, expressive: 1 } },
      { id: "D", text: "终于可以回到自己的节奏里。", scores: { boundary: 2, comfort: 1 } },
    ],
  },
  {
    text: "你对亲密关系的理想距离是？",
    options: [
      { id: "A", text: "靠近但不挤压，彼此都有自己的小窝。", scores: { boundary: 2, comfort: 1 } },
      { id: "B", text: "可以黏一点，快乐和低落都想第一时间分享。", scores: { expressive: 2, care: 1 } },
      { id: "C", text: "稳定可靠，不必每天证明也知道彼此在。", scores: { comfort: 2, care: 1 } },
      { id: "D", text: "一起成长，一起发现新的世界。", scores: { curiosity: 2, order: 1 } },
    ],
  },
  {
    text: "面对一个新兴趣，你会怎样开始？",
    options: [
      { id: "A", text: "先到处试试，喜欢了再深入。", scores: { curiosity: 2, expressive: 1 } },
      { id: "B", text: "找教程和资料，搭好入门路线。", scores: { order: 2, curiosity: 1 } },
      { id: "C", text: "拉朋友一起玩，有反馈会更有动力。", scores: { expressive: 2, care: 1 } },
      { id: "D", text: "慢慢来，不想让兴趣变成任务。", scores: { comfort: 2, boundary: 1 } },
    ],
  },
  {
    text: "如果把今天的你放进一个猫窝，它应该是？",
    options: [
      { id: "A", text: "阳光刚好、毯子很软、谁都不用催我。", scores: { comfort: 2, care: 1 } },
      { id: "B", text: "靠近窗边，可以随时观察外面的变化。", scores: { curiosity: 2, boundary: 1 } },
      { id: "C", text: "热热闹闹，有人经过就能抬头打招呼。", scores: { expressive: 2, care: 1 } },
      { id: "D", text: "东西都在固定位置，安全、干净、可控。", scores: { order: 2, comfort: 1 } },
    ],
  },
];

const results = [
  {
    id: "warm-window-orange",
    title: "暖窗橘猫",
    image: "assets/cats/warm-window-orange.png",
    tags: ["安稳", "亲和", "照料感高"],
    profile: { comfort: 5, curiosity: 1, expressive: 2, boundary: 1, order: 2, care: 5 },
    description: "你像一只晒在窗边的橘猫，身上有让人放松的温度。你不急着证明什么，更擅长把日子过得踏实、柔软、有人情味。",
    advice: "别把照顾别人变成自动任务。你也值得被稳稳接住。",
    corner: "有阳光的窗台、软垫、热饮和不会催你的下午。",
  },
  {
    id: "moon-white",
    title: "月光白猫",
    image: "assets/cats/moon-white.png",
    tags: ["敏感", "安静", "边界清晰"],
    profile: { comfort: 4, curiosity: 2, expressive: 1, boundary: 5, order: 2, care: 2 },
    description: "你像月光里的白猫，安静但并不冷淡。你能感到很多细小的变化，也知道什么时候该靠近、什么时候该退回自己的光里。",
    advice: "敏感不是麻烦，它是你的雷达。只要给自己足够边界，就会很亮。",
    corner: "半拉窗帘的房间、低亮度小灯和只属于你的安静位置。",
  },
  {
    id: "patrol-tabby",
    title: "巡逻狸花",
    image: "assets/cats/patrol-tabby.png",
    tags: ["探索", "机警", "行动力强"],
    profile: { comfort: 1, curiosity: 5, expressive: 2, boundary: 3, order: 3, care: 1 },
    description: "你像一只每天巡逻领地的狸花猫，哪里有动静，哪里就有你的注意力。你靠行动理解世界，也总能比别人更早发现机会。",
    advice: "保持好奇很好，也记得给自己留一点固定补给点。",
    corner: "靠窗的高处、能看到门口和街景的观察位。",
  },
  {
    id: "cream-ragdoll",
    title: "奶盖布偶",
    image: "assets/cats/cream-ragdoll.png",
    tags: ["温柔", "依赖", "情绪支持型"],
    profile: { comfort: 4, curiosity: 1, expressive: 3, boundary: 1, order: 1, care: 5 },
    description: "你像一只奶盖一样柔软的布偶猫，很会感受关系里的温度。你愿意靠近，也愿意安抚别人，心软是你最明显的光。",
    advice: "亲近不是失去自己。温柔也可以带一点明确的规则。",
    corner: "沙发边、抱枕堆、能听到熟悉声音的地方。",
  },
  {
    id: "rainy-gray",
    title: "雨天灰猫",
    image: "assets/cats/rainy-gray.png",
    tags: ["内省", "慢热", "观察力强"],
    profile: { comfort: 4, curiosity: 2, expressive: 1, boundary: 4, order: 3, care: 2 },
    description: "你像雨天趴在书边的灰猫，慢热、谨慎，但心里有很深的回声。你不一定马上表达，却常常看得很准。",
    advice: "不用逼自己立刻热起来。慢一点，也是你辨认真心的方式。",
    corner: "雨声、书桌、热茶和一个不会被打扰的下午。",
  },
  {
    id: "garden-calico",
    title: "花园三花",
    image: "assets/cats/garden-calico.png",
    tags: ["表达丰富", "社交轻盈", "有生命力"],
    profile: { comfort: 2, curiosity: 3, expressive: 5, boundary: 2, order: 1, care: 3 },
    description: "你像花园里轻快走过的三花猫，表情和情绪都很鲜活。你能把普通日子讲得有颜色，也会自然地带动身边气氛。",
    advice: "你的表达很有感染力。记得把舞台灯也照一点给自己。",
    corner: "有植物、有朋友、有光斑洒进来的小院子。",
  },
  {
    id: "desk-black",
    title: "书桌黑猫",
    image: "assets/cats/desk-black.png",
    tags: ["独立", "秩序", "专注"],
    profile: { comfort: 2, curiosity: 2, expressive: 1, boundary: 4, order: 5, care: 1 },
    description: "你像一只守在书桌旁的黑猫，安静、清醒、很有自己的判断。你不喜欢无效消耗，专注起来会有一种漂亮的稳定感。",
    advice: "规则能保护你，但偶尔也允许计划被柔软地打断。",
    corner: "整洁书桌、固定杯垫、刚好够亮的一盏灯。",
  },
  {
    id: "cloud-longhair",
    title: "云朵长毛猫",
    image: "assets/cats/cloud-longhair.png",
    tags: ["想象力强", "柔软", "需要安全感"],
    profile: { comfort: 5, curiosity: 3, expressive: 2, boundary: 3, order: 1, care: 3 },
    description: "你像一朵会呼吸的长毛猫云，外表柔软，心里却装着很多画面。你需要安全感，一旦安心，就会长出很美的想象力。",
    advice: "别嫌自己需要确认。被安放好之后，你会变得很有创造力。",
    corner: "云朵毯、低矮软椅、能发呆也能做梦的位置。",
  },
  {
    id: "street-tortoiseshell",
    title: "街角玳瑁",
    image: "assets/cats/street-tortoiseshell.png",
    tags: ["有主见", "边界强", "不随波逐流"],
    profile: { comfort: 1, curiosity: 3, expressive: 2, boundary: 5, order: 3, care: 1 },
    description: "你像街角玳瑁猫，有自己的路线、节奏和判断。你不一定解释很多，但很清楚什么可以、什么不行。",
    advice: "你的锋利很珍贵。偶尔让可信的人看见柔软那面，也不会削弱你。",
    corner: "能看见来路的角落、方便离开的位置和一条自己的路线。",
  },
  {
    id: "nap-siamese",
    title: "午睡暹罗",
    image: "assets/cats/nap-siamese.png",
    tags: ["表达直接", "黏人", "反应快"],
    profile: { comfort: 2, curiosity: 3, expressive: 5, boundary: 1, order: 2, care: 3 },
    description: "你像午睡醒来的暹罗猫，反应快、表达直接，喜欢把在意说出来。你的存在感很鲜明，也很容易让关系升温。",
    advice: "想靠近就靠近，但也给对方一点反应时间。",
    corner: "阳光地毯、近在手边的人、可以随时开口的位置。",
  },
  {
    id: "bread-british",
    title: "面包英短",
    image: "assets/cats/bread-british.png",
    tags: ["稳定", "务实", "低消耗陪伴"],
    profile: { comfort: 5, curiosity: 1, expressive: 1, boundary: 3, order: 4, care: 2 },
    description: "你像一只把自己烤得刚刚好的英短面包，稳定、实际、不爱折腾。你给人的陪伴感很低压，却很可靠。",
    advice: "舒服区是你的能量站，不是限制。准备好了再慢慢向外走。",
    corner: "干净餐桌边、厚坐垫、温热但不吵闹的地方。",
  },
  {
    id: "star-kitten",
    title: "星星小奶猫",
    image: "assets/cats/star-kitten.png",
    tags: ["好奇", "真诚", "变化接受度高"],
    profile: { comfort: 2, curiosity: 5, expressive: 3, boundary: 1, order: 1, care: 2 },
    description: "你像一只眼睛亮亮的小奶猫，对世界还有很多新鲜的相信。你愿意尝试，也愿意把真实反应写在脸上。",
    advice: "保持天真，也给自己学会拒绝的机会。",
    corner: "玩具散落的小地毯、纸箱、任何能发现惊喜的地方。",
  },
];

const state = {
  view: "home",
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  resultId: null,
};

const homeScreen = document.querySelector("#home-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const questionCount = document.querySelector("#question-count");
const answeredCount = document.querySelector("#answered-count");
const progressBar = document.querySelector("#progress-bar");
const questionNumber = document.querySelector("#question-number");
const questionTitle = document.querySelector("#question-title");
const optionsElement = document.querySelector("#options");
const resultTitle = document.querySelector("#result-title");
const resultImage = document.querySelector("#result-image");
const resultTags = document.querySelector("#result-tags");
const resultDescription = document.querySelector("#result-description");
const resultAdvice = document.querySelector("#result-advice");
const resultCorner = document.querySelector("#result-corner");
const shareButton = document.querySelector("#share-button");
const shareFeedback = document.querySelector("#share-feedback");

const addScores = (target, scores, multiplier = 1) => {
  dimensions.forEach((dimension) => {
    target[dimension] += (scores[dimension] || 0) * multiplier;
  });
};

const emptyScores = () =>
  dimensions.reduce((scores, dimension) => ({ ...scores, [dimension]: 0 }), {});

const getSelectedOption = (questionIndex) => {
  const answerId = state.answers[questionIndex];
  return questions[questionIndex].options.find((option) => option.id === answerId);
};

const calculateScores = () => {
  const total = emptyScores();
  const recent = emptyScores();

  state.answers.forEach((answerId, index) => {
    const option = questions[index].options.find((item) => item.id === answerId);
    if (!option) return;
    addScores(total, option.scores);
    if (index >= questions.length - 3) {
      addScores(recent, option.scores);
    }
  });

  return { total, recent };
};

const calculateResult = () => {
  const { total, recent } = calculateScores();

  return results
    .map((result) => {
      const score = dimensions.reduce((sum, dimension) => {
        const base = total[dimension] * result.profile[dimension];
        const tieBreaker = recent[dimension] * result.profile[dimension] * 0.35;
        return sum + base + tieBreaker;
      }, 0);
      return { ...result, score };
    })
    .sort((a, b) => b.score - a.score)[0];
};

const saveState = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || !Array.isArray(stored.answers)) return;
    state.view = stored.view || "home";
    state.currentQuestion = Number.isInteger(stored.currentQuestion) ? stored.currentQuestion : 0;
    state.answers = questions.map((_, index) => stored.answers[index] || null);
    state.resultId = stored.resultId || null;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
};

const showScreen = (view) => {
  state.view = view;
  homeScreen.classList.toggle("is-hidden", view !== "home");
  quizScreen.classList.toggle("is-hidden", view !== "quiz");
  resultScreen.classList.toggle("is-hidden", view !== "result");
};

const renderQuestion = () => {
  const question = questions[state.currentQuestion];
  const selectedOption = getSelectedOption(state.currentQuestion);
  const answeredTotal = state.answers.filter(Boolean).length;
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  questionCount.textContent = `Q${state.currentQuestion + 1} / Q${questions.length}`;
  answeredCount.textContent = `已选 ${answeredTotal}/${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionNumber.textContent = state.currentQuestion + 1;
  questionTitle.textContent = question.text;
  nextButton.textContent = state.currentQuestion === questions.length - 1 ? "查看结果" : "下一题";
  nextButton.disabled = !selectedOption;
  prevButton.disabled = state.currentQuestion === 0;

  optionsElement.innerHTML = question.options
    .map(
      (option) => `
        <label class="option-card${option.id === selectedOption?.id ? " is-selected" : ""}">
          <input
            type="radio"
            name="question-${state.currentQuestion}"
            value="${option.id}"
            ${option.id === selectedOption?.id ? "checked" : ""}
          >
          <span class="option-letter">${option.id}</span>
          <span class="option-text">${option.text}</span>
        </label>
      `
    )
    .join("");
};

const renderResult = (result) => {
  resultTitle.textContent = result.title;
  resultImage.src = result.image;
  resultImage.alt = `${result.title}的水彩风小猫插画`;
  resultTags.textContent = result.tags.join(" / ");
  resultDescription.textContent = result.description;
  resultAdvice.textContent = result.advice;
  resultCorner.textContent = result.corner;
  shareFeedback.textContent = "";
};

const getCurrentResult = () =>
  results.find((item) => item.id === state.resultId) || calculateResult();

const getShareText = (result) =>
  `我在喵格实验室测出了「${result.title}」：${result.tags.join(" / ")}。${result.description}`;

const copyShareText = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
};

const goToQuestion = (index) => {
  state.currentQuestion = Math.min(Math.max(index, 0), questions.length - 1);
  state.resultId = null;
  showScreen("quiz");
  renderQuestion();
  saveState();
};

const showResult = () => {
  const result = calculateResult();
  state.resultId = result.id;
  showScreen("result");
  renderResult(result);
  saveState();
};

startButton.addEventListener("click", () => {
  state.answers = Array(questions.length).fill(null);
  goToQuestion(0);
});

optionsElement.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='radio']")) return;
  state.answers[state.currentQuestion] = event.target.value;
  state.resultId = null;
  renderQuestion();
  saveState();
});

prevButton.addEventListener("click", () => {
  goToQuestion(state.currentQuestion - 1);
});

nextButton.addEventListener("click", () => {
  if (!getSelectedOption(state.currentQuestion)) return;
  if (state.currentQuestion === questions.length - 1) {
    showResult();
    return;
  }
  goToQuestion(state.currentQuestion + 1);
});

restartButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  state.view = "home";
  state.currentQuestion = 0;
  state.answers = Array(questions.length).fill(null);
  state.resultId = null;
  showScreen("home");
});

shareButton.addEventListener("click", async () => {
  const result = getCurrentResult();
  const text = getShareText(result);
  const shareData = {
    title: `我的小猫人格是${result.title}`,
    text,
    url: location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      shareFeedback.textContent = "分享面板已打开。";
      return;
    }

    await copyShareText(text);
    shareFeedback.textContent = "已复制结果文案，可以发给朋友啦。";
  } catch {
    shareFeedback.textContent = "分享没有完成，可以再点一次试试。";
  }
});

loadState();

if (state.view === "result" && state.resultId) {
  const result = results.find((item) => item.id === state.resultId) || calculateResult();
  showScreen("result");
  renderResult(result);
} else if (state.view === "quiz") {
  goToQuestion(state.currentQuestion);
} else {
  showScreen("home");
}

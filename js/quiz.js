/*
 * 質問フロー・状態管理・DOM描画。マッチングは match.js、結果描画は render.js に委譲する。
 */

const QUESTIONS = [
  {
    id: "time_commitment",
    title: "1日にどれくらい時間を使えますか？",
    options: [
      { value: "under_30min", label: "30分未満" },
      { value: "1_2h", label: "1〜2時間" },
      { value: "3h_plus", label: "3時間以上" },
      { value: "weekend_only", label: "週末だけまとめて" },
    ],
  },
  {
    id: "budget",
    title: "初期費用をかけられますか？",
    options: [
      { value: "none", label: "かけたくない" },
      { value: "under_10k", label: "1万円未満ならOK" },
      { value: "over_10k", label: "数万円まで投資できる" },
    ],
  },
  {
    id: "social_preference",
    title: "人と関わる仕事は好きですか？",
    options: [
      { value: "people_person", label: "人と話すのが好き" },
      { value: "solo_worker", label: "一人で黙々と作業したい" },
      { value: "either", label: "どちらでも" },
    ],
  },
  {
    id: "skill",
    title: "得意なことは？",
    options: [
      { value: "writing", label: "文章を書くこと" },
      { value: "design", label: "デザイン・絵を描くこと" },
      { value: "data", label: "データ・数字を扱うこと" },
      { value: "communication", label: "接客・コミュニケーション" },
      { value: "physical", label: "体を動かす作業" },
      { value: "none", label: "特にない" },
    ],
  },
  {
    id: "purpose",
    title: "今回いちばんの目的は？",
    options: [
      { value: "quick_cash", label: "今すぐ収入が欲しい" },
      { value: "skill_up", label: "将来のスキルアップにしたい" },
      { value: "hobby", label: "趣味を活かしたい" },
      { value: "independence", label: "経験を積んで独立したい" },
    ],
  },
];

const state = { index: 0, answers: {} };

const screens = {
  intro: document.getElementById("screen-intro"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result"),
};
const quizCard = document.getElementById("quiz-card");
const progressBar = document.getElementById("progress-bar");
const progressLabel = document.getElementById("progress-label");
const backBtn = document.getElementById("btn-back");
const resultSummaryEl = document.getElementById("result-summary");
const resultListEl = document.getElementById("result-list");

function showScreen(name) {
  Object.keys(screens).forEach((key) => {
    screens[key].hidden = key !== name;
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function renderQuestion() {
  const q = QUESTIONS[state.index];
  progressLabel.textContent = `質問 ${state.index + 1} / ${QUESTIONS.length}`;
  progressBar.style.width = `${Math.round((state.index / QUESTIONS.length) * 100)}%`;
  backBtn.hidden = state.index === 0;

  let html = `<p class="quiz-question">${escapeHtml(q.title)}</p>`;
  html += `<div class="quiz-options">${q.options
    .map((o) => `<button type="button" class="quiz-option" data-value="${escapeHtml(o.value)}">${escapeHtml(o.label)}</button>`)
    .join("")}</div>`;

  quizCard.innerHTML = html;

  quizCard.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers[q.id] = btn.dataset.value;
      goNext();
    });
  });
}

function goNext() {
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function goBack() {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
}

function finishQuiz() {
  progressBar.style.width = "100%";
  const matchResult = matchGenres(GENRES, state.answers);
  renderResults(resultSummaryEl, resultListEl, matchResult, state.answers);
  showScreen("result");
}

function startQuiz() {
  state.index = 0;
  state.answers = {};
  showScreen("quiz");
  renderQuestion();
}

function restartQuiz() {
  showScreen("intro");
}

document.getElementById("btn-start").addEventListener("click", startQuiz);
document.getElementById("btn-back").addEventListener("click", goBack);
document.getElementById("btn-restart").addEventListener("click", restartQuiz);

showScreen("intro");

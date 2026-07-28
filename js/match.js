/*
 * マッチングエンジン。DOM・windowの状態には触れない純粋関数のみで構成する
 * (将来React等へ移植する際にロジックだけ持っていけるようにするため)。
 */

function scoreGenre(genre, answers) {
  const tags = genre.tags || {};
  let score = 0;
  let hardFail = false;
  let needsReview = false;

  // 得意なこと: 最重要視
  const skillTags = tags.skill || [];
  if (skillTags.includes(answers.skill)) {
    score += 4;
  }

  // 目的: 一致すれば加点(除外はしない)
  const purposeTags = tags.purpose || [];
  if (purposeTags.includes(answers.purpose)) {
    score += 3;
  }

  // 使える時間: ソフト加点のみ
  const timeTags = tags.time_commitment || [];
  if (timeTags.includes(answers.time_commitment)) {
    score += 1;
  }

  // 初期費用: 必要なジャンルで「かけたくない」を選んだ場合はハード除外
  if (tags.requires_budget) {
    if (answers.budget === "none") {
      hardFail = true;
    } else {
      score += 1;
    }
  }

  // 人と関わる仕事が好きか: ソフト加点
  const socialTags = tags.social_preference && tags.social_preference.length > 0 ? tags.social_preference : ["either"];
  if (socialTags.includes("either") || socialTags.includes(answers.social_preference)) {
    score += 1;
  }

  return Object.assign({}, genre, { score, hardFail, needsReview });
}

/**
 * @param {Array} genres - data.js の GENRES 配列
 * @param {Object} answers - quiz.js が集めた回答オブジェクト
 * @returns {{ results: Array, relaxed: boolean }}
 */
function matchGenres(genres, answers) {
  const primary = genres.map((g) => scoreGenre(g, answers)).filter((g) => !g.hardFail);

  if (primary.length > 0) {
    primary.sort((a, b) => b.score - a.score || (b.priority || 0) - (a.priority || 0));
    return { results: primary, relaxed: false };
  }

  // 0件時のフォールバック: 初期費用の条件だけ緩めて再提示する
  const relaxedAnswers = Object.assign({}, answers, { budget: "over_10k" });
  const relaxed = genres.map((g) => scoreGenre(g, relaxedAnswers)).filter((g) => !g.hardFail);
  relaxed.sort((a, b) => b.score - a.score || (b.priority || 0) - (a.priority || 0));
  return { results: relaxed, relaxed: true };
}

/*
 * 結果カードのDOM生成。マッチングスコアやタグから見た目を組み立てるだけで、
 * データ取得・状態管理には関与しない。
 */

function starRating(score) {
  if (score >= 7) return "★★★";
  if (score >= 4) return "★★☆";
  return "★☆☆";
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function buildOfferLinks(genre) {
  const offers = genre.related_offers || [];
  if (offers.length === 0) return "";
  return offers
    .map(
      (o) =>
        `<a class="result-card__link result-card__link--offer" href="${escapeHtml(o.url)}" target="_blank" rel="noopener sponsored">${escapeHtml(o.label || "関連サービスを見る")}<span class="badge badge--pr">PR</span></a>`
    )
    .join("");
}

function buildCrossLinkBanner(genre, purpose) {
  const banners = [];
  if (genre.links_to_subsidy_checker && purpose === "skill_up") {
    banners.push(`<a class="cross-link-banner" href="../subsidy-checker/">このジャンルは教育訓練給付金の対象講座がある場合があります。給付金・補助金診断で確認する →</a>`);
  }
  if (purpose === "independence") {
    banners.push(`<a class="cross-link-banner" href="../career-checker/">将来的な独立・フリーランス転向に合いそうな転職エージェントも、転職エージェント診断で確認できます →</a>`);
  }
  if (purpose === "quick_cash") {
    banners.push(`<a class="cross-link-banner" href="../takehome-calculator/">本業の手取り額も手取り年収シミュレーターで確認しておくと安心です →</a>`);
  }
  banners.push(`<a class="cross-link-banner" href="../sidejob-tax-simulator/">副業でいくら税金が増えるか、確定申告が必要かを副業の税金シミュレーターで確認する →</a>`);
  return banners.join("");
}

function buildResultCard(genre, purpose) {
  const badges = [`<span class="badge">${escapeHtml(genre.category)}</span>`, `<span class="badge badge--accent">マッチ度 ${starRating(genre.score)}</span>`];
  if (genre.tags && genre.tags.requires_budget) {
    badges.push(`<span class="badge badge--warn">初期費用あり</span>`);
  }

  const platforms = genre.platforms || [];

  return `
    <article class="result-card">
      <div class="result-card__badges">${badges.join("")}</div>
      <h3 class="result-card__name">${escapeHtml(genre.name)}</h3>
      <p class="result-card__benefit">${escapeHtml(genre.income_text)}</p>
      <p class="result-card__org">初期費用目安: ${escapeHtml(genre.startup_cost_text)}</p>
      <p class="result-card__summary">${escapeHtml(genre.summary)}</p>
      <p class="result-card__conditions">${escapeHtml(genre.conditions_text)}</p>
      ${platforms.length > 0 ? `<p class="result-card__platforms">主なプラットフォーム: ${platforms.map(escapeHtml).join(" / ")}</p>` : ""}
      <div class="result-card__actions">
        ${buildOfferLinks(genre)}
      </div>
      ${buildCrossLinkBanner(genre, purpose)}
    </article>
  `;
}

/**
 * @param {HTMLElement} summaryEl
 * @param {HTMLElement} listEl
 * @param {{results: Array, relaxed: boolean}} matchResult
 * @param {Object} answers
 */
function renderResults(summaryEl, listEl, matchResult, answers) {
  const { results, relaxed } = matchResult;
  const purpose = answers ? answers.purpose : null;

  if (results.length === 0) {
    summaryEl.innerHTML = `
      <p class="result-summary__count">条件に合う副業ジャンルが見つかりませんでした</p>
      <p class="result-summary__note">回答内容を変えて、もう一度お試しください。</p>
    `;
    listEl.innerHTML = `<div class="result-empty">該当するジャンルがありませんでした。「もう一度診断する」からやり直せます。</div>`;
    return;
  }

  summaryEl.innerHTML = `
    <p class="result-summary__count">あなたに向いていそうな副業ジャンルが ${results.length} 件見つかりました</p>
    <p class="result-summary__note">${relaxed ? "初期費用の条件を緩めて表示しています。予算に応じて絞り込んでみてください。" : "マッチ度が高い順に表示しています。"}</p>
  `;

  listEl.innerHTML = results.map((g) => buildResultCard(g, purpose)).join("");
}

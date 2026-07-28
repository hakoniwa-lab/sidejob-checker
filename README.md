# 副業ジャンル診断アプリ MVP

5つの質問に答えるだけで、向いていそうな副業ジャンルを診断するWebアプリ。HAKONIWA LAB([[subsidy-checker]]と同じアーキテクチャ)の2本目のツール。ビルドツール不要のVanilla HTML/CSS/JS。

## ローカルでの動作確認

```
cd sidejob-checker
python -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開く。`index.html` を直接ダブルクリックしても動作する(`js/data.js` にデータを埋め込み済みのため `fetch` は使っていない)。

## ファイル構成

```
sidejob-checker/
├─ index.html          … 診断フォーム+結果表示のSPA本体
├─ css/style.css        … subsidy-checkerと同じCSS変数デザインシステム
├─ js/
│   ├─ data.js           … GENRES配列(data/genres.jsonのコピー、グローバル変数として埋め込み)
│   ├─ match.js           … タグベースのスコアリングによるマッチングエンジン(純粋関数、DOM非依存)
│   ├─ quiz.js            … 質問フロー・状態管理・DOM描画
│   └─ render.js          … 結果カードのDOM生成
└─ data/genres.json     … データの原本(人間が編集する場所)
```

## データの更新手順

1. `data/genres.json` を編集する。
2. 編集後、`js/data.js` を更新する:
   ```
   printf 'const GENRES = ' > js/data.js
   cat data/genres.json >> js/data.js
   printf ';\n' >> js/data.js
   ```
3. `node --check js/data.js` で構文チェック。

### tagsフィールドの語彙

- `skill`: `writing` / `design` / `data` / `communication` / `physical` / `none`
- `purpose`: `quick_cash` / `skill_up` / `hobby` / `independence`
- `time_commitment`: `under_30min` / `1_2h` / `3h_plus` / `weekend_only`
- `requires_budget`: 初期費用(仕入れ資金・材料費等)が実質必須なジャンルは `true`(`budget=none`回答時にハード除外される)
- `social_preference`: `people_person` / `solo_worker` / `either`

`links_to_subsidy_checker: true` を付けたジャンルは、回答の`purpose`が`skill_up`のとき、結果カードに[[subsidy-checker]](給付金・補助金診断アプリ)への相対リンク(`../subsidy-checker/`)が表示される。この相対パスは、両アプリがGitHub Pages上で兄弟リポジトリ(`hakoniwa-lab.github.io/subsidy-checker/` と `hakoniwa-lab.github.io/sidejob-checker/`)として公開されている前提で機能する。ローカルの別ポートサーバーでは正しく動作しないので、クロスリンクの実地確認はデプロイ後に行うこと。

収入目安・必要スキル等のデータは一般的な相場観として記述しており、公的制度のような一次情報検証は行っていない。断定的な数字ではなく幅を持たせた表現にしている。

## デプロイ

`sidejob-checker/` フォルダをそのまま `hakoniwa-lab` アカウント配下の新規リポジトリ(`hakoniwa-lab/sidejob-checker`)にpushし、GitHub Pages(ブランチ`main`・ルート)を有効化する。git commitのauthor設定は、このリポジトリのローカル`git config`で`hakoniwa-lab <309971408+hakoniwa-lab@users.noreply.github.com>`に設定すること(globalのペルソナ設定を変更しない)。

const GENRES = [
  {
    "id": "web-writing",
    "name": "Webライティング",
    "category": "文章・コンテンツ",
    "summary": "クラウドソーシングでWeb記事の執筆案件を受注する副業。未経験からでも始めやすく、実績を積むと単価が上がっていく。",
    "income_text": "月数千円〜数万円(初心者)、経験を積むと月5万円以上を目指す人も",
    "startup_cost_text": "基本無料(PC・ネット環境があればOK)",
    "conditions_text": "特別な資格は不要。継続的に文章を書く時間を確保できることが望ましい。",
    "tags": {
      "skill": ["writing"],
      "purpose": ["skill_up", "quick_cash", "independence"],
      "time_commitment": ["1_2h", "3h_plus", "weekend_only"],
      "requires_budget": false,
      "social_preference": ["solo_worker", "either"]
    },
    "platforms": ["クラウドワークス", "ランサーズ"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 1
  },
  {
    "id": "reselling",
    "name": "せどり・転売",
    "category": "物販",
    "summary": "安く仕入れた商品をフリマアプリやECサイトで販売し、差益を得る副業。仕入れ資金と保管スペースが必要。",
    "income_text": "月数千円〜、慣れると月10万円以上を狙う人も",
    "startup_cost_text": "仕入れ資金として数万円程度〜",
    "conditions_text": "商品リサーチ・在庫管理の手間がかかる。継続的な仕入れ資金が必要。",
    "tags": {
      "skill": ["data", "none"],
      "purpose": ["quick_cash", "independence"],
      "time_commitment": ["weekend_only", "3h_plus"],
      "requires_budget": true,
      "social_preference": ["solo_worker"]
    },
    "platforms": ["メルカリ", "Amazon", "ヤフオク"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 2
  },
  {
    "id": "web-development",
    "name": "プログラミング/Web制作",
    "category": "IT・スキル系",
    "summary": "ホームページ制作やアプリ開発の案件を請け負う副業。学習コストは高いが、スキルが身につけば単価も上がりやすい。",
    "income_text": "月数万円〜、経験を積むと月20万円以上を目指す人も",
    "startup_cost_text": "学習用の教材・スクール費用として数万〜数十万円かかる場合も",
    "conditions_text": "プログラミングスキルの習得(独学またはスクール)が前提。",
    "tags": {
      "skill": ["data", "writing"],
      "purpose": ["skill_up", "independence"],
      "time_commitment": ["3h_plus", "weekend_only"],
      "requires_budget": false,
      "social_preference": ["solo_worker", "either"]
    },
    "platforms": ["クラウドワークス", "ランサーズ", "ココナラ"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 1
  },
  {
    "id": "video-editing",
    "name": "動画編集",
    "category": "クリエイティブ",
    "summary": "YouTube動画やSNS用ショート動画の編集を代行する副業。動画編集ソフトのスキルが必要。",
    "income_text": "1本数千円〜、経験を積むと月10万円以上を目指す人も",
    "startup_cost_text": "編集ソフト代・PC性能への投資が必要な場合あり(数千円〜数万円)",
    "conditions_text": "動画編集ソフトの操作スキルが必要。納期を守る自己管理力も求められる。",
    "tags": {
      "skill": ["design"],
      "purpose": ["skill_up", "quick_cash"],
      "time_commitment": ["3h_plus", "weekend_only"],
      "requires_budget": false,
      "social_preference": ["solo_worker"]
    },
    "platforms": ["クラウドワークス", "ココナラ"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 2
  },
  {
    "id": "design-illustration",
    "name": "デザイン(バナー・イラスト)",
    "category": "クリエイティブ",
    "summary": "バナー広告やSNS用イラスト、ロゴ制作などを受注する副業。デザインスキル・センスを活かせる。",
    "income_text": "1件数千円〜、指名を受けるようになると単価が上がる",
    "startup_cost_text": "デザインソフト代(月額千円台〜)",
    "conditions_text": "デザインツール(Canva・Illustrator等)の操作スキルが必要。",
    "tags": {
      "skill": ["design"],
      "purpose": ["skill_up", "quick_cash", "hobby"],
      "time_commitment": ["1_2h", "3h_plus", "weekend_only"],
      "requires_budget": false,
      "social_preference": ["solo_worker"]
    },
    "platforms": ["ココナラ", "クラウドワークス"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 2
  },
  {
    "id": "data-entry",
    "name": "データ入力",
    "category": "事務・データ系",
    "summary": "名刺情報やアンケート結果などをExcel等に入力する副業。単純作業で始めやすい。",
    "income_text": "月数千円〜数万円程度",
    "startup_cost_text": "基本無料",
    "conditions_text": "特別なスキルは不要。正確さとコツコツ続ける根気が求められる。",
    "tags": {
      "skill": ["data", "none"],
      "purpose": ["quick_cash"],
      "time_commitment": ["under_30min", "1_2h"],
      "requires_budget": false,
      "social_preference": ["solo_worker"]
    },
    "platforms": ["クラウドワークス", "ランサーズ"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  },
  {
    "id": "survey-monitor",
    "name": "アンケートモニター",
    "category": "すきま時間系",
    "summary": "アンケートに回答してポイント・謝礼を得る副業。スマホひとつで空き時間にできる。",
    "income_text": "月数百円〜数千円程度(お小遣い稼ぎレベル)",
    "startup_cost_text": "無料",
    "conditions_text": "特別なスキルは不要。大きな収入にはなりにくい。",
    "tags": {
      "skill": ["none"],
      "purpose": ["quick_cash", "hobby"],
      "time_commitment": ["under_30min"],
      "requires_budget": false,
      "social_preference": ["solo_worker", "either"]
    },
    "platforms": ["マクロミル", "リサーチパネル"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  },
  {
    "id": "skill-share-instructor",
    "name": "スキルシェア講師",
    "category": "教える系",
    "summary": "語学・楽器・ビジネススキルなど自分の得意分野をオンライン講座として教える副業。",
    "income_text": "1コマ数千円〜、人気講師になると月数万円以上を目指す人も",
    "startup_cost_text": "基本無料(プラットフォーム登録のみ)",
    "conditions_text": "教えられる専門知識・経験が必要。人にわかりやすく説明するスキルも求められる。",
    "tags": {
      "skill": ["communication", "writing", "design", "data"],
      "purpose": ["skill_up", "independence", "hobby"],
      "time_commitment": ["weekend_only", "1_2h"],
      "requires_budget": false,
      "social_preference": ["people_person", "either"]
    },
    "platforms": ["ストアカ", "ココナラ"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 2
  },
  {
    "id": "handmade-sales",
    "name": "ハンドメイド販売",
    "category": "物販",
    "summary": "アクセサリーや雑貨などの手作り品をECサイトで販売する副業。趣味を収入につなげやすい。",
    "income_text": "月数千円〜、人気になると月数万円以上を目指す人も",
    "startup_cost_text": "材料費として数千円〜",
    "conditions_text": "制作スキルと継続的な材料仕入れが必要。",
    "tags": {
      "skill": ["design", "physical"],
      "purpose": ["hobby", "quick_cash"],
      "time_commitment": ["weekend_only", "3h_plus"],
      "requires_budget": true,
      "social_preference": ["solo_worker"]
    },
    "platforms": ["minne", "Creema"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  },
  {
    "id": "housekeeping",
    "name": "家事代行",
    "category": "実務・接客系",
    "summary": "掃除や料理など家事全般を代行するお仕事。体を動かすのが好きな人に向いている。",
    "income_text": "時給1000〜1800円程度が相場",
    "startup_cost_text": "基本無料",
    "conditions_text": "移動を伴う実働がメイン。体力とホスピタリティが求められる。",
    "tags": {
      "skill": ["physical", "communication"],
      "purpose": ["quick_cash"],
      "time_commitment": ["weekend_only", "3h_plus"],
      "requires_budget": false,
      "social_preference": ["people_person"]
    },
    "platforms": ["CaSy", "タスカジ"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  },
  {
    "id": "spot-work",
    "name": "単発・スポットワーク",
    "category": "すきま時間系",
    "summary": "単発バイト・スキマ時間アプリを使って、都合の良い時だけ働くスタイルの副業。",
    "income_text": "時給1000円台〜、案件によって幅がある",
    "startup_cost_text": "無料",
    "conditions_text": "特別なスキルは不要。当日〜数日前の応募で働ける手軽さが特徴。",
    "tags": {
      "skill": ["physical", "none"],
      "purpose": ["quick_cash"],
      "time_commitment": ["weekend_only", "3h_plus"],
      "requires_budget": false,
      "social_preference": ["either"]
    },
    "platforms": ["タイミー"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  },
  {
    "id": "mystery-shopper",
    "name": "覆面調査",
    "category": "すきま時間系",
    "summary": "飲食店や店舗を客として利用し、サービス品質をレポートする副業。",
    "income_text": "1件数百円〜数千円+飲食代等の一部還元",
    "startup_cost_text": "無料",
    "conditions_text": "観察力と、決められた項目をレポートにまとめる文章力が求められる。",
    "tags": {
      "skill": ["writing", "none"],
      "purpose": ["hobby", "quick_cash"],
      "time_commitment": ["weekend_only"],
      "requires_budget": false,
      "social_preference": ["either"]
    },
    "platforms": ["ファンくる"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  },
  {
    "id": "point-activity",
    "name": "ポイ活",
    "category": "すきま時間系",
    "summary": "ポイントサイト経由での買い物やサービス利用でポイントを貯める、最も手軽な副業の入口。",
    "income_text": "月数百円〜数千円程度",
    "startup_cost_text": "無料",
    "conditions_text": "大きな収入にはなりにくいが、リスクなく始められる。",
    "tags": {
      "skill": ["none"],
      "purpose": ["quick_cash", "hobby"],
      "time_commitment": ["under_30min"],
      "requires_budget": false,
      "social_preference": ["solo_worker", "either"]
    },
    "platforms": ["ハピタス", "モッピー"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 4
  },
  {
    "id": "sns-management",
    "name": "SNS運用代行",
    "category": "マーケティング系",
    "summary": "企業や個人事業主のSNSアカウントの投稿企画・運用を代行する副業。",
    "income_text": "月1〜3万円/アカウントが目安、複数掛け持ちで積み上げる人も",
    "startup_cost_text": "基本無料",
    "conditions_text": "SNSの投稿・分析スキル、継続的な投稿設計力が求められる。",
    "tags": {
      "skill": ["writing", "design", "communication"],
      "purpose": ["skill_up", "independence"],
      "time_commitment": ["1_2h", "3h_plus"],
      "requires_budget": false,
      "social_preference": ["either"]
    },
    "platforms": ["クラウドワークス", "ココナラ"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 2
  },
  {
    "id": "translation",
    "name": "翻訳",
    "category": "語学・スキル系",
    "summary": "語学力を活かして文書やWebサイトの翻訳を請け負う副業。",
    "income_text": "1文字・1単語単位の単価制、経験者は月数万円を目指すことも",
    "startup_cost_text": "基本無料",
    "conditions_text": "一定以上の語学力(英語・中国語等)が必要。",
    "tags": {
      "skill": ["writing", "data"],
      "purpose": ["skill_up", "independence"],
      "time_commitment": ["1_2h", "3h_plus"],
      "requires_budget": false,
      "social_preference": ["solo_worker"]
    },
    "platforms": ["クラウドワークス", "ランサーズ"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 2
  },
  {
    "id": "online-assistant",
    "name": "オンライン秘書/事務代行",
    "category": "事務・データ系",
    "summary": "スケジュール管理やメール対応など、経営者・フリーランスの事務作業をオンラインでサポートする副業。",
    "income_text": "時給1000〜2000円程度が相場",
    "startup_cost_text": "基本無料",
    "conditions_text": "基本的なPCスキル(Excel・メール対応等)とレスポンスの早さが求められる。",
    "tags": {
      "skill": ["data", "communication"],
      "purpose": ["quick_cash", "independence"],
      "time_commitment": ["1_2h", "3h_plus"],
      "requires_budget": false,
      "social_preference": ["either"]
    },
    "platforms": ["クラウドワークス", "フジ子さん"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  },
  {
    "id": "private-tutoring",
    "name": "個人指導(プログラミング/語学)",
    "category": "教える系",
    "summary": "プログラミングや語学を、オンラインでマンツーマン指導する副業。",
    "income_text": "1コマ2000〜5000円程度が目安",
    "startup_cost_text": "基本無料",
    "conditions_text": "指導する分野の専門知識と、わかりやすく教えるスキルが必要。",
    "tags": {
      "skill": ["communication", "data", "writing"],
      "purpose": ["skill_up", "independence"],
      "time_commitment": ["weekend_only", "1_2h"],
      "requires_budget": false,
      "social_preference": ["people_person"]
    },
    "platforms": ["ストアカ", "ココナラ"],
    "related_offers": [],
    "links_to_subsidy_checker": true,
    "priority": 2
  },
  {
    "id": "stock-photo-illustration",
    "name": "写真・イラスト販売(ストック素材)",
    "category": "クリエイティブ",
    "summary": "撮影した写真や描いたイラストをストック素材サイトに登録し、ダウンロードされるたびに収益を得る副業。",
    "income_text": "月数百円〜、人気素材が増えると積み上がっていく",
    "startup_cost_text": "カメラ・デザインソフト等、すでに持っている機材で始められることも多い",
    "conditions_text": "一定水準の撮影・制作スキルが必要。収益化まで時間がかかることが多い。",
    "tags": {
      "skill": ["design", "physical"],
      "purpose": ["hobby", "skill_up"],
      "time_commitment": ["weekend_only"],
      "requires_budget": false,
      "social_preference": ["solo_worker"]
    },
    "platforms": ["PIXTA", "Adobe Stock"],
    "related_offers": [],
    "links_to_subsidy_checker": false,
    "priority": 3
  }
]
;

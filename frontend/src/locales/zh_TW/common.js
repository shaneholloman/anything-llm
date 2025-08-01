// Anything with "null" requires a translation. Contribute to translation via a PR!
const TRANSLATIONS = {
  onboarding: {
    home: {
      title: "歡迎使用",
      getStarted: "開始使用",
    },
    llm: {
      title: "LLM 偏好",
      description:
        "AnythingLLM 可以與多家 LLM 提供商合作。這將是處理聊天的服務。",
    },
    userSetup: {
      title: "使用者設定",
      description: "配置您的使用者設定。",
      howManyUsers: "將有多少使用者使用此實例？",
      justMe: "只有我",
      myTeam: "我的團隊",
      instancePassword: "實例密碼",
      setPassword: "您想要設定密碼嗎？",
      passwordReq: "密碼必須至少包含 8 個字元。",
      passwordWarn: "保存此密碼很重要，因為沒有恢復方法。",
      adminUsername: "管理員帳號使用者名稱",
      adminUsernameReq:
        "使用者名稱必須至少為 6 個字元，並且只能包含小寫字母、數字、底線和連字號，不含空格。",
      adminPassword: "管理員帳號密碼",
      adminPasswordReq: "密碼必須至少包含 8 個字元。",
      teamHint:
        "預設情況下，您將是唯一的管理員。完成入職後，您可以創建和邀請其他人成為使用者或管理員。不要遺失您的密碼，因為只有管理員可以重置密碼。",
    },
    data: {
      title: "資料處理與隱私",
      description: "我們致力於在涉及您的個人資料時提供透明和控制。",
      settingsHint: "這些設定可以隨時在設定中重新配置。",
    },
    survey: {
      title: "歡迎使用 AnythingLLM",
      description: "幫助我們為您的需求打造 AnythingLLM。可選。",
      email: "您的電子郵件是什麼？",
      useCase: "您將如何使用 AnythingLLM？",
      useCaseWork: "用於工作",
      useCasePersonal: "用於個人使用",
      useCaseOther: "其他",
      comment: "您是如何聽說 AnythingLLM 的？",
      commentPlaceholder:
        "Reddit，Twitter，GitHub，YouTube 等 - 讓我們知道您是如何找到我們的！",
      skip: "跳過調查",
      thankYou: "感謝您的反饋！",
    },
    workspace: {
      title: "創建您的第一個工作區",
      description: "創建您的第一個工作區並開始使用 AnythingLLM。",
    },
  },
  common: {
    "workspaces-name": "工作區名稱",
    error: "錯誤",
    success: "成功",
    user: "使用者",
    selection: "模型選擇",
    saving: "儲存中...",
    save: "儲存修改",
    previous: "上一頁",
    next: "下一頁",
    optional: "可選",
    yes: "是",
    no: "否",
    search: "搜尋",
  },
  settings: {
    title: "系統設定",
    system: "一般設定",
    invites: "邀請管理",
    users: "使用者管理",
    workspaces: "工作區管理",
    "workspace-chats": "工作區對話紀錄",
    customization: "介面自訂",
    "api-keys": "開發者 API",
    llm: "大型語言模型 (LLM)",
    transcription: "語音轉錄",
    embedder: "向量嵌入器",
    "text-splitting": "文字分割與區塊化",
    "voice-speech": "語音與發音",
    "vector-database": "向量資料庫",
    embeds: "對話嵌入",
    "embed-chats": "對話嵌入紀錄",
    security: "安全性設定",
    "event-logs": "事件記錄",
    privacy: "隱私與資料",
    "ai-providers": "AI 服務提供者",
    "agent-skills": "智慧代理人技能",
    admin: "系統管理",
    tools: "工具",
    "experimental-features": "實驗性功能",
    contact: "聯絡支援",
    "browser-extension": "瀏覽器擴充功能",
    "system-prompt-variables": "系統提示變數",
    interface: "使用者介面偏好設定",
    branding: "品牌與白標設定",
    chat: "聊天室",
  },
  login: {
    "multi-user": {
      welcome: "歡迎使用",
      "placeholder-username": "使用者名稱",
      "placeholder-password": "密碼",
      login: "登入",
      validating: "驗證中...",
      "forgot-pass": "忘記密碼",
      reset: "重設",
    },
    "sign-in": {
      start: "登入您的",
      end: "帳號。",
    },
    "password-reset": {
      title: "重設密碼",
      description: "請在下方提供必要資訊以重設您的密碼。",
      "recovery-codes": "復原碼",
      "recovery-code": "復原碼 {{index}}",
      "back-to-login": "返回登入頁面",
    },
  },
  welcomeMessage: {
    part1:
      "歡迎使用 AnythingLLM，AnythingLLM 是由 Mintplex Labs 開發的開源 AI 工具，它能將任何內容轉換成可供查詢和對話的訓練模型對話機器人。AnythingLLM 採用 BYOK（自備金鑰）軟體模式，除了您想使用的服務之外，本軟體不收取任何訂閱費、費用或其他費用。",
    part2:
      "AnythingLLM 是將 OpenAI、GPT-4、LangChain、PineconeDB、ChromaDB 和其他強大 AI 產品整合在一起的最簡單方法，它能透過簡潔的套件，輕鬆地將您的生產力提高 100 倍。",
    part3:
      "AnythingLLM 可以完全在您的本機電腦上執行，而且使用極少的資源，您甚至不會注意到它的存在！不需要 GPU。同時也支援雲端和企業內部部署。\nAI 工具生態系統日新月異，AnythingLLM 讓使用變得更加簡單。",
    githubIssue: "在 GitHub 上建立 issue ",
    user1: "我該如何開始？",
    part4:
      "很簡單。所有資料集都組織成我們稱之為「工作區」的儲存區。工作區是檔案、文件、圖片、PDF 和其他檔案的儲存區，這些檔案將會被轉換成 LLM 可以理解並在對話中使用的格式。\n\n您可以隨時新增和移除檔案。",
    createWorkspace: "建立您的第一個工作區",
    user2: "這像是 AI Dropbox 之類的嗎？那對話功能呢？它是一個對話機器人嗎？",
    part5:
      "AnythingLLM 不僅是一個更聰明的 Dropbox。\n\nAnythingLLM 提供兩種與您的資料互動的方式：\n\n<i>查詢：</i> 您的對話將會根據工作區中可存取的文件內容，傳回資料或推論。新增更多文件到工作區會讓它變得更聰明！\n\n<i>對話：</i> 您的文件加上持續進行中的對話紀錄，兩者會同時貢獻給 LLM 的知識庫。這非常適合用於附加即時的文字資訊，或是修正 LLM 可能產生的誤解。\n\n您可以在<i>對話過程中</i>隨時切換這兩種模式！",
    user3: "哇，這聽起來很棒，讓我馬上試試看！",
    part6: "祝您使用愉快！",
    starOnGitHub: "在 GitHub 上給我們星星",
    contact: "聯絡 Mintplex Labs",
  },
  "new-workspace": {
    title: "新增工作區",
    placeholder: "我的工作區",
  },
  "workspaces—settings": {
    general: "一般設定",
    chat: "對話設定",
    vector: "向量資料庫",
    members: "成員管理",
    agent: "智慧代理人設定",
  },
  general: {
    vector: {
      title: "向量計數",
      description: "向量資料庫中的向量總數。",
    },
    names: {
      description: "這只會修改您工作區的顯示名稱。",
    },
    message: {
      title: "建議對話訊息",
      description: "自訂要建議給工作區使用者的訊息。",
      add: "新增訊息",
      save: "儲存訊息",
      heading: "請向我說明",
      body: "AnythingLLM 的優點",
    },
    pfp: {
      title: "助理個人檔案圖片",
      description: "自訂此工作區助理的個人檔案圖片。",
      image: "工作區圖片",
      remove: "移除工作區圖片",
    },
    delete: {
      title: "刪除工作區",
      description: "刪除此工作區及其所有資料。這將會為所有使用者刪除該工作區。",
      delete: "刪除工作區",
      deleting: "正在刪除工作區...",
      "confirm-start": "您即將刪除整個",
      "confirm-end":
        "工作區。這將會移除向量資料庫中的所有向量嵌入。\n\n原始檔案將保持不變。此動作無法復原。",
    },
  },
  chat: {
    llm: {
      title: "工作區 LLM 提供者",
      description:
        "此工作區將使用的特定 LLM 提供者與模型。預設情況下，它會使用系統 LLM 提供者和設定。",
      search: "搜尋所有 LLM 提供者",
    },
    model: {
      title: "工作區對話模型",
      description:
        "此工作區將使用的特定對話模型。如果空白，將使用系統 LLM 偏好設定。",
      wait: "-- 等待模型中 --",
    },
    mode: {
      title: "對話模式",
      chat: {
        title: "對話",
        "desc-start": "將會利用 LLM 的一般知識",
        and: "和",
        "desc-end": "找到的文件內容來提供答案。",
      },
      query: {
        title: "查詢",
        "desc-start": "將",
        only: "僅",
        "desc-end": "在找到文件內容時提供答案。",
      },
    },
    history: {
      title: "對話紀錄",
      "desc-start": "先前對話訊息數量，將會包含在回應的短期記憶體中。",
      recommend: "建議 20。",
      "desc-end": "根據訊息大小，任何超過 45 的數值都可能會導致對話持續失敗。",
    },
    prompt: {
      title: "提示詞",
      description:
        "將在此工作區中使用的提示詞。定義 AI 產生回應的上下文和指示。您應該提供精心設計的提示詞，以便 AI 可以產生相關且準確的回應。",
      history: {
        title: "系統提示歷史記錄",
        clearAll: "清除全部",
        noHistory: "沒有可用的系統提示歷史記錄",
        restore: "恢復",
        delete: "刪除",
        deleteConfirm: "您確定要刪除此歷史記錄項目嗎？",
        clearAllConfirm: "您確定要刪除所有歷史記錄嗎？此操作無法復原。",
        expand: "展開",
        publish: "發布到社群中心",
      },
    },
    refusal: {
      title: "查詢模式拒絕回應",
      "desc-start": "在",
      query: "查詢",
      "desc-end": "模式下，當找不到內容時，您可能需要傳回自訂的拒絕回應。",
      "tooltip-title": "我為什麼會看到這個?",
      "tooltip-description":
        "您處於查詢模式，此模式僅使用您文件中的資訊。切換到聊天模式以進行更靈活的對話，或點擊此處訪問我們的文件以了解更多關於聊天模式的資訊。",
    },
    temperature: {
      title: "LLM 溫度值",
      "desc-start": "此設定控制 LLM 回應的「創意度」。",
      "desc-end":
        "數值越高，創意度越高。對於某些模型，設定過高可能會導致不連貫的回應。",
      hint: "大多數 LLM 都有各種可接受的有效值範圍。請查詢您的 LLM 提供者以取得該資訊。",
    },
  },
  "vector-workspace": {
    identifier: "向量資料庫識別碼",
    snippets: {
      title: "最大內容片段數",
      description:
        "此設定控制每次對話或查詢時，將傳送至 LLM 的最大內容片段數量。",
      recommend: "建議值：4",
    },
    doc: {
      title: "文件相似度門檻",
      description:
        "來源被視為與對話相關所需的最低相似度。數值越高，來源與對話的相似度就必須越高。",
      zero: "無限制",
      low: "低 (相似度 ≥ .25)",
      medium: "中 (相似度 ≥ .50)",
      high: "高 (相似度 ≥ .75)",
    },
    reset: {
      reset: "重設向量資料庫",
      resetting: "清除向量中...",
      confirm:
        "您即將重設此工作區的向量資料庫。這將會移除目前所有已嵌入的向量。\n\n原始檔案將保持不變。此動作無法復原。",
      error: "無法重設工作區向量資料庫！",
      success: "工作區向量資料庫已重設！",
    },
  },
  agent: {
    "performance-warning":
      "不直接支援工具呼叫的 LLM 的效能，高度取決於模型的功能和精確度。某些功能可能受限或無法使用。",
    provider: {
      title: "工作區智慧代理人 LLM 提供者",
      description: "此工作區 @agent 智慧代理人將使用的特定 LLM 提供者與模型。",
    },
    mode: {
      chat: {
        title: "工作區智慧代理人對話模型",
        description: "此工作區 @agent 智慧代理人將使用的特定對話模型。",
      },
      title: "工作區智慧代理人模型",
      description: "此工作區 @agent 智慧代理人將使用的特定 LLM 模型。",
      wait: "-- 等待模型中 --",
    },
    skill: {
      title: "預設智慧代理人技能",
      description:
        "使用這些預先建置的技能來強化預設智慧代理人的自然能力。此設定適用於所有工作區。",
      rag: {
        title: "RAG 與長期記憶體",
        description:
          "允許智慧代理人利用您的本機文件來回答查詢，或要求智慧代理人「記住」內容片段，以利長期記憶體擷取。",
      },
      view: {
        title: "檢視與摘要文件",
        description: "允許智慧代理人列出並摘要目前已嵌入的工作區檔案內容。",
      },
      scrape: {
        title: "擷取網站",
        description: "允許智慧代理人瀏覽並擷取網站內容。",
      },
      generate: {
        title: "產生圖表",
        description:
          "讓預設智慧代理人能夠根據提供的資料或對話中給定的資料來產生各種圖表。",
      },
      save: {
        title: "產生並儲存檔案到瀏覽器",
        description:
          "讓預設智慧代理人能夠產生並寫入檔案，這些檔案會儲存並可以從您的瀏覽器下載。",
      },
      web: {
        title: "即時網路搜尋與瀏覽",
        "desc-start":
          "讓您的智慧代理人能夠透過連線到網路搜尋 (SERP) 提供者來搜尋網路以回答您的問題。",
        "desc-end":
          "在設定完成之前，智慧代理人工作階段期間的網路搜尋將無法運作。",
      },
    },
  },
  recorded: {
    title: "工作區對話紀錄",
    description: "這些是所有已記錄的對話和訊息，依建立日期排序。",
    export: "匯出",
    table: {
      id: "編號",
      by: "傳送者",
      workspace: "工作區",
      prompt: "提示詞",
      response: "回應",
      at: "傳送時間",
    },
  },
  api: {
    title: "API 金鑰",
    description:
      "API 金鑰允許持有者以程式化方式存取和管理此 AnythingLLM 系統。",
    link: "閱讀 API 文件",
    generate: "產生新的 API 金鑰",
    table: {
      key: "API 金鑰",
      by: "建立者",
      created: "建立時間",
    },
  },
  llm: {
    title: "LLM 偏好設定",
    description:
      "這些是您偏好的 LLM 對話與嵌入提供者的憑證和設定。確保這些金鑰是最新且正確的，否則 AnythingLLM 將無法正常運作。",
    provider: "LLM 提供者",
    providers: {
      azure_openai: {
        azure_service_endpoint: "Azure 服務端點",
        api_key: "API 金鑰",
        chat_deployment_name: "聊天部署名稱",
        chat_model_token_limit: "聊天模型令牌限制",
        model_type: "模型類型",
        default: "預設",
        reasoning: "推理",
      },
    },
  },
  transcription: {
    title: "語音轉錄模型偏好設定",
    description:
      "這些是您偏好的語音轉錄模型提供者的憑證和設定。確保這些金鑰是最新且正確的，否則媒體檔案和音訊將無法轉錄。",
    provider: "語音轉錄提供者",
    "warn-start":
      "在記憶體或處理器資源有限的電腦上使用本機 Whisper 模型，處理媒體檔案時可能會造成 AnythingLLM 停頓。",
    "warn-recommend": "我們建議至少 2GB 的記憶體，並且上傳小於 10MB 的檔案。",
    "warn-end": "內建模型將會在第一次使用時自動下載。",
  },
  embedding: {
    title: "向量嵌入偏好設定",
    "desc-start":
      "當使用原生不支援嵌入引擎的 LLM 時，您可能需要額外指定用於嵌入文字的憑證。",
    "desc-end":
      "嵌入是將文字轉換成向量的過程。這些憑證是用於將您的檔案和提示詞轉換成 AnythingLLM 可以處理的格式。",
    provider: {
      title: "向量嵌入提供者",
    },
  },
  text: {
    title: "文字分割與區塊化偏好設定",
    "desc-start":
      "有時您可能需要修改新文件在插入向量資料庫之前的預設分割和區塊化方式。",
    "desc-end":
      "只有在了解文字分割的運作方式及其副作用的情況下，才應該修改此設定。",
    size: {
      title: "文字區塊大小",
      description: "這是單一向量中可包含的最大字元長度。",
      recommend: "嵌入模型的最大長度為",
    },
    overlap: {
      title: "文字區塊重疊",
      description: "這是區塊化過程中，兩個相鄰文字區塊之間的最大字元重疊數。",
    },
  },
  vector: {
    title: "向量資料庫",
    description:
      "這些是您的 AnythingLLM 系統運作方式的憑證和設定。確保這些金鑰是最新且正確的，這點非常重要。",
    provider: {
      title: "向量資料庫提供者",
      description: "使用 LanceDB 不需要任何設定。",
    },
  },
  embeddable: {
    title: "可嵌入對話小工具",
    description:
      "可嵌入對話小工具是與單一工作區連結的公開對話介面。這讓您可以建置工作區，然後發布到全世界。",
    create: "建立嵌入",
    table: {
      workspace: "工作區",
      chats: "已傳送對話",
      active: "已啟用網域",
      created: "建立",
    },
  },
  "embed-chats": {
    title: "嵌入對話",
    export: "匯出",
    description: "這些是來自您已發布的任何嵌入內容的所有已記錄對話和訊息。",
    table: {
      embed: "嵌入",
      sender: "傳送者",
      message: "訊息",
      response: "回應",
      at: "傳送時間",
    },
  },
  multi: {
    title: "多使用者模式",
    description: "透過啟用多使用者模式來設定您的系統，以支援您的團隊。",
    enable: {
      "is-enable": "多使用者模式已啟用",
      enable: "啟用多使用者模式",
      description:
        "預設情況下，您將是唯一的管理員。身為管理員，您需要為所有新使用者或管理員建立帳號。請勿遺失您的密碼，因為只有管理員使用者可以重設密碼。",
      username: "管理員帳號使用者名稱",
      password: "管理員帳號密碼",
    },
    password: {
      title: "密碼保護",
      description:
        "使用密碼保護您的 AnythingLLM 系統。如果您忘記這個密碼，將沒有復原方法，因此請務必儲存此密碼。",
      "password-label": "實例密碼",
    },
  },
  event: {
    title: "事件記錄",
    description: "檢視此系統上發生的所有動作和事件，以進行監控。",
    clear: "清除事件記錄",
    table: {
      type: "事件類型",
      user: "使用者",
      occurred: "發生時間",
    },
  },
  privacy: {
    title: "隱私與資料處理",
    description:
      "這是您針對已連線的第三方供應商和 AnythingLLM 如何處理您的資料的設定。",
    llm: "LLM 選擇",
    embedding: "向量嵌入偏好設定",
    vector: "向量資料庫",
    anonymous: "已啟用匿名統計資訊",
  },
  connectors: {
    "search-placeholder": "搜尋資料連接器",
    "no-connectors": "未找到資料連接器。",
    github: {
      name: "GitHub 倉庫",
      description: "單擊即可匯入整個公共或私有的 GitHub 倉庫。",
      URL: "GitHub 倉庫網址",
      URL_explained: "您希望收集的 GitHub 倉庫網址。",
      token: "GitHub 存取權杖",
      optional: "可選",
      token_explained: "存取權杖以防止速率限制。",
      token_explained_start: "若沒有 ",
      token_explained_link1: "個人存取權杖",
      token_explained_middle:
        "，GitHub API 可能會因為速率限制而限制可收集的檔案數量。您可以 ",
      token_explained_link2: "創建一個臨時的存取權杖",
      token_explained_end: " 來避免此問題。",
      ignores: "忽略檔案",
      git_ignore:
        "以 .gitignore 格式列出以忽略特定檔案。每輸入一個條目後按 Enter 鍵保存。",
      task_explained: "完成後，所有檔案將可供嵌入到工作區中的檔案選擇器。",
      branch: "您希望收集檔案的分支。",
      branch_loading: "-- 載入可用分支 --",
      branch_explained: "您希望收集檔案的分支。",
      token_information:
        "若未填寫 <b>GitHub 存取權杖</b>，此資料連接器僅能收集倉庫的 <b>頂層</b> 檔案，因 GitHub 的公共 API 速率限制。",
      token_personal: "在此獲取免費的 GitHub 個人存取權杖。",
    },
    gitlab: {
      name: "GitLab 倉庫",
      description: "單擊即可匯入整個公共或私有的 GitLab 倉庫。",
      URL: "GitLab 倉庫網址",
      URL_explained: "您希望收集的 GitLab 倉庫網址。",
      token: "GitLab 存取權杖",
      optional: "可選",
      token_explained: "存取權杖以防止速率限制。",
      token_description: "選擇要從 GitLab API 中擷取的其他實體。",
      token_explained_start: "若沒有 ",
      token_explained_link1: "個人存取權杖",
      token_explained_middle:
        "，GitLab API 可能會因為速率限制而限制可收集的檔案數量。您可以 ",
      token_explained_link2: "創建一個臨時的存取權杖",
      token_explained_end: " 來避免此問題。",
      fetch_issues: "擷取問題作為文件",
      ignores: "忽略檔案",
      git_ignore:
        "以 .gitignore 格式列出以忽略特定檔案。每輸入一個條目後按 Enter 鍵保存。",
      task_explained: "完成後，所有檔案將可供嵌入到工作區中的檔案選擇器。",
      branch: "您希望收集檔案的分支",
      branch_loading: "-- 載入可用分支 --",
      branch_explained: "您希望收集檔案的分支。",
      token_information:
        "若未填寫 <b>GitLab 存取權杖</b>，此資料連接器僅能收集倉庫的 <b>頂層</b> 檔案，因 GitLab 的公共 API 速率限制。",
      token_personal: "在此獲取免費的 GitLab 個人存取權杖。",
    },
    youtube: {
      name: "YouTube 文字稿",
      description: "從連結匯入整個 YouTube 影片的文字稿。",
      URL: "YouTube 影片網址",
      URL_explained_start:
        "輸入任何 YouTube 影片的網址以擷取其文字稿。該影片必須擁有 ",
      URL_explained_link: "字幕",
      URL_explained_end: " 來提供文字稿。",
      task_explained: "完成後，文字稿將可供嵌入到工作區中的檔案選擇器。",
      language: "文字稿語言",
      language_explained: "選擇您希望收集的文字稿語言。",
      loading_languages: "-- 載入可用語言 --",
    },
    "website-depth": {
      name: "批量鏈接抓取器",
      description: "抓取網站及其子鏈接，直到設定的深度。",
      URL: "網站網址",
      URL_explained: "您希望抓取的網站網址。",
      depth: "抓取深度",
      depth_explained: "這是工作人員應從起始網址跟隨的子鏈接數量。",
      max_pages: "最大頁數",
      max_pages_explained: "最大抓取鏈接數量。",
      task_explained:
        "完成後，所有抓取的內容將可供嵌入到工作區中的檔案選擇器。",
    },
    confluence: {
      name: "Confluence",
      description: "單擊即可匯入整個 Confluence 頁面。",
      deployment_type: "Confluence 部署類型",
      deployment_type_explained:
        "確定您的 Confluence 實例是託管在 Atlassian 雲端還是自我託管。",
      base_url: "Confluence 基本網址",
      base_url_explained: "這是您的 Confluence 空間的基本網址。",
      space_key: "Confluence 空間金鑰",
      space_key_explained:
        "這是您 Confluence 實例使用的空間金鑰，通常以 ~ 開頭。",
      username: "Confluence 使用者名稱",
      username_explained: "您的 Confluence 使用者名稱",
      auth_type: "Confluence 認證類型",
      auth_type_explained: "選擇您希望用來存取 Confluence 頁面的認證類型。",
      auth_type_username: "使用者名稱和存取權杖",
      auth_type_personal: "個人存取權杖",
      token: "Confluence 存取權杖",
      token_explained_start:
        "您需要提供一個存取權杖以進行認證。您可以在此生成存取權杖",
      token_explained_link: "這裡",
      token_desc: "用於認證的存取權杖",
      pat_token: "Confluence 個人存取權杖",
      pat_token_explained: "您的 Confluence 個人存取權杖。",
      task_explained: "完成後，頁面內容將可供嵌入到工作區中的檔案選擇器。",
    },
    manage: {
      documents: "文件",
      "data-connectors": "資料連接器",
      "desktop-only":
        "編輯這些設定僅在桌面裝置上可用。請在桌面上訪問此頁面以繼續。",
      dismiss: "忽略",
      editing: "編輯中",
    },
    directory: {
      "my-documents": "我的文件",
      "new-folder": "新資料夾",
      "search-document": "搜尋文件",
      "no-documents": "無文件",
      "move-workspace": "移動到工作區",
      name: "名稱",
      "delete-confirmation":
        "您確定要刪除這些檔案和資料夾嗎？\n這將從系統中刪除這些檔案並自動從任何現有工作區中移除它們。\n此操作無法還原。",
      "removing-message":
        "正在刪除 {{count}} 文件和 {{folderCount}} 資料夾。請稍候。",
      "move-success": "成功移動 {{count}} 文件。",
      date: "日期",
      type: "類型",
      no_docs: "無文件",
      select_all: "全選",
      deselect_all: "取消全選",
      remove_selected: "移除選擇的項目",
      costs: "*一次性嵌入費用",
      save_embed: "儲存並嵌入",
    },
    upload: {
      "processor-offline": "文件處理器無法使用",
      "processor-offline-desc":
        "目前無法上傳您的檔案，因為文件處理器離線。請稍後再試。",
      "click-upload": "點擊上傳或拖放檔案",
      "file-types": "支援文字檔案、CSV、試算表、音頻檔案等！",
      "or-submit-link": "或提交一個鏈接",
      "placeholder-link": "https://example.com",
      fetching: "正在擷取...",
      "fetch-website": "擷取網站",
      "privacy-notice":
        "這些檔案將上傳到此 AnythingLLM 實例中的文件處理器。這些檔案不會發送或共享給第三方。",
    },
    pinning: {
      what_pinning: "什麼是文件固定？",
      pin_explained_block1:
        "當您在 AnythingLLM 中<b>固定</b>一個文件時，我們會將該文件的所有內容注入到您的提示窗口中，讓您的 LLM 完全理解。",
      pin_explained_block2:
        "這對於<b>大範圍模型</b>或對知識庫至關重要的小型文件效果最佳。",
      pin_explained_block3:
        "如果您沒有從 AnythingLLM 預設獲得理想的答案，那麼固定是一個輕鬆獲得更高質量答案的方法。",
      accept: "好的，明白了",
    },
    watching: {
      what_watching: "觀看文件有何作用？",
      watch_explained_block1:
        "當您在 AnythingLLM 中<b>觀看</b>一個文件時，我們會<i>自動</i>定期同步該文件的內容，並在每個管理該文件的工作區中自動更新內容。",
      watch_explained_block2:
        "此功能目前僅支持基於線上內容，無法用於手動上傳的文件。",
      watch_explained_block3_start: "您可以從 ",
      watch_explained_block3_link: "檔案管理器",
      watch_explained_block3_end: " 管理觀看的文件。",
      accept: "好的，明白了",
    },
    obsidian: {
      name: "Obsidian",
      description: "一鍵匯入 Obsidian 保險庫。",
      vault_location: "保險庫位置",
      vault_description:
        "選擇您的 Obsidian 保險庫資料夾以匯入所有筆記及其連接。",
      selected_files: "找到 {{count}} 個 Markdown 檔案",
      importing: "正在匯入保險庫...",
      import_vault: "匯入保險庫",
      processing_time: "這可能需要一段時間，具體取決於您的保險庫大小。",
      vault_warning: "為避免任何衝突，請確保您的 Obsidian 保險庫目前未開啟。",
    },
  },
  chat_window: {
    welcome: "歡迎使用您的新工作區。",
    get_started: "開始使用，您可以",
    get_started_default: "開始使用",
    upload: "上傳文件",
    or: "或",
    send_chat: "發送訊息。",
    send_message: "發送訊息",
    attach_file: "附加檔案到此對話",
    slash: "查看所有可用的斜線指令。",
    agents: "查看所有可用的聊天代理。",
    text_size: "變更文字大小。",
    microphone: "語音輸入提示。",
    send: "將提示訊息發送到工作區",
    attachments_processing: "附件正在處理中，請稍後...",
    tts_speak_message: "TTS 朗讀訊息",
    copy: "複製",
    regenerate: "重新",
    regenerate_response: "重新回應",
    good_response: "反應良好",
    more_actions: "更多操作",
    hide_citations: "隱藏引文",
    show_citations: "顯示引文",
    pause_tts_speech_message: "暫停訊息撥放 TTS 語音 ",
    fork: "分叉",
    delete: "刪除",
    save_submit: "提交保存",
    cancel: "取消",
    edit_prompt: "編輯問題",
    edit_response: "編輯回應",
    at_agent: "代理",
    default_agent_description: " - 此工作區的預設代理。",
    custom_agents_coming_soon: "自訂代理功能即將推出！",
    slash_reset: "/reset",
    preset_reset_description: "清除聊天紀錄並開始新的聊天",
    add_new_preset: "新增預設",
    command: "指令",
    your_command: "你的指令",
    placeholder_prompt: "提示範例",
    description: "描述",
    placeholder_description: "描述範例",
    save: "儲存",
    small: "小",
    normal: "一般",
    large: "大",
    workspace_llm_manager: {
      search: "搜尋",
      loading_workspace_settings: "正在載入工作區設定",
      available_models: "可用模型",
      available_models_description: "可用模型說明",
      save: "儲存",
      saving: "正在儲存",
      missing_credentials: "缺少憑證",
      missing_credentials_description: "缺少憑證說明",
    },
  },
  profile_settings: {
    edit_account: "編輯帳戶",
    profile_picture: "個人資料圖片",
    remove_profile_picture: "移除個人資料圖片",
    username: "使用者名稱",
    username_description:
      "使用者名稱必須只包含小寫字母、數字、底線和連字號，且沒有空格",
    new_password: "新密碼",
    password_description: "密碼長度必須至少為 8 個字元",
    cancel: "取消",
    update_account: "更新帳戶",
    theme: "主題偏好",
    language: "偏好語言",
    failed_upload: "上傳個人資料圖片失敗：{{error}}",
    upload_success: "個人資料圖片已上傳。",
    failed_remove: "移除個人資料圖片失敗：{{error}}",
    profile_updated: "個人資料已更新。",
    failed_update_user: "更新使用者失敗：{{error}}",
    account: "帳戶",
    support: "支援",
    signout: "登出",
  },
  customization: {
    interface: {
      title: "介面偏好設定",
      description: "設定你在 AnythingLLM 的使用介面偏好。",
    },
    branding: {
      title: "品牌與白標設定",
      description: "使用自訂品牌設計將 AnythingLLM 白標化。",
    },
    chat: {
      title: "聊天",
      description: "設定你在 AnythingLLM 的聊天偏好。",
      auto_submit: {
        title: "語音輸入自動送出",
        description: "在靜音一段時間後自動送出語音輸入內容",
      },
      auto_speak: {
        title: "自動語音回應",
        description: "自動朗讀 AI 的回應內容",
      },
      spellcheck: {
        title: "拼字檢查功能",
        description: "在聊天輸入框中啟用或停用拼字檢查",
      },
    },
    items: {
      theme: {
        title: "主題",
        description: "選擇應用程式的顏色主題。",
      },
      "show-scrollbar": {
        title: "顯示捲軸",
        description: "在聊天視窗中啟用或停用捲軸。",
      },
      "support-email": {
        title: "支援信箱",
        description: "設定使用者在需要幫助時可以聯繫的支援電子信箱。",
      },
      "app-name": {
        title: "應用名稱",
        description: "設定所有使用者在登入頁面上看到的應用名稱。",
      },
      "chat-message-alignment": {
        title: "聊天訊息對齊方式",
        description: "選擇使用聊天介面時訊息的對齊模式。",
      },
      "display-language": {
        title: "顯示語言",
        description: "選擇 AnythingLLM 使用者介面的顯示語言（如有提供翻譯）。",
      },
      logo: {
        title: "品牌標誌",
        description: "上傳自訂標誌，顯示於所有頁面。",
        add: "新增自訂標誌",
        recommended: "建議尺寸：800 x 200",
        remove: "移除",
        replace: "更換",
      },
      "welcome-messages": {
        title: "歡迎訊息",
        description: "自訂顯示給使用者的歡迎訊息。只有非管理者會看到這些訊息。",
        new: "新增",
        system: "系統",
        user: "使用者",
        message: "訊息",
        assistant: "AnythingLLM 聊天助理",
        "double-click": "雙擊進行編輯...",
        save: "儲存訊息",
      },
      "browser-appearance": {
        title: "瀏覽器外觀",
        description: "自訂應用程式在瀏覽器分頁上的外觀與標題。",
        tab: {
          title: "分頁標題",
          description: "當應用程式在瀏覽器中開啟時設定自訂的分頁標題。",
        },
        favicon: {
          title: "網站圖示 (Favicon)",
          description: "為瀏覽器分頁設定自訂網站圖示。",
        },
      },
      "sidebar-footer": {
        title: "側邊欄底部項目",
        description: "自訂側邊欄底部顯示的項目。",
        icon: "圖示",
        link: "連結",
      },
    },
  },
  "main-page": {
    noWorkspaceError: "請先建立工作空間才能開始對話。",
    checklist: {
      title: "開始使用",
      tasksLeft: "個任務未完成",
      completed: "你已經走在成為AnythingLLM專家的路上！",
      dismiss: "關閉",
      tasks: {
        create_workspace: {
          title: "建立工作空間",
          description: "建立你的第一個工作空間來開始使用",
          action: "建立",
        },
        send_chat: {
          title: "發送對話",
          description: "開始與你的AI助理對話",
          action: "對話",
        },
        embed_document: {
          title: "嵌入文件",
          description: "將你的第一個文件添加到工作空間",
          action: "嵌入",
        },
        setup_system_prompt: {
          title: "設置系統提示",
          description: "設定你的AI助理的行為模式",
          action: "設置",
        },
        define_slash_command: {
          title: "定義斜線命令",
          description: "為你的助理創建自定義命令",
          action: "定義",
        },
        visit_community: {
          title: "訪問社群中心",
          description: "探索社群資源和模板",
          action: "瀏覽",
        },
      },
    },
    quickLinks: {
      title: "快速連結",
      sendChat: "發送對話",
      embedDocument: "嵌入文件",
      createWorkspace: "建立工作空間",
    },
    exploreMore: {
      title: "探索更多功能",
      features: {
        customAgents: {
          title: "自定義AI代理",
          description: "無需編碼即可建立強大的AI代理和自動化流程。",
          primaryAction: "使用@代理進行對話",
          secondaryAction: "建立代理流程",
        },
        slashCommands: {
          title: "斜線命令",
          description: "節省時間並使用自定義斜線命令注入提示。",
          primaryAction: "創建斜線命令",
          secondaryAction: "在中心探索",
        },
        systemPrompts: {
          title: "系統提示",
          description: "修改系統提示以自定義工作空間的AI回覆。",
          primaryAction: "修改系統提示",
          secondaryAction: "管理提示變數",
        },
      },
    },
    announcements: {
      title: "更新與公告",
    },
    resources: {
      title: "資源",
      links: {
        docs: "文檔",
        star: "在Github上加星標",
      },
      keyboardShortcuts: "鍵盤快捷鍵",
    },
  },
  "keyboard-shortcuts": {
    title: "鍵盤快捷鍵",
    shortcuts: {
      settings: "開啟設定",
      workspaceSettings: "開啟目前工作區設定",
      home: "前往首頁",
      workspaces: "管理工作區",
      apiKeys: "API 金鑰設定",
      llmPreferences: "LLM 偏好設定",
      chatSettings: "聊天設定",
      help: "顯示鍵盤快捷鍵說明",
      showLLMSelector: "顯示工作區 LLM 選擇器",
    },
  },
  community_hub: {
    publish: {
      system_prompt: {
        success_title: "成功！",
        success_description: "您的系統提示已發布到社群中心！",
        success_thank_you: "感謝您分享到社群！",
        view_on_hub: "在社群中心查看",
        modal_title: "發布系統提示",
        name_label: "名稱",
        name_description: "這是您系統提示的顯示名稱。",
        name_placeholder: "我的系統提示",
        description_label: "描述",
        description_description:
          "這是您系統提示的描述。用它來描述您系統提示的目的。",
        tags_label: "標籤",
        tags_description:
          "標籤用於標記您的系統提示，以便於搜尋。您可以添加多個標籤。最多 5 個標籤。每個標籤最多 20 個字元。",
        tags_placeholder: "輸入並按 Enter 鍵添加標籤",
        visibility_label: "可見性",
        public_description: "公共系統提示對所有人可見。",
        private_description: "私人系統提示僅對您可見。",
        publish_button: "發布到社群中心",
        submitting: "發布中...",
        submit: "發布到社群中心",
        prompt_label: "提示",
        prompt_description: "這是將用於引導 LLM 的實際系統提示。",
        prompt_placeholder: "在此輸入您的系統提示...",
      },
      agent_flow: {
        public_description: "公共代理流程對所有人可見。",
        private_description: "私人代理流程僅對您可見。",
        success_title: "成功！",
        success_description: "您的代理流程已發布到社群中心！",
        success_thank_you: "感謝您分享到社群！",
        view_on_hub: "在社群中心查看",
        modal_title: "發布代理流程",
        name_label: "名稱",
        name_description: "這是您代理流程的顯示名稱。",
        name_placeholder: "我的代理流程",
        description_label: "描述",
        description_description:
          "這是您代理流程的描述。用它來描述您代理流程的目的。",
        tags_label: "標籤",
        tags_description:
          "標籤用於標記您的代理流程，以便於搜尋。您可以添加多個標籤。最多 5 個標籤。每個標籤最多 20 個字元。",
        tags_placeholder: "輸入並按 Enter 鍵添加標籤",
        visibility_label: "可見性",
        publish_button: "發布到社群中心",
        submitting: "發布中...",
        submit: "發布到社群中心",
        privacy_note:
          "代理流程始終以上傳為私有，以保護任何敏感資料。您可以在發布後在社群中心更改可見性。請在發布前驗證您的流程不包含任何敏感或私人資訊。",
      },
      generic: {
        unauthenticated: {
          title: "需要驗證",
          description:
            "在發布項目之前，您需要通過 AnythingLLM 社群中心進行驗證。",
          button: "連接到社群中心",
        },
      },
      slash_command: {
        success_title: "成功！",
        success_description: "您的斜線指令已發佈到社群中心！",
        success_thank_you: "感謝您分享到社群！",
        view_on_hub: "在社群中心查看",
        modal_title: "發佈斜線指令",
        name_label: "名稱",
        name_description: "這是您斜線指令的顯示名稱。",
        name_placeholder: "我的斜線指令",
        description_label: "描述",
        description_description:
          "這是您斜線指令的描述。用它來描述您斜線指令的目的。",
        command_label: "指令",
        command_description: "這是使用者將輸入以觸發此預設的斜線指令。",
        command_placeholder: "我的命令",
        tags_label: "標籤",
        tags_description:
          "標籤用於標記您的斜線指令，以便於搜尋。您可以添加多個標籤。最多 5 個標籤。每個標籤最多 20 個字元。",
        tags_placeholder: "輸入並按 Enter 鍵添加標籤",
        visibility_label: "可見性",
        public_description: "公共斜線指令對所有人可見。",
        private_description: "私人斜線指令僅對您可見。",
        publish_button: "發佈到社群中心",
        submitting: "發佈中...",
        prompt_label: "提示",
        prompt_description: "這是觸發斜線指令時將使用的提示。",
        prompt_placeholder: "在此輸入您的提示...",
      },
    },
  },
};

export default TRANSLATIONS;

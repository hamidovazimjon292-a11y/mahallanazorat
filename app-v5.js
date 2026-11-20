const STORAGE_KEY = "mahalla_nazorat_state_v5";
const STAGES = ["Yangi", "O‘rganilmoqda", "Brigada yuborildi", "Hal qilindi"];
const CATEGORIES = ["Suv", "Elektr", "Yo‘l", "Gaz", "Yoritish"];

const DEFAULT_SECTION_ORDER = [
  { id: "actionBar", label: "Qidiruv va amallar paneli" },
  { id: "kpiGrid", label: "Umumiy statistika kartochkalari" },
  { id: "workspaceGrid", label: "Asosiy ish maydoni (Muammolar & Xarita)" },
  { id: "adminsSection", label: "Adminlar va Nazoratchilar boshqaruvi" },
  { id: "adminNotesReportSection", label: "Shaxsiy Eslatmalar va Kunlik Admin Hisoboti" },
  { id: "dutyPlanSection", label: "Haftalik Navbatchilik va Reja" },
  { id: "beforeAfterSection", label: "Oldin / Keyin galereyasi" },
  { id: "hotlinesSection", label: "Tezkor kontaktlar ma’lumotnomasi" },
  { id: "bottomGrid", label: "Mahallalar va Sozlamalar" }
];

const DEFAULT_STATE = {
  theme: "light",
  lang: "uz",
  fontScale: 1,
  autosave: true,
  layoutLocked: true,
  density: "comfortable",
  workspaceMode: "split",
  sectionOrder: DEFAULT_SECTION_ORDER.map((s) => s.id),
  currentAdminId: "adm-1",
  admins: [
    {
      id: "adm-1",
      name: "Hamdov A.",
      initials: "HA",
      phone: "+998 90 100-00-01",
      district: "Barcha tumanlar",
      role: "Katta Admin (To‘liq boshqaruv)",
      frozen: false,
      isSuper: true,
      commentsCount: 2,
      resolvedCount: 1
    },
    {
      id: "adm-2",
      name: "Dilnoza R.",
      initials: "DR",
      phone: "+998 90 234-56-78",
      district: "Chilonzor",
      role: "Admin (O‘qish & Nazorat)",
      frozen: false,
      isSuper: false,
      commentsCount: 1,
      resolvedCount: 0
    }
  ],
  personalNotes: {
    "adm-1": [
      { id: "n-1", text: "Yunusobod suv quvuri hisobotini tekshirish", done: false },
      { id: "n-2", text: "Haftalik navbatchilik jadvalini tasdiqlash", done: true }
    ],
    "adm-2": [
      { id: "n-3", text: "Chilonzor 6-mavze murojaatlarini ko‘rib chiqish", done: false }
    ]
  },
  dutySchedule: [
    { day: "Dushanba", team: "1-Brigada (Suv & Kanalizatsiya)", shift: "08:00 – 20:00", lead: "Olimjon K." },
    { day: "Seshanba", team: "2-Brigada (Elektr & Yoritish)", shift: "08:00 – 20:00", lead: "Javohir T." },
    { day: "Chorshanba", team: "3-Brigada (Gaz & Isitish)", shift: "08:00 – 20:00", lead: "Dilnoza R." },
    { day: "Payshanba", team: "4-Brigada (Yo‘l & Obodonlashtirish)", shift: "08:00 – 20:00", lead: "Madina N." },
    { day: "Juma–Yakshanba", team: "Navbatchi Nazorat Guruhi", shift: "24/7 Navbatchilik", lead: "Hamdov A." }
  ],
  planTasks: [
    { id: "t-1", text: "Yunusobod 4-mavze suv quvuri holatini qayta tekshirish", assignee: "Hamdov A.", done: true },
    { id: "t-2", text: "Chilonzor 6-mavze transformator yuklamasini o‘lchash", assignee: "Dilnoza R.", done: false },
    { id: "t-3", text: "Uchtepa Foziltepa ko‘chasi yoritish ustunlari bo‘yicha hisobot", assignee: "Hamdov A.", done: false }
  ],
  selectedCategory: "all",
  selectedDistrict: "all",
  selectedStatus: "all",
  selectedPriority: "all",
  selectedPreset: "all",
  selectedHotlineCat: "all",
  baMode: "compare",
  sortBy: "newest",
  searchQuery: "",
  activeMapPinId: "W-104",
  notifications: [
    { id: 1, text: "Yunusobod 4-mavzeda #W-104 suv quvuri bo‘yicha brigada safarbar etildi.", read: false },
    { id: 2, text: "Chilonzor 6-mavze #E-802 transformator muammosiga yangi ovozlar qo‘shildi.", read: false },
    { id: 3, text: "Yakkasaroyda gaz regulyatori sozlanib, Oldin/Keyin galereyasiga kiritildi.", read: false }
  ],
  hotlines: [
    {
      id: "h-suv",
      category: "Suv",
      title: "Shahar Suv Ta’minoti Avariya Xizmati",
      phone: "1055",
      avgResponse: "~25 daqiqa",
      schedule: "24/7 Navbatchilik",
      note: "Quvur yorilishi, suv oqishi va bosim muammolari"
    },
    {
      id: "h-elektr",
      category: "Elektr",
      title: "Hududiy Elektr Tarmoqlari Dispetcherligi",
      phone: "1154",
      avgResponse: "~30 daqiqa",
      schedule: "24/7 Navbatchilik",
      note: "Transformator, kabel uzilishi va kuchlanish pasayishi"
    },
    {
      id: "h-gaz",
      category: "Gaz",
      title: "Hududgaz Avariya va Xavfsizlik Xizmati",
      phone: "104",
      avgResponse: "~15 daqiqa",
      schedule: "24/7 Navbatchilik",
      note: "Gaz sizishi, bosim o‘zgarishi va tarmoq tekshiruvi"
    },
    {
      id: "h-yol",
      category: "Yo‘l",
      title: "Obodonlashtirish va Yo‘l Nazorati Markazi",
      phone: "+998 71 234-18-09",
      avgResponse: "~2 soat",
      schedule: "08:00 – 22:00",
      note: "Asfalt cho‘kishi, chuqurliklar va drenaj tozalash"
    },
    {
      id: "h-yoritish",
      category: "Yoritish",
      title: "Shahar Ko‘cha Yoritish Xizmati",
      phone: "+998 71 240-55-12",
      avgResponse: "~1.5 soat",
      schedule: "08:00 – 23:00",
      note: "Ko‘cha chiroqlari va yoritish ustunlarini tiklash"
    },
    {
      id: "h-mahalla",
      category: "Yo‘l",
      title: "Mahalla Infratuzilma Muvofiqlashtirish Markazi",
      phone: "1092",
      avgResponse: "~45 daqiqa",
      schedule: "09:00 – 21:00",
      note: "Jamoatchilik murojaatlari va mahalla nazorati"
    }
  ],
  beforeAfterItems: [
    {
      id: "BA-201",
      title: "Gaz bosimi va taqsimlash tarmog‘ini barqarorlashtirish",
      district: "Yakkasaroy",
      category: "Gaz",
      date: "18-Noyabr, 2026",
      service: "Hududgaz Toshkent",
      beforeText: "Kechki sovuq paytlarda gaz bosimi 35% gacha pasayib, isitish qozonlari o‘chib qolayotgan edi.",
      afterText: "Gaz taqsimlash punkti tekshirildi, filtr va regulyator almashtirildi, bosim to‘liq me’yorga qaytdi."
    },
    {
      id: "BA-198",
      title: "Mahalla ichki yo‘li va piyodalar yo‘lagini tekislash",
      district: "Mirzo Ulug‘bek",
      category: "Yo‘l",
      date: "14-Noyabr, 2026",
      service: "Obodonlashtirish boshqarmasi",
      beforeText: "Yo‘l qoplamasida chuqur o‘ra paydo bo‘lib, yomg‘irdan keyin piyodalar o‘tishiga qiyinchilik tug‘dirgan.",
      afterText: "Asfalt qoplamasi yangilandi, yo‘l cheti mustahkamlandi va suv oqib ketishi yo‘lga qo‘yildi."
    },
    {
      id: "BA-192",
      title: "Maktab yonidagi ko‘cha yoritish liniyasini tiklash",
      district: "Chilonzor",
      category: "Yoritish",
      date: "09-Noyabr, 2026",
      service: "Shahar Yoritish Xizmati",
      beforeText: "6 ta yoritish chirog‘i ishlamay, qorong‘i vaqtlarda maktab o‘quvchilari va aholi uchun xavf tug‘dirgan.",
      afterText: "Barcha LED chiroqlar va boshqaruv kabellari yangilandi, tungi yoritish to‘liq ishga tushdi."
    },
    {
      id: "BA-187",
      title: "Ichimlik suvi jo‘mragi va quvur ulanmasini almashtirish",
      district: "Yunusobod",
      category: "Suv",
      date: "03-Noyabr, 2026",
      service: "Toshkent Shahar Suv Ta’minoti",
      beforeText: "Eski ulanmadan doimiy suv sizib, ko‘p qavatli uy yerto‘lasiga namlik o‘tayotgan edi.",
      afterText: "Zamonaviy mufta va germetik ulanma o‘rnatildi, hudud quritilib nazoratga olindi."
    }
  ],
  issues: [
    {
      id: "W-104",
      title: "Suv quvuri yorilishi",
      category: "Suv",
      visualTag: "💧 Quvur / Suv tarmog‘i",
      district: "Yunusobod",
      address: "Yunusobod 4-mavze, 12-uy ro‘parasi",
      priority: "Juda Shoshilinch",
      status: "O‘rganilmoqda",
      service: "Toshkent Shahar Suv Ta’minoti",
      timeAgo: "30 daqiqa oldin",
      votes: 38,
      voted: false,
      x: 56,
      y: 26,
      readBy: ["adm-1"],
      description: "Ichimlik suvi quvuridan bosim bilan suv oqib, yo‘l chetini yuvib ketmoqda.",
      comments: [
        { author: "Mahalla raisi", text: "Avariya xizmatiga xabar berildi, mutaxassislar yo‘lda." }
      ]
    },
    {
      id: "E-802",
      title: "Transformator nosozligi",
      category: "Elektr",
      visualTag: "⚡ Transformator / Kabel",
      district: "Chilonzor",
      address: "Chilonzor 6-mavze, 8-ko‘p qavatli uy yonida",
      priority: "Muhim",
      status: "Brigada yuborildi",
      service: "Hududiy Elektr Tarmoqlari",
      timeAgo: "1 soat oldin",
      votes: 52,
      voted: true,
      x: 32,
      y: 66,
      readBy: ["adm-1", "adm-2"],
      description: "Kechki paytdan beri bir nechta xonadonda kuchlanish past bo‘lib, vaqti-vaqti bilan o‘chmoqda.",
      comments: [
        { author: "Navbatchi dispetcher", text: "Brigada 20 daqiqa ichida manzilga yetib boradi." }
      ]
    },
    {
      id: "I-059",
      title: "Yo‘ldagi chuqurlik va asfalt cho‘kishi",
      category: "Yo‘l",
      visualTag: "🛣️ Yo‘l qoplamasi / Chuqurlik",
      district: "Mirzo Ulug‘bek",
      address: "Qori Niyoziy ko‘chasi, maktab yaqinida",
      priority: "O‘rtacha",
      status: "Yangi",
      service: "Obodonlashtirish boshqarmasi",
      timeAgo: "2 soat oldin",
      votes: 24,
      voted: false,
      x: 74,
      y: 44,
      readBy: [],
      description: "Piyodalar o‘tish joyi yaqinida asfalt cho‘kkan, yomg‘irda suv to‘planmoqda.",
      comments: []
    },
    {
      id: "L-311",
      title: "Tungi yoritish ustunlari ishlamayapti",
      category: "Yoritish",
      visualTag: "💡 Ko‘cha yoritish ustuni",
      district: "Uchtepa",
      address: "Foziltepa ko‘chasi, bog‘cha yo‘lagi",
      priority: "Muhim",
      status: "Yangi",
      service: "Shahar Yoritish Xizmati",
      timeAgo: "3 soat oldin",
      votes: 19,
      voted: false,
      x: 24,
      y: 48,
      readBy: [],
      description: "Ketma-ket 4 ta yoritish ustuni kechasi yonmayapti, o‘quvchilar qorong‘ida qaytmoqda.",
      comments: []
    },
    {
      id: "G-215",
      title: "Gaz bosimi pasayishi tekshiruvi",
      category: "Gaz",
      visualTag: "🔥 Gaz quvuri / Bosim",
      district: "Yakkasaroy",
      address: "Bobur ko‘chasi, 44-uy atrofida",
      priority: "Juda Shoshilinch",
      status: "Hal qilindi",
      service: "Hududgaz Toshkent",
      timeAgo: "Kecha",
      votes: 45,
      voted: false,
      x: 48,
      y: 54,
      readBy: ["adm-1", "adm-2"],
      description: "Isitish mavsumida gaz bosimini me’yorga keltirish bo‘yicha murojaat ijobiy yakunlandi.",
      comments: [
        { author: "Nazoratchi", text: "Regulyator sozlandi, bosim barqarorlashdi." }
      ]
    }
  ],
  mahallas: [
    { name: "Yunusobod — Bog‘ishamol", lead: "Olimjon Karimov", phone: "+998 90 123-45-67" },
    { name: "Chilonzor — Katta Qozirabod", lead: "Dilnoza Rustamova", phone: "+998 90 234-56-78" },
    { name: "Mirzo Ulug‘bek — Lashkarbegi", lead: "Javohir Tursunov", phone: "+998 91 345-67-89" },
    { name: "Uchtepa — Foziltepa", lead: "Madina Nazarova", phone: "+998 93 456-78-90" }
  ]
};

let state = loadState();
let currentDetailIssueId = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    const validIds = DEFAULT_SECTION_ORDER.map((s) => s.id);
    const cleanOrder = Array.isArray(parsed.sectionOrder)
      ? [
          ...parsed.sectionOrder.filter((id) => validIds.includes(id)),
          ...validIds.filter((id) => !parsed.sectionOrder.includes(id))
        ]
      : DEFAULT_SECTION_ORDER.map((s) => s.id);
    return { ...structuredClone(DEFAULT_STATE), ...parsed, sectionOrder: cleanOrder };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  if (!state.autosave) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

function getCurrentAdmin() {
  return state.admins.find((a) => a.id === state.currentAdminId) || state.admins[0];
}

function ensureAdminNotFrozen(actionLabel = "Amalni bajarish") {
  const cur = getCurrentAdmin();
  if (cur && cur.frozen) {
    showToast(`❄️ ${cur.name} profili muzlatilgan! ${actionLabel} uchun avval faollashtiring.`);
    return false;
  }
  return true;
}

function showToast(message) {
  const toast = document.getElementById("toastBox");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

function applyLayoutAndSettings() {
  document.body.classList.toggle("dark-theme", state.theme === "dark");
  document.body.classList.toggle("compact-density", state.density === "compact");
  document.documentElement.style.setProperty("--font-scale", String(state.fontScale));

  const ws = document.getElementById("workspaceGrid");
  if (ws) ws.classList.toggle("stacked-mode", state.workspaceMode === "stacked");

  const wrapper = document.getElementById("mainWrapper");
  const footer = wrapper.querySelector(".footer");
  state.sectionOrder.forEach((secId) => {
    const el = wrapper.querySelector(`[data-section-id="${secId}"]`);
    if (el && footer) wrapper.insertBefore(el, footer);
  });

  const lockBtn = document.getElementById("lockLayoutBtn");
  const lockBadge = document.getElementById("layoutLockBadge");
  if (state.layoutLocked) {
    lockBtn.textContent = "🔒 Qulflangan";
    lockBtn.classList.remove("unlocked-state");
    lockBtn.classList.add("active-toggle");
    lockBadge.textContent = "🔒 Qulflangan";
    lockBadge.classList.remove("unlocked");
  } else {
    lockBtn.textContent = "🔓 Ochiq";
    lockBtn.classList.remove("active-toggle");
    lockBtn.classList.add("unlocked-state");
    lockBadge.textContent = "🔓 Tartiblash ochiq";
    lockBadge.classList.add("unlocked");
  }

  document.querySelectorAll(".density-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.density === state.density);
  });
  document.querySelectorAll(".ws-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.wsmode === state.workspaceMode);
  });

  document.getElementById("themeToggleBtn").textContent =
    state.theme === "dark" ? "☀️ Kunduzgi" : "🌙 Tungi";
  document.getElementById("langToggleBtn").textContent = state.lang === "uz" ? "O‘Z" : "UZ-LAT";

  const autosaveBtn = document.getElementById("autosaveToggleBtn");
  autosaveBtn.textContent = state.autosave ? "Yoqilgan" : "O‘chirilgan";
  autosaveBtn.classList.toggle("active-toggle", state.autosave);

  const curAdmin = getCurrentAdmin();
  const statusPill = document.getElementById("activeAdminStatusBadge");
  const frozenBanner = document.getElementById("frozenAdminBanner");

  if (curAdmin) {
    document.getElementById("currentUserName").textContent = curAdmin.name;
    document.getElementById("currentUserAvatar").textContent = curAdmin.initials || "AD";
    const statusLabel = curAdmin.frozen ? "Muzlatilgan" : curAdmin.role.split(" ")[0];
    document.getElementById("currentUserRole").textContent = `${statusLabel} • ${curAdmin.district}`;

    statusPill.textContent = curAdmin.frozen ? "❄️ Muzlatilgan" : "✓ Faol";
    statusPill.classList.toggle("frozen-pill", Boolean(curAdmin.frozen));
    statusPill.classList.toggle("active-pill", !curAdmin.frozen);
    frozenBanner.classList.toggle("hidden", !curAdmin.frozen);
  }

  renderSectionOrderControls();
}

function renderSectionOrderControls() {
  const container = document.getElementById("sectionOrderList");
  if (!container) return;
  const labelMap = Object.fromEntries(DEFAULT_SECTION_ORDER.map((s) => [s.id, s.label]));

  container.innerHTML = state.sectionOrder
    .map((secId, idx) => {
      const isFirst = idx === 0;
      const isLast = idx === state.sectionOrder.length - 1;
      const locked = state.layoutLocked;
      return `
        <div class="order-row">
          <span class="order-row-title">${idx + 1}. ${escapeHtml(labelMap[secId] || secId)}</span>
          <div class="order-btns">
            <button type="button" class="mini-btn move-sec-btn" data-sec="${secId}" data-dir="up" ${
              locked || isFirst ? "disabled" : ""
            } title="Yuqoriga">↑</button>
            <button type="button" class="mini-btn move-sec-btn" data-sec="${secId}" data-dir="down" ${
              locked || isLast ? "disabled" : ""
            } title="Pastga">↓</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function getFilteredIssues() {
  const q = state.searchQuery.trim().toLowerCase();
  const curAdmin = getCurrentAdmin();
  const priorityOrder = { "Juda Shoshilinch": 3, "Muhim": 2, "O‘rtacha": 1 };

  const list = state.issues.filter((item) => {
    const matchCat = state.selectedCategory === "all" || item.category === state.selectedCategory;
    const matchDist = state.selectedDistrict === "all" || item.district === state.selectedDistrict;
    const matchStatus = state.selectedStatus === "all" || item.status === state.selectedStatus;
    const matchPrio = state.selectedPriority === "all" || item.priority === state.selectedPriority;
    const matchQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.address.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q) ||
      item.district.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);

    let matchPreset = true;
    if (state.selectedPreset === "urgent") {
      matchPreset = item.priority === "Juda Shoshilinch";
    } else if (state.selectedPreset === "brigade") {
      matchPreset = item.status === "Brigada yuborildi";
    } else if (state.selectedPreset === "unread_admin") {
      matchPreset = !Array.isArray(item.readBy) || !item.readBy.includes(curAdmin?.id);
    }

    return matchCat && matchDist && matchStatus && matchPrio && matchQuery && matchPreset;
  });

  if (state.sortBy === "votes" || state.selectedPreset === "topvotes") {
    list.sort((a, b) => b.votes - a.votes);
  } else if (state.sortBy === "priority") {
    list.sort((a, b) => (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0));
  }
  return list;
}

function renderAll() {
  applyLayoutAndSettings();
  renderAdminSwitcherAndGrid();
  renderPersonalNotesAndDailyReport();
  renderKPIs();
  renderIssues();
  renderMap();
  renderCategoryChart();
  renderDistrictBars();
  renderReports();
  renderDutyAndTasks();
  renderBeforeAfter();
  renderHotlines();
  renderMahallas();
  renderNotifications();
  syncFilterControls();
  saveState();
}

function syncFilterControls() {
  document.querySelectorAll("#categoryTabs .cat-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === state.selectedCategory);
  });
  document.querySelectorAll("#presetBar .preset-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.preset === state.selectedPreset);
  });
  document.querySelectorAll("#hotlineFilterTabs .cat-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.hcat === state.selectedHotlineCat);
  });
  document.querySelectorAll("#baModeTabs .ba-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.baMode === state.baMode);
  });

  document.getElementById("topDistrictSelect").value = state.selectedDistrict;
  document.getElementById("statusFilter").value = state.selectedStatus;
  document.getElementById("priorityFilter").value = state.selectedPriority;
  document.getElementById("sortSelect").value = state.sortBy;
  document.getElementById("searchInput").value = state.searchQuery;
  document.getElementById("clearSearchBtn").classList.toggle("hidden", !state.searchQuery);
  document.getElementById("sidebarIssueCount").textContent = String(state.issues.length);
}

function renderAdminSwitcherAndGrid() {
  const select = document.getElementById("activeAdminSelect");
  select.innerHTML = state.admins
    .map(
      (a) =>
        `<option value="${a.id}" ${a.id === state.currentAdminId ? "selected" : ""}>${escapeHtml(a.name)}${
          a.frozen ? " [Muzlatilgan]" : ""
        }</option>`
    )
    .join("");

  const taskAssigneeSelect = document.getElementById("newTaskAssignee");
  taskAssigneeSelect.innerHTML = state.admins
    .map((a) => `<option value="${escapeHtml(a.name)}">${escapeHtml(a.name)}</option>`)
    .join("");

  document.getElementById("adminCountChip").textContent = `${state.admins.length} ta admin`;

  const totalIssues = state.issues.length;
  document.getElementById("adminsGrid").innerHTML = state.admins
    .map((adm) => {
      const readCount = state.issues.filter((i) => Array.isArray(i.readBy) && i.readBy.includes(adm.id)).length;
      const isActive = adm.id === state.currentAdminId;
      return `
        <div class="admin-member-card ${isActive ? "active-profile" : ""} ${adm.frozen ? "frozen-card" : ""}">
          <div>
            <div class="admin-badges-row">
              <span class="admin-role-tag">${escapeHtml(adm.role)}</span>
              <span class="admin-status-pill ${adm.frozen ? "frozen-pill" : "active-pill"}">
                ${adm.frozen ? "❄️ Muzlatilgan" : "✓ Faol"}
              </span>
            </div>
            <h3 class="issue-title">${escapeHtml(adm.name)} ${isActive ? "• (Faol)" : ""}</h3>
            <div class="muted-text">📍 ${escapeHtml(adm.district)} • 📞 ${escapeHtml(adm.phone || "Ko‘rsatilmagan")}</div>
            <div style="margin-top:8px; font-size:0.82rem; font-weight:600; color:var(--success);">
              O‘qilgan muammolar: ${readCount} / ${totalIssues} ta
            </div>
          </div>

          <div class="admin-card-actions">
            <button type="button" class="mini-btn switch-admin-btn" data-admin-id="${adm.id}">
              ${isActive ? "✓ Faol profil" : "Profilga kirish"}
            </button>
            ${
              !adm.isSuper
                ? `
                  <button type="button" class="mini-btn toggle-freeze-btn" data-freeze-id="${adm.id}">
                    ${adm.frozen ? "🔥 Faollashtirish" : "❄️ Muzlatish"}
                  </button>
                  <button type="button" class="mini-btn remove-admin-btn" data-remove-admin="${adm.id}">Olish</button>
                `
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");
}

function renderPersonalNotesAndDailyReport() {
  const curAdmin = getCurrentAdmin();
  if (!curAdmin) return;

  if (!Array.isArray(state.personalNotes[curAdmin.id])) {
    state.personalNotes[curAdmin.id] = [];
  }
  const notes = state.personalNotes[curAdmin.id];

  document.getElementById("notesOwnerLabel").textContent = curAdmin.name;
  document.getElementById("adminNotesCountChip").textContent = `${notes.length} ta eslatma`;

  const notesContainer = document.getElementById("personalNotesList");
  if (notes.length === 0) {
    notesContainer.innerHTML = `<div class="muted-text">Bu admin uchun hali shaxsiy eslatma yo‘q.</div>`;
  } else {
    notesContainer.innerHTML = notes
      .map(
        (n) => `
        <div class="note-row ${n.done ? "done-note" : ""}">
          <label class="task-left">
            <input type="checkbox" class="note-toggle-chk" data-note-id="${n.id}" ${n.done ? "checked" : ""} />
            <span class="note-text">${escapeHtml(n.text)}</span>
          </label>
          <button type="button" class="mini-btn del-note-btn" data-del-note="${n.id}">✕</button>
        </div>
      `
      )
      .join("");
  }

  // Kunlik admin hisoboti
  const todayStr = new Date().toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  document.getElementById("dailyReportDateLabel").textContent = todayStr;

  const totalIssues = state.issues.length || 1;
  document.getElementById("dailyAdminReportList").innerHTML = state.admins
    .map((adm) => {
      const readCount = state.issues.filter((i) => Array.isArray(i.readBy) && i.readBy.includes(adm.id)).length;
      const commentsCount = adm.commentsCount || 0;
      const resolvedCount = adm.resolvedCount || 0;
      const readPct = Math.round((readCount / totalIssues) * 100);

      return `
        <div class="daily-report-card">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
            <strong>${escapeHtml(adm.name)}</strong>
            <span class="admin-status-pill ${adm.frozen ? "frozen-pill" : "active-pill"}">
              ${adm.frozen ? "Muzlatilgan" : "Faol"}
            </span>
          </div>
          <div class="muted-text">${escapeHtml(adm.district)} • O‘qish ulushi: ${readPct}%</div>
          <div class="daily-metrics-grid">
            <div class="metric-chip">👁️ O‘qidi: <strong>${readCount}</strong></div>
            <div class="metric-chip">💬 Izoh: <strong>${commentsCount}</strong></div>
            <div class="metric-chip">✅ Yopdi: <strong>${resolvedCount}</strong></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderKPIs() {
  const total = state.issues.length;
  const resolved = state.issues.filter((i) => i.status === "Hal qilindi").length;
  const active = total - resolved;
  const votes = state.issues.reduce((sum, i) => sum + i.votes, 0);
  const pct = total > 0 ? Math.round((resolved / total) * 100) : 0;

  document.getElementById("kpiTotal").textContent = String(total);
  document.getElementById("kpiResolvedPct").textContent = `${pct}%`;
  document.getElementById("kpiResolvedCount").textContent = `${resolved} ta muammo bartaraf etildi`;
  document.getElementById("kpiActive").textContent = String(active);
  document.getElementById("kpiVotes").textContent = String(votes);
  document.getElementById("overallCompletionBadge").textContent = `${pct}% hal qilingan`;
}

function getPriorityClass(priority) {
  if (priority === "Juda Shoshilinch") return "priority-shoshilinch";
  if (priority === "Muhim") return "priority-muhim";
  return "priority-ortacha";
}

function renderMiniTimeline(status) {
  const activeIdx = Math.max(0, STAGES.indexOf(status));
  return `
    <div class="mini-timeline-strip" aria-label="Bosqichlar shkalasi">
      ${STAGES.map((st, idx) => {
        const cls = idx < activeIdx ? "done" : idx === activeIdx ? "current" : "";
        const mark = idx < activeIdx ? "✓ " : idx === activeIdx ? "● " : "";
        return `<span class="step-chip ${cls}">${mark}${st}</span>`;
      }).join("")}
    </div>
  `;
}

function renderIssues() {
  const listEl = document.getElementById("issuesList");
  const filtered = getFilteredIssues();
  const curAdmin = getCurrentAdmin();
  document.getElementById("resultCountLabel").textContent = `${filtered.length} ta natija`;

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <p>Tanlangan filtrlar bo‘yicha murojaat topilmadi.</p>
        <button class="secondary-btn" style="margin-top:10px" id="emptyResetBtn">Filtrlarni tozalash</button>
      </div>
    `;
    const emptyBtn = document.getElementById("emptyResetBtn");
    if (emptyBtn) emptyBtn.addEventListener("click", resetFilters);
    return;
  }

  listEl.innerHTML = filtered
    .map((item) => {
      const isRead = Array.isArray(item.readBy) && item.readBy.includes(curAdmin?.id);
      const readReadersCount = Array.isArray(item.readBy) ? item.readBy.length : 0;
      return `
      <article class="issue-card ${!isRead ? "unread-by-admin" : ""}" data-id="${item.id}">
        <div class="issue-top">
          <div>
            <div class="issue-meta-top">
              <span class="code-pill">#${item.id}</span>
              <span class="priority-badge ${getPriorityClass(item.priority)}">${item.priority}</span>
              <span class="code-pill">${item.category}</span>
              ${item.visualTag ? `<span class="visual-tag-pill">${escapeHtml(item.visualTag)}</span>` : ""}
              <span class="read-status-pill ${isRead ? "is-read" : "is-unread"}">
                ${isRead ? "✓ O‘qilgan" : "• Yangi (O‘qilmagan)"}
              </span>
            </div>
            <h3 class="issue-title">${escapeHtml(item.title)}</h3>
            <div class="issue-location">📍 ${escapeHtml(item.district)} • ${escapeHtml(item.address)} • 🕒 ${escapeHtml(item.timeAgo)} • 👁️ ${readReadersCount} admin o‘qigan</div>
          </div>
          <button class="mini-btn detail-open-btn" data-id="${item.id}">O‘qish &amp; Shkala</button>
        </div>

        <p class="issue-desc">${escapeHtml(item.description)}</p>
        ${renderMiniTimeline(item.status)}

        <div class="issue-bottom">
          <div class="issue-actions-left">
            <button class="vote-btn ${item.voted ? "voted" : ""}" data-vote-id="${item.id}">
              👍 Qo‘llab-quvvatlash (${item.votes})
            </button>
            <button class="mini-btn toggle-read-btn" data-read-id="${item.id}">
              ${isRead ? "O‘qilmagan qilish" : "✓ O‘qilgan deb belgilash"}
            </button>
            <button class="mini-btn locate-pin-btn" data-pin-id="${item.id}">🗺️ Xarita</button>
          </div>

          <div class="issue-actions-right">
            <label class="muted-text" for="status-${item.id}">Holat:</label>
            <select class="status-select" id="status-${item.id}" data-status-id="${item.id}">
              ${STAGES.map(
                (st) => `<option value="${st}" ${item.status === st ? "selected" : ""}>${st}</option>`
              ).join("")}
            </select>
            <button class="mini-btn delete-issue-btn" data-delete-id="${item.id}" title="O‘chirish">🗑️</button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderMap() {
  const pinsContainer = document.getElementById("mapPinsContainer");
  const infoBox = document.getElementById("mapSelectedInfo");
  const visibleIssues = getFilteredIssues();
  const pinsToShow = visibleIssues.length > 0 ? visibleIssues : state.issues;

  pinsContainer.innerHTML = pinsToShow
    .map((item) => {
      const cls =
        item.status === "Hal qilindi"
          ? "resolved"
          : item.priority === "Juda Shoshilinch"
          ? "urgent"
          : "";
      const activeCls = item.id === state.activeMapPinId ? "active" : "";
      return `
        <button
          class="map-pin ${cls} ${activeCls}"
          style="left:${item.x}%; top:${item.y}%;"
          data-map-select="${item.id}"
          title="${escapeHtml(item.title)} (${escapeHtml(item.district)})"
        >
          ${item.id}
        </button>
      `;
    })
    .join("");

  const selected = state.issues.find((i) => i.id === state.activeMapPinId) || pinsToShow[0] || null;
  if (!selected) {
    infoBox.innerHTML = `<span class="muted-text">Xaritada faol nuqta tanlanmagan.</span>`;
    return;
  }

  infoBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:4px;">
      <strong>#${selected.id} — ${escapeHtml(selected.title)}</strong>
      <span class="priority-badge ${getPriorityClass(selected.priority)}">${selected.status}</span>
    </div>
    <div class="muted-text">${escapeHtml(selected.district)} • ${escapeHtml(selected.address)}</div>
    <div style="margin-top:8px; display:flex; gap:8px;">
      <button class="mini-btn detail-open-btn" data-id="${selected.id}">O‘qish &amp; izohlar (${selected.comments.length})</button>
    </div>
  `;
}

function renderCategoryChart() {
  const container = document.getElementById("categoryChartContainer");
  const maxVal = Math.max(1, ...CATEGORIES.map((c) => state.issues.filter((i) => i.category === c).length));

  container.innerHTML = CATEGORIES.map((cat) => {
    const items = state.issues.filter((i) => i.category === cat);
    const solved = items.filter((i) => i.status === "Hal qilindi").length;
    const widthPct = Math.round((items.length / maxVal) * 100);
    return `
      <div class="chart-bar-item">
        <div class="chart-bar-top">
          <span>${escapeHtml(cat)}</span>
          <span>${items.length} ta (${solved} hal)</span>
        </div>
        <div class="chart-track">
          <div class="chart-fill" style="width:${widthPct}%;"></div>
        </div>
      </div>
    `;
  }).join("");
}

function renderDistrictBars() {
  const districts = ["Yunusobod", "Chilonzor", "Mirzo Ulug‘bek", "Uchtepa", "Yakkasaroy"];
  const maxCount = Math.max(
    1,
    ...districts.map((d) => state.issues.filter((i) => i.district === d).length)
  );

  document.getElementById("districtBars").innerHTML = districts
    .map((d) => {
      const count = state.issues.filter((i) => i.district === d).length;
      const pct = Math.round((count / maxCount) * 100);
      const isSelected = state.selectedDistrict === d;
      return `
        <button class="district-row" data-district-filter="${d}">
          <div class="district-row-top">
            <span style="${isSelected ? "color:var(--primary); font-weight:700;" : ""}">${d}</span>
            <span>${count} ta</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${pct}%;"></div>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderReports() {
  const resolvedItems = state.issues.filter((i) => i.status === "Hal qilindi");
  const list = document.getElementById("reportsList");

  if (resolvedItems.length === 0) {
    list.innerHTML = `<div class="muted-text">Hozircha yakunlangan hisobotlar yo‘q.</div>`;
    return;
  }

  list.innerHTML = resolvedItems
    .slice(0, 4)
    .map(
      (item) => `
      <div class="report-item">
        <span class="report-tag">✓ Hal qilindi</span>
        <div><strong>#${item.id} ${escapeHtml(item.title)}</strong></div>
        <div class="muted-text">${escapeHtml(item.district)} • ${escapeHtml(item.service)}</div>
      </div>
    `
    )
    .join("");
}

function renderDutyAndTasks() {
  document.getElementById("dutyScheduleList").innerHTML = state.dutySchedule
    .map(
      (d) => `
      <div class="duty-row">
        <div>
          <strong>${escapeHtml(d.day)}</strong>
          <div class="muted-text">${escapeHtml(d.team)}</div>
        </div>
        <div style="text-align:right;">
          <span class="code-pill">${escapeHtml(d.shift)}</span>
          <div class="muted-text" style="margin-top:2px;">Mas’ul: ${escapeHtml(d.lead)}</div>
        </div>
      </div>
    `
    )
    .join("");

  const doneCount = state.planTasks.filter((t) => t.done).length;
  document.getElementById("dutyProgressChip").textContent = `${doneCount}/${state.planTasks.length} bajarildi`;

  document.getElementById("tasksChecklist").innerHTML = state.planTasks
    .map(
      (t) => `
      <div class="task-row ${t.done ? "done-task" : ""}">
        <label class="task-left">
          <input type="checkbox" class="task-toggle-chk" data-task-id="${t.id}" ${t.done ? "checked" : ""} />
          <span class="task-title-text">${escapeHtml(t.text)}</span>
        </label>
        <div style="display:flex; align-items:center; gap:6px;">
          <span class="code-pill">${escapeHtml(t.assignee)}</span>
          <button type="button" class="mini-btn del-task-btn" data-del-task="${t.id}">✕</button>
        </div>
      </div>
    `
    )
    .join("");
}

function renderBeforeAfter() {
  const grid = document.getElementById("beforeAfterGrid");
  const mode = state.baMode;
  const singleCls = mode === "compare" ? "" : "single-col";

  grid.innerHTML = state.beforeAfterItems
    .map((item) => {
      const showBefore = mode === "compare" || mode === "before";
      const showAfter = mode === "compare" || mode === "after";
      return `
        <article class="ba-card">
          <div>
            <span class="code-pill">#${item.id}</span>
            <span class="code-pill">${escapeHtml(item.district)}</span>
            <span class="code-pill">${escapeHtml(item.category)}</span>
            <h3 class="issue-title" style="margin-top:6px;">${escapeHtml(item.title)}</h3>
            <div class="muted-text">${escapeHtml(item.service)} • ${escapeHtml(item.date)}</div>
          </div>
          <div class="ba-compare-boxes ${singleCls}">
            ${
              showBefore
                ? `<div class="ba-box before"><span class="ba-label">Oldin</span><p>${escapeHtml(item.beforeText)}</p></div>`
                : ""
            }
            ${
              showAfter
                ? `<div class="ba-box after"><span class="ba-label">Keyin</span><p>${escapeHtml(item.afterText)}</p></div>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderHotlines() {
  const grid = document.getElementById("hotlinesGrid");
  const items =
    state.selectedHotlineCat === "all"
      ? state.hotlines
      : state.hotlines.filter((h) => h.category === state.selectedHotlineCat);

  grid.innerHTML = items
    .map(
      (h) => `
      <div class="hotline-card">
        <div>
          <span class="code-pill">${escapeHtml(h.category)}</span>
          <h3 class="issue-title" style="margin-top:6px;">${escapeHtml(h.title)}</h3>
          <div class="hotline-number">📞 ${escapeHtml(h.phone)}</div>
          <p class="muted-text">${escapeHtml(h.note)}</p>
        </div>
        <div class="hotline-footer">
          <span>⏱️ ${escapeHtml(h.avgResponse)} • ${escapeHtml(h.schedule)}</span>
          <button class="mini-btn copy-phone-btn" data-phone="${escapeHtml(h.phone)}">Nusxalash</button>
        </div>
      </div>
    `
    )
    .join("");
}

function renderMahallas() {
  document.getElementById("mahallaList").innerHTML = state.mahallas
    .map((m) => {
      const liveCount = state.issues.filter((i) =>
        m.name.toLowerCase().includes(i.district.toLowerCase())
      ).length;
      return `
        <div class="mahalla-box">
          <strong>${escapeHtml(m.name)}</strong>
          <div class="muted-text">Mas’ul: ${escapeHtml(m.lead)}</div>
          <div class="muted-text">Tel: ${escapeHtml(m.phone)}</div>
          <div style="margin-top:6px; font-weight:600; color:var(--primary);">Murojaatlar: ${liveCount} ta</div>
        </div>
      `;
    })
    .join("");
}

function renderNotifications() {
  const unread = state.notifications.filter((n) => !n.read).length;
  const badge = document.getElementById("notifCount");
  badge.textContent = String(unread);
  badge.classList.toggle("hidden", unread === 0);

  document.getElementById("notifList").innerHTML = state.notifications
    .map(
      (n) => `
      <li class="notif-item ${n.read ? "read" : ""}" data-notif-id="${n.id}">
        ${escapeHtml(n.text)}
      </li>
    `
    )
    .join("");
}

function resetFilters() {
  state.selectedCategory = "all";
  state.selectedDistrict = "all";
  state.selectedStatus = "all";
  state.selectedPriority = "all";
  state.selectedPreset = "all";
  state.sortBy = "newest";
  state.searchQuery = "";
  renderAll();
  showToast("Filtrlar tozalandi");
}

function openDetailModal(issueId) {
  const item = state.issues.find((i) => i.id === issueId);
  if (!item) return;
  currentDetailIssueId = item.id;

  const curAdmin = getCurrentAdmin();
  if (!Array.isArray(item.readBy)) item.readBy = [];
  if (curAdmin && !item.readBy.includes(curAdmin.id)) {
    item.readBy.push(curAdmin.id);
    saveState();
  }

  const readersNames = item.readBy
    .map((id) => state.admins.find((a) => a.id === id)?.name)
    .filter(Boolean);

  const activeIdx = Math.max(0, STAGES.indexOf(item.status));
  const modal = document.getElementById("detailModal");
  document.getElementById("detailCode").textContent = `#${item.id}`;
  document.getElementById("detailModalTitle").textContent = item.title;
  document.getElementById("detailModalBody").innerHTML = `
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <span class="priority-badge ${getPriorityClass(item.priority)}">${item.priority}</span>
      <span class="code-pill">Yo‘nalish: ${escapeHtml(item.category)}</span>
      <span class="code-pill">Holat: ${escapeHtml(item.status)}</span>
      ${item.visualTag ? `<span class="visual-tag-pill">${escapeHtml(item.visualTag)}</span>` : ""}
    </div>
    <p><strong>Manzil:</strong> ${escapeHtml(item.district)}, ${escapeHtml(item.address)}</p>
    <p><strong>Mas’ul tashkilot:</strong> ${escapeHtml(item.service)}</p>
    <p><strong>Tavsif:</strong> ${escapeHtml(item.description)}</p>
    <p><strong>O‘qigan adminlar:</strong> ${readersNames.length ? escapeHtml(readersNames.join(", ")) : "Hali o‘qilmagan"}</p>

    <div class="timeline-box">
      <strong>Murojaat Holati Vaqt Shkalasi (Bosqichni bosib o‘zgartiring):</strong>
      <div class="timeline-steps">
        ${STAGES.map((st, idx) => {
          const cls = idx < activeIdx ? "completed" : idx === activeIdx ? "current" : "";
          const icon = idx < activeIdx ? "✓" : idx === activeIdx ? "●" : `${idx + 1}.`;
          return `<button type="button" class="timeline-step-btn ${cls}" data-set-stage="${st}">${icon} ${st}</button>`;
        }).join("")}
      </div>
    </div>

    <div>
      <strong>Nazorat izohlari (${item.comments.length}):</strong>
      <div class="comment-list">
        ${
          item.comments.length
            ? item.comments
                .map(
                  (c) =>
                    `<div class="comment-item"><strong>${escapeHtml(c.author)}:</strong> ${escapeHtml(c.text)}</div>`
                )
                .join("")
            : `<div class="muted-text">Hozircha izoh qoldirilmagan.</div>`
        }
      </div>
    </div>
  `;

  document.getElementById("commentForm").dataset.issueId = item.id;
  modal.classList.remove("hidden");
  renderIssues();
  renderAdminSwitcherAndGrid();
  renderPersonalNotesAndDailyReport();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.dataset.view;
      document.getElementById("currentBreadcrumb").textContent = btn.textContent
        .trim()
        .replace(/\d+$/, "")
        .trim();

      const targetMap = {
        dashboard: ".kpi-grid",
        issues: "#issuesSection",
        map: "#mapSection",
        beforeAfter: "#beforeAfterSection",
        hotlines: "#hotlinesSection",
        stats: "#statsSection",
        dutyPlan: "#dutyPlanSection",
        admins: "#adminsSection",
        adminNotesReport: "#adminNotesReportSection",
        settings: "#settingsSection"
      };
      const el = document.querySelector(targetMap[view]);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("sidebar").classList.remove("open");
    });
  });

  document.getElementById("openSidebarBtn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("open");
  });
  document.getElementById("closeSidebarBtn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
  });

  // Admin profil almashtirish, yangi admin berish va vaqtinchalik muzlatish
  document.getElementById("activeAdminSelect").addEventListener("change", (e) => {
    state.currentAdminId = e.target.value;
    renderAll();
    showToast(`Faol profil: ${getCurrentAdmin().name}`);
  });

  document.getElementById("unfreezeCurrentAdminBtn").addEventListener("click", () => {
    const cur = getCurrentAdmin();
    if (cur) {
      cur.frozen = false;
      renderAll();
      showToast(`${cur.name} profili faollashtirildi`);
    }
  });

  document.getElementById("grantAdminForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ensureAdminNotFrozen("Yangi admin qo‘shish")) return;

    const nameInput = document.getElementById("newAdminName");
    const phoneInput = document.getElementById("newAdminPhone");
    const districtInput = document.getElementById("newAdminDistrict");
    const roleInput = document.getElementById("newAdminRole");

    const fullName = nameInput.value.trim();
    if (!fullName) return;

    const parts = fullName.split(/\s+/);
    const initials =
      parts
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase() || "")
        .join("") || "AD";

    const newId = `adm-${Date.now()}`;
    const newAdm = {
      id: newId,
      name: fullName,
      initials,
      phone: phoneInput.value.trim() || "Ko‘rsatilmagan",
      district: districtInput.value,
      role: roleInput.value,
      frozen: false,
      isSuper: false,
      commentsCount: 0,
      resolvedCount: 0
    };

    state.admins.push(newAdm);
    state.personalNotes[newId] = [];
    state.currentAdminId = newId;
    state.notifications.unshift({
      id: Date.now(),
      text: `${newAdm.name} ga admin huquqi berildi (${newAdm.district}).`,
      read: false
    });

    e.target.reset();
    renderAll();
    showToast(`${newAdm.name} admin sifatida qo‘shildi`);
  });

  document.getElementById("adminsGrid").addEventListener("click", (e) => {
    const switchBtn = e.target.closest(".switch-admin-btn");
    if (switchBtn) {
      state.currentAdminId = switchBtn.dataset.adminId;
      renderAll();
      showToast(`Faol profil: ${getCurrentAdmin().name}`);
      return;
    }

    const freezeBtn = e.target.closest("[data-freeze-id]");
    if (freezeBtn) {
      const adm = state.admins.find((a) => a.id === freezeBtn.dataset.freezeId);
      if (!adm) return;
      adm.frozen = !adm.frozen;
      renderAll();
      showToast(
        adm.frozen
          ? `❄️ ${adm.name} vaqtinchalik muzlatildi`
          : `✓ ${adm.name} qayta faollashtirildi`
      );
      return;
    }

    const removeBtn = e.target.closest("[data-remove-admin]");
    if (removeBtn) {
      if (!ensureAdminNotFrozen("Admin huquqini olish")) return;
      const id = removeBtn.dataset.removeAdmin;
      state.admins = state.admins.filter((a) => a.id !== id);
      delete state.personalNotes[id];
      if (state.currentAdminId === id) {
        state.currentAdminId = state.admins[0]?.id || "adm-1";
      }
      renderAll();
      showToast("Admin huquqi olib tashlandi");
    }
  });

  // Shaxsiy eslatmalar
  document.getElementById("addPersonalNoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const curAdmin = getCurrentAdmin();
    if (!curAdmin) return;
    const input = document.getElementById("personalNoteInput");
    const text = input.value.trim();
    if (!text) return;

    if (!Array.isArray(state.personalNotes[curAdmin.id])) {
      state.personalNotes[curAdmin.id] = [];
    }
    state.personalNotes[curAdmin.id].unshift({
      id: `n-${Date.now()}`,
      text,
      done: false
    });
    input.value = "";
    renderPersonalNotesAndDailyReport();
    saveState();
    showToast("Shaxsiy eslatma saqlandi");
  });

  document.getElementById("personalNotesList").addEventListener("change", (e) => {
    const chk = e.target.closest(".note-toggle-chk");
    if (!chk) return;
    const curAdmin = getCurrentAdmin();
    const notes = state.personalNotes[curAdmin?.id] || [];
    const found = notes.find((n) => n.id === chk.dataset.noteId);
    if (found) {
      found.done = chk.checked;
      renderPersonalNotesAndDailyReport();
      saveState();
    }
  });

  document.getElementById("personalNotesList").addEventListener("click", (e) => {
    const delBtn = e.target.closest("[data-del-note]");
    if (!delBtn) return;
    const curAdmin = getCurrentAdmin();
    if (!curAdmin) return;
    state.personalNotes[curAdmin.id] = (state.personalNotes[curAdmin.id] || []).filter(
      (n) => n.id !== delBtn.dataset.delNote
    );
    renderPersonalNotesAndDailyReport();
    saveState();
    showToast("Eslatma o‘chirildi");
  });

  // Tezkor filtr presetlari
  document.getElementById("presetBar").addEventListener("click", (e) => {
    const btn = e.target.closest(".preset-btn");
    if (!btn) return;
    state.selectedPreset = btn.dataset.preset;
    renderAll();
  });

  // Navbatchilik vazifalari
  document.getElementById("addTaskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ensureAdminNotFrozen("Vazifa qo‘shish")) return;

    const input = document.getElementById("newTaskText");
    const assignee = document.getElementById("newTaskAssignee").value;
    const text = input.value.trim();
    if (!text) return;

    state.planTasks.unshift({
      id: `t-${Date.now()}`,
      text,
      assignee,
      done: false
    });
    input.value = "";
    renderDutyAndTasks();
    saveState();
    showToast("Yangi nazorat vazifasi qo‘shildi");
  });

  document.getElementById("tasksChecklist").addEventListener("change", (e) => {
    const chk = e.target.closest(".task-toggle-chk");
    if (!chk) return;
    if (!ensureAdminNotFrozen("Vazifa holatini o‘zgartirish")) {
      chk.checked = !chk.checked;
      return;
    }
    const task = state.planTasks.find((t) => t.id === chk.dataset.taskId);
    if (task) {
      task.done = chk.checked;
      renderDutyAndTasks();
      saveState();
    }
  });

  document.getElementById("tasksChecklist").addEventListener("click", (e) => {
    const delBtn = e.target.closest("[data-del-task]");
    if (!delBtn) return;
    if (!ensureAdminNotFrozen("Vazifa o‘chirish")) return;
    state.planTasks = state.planTasks.filter((t) => t.id !== delBtn.dataset.delTask);
    renderDutyAndTasks();
    saveState();
    showToast("Vazifa o‘chirildi");
  });

  // Joylashuvni qulflash/ochish
  document.getElementById("lockLayoutBtn").addEventListener("click", () => {
    state.layoutLocked = !state.layoutLocked;
    applyLayoutAndSettings();
    saveState();
    showToast(
      state.layoutLocked
        ? "Joylashuv qulflandi — tasodifiy siljishdan himoyalangan"
        : "Joylashuv ochildi — bo‘limlar tartibini o‘zgartirishingiz mumkin"
    );
  });

  document.getElementById("sectionOrderList").addEventListener("click", (e) => {
    const btn = e.target.closest(".move-sec-btn");
    if (!btn || state.layoutLocked) return;
    const secId = btn.dataset.sec;
    const dir = btn.dataset.dir;
    const idx = state.sectionOrder.indexOf(secId);
    if (idx === -1) return;
    const swapIdx = dir === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= state.sectionOrder.length) return;

    const copy = [...state.sectionOrder];
    [copy[idx], copy[swapIdx]] = [copy[swapIdx], copy[idx]];
    state.sectionOrder = copy;
    applyLayoutAndSettings();
    saveState();
    showToast("Bo‘lim joylashuvi yangilandi");
  });

  document.getElementById("densityGroup").addEventListener("click", (e) => {
    const btn = e.target.closest(".density-btn");
    if (!btn) return;
    state.density = btn.dataset.density;
    applyLayoutAndSettings();
    saveState();
    showToast(state.density === "compact" ? "Ixcham zichlik yoqildi" : "Qulay zichlik yoqildi");
  });

  document.getElementById("workspaceModeGroup").addEventListener("click", (e) => {
    const btn = e.target.closest(".ws-btn");
    if (!btn) return;
    state.workspaceMode = btn.dataset.wsmode;
    applyLayoutAndSettings();
    saveState();
    showToast(state.workspaceMode === "stacked" ? "1 ustunli tartib yoqildi" : "2 ustunli tartib yoqildi");
  });

  document.getElementById("resetLayoutOrderBtn").addEventListener("click", () => {
    state.sectionOrder = DEFAULT_SECTION_ORDER.map((s) => s.id);
    state.density = "comfortable";
    state.workspaceMode = "split";
    state.layoutLocked = true;
    applyLayoutAndSettings();
    saveState();
    showToast("Joylashuv va tartib standart holatga qaytarildi");
  });

  document.getElementById("themeToggleBtn").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    renderAll();
    showToast(state.theme === "dark" ? "Tungi rejim yoqildi" : "Kunduzgi rejim yoqildi");
  });

  document.getElementById("langToggleBtn").addEventListener("click", () => {
    state.lang = state.lang === "uz" ? "lat" : "uz";
    renderAll();
    showToast("Til belgisi yangilandi");
  });

  document.getElementById("notifBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("notifDropdown").classList.toggle("hidden");
  });
  document.addEventListener("click", () => {
    document.getElementById("notifDropdown").classList.add("hidden");
  });
  document.getElementById("notifDropdown").addEventListener("click", (e) => {
    e.stopPropagation();
    const li = e.target.closest("[data-notif-id]");
    if (li) {
      const id = Number(li.dataset.notifId);
      const found = state.notifications.find((n) => n.id === id);
      if (found) found.read = true;
      renderNotifications();
      saveState();
    }
  });
  document.getElementById("markAllReadBtn").addEventListener("click", () => {
    state.notifications.forEach((n) => (n.read = true));
    renderNotifications();
    saveState();
    showToast("Barcha xabarnomalar o‘qilgan deb belgilandi");
  });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderIssues();
    renderMap();
    document.getElementById("clearSearchBtn").classList.toggle("hidden", !state.searchQuery);
    saveState();
  });

  document.getElementById("clearSearchBtn").addEventListener("click", () => {
    state.searchQuery = "";
    renderIssues();
    renderMap();
    document.getElementById("searchInput").value = "";
    document.getElementById("clearSearchBtn").classList.add("hidden");
    saveState();
  });

  document.getElementById("topDistrictSelect").addEventListener("change", (e) => {
    state.selectedDistrict = e.target.value;
    renderAll();
  });

  document.getElementById("categoryTabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".cat-tab");
    if (!tab) return;
    state.selectedCategory = tab.dataset.category;
    renderAll();
  });

  document.getElementById("statusFilter").addEventListener("change", (e) => {
    state.selectedStatus = e.target.value;
    renderAll();
  });

  document.getElementById("priorityFilter").addEventListener("change", (e) => {
    state.selectedPriority = e.target.value;
    renderAll();
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderAll();
  });

  document.getElementById("resetFiltersBtn").addEventListener("click", resetFilters);

  document.getElementById("baModeTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".ba-tab");
    if (!btn) return;
    state.baMode = btn.dataset.baMode;
    renderBeforeAfter();
    syncFilterControls();
    saveState();
  });

  document.getElementById("hotlineFilterTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-tab");
    if (!btn) return;
    state.selectedHotlineCat = btn.dataset.hcat;
    renderHotlines();
    syncFilterControls();
    saveState();
  });

  document.getElementById("hotlinesGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".copy-phone-btn");
    if (!btn) return;
    const phone = btn.dataset.phone;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(phone).catch(() => {});
    }
    showToast(`Raqam nusxalandi: ${phone}`);
  });

  document.getElementById("printReportBtn").addEventListener("click", () => {
    window.print();
  });

  const addModal = document.getElementById("addIssueModal");
  document.getElementById("openAddModalBtn").addEventListener("click", () => {
    if (!ensureAdminNotFrozen("Yangi muammo qo‘shish")) return;
    addModal.classList.remove("hidden");
    document.getElementById("issueTitle").focus();
  });
  document.getElementById("closeAddModalBtn").addEventListener("click", () => addModal.classList.add("hidden"));
  document.getElementById("cancelAddModalBtn").addEventListener("click", () => addModal.classList.add("hidden"));

  document.getElementById("addIssueForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ensureAdminNotFrozen("Yangi muammo qo‘shish")) return;

    const title = document.getElementById("issueTitle").value.trim();
    const category = document.getElementById("issueCategory").value;
    const district = document.getElementById("issueDistrict").value;
    const priority = document.getElementById("issuePriority").value;
    const address = document.getElementById("issueAddress").value.trim();
    const service = document.getElementById("issueService").value.trim() || "Shahar Kommunal Xizmati";
    const visualTag = document.getElementById("issueVisualTag").value;
    const description = document.getElementById("issueDesc").value.trim();

    const prefixMap = { Suv: "W", Elektr: "E", "Yo‘l": "I", Gaz: "G", Yoritish: "L" };
    const code = `${prefixMap[category] || "M"}-${Math.floor(100 + Math.random() * 899)}`;

    const newIssue = {
      id: code,
      title,
      category,
      visualTag,
      district,
      address,
      priority,
      status: "Yangi",
      service,
      timeAgo: "Hozirgina",
      votes: 1,
      voted: true,
      x: Math.floor(20 + Math.random() * 62),
      y: Math.floor(20 + Math.random() * 58),
      readBy: [],
      description,
      comments: []
    };

    state.issues.unshift(newIssue);
    state.activeMapPinId = newIssue.id;
    state.notifications.unshift({
      id: Date.now(),
      text: `Yangi murojaat #${newIssue.id} (${newIssue.district}) ro‘yxatga qo‘shildi.`,
      read: false
    });

    e.target.reset();
    addModal.classList.add("hidden");
    renderAll();
    showToast(`#${newIssue.id} murojaat qo‘shildi`);
  });

  document.getElementById("issuesList").addEventListener("click", (e) => {
    const voteBtn = e.target.closest("[data-vote-id]");
    if (voteBtn) {
      const item = state.issues.find((i) => i.id === voteBtn.dataset.voteId);
      if (!item) return;
      item.voted = !item.voted;
      item.votes += item.voted ? 1 : -1;
      renderAll();
      showToast(item.voted ? "Ovoz qo‘shildi" : "Ovoz bekor qilindi");
      return;
    }

    const readBtn = e.target.closest("[data-read-id]");
    if (readBtn) {
      if (!ensureAdminNotFrozen("O‘qilganlikni belgilash")) return;
      const item = state.issues.find((i) => i.id === readBtn.dataset.readId);
      const curAdmin = getCurrentAdmin();
      if (!item || !curAdmin) return;
      if (!Array.isArray(item.readBy)) item.readBy = [];
      const idx = item.readBy.indexOf(curAdmin.id);
      if (idx >= 0) {
        item.readBy.splice(idx, 1);
        showToast(`#${item.id} o‘qilmagan deb belgilandi`);
      } else {
        item.readBy.push(curAdmin.id);
        showToast(`#${item.id} ${curAdmin.name} tomonidan o‘qilgan deb belgilandi`);
      }
      renderIssues();
      renderAdminSwitcherAndGrid();
      renderPersonalNotesAndDailyReport();
      saveState();
      return;
    }

    const pinBtn = e.target.closest("[data-pin-id]");
    if (pinBtn) {
      state.activeMapPinId = pinBtn.dataset.pinId;
      renderMap();
      saveState();
      document.getElementById("mapSection").scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(`#${pinBtn.dataset.pinId} xaritada belgilandi`);
      return;
    }

    const detailBtn = e.target.closest(".detail-open-btn");
    if (detailBtn) {
      openDetailModal(detailBtn.dataset.id);
      return;
    }

    const delBtn = e.target.closest("[data-delete-id]");
    if (delBtn) {
      if (!ensureAdminNotFrozen("Murojaatni o‘chirish")) return;
      const id = delBtn.dataset.deleteId;
      state.issues = state.issues.filter((i) => i.id !== id);
      if (state.activeMapPinId === id) {
        state.activeMapPinId = state.issues[0]?.id || "";
      }
      renderAll();
      showToast(`#${id} murojaat o‘chirildi`);
    }
  });

  document.getElementById("issuesList").addEventListener("change", (e) => {
    const sel = e.target.closest("[data-status-id]");
    if (!sel) return;
    if (!ensureAdminNotFrozen("Holatni o‘zgartirish")) {
      renderIssues();
      return;
    }
    const item = state.issues.find((i) => i.id === sel.dataset.statusId);
    const curAdmin = getCurrentAdmin();
    if (!item) return;
    const prevStatus = item.status;
    item.status = sel.value;
    if (prevStatus !== "Hal qilindi" && item.status === "Hal qilindi" && curAdmin) {
      curAdmin.resolvedCount = (curAdmin.resolvedCount || 0) + 1;
    }
    renderAll();
    showToast(`#${item.id} holati: ${item.status}`);
  });

  document.getElementById("mapPinsContainer").addEventListener("click", (e) => {
    const pin = e.target.closest("[data-map-select]");
    if (!pin) return;
    state.activeMapPinId = pin.dataset.mapSelect;
    renderMap();
    saveState();
  });

  document.getElementById("mapSelectedInfo").addEventListener("click", (e) => {
    const btn = e.target.closest(".detail-open-btn");
    if (btn) openDetailModal(btn.dataset.id);
  });

  document.getElementById("resetMapFocusBtn").addEventListener("click", () => {
    state.selectedDistrict = "all";
    renderAll();
    showToast("Xaritadagi barcha nuqtalar ko‘rsatildi");
  });

  document.getElementById("districtBars").addEventListener("click", (e) => {
    const row = e.target.closest("[data-district-filter]");
    if (!row) return;
    const d = row.dataset.districtFilter;
    state.selectedDistrict = state.selectedDistrict === d ? "all" : d;
    renderAll();
  });

  document.getElementById("openAllReportsBtn").addEventListener("click", () => {
    state.selectedStatus = "Hal qilindi";
    renderAll();
    document.getElementById("issuesSection").scrollIntoView({ behavior: "smooth" });
    showToast("Hal etilgan murojaatlar ko‘rsatilmoqda");
  });

  const detailModal = document.getElementById("detailModal");
  document.getElementById("detailModalBody").addEventListener("click", (e) => {
    const stageBtn = e.target.closest("[data-set-stage]");
    if (!stageBtn || !currentDetailIssueId) return;
    if (!ensureAdminNotFrozen("Bosqichni o‘zgartirish")) return;

    const item = state.issues.find((i) => i.id === currentDetailIssueId);
    const curAdmin = getCurrentAdmin();
    if (!item) return;
    const prevStatus = item.status;
    item.status = stageBtn.dataset.setStage;
    if (prevStatus !== "Hal qilindi" && item.status === "Hal qilindi" && curAdmin) {
      curAdmin.resolvedCount = (curAdmin.resolvedCount || 0) + 1;
    }
    renderAll();
    openDetailModal(item.id);
    showToast(`#${item.id} bosqichi: ${item.status}`);
  });

  document.getElementById("closeDetailModalBtn").addEventListener("click", () => detailModal.classList.add("hidden"));

  document.getElementById("commentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ensureAdminNotFrozen("Izoh yozish")) return;

    const issueId = e.target.dataset.issueId;
    const input = document.getElementById("commentInput");
    const text = input.value.trim();
    if (!text) return;

    const item = state.issues.find((i) => i.id === issueId);
    const curAdmin = getCurrentAdmin();
    if (item) {
      item.comments.push({ author: curAdmin?.name || "Admin", text });
      if (curAdmin) {
        curAdmin.commentsCount = (curAdmin.commentsCount || 0) + 1;
      }
      input.value = "";
      saveState();
      openDetailModal(issueId);
      showToast("Izoh qo‘shildi");
    }
  });

  const helpModal = document.getElementById("helpModal");
  document.getElementById("openHelpBtn").addEventListener("click", () => helpModal.classList.remove("hidden"));
  document.getElementById("closeHelpModalBtn").addEventListener("click", () => helpModal.classList.add("hidden"));
  document.getElementById("closeHelpOkBtn").addEventListener("click", () => helpModal.classList.add("hidden"));

  document.getElementById("fontDecreaseBtn").addEventListener("click", () => {
    state.fontScale = Math.max(0.88, Number((state.fontScale - 0.06).toFixed(2)));
    renderAll();
    showToast(`Shrift: ${Math.round(state.fontScale * 100)}%`);
  });

  document.getElementById("fontResetBtn").addEventListener("click", () => {
    state.fontScale = 1;
    renderAll();
    showToast("Shrift 100% ga qaytarildi");
  });

  document.getElementById("fontIncreaseBtn").addEventListener("click", () => {
    state.fontScale = Math.min(1.24, Number((state.fontScale + 0.06).toFixed(2)));
    renderAll();
    showToast(`Shrift: ${Math.round(state.fontScale * 100)}%`);
  });

  document.getElementById("autosaveToggleBtn").addEventListener("click", () => {
    state.autosave = !state.autosave;
    renderAll();
    showToast(state.autosave ? "Avtomatik saqlash yoqildi" : "Avtomatik saqlash o‘chirildi");
  });

  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state.issues, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mahalla-nazorat-muammolar.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("JSON fayl yuklab olindi");
  });

  document.getElementById("resetDemoBtn").addEventListener("click", () => {
    state = structuredClone(DEFAULT_STATE);
    localStorage.removeItem(STORAGE_KEY);
    renderAll();
    showToast("Boshlang‘ich ma’lumotlar tiklandi");
  });

  [addModal, detailModal, helpModal].forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.add("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  renderAll();
});

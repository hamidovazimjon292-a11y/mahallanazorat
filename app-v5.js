const STORAGE_KEY = "mahalla_nazorat_state_v5_sirdaryo_admin_guard";
const ADMIN_ACCESS_CODE = "55555";
const STAGES = ["Yangi", "O‘rganilmoqda", "Brigada yuborildi", "Hal qilindi"];
const CATEGORIES = ["Suv", "Elektr", "Yo‘l", "Gaz", "Yoritish"];
const BRIGADES = [
  "1-Brigada (Suv Ta’minoti)",
  "2-Brigada (Elektr Tarmoqlari)",
  "3-Brigada (Hududgaz Sirdaryo)",
  "4-Brigada (Yo‘l & Yoritish)",
  "Viloyat Navbatchi Guruhi"
];
const SLA_OPTIONS = [2, 4, 12, 24, 48];
const WEATHER_CONDITIONS = ["Oddiy sharoit", "Tungi ish vaqti", "Ob-havo ta’siri"];
const NOTIFY_TARGETS = [
  { key: "mahallaChair", label: "Mahalla raisi" },
  { key: "districtDisp", label: "Tuman dispetcheri" },
  { key: "brigadeLead", label: "Brigada boshlig‘i" }
];
const SAFETY_CHECKS = [
  { key: "areaDisconnected", label: "Hudud o‘chirilganmi?" },
  { key: "citizensNotified", label: "Aholi ogohlantirildimi?" },
  { key: "emergencyContacted", label: "Avariya xizmati bilan bog‘lanildimi?" }
];

const SIRDARYO_DISTRICTS = [
  "Guliston sh.",
  "Yangiyer sh.",
  "Shirin sh.",
  "Boyovut",
  "Guliston tumani",
  "Mirzaobod",
  "Oqoltin",
  "Sardoba",
  "Sayxunobod",
  "Sirdaryo tumani",
  "Xovos"
];

const DEFAULT_SECTION_ORDER = [
  { id: "actionBar", label: "Qidiruv va amallar paneli" },
  { id: "kpiGrid", label: "Umumiy statistika kartochkalari" },
  { id: "workspaceGrid", label: "Asosiy ish maydoni (Muammolar & Xarita)" },
  { id: "adminsSection", label: "Admin Panel (Bosh Admin / O‘quvchi Admin)" },
  { id: "adminNotesReportSection", label: "Shaxsiy Eslatmalar, Kunlik Hisobot va Smena Topshirish" },
  { id: "dutyPlanSection", label: "Haftalik Navbatchilik va Reja" },
  { id: "beforeAfterSection", label: "Oldin / Keyin galereyasi" },
  { id: "hotlinesSection", label: "Tezkor kontaktlar ma’lumotnomasi" },
  { id: "bottomGrid", label: "Mahallalar va Sozlamalar" }
];

const HOUR_MS = 3600 * 1000;

const DEFAULT_STATE = {
  isAuthenticated: false,
  theme: "light",
  lang: "uz",
  fontScale: 1,
  autosave: true,
  layoutLocked: true,
  density: "comfortable",
  workspaceMode: "split",
  sectionOrder: DEFAULT_SECTION_ORDER.map((s) => s.id),
  currentAdminId: "adm-1",
  shiftHandover: {
    note: "Xovos va Guliston yo‘nalishidagi shoshilinch murojaatlar hamda yo‘ldagi brigadalar aloqasini nazoratda saqlang.",
    by: "Hamdov A.",
    updatedAt: "Bugun, 18:00"
  },
  admins: [
    {
      id: "adm-1",
      name: "Hamdov A.",
      initials: "HA",
      phone: "+998 90 100-00-01",
      district: "Barcha tumanlar",
      role: "Bosh Admin",
      frozen: false,
      isSuper: true,
      commentsCount: 2,
      resolvedCount: 1
    },
    {
      id: "adm-2",
      name: "Hamidov A.",
      initials: "HA",
      phone: "+998 90 100-00-02",
      district: "Guliston sh.",
      role: "O‘quvchi Admin",
      frozen: false,
      isSuper: false,
      commentsCount: 1,
      resolvedCount: 0
    },
    {
      id: "adm-3",
      name: "Odilbek R.",
      initials: "OR",
      phone: "+998 91 555-22-11",
      district: "Guliston sh.",
      role: "Oddiy foydalanuvchi",
      frozen: false,
      isSuper: false,
      commentsCount: 0,
      resolvedCount: 0
    }
  ],
  personalNotes: {
    "adm-1": [
      { id: "n-1", text: "Guliston shahri Bahor MFY suv quvuri hisobotini tekshirish", done: false },
      { id: "n-2", text: "Sirdaryo viloyati haftalik navbatchilik jadvalini tasdiqlash", done: true }
    ],
    "adm-2": [
      { id: "n-3", text: "Yangiyer shahri transformator murojaatlarini ko‘rib chiqish", done: false }
    ],
    "adm-3": []
  },
  dutySchedule: [
    { day: "Dushanba", team: "1-Brigada (Sirdaryo Suv Ta’minoti)", shift: "08:00 – 20:00", lead: "Olimjon K." },
    { day: "Seshanba", team: "2-Brigada (Sirdaryo Elektr Tarmoqlari)", shift: "08:00 – 20:00", lead: "Javohir T." },
    { day: "Chorshanba", team: "3-Brigada (Hududgaz Sirdaryo)", shift: "08:00 – 20:00", lead: "Hamidov A." },
    { day: "Payshanba", team: "4-Brigada (Viloyat Yo‘l & Obodonlashtirish)", shift: "08:00 – 20:00", lead: "Madina N." },
    { day: "Juma–Yakshanba", team: "Viloyat Navbatchi Nazorat Guruhi", shift: "24/7 Navbatchilik", lead: "Hamdov A." }
  ],
  planTasks: [
    { id: "t-1", text: "Guliston sh. Taraqqiyot MFY suv quvuri holatini qayta tekshirish", assignee: "Hamdov A.", done: true },
    { id: "t-2", text: "Yangiyer sh. Binokor MFY transformator yuklamasini o‘lchash", assignee: "Hamidov A.", done: false },
    { id: "t-3", text: "Boyovut tumani markaziy ko‘chasi yoritish ustunlari hisoboti", assignee: "Hamdov A.", done: false }
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
    { id: 1, text: "Guliston sh. Taraqqiyot MFYda #W-104 suv quvuri bo‘yicha 1-Brigada safarbar etildi (SLA: 4 soat).", read: false },
    { id: 2, text: "Yangiyer sh. #E-802 transformator muammosiga yangi ovozlar qo‘shildi.", read: false },
    { id: 3, text: "Xovos tumanida gaz regulyatori sozlanib, Oldin/Keyin galereyasiga kiritildi.", read: false }
  ],
  hotlines: [
    {
      id: "h-suv",
      category: "Suv",
      title: "Sirdaryo Suv Ta’minoti Avariya Xizmati",
      phone: "1055",
      avgResponse: "~25 daqiqa",
      schedule: "24/7 Navbatchilik",
      note: "Quvur yorilishi, suv oqishi va bosim muammolari"
    },
    {
      id: "h-elektr",
      category: "Elektr",
      title: "Sirdaryo Hududiy Elektr Tarmoqlari Dispetcherligi",
      phone: "1154",
      avgResponse: "~30 daqiqa",
      schedule: "24/7 Navbatchilik",
      note: "Transformator, kabel uzilishi va kuchlanish pasayishi"
    },
    {
      id: "h-gaz",
      category: "Gaz",
      title: "Hududgaz Sirdaryo Avariya va Xavfsizlik Xizmati",
      phone: "104",
      avgResponse: "~15 daqiqa",
      schedule: "24/7 Navbatchilik",
      note: "Gaz sizishi, bosim o‘zgarishi va tarmoq tekshiruvi"
    },
    {
      id: "h-yol",
      category: "Yo‘l",
      title: "Sirdaryo Viloyati Obodonlashtirish va Yo‘l Nazorati",
      phone: "+998 67 225-18-09",
      avgResponse: "~2 soat",
      schedule: "08:00 – 22:00",
      note: "Asfalt cho‘kishi, chuqurliklar va drenaj tozalash"
    },
    {
      id: "h-yoritish",
      category: "Yoritish",
      title: "Guliston va Tumanlar Ko‘cha Yoritish Xizmati",
      phone: "+998 67 225-55-12",
      avgResponse: "~1.5 soat",
      schedule: "08:00 – 23:00",
      note: "Ko‘cha chiroqlari va yoritish ustunlarini tiklash"
    },
    {
      id: "h-mahalla",
      category: "Yo‘l",
      title: "Sirdaryo Mahalla Infratuzilma Muvofiqlashtirish Markazi",
      phone: "1092",
      avgResponse: "~45 daqiqa",
      schedule: "09:00 – 21:00",
      note: "Viloyat bo‘yicha jamoatchilik murojaatlari nazorati"
    }
  ],
  beforeAfterItems: [
    {
      id: "BA-201",
      title: "Gaz bosimi va taqsimlash tarmog‘ini barqarorlashtirish",
      district: "Xovos",
      category: "Gaz",
      date: "18-Noyabr, 2026",
      service: "Hududgaz Sirdaryo",
      beforeText: "Kechki sovuq paytlarda gaz bosimi 35% gacha pasayib, isitish qozonlari o‘chib qolayotgan edi.",
      afterText: "Xovos tumani gaz taqsimlash punkti tekshirildi, regulyator almashtirildi, bosim me’yorga qaytdi."
    },
    {
      id: "BA-198",
      title: "Mahalla ichki yo‘li va piyodalar yo‘lagini tekislash",
      district: "Sirdaryo tumani",
      category: "Yo‘l",
      date: "14-Noyabr, 2026",
      service: "Sirdaryo Obodonlashtirish boshqarmasi",
      beforeText: "Yo‘l qoplamasida chuqur o‘ra paydo bo‘lib, yomg‘irdan keyin piyodalar o‘tishiga qiyinchilik tug‘dirgan.",
      afterText: "Asfalt qoplamasi yangilandi, yo‘l cheti mustahkamlandi va suv oqib ketishi yo‘lga qo‘yildi."
    },
    {
      id: "BA-192",
      title: "Maktab yonidagi ko‘cha yoritish liniyasini tiklash",
      district: "Shirin sh.",
      category: "Yoritish",
      date: "09-Noyabr, 2026",
      service: "Shirin Shahar Yoritish Xizmati",
      beforeText: "6 ta yoritish chirog‘i ishlamay, qorong‘i vaqtlarda maktab o‘quvchilari va aholi uchun xavf tug‘dirgan.",
      afterText: "Barcha LED chiroqlar va boshqaruv kabellari yangilandi, tungi yoritish to‘liq ishga tushdi."
    },
    {
      id: "BA-187",
      title: "Ichimlik suvi quvuri ulanmasini almashtirish",
      district: "Guliston sh.",
      category: "Suv",
      date: "03-Noyabr, 2026",
      service: "Sirdaryo Suv Ta’minoti",
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
      district: "Guliston sh.",
      address: "Taraqqiyot MFY, 12-uy ro‘parasi",
      priority: "Juda Shoshilinch",
      status: "O‘rganilmoqda",
      brigade: "1-Brigada (Suv Ta’minoti)",
      assignee: "Olimjon K.",
      slaHours: 4,
      createdAt: Date.now() - 3.3 * HOUR_MS,
      conditionTag: "Ob-havo ta’siri",
      notified: { mahallaChair: true, districtDisp: true, brigadeLead: false },
      safetyCheck: { areaDisconnected: false, citizensNotified: false, emergencyContacted: false },
      service: "Sirdaryo Suv Ta’minoti",
      timeAgo: "3.3 soat oldin",
      votes: 38,
      voted: false,
      x: 52,
      y: 44,
      readBy: ["adm-1"],
      description: "Ichimlik suvi quvuridan bosim bilan suv oqib, yo‘l chetini yuvib ketmoqda.",
      comments: [{ author: "Mahalla raisi", text: "Avariya xizmatiga xabar berildi, 1-Brigada yo‘lda." }]
    },
    {
      id: "E-802",
      title: "Transformator nosozligi",
      category: "Elektr",
      visualTag: "⚡ Transformator / Kabel",
      district: "Yangiyer sh.",
      address: "Binokor MFY, 8-ko‘p qavatli uy yonida",
      priority: "Muhim",
      status: "Brigada yuborildi",
      brigade: "2-Brigada (Elektr Tarmoqlari)",
      assignee: "Javohir T.",
      slaHours: 12,
      createdAt: Date.now() - 2 * HOUR_MS,
      conditionTag: "Tungi ish vaqti",
      notified: { mahallaChair: true, districtDisp: true, brigadeLead: true },
      safetyCheck: { areaDisconnected: true, citizensNotified: true, emergencyContacted: true },
      service: "Sirdaryo Hududiy Elektr Tarmoqlari",
      timeAgo: "2 soat oldin",
      votes: 52,
      voted: true,
      x: 68,
      y: 72,
      readBy: ["adm-1", "adm-2"],
      description: "Kechki paytdan beri bir nechta xonadonda kuchlanish past bo‘lib, vaqti-vaqti bilan o‘chmoqda.",
      comments: [{ author: "Navbatchi dispetcher", text: "2-Brigada manzilga yetib bordi, yuklama tekshirilmoqda." }]
    },
    {
      id: "G-215",
      title: "Gaz bosimi pasayishi tekshiruvi",
      category: "Gaz",
      visualTag: "🔥 Gaz quvuri / Bosim",
      district: "Xovos",
      address: "Qahramon MFY, 44-uy atrofida",
      priority: "Juda Shoshilinch",
      status: "Hal qilindi",
      brigade: "3-Brigada (Hududgaz Sirdaryo)",
      assignee: "Hamidov A.",
      slaHours: 4,
      createdAt: Date.now() - 26 * HOUR_MS,
      conditionTag: "Ob-havo ta’siri",
      notified: { mahallaChair: true, districtDisp: true, brigadeLead: true },
      safetyCheck: { areaDisconnected: true, citizensNotified: true, emergencyContacted: true },
      service: "Hududgaz Sirdaryo",
      timeAgo: "Kecha",
      votes: 45,
      voted: false,
      x: 58,
      y: 82,
      readBy: ["adm-1", "adm-2"],
      description: "Sovuq havoda gaz bosimi pasayishini bartaraf etish bo‘yicha murojaat ijobiy yakunlandi.",
      comments: [{ author: "Nazoratchi", text: "3-Brigada regulyatorni sozladi, bosim barqarorlashdi." }]
    }
  ],
  mahallas: [
    { district: "Guliston sh.", name: "Guliston sh. — Taraqqiyot MFY", lead: "Hamidov A.", phone: "+998 90 100-00-02" },
    { district: "Yangiyer sh.", name: "Yangiyer sh. — Binokor MFY", lead: "Olimjon Karimov", phone: "+998 90 123-45-67" },
    { district: "Shirin sh.", name: "Shirin sh. — Farhod MFY", lead: "Dilshod Rahimov", phone: "+998 91 210-33-44" },
    { district: "Boyovut", name: "Boyovut — Navbahor MFY", lead: "Javohir Tursunov", phone: "+998 91 345-67-89" },
    { district: "Guliston tumani", name: "Guliston tumani — Dehqonobod MFY", lead: "Sardor Alimov", phone: "+998 93 311-22-33" },
    { district: "Mirzaobod", name: "Mirzaobod — Navro‘z MFY", lead: "Aziza Qodirova", phone: "+998 94 412-55-66" },
    { district: "Oqoltin", name: "Oqoltin — Sardoba MFY", lead: "Behzod Xolmatov", phone: "+998 90 515-77-88" },
    { district: "Sardoba", name: "Sardoba — Do‘stlik MFY", lead: "Madina Nazarova", phone: "+998 93 456-78-90" },
    { district: "Sayxunobod", name: "Sayxunobod — Ittifoq MFY", lead: "Rustam Sobirov", phone: "+998 91 616-88-99" },
    { district: "Sirdaryo tumani", name: "Sirdaryo tumani — Baxt MFY", lead: "Kamola Usmonova", phone: "+998 97 717-99-00" },
    { district: "Xovos", name: "Xovos — Qahramon MFY", lead: "Akmal Jo‘rayev", phone: "+998 99 818-12-34" }
  ]
};

let state = loadState();
let currentDetailIssueId = null;

function getCurrentAdmin() {
  return state.admins.find((a) => a.id === state.currentAdminId) || state.admins[0];
}

function hasAdminPanelAccess(user = getCurrentAdmin()) {
  if (!user) return false;
  if (user.isSuper) return true;
  const roleText = String(user.role || "").toLowerCase();
  return (
    roleText.includes("bosh admin") ||
    roleText.includes("katta admin") ||
    roleText.includes("o‘quvchi admin") ||
    roleText.includes("oquvchi admin") ||
    roleText.startsWith("admin")
  );
}

function applyAdminVisibilityGuard() {
  const canOpenAdminPanel = hasAdminPanelAccess();
  const adminsSec = document.getElementById("adminsSection");
  const adminNavBtn = document.querySelector('.nav-item[data-view="admins"]');

  if (adminsSec) {
    adminsSec.classList.toggle("hidden", !canOpenAdminPanel);
  }
  if (adminNavBtn) {
    adminNavBtn.classList.toggle("hidden", !canOpenAdminPanel);
  }
  if (!canOpenAdminPanel) {
    document.getElementById("adminPanelModal")?.classList.add("hidden");
  }
}

function openAdminPanelModal() {
  const curUser = getCurrentAdmin();
  if (!hasAdminPanelAccess(curUser)) {
    showToast("⛔ Bu bo‘lim faqat Bosh Admin yoki O‘quvchi Admin uchun!");
    return;
  }
  if (curUser?.frozen) {
    showToast("❄️ Profil muzlatilgan. Avval faollashtiring.");
    return;
  }

  const totalIssues = state.issues.length;
  const urgentOpen = state.issues.filter(
    (i) => i.priority === "Juda Shoshilinch" && i.status !== "Hal qilindi"
  ).length;
  const activeAdmins = state.admins.filter((a) => !a.frozen).length;

  document.getElementById("adminPanelModalTitle").textContent = `Admin Panel • ${curUser.name} (${curUser.role})`;
  document.getElementById("adminPanelModalBody").innerHTML = `
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px;">
      <span class="code-pill">Rol: ${escapeHtml(curUser.role)}</span>
      <span class="code-pill">Hudud: ${escapeHtml(curUser.district)}</span>
      <span class="code-pill">Jami murojaat: ${totalIssues} ta</span>
      <span class="code-pill priority-shoshilinch">Shoshilinch ochiq: ${urgentOpen} ta</span>
      <span class="code-pill">Faol profillar: ${activeAdmins}/${state.admins.length}</span>
    </div>
    <p><strong>Ruxsat holati:</strong> Sizga <strong>Admin Panel</strong> (foydalanuvchilar, rollar, holatlar va nazorat) uchun to‘liq kirish berilgan. Oddiy foydalanuvchilar ushbu oynani va admin bo‘limini ko‘ra olmaydi.</p>
    <div class="comment-list">
      ${state.admins
        .map(
          (adm) => `
          <div class="comment-item">
            <strong>${escapeHtml(adm.name)}</strong> — <span class="code-pill">${escapeHtml(adm.role)}</span>
            <span class="muted-text">(${escapeHtml(adm.district)} • ${adm.frozen ? "❄️ Muzlatilgan" : "✓ Faol"})</span>
          </div>
        `
        )
        .join("")}
    </div>
  `;

  document.getElementById("adminPanelModal").classList.remove("hidden");
}

function isSafetyRequired(item) {
  return item.category === "Gaz" || item.category === "Elektr";
}

function getSafetyDoneCount(item) {
  const sc = item.safetyCheck || {};
  return SAFETY_CHECKS.filter((c) => Boolean(sc[c.key])).length;
}

function formatConditionBadge(conditionTag) {
  if (conditionTag === "Tungi ish vaqti") return "🌙 Tungi ish vaqti";
  if (conditionTag === "Ob-havo ta’siri") return "🌧️❄️ Ob-havo ta’siri";
  return "☀️ Oddiy sharoit";
}

function getNotifiedCount(item) {
  const n = item.notified || {};
  return NOTIFY_TARGETS.filter((t) => Boolean(n[t.key])).length;
}

function getAssigneeOptions(currentAssignee) {
  const names = [...state.admins.map((a) => a.name), "Olimjon K.", "Javohir T.", "Madina N."];
  if (currentAssignee && !names.includes(currentAssignee)) names.unshift(currentAssignee);
  return [...new Set(names)];
}

function getSlaInfo(item) {
  const slaHours = Number(item.slaHours) || 24;
  const createdAt = Number(item.createdAt) || Date.now();
  const remainingHours = slaHours - (Date.now() - createdAt) / HOUR_MS;

  if (item.status === "Hal qilindi") {
    return { slaHours, remainingHours, isAlert: false, label: `SLA ${slaHours}s • Hal qilindi`, badgeClass: "sla-ok" };
  }
  if (remainingHours < 0) {
    return {
      slaHours,
      remainingHours,
      isAlert: true,
      label: `SLA ${slaHours}s • ${Math.abs(remainingHours).toFixed(1)}s o‘tdi`,
      badgeClass: "sla-overdue"
    };
  }
  if (remainingHours <= Math.max(1, slaHours * 0.25)) {
    return {
      slaHours,
      remainingHours,
      isAlert: true,
      label: `SLA ${slaHours}s • ${remainingHours.toFixed(1)}s qoldi`,
      badgeClass: "sla-warning"
    };
  }
  return {
    slaHours,
    remainingHours,
    isAlert: false,
    label: `SLA ${slaHours}s • ${remainingHours.toFixed(1)}s qoldi`,
    badgeClass: "sla-normal"
  };
}

function buildHandoverSummaryText() {
  const openUrgent = state.issues.filter((i) => i.priority === "Juda Shoshilinch" && i.status !== "Hal qilindi");
  const enRouteBrigades = [
    ...new Set(
      state.issues
        .filter((i) => i.status === "Brigada yuborildi" && i.brigade)
        .map((i) => `${i.brigade} (#${i.id} ${i.district})`)
    )
  ];
  const urgentText = openUrgent.length
    ? openUrgent.map((i) => `#${i.id} ${i.title} (${i.district})`).join(", ")
    : "Yo‘q";
  const brigadeText = enRouteBrigades.length ? enRouteBrigades.join("; ") : "Safarbar etilgan brigada yo‘q";
  const ho = state.shiftHandover || {};

  return {
    autoLine: `Yopilmagan shoshilinch (${openUrgent.length}): ${urgentText} | Yo‘ldagi brigadalar: ${brigadeText}.`,
    fullCopy: [
      "SMENA TOPSHIRISH XULOSASI (SIRDARYO)",
      `Yopilmagan shoshilinch murojaatlar (${openUrgent.length}): ${urgentText}`,
      `Yo‘ldagi brigadalar: ${brigadeText}`,
      `E’tibor qaratish kerak: ${ho.note || "—"}`,
      `Topshiruvchi: ${ho.by || "—"} (${ho.updatedAt || ""})`
    ].join("\n")
  };
}

function makeInitials(fullName) {
  const parts = fullName.trim().split(/\s+/);
  return (
    parts
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase() || "")
      .join("") || "PR"
  );
}

function loginUserByName(rawName, district = "Barcha tumanlar", phone = "", roleChoice = "Oddiy foydalanuvchi", adminCode = "") {
  const cleanName = rawName.trim();
  if (!cleanName) return;

  const wantsAdmin =
    roleChoice === "Bosh Admin" || roleChoice === "O‘quvchi Admin";

  if (wantsAdmin && adminCode.trim() !== ADMIN_ACCESS_CODE) {
    showToast(`⛔ Admin kodi noto‘g‘ri! Admin rolida kirish kodi: ${ADMIN_ACCESS_CODE}`);
    return;
  }

  let user = state.admins.find((a) => a.name.toLowerCase() === cleanName.toLowerCase());

  if (!user) {
    const newId = `adm-${Date.now()}`;
    user = {
      id: newId,
      name: cleanName,
      initials: makeInitials(cleanName),
      phone: phone.trim() || "Ko‘rsatilmagan",
      district: district || "Barcha tumanlar",
      role: roleChoice,
      frozen: false,
      isSuper: roleChoice === "Bosh Admin",
      commentsCount: 0,
      resolvedCount: 0
    };
    state.admins.push(user);
    state.personalNotes[newId] = [];
  } else {
    if (phone.trim()) user.phone = phone.trim();
    if (roleChoice) {
      user.role = roleChoice;
      user.isSuper = roleChoice === "Bosh Admin";
    }
  }

  state.currentAdminId = user.id;
  state.isAuthenticated = true;
  renderAll();
  showToast(`Xush kelibsiz, ${user.name} (${user.role})!`);
}

function renderAuthScreen() {
  const overlay = document.getElementById("authOverlay");
  const appShell = document.getElementById("appShell");

  if (state.isAuthenticated) {
    overlay.classList.add("hidden");
    appShell.classList.remove("hidden");
    return;
  }

  overlay.classList.remove("hidden");
  appShell.classList.add("hidden");

  const quickList = document.getElementById("quickAccountsList");
  if (quickList) {
    quickList.innerHTML = state.admins
      .map(
        (adm) => `
        <button type="button" class="quick-acc-chip" data-quick-login-id="${adm.id}">
          👤 ${escapeHtml(adm.name)} (${escapeHtml(adm.role)})
        </button>
      `
      )
      .join("");
  }
}

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
    document.getElementById("currentUserAvatar").textContent = curAdmin.initials || "PR";
    document.getElementById("currentUserRole").textContent = `${curAdmin.role} • ${curAdmin.district}`;

    statusPill.textContent = curAdmin.frozen ? "❄️ Muzlatilgan" : "✓ Faol";
    statusPill.classList.toggle("frozen-pill", Boolean(curAdmin.frozen));
    statusPill.classList.toggle("active-pill", !curAdmin.frozen);
    frozenBanner.classList.toggle("hidden", !curAdmin.frozen);
  }

  renderSectionOrderControls();
  applyAdminVisibilityGuard();
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
      (item.brigade || "").toLowerCase().includes(q) ||
      (item.assignee || "").toLowerCase().includes(q) ||
      (item.conditionTag || "").toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);

    let matchPreset = true;
    if (state.selectedPreset === "urgent") {
      matchPreset = item.priority === "Juda Shoshilinch";
    } else if (state.selectedPreset === "brigade") {
      matchPreset = item.status === "Brigada yuborildi";
    } else if (state.selectedPreset === "sla_alert") {
      matchPreset = getSlaInfo(item).isAlert;
    } else if (state.selectedPreset === "weather_night") {
      matchPreset = item.conditionTag === "Tungi ish vaqti" || item.conditionTag === "Ob-havo ta’siri";
    } else if (state.selectedPreset === "unread_admin") {
      matchPreset = !Array.isArray(item.readBy) || !item.readBy.includes(curAdmin?.id);
    }

    return matchCat && matchDist && matchStatus && matchPrio && matchQuery && matchPreset;
  });

  if (state.sortBy === "votes" || state.selectedPreset === "topvotes") {
    list.sort((a, b) => b.votes - a.votes);
  } else if (state.sortBy === "priority") {
    list.sort((a, b) => (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0));
  } else if (state.sortBy === "sla") {
    list.sort((a, b) => getSlaInfo(a).remainingHours - getSlaInfo(b).remainingHours);
  }
  return list;
}

function renderAll() {
  renderAuthScreen();
  applyLayoutAndSettings();
  renderAdminSwitcherAndGrid();
  renderPersonalNotesAndDailyReport();
  renderShiftHandover();
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
        `<option value="${a.id}" ${a.id === state.currentAdminId ? "selected" : ""}>${escapeHtml(a.name)} • ${escapeHtml(a.role)}${
          a.frozen ? " [Muzlatilgan]" : ""
        }</option>`
    )
    .join("");

  const taskAssigneeSelect = document.getElementById("newTaskAssignee");
  taskAssigneeSelect.innerHTML = state.admins
    .map((a) => `<option value="${escapeHtml(a.name)}">${escapeHtml(a.name)}</option>`)
    .join("");

  const issueAssigneeSelect = document.getElementById("issueAssignee");
  if (issueAssigneeSelect) {
    issueAssigneeSelect.innerHTML = getAssigneeOptions()
      .map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
      .join("");
  }

  document.getElementById("adminCountChip").textContent = `${state.admins.length} ta profil`;

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

  if (!Array.isArray(state.personalNotes[curAdmin.id])) state.personalNotes[curAdmin.id] = [];
  const notes = state.personalNotes[curAdmin.id];

  document.getElementById("notesOwnerLabel").textContent = curAdmin.name;
  document.getElementById("adminNotesCountChip").textContent = `${notes.length} ta eslatma`;

  const notesContainer = document.getElementById("personalNotesList");
  notesContainer.innerHTML = notes.length
    ? notes
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
        .join("")
    : `<div class="muted-text">${escapeHtml(curAdmin.name)} uchun hali shaxsiy eslatma yo‘q.</div>`;

  document.getElementById("dailyReportDateLabel").textContent = new Date().toLocaleDateString("uz-UZ", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

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
            <strong>${escapeHtml(adm.name)} (${escapeHtml(adm.role)})</strong>
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

function renderShiftHandover() {
  const summaryEl = document.getElementById("shiftAutoSummary");
  const displayEl = document.getElementById("shiftSavedDisplay");
  if (!summaryEl || !displayEl) return;

  summaryEl.textContent = buildHandoverSummaryText().autoLine;
  const ho = state.shiftHandover || {};
  displayEl.innerHTML = `
    <span class="report-tag">🔄 Smena topshiruv yozuvi</span>
    <div style="margin-top:4px;"><strong>E’tibor berish kerak:</strong> ${escapeHtml(ho.note || "—")}</div>
    <div class="muted-text" style="margin-top:2px;">Mas’ul: ${escapeHtml(ho.by || "—")} • ${escapeHtml(ho.updatedAt || "")}</div>
  `;
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
    document.getElementById("emptyResetBtn")?.addEventListener("click", resetFilters);
    return;
  }

  listEl.innerHTML = filtered
    .map((item) => {
      const isRead = Array.isArray(item.readBy) && item.readBy.includes(curAdmin?.id);
      const readReadersCount = Array.isArray(item.readBy) ? item.readBy.length : 0;
      const sla = getSlaInfo(item);
      const assignees = getAssigneeOptions(item.assignee);
      const notifiedCount = getNotifiedCount(item);
      const notifObj = item.notified || {};
      const showSafety = isSafetyRequired(item);
      const safetyCount = getSafetyDoneCount(item);
      const safetyObj = item.safetyCheck || {};

      return `
      <article class="issue-card ${!isRead ? "unread-by-admin" : ""}" data-id="${item.id}">
        <div class="issue-top">
          <div>
            <div class="issue-meta-top">
              <span class="code-pill">#${item.id}</span>
              <span class="priority-badge ${getPriorityClass(item.priority)}">${item.priority}</span>
              <span class="code-pill">${item.category}</span>
              <span class="code-pill ${sla.badgeClass}">⏱️ ${escapeHtml(sla.label)}</span>
              <span class="code-pill">${escapeHtml(formatConditionBadge(item.conditionTag))}</span>
              ${item.visualTag ? `<span class="visual-tag-pill">${escapeHtml(item.visualTag)}</span>` : ""}
              <span class="read-status-pill ${isRead ? "is-read" : "is-unread"}">
                ${isRead ? "✓ O‘qilgan" : "• Yangi (O‘qilmagan)"}
              </span>
            </div>
            <h3 class="issue-title">${escapeHtml(item.title)}</h3>
            <div class="issue-location">📍 ${escapeHtml(item.district)} • ${escapeHtml(item.address)} • 🕒 ${escapeHtml(item.timeAgo)} • 👁️ ${readReadersCount} kishi o‘qigan</div>
          </div>
          <button class="mini-btn detail-open-btn" data-id="${item.id}">O‘qish &amp; Shkala</button>
        </div>

        <p class="issue-desc">${escapeHtml(item.description)}</p>

        <div class="assignment-bar" style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:8px 0;">
          <label class="muted-text" for="brigade-${item.id}">Brigada:</label>
          <select class="select-control small-select" id="brigade-${item.id}" data-brigade-id="${item.id}">
            ${BRIGADES.map(
              (b) => `<option value="${escapeHtml(b)}" ${item.brigade === b ? "selected" : ""}>${escapeHtml(b)}</option>`
            ).join("")}
          </select>

          <label class="muted-text" for="assignee-${item.id}">Javobgar:</label>
          <select class="select-control small-select" id="assignee-${item.id}" data-assignee-id="${item.id}">
            ${assignees.map(
              (person) => `<option value="${escapeHtml(person)}" ${item.assignee === person ? "selected" : ""}>${escapeHtml(person)}</option>`
            ).join("")}
          </select>

          <label class="muted-text" for="sla-${item.id}">SLA:</label>
          <select class="select-control small-select" id="sla-${item.id}" data-sla-id="${item.id}">
            ${SLA_OPTIONS.map(
              (hrs) => `<option value="${hrs}" ${Number(item.slaHours) === hrs ? "selected" : ""}>${hrs} soat</option>`
            ).join("")}
          </select>

          <label class="muted-text" for="cond-${item.id}">Sharoit:</label>
          <select class="select-control small-select" id="cond-${item.id}" data-cond-id="${item.id}">
            ${WEATHER_CONDITIONS.map(
              (cond) => `<option value="${escapeHtml(cond)}" ${item.conditionTag === cond ? "selected" : ""}>${escapeHtml(formatConditionBadge(cond))}</option>`
            ).join("")}
          </select>
        </div>

        <div class="notify-bar" style="display:flex; flex-wrap:wrap; gap:6px; align-items:center; margin:6px 0;">
          <span class="muted-text" style="font-size:0.8rem;">📢 Xabardor (${notifiedCount}/3):</span>
          ${NOTIFY_TARGETS.map((t) => {
            const active = Boolean(notifObj[t.key]);
            return `
              <button
                type="button"
                class="mini-btn ${active ? "active-toggle" : ""}"
                data-notify-issue="${item.id}"
                data-notify-key="${t.key}"
              >
                ${active ? "✓" : "+"} ${escapeHtml(t.label)}
              </button>
            `;
          }).join("")}
        </div>

        ${
          showSafety
            ? `
          <div class="safety-bar" style="display:flex; flex-wrap:wrap; gap:6px; align-items:center; margin:6px 0 10px; padding:8px; border-radius:8px; background:rgba(234,179,8,0.08);">
            <span class="muted-text" style="font-size:0.8rem; font-weight:600;">⚠️ Xavfsizlik tekshiruvi (${safetyCount}/3):</span>
            ${SAFETY_CHECKS.map((sc) => {
              const checked = Boolean(safetyObj[sc.key]);
              return `
                <button
                  type="button"
                  class="mini-btn ${checked ? "active-toggle" : ""}"
                  data-safety-issue="${item.id}"
                  data-safety-key="${sc.key}"
                >
                  ${checked ? "✓" : "○"} ${escapeHtml(sc.label)}
                </button>
              `;
            }).join("")}
          </div>
        `
            : ""
        }

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
        item.status === "Hal qilindi" ? "resolved" : item.priority === "Juda Shoshilinch" ? "urgent" : "";
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

  const sla = getSlaInfo(selected);
  const safetyLine = isSafetyRequired(selected) ? ` • ⚠️ Xavfsizlik: ${getSafetyDoneCount(selected)}/3` : "";
  infoBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:4px;">
      <strong>#${selected.id} — ${escapeHtml(selected.title)}</strong>
      <span class="priority-badge ${getPriorityClass(selected.priority)}">${selected.status}</span>
    </div>
    <div class="muted-text">${escapeHtml(selected.district)} • ${escapeHtml(selected.address)}</div>
    <div class="muted-text" style="margin-top:4px;">🛠️ ${escapeHtml(selected.brigade || "Biriktirilmagan")} • 👤 ${escapeHtml(selected.assignee || "Belgilanmagan")} • ⏱️ ${escapeHtml(sla.label)}</div>
    <div class="muted-text" style="margin-top:2px;">${escapeHtml(formatConditionBadge(selected.conditionTag))} • 📢 ${getNotifiedCount(selected)}/3 xabardor${escapeHtml(safetyLine)}</div>
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
  const maxCount = Math.max(
    1,
    ...SIRDARYO_DISTRICTS.map((d) => state.issues.filter((i) => i.district === d).length)
  );

  document.getElementById("districtBars").innerHTML = SIRDARYO_DISTRICTS.map((d) => {
    const count = state.issues.filter((i) => i.district === d).length;
    const pct = Math.round((count / maxCount) * 100);
    const isSelected = state.selectedDistrict === d;
    return `
      <button class="district-row" data-district-filter="${escapeHtml(d)}">
        <div class="district-row-top">
          <span style="${isSelected ? "color:var(--primary); font-weight:700;" : ""}">${escapeHtml(d)}</span>
          <span>${count} ta</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${pct}%;"></div>
        </div>
      </button>
    `;
  }).join("");
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
        <div class="muted-text">${escapeHtml(item.district)} • ${escapeHtml(item.brigade || item.service)} • Javobgar: ${escapeHtml(item.assignee || "—")}</div>
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
        m.district ? i.district === m.district : m.name.toLowerCase().includes(i.district.toLowerCase())
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

  const readersNames = item.readBy.map((id) => state.admins.find((a) => a.id === id)?.name).filter(Boolean);
  const sla = getSlaInfo(item);
  const notifObj = item.notified || {};
  const showSafety = isSafetyRequired(item);
  const safetyObj = item.safetyCheck || {};

  const activeIdx = Math.max(0, STAGES.indexOf(item.status));
  const modal = document.getElementById("detailModal");
  document.getElementById("detailCode").textContent = `#${item.id}`;
  document.getElementById("detailModalTitle").textContent = item.title;
  document.getElementById("detailModalBody").innerHTML = `
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <span class="priority-badge ${getPriorityClass(item.priority)}">${item.priority}</span>
      <span class="code-pill">Yo‘nalish: ${escapeHtml(item.category)}</span>
      <span class="code-pill">Holat: ${escapeHtml(item.status)}</span>
      <span class="code-pill ${sla.badgeClass}">⏱️ ${escapeHtml(sla.label)}</span>
      <span class="code-pill">${escapeHtml(formatConditionBadge(item.conditionTag))}</span>
      ${item.visualTag ? `<span class="visual-tag-pill">${escapeHtml(item.visualTag)}</span>` : ""}
    </div>
    <p><strong>Manzil:</strong> Sirdaryo viloyati, ${escapeHtml(item.district)}, ${escapeHtml(item.address)}</p>
    <p><strong>Brigada:</strong> ${escapeHtml(item.brigade || "Biriktirilmagan")} • <strong>Javobgar shaxs:</strong> ${escapeHtml(item.assignee || "Belgilanmagan")}</p>
    <p><strong>Mas’ul tashkilot:</strong> ${escapeHtml(item.service)}</p>
    <p><strong>Tavsif:</strong> ${escapeHtml(item.description)}</p>
    <p><strong>O‘qiganlar:</strong> ${readersNames.length ? escapeHtml(readersNames.join(", ")) : "Hali o‘qilmagan"}</p>

    <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin:8px 0;">
      <strong>Xabardor qilish ro‘yxati (${getNotifiedCount(item)}/3):</strong>
      ${NOTIFY_TARGETS.map((t) => {
        const active = Boolean(notifObj[t.key]);
        return `
          <button type="button" class="mini-btn ${active ? "active-toggle" : ""}" data-detail-notify="${t.key}">
            ${active ? "✓" : "+"} ${escapeHtml(t.label)}
          </button>
        `;
      }).join("")}
    </div>

    ${
      showSafety
        ? `
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin:8px 0; padding:8px; border-radius:8px; background:rgba(234,179,8,0.08);">
        <strong>⚠️ Xavfsizlik tekshiruvi (${getSafetyDoneCount(item)}/3):</strong>
        ${SAFETY_CHECKS.map((sc) => {
          const checked = Boolean(safetyObj[sc.key]);
          return `
            <button type="button" class="mini-btn ${checked ? "active-toggle" : ""}" data-detail-safety="${sc.key}">
              ${checked ? "✓" : "○"} ${escapeHtml(sc.label)}
            </button>
          `;
        }).join("")}
      </div>
    `
        : ""
    }

    <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin:8px 0;">
      <strong>SLA muddatini o‘zgartirish:</strong>
      ${SLA_OPTIONS.map(
        (hrs) => `<button type="button" class="mini-btn ${Number(item.slaHours) === hrs ? "active-toggle" : ""}" data-set-sla="${hrs}">${hrs} soat</button>`
      ).join("")}
    </div>

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
            ? item.comments.map((c) => `<div class="comment-item"><strong>${escapeHtml(c.author)}:</strong> ${escapeHtml(c.text)}</div>`).join("")
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
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nameVal = document.getElementById("loginFullName").value;
    const roleVal = document.getElementById("loginRole").value;
    const codeVal = document.getElementById("loginAdminCode").value;
    const distVal = document.getElementById("loginDistrict").value;
    const phoneVal = document.getElementById("loginPhone").value;
    loginUserByName(nameVal, distVal, phoneVal, roleVal, codeVal);
  });

  document.getElementById("quickAccountsList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-quick-login-id]");
    if (!btn) return;
    const found = state.admins.find((a) => a.id === btn.dataset.quickLoginId);
    if (found) {
      loginUserByName(found.name, found.district, found.phone, found.role, ADMIN_ACCESS_CODE);
    }
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    state.isAuthenticated = false;
    saveState();
    renderAuthScreen();
    showToast("Profildan chiqdingiz");
  });

  document.getElementById("openSidebarBtn").addEventListener("click", () => {
    openAdminPanelModal();
  });

  document.getElementById("closeAdminPanelModalBtn").addEventListener("click", () => {
    document.getElementById("adminPanelModal").classList.add("hidden");
  });
  document.getElementById("closeAdminPanelModalOkBtn").addEventListener("click", () => {
    document.getElementById("adminPanelModal").classList.add("hidden");
  });
  document.getElementById("jumpToAdminsSectionBtn").addEventListener("click", () => {
    document.getElementById("adminPanelModal").classList.add("hidden");
    document.getElementById("adminsSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("closeSidebarBtn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
  });

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      if (view === "admins" && !hasAdminPanelAccess()) {
        showToast("⛔ Admin Panel faqat Bosh Admin yoki O‘quvchi Admin uchun!");
        return;
      }
      document.querySelectorAll(".nav-item").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("currentBreadcrumb").textContent = btn.textContent.trim().replace(/\d+$/, "").trim();

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

  document.getElementById("activeAdminSelect").addEventListener("change", (e) => {
    state.currentAdminId = e.target.value;
    renderAll();
    showToast(`Faol profil: ${getCurrentAdmin().name} (${getCurrentAdmin().role})`);
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
    if (!hasAdminPanelAccess()) {
      showToast("⛔ Faqat Bosh Admin yoki O‘quvchi Admin profil qo‘sha oladi!");
      return;
    }
    if (!ensureAdminNotFrozen("Yangi profil qo‘shish")) return;

    const fullName = document.getElementById("newAdminName").value.trim();
    const phoneVal = document.getElementById("newAdminPhone").value.trim();
    const districtVal = document.getElementById("newAdminDistrict").value;
    const roleVal = document.getElementById("newAdminRole").value;
    if (!fullName) return;

    const newId = `adm-${Date.now()}`;
    state.admins.push({
      id: newId,
      name: fullName,
      initials: makeInitials(fullName),
      phone: phoneVal || "Ko‘rsatilmagan",
      district: districtVal,
      role: roleVal,
      frozen: false,
      isSuper: roleVal === "Bosh Admin",
      commentsCount: 0,
      resolvedCount: 0
    });
    state.personalNotes[newId] = [];
    e.target.reset();
    renderAll();
    showToast(`${fullName} (${roleVal}) qo‘shildi`);
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
      showToast(adm.frozen ? `❄️ ${adm.name} muzlatildi` : `✓ ${adm.name} faollashtirildi`);
      return;
    }

    const removeBtn = e.target.closest("[data-remove-admin]");
    if (removeBtn) {
      if (!ensureAdminNotFrozen("Profilni o‘chirish")) return;
      const id = removeBtn.dataset.removeAdmin;
      state.admins = state.admins.filter((a) => a.id !== id);
      delete state.personalNotes[id];
      if (state.currentAdminId === id) state.currentAdminId = state.admins[0]?.id || "adm-1";
      renderAll();
      showToast("Profil olib tashlandi");
    }
  });

  document.getElementById("addPersonalNoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const curAdmin = getCurrentAdmin();
    if (!curAdmin) return;
    const input = document.getElementById("personalNoteInput");
    const text = input.value.trim();
    if (!text) return;

    if (!Array.isArray(state.personalNotes[curAdmin.id])) state.personalNotes[curAdmin.id] = [];
    state.personalNotes[curAdmin.id].unshift({ id: `n-${Date.now()}`, text, done: false });
    input.value = "";
    renderPersonalNotesAndDailyReport();
    saveState();
    showToast("Shaxsiy eslatma saqlandi");
  });

  document.getElementById("personalNotesList").addEventListener("change", (e) => {
    const chk = e.target.closest(".note-toggle-chk");
    if (!chk) return;
    const notes = state.personalNotes[getCurrentAdmin()?.id] || [];
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
    state.personalNotes[curAdmin.id] = (state.personalNotes[curAdmin.id] || []).filter((n) => n.id !== delBtn.dataset.delNote);
    renderPersonalNotesAndDailyReport();
    saveState();
    showToast("Eslatma o‘chirildi");
  });

  document.getElementById("saveHandoverForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ensureAdminNotFrozen("Smena topshirish xulosasini saqlash")) return;
    const input = document.getElementById("handoverNoteInput");
    const noteText = input.value.trim();
    if (!noteText) return;
    const curAdmin = getCurrentAdmin();
    const nowTime = new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });

    state.shiftHandover = { note: noteText, by: curAdmin?.name || "Navbatchi", updatedAt: `Bugun, ${nowTime}` };
    input.value = "";
    renderShiftHandover();
    saveState();
    showToast("Smena topshirish xulosasi saqlandi");
  });

  document.getElementById("copyHandoverBtn").addEventListener("click", () => {
    const text = buildHandoverSummaryText().fullCopy;
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).catch(() => {});
    showToast("Smena topshirish xulosasi nusxalandi");
  });

  document.getElementById("presetBar").addEventListener("click", (e) => {
    const btn = e.target.closest(".preset-btn");
    if (!btn) return;
    state.selectedPreset = btn.dataset.preset;
    renderAll();
  });

  document.getElementById("addTaskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!ensureAdminNotFrozen("Vazifa qo‘shish")) return;
    const input = document.getElementById("newTaskText");
    const assignee = document.getElementById("newTaskAssignee").value;
    const text = input.value.trim();
    if (!text) return;
    state.planTasks.unshift({ id: `t-${Date.now()}`, text, assignee, done: false });
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

  document.getElementById("lockLayoutBtn").addEventListener("click", () => {
    state.layoutLocked = !state.layoutLocked;
    applyLayoutAndSettings();
    saveState();
    showToast(state.layoutLocked ? "Joylashuv qulflandi" : "Joylashuv ochildi");
  });

  document.getElementById("sectionOrderList").addEventListener("click", (e) => {
    const btn = e.target.closest(".move-sec-btn");
    if (!btn || state.layoutLocked) return;
    const idx = state.sectionOrder.indexOf(btn.dataset.sec);
    if (idx === -1) return;
    const swapIdx = btn.dataset.dir === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= state.sectionOrder.length) return;
    const copy = [...state.sectionOrder];
    [copy[idx], copy[swapIdx]] = [copy[swapIdx], copy[idx]];
    state.sectionOrder = copy;
    applyLayoutAndSettings();
    saveState();
  });

  document.getElementById("densityGroup").addEventListener("click", (e) => {
    const btn = e.target.closest(".density-btn");
    if (!btn) return;
    state.density = btn.dataset.density;
    applyLayoutAndSettings();
    saveState();
  });

  document.getElementById("workspaceModeGroup").addEventListener("click", (e) => {
    const btn = e.target.closest(".ws-btn");
    if (!btn) return;
    state.workspaceMode = btn.dataset.wsmode;
    applyLayoutAndSettings();
    saveState();
  });

  document.getElementById("resetLayoutOrderBtn").addEventListener("click", () => {
    state.sectionOrder = DEFAULT_SECTION_ORDER.map((s) => s.id);
    state.density = "comfortable";
    state.workspaceMode = "split";
    state.layoutLocked = true;
    applyLayoutAndSettings();
    saveState();
    showToast("Standart tartib qaytarildi");
  });

  document.getElementById("themeToggleBtn").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    renderAll();
  });

  document.getElementById("langToggleBtn").addEventListener("click", () => {
    state.lang = state.lang === "uz" ? "lat" : "uz";
    renderAll();
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
      const found = state.notifications.find((n) => n.id === Number(li.dataset.notifId));
      if (found) found.read = true;
      renderNotifications();
      saveState();
    }
  });
  document.getElementById("markAllReadBtn").addEventListener("click", () => {
    state.notifications.forEach((n) => (n.read = true));
    renderNotifications();
    saveState();
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
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(phone).catch(() => {});
    showToast(`Raqam nusxalandi: ${phone}`);
  });

  document.getElementById("printReportBtn").addEventListener("click", () => window.print());

  const addModal = document.getElementById("addIssueModal");
  document.getElementById("openAddModalBtn").addEventListener("click", () => {
    if (!ensureAdminNotFrozen("Yangi muammo qo‘shish")) return;
    renderAdminSwitcherAndGrid();
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
    const brigade = document.getElementById("issueBrigade").value;
    const assignee = document.getElementById("issueAssignee").value;
    const slaHours = Number(document.getElementById("issueSlaHours").value) || 24;
    const conditionTag = document.getElementById("issueCondition").value;
    const address = document.getElementById("issueAddress").value.trim();
    const service = document.getElementById("issueService").value.trim() || "Sirdaryo Kommunal Xizmati";
    const visualTag = document.getElementById("issueVisualTag").value;
    const description = document.getElementById("issueDesc").value.trim();
    const curAdmin = getCurrentAdmin();

    const notified = {
      mahallaChair: document.getElementById("notifyMahallaChair").checked,
      districtDisp: document.getElementById("notifyDistrictDisp").checked,
      brigadeLead: document.getElementById("notifyBrigadeLead").checked
    };

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
      brigade,
      assignee,
      slaHours,
      createdAt: Date.now(),
      conditionTag,
      notified,
      safetyCheck: { areaDisconnected: false, citizensNotified: false, emergencyContacted: false },
      service,
      timeAgo: "Hozirgina",
      votes: 1,
      voted: true,
      x: Math.floor(20 + Math.random() * 62),
      y: Math.floor(20 + Math.random() * 58),
      readBy: curAdmin ? [curAdmin.id] : [],
      description,
      comments: []
    };

    state.issues.unshift(newIssue);
    state.activeMapPinId = newIssue.id;
    e.target.reset();
    document.getElementById("notifyMahallaChair").checked = true;
    addModal.classList.add("hidden");
    renderAll();
    showToast(`#${newIssue.id} murojaat qo‘shildi`);
  });

  document.getElementById("issuesList").addEventListener("click", (e) => {
    const safetyBtn = e.target.closest("[data-safety-issue]");
    if (safetyBtn) {
      if (!ensureAdminNotFrozen("Xavfsizlik tekshiruvini yangilash")) return;
      const item = state.issues.find((i) => i.id === safetyBtn.dataset.safetyIssue);
      const key = safetyBtn.dataset.safetyKey;
      if (!item || !key) return;
      if (!item.safetyCheck) item.safetyCheck = {};
      item.safetyCheck[key] = !item.safetyCheck[key];
      renderAll();
      return;
    }

    const notifyBtn = e.target.closest("[data-notify-issue]");
    if (notifyBtn) {
      if (!ensureAdminNotFrozen("Xabardor qilish holatini o‘zgartirish")) return;
      const item = state.issues.find((i) => i.id === notifyBtn.dataset.notifyIssue);
      const key = notifyBtn.dataset.notifyKey;
      if (!item || !key) return;
      if (!item.notified) item.notified = {};
      item.notified[key] = !item.notified[key];
      renderAll();
      return;
    }

    const voteBtn = e.target.closest("[data-vote-id]");
    if (voteBtn) {
      const item = state.issues.find((i) => i.id === voteBtn.dataset.voteId);
      if (!item) return;
      item.voted = !item.voted;
      item.votes += item.voted ? 1 : -1;
      renderAll();
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
      if (idx >= 0) item.readBy.splice(idx, 1);
      else item.readBy.push(curAdmin.id);
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
      if (state.activeMapPinId === id) state.activeMapPinId = state.issues[0]?.id || "";
      renderAll();
      showToast(`#${id} murojaat o‘chirildi`);
    }
  });

  document.getElementById("issuesList").addEventListener("change", (e) => {
    const brigadeSel = e.target.closest("[data-brigade-id]");
    if (brigadeSel) {
      if (!ensureAdminNotFrozen("Brigada biriktirish")) return renderIssues();
      const item = state.issues.find((i) => i.id === brigadeSel.dataset.brigadeId);
      if (item) {
        item.brigade = brigadeSel.value;
        renderAll();
      }
      return;
    }

    const assigneeSel = e.target.closest("[data-assignee-id]");
    if (assigneeSel) {
      if (!ensureAdminNotFrozen("Javobgar shaxsni belgilash")) return renderIssues();
      const item = state.issues.find((i) => i.id === assigneeSel.dataset.assigneeId);
      if (item) {
        item.assignee = assigneeSel.value;
        renderAll();
      }
      return;
    }

    const slaSel = e.target.closest("[data-sla-id]");
    if (slaSel) {
      if (!ensureAdminNotFrozen("SLA muddatini o‘zgartirish")) return renderIssues();
      const item = state.issues.find((i) => i.id === slaSel.dataset.slaId);
      if (item) {
        item.slaHours = Number(slaSel.value) || 24;
        renderAll();
      }
      return;
    }

    const condSel = e.target.closest("[data-cond-id]");
    if (condSel) {
      if (!ensureAdminNotFrozen("Sharoitni o‘zgartirish")) return renderIssues();
      const item = state.issues.find((i) => i.id === condSel.dataset.condId);
      if (item) {
        item.conditionTag = condSel.value;
        renderAll();
      }
      return;
    }

    const sel = e.target.closest("[data-status-id]");
    if (!sel) return;
    if (!ensureAdminNotFrozen("Holatni o‘zgartirish")) return renderIssues();
    const item = state.issues.find((i) => i.id === sel.dataset.statusId);
    const curAdmin = getCurrentAdmin();
    if (!item) return;
    const prevStatus = item.status;
    item.status = sel.value;
    if (prevStatus !== "Hal qilindi" && item.status === "Hal qilindi" && curAdmin) {
      curAdmin.resolvedCount = (curAdmin.resolvedCount || 0) + 1;
    }
    renderAll();
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
  });

  const detailModal = document.getElementById("detailModal");
  document.getElementById("detailModalBody").addEventListener("click", (e) => {
    const detailSafetyBtn = e.target.closest("[data-detail-safety]");
    if (detailSafetyBtn && currentDetailIssueId) {
      if (!ensureAdminNotFrozen("Xavfsizlik tekshiruvini yangilash")) return;
      const item = state.issues.find((i) => i.id === currentDetailIssueId);
      const key = detailSafetyBtn.dataset.detailSafety;
      if (!item || !key) return;
      if (!item.safetyCheck) item.safetyCheck = {};
      item.safetyCheck[key] = !item.safetyCheck[key];
      renderAll();
      openDetailModal(item.id);
      return;
    }

    const detailNotifBtn = e.target.closest("[data-detail-notify]");
    if (detailNotifBtn && currentDetailIssueId) {
      if (!ensureAdminNotFrozen("Xabardor qilish holatini o‘zgartirish")) return;
      const item = state.issues.find((i) => i.id === currentDetailIssueId);
      const key = detailNotifBtn.dataset.detailNotify;
      if (!item || !key) return;
      if (!item.notified) item.notified = {};
      item.notified[key] = !item.notified[key];
      renderAll();
      openDetailModal(item.id);
      return;
    }

    const slaBtn = e.target.closest("[data-set-sla]");
    if (slaBtn && currentDetailIssueId) {
      if (!ensureAdminNotFrozen("SLA muddatini o‘zgartirish")) return;
      const item = state.issues.find((i) => i.id === currentDetailIssueId);
      if (!item) return;
      item.slaHours = Number(slaBtn.dataset.setSla) || 24;
      renderAll();
      openDetailModal(item.id);
      return;
    }

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
      item.comments.push({ author: curAdmin?.name || "Foydalanuvchi", text });
      if (curAdmin) curAdmin.commentsCount = (curAdmin.commentsCount || 0) + 1;
      input.value = "";
      saveState();
      openDetailModal(issueId);
    }
  });

  const helpModal = document.getElementById("helpModal");
  document.getElementById("openHelpBtn").addEventListener("click", () => helpModal.classList.remove("hidden"));
  document.getElementById("closeHelpModalBtn").addEventListener("click", () => helpModal.classList.add("hidden"));
  document.getElementById("closeHelpOkBtn").addEventListener("click", () => helpModal.classList.add("hidden"));

  document.getElementById("fontDecreaseBtn").addEventListener("click", () => {
    state.fontScale = Math.max(0.88, Number((state.fontScale - 0.06).toFixed(2)));
    renderAll();
  });

  document.getElementById("fontResetBtn").addEventListener("click", () => {
    state.fontScale = 1;
    renderAll();
  });

  document.getElementById("fontIncreaseBtn").addEventListener("click", () => {
    state.fontScale = Math.min(1.24, Number((state.fontScale + 0.06).toFixed(2)));
    renderAll();
  });

  document.getElementById("autosaveToggleBtn").addEventListener("click", () => {
    state.autosave = !state.autosave;
    renderAll();
  });

  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state.issues, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sirdaryo-mahalla-nazorat.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("resetDemoBtn").addEventListener("click", () => {
    state = structuredClone(DEFAULT_STATE);
    localStorage.removeItem(STORAGE_KEY);
    renderAll();
    showToast("Boshlang‘ich ma’lumotlar tiklandi");
  });

  const adminModal = document.getElementById("adminPanelModal");
  [addModal, detailModal, helpModal, adminModal].forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.add("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  renderAll();
});
/* =========================================================
   ADMIN PANEL QO'SHIMCHASI (FAYL OXIRIGA QO'SHISH UCHUN)
   1. Saytni boshqarish (murojaat qo'shish, ovoz berish, e'lon)
   2. Odamlar nima qilyapti? (so'nggi harakatlar)
   ========================================================= */

(function attachAdminPanelFooterAddon() {
  if (typeof state === "undefined") return;

  if (!state.siteControls) {
    state.siteControls = {
      allowNewIssues: true,
      allowVoting: true,
      bannerText: ""
    };
  }

  if (!Array.isArray(state.activityLog)) {
    state.activityLog = [
      { time: "18:45", user: "Odilbek R.", action: "#E-802 muammosiga ovoz berdi" },
      { time: "18:20", user: "Hamidov A.", action: "#W-104 holatini O‘rganilmoqda ga o‘zgartirdi" },
      { time: "17:55", user: "Hamdov A.", action: "Smena topshirish xulosasini yangiladi" }
    ];
  }

  function pushAdminActivity(actorName, detailText) {
    const who = actorName || (typeof getCurrentAdmin === "function" ? getCurrentAdmin()?.name : "") || "Foydalanuvchi";
    const clock = new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });
    state.activityLog.unshift({ time: clock, user: who, action: detailText });
    if (state.activityLog.length > 20) state.activityLog.length = 20;
  }

  function syncSiteAccessControls() {
    const ctrl = state.siteControls || { allowNewIssues: true, allowVoting: true, bannerText: "" };

    const addIssueBtn = document.getElementById("openAddModalBtn");
    if (addIssueBtn) {
      addIssueBtn.disabled = !ctrl.allowNewIssues;
      addIssueBtn.style.opacity = ctrl.allowNewIssues ? "1" : "0.55";
      addIssueBtn.title = ctrl.allowNewIssues ? "" : "Admin tomonidan vaqtincha yopilgan";
    }

    document.querySelectorAll(".vote-btn").forEach((voteBtn) => {
      voteBtn.disabled = !ctrl.allowVoting;
      voteBtn.style.opacity = ctrl.allowVoting ? "1" : "0.55";
    });

    let noticeBar = document.getElementById("adminTopNoticeBar");
    if (!noticeBar) {
      noticeBar = document.createElement("div");
      noticeBar.id = "adminTopNoticeBar";
      noticeBar.className = "frozen-banner hidden";
      const actionSection = document.querySelector(".action-bar");
      actionSection?.parentNode?.insertBefore(noticeBar, actionSection);
    }

    if (ctrl.bannerText && ctrl.bannerText.trim()) {
      noticeBar.innerHTML = `<span>📢 <strong>Admin e’loni:</strong> ${escapeHtml(ctrl.bannerText.trim())}</span>`;
      noticeBar.classList.remove("hidden");
    } else {
      noticeBar.classList.add("hidden");
    }
  }

  window.openAdminPanelModal = function () {
    const activeUser = typeof getCurrentAdmin === "function" ? getCurrentAdmin() : null;
    const allowed =
      typeof hasAdminPanelAccess === "function"
        ? hasAdminPanelAccess(activeUser)
        : Boolean(activeUser && (activeUser.isSuper || /admin/i.test(activeUser.role || "")));

    if (!allowed) {
      if (typeof showToast === "function") {
        showToast("⛔ Bu bo‘lim faqat Bosh Admin yoki O‘quvchi Admin uchun!");
      }
      return;
    }

    const ctrl = state.siteControls;
    const recentLogs = (state.activityLog || []).slice(0, 6);
    const titleEl = document.getElementById("adminPanelModalTitle");
    const bodyEl = document.getElementById("adminPanelModalBody");
    const modalEl = document.getElementById("adminPanelModal");
    if (!bodyEl || !modalEl) return;

    if (titleEl) {
      titleEl.textContent = `Admin Panel • ${activeUser.name}`;
    }

    bodyEl.innerHTML = `
      <div class="sub-panel-box" style="margin-bottom:12px;">
        <strong style="display:block; margin-bottom:8px;">⚙️ Saytni boshqarish</strong>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
          <button type="button" class="mini-btn ${ctrl.allowNewIssues ? "active-toggle" : ""}" id="footerToggleIssuesBtn">
            ${ctrl.allowNewIssues ? "✓ Murojaat qo‘shish: Ochiq" : "✕ Murojaat qo‘shish: Yopiq"}
          </button>
          <button type="button" class="mini-btn ${ctrl.allowVoting ? "active-toggle" : ""}" id="footerToggleVotingBtn">
            ${ctrl.allowVoting ? "✓ Ovoz berish: Ochiq" : "✕ Ovoz berish: Yopiq"}
          </button>
        </div>
        <form id="footerAdminBannerForm" style="display:flex; gap:8px; flex-wrap:wrap;">
          <input
            type="text"
            id="footerAdminBannerInput"
            value="${escapeHtml(ctrl.bannerText || "")}"
            placeholder="Sayt tepasiga e’lon yozing (bo‘sh qoldirilsa o‘chadi)..."
            style="flex:1; min-width:200px;"
          />
          <button type="submit" class="primary-btn">Saqlash</button>
        </form>
      </div>

      <div class="sub-panel-box">
        <strong style="display:block; margin-bottom:8px;">👀 Odamlar nima qilyapti?</strong>
        <div class="comment-list">
          ${
            recentLogs.length
              ? recentLogs
                  .map(
                    (entry) => `
                    <div class="comment-item" style="display:flex; justify-content:space-between; gap:8px;">
                      <span><strong>${escapeHtml(entry.user)}</strong> — ${escapeHtml(entry.action)}</span>
                      <span class="muted-text">${escapeHtml(entry.time)}</span>
                    </div>
                  `
                  )
                  .join("")
              : `<div class="muted-text">Hozircha harakatlar yo‘q.</div>`
          }
        </div>
      </div>
    `;

    modalEl.classList.remove("hidden");
  };

  if (typeof renderAll === "function") {
    const prevRenderAll = renderAll;
    window.renderAll = function () {
      prevRenderAll();
      syncSiteAccessControls();
    };
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("#footerToggleIssuesBtn")) {
      state.siteControls.allowNewIssues = !state.siteControls.allowNewIssues;
      pushAdminActivity(
        typeof getCurrentAdmin === "function" ? getCurrentAdmin()?.name : "",
        `Yangi murojaat qo‘shishni ${state.siteControls.allowNewIssues ? "ochdi" : "yopdi"}`
      );
      if (typeof saveState === "function") saveState();
      syncSiteAccessControls();
      window.openAdminPanelModal();
      return;
    }

    if (e.target.closest("#footerToggleVotingBtn")) {
      state.siteControls.allowVoting = !state.siteControls.allowVoting;
      pushAdminActivity(
        typeof getCurrentAdmin === "function" ? getCurrentAdmin()?.name : "",
        `Ovoz berishni ${state.siteControls.allowVoting ? "ochdi" : "yopdi"}`
      );
      if (typeof saveState === "function") saveState();
      syncSiteAccessControls();
      window.openAdminPanelModal();
      return;
    }

    const voteBtn = e.target.closest("[data-vote-id]");
    if (voteBtn && !voteBtn.disabled) {
      const issueId = voteBtn.dataset.voteId;
      const foundIssue = Array.isArray(state.issues) ? state.issues.find((x) => x.id === issueId) : null;
      pushAdminActivity(
        typeof getCurrentAdmin === "function" ? getCurrentAdmin()?.name : "",
        `#${issueId} (${foundIssue?.title || "murojaat"}) bo‘yicha ovoz tugmasini bosdi`
      );
      if (typeof saveState === "function") saveState();
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "footerAdminBannerForm") {
      e.preventDefault();
      const inputEl = document.getElementById("footerAdminBannerInput");
      const newNotice = inputEl ? inputEl.value.trim() : "";
      state.siteControls.bannerText = newNotice;
      pushAdminActivity(
        typeof getCurrentAdmin === "function" ? getCurrentAdmin()?.name : "",
        newNotice ? "Sayt e’lonini yangiladi" : "Sayt e’lonini o‘chirdi"
      );
      if (typeof saveState === "function") saveState();
      syncSiteAccessControls();
      window.openAdminPanelModal();
      if (typeof showToast === "function") {
        showToast(newNotice ? "E’lon saqlandi" : "E’lon o‘chirildi");
      }
    }
  });

  syncSiteAccessControls();
})();
/* =========================================================
   ADMIN PANEL YAXLIT QO'SHIMCHASI (FAYL ENG OXIRIGA)
   - Saytni boshqarish (murojaat qo'shish, ovoz berish, e'lon)
   - Odamlar nima qilyapti? (so'nggi harakatlar + tozalash)
   - Tumanlar bo'yicha ochiq murojaatlar (tez o'tish)
   ========================================================= */

(function initAdminPanelAddonAtEnd() {
  if (typeof state === "undefined") return;

  if (!state.siteControls) {
    state.siteControls = {
      allowNewIssues: true,
      allowVoting: true,
      bannerText: ""
    };
  }

  if (!Array.isArray(state.activityLog)) {
    state.activityLog = [
      { time: "18:45", user: "Odilbek R.", action: "#E-802 muammosiga ovoz berdi" },
      { time: "18:20", user: "Hamidov A.", action: "#W-104 holatini O‘rganilmoqda ga o‘zgartirdi" },
      { time: "17:55", user: "Hamdov A.", action: "Smena topshirish xulosasini yangiladi" }
    ];
  }

  function recordAction(actor, text) {
    const who =
      actor ||
      (typeof getCurrentAdmin === "function" ? getCurrentAdmin()?.name : "") ||
      "Foydalanuvchi";
    const time = new Date().toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit"
    });
    state.activityLog.unshift({ time, user: who, action: text });
    if (state.activityLog.length > 20) state.activityLog.length = 20;
  }

  function applyControlsToPage() {
    const ctrl = state.siteControls || {
      allowNewIssues: true,
      allowVoting: true,
      bannerText: ""
    };

    const addBtn = document.getElementById("openAddModalBtn");
    if (addBtn) {
      addBtn.disabled = !ctrl.allowNewIssues;
      addBtn.style.opacity = ctrl.allowNewIssues ? "1" : "0.55";
      addBtn.title = ctrl.allowNewIssues ? "" : "Admin tomonidan vaqtincha yopilgan";
    }

    document.querySelectorAll(".vote-btn").forEach((btn) => {
      btn.disabled = !ctrl.allowVoting;
      btn.style.opacity = ctrl.allowVoting ? "1" : "0.55";
    });

    let banner = document.getElementById("adminTopNoticeBar");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "adminTopNoticeBar";
      banner.className = "frozen-banner hidden";
      const actionBar = document.querySelector(".action-bar");
      actionBar?.parentNode?.insertBefore(banner, actionBar);
    }

    if (ctrl.bannerText && ctrl.bannerText.trim()) {
      banner.innerHTML = `<span>📢 <strong>Admin e’loni:</strong> ${escapeHtml(ctrl.bannerText.trim())}</span>`;
      banner.classList.remove("hidden");
    } else {
      banner.classList.add("hidden");
    }
  }

  function getDistrictsList() {
    if (Array.isArray(SIRDARYO_DISTRICTS) && SIRDARYO_DISTRICTS.length) {
      return SIRDARYO_DISTRICTS;
    }
    if (Array.isArray(state.mahallas)) {
      return [...new Set(state.mahallas.map((m) => m.district).filter(Boolean))];
    }
    return [];
  }

  window.openAdminPanelModal = function () {
    const curUser = typeof getCurrentAdmin === "function" ? getCurrentAdmin() : null;
    const allowed =
      typeof hasAdminPanelAccess === "function"
        ? hasAdminPanelAccess(curUser)
        : Boolean(curUser && (curUser.isSuper || /admin/i.test(curUser.role || "")));

    if (!allowed) {
      if (typeof showToast === "function") {
        showToast("⛔ Bu bo‘lim faqat Bosh Admin yoki O‘quvchi Admin uchun!");
      }
      return;
    }

    const ctrl = state.siteControls;
    const logs = (state.activityLog || []).slice(0, 6);
    const districts = getDistrictsList();

    const districtButtonsHtml = districts
      .map((dist) => {
        const openCount = (state.issues || []).filter(
          (i) => i.district === dist && i.status !== "Hal qilindi"
        ).length;
        const urgentOpen = (state.issues || []).filter(
          (i) =>
            i.district === dist &&
            i.priority === "Juda Shoshilinch" &&
            i.status !== "Hal qilindi"
        ).length;

        return `
          <button
            type="button"
            class="mini-btn ${urgentOpen > 0 ? "active-toggle" : ""}"
            data-jump-district="${escapeHtml(dist)}"
          >
            📍 ${escapeHtml(dist)}: ${openCount} ochiq${urgentOpen > 0 ? ` (${urgentOpen} shoshilinch)` : ""}
          </button>
        `;
      })
      .join("");

    const titleEl = document.getElementById("adminPanelModalTitle");
    const bodyEl = document.getElementById("adminPanelModalBody");
    const modalEl = document.getElementById("adminPanelModal");
    if (!bodyEl || !modalEl) return;

    if (titleEl) {
      titleEl.textContent = `Admin Panel • ${curUser.name}`;
    }

    bodyEl.innerHTML = `
      <div class="sub-panel-box" style="margin-bottom:12px;">
        <strong style="display:block; margin-bottom:8px;">⚙️ Saytni boshqarish</strong>
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
          <button type="button" class="mini-btn ${ctrl.allowNewIssues ? "active-toggle" : ""}" id="endToggleIssuesBtn">
            ${ctrl.allowNewIssues ? "✓ Murojaat qo‘shish: Ochiq" : "✕ Murojaat qo‘shish: Yopiq"}
          </button>
          <button type="button" class="mini-btn ${ctrl.allowVoting ? "active-toggle" : ""}" id="endToggleVotingBtn">
            ${ctrl.allowVoting ? "✓ Ovoz berish: Ochiq" : "✕ Ovoz berish: Yopiq"}
          </button>
        </div>
        <form id="endAdminBannerForm" style="display:flex; gap:8px; flex-wrap:wrap;">
          <input
            type="text"
            id="endAdminBannerInput"
            value="${escapeHtml(ctrl.bannerText || "")}"
            placeholder="Sayt tepasiga e’lon yozing (bo‘sh qoldirilsa o‘chadi)..."
            style="flex:1; min-width:200px;"
          />
          <button type="submit" class="primary-btn">Saqlash</button>
        </form>
      </div>

      <div class="sub-panel-box" style="margin-bottom:12px;">
        <strong style="display:block; margin-bottom:8px;">🗺️ Tumanlar bo‘yicha ochiq murojaatlar</strong>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${districtButtonsHtml || `<span class="muted-text">Tumanlar topilmadi.</span>`}
        </div>
      </div>

      <div class="sub-panel-box">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:8px;">
          <strong>👀 Odamlar nima qilyapti?</strong>
          <button type="button" class="mini-btn" id="endClearLogsBtn">🗑️ Tozalash</button>
        </div>
        <div class="comment-list">
          ${
            logs.length
              ? logs
                  .map(
                    (item) => `
                    <div class="comment-item" style="display:flex; justify-content:space-between; gap:8px;">
                      <span><strong>${escapeHtml(item.user)}</strong> — ${escapeHtml(item.action)}</span>
                      <span class="muted-text">${escapeHtml(item.time)}</span>
                    </div>
                  `
                  )
                  .join("")
              : `<div class="muted-text">Hozircha harakatlar yo‘q.</div>`
          }
        </div>
      </div>
    `;

    modalEl.classList.remove("hidden");
  };

  if (typeof renderAll === "function") {
    const originalRenderAll = renderAll;
    window.renderAll = function () {
      originalRenderAll();
      applyControlsToPage();
    };
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("#endToggleIssuesBtn")) {
      state.siteControls.allowNewIssues = !state.siteControls.allowNewIssues;
      recordAction(
        null,
        `Yangi murojaat qo‘shishni ${state.siteControls.allowNewIssues ? "ochdi" : "yopdi"}`
      );
      if (typeof saveState === "function") saveState();
      applyControlsToPage();
      window.openAdminPanelModal();
      return;
    }

    if (e.target.closest("#endToggleVotingBtn")) {
      state.siteControls.allowVoting = !state.siteControls.allowVoting;
      recordAction(
        null,
        `Ovoz berishni ${state.siteControls.allowVoting ? "ochdi" : "yopdi"}`
      );
      if (typeof saveState === "function") saveState();
      applyControlsToPage();
      window.openAdminPanelModal();
      return;
    }

    if (e.target.closest("#endClearLogsBtn")) {
      state.activityLog = [];
      if (typeof saveState === "function") saveState();
      window.openAdminPanelModal();
      if (typeof showToast === "function") showToast("Harakatlar ro‘yxati tozalandi");
      return;
    }

    const jumpBtn = e.target.closest("[data-jump-district]");
    if (jumpBtn) {
      state.selectedDistrict = jumpBtn.dataset.jumpDistrict;
      if (typeof renderAll === "function") renderAll();
      document.getElementById("adminPanelModal")?.classList.add("hidden");
      document.getElementById("issuesSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof showToast === "function") showToast(`Hudud: ${state.selectedDistrict}`);
      return;
    }

    const voteBtn = e.target.closest("[data-vote-id]");
    if (voteBtn && !voteBtn.disabled) {
      const id = voteBtn.dataset.voteId;
      const issue = Array.isArray(state.issues) ? state.issues.find((x) => x.id === id) : null;
      recordAction(null, `#${id} (${issue?.title || "murojaat"}) ovoz tugmasini bosdi`);
      if (typeof saveState === "function") saveState();
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "endAdminBannerForm") {
      e.preventDefault();
      const input = document.getElementById("endAdminBannerInput");
      const val = input ? input.value.trim() : "";
      state.siteControls.bannerText = val;
      recordAction(null, val ? "Sayt e’lonini yangiladi" : "Sayt e’lonini o‘chirdi");
      if (typeof saveState === "function") saveState();
      applyControlsToPage();
      window.openAdminPanelModal();
      if (typeof showToast === "function") {
        showToast(val ? "E’lon saqlandi" : "E’lon o‘chirildi");
      }
    }
  });

  applyControlsToPage();
})();
/* =========================================================
   ADMIN PANEL QO'SHIMCHASI — 3-QISM (FAYL ENG OXIRIGA)
   1. Eng birinchi ochiq murojaat holatini tezkor yangilash
   2. Sayt boshqaruv sozlamalarini standartga qaytarish
   ========================================================= */

(function extendAdminPanelQuickStatusAndReset() {
  if (typeof state === "undefined" || typeof window.openAdminPanelModal !== "function") return;

  const prevOpenAdminPanelModal = window.openAdminPanelModal;

  function getFirstOpenIssue() {
    return Array.isArray(state.issues)
      ? state.issues.find((item) => item.status !== "Hal qilindi") || null
      : null;
  }

  window.openAdminPanelModal = function () {
    prevOpenAdminPanelModal();

    const modalEl = document.getElementById("adminPanelModal");
    const bodyEl = document.getElementById("adminPanelModalBody");
    if (!modalEl || modalEl.classList.contains("hidden") || !bodyEl) return;

    const firstControlBox = bodyEl.querySelector(".sub-panel-box");
    if (firstControlBox && !firstControlBox.querySelector("#endResetSiteControlsBtn")) {
      const resetBtn = document.createElement("button");
      resetBtn.type = "button";
      resetBtn.id = "endResetSiteControlsBtn";
      resetBtn.className = "mini-btn";
      resetBtn.style.marginLeft = "auto";
      resetBtn.textContent = "↺ Standart holat";

      const btnRow = firstControlBox.querySelector("div");
      if (btnRow) {
        btnRow.appendChild(resetBtn);
      } else {
        firstControlBox.appendChild(resetBtn);
      }
    }

    const firstOpen = getFirstOpenIssue();
    if (!bodyEl.querySelector("[data-admin-quick-issue-box]")) {
      const quickBox = document.createElement("div");
      quickBox.className = "sub-panel-box";
      quickBox.setAttribute("data-admin-quick-issue-box", "1");
      quickBox.style.marginBottom = "12px";

      if (firstOpen) {
        quickBox.innerHTML = `
          <strong style="display:block; margin-bottom:6px;">⚡ Tezkor holat: #${escapeHtml(firstOpen.id)} — ${escapeHtml(firstOpen.title)}</strong>
          <div class="muted-text" style="margin-bottom:8px;">📍 ${escapeHtml(firstOpen.district)} • Joriy holat: <strong>${escapeHtml(firstOpen.status)}</strong></div>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            <button type="button" class="mini-btn" data-quick-set-status="Brigada yuborildi" data-quick-issue-id="${escapeHtml(firstOpen.id)}">🛠️ Brigada yuborildi</button>
            <button type="button" class="mini-btn active-toggle" data-quick-set-status="Hal qilindi" data-quick-issue-id="${escapeHtml(firstOpen.id)}">✓ Hal qilindi</button>
          </div>
        `;
      } else {
        quickBox.innerHTML = `
          <strong style="display:block; margin-bottom:4px;">⚡ Tezkor holat</strong>
          <div class="muted-text">Ayni paytda barcha murojaatlar hal qilingan.</div>
        `;
      }

      const logBox = bodyEl.querySelectorAll(".sub-panel-box")[bodyEl.querySelectorAll(".sub-panel-box").length - 1];
      if (logBox) {
        logBox.insertAdjacentElement("beforebegin", quickBox);
      } else {
        bodyEl.appendChild(quickBox);
      }
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest("#endResetSiteControlsBtn")) {
      state.siteControls = {
        allowNewIssues: true,
        allowVoting: true,
        bannerText: ""
      };
      if (typeof saveState === "function") saveState();
      if (typeof renderAll === "function") renderAll();
      window.openAdminPanelModal();
      if (typeof showToast === "function") showToast("Sayt boshqaruv sozlamalari standartga qaytarildi");
      return;
    }

    const quickStatusBtn = e.target.closest("[data-quick-set-status]");
    if (quickStatusBtn) {
      const issueId = quickStatusBtn.dataset.quickIssueId;
      const nextStatus = quickStatusBtn.dataset.quickSetStatus;
      const targetIssue = Array.isArray(state.issues)
        ? state.issues.find((i) => i.id === issueId)
        : null;

      if (targetIssue && nextStatus) {
        targetIssue.status = nextStatus;
        if (Array.isArray(state.activityLog)) {
          const who = (typeof getCurrentAdmin === "function" ? getCurrentAdmin()?.name : "") || "Admin";
          const clock = new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" });
          state.activityLog.unshift({
            time: clock,
            user: who,
            action: `#${targetIssue.id} holatini "${nextStatus}" ga o‘zgartirdi`
          });
          if (state.activityLog.length > 20) state.activityLog.length = 20;
        }
        if (typeof saveState === "function") saveState();
        if (typeof renderAll === "function") renderAll();
        window.openAdminPanelModal();
        if (typeof showToast === "function") showToast(`#${targetIssue.id} -> ${nextStatus}`);
      }
    }
  });
})();

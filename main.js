const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const renderLabels = (selector, labels, className) => {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }
  if (!labels || !Array.isArray(labels)) {
    return;
  }
  container.innerHTML = "";
  labels.forEach((label) => {
    const span = document.createElement("span");
    span.className = className;
    span.textContent = label;
    container.appendChild(span);
  });
};

const renderGamePreviews = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "preview-card";

    const media = document.createElement("a");
    media.className = "preview-media";
    media.href = item.url;
    media.target = "_blank";
    media.rel = "noreferrer";

    const image = document.createElement("img");
    image.className = "preview-image";
    image.src = item.image;
    image.alt = item.title;

    const info = document.createElement("div");
    info.className = "preview-info";

    const title = document.createElement("a");
    title.className = "preview-title";
    title.href = item.url;
    title.target = "_blank";
    title.rel = "noreferrer";
    title.textContent = item.title;

    const company = document.createElement("span");
    company.className = "preview-company";
    company.textContent = item.company;

    media.appendChild(image);
    info.appendChild(title);
    info.appendChild(company);
    card.appendChild(media);
    card.appendChild(info);
    container.appendChild(card);
  });
};

const setContacts = (contacts) => {
  const email = document.querySelector('[data-field="email"]');
  if (email) {
    email.href = `mailto:${contacts.email}`;
    email.textContent = contacts.email;
  }
  const telegram = document.querySelector('[data-field="telegram"]');
  if (telegram) {
    telegram.href = contacts.telegram;
  }
  const github = document.querySelector('[data-field="github"]');
  if (github) {
    github.href = contacts.github;
  }
  const linkedin = document.querySelector('[data-field="linkedin"]');
  if (linkedin) {
    linkedin.href = contacts.linkedin;
  }
};

const setAvatar = (avatarPath) => {
  const img = document.querySelector('[data-field="avatar"]');
  if (img) {
    img.src = avatarPath;
  }
};

const setCompanyLogos = (logos) => {
  const entries = [
    { key: "vaveda", selector: '[data-field="logo-vaveda"]' },
    { key: "highcore", selector: '[data-field="logo-highcore"]' },
    { key: "smartspell", selector: '[data-field="logo-smartspell"]' },
    { key: "bondigame", selector: '[data-field="logo-bondigame"]' },
  ];
  entries.forEach((entry) => {
    const img = document.querySelector(entry.selector);
    if (img) {
      img.src = logos[entry.key];
    }
  });
};

const setCompanyPeriods = (periods) => {
  const entries = [
    { key: "vaveda", selector: '[data-field="time-vaveda"]' },
    { key: "highcore", selector: '[data-field="time-highcore"]' },
    { key: "smartspell", selector: '[data-field="time-smartspell"]' },
    { key: "bondigame", selector: '[data-field="time-bondigame"]' },
  ];
  entries.forEach((entry) => {
    const element = document.querySelector(entry.selector);
    if (element) {
      element.textContent = periods[entry.key];
    }
  });
};

const setCompanyGames = (companyGames) => {
  renderGamePreviews('[data-field="company-games-vaveda"]', companyGames.vaveda);
  renderGamePreviews('[data-field="company-games-highcore"]', companyGames.highcore);
  renderGamePreviews('[data-field="company-games-smartspell"]', companyGames.smartspell);
  renderGamePreviews('[data-field="company-games-bondigame"]', companyGames.bondigame);
};

const applyProfileConfig = (config) => {
  setText('[data-field="name"]', config.name);
  setText('[data-field="role"]', config.role);
  setText('[data-field="summary"]', config.summary);
  setText('[data-field="location"]', config.location);
  setText('[data-field="profile-text"]', config.profileText);
  renderLabels('[data-field="labels"]', config.labels, "label");
  renderLabels('[data-field="profile-tags"]', config.profileTags, "label label--ghost");
  renderLabels('[data-field="languages"]', config.languages, "label label--ghost");
  setAvatar(config.avatar);
  setContacts(config.contacts);
  setCompanyLogos(config.companyLogos);
  setCompanyPeriods(config.companyPeriods);
  setCompanyGames(config.companyGames);
};

document.addEventListener("DOMContentLoaded", () => {
  if (typeof profileConfig === 'undefined') {
    console.error('profileConfig is not defined');
    return;
  }
  applyProfileConfig(profileConfig);
});


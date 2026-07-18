const $ = (selector) => document.querySelector(selector);

const state = {
  activeCategory: "全部"
};

function renderProfile() {
  const { profile } = portfolioData;

  $("#brandName").textContent = profile.name;
  $("#footerName").textContent = profile.name;
  $("#heroEyebrow").textContent = profile.eyebrow;
  $("#heroTitle").textContent = profile.title;
  $("#heroDescription").textContent = profile.description;
  $("#heroImage").src = profile.heroImage;
  $("#aboutLead").textContent = profile.aboutLead;
  $("#aboutBody").textContent = profile.aboutBody;
  $("#contactIntro").textContent = profile.contactIntro;

  document.title = `${profile.name}｜作品集`;
}

function renderFilters() {
  const container = $("#filters");
  container.innerHTML = "";

  portfolioData.categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = `filter-button ${
      state.activeCategory === category ? "active" : ""
    }`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state.activeCategory = category;
      renderFilters();
      renderWorks();
    });
    container.appendChild(button);
  });
}

function renderWorks() {
  const container = $("#gallery");
  container.innerHTML = "";

  const visibleWorks = portfolioData.works.filter((work) => {
    return state.activeCategory === "全部" || work.category === state.activeCategory;
  });

  visibleWorks.forEach((work) => {
    const card = document.createElement("article");
    card.className = "work-card";
    card.innerHTML = `
      <img src="${work.image}" alt="${work.title}">
      <div class="work-card-copy">
        <p class="eyebrow">${work.category}・${work.year}</p>
        <h3>${work.title}</h3>
        <p>${work.medium}</p>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(work));
    container.appendChild(card);
  });
}

function renderTimeline() {
  const container = $("#timeline");
  container.innerHTML = "";

  portfolioData.timeline.forEach((item) => {
    const row = document.createElement("div");
    row.className = "timeline-item";
    row.innerHTML = `
      <div class="timeline-year">${item.year}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderContacts() {
  const container = $("#contactLinks");
  container.innerHTML = "";

  portfolioData.contacts.forEach((contact) => {
    const link = document.createElement("a");
    link.className = "contact-link";
    link.href = contact.url;
    if (contact.url.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    link.innerHTML = `
      <span>${contact.label}</span>
      <strong>${contact.text}</strong>
    `;

    container.appendChild(link);
  });
}

function openLightbox(work) {
  $("#lightboxImage").src = work.image;
  $("#lightboxImage").alt = work.title;
  $("#lightboxMeta").textContent = `${work.category}・${work.year}・${work.medium}`;
  $("#lightboxTitle").textContent = work.title;
  $("#lightboxDescription").textContent = work.description;
  $("#lightbox").showModal();
}

function setupEvents() {
  $("#year").textContent = new Date().getFullYear();

  $("#lightboxClose").addEventListener("click", () => {
    $("#lightbox").close();
  });

  $("#lightbox").addEventListener("click", (event) => {
    if (event.target === $("#lightbox")) {
      $("#lightbox").close();
    }
  });

  $("#menuButton").addEventListener("click", () => {
    $("#siteNav").classList.toggle("open");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      $("#siteNav").classList.remove("open");
    });
  });
}

renderProfile();
renderFilters();
renderWorks();
renderTimeline();
renderContacts();
setupEvents();

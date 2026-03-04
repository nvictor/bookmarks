const contexts = {
  personal: {
    label: "Personal stack",
    heroHint:
      "Personal mode — keep only this week's life links on the bar, tag everything archived in Raindrop as context:personal.",
    tiers: {
      bar: {
        title: "Bookmark bar · Weekly cockpit",
        copy: "This is your clickable workspace: icons for joy, an inbox that behaves like RAM, and folders that match the cadence of your week. Organize the icons row by muscle memory and the folders by workflow so you can launch into flow with one click and zero thought.",
        items: [
          {
            title: "🧭 Icon Row",
            detail:
              "Personal email, Hacker News, YouTube, Pandora, Raindrop, and communities stay as icon-only pins so the bar stays wide open.",
          },
          {
            title: "📥 Inbox",
            detail:
              "Drop anything you truly plan to revisit in the next few days, then clear it every Sunday morning over coffee.",
          },
          {
            title: "🌅 Routine",
            detail:
              "One click opens weather, news, finance, or journaling tabs so mornings start in the same groove.",
          },
          {
            title: "✈️ InFlight",
            detail:
              "A rotating folder for whatever deserves a sprint right now—trip planning, a big purchase, or a personal code project.",
          },
        ],
      },
      raindrop: {
        title: "Raindrop.io · Searchable archive",
        copy: "Tag every entry with context:personal so search stays scoped. Anything that is not actionable this week belongs down here.",
        items: [
          {
            title: "🏗 Projects Archive",
            detail:
              "Personal projects such as renovations, health plans, or coursework live here once the sprint is over.",
          },
          {
            title: "📚 Reference",
            detail:
              "Long-form learning resources and deep-dive tutorials stay searchable without crowding the bar.",
          },
          {
            title: "🧰 Tool Library",
            detail:
              "Experiments, progressive web apps, and online utilities you want to remember later.",
          },
          {
            title: "🛒 Home",
            detail:
              "Shopping lists, recipes, household management, finances, and other life-admin docs.",
          },
          {
            title: "🗄 Archive",
            detail:
              "Older seasons of life and bulk imports; keep nesting shallow so search keeps working.",
          },
        ],
      },
    },
    cadence: {
      dayTag: "Sunday reset",
      title: "Coffee + inbox triage",
      description:
        "Treat the bar like short-term memory; everything graduating to Raindrop gets tagged and forgotten until needed.",
      sliderLabel: "Links parked in the bar inbox",
      thresholds: [
        {
          limit: 4,
          text: "Cruising — leave the icons as-is and enjoy the routine folder as your launch checklist.",
        },
        {
          limit: 9,
          text: "Queue is warm — schedule a 20‑minute tidy-up before Sunday brunch and push anything older than a week to Raindrop.",
        },
        {
          limit: Infinity,
          text: "Overflow — sweep the inbox now, file big threads into Projects Archive with context:personal, and reopen only what needs action.",
        },
      ],
    },
  },
  work: {
    label: "Work stack",
    heroHint:
      "Work mode — the bar is your mission control, while Raindrop tagged context:work keeps research, dashboards, and policy docs searchable.",
    tiers: {
      bar: {
        title: "Bookmark bar · Operating console",
        copy: "Muscle-memory links stay up top so you can reset your workspace in seconds and see only the sprint in front of you. Organize the icons row by frequency and the folders by workflow so you can launch into flow with one click and zero thought.",
        items: [
          {
            title: "🧭 Icon Row",
            detail:
              "Email, Calendar, Slack, Jira, GitHub, and similar systems are pinned as icons for fast muscle-memory clicks.",
          },
          {
            title: "🌅 Startup",
            detail:
              "Middle-click one folder each morning to open Jira, inbox, calendar, and monitoring tabs in sequence.",
          },
          {
            title: "📥 Inbox",
            detail:
              "Temporary tickets, PRs, or research notes live here; clear it every Friday at 4:30 PM so the bar never becomes storage.",
          },
          {
            title: "🗂 Planning",
            detail:
              "Links to plans, spreadsheets, decks, or Miro boards that actively steer the work.",
          },
          {
            title: "🛠 Tools",
            detail:
              "CI/CD consoles, cloud dashboards, log viewers, and Linear/Jira search views you hop into constantly.",
          },
          {
            title: "✈️ InFlight",
            detail:
              "One folder per engagement (repo, staging link, design doc, monitoring). Archive it to Raindrop as soon as the work is signed off.",
          },
          {
            title: "📚 Docs",
            detail:
              "Framework docs, internal wikis, or API specs that you reference weekly.",
          },
          {
            title: "📊 Dashboards",
            detail:
              "Grafana, Looker, or BI boards that give an instant health check.",
          },
        ],
      },
      raindrop: {
        title: "Raindrop.io · Durable knowledge",
        copy: "Everything files into Raindrop with context:work so search can slice by engagement without touching the bar.",
        items: [
          {
            title: "🏗 Projects Archive",
            detail:
              "Project research and engagement-specific resources once the daily grind is done.",
          },
          {
            title: "📚 Reference",
            detail:
              "Playbooks, canonical docs, and API references too valuable to lose.",
          },
          {
            title: "🧰 Tool Library",
            detail:
              "Infra consoles, experiments, or scripts that you do not need on the bar but want one search away.",
          },
          {
            title: "🏢 Company",
            detail:
              "HR, benefits, org charts, policy docs, and anything that keeps company ops separate from engineering flow.",
          },
          {
            title: "🗄 Archive",
            detail:
              "Past projects and deprecated docs filed by year or project so the working set stays tiny.",
          },
        ],
      },
    },
    cadence: {
      dayTag: "Friday 4:30 PM",
      title: "Zero-inbox ritual",
      description:
        "Let the bar behave like sprint RAM; Raindrop holds the evidence, context, and compliance trail.",
      sliderLabel: "Tickets staged on the bar",
      thresholds: [
        {
          limit: 5,
          text: "Ship shape — keep the icons clean and kick off Startup to prep Monday's standup.",
        },
        {
          limit: 10,
          text: "Getting crowded — finish anything blocking review and spill the rest into Projects Archive (tagged context:work).",
        },
        {
          limit: Infinity,
          text: "Paging on-call clutter — pause and triage now so the bar is empty before the weekend handoff.",
        },
      ],
    },
  },
};

const tierLabels = {
  bar: "Tier one · Bookmark bar",
  raindrop: "Tier two · Raindrop.io",
};

const state = {
  context: "personal",
  tier: "bar",
  backlog: 4,
};

const app = document.querySelector("#app");

app.innerHTML = `
  <section class="hero">
    <div class="tag">Two-tier bookmarks</div>
    <h1>Bookmark Bar + Raindrop IO</h1>
    <p>One click launches the workbench, Raindrop.io keeps the library searchable. Toggle contexts to see how Victor runs personal versus work stacks.</p>
    <p class="context-hint" id="hero-context"></p>
  </section>

  <section class="panel">
    <div class="tag">Choose context</div>
    <div class="button-row" id="context-buttons">
      <button class="pill-button" data-context="personal">Personal stack</button>
      <button class="pill-button" data-context="work">Work stack</button>
    </div>
    <div class="tag" style="margin-top: 1.75rem;">Pick tier</div>
    <div class="button-row" id="tier-buttons">
      <button class="pill-button" data-tier="bar">Bookmark bar</button>
      <button class="pill-button" data-tier="raindrop">Raindrop.io</button>
    </div>
  </section>

  <section class="panel">
    <div class="cards-header">
      <div class="tag" id="tier-tag"></div>
      <h2 id="cards-title"></h2>
      <p id="cards-copy"></p>
    </div>
    <div class="card-grid" id="card-grid"></div>
  </section>

  <section>
    <article class="cadence-slab">
      <div class="tag cadence-day" id="cadence-day"></div>
      <h3 id="cadence-title"></h3>
      <p id="cadence-description"></p>
      <div class="slider-group">
        <label for="backlog-range" id="backlog-label"></label>
        <input type="range" min="0" max="15" value="${state.backlog}" id="backlog-range" />
      </div>
      <p class="cadence-output" id="cadence-output"></p>
    </article>
  </section>
`;

const heroContextEl = document.getElementById("hero-context");
const contextButtons = document.querySelectorAll("[data-context]");
const tierButtons = document.querySelectorAll("[data-tier]");
const tierTagEl = document.getElementById("tier-tag");
const cardsTitleEl = document.getElementById("cards-title");
const cardsCopyEl = document.getElementById("cards-copy");
const cardGridEl = document.getElementById("card-grid");
const cadenceDayEl = document.getElementById("cadence-day");
const cadenceTitleEl = document.getElementById("cadence-title");
const cadenceDescriptionEl = document.getElementById("cadence-description");
const backlogLabelEl = document.getElementById("backlog-label");
const backlogRangeEl = document.getElementById("backlog-range");
const cadenceOutputEl = document.getElementById("cadence-output");

const updateHero = () => {
  heroContextEl.textContent = contexts[state.context].heroHint;
};

const updateButtons = () => {
  contextButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.context === state.context);
  });
  tierButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tier === state.tier);
  });
};

const updateCards = () => {
  const view = contexts[state.context].tiers[state.tier];
  tierTagEl.textContent = tierLabels[state.tier];
  cardsTitleEl.textContent = view.title;
  cardsCopyEl.textContent = view.copy;
  cardGridEl.innerHTML = view.items
    .map(
      (item) => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");
};

const pickCadenceText = (thresholds, backlog) => {
  for (const rule of thresholds) {
    if (backlog <= rule.limit) {
      return rule.text;
    }
  }
  return thresholds.at(-1).text;
};

const updateCadence = () => {
  const config = contexts[state.context].cadence;
  cadenceDayEl.textContent = config.dayTag;
  cadenceTitleEl.textContent = config.title;
  cadenceDescriptionEl.textContent = config.description;
  backlogLabelEl.textContent = `${config.sliderLabel}: ${state.backlog} link${state.backlog === 1 ? "" : "s"}`;
  cadenceOutputEl.textContent = pickCadenceText(
    config.thresholds,
    state.backlog,
  );
};

const applyState = () => {
  updateHero();
  updateButtons();
  updateCards();
  updateCadence();
};

contextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const next = button.dataset.context;
    if (next === state.context) return;
    state.context = next;
    state.tier = "bar";
    backlogRangeEl.value = state.backlog.toString();
    applyState();
  });
});

tierButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.tier = button.dataset.tier;
    applyState();
  });
});

backlogRangeEl.addEventListener("input", (event) => {
  state.backlog = Number(event.target.value);
  updateCadence();
});

applyState();

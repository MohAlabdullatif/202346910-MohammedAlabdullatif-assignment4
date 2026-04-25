const featuredProjects = [
    {
        name: "Assignment 4 Personal Web Application",
        summary: "A polished portfolio that combines responsive design, local state, validation, live API data, and presentation-ready documentation.",
        category: "web",
        updated: "2026-04-25",
        stack: ["HTML", "CSS", "JavaScript"],
        result: "Portfolio application"
    },
    {
        name: "Assignment 3 Advanced Portfolio Upgrade",
        summary: "Extended a simple portfolio into a more dynamic application with filtering, GitHub integration, and localStorage persistence.",
        category: "web",
        updated: "2026-04-17",
        stack: ["HTML", "CSS", "JavaScript", "API"],
        result: "Front-end upgrade"
    },
    {
        name: "Text Sentiment Analysis",
        summary: "Compared machine learning classifiers on social media text after cleaning, vectorizing, and evaluating the dataset.",
        category: "ai",
        updated: "2026-03-14",
        stack: ["Python", "Scikit-learn", "NLP"],
        result: "Classification workflow"
    },
    {
        name: "Flight Itinerary and Airfare Analysis",
        summary: "Studied airfare pricing and route behavior using dataset exploration, transformation, and visualization techniques.",
        category: "data",
        updated: "2026-02-22",
        stack: ["Python", "Pandas", "Visualization"],
        result: "Data insights"
    },
    {
        name: "Responsive Personal Portfolio",
        summary: "Created the original personal site with semantic structure, mobile-friendly layout, and clear personal branding.",
        category: "web",
        updated: "2026-01-30",
        stack: ["HTML", "CSS", "Responsive Design"],
        result: "Foundational portfolio"
    }
];

const plannerRecommendations = {
    portfolio: {
        fast: {
            title: "Start with a clean one-page portfolio",
            message: "Focus on strong sections, responsive layout, and one interactive feature so the result feels complete within one week."
        },
        steady: {
            title: "Build a polished portfolio with live content",
            message: "Use structured sections, project filtering, and one API integration to show both design and logic in a balanced timeline."
        },
        deep: {
            title: "Create a scalable personal platform",
            message: "Plan for multiple case studies, polished branding, deeper accessibility review, and future backend integration."
        }
    },
    dashboard: {
        fast: {
            title: "Deliver a focused dashboard prototype",
            message: "Choose one dataset, define two or three useful metrics, and present the information clearly without feature overload."
        },
        steady: {
            title: "Build a dashboard with stronger interaction",
            message: "Add filtering, summaries, and feedback states so the user can explore information instead of only viewing static charts."
        },
        deep: {
            title: "Develop a data product roadmap",
            message: "Include reusable components, multiple views, and more advanced validation or persistence for a richer application."
        }
    },
    analysis: {
        fast: {
            title: "Create a lightweight analysis showcase",
            message: "Keep the scope tight by presenting the question, method, and strongest insights with simple visuals and clean documentation."
        },
        steady: {
            title: "Build an explainable analysis project",
            message: "Combine dataset cleaning, summary findings, and a readable interface that communicates both results and reasoning clearly."
        },
        deep: {
            title: "Develop an analysis portfolio case study",
            message: "Use the extra time for comparison, interpretation, and presentation polish so the project tells a more complete technical story."
        }
    }
};

const storageKeys = {
    theme: "portfolio-theme",
    visitorName: "portfolio-visitor-name",
    visitCount: "portfolio-visit-count",
    contactDraft: "portfolio-contact-draft"
};

const state = {
    theme: localStorage.getItem(storageKeys.theme) || "light",
    visitorName: localStorage.getItem(storageKeys.visitorName) || "",
    filter: "all",
    sort: "updated-desc",
    search: "",
    visitCount: Number(localStorage.getItem(storageKeys.visitCount) || 0),
    contactDraft: readContactDraft()
};

const elements = {
    body: document.body,
    headerGreeting: document.getElementById("headerGreeting"),
    themeToggle: document.getElementById("themeToggle"),
    copyEmailButton: document.getElementById("copyEmailButton"),
    visitCount: document.getElementById("visitCount"),
    timeOnSite: document.getElementById("timeOnSite"),
    savedNameDisplay: document.getElementById("savedNameDisplay"),
    visitorForm: document.getElementById("visitorForm"),
    visitorName: document.getElementById("visitorName"),
    clearVisitorName: document.getElementById("clearVisitorName"),
    visitorMessage: document.getElementById("visitorMessage"),
    plannerGoal: document.getElementById("plannerGoal"),
    plannerTimeline: document.getElementById("plannerTimeline"),
    plannerTitle: document.getElementById("plannerTitle"),
    plannerMessage: document.getElementById("plannerMessage"),
    projectSearch: document.getElementById("projectSearch"),
    projectFilter: document.getElementById("projectFilter"),
    projectSort: document.getElementById("projectSort"),
    projectFeedback: document.getElementById("projectFeedback"),
    projectHighlights: document.getElementById("projectHighlights"),
    projectsList: document.getElementById("projectsList"),
    githubStatus: document.getElementById("githubStatus"),
    githubRepoList: document.getElementById("githubRepoList"),
    contactForm: document.getElementById("contactForm"),
    fullName: document.getElementById("fullName"),
    email: document.getElementById("email"),
    message: document.getElementById("message"),
    nameError: document.getElementById("nameError"),
    emailError: document.getElementById("emailError"),
    messageError: document.getElementById("messageError"),
    formMessage: document.getElementById("formMessage"),
    clearDraftButton: document.getElementById("clearDraftButton"),
    revealSections: document.querySelectorAll(".revealSection")
};

function readContactDraft() {
    try {
        return JSON.parse(localStorage.getItem(storageKeys.contactDraft)) || {
            fullName: "",
            email: "",
            message: ""
        };
    } catch (error) {
        return {
            fullName: "",
            email: "",
            message: ""
        };
    }
}

function setStatusMessage(element, message, type) {
    element.textContent = message;
    element.className = `statusMessage ${type}`;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function formatDate(dateValue) {
    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(new Date(dateValue));
}

function formatCategory(category) {
    const labels = {
        web: "Web",
        data: "Data",
        ai: "AI"
    };

    return labels[category] || category;
}

function applyTheme() {
    const isDark = state.theme === "dark";
    elements.body.classList.toggle("dark-mode", isDark);
    elements.themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function updateGreeting() {
    const currentHour = new Date().getHours();
    let greetingText = "Building with purpose";

    if (currentHour < 12) {
        greetingText = "Good morning";
    } else if (currentHour < 18) {
        greetingText = "Good afternoon";
    } else {
        greetingText = "Good evening";
    }

    const nameSuffix = state.visitorName ? `, ${state.visitorName}` : "";
    elements.headerGreeting.textContent = `${greetingText}${nameSuffix}`;
}

function updateVisitCount() {
    state.visitCount += 1;
    localStorage.setItem(storageKeys.visitCount, String(state.visitCount));
    elements.visitCount.textContent = String(state.visitCount);
}

function updateSavedNameDisplay() {
    elements.savedNameDisplay.textContent = state.visitorName || "No name saved";
    elements.visitorName.value = state.visitorName;
}

function updatePlannerRecommendation() {
    const goal = elements.plannerGoal.value;
    const timeline = elements.plannerTimeline.value;

    if (!goal || !timeline) {
        elements.plannerTitle.textContent = "Select options to generate a plan";
        elements.plannerMessage.textContent = "I will suggest the best starting approach based on the project type and available time.";
        return;
    }

    const recommendation = plannerRecommendations[goal]?.[timeline];

    if (!recommendation) {
        elements.plannerTitle.textContent = "Planner data unavailable";
        elements.plannerMessage.textContent = "Try a different combination to generate a recommendation.";
        return;
    }

    elements.plannerTitle.textContent = recommendation.title;
    elements.plannerMessage.textContent = recommendation.message;
}

function getVisibleProjects() {
    return featuredProjects
        .filter((project) => {
            const haystack = `${project.name} ${project.summary} ${project.stack.join(" ")} ${project.result}`.toLowerCase();
            const matchesSearch = haystack.includes(state.search.toLowerCase());
            const matchesFilter = state.filter === "all" || project.category === state.filter;
            return matchesSearch && matchesFilter;
        })
        .sort((first, second) => {
            if (state.sort === "name-asc") {
                return first.name.localeCompare(second.name);
            }

            const firstDate = new Date(first.updated);
            const secondDate = new Date(second.updated);

            return state.sort === "updated-asc" ? firstDate - secondDate : secondDate - firstDate;
        });
}

function renderProjectHighlights() {
    const categoryCounts = featuredProjects.reduce((counts, project) => {
        counts[project.category] = (counts[project.category] || 0) + 1;
        return counts;
    }, {});

    const highlights = [
        { label: "Featured Projects", value: String(featuredProjects.length) },
        { label: "Web Projects", value: String(categoryCounts.web || 0) },
        { label: "Data and AI Projects", value: String((categoryCounts.data || 0) + (categoryCounts.ai || 0)) },
        { label: "Latest Update", value: formatDate(featuredProjects[0].updated) }
    ];

    elements.projectHighlights.innerHTML = highlights.map((highlight) => `
        <article class="miniStat">
            <span class="miniLabel">${escapeHtml(highlight.label)}</span>
            <strong>${escapeHtml(highlight.value)}</strong>
        </article>
    `).join("");
}

function renderProjects() {
    const visibleProjects = getVisibleProjects();

    if (!visibleProjects.length) {
        elements.projectsList.innerHTML = "";
        setStatusMessage(elements.projectFeedback, "No projects match the current search and filter settings.", "errorMessage");
        return;
    }

    elements.projectsList.innerHTML = visibleProjects.map((project) => `
        <article class="surfaceCard">
            <p class="sectionTag">${escapeHtml(formatCategory(project.category))}</p>
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <div class="metaRow">
                <span class="metaPill">Updated ${formatDate(project.updated)}</span>
                <span class="metaPill">${escapeHtml(project.result)}</span>
            </div>
            <p><strong>Stack:</strong> ${escapeHtml(project.stack.join(", "))}</p>
        </article>
    `).join("");

    const message = state.search || state.filter !== "all"
        ? `Showing ${visibleProjects.length} matching project(s).`
        : "Showing all featured projects.";

    setStatusMessage(elements.projectFeedback, message, state.search || state.filter !== "all" ? "successMessage" : "infoMessage");
}

async function loadGitHubRepositories() {
    const apiUrl = "https://api.github.com/users/MohAlabdullatif/repos?sort=updated&per_page=6";

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API returned status ${response.status}`);
        }

        const repositories = await response.json();

        if (!Array.isArray(repositories) || !repositories.length) {
            elements.githubRepoList.innerHTML = "";
            setStatusMessage(elements.githubStatus, "No public repositories were found for this profile.", "errorMessage");
            return;
        }

        elements.githubRepoList.innerHTML = repositories.map((repo) => `
            <article class="surfaceCard">
                <p class="sectionTag">Repository</p>
                <h3>${escapeHtml(repo.name)}</h3>
                <p>${escapeHtml(repo.description || "No description was provided for this repository.")}</p>
                <div class="metaRow">
                    <span class="metaPill">${escapeHtml(repo.language || "Not specified")}</span>
                    <span class="metaPill">Updated ${formatDate(repo.updated_at)}</span>
                    <span class="metaPill">${escapeHtml(repo.visibility)}</span>
                </div>
                <a class="repoLink" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">View Repository</a>
            </article>
        `).join("");

        setStatusMessage(elements.githubStatus, "Repositories loaded successfully from the GitHub API.", "successMessage");
    } catch (error) {
        elements.githubRepoList.innerHTML = "";
        setStatusMessage(
            elements.githubStatus,
            "GitHub repositories could not be loaded right now. Please try again later or open the GitHub profile directly.",
            "errorMessage"
        );
        console.error("GitHub API error:", error);
    }
}

function startTimeOnSiteCounter() {
    const startTime = Date.now();

    window.setInterval(() => {
        const elapsedMs = Date.now() - startTime;
        const totalSeconds = Math.floor(elapsedMs / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        elements.timeOnSite.textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function validateContactForm() {
    const name = elements.fullName.value.trim();
    const email = elements.email.value.trim();
    const message = elements.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    elements.nameError.textContent = "";
    elements.emailError.textContent = "";
    elements.messageError.textContent = "";

    if (!name) {
        elements.nameError.textContent = "Full name is required.";
        isValid = false;
    }

    if (!email) {
        elements.emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        elements.emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!message) {
        elements.messageError.textContent = "Message is required.";
        isValid = false;
    } else if (message.length < 25) {
        elements.messageError.textContent = "Message must be at least 25 characters long.";
        isValid = false;
    }

    if (!isValid) {
        setStatusMessage(elements.formMessage, "Please correct the highlighted form fields before submitting.", "errorMessage");
        return false;
    }

    setStatusMessage(
        elements.formMessage,
        `Thanks, ${name}. Your message passed validation and the saved draft was cleared.`,
        "successMessage"
    );

    localStorage.removeItem(storageKeys.contactDraft);
    state.contactDraft = { fullName: "", email: "", message: "" };
    return true;
}

function saveContactDraft() {
    state.contactDraft = {
        fullName: elements.fullName.value,
        email: elements.email.value,
        message: elements.message.value
    };

    localStorage.setItem(storageKeys.contactDraft, JSON.stringify(state.contactDraft));
}

function loadContactDraft() {
    elements.fullName.value = state.contactDraft.fullName || "";
    elements.email.value = state.contactDraft.email || "";
    elements.message.value = state.contactDraft.message || "";
}

function clearContactDraft() {
    elements.contactForm.reset();
    elements.nameError.textContent = "";
    elements.emailError.textContent = "";
    elements.messageError.textContent = "";
    localStorage.removeItem(storageKeys.contactDraft);
    state.contactDraft = { fullName: "", email: "", message: "" };
    setStatusMessage(elements.formMessage, "Saved contact draft cleared.", "infoMessage");
}

function setupScrollReveal() {
    if (!("IntersectionObserver" in window)) {
        elements.revealSections.forEach((section) => section.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.revealSections.forEach((section) => observer.observe(section));
}

async function copyEmailAddress() {
    const email = "Mohamadalabdullatif2005@gmail.com";

    try {
        await navigator.clipboard.writeText(email);
        setStatusMessage(elements.visitorMessage, "Email address copied to clipboard.", "successMessage");
    } catch (error) {
        setStatusMessage(elements.visitorMessage, "Copy failed on this browser. Email: Mohamadalabdullatif2005@gmail.com", "infoMessage");
    }
}

function attachEventListeners() {
    elements.themeToggle.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem(storageKeys.theme, state.theme);
        applyTheme();
    });

    elements.copyEmailButton.addEventListener("click", copyEmailAddress);

    elements.visitorForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = elements.visitorName.value.trim();

        if (!name) {
            setStatusMessage(elements.visitorMessage, "Please enter a visitor name before saving.", "errorMessage");
            return;
        }

        state.visitorName = name;
        localStorage.setItem(storageKeys.visitorName, state.visitorName);
        updateGreeting();
        updateSavedNameDisplay();
        setStatusMessage(elements.visitorMessage, `Welcome, ${state.visitorName}. Your name was saved locally.`, "successMessage");
    });

    elements.clearVisitorName.addEventListener("click", () => {
        state.visitorName = "";
        localStorage.removeItem(storageKeys.visitorName);
        updateGreeting();
        updateSavedNameDisplay();
        setStatusMessage(elements.visitorMessage, "Saved visitor name removed from local storage.", "infoMessage");
    });

    elements.plannerGoal.addEventListener("change", updatePlannerRecommendation);
    elements.plannerTimeline.addEventListener("change", updatePlannerRecommendation);

    elements.projectSearch.addEventListener("input", (event) => {
        state.search = event.target.value.trim();
        renderProjects();
    });

    elements.projectFilter.addEventListener("change", (event) => {
        state.filter = event.target.value;
        renderProjects();
    });

    elements.projectSort.addEventListener("change", (event) => {
        state.sort = event.target.value;
        renderProjects();
    });

    // Save contact progress continuously so the form survives accidental refreshes.
    [elements.fullName, elements.email, elements.message].forEach((field) => {
        field.addEventListener("input", saveContactDraft);
    });

    elements.clearDraftButton.addEventListener("click", clearContactDraft);

    elements.contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (validateContactForm()) {
            elements.contactForm.reset();
        }
    });
}

function initializePage() {
    applyTheme();
    updateGreeting();
    updateVisitCount();
    updateSavedNameDisplay();
    updatePlannerRecommendation();
    renderProjectHighlights();
    renderProjects();
    loadContactDraft();
    startTimeOnSiteCounter();
    setupScrollReveal();
    attachEventListeners();
    loadGitHubRepositories();
}

initializePage();

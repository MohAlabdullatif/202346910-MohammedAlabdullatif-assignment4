# 202346910-MohammedAlabdullatif-assignment4

## Project Description

This repository contains my final personal web application for SWE363 Assignment 4.

The project builds on my earlier portfolio work, but this version is designed as a more polished final submission. It combines professional presentation, responsive front-end design, interactive JavaScript features, live GitHub data, browser-side state management, and detailed documentation into one complete portfolio application.

The goal of this assignment was not only to make the site functional, but also to make it feel ready for presentation and future personal use.

## Main Features

- responsive single-page personal portfolio
- live GitHub API integration
- project search, filtering, and sorting
- light and dark theme toggle with saved preference
- visitor-name personalization using `localStorage`
- visit counter and time-on-site tracker
- creative project collaboration planner
- contact form validation
- auto-saved contact draft in `localStorage`
- polished technical documentation and project reporting

## What Changed from Assignment 3

This Assignment 4 project is based on my Assignment 3 portfolio, but it was improved to feel more complete, polished, and presentation-ready.

Main changes made in this version:

- redesigned the full interface with a more professional visual style
- reorganized the homepage into a stronger final portfolio structure
- moved image assets into `assets/images/` to match the required folder layout more closely
- added a visit counter to show another example of browser-side state
- added automatic contact draft saving using `localStorage`
- added a new creative feature called the project collaboration planner
- improved the hero section so the site presents my work more clearly at first glance
- expanded the README and technical documentation to match Assignment 4 requirements
- added a `presentation/` folder for the final slide deck and demo video deliverables
- updated the project identity from an Assignment 3 upgrade into a final personal web application

Compared with Assignment 3, the previous core features were still kept and improved:

- GitHub API integration is still included
- project filtering and sorting are still included
- contact form validation is still included
- theme persistence and saved visitor name are still included
- responsive design is still included, but the styling is more polished

## Folder Structure

```text
202346910-MohammedAlabdullatif-assignment4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── Me.jpg
│       ├── phys.jpg
│       ├── edad.jpg
│       └── CalcAward.jpg
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   └── README.md
└── .gitignore
```

## How to Run Locally

This project uses plain HTML, CSS, and JavaScript, so there is no package installation step.

### Recommended Method

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/202346910-MohammedAlabdullatif-assignment4.git
```

2. Move into the project folder:

```bash
cd 202346910-MohammedAlabdullatif-assignment4
```

3. Open the folder in Visual Studio Code.
4. Run it with a local server such as Live Server.
5. Open the local URL in your browser.

### Alternative Method

You can also open `index.html` directly in a modern browser, but using a local server is better because it avoids possible browser restrictions and gives more reliable testing behavior.

## Deployment

This project is almost ready to be deployed in the next few weeks on:

- GitHub Pages
- Netlify
- Vercel

If I publish it, I can place the live link here later.

## AI Tools Summary

AI was used selectively as a support resource for planning, wording, and small refinements. The final code and feature implementation were completed manually and reviewed by me.

Main tools used:

- ChatGPT for reviewing the assignment rubric and refining documentation
- editor-based suggestions for syntax and formatting improvements

Detailed AI reporting is included in [docs/ai-usage-report.md](docs/ai-usage-report.md).

## Grading Rubric Alignment

This section explains how the project fulfills the main grading criteria for Assignment 4.

### Technical Implementation

**Functionality (5)**

The website includes all major required features in one working application:

- responsive portfolio structure
- GitHub API integration
- project search, filtering, and sorting
- theme toggle with saved preference
- visitor-name personalization
- contact form validation
- visit counter and time-on-site logic
- creative planner feature
- contact draft saving

**Code Quality (5)**

The code is organized into separate files for structure, styling, and logic:

- `index.html`
- `css/styles.css`
- `js/script.js`
- `docs/`

Naming is consistent, formatting is readable, and the logic is divided into clear functions instead of being written as one large block.

**Performance (5)**

Performance was considered in practical ways:

- JavaScript is loaded with `defer`
- noncritical images use lazy loading
- the project uses plain HTML, CSS, and JavaScript without unnecessary framework overhead
- repeated rendering is grouped efficiently
- the site remains lightweight and fast to load

**Compatibility (5)**

The layout was designed to work across modern browsers and screen sizes:

- desktop
- tablet
- mobile

The site also includes:

- keyboard focus styles
- reduced-motion support
- fallback logic for scroll-reveal behavior

### Documentation

**README Quality (10)**

This README includes:

- project description
- major features
- differences from Assignment 3
- folder structure
- setup instructions
- deployment notes
- AI summary
- documentation references
- testing notes
- rubric alignment

**Setup Instructions (10)**

The README explains clearly how to run the project locally using:

- Git clone
- local server such as Live Server
- direct browser opening as a backup option

**Technical Details (10)**

Detailed technical explanation is provided in [docs/technical-documentation.md](docs/technical-documentation.md), including:

- architecture and file structure
- GitHub API integration
- localStorage state management
- validation logic
- project filtering and sorting logic
- performance and compatibility notes
- testing summary

**User Experience (10)**

The project focuses on clear and user-friendly interaction:

- structured navigation
- readable feedback messages
- responsive design
- polished visual layout
- clear form guidance
- personalization features
- smooth but optional animation

### AI Integration

**Effective Use (5)**

AI tools were used as a review and refinement aid for:

- rubric review
- planning the Assignment 4 improvements
- reviewing code and documentation structure
- refining wording and presentation choices

**Documentation (5)**

AI use is documented in [docs/ai-usage-report.md](docs/ai-usage-report.md).

**Understanding (5)**

The project was not submitted as raw AI output. All suggestions were reviewed, modified, and adapted to fit the actual project structure and assignment needs.

**Innovation (5)**

AI was used to support decision-making and documentation, while the final implementation was completed manually. The project also includes a creative interactive feature to help the final version stand out.

## Documentation Included

- [docs/technical-documentation.md](docs/technical-documentation.md): explains architecture, features, logic, and implementation choices
- [docs/ai-usage-report.md](docs/ai-usage-report.md): explains how AI tools were used responsibly
- [presentation/README.md](presentation/README.md): placeholder notes for slides and demo video deliverables

## Testing Notes

The project was manually reviewed for:

- responsive layout behavior
- theme persistence after reload
- saved visitor name behavior
- contact draft persistence
- contact form validation
- project search, filtering, and sorting
- GitHub API loading and fallback error messaging
- keyboard focus visibility and reduced-motion behavior

## Author

Mohammed Alabdullatif

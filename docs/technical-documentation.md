# Technical Documentation

## Project Overview

This project is a final personal web application built for SWE363 Assignment 4. It extends my earlier portfolio assignments into a more complete and professional submission.

The application is designed as a responsive single-page site with dynamic behavior. It combines personal branding, project presentation, live GitHub data, client-side validation, browser-side persistence, and supporting documentation in one lightweight front-end project.

## Technical Objectives

The main technical objectives were:

- create a polished final portfolio
- keep the code organized and readable
- demonstrate interaction beyond static content
- use at least one live external data source
- store meaningful client-side state
- provide clear user feedback and graceful error handling
- maintain strong documentation and presentation readiness

## File Structure

```text
project-root/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   └── README.md
└── .gitignore
```

## Main Implementation Areas

### HTML Structure

`index.html` is organized into clear sections:

- sticky header with navigation
- hero section
- visitor personalization section
- creative planner section
- featured projects section
- GitHub repository section
- achievements and journey section
- contact section
- footer

The structure uses semantic HTML to make the page easier to navigate and present.

### CSS Design

`css/styles.css` provides:

- a custom visual theme using CSS variables
- responsive layouts using grid and flexible spacing
- dark-mode styling
- reusable button and card styles
- polished backgrounds and section presentation
- focus styles for keyboard users
- reduced-motion support
- reveal animations for section entry

The design goal was to feel more intentional and presentation-ready than the earlier assignments while still staying simple enough to maintain.

### JavaScript Logic

`js/script.js` manages all dynamic behavior in the application.

Main logic areas include:

- theme toggling with persistence
- greeting updates based on time and saved visitor name
- visit counter using `localStorage`
- time-on-site counter
- creative project collaboration planner
- project search, filter, and sort logic
- project highlight rendering
- GitHub API loading with error handling
- contact form validation
- auto-saved contact draft
- reveal animations using `IntersectionObserver`
- clipboard interaction for copying the email address

## External API Integration

The project uses the GitHub REST API:

```text
https://api.github.com/users/MohAlabdullatif/repos?sort=updated&per_page=6
```

### API Flow

1. The page loads and shows a loading message.
2. JavaScript sends a `fetch()` request to the GitHub API.
3. The response status is checked.
4. If successful, repository cards are rendered.
5. If the request fails, a user-friendly error message is shown.

### Displayed Repository Data

Each repository card shows:

- repository name
- description
- language
- last updated date
- visibility
- repository link

This section demonstrates real-time data use and graceful handling of external failures.

## State Management

This project uses `localStorage` for multiple user-facing features.

### Saved Theme

The selected theme is stored and restored on reload.

### Saved Visitor Name

The visitor can save a name locally. The saved value updates the greeting and summary area.

### Visit Count

The site stores how many times it has been opened in the current browser.

### Contact Draft

The contact form saves draft content while the user types so accidental refreshes do not immediately destroy progress.

These features help the site behave more like an application instead of a static page.

## Project Discovery Logic

The featured projects section is powered by a JavaScript array of project objects.

Each object contains:

- name
- summary
- category
- update date
- stack
- result label

The user can:

- search by text
- filter by category
- sort by date or name

The logic applies all active controls together before rendering the final list.

## Creative Feature

The project collaboration planner is the main extra creative feature in this assignment.

The user chooses:

- a project goal
- a timeline

Based on that combination, JavaScript generates a recommended plan. This adds a small decision-making system that makes the site feel more interactive and personal.

## Validation and Error Handling

The contact form performs client-side validation for:

- required full name
- required email
- valid email format
- minimum message length

If input is invalid, specific field errors are shown and the form does not continue. If the input is valid, the page shows a success message and clears the saved draft.

The GitHub section also includes clear success and failure states so the page does not appear broken when the API is unavailable.

## Performance and Compatibility

Performance choices include:

- deferred JavaScript loading
- lazy-loaded noncritical images
- grouped DOM rendering with mapped HTML strings
- lightweight stack with no framework overhead
- reused CSS variables and shared component styles

Compatibility choices include:

- responsive layouts for desktop and mobile
- keyboard focus visibility
- reduced-motion support
- fallback behavior when `IntersectionObserver` is not available

## Testing Summary

The project was manually reviewed for:

- responsive layout behavior
- theme persistence
- visitor-name persistence
- visit counter updates
- planner interaction
- project search, filter, and sort
- GitHub loading and error fallback
- contact draft saving
- contact form validation
- reduced-motion and focus visibility behavior

## Future Improvements

Possible future work includes:

- adding a real backend or email service for the contact form
- deploying the site and adding the public link
- expanding the project section with screenshots or case-study pages
- improving accessibility further with more testing and landmarks
- creating a downloadable resume section

## Summary

This Assignment 4 project turns the previous portfolio into a more complete personal web application. It remains simple in technology choice, but it demonstrates a stronger level of polish, interactivity, documentation, and presentation readiness.

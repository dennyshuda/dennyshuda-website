---
name: Denny Setyawan Huda Portfolio
description: Editorial studio casebook for presenting software development work and experience.
colors:
  primary: "#3159ef"
  primary-dark: "#91a7ff"
  neutral-bg: "#f4f2ec"
  neutral-ink: "#171916"
  neutral-muted: "#676b63"
  neutral-line: "#d8d8cf"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(62px, 11vw, 132px)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "16px"
  label:
    fontFamily: "Source Sans 3, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.16em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(27px, 3.4vw, 42px)"
    fontWeight: 600
spacing:
  shell-desktop: "24px"
  shell-mobile: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    padding: "13px 17px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-ink}"
    padding: "13px 17px"
---

# Design System: Denny Setyawan Huda Portfolio

## Overview

**Creative North Star: "The Studio Casebook"**

The portfolio reads like a carefully edited record of work. Large condensed titles establish identity; project and experience entries carry the proof in a steady, easy-to-scan rhythm. The page favors open space, precise alignment, and thin rules over decorative panels.

Cobalt marks the active path and key actions. Warm paper and ink keep long descriptions comfortable to read. The same roles adapt to a dark palette, while navigation stays compact and available throughout the site.

**Key Characteristics:**
- Editorial grid with large condensed display type.
- Flat surfaces, open margins, and fine dividers.
- Cobalt is reserved for focus, active states, and primary actions.

## Colors

The light theme pairs warm paper and near-black ink with a single cobalt accent; dark mode remaps those roles to charcoal and periwinkle.

### Primary
- **Cobalt** (#3159ef): Primary links, key actions, project index numbers, and interaction rules. In dark mode it becomes periwinkle (#91a7ff).

### Neutral
- **Warm Paper** (#f4f2ec): Main page background; dark mode uses charcoal (#171a18).
- **Ink** (#171916): Primary text; dark mode uses warm white (#f2f1e9).
- **Muted Ink** (#676b63): Supporting text; dark mode uses soft gray (#b1b5ad).
- **Divider** (#d8d8cf): Thin rules; dark mode uses (#3a403b).

**The One Accent Rule.** Cobalt identifies action and state; keep it out of long body passages and large decorative backgrounds.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif fallback)
**Body Font:** Source Sans 3 (with Arial, sans-serif fallback)
**Label/Mono Font:** None

**Character:** Condensed display lettering gives names and work titles a strong editorial voice; the body face stays open and readable for project descriptions.

### Hierarchy
- **Display** (600, clamp(62px, 11vw, 132px), 0.86): Name and page-opening titles.
- **Headline** (600, clamp(38px, 6vw, 68px), 0.95): Section headings.
- **Title** (600, clamp(27px, 3.4vw, 42px), 0.98): Project and experience titles.
- **Body** (400, 16px, 1.75 for lead copy): Supporting prose and descriptions; larger narrative copy uses 17px with 1.85 line height.
- **Lead** (400, clamp(16px, 1.6vw, 19px), 1.75): Intro copy and page summaries.
- **Detail** (400/600, 12–13px): Navigation, controls, project descriptions, and supporting metadata.
- **Folio** (600, 20px): Project index numbers; arrows use 22px.
- **Brand mark** (700, 26px): Compact navigation signature.
- **Label** (600, 11px, 0.16em, uppercase): Small section labels and navigation context; 10px is reserved for technology tags.

**The Display Rule.** Reserve the condensed face for headings; use Source Sans 3 for paragraphs, navigation, and controls.

## Layout

The shared content shell is capped at 1180px and uses 24px side gutters, dropping to 16px below 720px. The home introduction pairs a large identity block with a compact description and actions; at narrow widths it stacks into one column. Project entries use a numbered index, title, description, and metadata in a single ruled row; on narrow screens the description and metadata sit below the title. Page sections use generous responsive vertical spacing and align to the same shell.

## Elevation & Depth

The system is flat by default and does not use shadows. Structure comes from the paper and ink contrast, spacing, and thin dividers. The sticky navigation uses a translucent background with backdrop blur so content can pass beneath it without losing legibility.

## Shapes

Forms are square and direct: no rounded card shells or pill-shaped content containers. Buttons and rows use fine outlines or rules where needed, with no ornamental clipping.

## Components

### Buttons
- **Shape:** Square corners (0px).
- **Primary:** Cobalt fill with white text and compact padding (13px 17px).
- **Hover / Focus:** Slight color darkening on hover; a visible 2px cobalt focus outline with 4px offset.
- **Secondary:** Transparent fill with an ink outline; reverses to ink fill on hover.

### Chips
- **Style:** Plain muted uppercase labels separated by slashes; no filled badge container.
- **State:** Technology labels remain informational.

### Cards / Containers
- **Corner Style:** Square; the casebook uses open rows rather than enclosing each project in a card.
- **Background:** Inherit the page paper.
- **Shadow Strategy:** None; 1px neutral dividers carry the grouping.
- **Internal Padding:** Project rows use 27px vertical padding on wide screens and 21px on narrow screens.

### Navigation
- **Style:** Sticky paper-toned bar with a fine bottom rule. Links use small body text, underline the current page with cobalt, and remain visible on narrow screens. The theme control has an accessible action label.

### Project Index
Numbered rows reveal a 1px cobalt top rule on hover and keyboard focus. The row shifts by 8px on wide screens and 4px on narrow screens; all project information is visible without interaction.

## Do's and Don'ts

### Do:
- **Do** align sections to the shared 1180px content shell.
- **Do** use cobalt for active, focused, and primary-action states.
- **Do** keep project information visible on touch devices.
- **Do** preserve the reduced-motion preference.

### Don't:
- **Don't** add rounded project cards or decorative gradients to the casebook.
- **Don't** use the display face for long descriptions.
- **Don't** turn unverified project outcomes into metrics or testimonials.

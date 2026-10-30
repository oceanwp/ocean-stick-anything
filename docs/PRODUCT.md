# Ocean Stick Anything - Features Documentation

Complete documentation of all features available in Ocean Stick Anything.

---

## Table of Contents

1. [Plugin Overview](#plugin-overview)
2. [License & Availability](#license--availability)
3. [Stick Elements](#stick-elements)
4. [Responsive Un-Stick](#responsive-un-stick)
5. [Admin Pages](#admin-pages)
6. [Display & Developer API](#display--developer-api)

---

## Plugin Overview

**Ocean Stick Anything** makes any element on an OceanWP site sticky while the visitor scrolls. You enter one or more CSS selectors, and the plugin keeps those elements in view inside their parent container (for example a sidebar with `.widget-area`).

| Property | Value |
|----------|-------|
| Version | 2.1.1 |
| Minimum WordPress | 5.6 |
| Tested up to | 7.1 |
| Text Domain | `ocean-stick-anything` |
| Main Class | `Ocean_Stick_Anything` (singleton, `ocean-stick-anything.php`) |
| Requires | OceanWP theme (active theme or parent theme), Ocean Extra (the settings page sits in the OceanWP admin menu, which the theme only adds when Ocean Extra is active) |
| Distribution | Free on WordPress.org |

### Key Capabilities

- Stick any elements by CSS selector, comma separated
- Custom top offset in pixels
- Automatic extra offset for the WordPress admin bar, a sticky top bar and a sticky header
- Un-stick below a chosen screen width
- Uses the Sticky Kit jQuery library (`stick_in_parent`)

---

## License & Availability

Ocean Stick Anything is free and published on WordPress.org. All features work without a license.

| Item | Value |
|------|-------|
| Freemius product ID | `3815` (free product, `is_premium` false, no paid plans) |
| License needed | ✗ |

The Freemius SDK is started through Ocean Extra after the theme fires `owp_fs_loaded`, only when Ocean Extra is active. It does not turn any feature on or off.

The readme points users who want a sticky header or footer to the OceanWP Pro Bundle. The settings page shows the same promotion in a sidebar box when Ocean Sticky Header is not installed.

---

## Stick Elements

**Where:** OceanWP > Stick Elements (`admin.php?page=oceanwp-panel-stick`)

| Setting | Description | Default |
|---------|-------------|---------|
| Elements (`osa_stick_elements`) | CSS selectors to stick, separated by commas. The page suggests `.widget-area` for the sidebar and links to a guide on finding CSS selectors. | Empty (nothing is stuck) |
| Offset (px) (`osa_stick_offset`) | Space between the top of the window and the sticky element | Empty (0) |

**Front-end behavior:**

The plugin loads Sticky Kit and `stick-anythings.min.js` on every front-end page. The script only runs when Elements is not empty. It calls `stick_in_parent()` on the matched elements with a top offset made of:

| Part | When it is added |
|------|------------------|
| Offset (px) setting | When set |
| WordPress admin bar height | When the admin bar is present and the window is wider than 600px |
| Top bar height | When the theme data says the top bar is sticky (`hasStickyTopBar`, set by Ocean Sticky Header) |
| Header height | When the header has the `fixed-scroll` class and is not a vertical header |

The script re-runs on window resize.

---

## Responsive Un-Stick

**Where:** OceanWP > Stick Elements > Responsive

| Setting | Description | Default |
|---------|-------------|---------|
| Un-stick From (px) (`osa_unstick`) | When the window width is at or below this value, the elements are detached (`sticky_kit:detach`) | Empty (always sticky) |

---

## Admin Pages

| Page | Location | Capability | Purpose |
|------|----------|-----------|---------|
| Stick Elements | OceanWP > Stick Elements | `manage_options` | The three settings above, saved through the WordPress Settings API |

The page styles (`assets/css/main.min.css`) load on admin pages when Ocean Extra is active.

---

## Display & Developer API

There are no shortcodes, blocks, widgets, templates, REST routes or AJAX actions. Everything runs from the settings and the front-end script.

### Hooks

| Hook | Type | Description |
|------|------|-------------|
| `osa_stick_settings` | Filter | Change the array of saved settings (`stick_elements`, `stick_offset`, `unstick`) returned by `Ocean_Stick_Anything::get_settings()` |
| `ocean_localize_array` | Filter (theme) | The plugin adds `stickElements`, `isOffset` and `unStick` to the theme's `oceanwpLocalize` JavaScript object |

### Data Storage

| Data | Where |
|------|-------|
| Elements | Option `osa_stick_elements` |
| Offset | Option `osa_stick_offset` |
| Un-stick width | Option `osa_unstick` |
| Settings group | `osa_settings` is registered with the Settings API, but each field is saved to its own option above |
| Version | Option `ocean-stick-anything-version` (written on activation, with the hard-coded value `2.0.8`) |

### Uninstall

The plugin has no uninstall routine. Deleting it leaves the options above in the database.

---

*Ocean Stick Anything - Make any element sticky on an OceanWP site*

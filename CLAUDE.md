# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Ocean Stick Anything is a free OceanWP add-on (published on WordPress.org) that makes any element sticky by CSS selector, using the jQuery Sticky Kit library. It only works with the OceanWP theme, and the readme says Ocean Extra is also needed.

## Commands

`package.json` has no npm scripts. Use Grunt and Composer directly:

```bash
npx grunt              # default: browserify + babel JS, uglify, autoprefixer, cssmin (main.css -> main.min.css)
npx grunt watch        # rebuild JS on change (livereload)
npx grunt build        # copy a release copy to build/ocean-stick-anything/
npx grunt package      # zip build/ocean-stick-anything/ into build/ocean-stick-anything.zip
composer lint:php      # phpcs (phpcs.xml.dist) + parallel-lint + PHPCompatibilityWP 5.6+
composer make-pot      # wp i18n make-pot -> languages/ocean-stick-anything.pot (needs WP-CLI)
```

There are no tests. The Gruntfile's autoprefixer and csscomb targets point at `assets/css/style.css`, which does not exist; the only stylesheet is `assets/css/main.css`.

PHPCS uses WordPress-Extra + WordPress-Docs, text domain `ocean-stick-anything`, global prefix `osa`, and skips `assets/`.

## Built assets are committed

- `assets/src/js/stick-anythings.js` (imports `base/base.js`) -> browserify -> `assets/js/stick-anythings.js` -> `stick-anythings.min.js`. Run `npx grunt` after editing and commit the outputs.
- `assets/css/main.css` (plain CSS, admin page only) -> `main.min.css`.
- Sticky Kit is vendored in both `assets/src/js/vendors/` and `assets/js/vendors/`; the front end loads `assets/js/vendors/sticky-kit.min.js`.

## Architecture

Everything is in the singleton `Ocean_Stick_Anything` in `ocean-stick-anything.php`.

- No license gating: the constructor hooks `setup()` on `init` directly. `setup()` adds hooks only when OceanWP is the active theme or parent theme.
- The Freemius block at the bottom is the free SDK (`is_premium` false), started through Ocean Extra's `OceanWP_EDD_Addon_Migration` on the theme's `owp_fs_loaded` action, and only if `Ocean_Extra` exists. It does not gate any feature.
- `$this->version` is hard-coded (`'2.0.8'`) and used as the script version, so it does not follow the plugin header version.

Settings:
- Admin page "Stick Elements" is a submenu of the `oceanwp` menu (slug `oceanwp-panel-stick`, `manage_options`), rendered by `create_admin_page()`.
- The form posts `osa_settings[...]` through the Settings API, but `sanitize_settings()` saves each field as its own option: `osa_stick_elements` (comma-separated selectors), `osa_stick_offset`, `osa_unstick` (px width below which elements un-stick). `get_settings()` reads them and is filterable with `osa_stick_settings`.
- `admin_scripts()` loads `main.min.css` on admin pages only when Ocean Extra is active.

Front end:
- No PHP output or templates. The options are added to the theme's `oceanwpLocalize` JS object through the `ocean_localize_array` filter (`stickElements`, `isOffset`, `unStick`).
- `stick-anythings.js` calls `stick_in_parent()` on the selectors, adds the admin bar, sticky top bar and sticky header heights to the top offset, and detaches below the un-stick width. It depends on the theme's `oceanwp-main` script.

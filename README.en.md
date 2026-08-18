<div align="right">

[Srpski](README.md) · **English**

</div>

# Choir "St. Bishop Nikolaj of Serbia" - Nova Pazova

Website for the mixed choir at the Church of St. Petka in Nova Pazova, Serbia. A Jekyll site in Serbian Cyrillic, hosted on GitHub Pages, with a built-in admin panel (Decap CMS) for news and the performance calendar.

**Instagram:** [@hornovapazova](https://www.instagram.com/hornovapazova) · **Facebook:** [HorNovaPazova](https://www.facebook.com/HorNovaPazova) · **YouTube:** [choir channel](https://www.youtube.com/channel/UCHeA3i_Rdq_KfHwoMIjTJKg)

**Live site:** [cvoki.github.io/Horski-Sajt](https://cvoki.github.io/Horski-Sajt/)

---

## About the project

The choir was founded in 2005 with the blessing of Bishop Vasilije of Srem, and today has 24 members. The site gathers in one place what had been scattered across social media: who they are, what they sing, where they perform and how to reach them.

The site is built with **Jekyll** (GitHub Pages builds it automatically on every push, no custom CI needed), and news posts and the performance calendar are managed through an **admin panel** (`/admin/`) built on [Decap CMS](https://decapcms.org/) — edits are saved directly into this Git repository, with no database and no monthly hosting cost.

All content is in **Serbian Cyrillic**, which for a site like this isn't a technical detail but part of its character.

## Pages

| Page | Content |
|---|---|
| `/` (`index.html`) | Home - next-event highlight, performance video |
| `/o_nama.html` | About the choir: founding in 2005, members, repertoire |
| `/dogadjaji.html` | Events - upcoming performances list + monthly calendar |
| `/vesti/` | News - each post gets its own page (managed via the admin panel) |
| `/galerija.html` | Photo gallery (managed via the admin panel) |
| `/crkva.html` | About the church of St. Petka: history of Nova Pazova, construction, life of the saint |
| `/kontakt.html` | Contact form and a Google Map with the church location |
| `/admin/` | Admin panel for editing news, events, gallery and contact details |

## Built with

`Jekyll` · `HTML5` · `CSS3` · `Bootstrap 5.0` · `Decap CMS` · `formsubmit.co` · `GitHub Pages`

Jekyll and Bootstrap build/load themselves (Jekyll via the `github-pages` gem, which GitHub Pages supports natively; Bootstrap from a CDN). The contact form submits through [formsubmit.co](https://formsubmit.co) - no account needed, messages go straight to the choir's email. The admin panel (Decap CMS) saves edits as files in this repository, and requires a GitHub account to log in - see [Admin panel](#admin-panel) below.

## Structure

```
.
├── _config.yml            # Jekyll config (title, collections, plugins)
├── Gemfile                # Ruby dependencies (github-pages gem)
├── _layouts/              # shared page templates (default, page, vest)
├── _includes/             # shared partials (header/nav, footer, cards, calendar)
├── _data/
│   ├── nav.yml            # navigation items
│   └── site_settings.yml  # contact info and social links (editable via admin panel)
├── _vesti/                # news posts - one .md file per post (collection)
├── _dogadjaji/            # events/performances - one .md file per event (collection)
├── _galerija/             # gallery photos (collection)
├── admin/
│   ├── index.html         # Decap CMS admin panel
│   └── config.yml         # collection setup and GitHub login
├── assets/
│   ├── css/style.css      # all styles
│   ├── js/main.js         # calendar navigation, contact form confirmation
│   └── img/
│       ├── icons/         # favicon and social media icons
│       └── uploads/       # images added through the admin panel
├── index.html, o_nama.html, dogadjaji/, vesti/, galerija.html, crkva.html, kontakt.html, 404.html
├── robots.txt
└── sitemap.xml            # generated automatically by the jekyll-sitemap plugin (not hand-written)
```

## Design

The colours come from the church itself and from Orthodox tradition, defined as CSS custom properties in `assets/css/style.css`:

| Colour | Hex | Where it's used |
|---|---|---|
| Deep red | `#af1d1c` | header, footer, hero, buttons |
| Gold | `#c7a658` | link hover, form fields, accents |
| Cream background | `#f3f1ec` | page background |

Typography: **Cormorant Garamond** for headings, **PT Sans** for body text (both with full Cyrillic support, loaded from Google Fonts).

Pages without a real photo yet (news, events, gallery) show a subtle gradient placeholder instead of a broken `<img>` - as soon as a real image is added through the admin panel, it's displayed automatically.

The navigation uses the Bootstrap `navbar`, collapsing into a toggle button on narrow screens so the site works on phones.

## Running it locally

You'll need Ruby (on Windows, [RubyInstaller +DevKit](https://rubyinstaller.org/) is recommended) and Jekyll.

```bash
git clone https://github.com/Cvoki/Horski-Sajt.git
cd Horski-Sajt
gem install bundler jekyll
bundle install
bundle exec jekyll serve --livereload
```

The site is served at `http://localhost:4000/Horski-Sajt/` (note: the path includes `/Horski-Sajt`, matching the live site's path).

### Testing the admin panel locally

```bash
npx decap-server
```

then open `http://localhost:4000/Horski-Sajt/admin/` - locally this works without GitHub login (it reads/writes files directly in the working directory).

## Admin panel

On the live site, `/admin/` requires logging in with a GitHub account that has write access to this repository. Since the site stays on GitHub Pages (not Netlify), GitHub login works through a small, separate OAuth "proxy" service (e.g. a free Cloudflare Worker) - set up once, outside this repository:

1. Create a GitHub OAuth App (github.com → Settings → Developer settings → OAuth Apps).
2. Deploy a free OAuth proxy (e.g. [`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) on Cloudflare Workers).
3. Put the resulting URL into `admin/config.yml` (`backend.base_url`).

The admin panel manages: **News**, **Events** (performance calendar), **Gallery**, and **General settings** (phone, email, address, social links, and a manual override message for the "Next event" banner on the homepage).

## Editing content

- **News, events, gallery, contact info** - through the admin panel (`/admin/`), no code required.
- **New static page** (outside the admin panel) - copy `crkva.html` or `o_nama.html` and replace the content; `layout: page` in the front matter automatically adds the header/footer/breadcrumb.
- **Navigation** - one place, `_data/nav.yml`.
- **Styling** - all in `assets/css/style.css`; Bootstrap classes handle the grid and layout.

## What's left to do

- **Real photographs** of the choir, the church and performances - none are in the repository yet; add them through the admin panel (`assets/img/uploads/`).
- **Real performance details** - enter through the admin panel ("Events" collection) once the choir provides a schedule.
- **First news posts** - enter through the admin panel whenever the choir wants to publish one.
- **Deploying the OAuth proxy** for admin panel GitHub login (see [Admin panel](#admin-panel)) - a one-time setup outside this repository.
- **A real logo/favicon** for the choir - a temporary one (`assets/img/icons/favicon.svg`) in the site's colours is in place for now.

## License

The code is free to use and learn from. **Texts, photographs and content belong to the choir and the church** and are not for reuse without their consent.

---

<sub>Built by <a href="https://github.com/Cvoki">Luka Cvoro</a> - <a href="mailto:lukac95@gmail.com">lukac95@gmail.com</a></sub>

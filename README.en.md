<div align="right">

[Srpski](README.md) · **English**

</div>

# Choir "St. Bishop Nikolaj of Serbia" — Nova Pazova

Website for the mixed choir at the Church of St. Petka in Nova Pazova, Serbia. Static pages in Serbian Cyrillic, with no server and no content management system.

**Instagram:** [@hornovapazova](https://www.instagram.com/hornovapazova) · **Facebook:** [HorNovaPazova](https://www.facebook.com/HorNovaPazova) · **YouTube:** [choir channel](https://www.youtube.com/channel/UCHeA3i_Rdq_KfHwoMIjTJKg)

**Live site:** [cvoki.github.io/Horski-Sajt](https://cvoki.github.io/Horski-Sajt/)

---

## About the project

The choir was founded in 2005 with the blessing of Bishop Vasilije of Srem, and today has 24 members. The site was meant to gather in one place what had been scattered across social media: who they are, what they sing, where they perform and how to reach them.

The solution is deliberately modest — static HTML, a single stylesheet and Bootstrap. No database, no admin panel, no monthly costs. The choir had nobody to maintain a system, so it's better not to have one.

All content is in **Serbian Cyrillic**, which for a site like this isn't a technical detail but part of its character.

## Pages

| Page | Content |
|---|---|
| `index.html` | Home — header, navigation, footer |
| `o_nama.html` | About the choir: founding in 2005, members, repertoire |
| `dogadjaji.html` | Events and performances |
| `galerija.html` | Gallery — nine embedded Instagram posts |
| `crkva.html` | About the church of St. Petka: history of Nova Pazova, construction, life of the saint |
| `kontakt.html` | Contact form and a Google Map with the church location |

## Built with

`HTML5` · `CSS3` · `Bootstrap 5.0` · `Bootstrap Icons` · `Instagram Embed` · `formsubmit.co` · `GitHub Pages`

Libraries load from a CDN, so the repository holds only what was written for this site. The contact form submits through [formsubmit.co](https://formsubmit.co) — no account needed, messages go straight to the choir's email.

## Structure

```
.
├── index.html          # home
├── o_nama.html         # about the choir
├── dogadjaji.html      # events
├── galerija.html       # gallery (Instagram)
├── crkva.html          # about the church
├── kontakt.html        # contact and map
├── 404.html            # page for missing routes
├── robots.txt          # search engine instructions
├── sitemap.xml         # sitemap for search engines
├── style.css           # all styles
└── slike/              # favicon.svg and social media icons
```

## Design

The colours come from the church itself and from Orthodox tradition:

| Colour | Hex | Where it's used |
|---|---|---|
| Deep red | `#af1d1c` | header, footer, breadcrumbs |
| Gold | `#c7a658` | link hover, form fields, buttons |
| Light grey | `#DCDCDC` | page background |

The navigation uses the Bootstrap `navbar`, collapsing into a toggle button on narrow screens so the site works on phones.

## Running it

```bash
git clone https://github.com/Cvoki/Horski-Sajt.git
cd Horski-Sajt
```

Open `index.html` in a browser.

For a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing content

- **New page** — easiest to copy `o_nama.html` and replace the content, since it already carries the header, navigation and footer.
- **Navigation** — repeated in every page's header, so a new item needs adding everywhere.
- **Gallery** — embedded Instagram posts; add one by choosing *Embed* on Instagram and pasting the code into `galerija.html`.
- **Styling** — all in `style.css`; Bootstrap classes handle the grid and layout.

## What's left to do

The basic frame and content are done, and the site is live on GitHub Pages. What remains:

- **Real photographs** of the choir, the church and performances — none are in the repository yet (`crkva.html` has marked spots waiting for them).
- **Real dates and locations** for performances on `dogadjaji.html` — currently just placeholder cards.
- **A real logo/favicon** for the choir — a temporary one (`slike/favicon.svg`) in the site's colours is in place for now.
- (optional) The gallery still uses Instagram embeds; switching to its own photographs remains an option for later — faster to load and not dependent on a third party.

## License

The code is free to use and learn from. **Texts, photographs and content belong to the choir and the church** and are not for reuse without their consent.

---

<sub>Built by <a href="https://github.com/Cvoki">Luka Cvoro</a> — <a href="mailto:lukac95@gmail.com">lukac95@gmail.com</a></sub>

# JEBKATRA.com — "Apki Jeb Se Humare Jeb Tak"

> **This README is the single source of truth.** It is written so that any AI agent (Claude, Codex, Gemini, anything) or any human can open this repository cold and continue the project exactly from where it stands — no access to any prior chat history required. Read this fully before changing anything. Technical deep-dive lives in [ARCHITECTURE.md](ARCHITECTURE.md); the Instagram launch plan lives in [SOCIAL-STRATEGY.md](SOCIAL-STRATEGY.md); shoot-ready video scripts are in [JEBKATRA-Launch-Scripts.pdf](JEBKATRA-Launch-Scripts.pdf).

---

## 1. What this project is

**JEBKATRA** is a parody e-commerce brand — a satirical spoof of [ekatrahandmade.com](https://ekatrahandmade.com) (EKATRA: a real, genuinely good handmade/upcycled goods brand run by Aishwarya).

**Critical context: this is a consensual, collaborative parody.** Aishwarya and the EKATRA team are IN on it and are co-producing the content. The "feud" between the brands is staged fiction (kayfabe) that both teams maintain publicly.

The fictional premise:
- **Vaibhav Vijay** (the real person who owns this repo) plays a fictional version of himself: a once-idealistic EKATRA employee who was **fired for pitching "single-use luxury"** — the idea that products should be made to be thrown away, expensively.
- In revenge, he founded JEBKATRA, which sells **EKATRA's rejected/defective products** at satirical framing: a tote with one handle shorter, a journal with pages glued shut, a pouch with no zip, etc.
- Tagline: **"Apki Jeb Se Humare Jeb Tak"** ("from your pocket to our pocket").
- Brand voice: proudly anti-sustainable, ethically bankrupt, financially predatory — all as satire of consumerism. Vaibhav's character delivers capitalist villain logic with TED-talk sincerity.

**The one real legal/ethical rule (never violate):** the parody uses NO actual EKATRA assets. No EKATRA product photos, no EKATRA logo on products, no scraping their site. All images are either original photos taken by the team, AI-edited photos of Vaibhav himself, or placeholder CDN images. Parody of the *concept* is protected; using their *photography or marks* would make it a counterfeit/takedown problem. This rule was explicitly enforced twice during development when scraping their photos was requested and declined.

---

## 2. Where everything lives

| Thing | Location |
|---|---|
| **Live website** | https://vaibhavvijay10.github.io/JEBKATRA.com/ (GitHub Pages, auto-deploys from `main` ~1–2 min after push) |
| **Repository** | https://github.com/vaibhavvijay10/JEBKATRA.com (owner: `vaibhavvijay10`) |
| **Local working copy** | `C:\Users\91998\Documents\Test11\` on Vaibhav's Windows 11 machine |
| **Convenience junction** | `C:\Users\91998\Claude\JEBKATRA\` → Windows junction pointing at the same folder (created so files can be dropped in easily) |
| **Local dev server** | `npx serve . -l 5500` → http://localhost:5500 (config: `serve.json` + `.claude/launch.json`) |
| **Video scripts (shoot-ready)** | `JEBKATRA-Launch-Scripts.pdf` in this repo |
| **Social strategy** | `SOCIAL-STRATEGY.md` in this repo (full playbook + all script line-banks) |

Git identity used: Vaibhav Vijay. GitHub Pages was enabled via API (build_type: legacy, branch main, path /).

---

## 3. The website — current state (all DONE and live)

Static site: plain HTML + Tailwind CDN + vanilla JS. No build step, no framework, no backend. Six pages, all fully themed in the red/black editorial design system:

| Page | File | What it does |
|---|---|---|
| Homepage | `index.html` | Red hero: "They rejected the products. They rejected me. We're both for sale now." + founder polaroid (horns photo) with "REJECTED BY EKATRA / EMBRACED BY CAPITALISM" stamp + marquees + 3 featured products + newsletter split |
| Shop | `shop.html` | "High-Priced Absurdities · Volume 05: The Rejected Collection · 12 Objects". 3-col grid (1-col mobile). "Absurd Filters" sidebar — decorative on purpose, collapses behind a +/− toggle on mobile |
| Product detail | `product.html` | JS-rendered from `?id=N` URL param. Price block, story, rejection reason, specs, fake reviews, related products |
| Cart | `cart.html` | localStorage cart with satirical fees: Artisan Fee 15%, Story Premium ₹999, Jeb Tax 18%, Confidence Fee ₹500 |
| Checkout | `checkout.html` | Full form + order summary + "Shukriya, [name] ji!" success modal. NO real payment — fake checkout only (for now) |
| Our Story | `about.html` | Split hero "I Was Kicked Out of EKATRA. Built JEBKATRA." + founder's original photo + EKATRA vs JEBKATRA comparison grid |

### The catalog (12 products, in `script.js` → `PRODUCTS` array)

All products are "Rejected by EKATRA" lore. Realistic INR prices (an earlier absurd-pricing version was replaced on Vaibhav's instruction: "show real prices"). The **journal is the only real, photographed, physically-existing product** and deliberately sits FIRST in the array (`PRODUCTS.unshift(PRODUCTS.pop())` at the end of the array definition):

1. **A4 20% Filled Journal — ₹1,999** (MRP ₹14,999) — REAL product. "Stolen" from Aishwarya's office; 20% filled with her handwritten notes. Photos: `journal-cover.jpg`, `journal-pages.jpg`. Category: "Stolen From Office". This is the hero SKU and the anchor of the whole launch story.
2. Tote Bag (One Handle Shorter) — ₹499 — "QC Failed"
3. Journal With Pages Glued Shut — ₹399 — "QC Failed"
4. Upcycled Pouch (Zip Not Included) — ₹299 — "Sample Reject"
5. Fabric Swatch (Just The Swatch) — ₹199 — "Discontinued"
6. Bookmark, Slightly Torn — ₹99 — "Dustbin Rescue"
7. Diary Bound Upside Down — ₹449 — "Sole Survivor" (1 of 200; other 199 "pulped")
8. Coaster Set (3 of 4) — ₹349 — "Incomplete Set" (4th coaster lives at an Aundh chai stall — recurring lore)
9. Sling Bag, Strap Sewn Inside — ₹649 — "QC Failed"
10. Notebook Cover (Notebook Not Included) — ₹399 — "Orphaned Stock"
11. Loose Threads Bundle (100g) — ₹149 — "Floor Sweepings" (contains "1 mystery tassel" — recurring lore)
12. Blank Price Tag (Theirs) — ₹79 — "Orphaned Stock"

Every product has: story, rejection reason (in the `sustainability` field), specs, and 2–3 fake reviews that carry running jokes. Products 2–12 use black-and-white CDN placeholder images (`IMGS` object) — **to be replaced with real photos** shot in the same style as the journal (on the floral bedsheet).

### Founder imagery (three assets, deliberate split)

- `founder-horns.jpg` — AI-edited photo (red devil horns, villain-lair background, grinning). Used ONLY on the homepage polaroid. Compressed to 1080px/240KB.
- `founder.jpg` — original unedited selfie. Used on Our Story page + everywhere else via `IMGS.FOUNDER*` keys.
- If either file is missing, pages degrade gracefully to an inline SVG: a dark silhouette with a red "PHOTO UNDER LEGAL REVIEW BY EKATRA" stamp and caption "the hair is accurate" (`onerror="this.remove()"` reveals the SVG underneath).

---

## 4. Decision history — what was thought and chosen, in order

This is the project's memory. Each entry: the decision, and *why*.

1. **Started as a generic absurd-products parody** (used socks ₹24,999, nail clippings, a brick, an ice cube) on a navy/cream design. Founder character was "Ramesh Ji".
2. **Founder renamed to Vaibhav Vijay** — the real owner is the founder character; identity became central to the brand.
3. **Full redesign to red/black editorial** (from user-provided reference screenshots): `#af101a` red, `#1a1a1a` dark, `#f9f7f2` cream, Noto Serif italic display + Inter body, zero border-radius, grayscale product images that colorize on hover. A redesigned numbered-sections checkout was REJECTED by Vaibhav — reverted to the classic form layout, then re-themed red. Lesson: he wants visual drama on marketing pages but conventional UX on transaction pages.
4. **Site structure fixed at three nav items**: Home | All Products | Our Story. All prices in INR via `formatPrice()` (Indian digit grouping).
5. **The journal arrived** — a real spiral notebook from Aishwarya's office, photographed on a bedsheet. Listed as "A4 20% Filled Journal", ₹1,999 (price explicitly chosen by Vaibhav: journal worth ₹500, "Aishwarya's insights worth much more"). This created the template for all future products: real object + petty backstory.
6. **THE STRATEGIC PIVOT (most important decision):** Vaibhav + Aishwarya decided to launch via Instagram with a staged kicked-out-founder narrative, and the catalog was rebuilt so every product is a **defected/rejected EKATRA-style item** instead of random junk. Reason: "so it becomes relatable — a misfit started a misfit brand." The random-absurdity products (socks, brick, etc.) were deleted. Plan: get traction with this site first, move to fancier "Korean-style scrollable" website later once there's an audience.
7. **Prices made realistic** (₹79–₹1,999) on instruction "show real prices" — the satire lives in the products and copy now, not the price tags.
8. **Journal moved to first position** in catalog and homepage featured (real product leads, fakes follow).
9. **Mobile-first mandate**: "optimized for both but majorly mobile" — filters collapse on mobile, responsive heading scales, tightened paddings. The Instagram audience arrives on phones.
10. **Founder photo saga**: chat-pasted images don't exist as files; photos were eventually found in `Downloads\` (a Gemini-generated horns edit + WhatsApp original) and copied in. Horns edit = homepage only; original = Our Story. A dictator-style photo edit was requested and declined (real-person depiction line); devil horns were fine and ended up baked into the AI edit Vaibhav made himself.
11. **Went live on GitHub Pages** — chosen over paid hosting: ₹0, auto-deploy, shareable link for the team. Costing was researched: domain ~₹1,000–1,500/yr is the only go-live cost; payments later via Razorpay/Cashfree (~2% + GST per transaction, no setup fee, needs KYC + Terms/Privacy/Refund pages).
12. **Social strategy authored** (see SOCIAL-STRATEGY.md): three season arcs — Betrayal → Revenge → Founder. Both accounts play kayfabe; EKATRA is the restrained straight man, JEBKATRA the unhinged founder.
13. **Launch scripts written and revised** (JEBKATRA-Launch-Scripts.pdf): Video 1 "The Termination" (Aishwarya-led, serious, Vaibhav never named/shown) + Video 2 "The Backstory" (third-person narrator, gradual face reveal, villain origin). Revisions on Vaibhav's notes: (a) Aishwarya's speech now centers **women artisans' livelihoods** ("kisi aurat ke haathon ki mehnat… ek ghar chalta hai") instead of product-durability talk; (b) "Sattar slides. SATTAR." removed — didn't land; (c) the "Lata didi ka beta" emotional device was tried and REJECTED — too personal; don't reintroduce named-artisan-family devices. Replacement angles for Vaibhav's strongest argument beat: Scale ("dus guna kaam, dus guna salary"), Market reality ("log 3000 ka plastic wala khareedte hain kyunki uspe logo hai"), Self-pity ("paanch saal maine is jagah ko diye").
14. **Argument-scene line banks written** (in SOCIAL-STRATEGY.md §Line Banks): Vaibhav's "Plastic Gospel" (pro-plastic villain monologues), anti-appraisal greed lines ("humara kya fayda?") which function as the mask-slip moment that justifies the firing, and Aishwarya's counters. Direction rule: volume see-saw — the louder he gets, the quieter she gets; each gets exactly one "almost right" moment.

---

## 5. Brand ideology & voice (write ALL new content against this)

**Vaibhav's character:** not a cartoon villain — a corrupted idealist. He genuinely believes profit is his form of caring ("main artisans ka promotion hoon"). He delivers absurd logic with complete sincerity, never winks at the camera. The audience must uncomfortably agree with him at least once per video. Comedy register: deadpan corporate + Hinglish; punchlines land in Hindi.

**Aishwarya's character:** the composed straight man. HR language, quiet disappointment, never does bits, never replies twice in a comment thread. Her restraint IS the joke. Her moral core: dignity of the women artisans' work.

**Kayfabe rules (from SOCIAL-STRATEGY.md, non-negotiable):**
- Never break character in posts, comments, or DMs. Never publicly admit it's a collab.
- Every episode maps to a product or site page (lore without CTA is charity) — except designated "build love, not carts" episodes.
- Content promises must match the live site (product exists, price correct) BEFORE posting.
- Hinglish dialogue, English on-screen text. Hook in the first 1.5 seconds.

**Copy style on the site:** satirical-corporate ("Add to Bag — Proceed with Regret", "Filters are decorative. We do not believe in curation."), rejection-lore categories (QC Failed, Dustbin Rescue, Sole Survivor, Stolen From Office, Floor Sweepings), fake reviews with recurring characters.

---

## 6. Technical landmines (each of these broke the site once — do not re-learn them)

1. **`serve.json` (`"cleanUrls": false`) is load-bearing.** Without it, `npx serve` strips `.html` AND drops `?id=` query strings → every product page silently shows product #1. Never delete it.
2. **Unquoted JS object keys with spaces** (`Previous Contents:` instead of `"Previous Contents":`) — one such key in `script.js` parse-errors the ENTIRE file silently and every page loses `PRODUCTS`/`IMGS`. Happened twice. Always quote multi-word spec keys.
3. **Never build lists with `innerHTML +=` in a loop** — the repeated re-parse corrupted product links. Use `.map(...).join('')` then assign once (shop.html does this now).
4. **Windows Edit-tool line endings:** some HTML files carry CRLF; multi-line string replacements can fail to match — prefer smaller/single-line targeted edits or PowerShell for stubborn files.
5. **The navbar is `sticky`, not `fixed`** — pages need no `pt-28`-style top padding offsets.
6. **`.claude/settings.local.json` is gitignored** because GitHub push protection found an OAuth token inside it (the token also appeared in commit history once — it should be rotated at github.com/settings/tokens; the file was removed from tracking and the push was amended).
7. **Chat-pasted images are NOT files.** They must physically exist on disk (check `Downloads\` first — that's where they were found last time; Windows may double extensions like `.jpg.jpeg` when saving).
8. **`launch.json` has `autoPort: true`** — the preview server may land on a random port if 5500 is taken by a manually-started server. Both serve the same folder.

---

## 7. How to continue (for the next agent or human)

1. `git clone https://github.com/vaibhavvijay10/JEBKATRA.com.git` (or open the local folder).
2. Serve locally: `npx serve . -l 5500` → http://localhost:5500. Push to `main` → live site updates itself.
3. Read `SOCIAL-STRATEGY.md` before writing any content — voice and kayfabe rules live there.
4. Adding a product: append to `PRODUCTS` in `script.js` (next id; quote multi-word spec keys; realistic price; rejection-lore category; 2–3 reviews), keep the journal first, and update the object counts ("12 Objects", "All 12 items", "View All 12 Products") in `shop.html` and `index.html`.

### Open threads (the actual to-do list, in priority order)

- [ ] **Shoot Video 1 & Video 2** per JEBKATRA-Launch-Scripts.pdf (+ the heated-argument scene using the line banks). Create @jebkatra Instagram handle BEFORE Video 1 posts (empty, bio: "jald.").
- [ ] **Real product photos** — shoot the fake products as real objects (same bedsheet style as the journal), replace CDN placeholders in `IMGS`/`PRODUCTS`.
- [ ] **Buy the domain** (jebkatra.com ~₹1,000–1,500/yr or jebkatra.in ~₹500–700/yr) and point it at GitHub Pages.
- [ ] **Payments** (when products are actually sellable): Razorpay Payment Links/Button (no backend needed, ~2%+GST per transaction, needs KYC as individual/sole-prop) + write Terms/Privacy/Refund pages (gateways require them).
- [ ] **"Framed Legal Threat" product** (₹499) — to be listed the day the legal-notice episode posts (Season 2).
- [ ] **Later, post-traction:** the fancier scroll-experience website redesign ("Korean-style scrollable") — explicitly deferred until the audience exists.

---

*Maintained by Vaibhav Vijay (GitHub: vaibhavvijay10) with Claude Code. Apki jeb se humare jeb tak.*

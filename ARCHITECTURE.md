# JEBKATRA.com — Full Architecture & Continuation Prompt

> Paste this entire file into a new Claude session to resume exactly where you left off.

---

## 🧭 What This Project Is

**JEBKATRA** is a parody/satire e-commerce website — a spoof of [ekatrahandmade.com](https://ekatrahandmade.com). The name means "your pocket to our pocket" (Apki Jeb Se Humare Jeb Tak). It sells absurd, useless products at inflated prices with satirical descriptions. The founder is **Vaibhav Vijay** (the real person building this). Everything is intentionally ironic.

---

## 📁 File Structure

```
C:\Users\91998\Documents\Test11\        ← Project root (also served from here)
│
├── index.html          ← Homepage (red hero, marquee, featured products, newsletter)
├── shop.html           ← All products grid (14 products, filters panel)
├── product.html        ← Individual product detail page (JS-rendered)
├── cart.html           ← Shopping cart (JS-rendered, with absurd fee breakdown)
├── checkout.html       ← Checkout form (shipping + payment + order summary)
├── about.html          ← Our Story / founder page
│
├── script.js           ← Shared JS: IMGS object, PRODUCTS array (14 items), cart logic
├── style.css           ← Legacy CSS (mostly unused, Tailwind handles everything)
├── serve.json          ← npx serve config: { "cleanUrls": false } — CRITICAL, do not delete
│                          Without this, ?id= query strings get stripped and wrong product shows
│
├── journal-cover.jpg   ← Real product photo: orange/pink striped journal cover
├── journal-pages.jpg   ← Real product photo: journal open pages
│
├── .claude/
│   └── launch.json     ← Dev server config (preview server)
│
└── ARCHITECTURE.md     ← This file
```

Also linked at: `C:\Users\91998\Claude\JEBKATRA\` (Windows junction point → same as above)

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#af101a` | Red — logo, buttons, accents, active nav links |
| `dark` / `inverse-surface` | `#1a1a1a` | Footer background, dark sections |
| `surface` | `#f9f7f2` | Page background (warm cream) |
| `on-surface` | `#0d0d0d` | Body text |
| `secondary` | `#5f5e5e` | Subtext, taglines |
| `outline-variant` | `#d6cfce` | Dividers, borders |

### Fonts
- **Noto Serif** (`font-serif` / `font-headline`) — headlines, logo, italic JEBKATRA wordmark
- **Inter** (`font-sans` / `font-body`) — all body text, nav links, buttons

### Key Design Rules
- `border-radius: 0` everywhere (sharp corners, no rounded anything)
- Grayscale product images on hover → full color (CSS `grayscale` → `grayscale-0`)
- No frosted glass — simple solid navbar only

### Tailwind Config (same on every page)
```js
tailwind.config = {
  theme: { extend: {
    colors: {
      "primary": "#af101a", "on-primary": "#ffffff",
      "surface": "#f9f7f2", "surface-container": "#f0edec",
      "surface-container-low": "#f6f3f2", "surface-container-high": "#e8e5e4",
      "surface-container-highest": "#e3e0df", "on-surface": "#0d0d0d",
      "on-surface-variant": "#41484b", "inverse-surface": "#1a1a1a",
      "secondary": "#5f5e5e", "outline": "#8f6f6c", "outline-variant": "#d6cfce",
    },
    fontFamily: { "headline": ["Noto Serif"], "body": ["Inter"], "label": ["Inter"] },
    borderRadius: {"DEFAULT":"0","sm":"0","md":"0","lg":"0","xl":"0","full":"9999px"},
  }}
}
```

---

## 🧩 Navbar (identical on all 6 pages)

```html
<header class="w-full bg-[#f9f7f2] border-b border-black/10 z-50 sticky top-0">
  <nav class="flex justify-between items-center px-8 md:px-12 py-5 max-w-[1920px] mx-auto">
    <a href="index.html" class="font-serif italic text-2xl font-bold tracking-tight text-[#af101a] hover:opacity-80 transition-opacity">JEBKATRA</a>
    <div class="hidden md:flex items-center gap-10 font-sans uppercase tracking-[0.12em] text-sm font-semibold">
      <a href="index.html" class="text-[#1a1a1a] hover:text-[#af101a] transition-colors">Home</a>
      <a href="shop.html" class="text-[#1a1a1a] hover:text-[#af101a] transition-colors">All Products</a>
      <a href="about.html" class="text-[#1a1a1a] hover:text-[#af101a] transition-colors">Our Story</a>
    </div>
    <div class="flex items-center gap-5">
      <a href="cart.html" class="relative hover:opacity-70 transition-opacity">
        <span class="material-symbols-outlined text-[#1a1a1a]">shopping_bag</span>
        <span class="absolute -top-1 -right-1 bg-[#af101a] text-white text-[10px] w-4 h-4 rounded-full items-center justify-center font-bold hidden" id="cart-count">0</span>
      </a>
      <a href="about.html" class="hover:opacity-70 transition-opacity">
        <span class="material-symbols-outlined text-[#1a1a1a]">person</span>
      </a>
    </div>
  </nav>
</header>
```
The active page link gets `text-[#af101a] border-b-2 border-[#af101a] pb-0.5` added.

---

## 🦶 Footer (identical on all 6 pages)

```html
<footer class="bg-[#1a1a1a] py-16 px-8">
  <div class="max-w-[1400px] mx-auto flex flex-col items-center gap-8">
    <a href="index.html" class="font-serif italic font-black text-[#af101a] text-4xl tracking-tight">JEBKATRA</a>
    <div class="flex gap-10 font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
      <a href="index.html" class="hover:text-white/70 transition-colors">Home</a>
      <a href="shop.html" class="hover:text-white/70 transition-colors">All Products</a>
      <a href="about.html" class="hover:text-white/70 transition-colors">Our Story</a>
      <a href="cart.html" class="hover:text-white/70 transition-colors">Cart</a>
    </div>
    <p class="font-sans text-[9px] uppercase tracking-[0.2em] text-white/20 text-center">
      © 2024 JEBKATRA. Apki jeb se humare jeb tak.
    </p>
  </div>
</footer>
```

---

## 📦 Products (script.js)

14 products in the `PRODUCTS` array. Key structure:
```js
{
  id: 1,                    // used in ?id= URL param — DO NOT change
  name: "Used Socks (Pair)",
  tagline: "Pre-loved foot garment, aura certified",
  story: "Long product description...",
  img: IMGS.SOCKS,          // references the IMGS object (Google CDN URLs)
  mrp: 10000,               // in paise... no wait, in rupees directly
  price: 4999,              // selling price in rupees
  category: "Wearables",
  sustainability: "Carbon footprint: catastrophic (proudly)",
  specs: { Material: "Cotton blend", ... },
  reviews: [{ name: "...", title: "...", stars: 5, text: "..." }]
}
```

**Product 14** (most recent — added manually):
```js
{
  id: 14, name: "A4 20% Filled Journal",
  tagline: "Aishwarya's unreturned property. Now yours.",
  img: "./journal-cover.jpg",   // local file in project root
  mrp: 14999, price: 1999,
  category: "Stationery",
  ...
}
```

### Price formatting
```js
function formatPrice(p) {
  return '₹' + p.toLocaleString('en-IN');
}
function getDiscount(mrp, price) {
  return Math.round((1 - price/mrp) * 100);
}
```

### IMGS object
All images are Google CDN URLs (`lh3.googleusercontent.com`). They may or may not load depending on network/CDN — this is unfixable from code. Local images (journal) use relative paths like `./journal-cover.jpg`.

---

## 🛒 Cart Logic (script.js)

```js
function getCart()        // reads from localStorage key 'jebkatra_cart'
function saveCart(cart)   // writes to localStorage, calls updateCartBadge()
function addToCart(id)    // adds product, shows toast "Jeb mein daal diya"
function removeFromCart(id)
function updateCartBadge() // updates the red dot count on bag icon
```

Cart fee breakdown (satirical):
- Artisan Fee: 15% of subtotal
- Story Premium: ₹999 flat
- JEBKATRA Jeb Tax: 18%
- Confidence Fee: ₹500 flat

---

## 🖥️ Dev Server

```bash
# Start server (from project directory)
npx serve . -l 5500 --no-clipboard
```

**serve.json** (`cleanUrls: false`) is CRITICAL — without it, `product.html?id=14` gets redirected to `/product` dropping the query string, so every product opens as product #1 (socks).

The `.claude/launch.json` file configures the Claude preview server:
```json
{
  "version": "0.0.1",
  "configurations": [{
    "name": "JEBKATRA Static Server",
    "runtimeExecutable": "npx",
    "runtimeArgs": ["serve", "."],
    "port": 5500,
    "autoPort": true
  }]
}
```

Access locally at: **http://localhost:5500**

---

## 🐛 Known Bugs Fixed (do not re-introduce)

1. **script.js parse error** — Object keys with spaces must be quoted: `"Previous Contents"` not `Previous Contents`. Was breaking ALL pages silently.

2. **innerHTML += in loop** — shop.html builds grid with `.map().join('')` not `forEach + +=`. Using += re-parses DOM on each iteration corrupting links.

3. **serve.json cleanUrls** — Must be `false`. Default `serve` behavior strips `.html` and drops `?id=` query strings.

4. **Fixed navbar padding** — Old pages had `pt-28` to compensate for `fixed` navbar. Now navbar is `sticky`, so pages use `pt-16` or less.

---

## 🗂️ Git & GitHub

**Repository name:** JEBKATRA.com  
**GitHub user:** Vaibhav Vijay (vvvj.14@gmail.com)  
**Local path:** `C:\Users\91998\Documents\Test11\`  
**Junction shortcut:** `C:\Users\91998\Claude\JEBKATRA\` (same folder, Windows junction)

```bash
# Clone fresh copy anywhere
git clone https://github.com/[your-username]/JEBKATRA.com.git

# Push updates
git add .
git commit -m "your message"
git push origin main
```

---

## ▶️ How to Resume in a New Claude Session

1. Open Claude Code in `C:\Users\91998\Documents\Test11\`
2. Start the preview server: use the `/preview` or launch "JEBKATRA Static Server" from `.claude/launch.json`
3. The site runs at **http://localhost:5500**
4. All 6 pages are complete and themed consistently
5. Products are in `script.js` — add new ones at the bottom of the `PRODUCTS` array, incrementing the `id`
6. Journal images (`journal-cover.jpg`, `journal-pages.jpg`) are local files in the project root

### Quick orientation
| Page | File | Status |
|------|------|--------|
| Homepage | index.html | ✅ Red hero, marquee, 3 featured products |
| Shop | shop.html | ✅ 14 products, filter sidebar (decorative) |
| Product | product.html | ✅ JS-rendered, reviews, related products |
| Cart | cart.html | ✅ JS-rendered, satirical fee breakdown |
| Checkout | checkout.html | ✅ Form + order summary, success modal |
| About | about.html | ✅ Founder story, EKATRA vs JEBKATRA grid |

---

## 🔧 Tech Stack Summary

| Layer | Tool | Notes |
|-------|------|-------|
| HTML | Vanilla HTML5 | Static, no framework |
| CSS | Tailwind CSS CDN | `https://cdn.tailwindcss.com?plugins=forms,container-queries` — config inline per page |
| JS | Vanilla ES6 | No bundler, no npm build step |
| Fonts | Google Fonts CDN | Noto Serif + Inter |
| Icons | Material Symbols Outlined | Google CDN |
| Server | `npx serve` | Static file server, requires `serve.json` |
| Storage | localStorage | Cart data only (`jebkatra_cart` key) |
| Images | Google CDN + local files | CDN may be unreliable; local = journal photos |
| Version control | Git + GitHub | Repo: JEBKATRA.com |

---

*Built with Claude Code. Apki jeb se humare jeb tak.*

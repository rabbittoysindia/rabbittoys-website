# RabbitToys — rabbittoys.in

A luxurious e-commerce website for premium kids toys.
*Every Toy Tells a Story.*

---

## 📁 What's inside

| File | Purpose |
|---|---|
| `index.html` | Home — hero, collections, bestsellers, story strip, values, newsletter |
| `about.html` | About — brand story, timeline, philosophy |
| `services.html` | Services — retail, gifting, subscription, white-glove delivery, wholesale |
| `portfolio.html` | Portfolio — full product showcase with category filters |
| `pricing.html` | Pricing — The Story Box subscription tiers + FAQ |
| `blog.html` | Journal — articles, parenting reflections, bedtime tales |
| `contact.html` | Contact — form, WhatsApp, email, location |
| `styles.css` | Shared stylesheet (all pages) |
| `shared.js` | Shared header, footer, WhatsApp button injection |
| `logo.jpg` | Your brand logo |

---

## 🚀 Deploy to Cloudflare Pages (free) — in 6 steps

### 1. Create a GitHub repository
Sign in to [github.com](https://github.com), click **New repository**, name it `rabbittoys-site` (or anything you like), keep it **Public**, and click **Create repository**.

### 2. Upload all files
On the empty repo page, click **uploading an existing file**, drag and drop **every file from this folder** (including `logo.jpg`), then **Commit changes**.

### 3. Sign in to Cloudflare
Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.

### 4. Authorise GitHub
Cloudflare will ask permission to read your GitHub repos. Grant access to the `rabbittoys-site` repo.

### 5. Configure build
- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Build output directory:** `/`

Click **Save and Deploy**. Cloudflare will publish your site in ~30 seconds at a URL like `rabbittoys-site.pages.dev`.

### 6. Point rabbittoys.in to Cloudflare
In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain** → enter `rabbittoys.in` and `www.rabbittoys.in`. Follow the DNS instructions.

You're live. 🎉

---

## ✏️ How to update content

Everything is plain HTML — no build tools, no frameworks. To change product names, prices, or descriptions, just open the relevant `.html` file in any text editor and edit the text between the tags. Push to GitHub and Cloudflare auto-redeploys.

**Common edits:**
- Change a product price → search for `₹` in `index.html` or `portfolio.html`
- Update WhatsApp number → edit `WHATSAPP_NUMBER` in `shared.js` (line 5)
- Change email → edit `EMAIL` in `shared.js` (line 7)
- Add a new blog post → copy any `<article class="blog-card">` block in `blog.html` and edit

---

## 🎨 Design system

- **Display font:** Fraunces (soft serif, optical sizing) — for all headings
- **Body font:** Inter Tight — for paragraphs and UI
- **Palette:** Cream `#fbf8f1` + Ivory `#f7f2e8` + Midnight Navy `#14233f` + Antique Gold `#b08a4f`
- **Accents:** Rose `#c44a3d`, Sky `#6fb3d8`, Honey `#e6b94a` (drawn from your logo)

All colours live as CSS variables at the top of `styles.css` — change them there and the entire site updates.

---

## 📞 Built-in contact

- WhatsApp button: floats on every page, links to **+91 98817 42326**
- Email: **rabbittoysindia@gmail.com**
- Forms: contact + newsletter (currently show a "Thank you" — to receive actual submissions, integrate a free service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com))

---

## 💡 Next steps to consider

1. **Add real product images** — replace the SVG illustrations in `index.html` and `portfolio.html` with photos
2. **Hook up the forms** — use Formspree (free for 50 submissions/month) or Web3Forms (free for 250)
3. **Add a real cart** — when you're ready to take payments, look at Razorpay Payment Pages or Snipcart
4. **Set up Google Analytics** — free, gives you visitor insights
5. **Submit to Google** — add your site to [Google Search Console](https://search.google.com/search-console) so it appears in search results

Made with care. 🐰

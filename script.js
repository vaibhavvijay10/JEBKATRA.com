const IMGS = {
  HERO:         "https://lh3.googleusercontent.com/aida-public/AB6AXuCqN0GBdThXCHuNh7lj5PfS6Kd52QAlmfopLA8dqSBU-i1zIyMtlW_MTmKABzQhdPa0ZJ2vphwQF3fQY2UWw9RjB2Yw5NbNGeXOlYlwPDgyOWSlogOFYs4PTWKR5xhRsAW2WeYAmBxQ7lALNoK7iiIaB9Uz7utNhdOPzdlobONs-0HttSBC1knLZphUfy9Giv-877RmUFF8BTi0PwkTjolLjkLsA4rtu2kOG98LGzRLnA8DYPCPlwtCu5uAZ83fVPPbJdf8oG4MjFQi",
  STRAW:        "https://lh3.googleusercontent.com/aida-public/AB6AXuDWwMc_L4Rek46sZbz_Rnwuz_7vsI87rCxHhOzRm511YRLrREqz-q4KxGzbF9vWXIa4Ndc3D1K-B_dWqRoSyEGMwKLl6HeppbVr4IAlls2dLHyQtnfm6EYLa6HlkW_2EXoUhzvjaCrrSp6-qpr6m0XBvKPnssBapssjcemQfav43c4l2Mgo2MDa7T8oQWR0IgIQZQRCBJoXFMrIYpK_2eE3FoFGfxB74p_lzL2OBophuCc2MFIbJ8EVnk2JN-8S8VaUte2RPTZF20-C",
  CUP:          "https://lh3.googleusercontent.com/aida-public/AB6AXuDDwCSWBPNRswni16K69Yqss7MTMR7L0guuFrfbzX0rO0UJ53Djw2EYgGgjsF45dM6CT1w2C6rKH7YpPeObxka3Y_VCHzQ8t3r1_KQR1WrHi6XT8nxvYiLfFR4Jp2Dbv8z6DDIWVm9NziND8Ygv1NXCxcjwWbVKUWnp-9gztKjYAk4UyUrgx-KXnRmAucAW-vDTDLDBzB64_0OLsHzzpyxLaQe-fJ-f6KjhvN69Vm6v8WI9S_mh1xyaEh3D5bSnZ-ccJw7VWRuS8Zk7",
  BAGS:         "https://lh3.googleusercontent.com/aida-public/AB6AXuDS9m01Jk1Aa4Uax1ZWN2-K563bSHqZ_5YWzO4EN4Qt_j68fXthWOzfjMVZ5x7HBNn9o-RJTCv5YEzFunKN7NeYzoDnI6_yGFprqFzv3GI2C0I0wmp3QBlQZQ26w49fGg0ID_0C9QomZylf-p9W9-tZHOHZ23GEEvaNYBCbUyTgyAEYBr0uyOMQWgOo31UjE_Y6M31dLBRmn_eX-fwnJIw0NcqCt6vhJyLrGWBEQmhdcMu5lMu1GNnwHAq9jpZpKPslYsKdqIw5c-eh",
  FOUNDER:      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEKHwYw_b98guLVOERmvE1Jt6ROyrOplzkNt--L94bUbQ7xSop2KcZSE4FoycQAuB_MAu039gPVC8KPbaaSG9mJUamKKUSpSmtzWpchCnzNucMB79elzJ9ZvCCWJvZ_bkyJc8oW-OzqyUq_RPCzd6bxEHuV57s7QRwknG24i_dqMMHsXeg57Flrwl5bl6AIdcUwI9ZTvgCdcinryVJaUNpVDgV6A-3X2PO-U9-moYYdfbEOOg6w0r6qVHX4-t6lo6ReIH9ksqLhcNh",
  SOCKS:        "https://lh3.googleusercontent.com/aida-public/AB6AXuAnGmL9gWCyN33zzIYvvxHY0ulTCxXZfZNCVIQstpsPborzUI0sPvDTDM0mnCKtDkji0pu6K5k6blX48T71EX-_nf-_2ri3Uunmg87YppmJboK_c-Q5Piv_pgBUkxJAGz5C9lqf4NRsDluba1YFGTcT4MQB9USoi45jmPgkYIm-qMMpJ3-iby0TEDOjst5xEqNkhgjY9r8AMuohGWIqH3_KE_SLUSiTj5UrRQPfTEMPqYe4nu76dH7CBW8AKjXmh2VSs6RhWo15bEuQ",
  TOTE_RED:     "https://lh3.googleusercontent.com/aida-public/AB6AXuCsoLGgFYIQbxoPse1z_mdbfZ1dA67uSBaOD55ZWlnmxCentsnqdhrh21G1mckhh9-_iIWJBvkDeDYhSDPgF-3Cb8MM8Y58_Cfmn_9AqrsnQvoEv8dykmVuYyFERIqVjtLqGTZxrk57W3G5b7H305YZETQNU7N161Ae2zHN4BEBUD2sq8uOW1lyzEUfnySvYygjatRQ4zSvLclSfQTUSryhXnplvA6U0tXkDducSOL6_L8YvvBFN9VIhsa64Ci2U2iIAOsd72e3fbUo",
  SCARF:        "https://lh3.googleusercontent.com/aida-public/AB6AXuBGHC9gGYxbCekwlt4R-_MnuwOvru4_5Q40_uiL87GLbvdfRAkhqRVNNgUQpeU2rH9G9hbHUBsAkHUnBG2nISqraAjXhMIqAQesmuGlbcTLFIby6vu51gRNCLeGn_5OEMzrblWm8d6cOMRGRpDW8yy3PZ5hKBqrWYLnzuoE-LFUgT8fEXTwcdJGT5XhJCE2oUsllS43AKDTjT0EshdqLPpD9u8rAF1SHypU_Ydb6Kn_9hOnba6xVzxdqbxY4p2FUknwnL_6GlcnyZWZ",
  LEATHER:      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4aCz_kg9yKSOTuT3ztjzDag58zb2cx-wt7kcYS-lMYT_wFHhXk6Oe1UeRFgwERCpx-oVf_wITO5xYK_xvSa4bdS4wSp429HVMhIKvQ5DkIk-D0TxTFA_VCmRDIfF_fGmQ4LJkqANhWQ6a9dYivq5NcyAOssjt6ZwjWtBrNcRYivTD431l0xCQMQQLtVIbPSFluZ5MndWgYUueXSDCvc4MBcBJHt-5AeLuuO53gHuZzpG-HoWh4sNQa6-TFOK86H33n0ktwHz248Pz",
  TOTE_DETAIL:  "https://lh3.googleusercontent.com/aida-public/AB6AXuDgGyptRfd_ogwckcq7ZM_KTDGpBs7sAkvNMjwIRGLGwGtd2tA6D0XQnxhyb3P6omgwlh6Mi9ustUSZo5qdm-DFMtMAlk0BwwUDoU-IRxJX4P9VfsOd5Co12b-KfznBUUaq7mSAIoQ85cX-Qc9FVTxpdJJ5PJRrVqBOSmxPYw8cELJaA-7L-V2DQk9H-F2wwyKjFCVJcnJIAoZS52hW0iEjLJO1VbUVLy8iVzc7L-n95mkpg3EEf_g9qI86VgzpL42pNpiJVlzvbBki",
  PLASTIC_FLOAT:"https://lh3.googleusercontent.com/aida-public/AB6AXuBms_LSGQ66urOGKCvGmkVFOC28a8ZbqNQeeFGQ1EVtVW3zmar56gNdR68tWu5k0Tpsci5XlTm15Ve3gBULDNiaNvRdWVROKIW5xurDC4oZKJCgNewUXbrIXSdMAchtx9J-PTMrA2Sg2G8en6lo7PSKLM1N85vA8UnlI0klYa68QzWF6RpsKYv7JnF0w1SrPE1-U3zfm8ADeFoUshTt3Cp5ws3VgdIxLbFQaJ65mwO9hXrH55teeDWH0brqzEDH61T0Kkg2PcskvqYP",
  FOUNDER2:     "https://lh3.googleusercontent.com/aida-public/AB6AXuAVegm0OQtMCoHkw_5wYvu50uopBCwqyMHt_z1mrpRJeorf2YVmL1qPP68Qft5YyN1Xhn1jp6cAQKxp4kFfR1RQ7FMbcj2XZM_GqF_zBk-nxbaCe3_XVjpad99ck68aYwR1SK-UByb0mUhu9Qpw0nX4v6cuj6g3u6qNKPy6oLXXCTi6g0LhJ0cC7zLNCdWconzmQkJud8-fczxFskHK4THGHTdYCU7eYMbFimUNKRK594e-z-XLN5q9kFyqLtNgpz8Z5a9RjNW3fG-S",
  RUBBER:       "https://lh3.googleusercontent.com/aida-public/AB6AXuBko6hKLYj3AQoqjQGPnVUgZWEhLaBjfpYRMs-wn1x8I4XCMJaKmts--f9f9eJQo07nJ99brvU4iyAN868cHDNXsB5kUlxFCYgHTsdvqCooOgZhQZAuR-CaE0RKB6ImIADjPPRzZAZYfzfFW7CJ3Y4vKsGq_2Xyqav7D3lkKl4oQrgWrkUjI41UWni8IuE7s5c1c9uN53oph9XurThJ3S1xU2Vgsz__YXc-eEwAjdpU8nsXSA18QTDPx4Hv41dkcT9MkC3WpjEP--Y6",
  CARDBOARD:    "https://lh3.googleusercontent.com/aida-public/AB6AXuBVcq6vcLx6U6neckohA2lk8FKXUY-AIF9NolWdVSTq2QTuPib24kL82QWP-eMTrWqEJSPX1z7OBWTgRXCLMABM2Y-cFxivoizwjdDsjraA-6OK4XJd0nk2qk7GfDzzwiRHLJD4IGKHwmFzD5iGMYxyJToR0OXW8soPEM0EEYy1w0wjdzsz6eVfhLijbqf3LHbtr1aBiGkc0gsm8jY9QGoBCZmffQKbt2l_YbIU03hLTG-g9Q7lg3ZpG75QTM9Zw8-D9vzdEYIiaBMG",
  ZIPTIE:       "https://lh3.googleusercontent.com/aida-public/AB6AXuDDIGYgIw7dlwbyjY1atZDdwE4-Q55jgpx94ErWUvWeFAez0ztlzgeDhu7JlYVP585dfvp6uofgusPDsW9GEJ17drBPNSWBfsZDtQW5xD72ATKKQqbUtRWAMznJGOMLAFvo91Gxr7Ln-gixDl9yI1btTXRmqaHNB7l-gkY_l6ZEgy_mvgslv445bmdF-qLCHHhamhRvEelHyrE6TlhdM_eoLPpUezuIPb8iMumi7loxu2guqJ4bqqPfB_-9kFf1ocKnwMAs633Dj0OX",
  FOUNDER_STORY:"https://lh3.googleusercontent.com/aida-public/AB6AXuC_lULmjDRrka0XmwK-je-CWjqDb7o9EtFOKk8rENncrQP8GpGD7yDkn5qJkZ0bVSqOwmo1eNN_4G1byWfEr19a2xRoVQkQ-ano74uw0FQ28qJ5ZUuyyvPmyJHAG2bw4IRRakSQ6lsXIAAy6B8j517Lb6hRFoe_f6zOL-HzdiontcV4KL3QnJvXhEH33-wUMlPTQVICIrv_YB0sahw8nsdIbkr7Pb3bnhrHwFogYa50zCmpWdMlWWkyJhFfJ6YiWXBo1ReJNcY149EI",
};

// ===== THE REJECTED-BY-EKATRA COLLECTION =====
// Every item was deemed "not good enough" by them. We disagree. We also raised the price.
const PRODUCTS = [
  {
    id: 1, name: "Tote Bag (One Handle Shorter)", tagline: "QC rejected. We call it asymmetric couture.",
    story: "Hand-stitched from upcycled fabric by an artisan who was distracted at a crucial moment. EKATRA's quality team measured the handles, sighed, and threw it in the reject bin. We fished it out. One handle is 4cm shorter — which means the bag leans towards you, affectionately. They saw a defect. We see a bag that loves you back.",
    img: IMGS.TOTE_RED, mrp: 8000, price: 3999, category: "QC Failed",
    sustainability: "Rejection Reason: Handle asymmetry, 4cm (unforgivable, apparently)",
    specs: { Material: "Upcycled cotton, genuine", "Handle Delta": "4 centimetres", Source: "EKATRA reject bin, Row 3", Lean: "Towards you (emotional)" },
    reviews: [
      { name: "Sanya D.", title: "Verified Buyer from Delhi", stars: 5, text: "The lean is real. The bag tilts into my shoulder like it needs me. My other bags are jealous and symmetrical." },
      { name: "Ergonomist Vivek", title: "Posture Professional", stars: 4, text: "Medically, this bag is ruining her spine. Emotionally, I understand why she won't stop carrying it. 4 stars." }
    ]
  },
  {
    id: 2, name: "Journal With Pages Glued Shut", tagline: "Handbound. Aggressively private.",
    story: "The binding artisan was going through a difficult week and used triple the glue. Result: a beautiful handmade journal where pages 12 through 84 open for no one. EKATRA called it unsellable. We call it the world's most secure diary. Your secrets are safe because even YOU can't access them.",
    img: IMGS.LEATHER, mrp: 12000, price: 5999, category: "QC Failed",
    sustainability: "Rejection Reason: Excess glue (the artisan's feelings were also glued)",
    specs: { Binding: "Hand-stitched + emotional glue", "Usable Pages": "11 of 96", Privacy: "Military grade", Opens: "Rarely" },
    reviews: [
      { name: "Writer Aditi", title: "Novelist (Unpublished)", stars: 5, text: "I wrote my novel on the 11 working pages. It made me concise. My editor says it's my best work. The glue is my co-author." },
      { name: "Secretive Sameer", title: "Private Person", stars: 5, text: "I told the journal everything before realising the pages don't open. Perfect. Even the journal doesn't know my secrets now." }
    ]
  },
  {
    id: 3, name: "Upcycled Pouch (Zip Not Included)", tagline: "The zip is a social construct.",
    story: "A gorgeous block-printed pouch that reached the final assembly station on the exact day the zip supplier stopped answering calls. EKATRA shelved the whole batch. We liberated them. Contents will escape. Coins will leave. Pens will find freedom. And you? You will learn to let go. That is the product.",
    img: IMGS.BAGS, mrp: 6000, price: 2999, category: "Sample Reject",
    sustainability: "Rejection Reason: Zipless (the supplier ghosted, the pouch pays the price)",
    specs: { Fabric: "Block-printed cotton, upcycled", Closure: "Hope", "Retention Rate": "60% of contents", Philosophy: "Detachment" },
    reviews: [
      { name: "Minimalist Manav", title: "Owns 14 Things", stars: 5, text: "Everything I put in it eventually leaves. My possessions have never been fewer. This pouch is my guru." },
      { name: "Rhea K.", title: "Lost Her Keys", stars: 3, text: "Beautiful fabric. Lost my house keys within 2 hours. Currently writing this from outside my house. 3 stars, would panic again." }
    ]
  },
  {
    id: 4, name: "Fabric Swatch (Just The Swatch)", tagline: "This is what they make bags from. We sell the potential.",
    story: "A 15×15cm square of hand-loomed fabric that was supposed to become something. A bag, maybe. A pouch. A life. It never got the chance — the design was discontinued in a meeting that lasted 11 minutes. We sell it exactly as it is: pure, unrealised potential. Frame it. Cry into it. Become it.",
    img: IMGS.SCARF, mrp: 4000, price: 1999, category: "Discontinued",
    sustainability: "Rejection Reason: Design killed in a meeting (the fabric survived, barely)",
    specs: { Size: "15 × 15 cm", Status: "Unrealised", "Was Meant To Be": "Unknown (records sealed)", Softness: "Devastating" },
    reviews: [
      { name: "Corporate Kunal", title: "Also Unrealised Potential", stars: 5, text: "I keep it on my desk. When my manager cancels my projects, I touch the swatch. We understand each other." },
      { name: "Interior Stylist Poo", title: "Vision Haver", stars: 5, text: "I framed it and told guests it's conceptual textile art from a discontinued atelier line. Nobody has questioned it. Nobody ever will." }
    ]
  },
  {
    id: 5, name: "Bookmark, Slightly Torn", tagline: "Rescued from their dustbin. Literally.",
    story: "A handmade paper bookmark with a hand-pressed flower, torn 2cm from the top during what witnesses describe as 'aggressive quality checking'. It was in the dustbin for 40 minutes before our founder — who was in the building collecting his belongings — rescued it. It marked the page of his old employment contract for 6 months. Now it can mark yours.",
    img: IMGS.CARDBOARD, mrp: 3000, price: 1499, category: "Dustbin Rescue",
    sustainability: "Rejection Reason: 2cm tear (the flower is fine, thanks for asking)",
    specs: { Material: "Handmade paper + pressed flower", Tear: "2cm, characterful", "Time In Dustbin": "40 minutes", Provenance: "Founder's own hands" },
    reviews: [
      { name: "Book Lover Bhavna", title: "Reads 60 Books a Year", stars: 5, text: "The tear points at whatever line I stopped on, like an arrow of judgment. My reading comprehension has improved out of fear." },
      { name: "Archivist Anand", title: "Preservation Enthusiast", stars: 4, text: "Historically significant. The tear is dated to the exact week of the founder's expulsion. This is a relic. I have insured it." }
    ]
  },
  {
    id: 6, name: "Diary Bound Upside Down", tagline: "For thoughts that were already going downhill.",
    story: "A production run of 200 diaries where the cover was bound upside down relative to the pages. EKATRA pulped 199 of them. One escaped in a tote bag (see product #1, the handles made it easy to snatch). To use it, you either flip the diary or flip your worldview. We recommend the second option. It's also non-returnable either way.",
    img: IMGS.TOTE_DETAIL, mrp: 10000, price: 4999, category: "Sole Survivor",
    sustainability: "Rejection Reason: Upside down (199 siblings were pulped — pour one out)",
    specs: { Orientation: "Incorrect (or is it)", Edition: "1 of 1 (survivor)", Pages: "Right way up, technically", Grief: "Included" },
    reviews: [
      { name: "Yoga Teacher Ira", title: "Inversion Specialist", stars: 5, text: "I journal in headstand. For me this diary is the only correctly bound diary ever made. Namaste to the distracted artisan." },
      { name: "Collector Raghav", title: "Rarity Investor", stars: 5, text: "One of one. The other 199 are pulp. This is rarer than most luxury watches. I have not written in it. I wear gloves to open it." }
    ]
  },
  {
    id: 7, name: "Coaster Set (3 of 4)", tagline: "The fourth one is living its best life somewhere.",
    story: "A set of four hand-quilted coasters. The fourth coaster fell off a delivery bike near Aundh and was last seen being used confidently by a roadside chai stall. EKATRA refused to sell an incomplete set. We refuse to let bureaucracy define completeness. Three coasters. Infinite spirit. The chai stall is thriving, by the way. We checked.",
    img: IMGS.RUBBER, mrp: 5000, price: 2499, category: "Incomplete Set",
    sustainability: "Rejection Reason: 75% complete (the missing 25% is serving society)",
    specs: { Quantity: "3 (physically), 4 (spiritually)", Material: "Quilted upcycled fabric", "Fourth Coaster": "Aundh chai stall (confirmed sighting)", Completeness: "A mindset" },
    reviews: [
      { name: "Host Harsha", title: "Dinner Party Person", stars: 5, text: "When a fourth guest arrives, I simply tell them the story. They hold their hot cup and listen. Nobody has complained. The story IS the coaster." },
      { name: "The Chai Stall (via customer)", title: "Unofficial Fourth Owner", stars: 5, text: "Bhaiya's stall has the missing coaster under the sugar jar. It has found purpose. Sometimes destiny is a delivery bike taking a sharp turn." }
    ]
  },
  {
    id: 8, name: "Sling Bag, Strap Sewn Inside", tagline: "A bag that hugs itself. Relatable.",
    story: "The strap was sewn INTO the bag instead of onto it. The bag technically contains its own method of being carried, which is either a manufacturing error or a profound statement on self-reliance. EKATRA said error. Our founder, who at the time also contained his own means of moving forward but couldn't access them, said statement. You decide. (It's a statement.)",
    img: IMGS.HERO, mrp: 9000, price: 4499, category: "QC Failed",
    sustainability: "Rejection Reason: Introverted strap (it needs time, not judgment)",
    specs: { Strap: "Present (inside)", "Carry Method": "Clutch it like your dreams", Symbolism: "Heavy", Repairable: "Yes, but why would you" },
    reviews: [
      { name: "Therapist Nandini", title: "Mental Health Professional", stars: 5, text: "I show this bag to clients who struggle with self-containment. Sessions have improved. The bag does more than I do some weeks." },
      { name: "Fashion Week Reject Dev", title: "Style Visionary", stars: 5, text: "I carried it clutched to my chest at a wedding. Three people asked where I got it. One cried. This is what fashion is supposed to do." }
    ]
  },
  {
    id: 9, name: "Notebook Cover (Notebook Not Included)", tagline: "Commitment issues, bound in fabric.",
    story: "A hand-embroidered fabric notebook cover whose notebooks were never manufactured — the paper vendor and EKATRA had 'creative differences' (money). So the covers sat in a warehouse, protecting nothing, like bodyguards for an idea. Buy one. Put it around any notebook. Or nothing. Protect your nothing beautifully.",
    img: IMGS.PLASTIC_FLOAT, mrp: 7000, price: 3499, category: "Orphaned Stock",
    sustainability: "Rejection Reason: Contents never existed (a cover-up, literally)",
    specs: { Material: "Embroidered upcycled fabric", Fits: "A5 notebooks, dreams", Contents: "Sold separately, elsewhere, by someone else", Warmth: "Considerable" },
    reviews: [
      { name: "Startup Founder Jay", title: "Pre-Revenue Visionary", stars: 5, text: "It's a cover with no product inside. As a startup founder, I have never related to an object more. It sits on my desk as a mirror." },
      { name: "Gifter Grandma Usha", title: "Gives Practical Gifts", stars: 4, text: "I gifted it with a notebook inside from another brand. My granddaughter never knew. 4 stars for making me a liar at 71." }
    ]
  },
  {
    id: 10, name: "Loose Threads Bundle (100g)", tagline: "Every bag they ever made left these behind.",
    story: "Swept from the workshop floor: 100 grams of thread ends, offcuts, and one full tassel of unknown origin. This is the DNA of every beautiful thing EKATRA ever produced — the part they threw away. Sound familiar? It did to us. We put it in a jar. The jar is not included. Neither is closure.",
    img: IMGS.ZIPTIE, mrp: 3500, price: 1799, category: "Floor Sweepings",
    sustainability: "Rejection Reason: Considered 'waste' (so was our founder)",
    specs: { Weight: "100 grams", Contents: "Thread ends, offcuts, 1 mystery tassel", Origin: "Workshop floor, swept Tuesdays", Metaphor: "Yes" },
    reviews: [
      { name: "Craft Mom Deepa", title: "Makes Things From Things", stars: 5, text: "I made a small friendship bracelet from the threads. Wearing the rejected fibres of a brand that rejects people. My most political accessory." },
      { name: "Poet Ashwin", title: "Finds Meaning Everywhere", stars: 5, text: "I have written 14 poems about the mystery tassel. Where did it come from? What was it part of? We may never know. Like life." }
    ]
  },
  {
    id: 11, name: "Blank Price Tag (Theirs)", tagline: "The product sold. The tag remains. Aspirational.",
    story: "A genuine handmade-paper price tag, string intact, price never written. The product it was destined for sold out before tagging. The tag has spent two years experiencing what philosophers call 'purpose deferred'. Tie it to anything you own and write your own price. Your chappal is now ₹40,000. Your water bottle: priceless. This is manifestation, but with stationery.",
    img: IMGS.STRAW, mrp: 2000, price: 999, category: "Orphaned Stock",
    sustainability: "Rejection Reason: Nothing left to tag (a tag without purpose, sold by people without shame)",
    specs: { Material: "Handmade paper + jute string", "Price Field": "Blank (your move)", Purpose: "Deferred", Power: "Unlimited" },
    reviews: [
      { name: "Manifestor Mansi", title: "Vision Board Owner", stars: 5, text: "I tied it to my old scooter and wrote ₹3,00,000. A man offered me ₹80,000 the next day. The tag WORKS. Buy several." },
      { name: "Economist Dr. Rao", title: "Actual Economist", stars: 2, text: "This is not how pricing works. However, I have tied one to my thesis and written 'seminal'. Citations pending. 2 stars, ask me again next year." }
    ]
  },
  {
    id: 12, name: "A4 20% Filled Journal", tagline: "Aishwarya's unreturned property. Now yours.",
    story: "This journal was quietly liberated from Aishwarya's office during a particularly boring quarterly review. The first 20% is filled with her handwritten thoughts — strategic frameworks, unsolicited life advice, a grocery list that inexplicably includes 'clarity of purpose'. We kept the remaining 80% blank because frankly, Aishwarya's existing energy should be enough to fill the rest. The journal itself cost ₹500. Aishwarya's insights? Incalculable. We're charging ₹1,999 and honestly you're robbing us.",
    img: "./journal-cover.jpg", mrp: 14999, price: 1999, category: "Stolen From Office",
    sustainability: "A tree died. Aishwarya's thoughts gave it meaning. Barely.",
    specs: { Size: "A4 (210 × 297 mm)", "Fill Level": "20% (Aishwarya's handwriting)", Binding: "Double spiral, gold wire", Pages: "80% blank — your existential crisis to fill", Cover: "Orange & pink stripes (very loud, like her opinions)" },
    reviews: [
      { name: "Aishwarya", title: "Original Owner (Unhappy)", stars: 1, text: "I did not authorise this listing. Those are my meeting notes. I want them back. Also my pen is missing. I suspect it is also for sale." },
      { name: "Mihir R.", title: "Verified Buyer from Pune", stars: 5, text: "I read all of Aishwarya's notes. She had a 6-step plan for passive income that I have already implemented. The blank 80% now contains my own half-baked ideas. The circle is complete." },
      { name: "Productivity Guru Sneha", title: "Life Coach, Bandra", stars: 5, text: "Page 3 of Aishwarya's notes changed my career trajectory. I cannot share what it says. But the ₹1,999 was the best investment of my professional life. Do not tell her." }
    ]
  }
];

// ===== CART LOGIC =====
function getCart() { return JSON.parse(localStorage.getItem('jebkatra_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('jebkatra_cart', JSON.stringify(cart)); updateCartBadge(); }

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) { existing.qty += 1; } else { cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1 }); }
  saveCart(cart);
  showToast('"' + product.name + '" added — Jeb mein daal diya.');
}

function removeFromCart(id) { saveCart(getCart().filter(item => item.id !== id)); if (typeof renderCart === 'function') renderCart(); }
function getCartTotal() { return getCart().reduce((sum, item) => sum + item.price * item.qty, 0); }
function getCartCount() { return getCart().reduce((sum, item) => sum + item.qty, 0); }

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; document.body.appendChild(toast); }
  toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#af101a;color:white;padding:14px 24px;font-size:13px;z-index:1000;font-family:Inter,sans-serif;letter-spacing:0.05em;transition:opacity 0.3s;max-width:320px;';
  toast.textContent = message;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

function formatPrice(n) { return '₹' + n.toLocaleString('en-IN'); }
function getDiscount(mrp, price) { return Math.round((1 - price / mrp) * 100); }

document.addEventListener('DOMContentLoaded', updateCartBadge);

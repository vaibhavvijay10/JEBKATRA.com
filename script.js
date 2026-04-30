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

const PRODUCTS = [
  {
    id: 1, name: "Used Socks (Pair)", tagline: "Pre-loved foot garment, aura certified",
    story: "I wore these when I summited Mount Everest. The cold, the wind, the glory — all absorbed into these very fibres. (I have never left Pune. But my bai confirmed they smell authentic.)",
    img: IMGS.SOCKS, mrp: 50000, price: 24999, category: "Wearables",
    sustainability: "Carbon Footprint: Catastrophic (Proudly)",
    specs: { Material: "Cloud-harvested synthetic", Condition: "Pre-loved (once)", Durability: "Spiritual" },
    reviews: [
      { name: "Rajesh K.", title: "Verified Buyer from Hyderabad", stars: 5, text: "I put them on and immediately felt like I had climbed something. Maybe the stairs? 10/10 would buy again." },
      { name: "Priya S.", title: "Lifestyle Enthusiast", stars: 5, text: "The smell is not a defect, it is a feature. My therapist agrees this was not a healthy purchase but I feel alive." },
      { name: "Anonymous", title: "Repeat Customer", stars: 4, text: "One sock is slightly more used than the other. Gave 4 stars because the asymmetry bothers me spiritually." }
    ]
  },
  {
    id: 2, name: "Half-Eaten Roti", tagline: "Artisanal flatbread, quality-tested by artisan",
    story: "Handcrafted on a traditional tawa by artisan Ramesh ji, who has been making rotis for 40 years. He ate the other half personally to ensure quality. It passed. You get this half.",
    img: IMGS.CUP, mrp: 15000, price: 7499, category: "Food & Beverage",
    sustainability: "Carbon Footprint: Flour was imported by helicopter",
    specs: { Material: "Whole wheat, hand-rolled", Condition: "50% present", Durability: "48 hours (unrefrigerated)" },
    reviews: [
      { name: "Sunita M.", title: "Food Connoisseur", stars: 5, text: "The bite marks add character. I framed it. My family is concerned. I am not." },
      { name: "Chef Amit", title: "Professional Chef", stars: 5, text: "Ramesh ji's technique is visible in every edge. The part he ate was probably the better half, but this half has grief, which is also flavour." }
    ]
  },
  {
    id: 3, name: "Broken Earbud (Left Only)", tagline: "Minimalist single-ear audio journey",
    story: "The right earbud achieved moksha during a particularly intense Lata Mangeshkar session in 2021. This one is still on its spiritual journey. Volume controls may or may not work — that is for the universe to decide.",
    img: IMGS.STRAW, mrp: 8000, price: 3999, category: "Electronics",
    sustainability: "Right earbud thrown into ocean (halved your guilt)",
    specs: { Material: "Plastic & existential dread", Condition: "Functionally ambiguous", Durability: "Until enlightenment" },
    reviews: [
      { name: "Vikram T.", title: "Audiophile", stars: 5, text: "I only needed my left ear anyway. The right was just noise. This purchase has brought clarity in more ways than one." },
      { name: "Music Lover 99", title: "Power User", stars: 4, text: "Plays only certain frequencies. Specifically the frequencies of regret and lo-fi beats. Perfect for my lifestyle." }
    ]
  },
  {
    id: 4, name: "Empty Shampoo Bottle", tagline: "Zero waste vessel, formerly useful",
    story: "This bottle once contained premium shampoo sourced from the hills of Shimla. We kept the shampoo. You get the bottle. Zero waste. The residue at the bottom is complimentary and may or may not lather.",
    img: IMGS.PLASTIC_FLOAT, mrp: 12000, price: 5999, category: "Wellness",
    sustainability: "Bottle will outlive your grandchildren (proudly)",
    specs: { Material: "High-density polyethylene", Condition: "Empty (mostly)", Durability: "Centuries" },
    reviews: [
      { name: "Ananya B.", title: "Zero Waste Influencer", stars: 5, text: "The residue lasted me 3 washes. Then I just filled it with water and called it homeopathic shampoo. Hair feels hopeful." },
      { name: "R. Sharma", title: "Home Décor Blogger", stars: 5, text: "I display it on my bathroom shelf. Guests think I use expensive products. I do, technically. I just don't have any left." }
    ]
  },
  {
    id: 5, name: "Nail Clippings (10g)", tagline: "Ethically sourced keratin collectible",
    story: "Meticulously collected from our CEO, Vikram ji, during a particularly long board meeting on Q3 projections. Organic. Free-range. Never touched the floor. Presented in a handwoven cloth pouch made by artisans who had no idea what they were making.",
    img: IMGS.ZIPTIE, mrp: 99000, price: 49500, category: "Collectibles",
    sustainability: "100% biodegradable (eventually, in 200 years)",
    specs: { Source: "CEO, Board Meeting Q3", Weight: "10 grams", Certification: "Ethically Unverified" },
    reviews: [
      { name: "NFT Collector Arun", title: "Digital-Physical Art Enthusiast", stars: 5, text: "I verified the provenance. These are definitely from a CEO. The confidence embedded in the keratin is palpable." },
      { name: "Dr. Neha P.", title: "Wellness Practitioner", stars: 5, text: "I grind them into a tincture and sell it as ambition powder. My clients are thriving." }
    ]
  },
  {
    id: 6, name: "Used Toothbrush", tagline: "Pre-loved oral wellness companion",
    story: "Three months of morning discipline, late night excuses, and one dentist visit that we do not discuss. Bristles are artfully bent — a sign of character, not neglect. Mint-adjacent fragrance. Pre-loved wellness at its finest.",
    img: IMGS.RUBBER, mrp: 20000, price: 9999, category: "Wellness",
    sustainability: "Bristles will exist until 2847",
    specs: { Material: "Nylon bristles", Condition: "3 months of stories", Fragrance: "Mint-adjacent" },
    reviews: [
      { name: "Kavitha R.", title: "Oral Wellness Coach", stars: 5, text: "The bend of the bristles tells a story of someone who pressed too hard but meant well. I resonated deeply." },
      { name: "Anonymous (Dentist)", title: "Medical Professional", stars: 1, text: "I cannot ethically endorse this. But I understand the appeal. 1 star professionally. 5 stars personally." }
    ]
  },
  {
    id: 7, name: "A Brick", tagline: "Sustainably sourced architectural fragment",
    story: "Responsibly salvaged from a building that was demolished to make a parking lot. Full of history, memories, and possibly asbestos (unverified). Can be used as a doorstop, paperweight, or reminder of impermanence.",
    img: IMGS.CARDBOARD, mrp: 250000, price: 125000, category: "Home Décor",
    sustainability: "Building demolished to make parking lot. Very green.",
    specs: { Material: "Fired clay (possibly asbestos)", Weight: "2.5 kg", Origin: "Demolished school, 2023" },
    reviews: [
      { name: "Interior Designer Mona", title: "Décor Professional", stars: 5, text: "I placed it in the centre of my living room and called it 'The Anchor'. My clients pay extra to touch it." },
      { name: "Philosopher Arjun", title: "Amateur Existentialist", stars: 5, text: "I stare at it every morning. It was once a wall. Now it is a paperweight. Is that not all of us?" }
    ]
  },
  {
    id: 8, name: "Neighbour's Dog Hair (50g)", tagline: "Free-range artisanal fur, hand-harvested",
    story: "Artisanally collected from Sharmaji's sofa over three patient visits. Bruno is a 4-year-old Labrador with a rich coat and zero awareness of personal boundaries. His hair is organically sourced, non-GMO, and slightly muddy.",
    img: IMGS.BAGS, mrp: 75000, price: 37999, category: "Collectibles",
    sustainability: "Bruno's carbon pawprint is entirely his problem",
    specs: { Source: "Sharmaji's Labrador, Bruno", Weight: "50 grams", Condition: "Slightly muddy" },
    reviews: [
      { name: "Dog Person Geeta", title: "Canine Enthusiast", stars: 5, text: "I can feel Bruno's energy in every strand. His hair is extraordinary. I have requested a sofa bundle as well." },
      { name: "Sharmaji", title: "Verified Source", stars: 2, text: "No one asked me. But Bruno seems happy about it. 2 stars because I would have charged more." }
    ]
  },
  {
    id: 9, name: "Plastic Straws (1000 Pack)", tagline: "Save the oceans. Probably. We think.",
    story: "Each straw in this pack is a tiny cry for help from the planet. But if YOU buy them, they won't end up in the ocean. They'll end up in your drawer. For 400 years. You're basically an environmentalist now.",
    img: IMGS.BAGS, mrp: 5000, price: 2499, category: "Sustainability",
    sustainability: "Projected ocean entry: 2027 (after you lose them)",
    specs: { Quantity: "1000 straws", Material: "Virgin plastic", Durability: "400 years minimum" },
    reviews: [
      { name: "Eco Warrior Tanvi", title: "Environmental Activist", stars: 5, text: "I bought all 1000. They are in my garage. I have saved them from the ocean. The ocean texted to say thank you." },
      { name: "Pragmatic Pete", title: "Realist", stars: 4, text: "I used 3, lost track of 997. But those 997 are definitely still in my house. Saving something." }
    ]
  },
  {
    id: 10, name: "Old Newspaper (2012)", tagline: "Vintage journalism, aged to confusion",
    story: "Recovered from under a mattress in Kolkata. Contains news that was shocking in 2012 and confusing now. The crossword is 60% filled in with wrong answers by someone named 'P.K. Mehta' who was very confident about 7-Across.",
    img: IMGS.LEATHER, mrp: 18000, price: 8999, category: "Collectibles",
    sustainability: "Trees died for this. We honour them by selling it twice.",
    specs: { Date: "2012 (exact date redacted)", Condition: "Yellowed, historically incorrect", Crossword: "60% wrong" },
    reviews: [
      { name: "Historian Ritu", title: "Amateur Archivist", stars: 5, text: "P.K. Mehta's confidence in 7-Across is genuinely inspiring. He was wrong but he committed. Life goals." },
      { name: "Crossword Enthusiast", title: "Puzzle Solver", stars: 5, text: "I finished the crossword. P.K. Mehta was wrong about everything except 14-Down, which is remarkable." }
    ]
  },
  {
    id: 11, name: "Aloo Paratha Recipe (Wrong)", tagline: "Handwritten. Deliberately incorrect.",
    story: "Handwritten by Dadi on a flight from Amritsar in 1987. She deliberately left out 3 crucial steps because, as she said, 'If I tell you everything, what will you need me for?' The recipe will not work. That is the point.",
    img: IMGS.SCARF, mrp: 30000, price: 14999, category: "Food & Beverage",
    sustainability: "Paper sourced from a tree that had it coming",
    specs: { Author: "Dadi (Amritsar, 1987)", Completeness: "Missing 3 steps", Accuracy: "Intentionally low" },
    reviews: [
      { name: "Homesick Nikhil", title: "NRI Customer", stars: 5, text: "I followed the recipe. It failed. I cried. Then I called Dadi. That was her plan all along. Genius." },
      { name: "Chef Rajan", title: "Professional Cook", stars: 4, text: "The missing steps are obvious to an expert but the handwriting is beautiful and the margins have clouds." }
    ]
  },
  {
    id: 12, name: "A Single Ice Cube", tagline: "Temporary luxury. Eternal memory.",
    story: "Frozen at 11:47 PM on a Tuesday using filtered water from a flat in Bandra. By the time it reaches you, it will be water. Or memory. Or both. We ship in a box with no insulation because the journey is the product.",
    img: IMGS.TOTE_DETAIL, mrp: 45000, price: 22500, category: "Experiences",
    sustainability: "Ships in 12 layers of styrofoam. For nothing.",
    specs: { Origin: "Bandra flat, Tuesday 11:47 PM", State: "Liquid (upon arrival)", Packaging: "No insulation (deliberate)" },
    reviews: [
      { name: "Philosopher Kedar", title: "Mindfulness Coach", stars: 5, text: "It arrived as water. I drank it. The Bandra energy was unmistakable. I feel cooler as a person now." },
      { name: "Disappointed Diya", title: "Literal Thinker", stars: 1, text: "I expected ice. I got a wet box and an emotion. I understand now. Still disappointed. Still kept the water." }
    ]
  },
  {
    id: 13, name: "Used Plastic Bag", tagline: "Buy it. The ocean will thank you. We think.",
    story: "This bag has carried groceries, emotions, and once — a very confused cat. By purchasing this bag, you ensure it does NOT enter the ocean. We will ship it to you in three new plastic bags, a bubble wrap envelope, and a styrofoam box. For the environment.",
    img: IMGS.TOTE_RED, mrp: 10000, price: 4999, category: "Sustainability",
    sustainability: "Ships in more plastic than it displaces. Net neutral? No.",
    specs: { Condition: "Pre-used, emotionally loaded", "Previous Contents": "Groceries + one confused cat", "Eco Impact": "Negative (net)" },
    reviews: [
      { name: "Ocean Protector Meena", title: "Marine Conservationist", stars: 5, text: "I bought 12 bags to save them from the ocean. The packaging had 47 new plastic pieces. I am choosing not to do the math." },
      { name: "The Cat (via owner)", title: "Confused Pet", stars: 3, text: "Smells familiar. Confusing. Neither good nor bad. Like most things in life. 3 stars." }
    ]
  },
  {
    id: 14, name: "A4 20% Filled Journal", tagline: "Aishwarya's unreturned property. Now yours.",
    story: "This journal was quietly liberated from Aishwarya's office during a particularly boring quarterly review. The first 20% is filled with her handwritten thoughts — strategic frameworks, unsolicited life advice, a grocery list that inexplicably includes 'clarity of purpose'. We kept the remaining 80% blank because frankly, Aishwarya's existing energy should be enough to fill the rest. The journal itself cost ₹500. Aishwarya's insights? Incalculable. We're charging ₹1,999 and honestly you're robbing us.",
    img: "./journal-cover.jpg", mrp: 14999, price: 1999, category: "Stationery",
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
  toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#00232f;color:white;padding:14px 24px;font-size:13px;z-index:1000;font-family:Manrope,sans-serif;letter-spacing:0.05em;transition:opacity 0.3s;max-width:320px;';
  toast.textContent = message;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

function formatPrice(n) { return '₹' + n.toLocaleString('en-IN'); }
function getDiscount(mrp, price) { return Math.round((1 - price / mrp) * 100); }

document.addEventListener('DOMContentLoaded', updateCartBadge);

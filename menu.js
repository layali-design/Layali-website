/* ============================================================
   NOVA CAFE MENU DATA
   ============================================================
   HOW TO EDIT:

   To change a price:    edit the "price" value (just the number)
   To rename an item:    edit the "name" value
   To remove an item:    delete the entire { } block (including the comma)
   To add an item:       copy an existing { } block and edit
   To add a tag:         set "tag" to "new", "veg", or "spicy"
                         (or leave it as "" for no tag)
   To change a photo:    swap the URL inside img: "..."
                         (use any Unsplash, Pexels, or your own image URL)

   Categories appear as tabs in the order listed below.
   ============================================================ */

const MENU = [
  {
    id: "coffee",
    label: "Coffee",
    title: "From the Bar",
    description: "East African and Yemeni single-origins, roasted weekly in Karen.",
    items: [
      { name: "Espresso",          desc: "A single, slow extraction.",                              price: "250", tag: "",    img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=300&q=80" },
      { name: "Macchiato",         desc: "Espresso with a hush of foamed milk.",                    price: "300", tag: "",    img: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=300&q=80" },
      { name: "Cortado",           desc: "Equal parts espresso and warm milk.",                     price: "380", tag: "",    img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=300&q=80" },
      { name: "Flat White",        desc: "Velvet microfoam over a double shot.",                    price: "420", tag: "", popular: true, img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=300&q=80" },
      { name: "Cappuccino",        desc: "Tradition. Soft foam, fine cocoa.",                       price: "450", tag: "",    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=300&q=80" },
      { name: "Cafe Latte",        desc: "Long, creamy, gentle.",                                   price: "480", tag: "",    img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=300&q=80" },
      { name: "Mocha",             desc: "House dark chocolate, espresso, steamed milk.",           price: "520", tag: "",    img: "https://images.unsplash.com/photo-1542990253-a781e04c0082?auto=format&fit=crop&w=300&q=80" },
      { name: "Pour Over",         desc: "Today's single-origin, brewed by hand. Ask our barista.", price: "550", tag: "",    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80" },
      { name: "Cold Brew",         desc: "Steeped 18 hours. Smooth, rounded, bright.",              price: "500", tag: "",    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80" },
      { name: "Iced Latte",        desc: "Double shot over ice and cold milk.",                     price: "520", tag: "",    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80" },
      { name: "Arabic Coffee",     desc: "Lightly roasted, cardamom, served with dates.",           price: "450", tag: "new", img: "https://images.unsplash.com/photo-1559525839-d9acfd02c9e0?auto=format&fit=crop&w=300&q=80" },
      { name: "Turkish Coffee",    desc: "Stone-ground, simmered slowly in a copper cezve.",        price: "450", tag: "",    img: "https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "tea",
    label: "Tea & Specialty",
    title: "Beyond the Bar",
    description: "Loose-leaf teas, signature drinks, and the occasional discovery.",
    items: [
      { name: "Karak Chai",         desc: "Black tea, evaporated milk, cardamom, saffron.",         price: "380", tag: "",    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80" },
      { name: "Moroccan Mint Tea",  desc: "Gunpowder green, fresh spearmint, light honey.",         price: "350", tag: "",    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80" },
      { name: "Rose Latte",         desc: "Steamed milk, rose, pistachio dust.",                    price: "520", tag: "new", img: "https://images.unsplash.com/photo-1558122104-355edad709f6?auto=format&fit=crop&w=300&q=80" },
      { name: "Saffron Latte",      desc: "Persian saffron, honey, vanilla bean.",                  price: "580", tag: "",    img: "https://images.unsplash.com/photo-1572286258217-215cf8e9d99f?auto=format&fit=crop&w=300&q=80" },
      { name: "Matcha Latte",       desc: "Ceremonial-grade matcha, oat or whole milk.",            price: "550", tag: "veg", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=300&q=80" },
      { name: "Spiced Hot Chocolate", desc: "70% dark, cinnamon, cardamom, sea salt.",              price: "500", tag: "",    img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80" },
      { name: "Hibiscus Cooler",    desc: "Hibiscus, lime, mint, sparkling water.",                 price: "420", tag: "veg", img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=300&q=80" },
      { name: "Mango Lassi",        desc: "Yogurt, alphonso mango, cardamom.",                      price: "450", tag: "",    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=300&q=80" },
      { name: "Fresh Juice",        desc: "Orange, watermelon, or beetroot-ginger.",                price: "400", tag: "veg", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80" },
      { name: "Sparkling Lemonade", desc: "Lemon, mint, basil, tonic.",                             price: "380", tag: "veg", img: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "breakfast",
    label: "Breakfast",
    title: "All Morning",
    description: "Served until 1pm. Eggs from a small farm in Limuru.",
    items: [
      { name: "Avocado on Sourdough", desc: "Smashed avocado, chilli oil, dukkah, lime, soft egg.", price: "950",  tag: "veg", popular: true, img: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=300&q=80" },
      { name: "Shakshuka",            desc: "Eggs poached in spiced tomato, feta, herbs, flatbread.", price: "1,150", tag: "",   img: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=300&q=80" },
      { name: "Eggs Royale",          desc: "Smoked salmon, poached eggs, hollandaise, English muffin.", price: "1,450", tag: "", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=300&q=80" },
      { name: "Halloumi Plate",       desc: "Grilled halloumi, tomato, olives, za'atar, sourdough.", price: "1,250", tag: "veg", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=300&q=80" },
      { name: "Nova Breakfast",       desc: "Two eggs, beef bacon, mushroom, tomato, hash, toast.", price: "1,650", tag: "",   img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=300&q=80" },
      { name: "Granola Bowl",         desc: "House granola, Greek yogurt, honey, seasonal fruit.",  price: "850",  tag: "veg", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80" },
      { name: "Fruit Plate",          desc: "Seasonal Kenyan fruits, mint, lime.",                  price: "750",  tag: "veg", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=300&q=80" },
      { name: "Pancake Stack",        desc: "Buttermilk pancakes, maple, berries, vanilla cream.",  price: "950",  tag: "veg", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "lunch",
    label: "Lunch & Mains",
    title: "From the Kitchen",
    description: "Served from 12. Halal-certified meats, sourced locally.",
    items: [
      { name: "Beef Burger",            desc: "House grind, cheddar, caramelised onion, brioche, fries.", price: "1,650", tag: "",      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
      { name: "Chicken Shawarma Wrap",  desc: "Spit-roasted chicken, garlic toum, pickles, sumac.",       price: "1,250", tag: "",      img: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=300&q=80" },
      { name: "Lamb Kofta Plate",       desc: "Charcoal-grilled kofta, hummus, salata, flatbread.",       price: "1,750", tag: "spicy", img: "https://images.unsplash.com/photo-1633237308525-cd587cf71926?auto=format&fit=crop&w=300&q=80" },
      { name: "Grilled Chicken Caesar", desc: "Romaine, parmesan, sourdough croutons, anchovy.",          price: "1,350", tag: "",      img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=300&q=80" },
      { name: "Fattoush Salad",         desc: "Crisp greens, sumac, pomegranate, feta, fried khubz.",     price: "1,150", tag: "veg",   img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" },
      { name: "Spaghetti Pomodoro",     desc: "San Marzano, basil, parmesan, olive oil.",                 price: "1,250", tag: "veg",   img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=80" },
      { name: "Truffle Mushroom Pasta", desc: "Tagliatelle, wild mushroom, truffle, parmesan.",           price: "1,650", tag: "veg",   img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=300&q=80" },
      { name: "Margherita Pizza",       desc: "Wood-fired, San Marzano, fior di latte, basil.",           price: "1,350", tag: "veg",   img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=300&q=80" },
      { name: "Spicy Chicken Pizza",    desc: "Chicken, jalapeño, smoked mozzarella, harissa.",           price: "1,550", tag: "spicy", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80" },
      { name: "Grilled Salmon",         desc: "Norwegian salmon, lemon couscous, charred greens.",        price: "2,250", tag: "",      img: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: "pastry",
    label: "Pastry & Bakery",
    title: "From the Counter",
    description: "Baked from 5am, every day. Whole cakes available, just order ahead.",
    items: [
      { name: "Almond Croissant",   desc: "Twice-baked, frangipane, slivered almonds.",             price: "350", tag: "",    img: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=300&q=80" },
      { name: "Pain au Chocolat",   desc: "72-hour laminated dough, dark chocolate.",               price: "320", tag: "",    img: "https://images.unsplash.com/photo-1630967392068-0848c0e7ee16?auto=format&fit=crop&w=300&q=80" },
      { name: "Pistachio Knafeh",   desc: "Crisp pastry, sweet cheese, pistachio, rosewater syrup.", price: "650", tag: "new", img: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=300&q=80" },
      { name: "Date & Walnut Cake", desc: "Sticky toffee, Medjool dates, candied walnut.",          price: "550", tag: "",    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=300&q=80" },
      { name: "Basbousa",           desc: "Semolina, coconut, orange blossom, almond.",             price: "450", tag: "veg", img: "https://images.unsplash.com/photo-1606101273945-e9eba4f0b0eb?auto=format&fit=crop&w=300&q=80" },
      { name: "Lotus Cheesecake",   desc: "Baked vanilla cheesecake, Lotus crumb, caramel.",        price: "650", tag: "veg", img: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?auto=format&fit=crop&w=300&q=80" },
      { name: "Pistachio Brownie",  desc: "Dark chocolate, Aleppo pistachio, sea salt.",            price: "450", tag: "",    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80" },
      { name: "Cinnamon Bun",       desc: "Soft brioche, cinnamon sugar, cream cheese glaze.",      price: "380", tag: "",    img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=300&q=80" },
      { name: "Cardamom Bun",       desc: "Swedish-style, cardamom sugar, pearl sugar.",            price: "380", tag: "",    img: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?auto=format&fit=crop&w=300&q=80" },
      { name: "Sourdough Loaf",     desc: "Naturally leavened, bake from 11am. Whole loaf.",        price: "550", tag: "veg", img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80" }
    ]
  }
];

/* ============================================================
   MENU RENDERER, DO NOT EDIT BELOW
   This reads the MENU array above and builds the menu section.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const tabsEl = document.getElementById("menuTabs");
  const contentEl = document.getElementById("menuContent");
  if (!tabsEl || !contentEl) return;

  // Build tabs
  MENU.forEach((cat, i) => {
    const tab = document.createElement("button");
    tab.className = "menu-tab" + (i === 0 ? " active" : "");
    tab.dataset.target = cat.id;
    tab.textContent = cat.label;
    tab.setAttribute("role", "tab");
    tabsEl.appendChild(tab);
  });

  // Build categories
  MENU.forEach((cat, i) => {
    const wrap = document.createElement("div");
    wrap.className = "menu-category" + (i === 0 ? " active" : "");
    wrap.id = "cat-" + cat.id;

    const title = document.createElement("h3");
    title.className = "menu-cat-title";
    title.textContent = cat.title;
    wrap.appendChild(title);

    if (cat.description) {
      const desc = document.createElement("p");
      desc.className = "menu-cat-desc";
      desc.textContent = cat.description;
      wrap.appendChild(desc);
    }

    const grid = document.createElement("div");
    grid.className = "menu-items";

    cat.items.forEach(item => {
      const el = document.createElement("div");
      el.className = "menu-item";

      const tagHtml = item.tag
        ? `<span class="menu-item-tag ${item.tag}">${
            item.tag === "new" ? "New" :
            item.tag === "veg" ? "Veg" :
            item.tag === "spicy" ? "Spicy" : item.tag
          }</span>`
        : "";

      const popularHtml = item.popular
        ? `<span class="menu-item-popular">★ Popular</span>`
        : "";

      const imgHtml = item.img
        ? `<div class="menu-item-img">${popularHtml}<img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.parentElement.classList.add('img-fallback');this.parentElement.dataset.letter='${item.name.charAt(0)}';this.remove();" /></div>`
        : `<div class="menu-item-img img-fallback" data-letter="${item.name.charAt(0)}">${popularHtml}</div>`;

      el.innerHTML = `
        ${imgHtml}
        <div class="menu-item-body">
          <div class="menu-item-name">${item.name} ${tagHtml}</div>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-item-footer">
            <span class="menu-item-price">KES ${item.price}</span>
          </div>
        </div>
      `;
      grid.appendChild(el);
    });

    wrap.appendChild(grid);
    contentEl.appendChild(wrap);
  });

  // Tab switching
  tabsEl.addEventListener("click", e => {
    const tab = e.target.closest(".menu-tab");
    if (!tab) return;

    document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".menu-category").forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById("cat-" + tab.dataset.target).classList.add("active");
  });
});

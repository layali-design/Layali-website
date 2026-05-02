/* ============================================================
   LAYALI — MENU DATA
   ============================================================
   HOW TO EDIT:

   To change a price:    edit the "price" value (just the number)
   To rename an item:    edit the "name" value
   To remove an item:    delete the entire { } block (including the comma)
   To add an item:       copy an existing { } block and edit
   To add a tag:         set "tag" to "new", "veg", or "spicy"
                         (or leave it as "" for no tag)

   Categories appear as tabs in the order listed below.
   ============================================================ */

const MENU = [
  {
    id: "coffee",
    label: "Coffee",
    title: "From the Bar",
    description: "East African and Yemeni single-origins, roasted weekly in Karen.",
    items: [
      { name: "Espresso",          desc: "A single, slow extraction.",                              price: "250", tag: "" },
      { name: "Macchiato",         desc: "Espresso with a hush of foamed milk.",                    price: "300", tag: "" },
      { name: "Cortado",           desc: "Equal parts espresso and warm milk.",                     price: "380", tag: "" },
      { name: "Flat White",        desc: "Velvet microfoam over a double shot.",                    price: "420", tag: "" },
      { name: "Cappuccino",        desc: "Tradition. Soft foam, fine cocoa.",                       price: "450", tag: "" },
      { name: "Cafe Latte",        desc: "Long, creamy, gentle.",                                   price: "480", tag: "" },
      { name: "Mocha",             desc: "House dark chocolate, espresso, steamed milk.",           price: "520", tag: "" },
      { name: "Pour Over",         desc: "Today's single-origin, brewed by hand. Ask our barista.", price: "550", tag: "" },
      { name: "Cold Brew",         desc: "Steeped 18 hours. Smooth, rounded, bright.",              price: "500", tag: "" },
      { name: "Iced Latte",        desc: "Double shot over ice and cold milk.",                     price: "520", tag: "" },
      { name: "Arabic Coffee",     desc: "Lightly roasted, cardamom, served with dates.",           price: "450", tag: "new" },
      { name: "Turkish Coffee",    desc: "Stone-ground, simmered slowly in a copper cezve.",        price: "450", tag: "" }
    ]
  },
  {
    id: "tea",
    label: "Tea & Specialty",
    title: "Beyond the Bar",
    description: "Loose-leaf teas, signature drinks, and the occasional discovery.",
    items: [
      { name: "Karak Chai",         desc: "Black tea, evaporated milk, cardamom, saffron.",         price: "380", tag: "" },
      { name: "Moroccan Mint Tea",  desc: "Gunpowder green, fresh spearmint, light honey.",         price: "350", tag: "" },
      { name: "Rose Latte",         desc: "Steamed milk, rose, pistachio dust.",                    price: "520", tag: "new" },
      { name: "Saffron Latte",      desc: "Persian saffron, honey, vanilla bean.",                  price: "580", tag: "" },
      { name: "Matcha Latte",       desc: "Ceremonial-grade matcha, oat or whole milk.",            price: "550", tag: "veg" },
      { name: "Spiced Hot Chocolate", desc: "70% dark, cinnamon, cardamom, sea salt.",              price: "500", tag: "" },
      { name: "Hibiscus Cooler",    desc: "Hibiscus, lime, mint, sparkling water.",                 price: "420", tag: "veg" },
      { name: "Mango Lassi",        desc: "Yogurt, alphonso mango, cardamom.",                      price: "450", tag: "" },
      { name: "Fresh Juice",        desc: "Orange, watermelon, or beetroot-ginger.",                price: "400", tag: "veg" },
      { name: "Sparkling Lemonade", desc: "Lemon, mint, basil, tonic.",                             price: "380", tag: "veg" }
    ]
  },
  {
    id: "breakfast",
    label: "Breakfast",
    title: "All Morning",
    description: "Served until 1pm. Eggs from a small farm in Limuru.",
    items: [
      { name: "Avocado on Sourdough", desc: "Smashed avocado, chilli oil, dukkah, lime, soft egg.", price: "950", tag: "veg" },
      { name: "Shakshuka",            desc: "Eggs poached in spiced tomato, feta, herbs, flatbread.", price: "1,150", tag: "" },
      { name: "Eggs Royale",          desc: "Smoked salmon, poached eggs, hollandaise, English muffin.", price: "1,450", tag: "" },
      { name: "Halloumi Plate",       desc: "Grilled halloumi, tomato, olives, za'atar, sourdough.", price: "1,250", tag: "veg" },
      { name: "Layali Breakfast",     desc: "Two eggs, beef bacon, mushroom, tomato, hash, toast.", price: "1,650", tag: "" },
      { name: "Granola Bowl",         desc: "House granola, Greek yogurt, honey, seasonal fruit.",  price: "850", tag: "veg" },
      { name: "Fruit Plate",          desc: "Seasonal Kenyan fruits, mint, lime.",                  price: "750", tag: "veg" },
      { name: "Pancake Stack",        desc: "Buttermilk pancakes, maple, berries, vanilla cream.",  price: "950", tag: "veg" }
    ]
  },
  {
    id: "lunch",
    label: "Lunch & Mains",
    title: "From the Kitchen",
    description: "Served from 12. Halal-certified meats, sourced locally.",
    items: [
      { name: "Beef Burger",        desc: "House grind, cheddar, caramelised onion, brioche, fries.", price: "1,650", tag: "" },
      { name: "Chicken Shawarma Wrap", desc: "Spit-roasted chicken, garlic toum, pickles, sumac.", price: "1,250", tag: "" },
      { name: "Lamb Kofta Plate",   desc: "Charcoal-grilled kofta, hummus, salata, flatbread.",     price: "1,750", tag: "spicy" },
      { name: "Grilled Chicken Caesar", desc: "Romaine, parmesan, sourdough croutons, anchovy.",    price: "1,350", tag: "" },
      { name: "Fattoush Salad",     desc: "Crisp greens, sumac, pomegranate, feta, fried khubz.",   price: "1,150", tag: "veg" },
      { name: "Spaghetti Pomodoro", desc: "San Marzano, basil, parmesan, olive oil.",                price: "1,250", tag: "veg" },
      { name: "Truffle Mushroom Pasta", desc: "Tagliatelle, wild mushroom, truffle, parmesan.",     price: "1,650", tag: "veg" },
      { name: "Margherita Pizza",   desc: "Wood-fired, San Marzano, fior di latte, basil.",         price: "1,350", tag: "veg" },
      { name: "Spicy Chicken Pizza", desc: "Chicken, jalapeño, smoked mozzarella, harissa.",        price: "1,550", tag: "spicy" },
      { name: "Grilled Salmon",     desc: "Norwegian salmon, lemon couscous, charred greens.",      price: "2,250", tag: "" }
    ]
  },
  {
    id: "pastry",
    label: "Pastry & Bakery",
    title: "From the Counter",
    description: "Baked from 5am, every day. Whole cakes available — please order ahead.",
    items: [
      { name: "Almond Croissant",   desc: "Twice-baked, frangipane, slivered almonds.",             price: "350", tag: "" },
      { name: "Pain au Chocolat",   desc: "72-hour laminated dough, dark chocolate.",               price: "320", tag: "" },
      { name: "Pistachio Knafeh",   desc: "Crisp pastry, sweet cheese, pistachio, rosewater syrup.", price: "650", tag: "new" },
      { name: "Date & Walnut Cake", desc: "Sticky toffee, Medjool dates, candied walnut.",          price: "550", tag: "" },
      { name: "Basbousa",           desc: "Semolina, coconut, orange blossom, almond.",             price: "450", tag: "veg" },
      { name: "Lotus Cheesecake",   desc: "Baked vanilla cheesecake, Lotus crumb, caramel.",        price: "650", tag: "veg" },
      { name: "Pistachio Brownie",  desc: "Dark chocolate, Aleppo pistachio, sea salt.",            price: "450", tag: "" },
      { name: "Cinnamon Bun",       desc: "Soft brioche, cinnamon sugar, cream cheese glaze.",      price: "380", tag: "" },
      { name: "Cardamom Bun",       desc: "Swedish-style, cardamom sugar, pearl sugar.",            price: "380", tag: "" },
      { name: "Sourdough Loaf",     desc: "Naturally leavened, bake from 11am. Whole loaf.",        price: "550", tag: "veg" }
    ]
  }
];

/* ============================================================
   MENU RENDERER — DO NOT EDIT BELOW
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

      el.innerHTML = `
        <div class="menu-item-info">
          <div class="menu-item-name">${item.name} ${tagHtml}</div>
          <div class="menu-item-desc">${item.desc}</div>
        </div>
        <div class="menu-item-price">${item.price}</div>
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

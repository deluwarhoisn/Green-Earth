 
    const categoryList = document.getElementById("categoryList");
    const output = document.getElementById("output");

    async function loadCategories() {
      try {
        const res = await fetch("https://openapi.programming-hero.com/api/categories");
        const data = await res.json();

        console.log("All Categories:", data);
        const categories = data.categories || [];

        categories.forEach(cat => {
          const btn = document.createElement("button");
          btn.innerText = cat.category || cat.name || "Unnamed";
          btn.className = "px-3 py-2 bg-green-200 hover:bg-green-300 rounded-lg text-left";
          btn.addEventListener("click", () => showCategory(cat));
          categoryList.appendChild(btn);
        });

      } catch (error) {
        console.error("Category load error:", error);
        categoryList.innerHTML = "<p class='text-red-500'>❌ Failed to load categories</p>";
      }
    }
    function showCategory(cat) {
      output.innerText = JSON.stringify(cat, null, 2);
    }
    loadCategories();
  

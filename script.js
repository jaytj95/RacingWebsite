const md = window.markdownit();
const contentDiv = document.getElementById('content');

const pages = {
  home: `# Welcome to the Markdown Website!\nThis is the **home page**.`,
  toc: `
# Table of Contents
1. [Page 1](#page1)
2. [Page 2](#page2)
3. [Page 3](#page3)
  `
};

async function loadPage(page) {
  if (pages[page]) {
    contentDiv.innerHTML = md.render(pages[page]);
  } else {
    try {
      const response = await fetch(`markdown/${page}.md`);
      const text = await response.text();
      contentDiv.innerHTML = md.render(text);
    } catch (error) {
      contentDiv.innerHTML = "<p>Page not found.</p>";
    }
  }
}

// Load the home page initially
loadPage('home');

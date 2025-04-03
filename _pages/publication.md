---
layout: default
permalink: /publications/
title: "Publications"
author_profile: true
recent_years: [2025, 2024, 2023]
earliest_year: 2022
---

# My Publications



<div style="background-color: #f0f4ff; border-left: 4px solid #007acc; padding: 1rem 1.2rem; margin-bottom: 2rem; border-radius: 6px;">
  <h2 style="margin: 0; font-size: 1.1rem; color: #003366;">
    📌 The list below may not be up to date — please check
    <a href="https://scholar.google.com/citations?user=3T-SILsAAAAJ" target="_blank" style="color: #007acc; text-decoration: underline;">
      Google Scholar
    </a>
    for my latest publications.
  </h2>
</div>


<div class="publications">
  {%- for y in page.recent_years %}
    <h2 class="pub-year" id="y{{ y }}">{{ y }}</h2>
    {% bibliography -q @*[year={{ y }}]* %}
  {%- endfor %}

  <h2 class="pub-year" id="ybefore">Earlier</h2>
  {% bibliography -q @*[year<= {{ page.earliest_year }}]* %}
</div>




<div class="year-nav">
  <a href="#y2025" class="year-link active">2025</a>
  <a href="#y2024" class="year-link">2024</a>
  <a href="#y2023" class="year-link">2023</a>
  <a href="#ybefore" class="year-link">Earlier</a>
</div>

<style>
    .year-nav {
      position: fixed;
      top: 200px;
      right: 30px;
      display: flex;
      flex-direction: column;
      background: #f8f9fa;
      border-radius: 8px;
      padding: 0.5rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      z-index: 999;
    }
    
    .year-link {
      text-decoration: none;
      color: #007bff;
      padding: 0.4rem 0.8rem;
      margin: 3px 0;
      border-radius: 6px;
      text-align: center;
      font-size: 1rem;
    }
    
    .year-link:hover {
      background: #e6f0ff;
    }
    
    .year-link.active {
      background: #007bff;
      color: white;
      font-weight: bold;
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.year-link');
  const sections = Array.from(links).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  });

  window.addEventListener('scroll', () => {
    let current = sections[0];
    for (let section of sections) {
      const top = section.getBoundingClientRect().top;
      if (top <= 100) {
        current = section;
      }
    }

    links.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.year-link[href="#${current.id}"]`);
    if (activeLink) activeLink.classList.add('active');
  });
});
</script>


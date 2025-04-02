---
layout: default
permalink: /publications/
title: "Publications"
author_profile: true
---

# My Publications

<div style="background-color: #f0f4ff; border-left: 4px solid #007acc; padding: 1rem 1.2rem; margin-bottom: 2rem; border-radius: 6px;">
  <h1 style="margin: 0; font-size: 1.1rem; color: #003366;">
    📌 The list below may not be up to date — please check
    <a href="https://scholar.google.com/citations?user=3T-SILsAAAAJ" target="_blank" style="color: #007acc; text-decoration: underline;">
      Google Scholar
    </a>
    for my latest publications.
  </h1>
</div>

<h2 class="pub-year" id="y2025">2025</h2>
- Long, K., **<u>Sheng, Z.</u>**, Shi, H., Li, X., Chen, S., Ahn, S. (2025). A physics enhanced residual learning (PERL) framework for vehicle trajectory prediction. *Communications in Transportation Research*.

<h2 class="pub-year" id="y2024">2024</h2>
- **<u>Sheng, Z.</u>**, Huang, Z., Chen, S. (2024). [Ego‐planning‐guided multi‐graph convolutional network for heterogeneous agent trajectory prediction](https://onlinelibrary.wiley.com/doi/full/10.1111/mice.13301). *Computer‐Aided Civil and Infrastructure Engineering*.
- **<u>Sheng, Z.</u>**, Huang, Z., Chen, S. (2024). [Kinematics-aware multigraph attention network with residual learning for heterogeneous trajectory prediction](https://ieeexplore.ieee.org/abstract/document/10586904). *Journal of Intelligent and Connected Vehicles*.
- Huang, Z., Chen, S., Pian, Y., **<u>Sheng, Z.</u>**, Ahn, S., Noyce, D. A. (2024). [Toward C-V2X Enabled Connected Transportation System: RSU-Based Cooperative Localization Framework for Autonomous Vehicles](https://ieeexplore.ieee.org/abstract/document/10556814). *IEEE Transactions on Intelligent Transportation Systems*.
- Huang, Z., **<u>Sheng, Z.</u>**, Ma, C., Chen, S. (2024). [Human as AI mentor: Enhanced human-in-the-loop reinforcement learning for safe and efficient autonomous driving](https://www.sciencedirect.com/science/article/pii/S2772424724000106). *Communications in Transportation Research*.
- Liu, C., **<u>Sheng, Z.</u>**, Li, P., Chen, S., Luo, X., Ran, B. (2024). [A distributed deep reinforcement learning-based longitudinal control strategy for connected automated vehicles combining attention mechanism](https://www.tandfonline.com/doi/abs/10.1080/19427867.2024.2335084). *Transportation Letters*.

<h2 class="pub-year" id="ybefore">2023 and Earlier</h2>
- **<u>Sheng, Z.</u>**, Liu, L., Xue, S., Zhao, D., Jiang, M., Li, D. (2023). [A cooperation-aware lane change method for automated vehicles](https://ieeexplore.ieee.org/abstract/document/9971784). *IEEE Transactions on Intelligent Transportation Systems*. <span class="show_paper_citations" data='3T-SILsAAAAJ:qUcmZB5y_30C'><i class="fab fa-google-scholar"></i><span class="citation-count">0</span></span>
- Liu, C., **<u>Sheng, Z.</u>**, Chen, S., Shi, H., Ran, B. (2023). [Longitudinal control of connected and automated vehicles among signalized intersections in mixed traffic flow with deep reinforcement learning approach](https://www.sciencedirect.com/science/article/pii/S0378437123007446). *Physica A: Statistical Mechanics and its Applications*.
- Guan, Q., **<u>Sheng, Z.</u>**, Xue, S. (2023). [HRPose: Real-time high-resolution 6D pose estimation network using knowledge distillation](https://ieeexplore.ieee.org/abstract/document/10038797). *Chinese Journal of Electronics*.
- **<u>Sheng, Z.</u>**, Xu, Y., Xue, S., Li, D. (2022). [Graph-based spatial-temporal convolutional network for vehicle trajectory prediction in autonomous driving](https://ieeexplore.ieee.org/abstract/document/9737058). *IEEE Transactions on Intelligent Transportation Systems*. <span class="show_paper_citations" data='3T-SILsAAAAJ:aqlVkmm33-oC'><i class="fab fa-google-scholar"></i><span class="citation-count">0</span></span>
- **<u>Sheng, Z.</u>**, Xue, S., Xu, Y., Li, D. (2020). [Real-time queue length estimation with trajectory reconstruction using surveillance data](https://ieeexplore.ieee.org/abstract/document/9305313). In: *2020 16th International Conference on Control, Automation, Robotics and Vision (ICARCV)*.

<div class="year-nav">
  <a href="#y2025" class="year-link active">2025</a>
  <a href="#y2024" class="year-link">2024</a>
  <a href="#ybefore" class="year-link">Earlier</a>
</div>

<style>
.year-nav {
  position: fixed;
  top: 150px;
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
  font-size: 0.95rem;
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


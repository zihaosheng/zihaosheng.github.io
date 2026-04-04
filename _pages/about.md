---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👨‍🎓 About Me  

I am a PhD candidate at the <img src="images/logo/uw-madison.png" draggable="false" width="15"/> [University of Wisconsin-Madison](https://www.wisc.edu/), advised by [Prof. Sikai Chen](https://scholar.google.com/citations?user=DPN2wc4AAAAJ) in the <img src="images/logo/sky-lab.jpg" draggable="false" width="28"/> [Sky-Lab](https://sky-lab-uw.github.io). 
I also work as a research intern at <img src="images/logo/bosch.png" draggable="false" width="26"/> [Bosch Research](https://www.bosch.com/research/). 
I received my M.Eng. from <img src="images/logo/sjtu.png" draggable="false" width="25"/> [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/) and B.Eng. from <img src="images/logo/xjtu.png" draggable="false" width="25"/> [Xi’an Jiaotong University](http://en.xjtu.edu.cn/). 

My research centers on leveraging foundation models and reinforcement learning to enhance autonomous driving performance. I am currently interested in multimodal large language models and driving world models for safe autonomous driving.

[//]: # (<div style="background-color: #f0f4ff; border-left: 4px solid #007acc; padding: 1rem 1.2rem; margin-bottom: 2rem; border-radius: 6px;">)

[//]: # (  <p style="margin: 0; font-size: 1.05rem; color: #003366; font-weight: 400;">)

[//]: # (    🚀 I am currently seeking <strong>Spring/Summer 2026 internship opportunities</strong> in AI/ML and Autonomous Driving.)

[//]: # (    If you are aware of relevant opportunities, please feel free to <strong>contact me</strong>.)

[//]: # (  </p>)

[//]: # (</div>)


# 🔥 News
- *2025.11*: Starting my research internship at **Bosch Research** on Vision-Language-Action (VLA) models for autonomous driving
- *2025.06*: I will attend **CVPR 2025** to present our latest work [Talk2Traffic](https://zihaosheng.github.io/Talk2Traffic/) 🎵
- *2025.05*: Honored to be selected as one of four UW–Madison nominees for the **Google PhD Fellowship** 🙌
- *2025.03*: We are invited by a leading autonomous driving company to give a talk on our recent project [VLM-RL](https://www.huang-zilin.com/VLM-RL-website/) 🚗✨

# 📝 Selected Publications <a href="{{ 'publications' | relative_url }}">view all</a>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Preprint</div>
        <img src='images/explorevla.gif' alt="sym" width="100%" draggable="false">
      </div>
  </div>
  <div class='paper-box-text' markdown="1">
  [ExploreVLA: Dense World Modeling and Exploration for End-to-End Autonomous Driving](https://zihaosheng.github.io/ExploreVLA)

  **<u>Zihao Sheng</u>**, Xin Ye, Jingru Luo, Sikai Chen, Liu Ren

  Preprint, 2026

  <a href="https://zihaosheng.github.io/ExploreVLA/" class="btn" role="button">Webpage</a>
  <a href="https://arxiv.org/" class="btn" role="button">PDF</a>
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">CHAIN</div>
        <img src='https://zihaosheng.github.io/SafePLUG/static/images/fig1.svg' alt="sym" width="100%" draggable="false">
      </div>
  </div>
  <div class='paper-box-text' markdown="1">
  [SafePLUG: Empowering Multimodal LLMs with Pixel-Level Insight and Temporal Grounding for Traffic Accident Understanding](https://zihaosheng.github.io/SafePLUG/)

  **<u>Zihao Sheng</u>**, Zilin Huang, Yansong Qu, Jiancong Chen, Yuhao Luo, Yen-Jung Chen, Yue Leng, Sikai Chen
  
  CHAIN, 2026
  
  <a href="https://zihaosheng.github.io/SafePLUG/" class="btn" role="button">Webpage</a>
  <a href="https://arxiv.org/abs/2508.06763" class="btn" role="button">PDF</a>
  <a href="https://github.com/zihaosheng/SafePLUG" class="btn" role="button">Code</a>
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">TRC</div>
        <img src='https://zihaosheng.github.io/CurricuVLM/static/images/case3-trained-combined.gif' alt="sym" width="100%" draggable="false">
      </div>
  </div>
  <div class='paper-box-text' markdown="1">
  [CurricuVLM: Towards Safe Autonomous Driving via Personalized Safety-Critical Curriculum Learning with Vision-Language Models](https://zihaosheng.github.io/CurricuVLM/)

  **<u>Zihao Sheng</u>**, Zilin Huang, Yansong Qu, Yue Leng, Sruthi Bhavanam, Sikai Chen

  Transportation Research Part C: Emerging Technologies, 2026

  <a href="https://zihaosheng.github.io/CurricuVLM/" class="btn" role="button">Webpage</a> 
  <a href="https://arxiv.org/abs/2502.15119" class="btn" role="button">PDF</a> 
  <a href="https://github.com/zihaosheng/CurricuVLM" class="btn" role="button">Code</a>
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">CVPRW</div>
        <img src='https://zihaosheng.github.io/Talk2Traffic/static/images/fig2.svg' alt="sym" width="100%" draggable="false">
      </div>
  </div>
  <div class='paper-box-text' markdown="1">
  [Talk2Traffic: Interactive and Editable Traffic Scenario Generation for Autonomous Driving with Multimodal Large Language Model](https://zihaosheng.github.io/Talk2Traffic/)

  **<u>Zihao Sheng</u>**, Zilin Huang, Yansong Qu, Yue Leng, Sikai Chen
  
  **CVPR** 2025 [WDFM-AD](https://wdfm-ad.github.io/)
  
  <a href="https://zihaosheng.github.io/Talk2Traffic/" class="btn" role="button">Webpage</a>
  <a href="https://openaccess.thecvf.com/content/CVPR2025W/WDFM-AD/html/Sheng_Talk2Traffic_Interactive_and_Editable_Traffic_Scenario_Generation_for_Autonomous_Driving_CVPRW_2025_paper.html" class="btn" role="button">PDF</a>
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">TRC</div>
        <img src='https://raw.githubusercontent.com/zilin-huang/VLM-RL-website/master/static/videos/CLIP/CLIP_town2_normal/CLIP_town2_normal_s6.gif' alt="sym" width="100%" draggable="false">
      </div>
  </div>
  <div class='paper-box-text' markdown="1">
  [VLM-RL: A Unified Vision Language Models and Reinforcement Learning Framework for Safe Autonomous Driving](https://www.huang-zilin.com/VLM-RL-website/)

  Zilin Huang\*, **<u>Zihao Sheng</u>**\*, Yansong Qu\*, Junwei You, Sikai Chen

  Transportation Research Part C: Emerging Technologies, 2025

  <a href="https://www.huang-zilin.com/VLM-RL-website/" class="btn" role="button">Webpage</a> 
  <a href="https://arxiv.org/abs/2412.15544" class="btn" role="button">PDF</a> 
  <a href="https://github.com/zihaosheng/VLM-RL" class="btn" role="button">Code</a> 
  [![](https://img.shields.io/github/stars/zihaosheng/VLM-RL?style=social&label=Stars)](https://github.com/zihaosheng/VLM-RL)
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">JICV</div>
        <img src='https://sky-lab-uw.github.io/assets/teaser/2025_huang_skydrive.gif' alt="sym" width="100%" draggable="false">
      </div>
  </div>
  <div class='paper-box-text' markdown="1">
  [Sky-Drive: A Distributed Multi-Agent Simulation Platform for Human-AI Collaborative and Socially-Aware Future Transportation](https://sky-lab-uw.github.io/Sky-Drive-website/)

  Zilin Huang\*, **<u>Zihao Sheng</u>**\*, Zhengyang Wan\*, Yansong Qu, Yuhao Luo, Boyue Wang, Pei Li, Yen-Jung Chen, Jiancong Chen, Keke Long, Jiayi Meng, Yue Leng, Sikai Chen

  Journal of Intelligent and Connected Vehicles, 2025

  <a href="https://sky-lab-uw.github.io/Sky-Drive-website/" class="btn" role="button">Webpage</a>
  <a href="https://arxiv.org/abs/2504.18010" class="btn" role="button">PDF</a>
  <a href="https://github.com/BillWan-zzzyyy/Sky-Drive" class="btn" role="button">Code</a>
  </div>
</div>


# 🎖 Honors and Awards
- 2025 Google PhD Fellowship Nominee, University of Wisconsin–Madison
- 2023 Student Research Grants Competition (SRGC) Award, University of Wisconsin--Madison
- 2023 Best Presentation Award, 3rd Annual Conference of Next-Generation Transportation Systems
- 2022 [Best Dissertation Award](http://sh-aa.cn/News/info.aspx?itemid=154), Shanghai Association of Automation (SAA)
- 2022 Outstanding Master’s Graduate Award, Shanghai Jiao Tong University

# 📖 Educations
- *2023.01 -- Present*, Ph.D., Univerity of Wisconsin-Madison, WI, USA 
- *2019.09 -- 2022.03*, M.Eng., Shanghai Jiao Tong University, China
- *2015.09 -- 2019.06*, B.Eng., Xi'an Jiaotong University, China

# 💡 Services
- Reviewer for Conferences (ICCV, AAAI, ITSC, SMC, TRB) and Journals (RA-L, TR-C, T-ITS, T-VT, T-IV, T-MC, AAP)
- *Spring 2026*, TA, CEE 370 Transportation Engineering, University of Wisconsin-Madison
- *Spring 2025*, TA, CEE 370 Transportation Engineering, University of Wisconsin-Madison
- *Spring 2024*, TA, CEE 370 Transportation Engineering, University of Wisconsin-Madison
- *Fall 2020*, TA, Digital Signal Processing, Shanghai Jiao Tong University

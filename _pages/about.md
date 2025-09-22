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

Hi! I am currently a Ph.D. student in Transportation Engineering at the [University of Wisconsin-Madison](https://www.wisc.edu/), advised by [Prof. Sikai Chen](https://sky-lab-uw.github.io/). Before that, I received my master's from [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/) and bachelor's from [Xi’an Jiaotong University](http://en.xjtu.edu.cn/).  

My research centers on leveraging **foundation models** and **reinforcement learning** to enhance autonomous driving performance. I am currently interested in **multimodal large language models** and **driving world models** for safe autonomous driving.


# 🔥 News
- *2025.06*: I will attend **CVPR 2025** to present on our latest work [Talk2Traffic](https://zihaosheng.github.io/Talk2Traffic/)&nbsp;🎉🎉
- *2025.05*: Honored to be selected as one of four UW–Madison nominees for the **Google PhD Fellowship** 🙌
- *2025.03*: We are invited by [Li Auto Autonomous Driving Team](https://www.lixiang.com/en#li) to give a talk on our recent project [VLM-RL](https://www.huang-zilin.com/VLM-RL-website/)&nbsp;🎉🎉

# 📝 Selected Publications <a href="{{ 'publications' | relative_url }}">view all</a>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Preprint</div>
        <img src='images/safeplug.gif' alt="sym" width="100%">
      </div>
    </div>
  <div class='paper-box-text' markdown="1">
  [SafePLUG: Empowering Multimodal LLMs with Pixel-Level Insight and Temporal Grounding for Traffic Accident Understanding](https://arxiv.org/abs/2508.06763)

**<u>Zihao Sheng</u>**, Zilin Huang, Yen-Jung Chen, Yansong Qu, Yuhao Luo, Yue Leng, Sikai Chen

Preprint, 2025

<a href="https://zihaosheng.github.io/SafePLUG/" class="btn" role="button">Webpage</a>
<a href="https://arxiv.org/abs/2508.06763" class="btn" role="button">PDF</a>
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">CVPRW</div>
        <img src='https://raw.githubusercontent.com/zihaosheng/Talk2Traffic/html/static/images/case2.gif' alt="sym" width="100%">
      </div>
    </div>
  <div class='paper-box-text' markdown="1">
  [Talk2Traffic: Interactive and Editable Traffic Scenario Generation for Autonomous Driving with Multimodal Large Language Model](https://openaccess.thecvf.com/content/CVPR2025W/WDFM-AD/html/Sheng_Talk2Traffic_Interactive_and_Editable_Traffic_Scenario_Generation_for_Autonomous_Driving_CVPRW_2025_paper.html)

**<u>Zihao Sheng</u>**, Zilin Huang, Yansong Qu, Yue Leng, Sikai Chen

**CVPR** 2025 [WDFM-AD](https://wdfm-ad.github.io/)

<a href="https://zihaosheng.github.io/Talk2Traffic/" class="btn" role="button">Webpage</a>
<a href="https://openaccess.thecvf.com/content/CVPR2025W/WDFM-AD/html/Sheng_Talk2Traffic_Interactive_and_Editable_Traffic_Scenario_Generation_for_Autonomous_Driving_CVPRW_2025_paper.html" class="btn" role="button">PDF</a>
  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Preprint</div>
        <img src='https://zihaosheng.github.io/CurricuVLM/static/images/case3-trained-combined.gif' alt="sym" width="100%">
      </div>
    </div>
  <div class='paper-box-text' markdown="1">
  [CurricuVLM: Towards Safe Autonomous Driving via Personalized Safety-Critical Curriculum Learning with Vision-Language Models](https://arxiv.org/abs/2502.15119)

  **<u>Zihao Sheng</u>**\*, Zilin Huang\*, Yansong Qu, Yue Leng, Sruthi Bhavanam, Sikai Chen

  Preprint, 2025

  <a href="https://zihaosheng.github.io/CurricuVLM/" class="btn" role="button">Webpage</a> 
  <a href="https://arxiv.org/abs/2502.15119" class="btn" role="button">PDF</a> 
  <a href="https://github.com/zihaosheng/CurricuVLM" class="btn" role="button">Code</a>
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">TR-C</div>
        <img src='https://raw.githubusercontent.com/zilin-huang/VLM-RL-website/master/static/videos/CLIP/CLIP_town2_normal/CLIP_town2_normal_s6.gif' alt="sym" width="100%">
      </div>
    </div>
  <div class='paper-box-text' markdown="1">
  [VLM-RL: A Unified Vision Language Models and Reinforcement Learning Framework for Safe Autonomous Driving](https://arxiv.org/abs/2412.15544)

  Zilin Huang\*, **<u>Zihao Sheng</u>**\*, Yansong Qu\*, Junwei You, Sikai Chen

  Transportation Research Part C: Emerging Technologies, 2025

  <a href="https://www.huang-zilin.com/VLM-RL-website/" class="btn" role="button">Webpage</a> 
  <a href="https://www.sciencedirect.com/science/article/abs/pii/S0968090X25002669" class="btn" role="button">PDF</a> 
  <a href="https://github.com/zihaosheng/VLM-RL" class="btn" role="button">Code</a> 
  [![](https://img.shields.io/github/stars/zihaosheng/VLM-RL?style=social&label=Stars)](https://github.com/zihaosheng/VLM-RL)
  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">COMMTR</div>
        <img src='https://zihaosheng.github.io/traffic-expertise-RL/static/images/demo.gif' alt="sym" width="100%">
      </div>
    </div>
  <div class='paper-box-text' markdown="1">
  [Traffic expertise meets residual RL: Knowledge-informed model-based residual reinforcement learning for CAV trajectory control](https://www.sciencedirect.com/science/article/pii/S2772424724000258)

  **<u>Zihao Sheng</u>**, Zilin Huang, Sikai Chen

  Communications in Transportation Research, 2024

  <a href="https://zihaosheng.github.io/traffic-expertise-RL/" class="btn" role="button">Webpage</a> 
  <a href="https://www.sciencedirect.com/science/article/pii/S2772424724000258" class="btn" role="button">PDF</a> 
  <a href="https://github.com/zihaosheng/traffic-expertise-RL" class="btn" role="button">Code</a>
  </div>
</div>


# 🎖 Honors and Awards
- 2025 Google PhD Fellowship – University Nominee
- 2023 Student Research Grants Competition (SRGC) Award of University of Wisconsin-Madison
- 2022 [Best Dissertation Award](http://sh-aa.cn/News/info.aspx?itemid=154) of Shanghai Association of Automation (SAA)
- 2022 Outstanding Master Graduate of Shanghai Jiao Tong University

# 📖 Educations
- *2023.01 - Present*, PhD, Univerity of Wisconsin-Madison, WI, USA 
- *2019.09 - 2022.03*, MS, Shanghai Jiao Tong University, China
- *2015.09 - 2019.06*, BS, Xi'an Jiaotong University, China

# 💡 Services
- Reviewer for Conferences (ICCV, AAAI, ITSC, SMC, TRB) and Journals (RA-L, TR-C, T-ITS, T-VT, T-IV, T-MC, AAP).
- *Spring 2025*, TA, CEE 370 Transportation Engineering, University of Wisconsin-Madison
- *Spring 2024*, TA, CEE 370 Transportation Engineering, University of Wisconsin-Madison
- *Fall 2020*, TA, Digital Signal Processing, Shanghai Jiao Tong University

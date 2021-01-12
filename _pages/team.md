---
layout: archive
title: "Research Team"
permalink: /team/
author_profile: true
---

We are always looking for talented and enthusiastic masters, PhD students and post-doctoral researchers. <br> Please contact Prof. Rocha (<a href="mailto:{{ author.email }}"><span style="color:gray">email</span>) for inquiries.
<br>
<hr-bold>
<h2>Principal Investigator</h2>
<hr><br>
<div class="grid">
<div class="wrapper">
  {% for post in site.team %}
    {% if post.tags contains 'Myself' %}
      {% include archive-single-proj.html type="grid" %}
    {% endif %}
  {% endfor %}
</div>
</div>


# <hr-bold>
# <h2>Alumni</h2>
# <hr><br>
---
layout: archive
title: "Software"
permalink: /software/
author_profile: true
---
{% include base_path %}

<ul>
{% for post in site.software reversed %}
  {% include archive-single-software.html %}
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}

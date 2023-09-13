---
layout: archive
title: "Software"
permalink: /software/
author_profile: true
---
{% include base_path %}

<ul>
{% for post in site.software reversed %}
	Test string
  {% include archive-single-software.html %}
  {% include archive-single-pub.html %}
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}


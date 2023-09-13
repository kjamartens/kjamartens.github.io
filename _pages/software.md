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
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
	<!---
	<h2 id="y{{post.date | date: "%Y"}}"><span style="color:gray">{{ currentdate }}</span></h2>
	-->
    <ul style="padding-inline-start: 0px;">
    {% assign date = currentdate %}
  {% endif %}
  {% include archive-single-software.html %}
  {% if forloop.last %}</ul>{% endif %}

{% endfor %}


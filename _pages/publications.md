---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
{% include base_path %}

You can find the complete publication list on <a href="https://scholar.google.com/citations?user=puEEfn8AAAAJ&hl=en">
<u><span style="color:gray">my Google Scholar profile</span></u></a>.


<ul>
{% for post in site.publications reversed %}

  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
	<!---
	<h2 id="y{{post.date | date: "%Y"}}"><span style="color:gray">{{ currentdate }}</span></h2>
	-->
    <ul style="padding-inline-start: 0px;">
    {% assign date = currentdate %}
  {% endif %}
  {% if post.authors contains 'Martens' %}
    {% include archive-single-pub.html %}
  {% endif %}
  {% if post.authors contains 'Martens*' %}
    {% include archive-single-pub.html %}
  {% endif %}
  {% if forloop.last %}</ul>{% endif %}

{% endfor %}


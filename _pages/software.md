---
layout: archive
title: "Software"
permalink: /software/
author_profile: true
---
{% include base_path %}

True
<ul>
{% for post in site.software reversed %}
  {% include archive-single-software.html %}
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}

False (software-pub mismash)
<ul>
{% for post in site.publications reversed %}
  {% include archive-single-software.html %}
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}

False2 (pub-software mismash)
<ul>
{% for post in site.software reversed %}
  {% include archive-single-pub.html %}
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}


Control (pubs)
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

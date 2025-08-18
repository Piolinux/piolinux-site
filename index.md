
---
layout: default
title: "Início - Piolinux"
---

<main>
  <h>Últimas postagens</h>

  <section>
    {% if site.posts.size > 0 %}
      <ul>
        {% for post in site.posts %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <small> - {{ post.date | date: "%d/%m/%Y" }}</small>
          </li>
        {% endfor %}
      </ul>
    {% else %}
      <p>Não há posts publicados ainda.</p>
    {% endif %}
  </section>
</main>

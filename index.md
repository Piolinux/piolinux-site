
<!--
    Removida a tag <main> e a tag <h>
    para evitar duplicações e erros de HTML.
-->

<section>
    <h2>Últimas postagens</h2>

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

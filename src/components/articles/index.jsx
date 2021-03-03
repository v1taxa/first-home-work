import React from "react"
import "../../styles/styles.scss"
import {tag} from "../../elements/tag"
import {likes} from "../../elements/likesCounter"
import {comments} from "../../elements/commentsCounter"

export function Article() {
  return (
    <section className="article">
      <header>
        <div className="poster">
          <img
            src="https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png"
            alt=""
          />
        </div>
        <div className="tags">
          <div id="tag">
            {tag}
          </div>
          <div>
            <span className="tag">Books</span>
          </div>
        </div>
      </header>
      <article>
        <h1>American writer of bad cowboy stories arrived in</h1>
        <p>
          Volunteering to help people in need combined with travelling to
          faraway places is a new
        </p>
      </article>
      <footer>
        <span>15.07.2017</span>
        <div className="controls">
          {comments}
          {likes}
        </div>
      </footer>
    </section>
  );
}

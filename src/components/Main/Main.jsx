import style from "./Main.module.css";
import Card from "../Card/Card";
import { posts } from "../../../data/posts";

export default function Main() {
  const publishedPosts = posts.filter((post) => post.published);

  return (
    <main>
      <div className={style.container}>
        <div className={style.row}>
          {publishedPosts.map(({ id, title, content, tags, image }) => (
            <div key={id} className={"col-6"}>
              <Card title={title} content={content} tags={tags} image={image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

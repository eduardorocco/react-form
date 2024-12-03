import style from './Main.module.css'
import Card from "../Card/Card"
import { posts } from '../../../data/posts'

export default function Main() {
    return (
        <main>
            <div className="container">
                <div className={style.row}>
                    {posts.map((post) => (
                        post.published && (
                            <div key={post.id} className="col-6">
                                <Card title={post.title} content={post.content} tags={post.tags} image={post.image} />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </main>
    )
}
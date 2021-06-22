import s from './MyPosts.module.css';
import Post from './Posts/Post'

const MyPosts = () => {

    return (
        <div>
            My posts
            <div>
               <textarea></textarea>
                <button className={'btn btn-dark'}>Add post</button>
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;
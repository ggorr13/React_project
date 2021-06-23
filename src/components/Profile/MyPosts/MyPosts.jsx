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
            <Post like={15} message={'Hi how are you'}/>
            <Post like={25} message={'I am fine'}/>
            <Post like={35} message={'How old are you'}/>
            <Post like={77} message={'Thank you'}/>
        </div>
    )
}

export default MyPosts;
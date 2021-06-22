import s from './Post.module.css';

const Post = () => {

    return (
        <div className={'posts'}>
            <div className={'nav-item'}>
                <img src={'https://zoomd.com/wp-content/uploads/2020/09/man-avatar-profile-vector-21372076.jpg'}/>
                Post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
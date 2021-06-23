import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={'posts'}>
            <div className={'nav-item'}>
                <img src={'https://zoomd.com/wp-content/uploads/2020/09/man-avatar-profile-vector-21372076.jpg'}/>
                Post {props.message}
                <div>
                    <span> Like {props.like}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
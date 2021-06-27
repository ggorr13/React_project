import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={'posts'}>
            <div className={'nav-item'}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU'}/>
                 {props.message}
                <div>
                    <span className={'m-3'}> Like {props.like}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
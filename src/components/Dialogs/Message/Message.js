import s from '../Dialogs.module.css';
const Message = (props) => {
    return  <div className={'navbar-brand mt-5'} key={props.key}>{props.message}</div>
}

export default Message;

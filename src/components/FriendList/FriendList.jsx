import css from "./FriendList.module.css";

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
{/* {friends.map(({avatar, name, isOnline, id}) => {
    return (
        <li key={id} className={css.item}>
  <span className={`${css.status} ${isOnline ? css.isOnline : css.notOnline}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>)
})} */}

{friends.map(({avatar, name, isOnline, id}) => {
    return (
        <FriendListItem 
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
        )
})}
</ul>);
}

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
<li className={css.item}>
  <span className={`${css.status} ${isOnline ? css.isOnline : css.notOnline}`}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>);
}
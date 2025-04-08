import { use } from "react";
import Friend from "./Friend";

export default function Friends ({friendsPromise}) {
    const friends = use(friendsPromise);
    console.log(friends);

    return (
        <div className="card">
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend> )
            }
        </div>
    )
}
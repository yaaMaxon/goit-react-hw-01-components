import { Profile } from "components/Profile";
import { Statistics } from "components/Statistics";
import { FriendList } from "components/FriendList";
import { TransactionHistory } from "components/TransactionHistory";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json"


export const App = (props) => {
  return (
    <div>
      <Profile
  username= "Jacques Gluke"
  tag= "jgluke"
  location= "Ocho Rios, Jamaica"
  avatar= "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
  followers= {5603}
  views= {4827}
  likes= {1308}
      />
<Statistics title="Upload stats" stats={data}/>
<FriendList friends={friends}/>
<TransactionHistory items={transactions}/>
    </div>
  );
};

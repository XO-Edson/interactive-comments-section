import { useState } from "react";
import { ProfileComment } from "./ProfileComment";
import AmyRobson from "./images/avatars/image-amyrobson.webp";
import MaxBlagun from "./images/avatars/image-maxblagun.webp";
import RamsesMiron from "./images/avatars/image-ramsesmiron.webp";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";
import { CommentBox } from "./CommentBox";
import { Replies } from "./Replies";
import { useSelector } from "react-redux";

function App() {
  const feed = useSelector((state) => state.feedPosts.feed);

  const [replies, setReplies] = useState([
    {
      parentId: 1,
      id: 3,
      admin: false,
      username: "ramsesmiron",
      profilePicture: RamsesMiron,
      date: "1 week ago",
      likes: 4,
      reply: false,
      comment:
        "@maxblagun If you're still new.I'd recommend focussing on the fundamentals oh HTML,CSS and JS before considering React.It's very tempting to jump ahead but lay a solid foundation first.",
    },
    {
      parentId: 2,
      id: 4,
      admin: true,
      username: "juliosumo",
      profilePicture: JuliusOmo,
      date: "2 days ago",
      likes: 2,
      reply: false,
      comment:
        "@ramsesmiron I couldn't agree more with this.Everything moves so fast and it always seems like everyone knows the newest library/framework.But the fundamentals are what stay constant.",
    },
  ]);

  const [newReply, setNewReply] = useState("");

  const replybtn = () => {
    let parentfeedActive = feed.find((feed) => feed.reply);

    let parentId = parentfeedActive ? parentfeedActive.id : 1;

    let newReplyId = replies ? replies.length + 100 : 1;

    let newReplyPost = {
      parentId: parentId,
      id: newReplyId,
      admin: true,
      username: "juliosumo",
      profilePicture: JuliusOmo,
      date: "1 month ago",
      likes: 0,
      reply: false,
      comment: newReply,
    };

    setReplies((prevReplies) => [...prevReplies, newReplyPost]);
    setNewReply("");
  };

  /*  const handleReply = (e) => {
    let numberId = parseInt(e.target.id);

    setFeed((prevFeed) => {
      return prevFeed.map((feed) =>
        numberId === feed.id ? { ...feed, reply: !feed.reply } : feed
      );
    });

    setReplies((prevReply) => {
      return prevReply.map((reply) =>
        numberId === reply.id ? { ...reply, reply: !reply.reply } : reply
      );
    });
  };

 

 

  const handleReplyEdit = (post) => {
    const postToEdit = replies.find((feedPost) => feedPost.id === post.id);

    const updatedPost = {
      ...postToEdit,
      comment: edit,
    };

    setReplies(
      replies.map((feedPost) =>
        feedPost.id === post.id ? updatedPost : feedPost
      )
    );
    setEdit("");
  }; */

  return (
    <main>
      <div>
        {feed.map((feedPost) => (
          <div key={feedPost.id}>
            {/* Render the main feed */}
            <ProfileComment feed={feedPost} />

            {/* Render relevant replies for the current feed */}
            {replies
              .filter((reply) => reply.parentId === feedPost.id)
              .map((filteredReply) => (
                <Replies key={filteredReply.id} reply={filteredReply} />
              ))}
          </div>
        ))}
      </div>

      <CommentBox feed={feed} replies={replies} />
    </main>
  );
}

export default App;

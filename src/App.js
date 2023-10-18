import { useState } from "react";
import { ProfileComment } from "./ProfileComment";
import AmyRobson from "./images/avatars/image-amyrobson.webp";
import MaxBlagun from "./images/avatars/image-maxblagun.webp";
import RamsesMiron from "./images/avatars/image-ramsesmiron.webp";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";
import { CommentBox } from "./CommentBox";
import { Replies } from "./Replies";

function App() {
  const [feed, setFeed] = useState([
    {
      id: 1,
      admin: false,
      username: "amyrobson",
      profilePicture: AmyRobson,
      date: "1 month ago",
      likes: 12,
      reply: false,
      comment:
        "Impressive! Though it seems the drag feature could be improved.But overall it looks increadible.Youve nailed the design and theresponsiveness at various breakpoints really well",
    },
    {
      id: 2,
      admin: false,
      username: "maxblagun",
      profilePicture: MaxBlagun,
      date: "1 week ago",
      likes: 5,
      reply: false,
      comment:
        "Woah, your project looks awesome!How long have you been coding for? I'm still new, but think I want to dive into React as well soon.Perhaps you can give me an insight on where I can learn React? Thanks!",
    },
  ]);

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
  const [likes, setLikes] = useState(false);
  const [post, setPost] = useState("");
  const [edit, setEdit] = useState("");
  const [newReply, setNewReply] = useState("");

  const handleFeed = () => {
    let newfeedId = feed ? feed.length + 1 : 1;

    let newfeed = {
      id: newfeedId,
      admin: true,
      username: "juliosumo",
      profilePicture: JuliusOmo,
      date: "1 month ago",
      likes: 0,
      reply: false,
      comment: post,
    };

    setFeed((prevfeed) => [...prevfeed, newfeed]);
    setPost("");
  };

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

  const handleReply = (e) => {
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

  const addLikes = (Id) => {
    setFeed((prevFeed) => {
      return prevFeed.map((feedPost) => {
        if (feedPost.id === Id) {
          return { ...feedPost, likes: (feedPost.likes || 0) + 1 };
        } else {
          return feedPost;
        }
      });
    });

    setReplies((prevReply) => {
      return prevReply.map((replyPost) => {
        if (replyPost.id === Id) {
          return { ...replyPost, likes: (replyPost.likes || 0) + 1 };
        } else {
          return replyPost;
        }
      });
    });

    setLikes(true);
  };

  const removeLikes = (Id) => {
    setFeed((prevFeed) => {
      return prevFeed.map((feedPost) => {
        if (feedPost.id === Id) {
          return { ...feedPost, likes: (feedPost.likes || 0) - 1 };
        } else {
          return feedPost;
        }
      });
    });

    setReplies((prevReply) => {
      return prevReply.map((replyPost) => {
        if (replyPost.id === Id) {
          return { ...replyPost, likes: (replyPost.likes || 0) - 1 };
        } else {
          return replyPost;
        }
      });
    });

    setLikes(false);
  };

  const handleDelete = () => {
    setFeed((prevFeed) =>
      prevFeed.filter((feedPost) => feedPost.admin === false)
    );

    setReplies((prevReply) =>
      prevReply.filter((reply) => reply.admin === false)
    );
  };

  const handleEdit = (post) => {
    const postToEdit = feed.find((feedPost) => feedPost.id === post.id);

    const updatedPost = {
      ...postToEdit,
      comment: edit,
    };

    setFeed(
      feed.map((feedPost) => (feedPost.id === post.id ? updatedPost : feedPost))
    );
    setEdit("");
  };

  return (
    <main>
      <div>
        {feed.map((feed) => (
          <div key={feed.id}>
            {/* Render the main feed */}
            <ProfileComment
              feed={feed}
              handleReply={handleReply}
              newReply={newReply}
              setNewReply={setNewReply}
              replyBtn={replybtn}
              addLikes={addLikes}
              removeLikes={removeLikes}
              likes={likes}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              setEdit={setEdit}
              edit={edit}
            />

            {/* Render relevant replies for the current feed */}
            {replies
              .filter((reply) => reply.parentId === feed.id)
              .map((filteredReply) => (
                <Replies
                  key={filteredReply.id}
                  feed={feed}
                  reply={filteredReply}
                  handleReply={handleReply}
                  replies={replies}
                  newReply={newReply}
                  setNewReply={setNewReply}
                  replyBtn={replybtn}
                  addLikes={addLikes}
                  removeLikes={removeLikes}
                  likes={likes}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  setEdit={setEdit}
                  edit={edit}
                />
              ))}
          </div>
        ))}
      </div>

      <CommentBox
        feed={feed}
        replies={replies}
        handleFeed={handleFeed}
        post={post}
        setPost={setPost}
      />
    </main>
  );
}

export default App;

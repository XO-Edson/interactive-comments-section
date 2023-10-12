import { useState } from "react";
import { ProfileComment } from "./ProfileComment";
import AmyRobson from "./images/avatars/image-amyrobson.webp";
import MaxBlagun from "./images/avatars/image-maxblagun.webp";
import RamsesMiron from "./images/avatars/image-ramsesmiron.webp";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";
import { CommentBox } from "./CommentBox";
import { Replies } from "./Replies";

function App() {
  const [posts, setPosts] = useState([
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

  const handleReply = (e) => {
    let numberId = parseInt(e.target.id);

    setPosts((prevPosts) => {
      return prevPosts.map((post) =>
        numberId === post.id ? { ...post, reply: !post.reply } : post
      );
    });

    setReplies((prevReply) => {
      return prevReply.map((reply) =>
        numberId === reply.id ? { ...reply, reply: !reply.reply } : reply
      );
    });
  };

  return (
    <main>
      <div>
        <ProfileComment posts={posts} handleReply={handleReply} />
        <Replies posts={posts} handleReply={handleReply} replies={replies} />
      </div>
      <CommentBox posts={posts} />
    </main>
  );
}

export default App;

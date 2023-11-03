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
  const replies = useSelector((state) => state.feedPosts.replies);

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
                <Replies
                  key={filteredReply.id}
                  reply={filteredReply}
                  feed={feedPost}
                />
              ))}
          </div>
        ))}
      </div>

      <CommentBox feed={feed} replies={replies} />
    </main>
  );
}

export default App;

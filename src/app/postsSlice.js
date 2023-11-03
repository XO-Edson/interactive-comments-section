import { createSlice } from "@reduxjs/toolkit";
import AmyRobson from "../images/avatars/image-amyrobson.webp";
import MaxBlagun from "../images/avatars/image-maxblagun.webp";
import JuliusOmo from "../images/avatars/image-juliusomo.webp";

const postsSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [
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
    ],

    post: "",
    likes: false,
    edit: "",
  },

  reducers: {
    updatePost(state, action) {
      state.post = action.payload;
    },

    updateEdit(state, action) {
      state.edit = action.payload;
      console.log(state.edit);
    },

    handleFeedData(state) {
      let newfeedId = state.feed ? state.feed.length + 1 : 1;

      let newfeed = {
        id: newfeedId,
        admin: true,
        username: "juliosumo",
        profilePicture: JuliusOmo,
        date: "1 month ago",
        likes: 0,
        reply: false,
        comment: state.post,
      };

      state.feed = [...state.feed, newfeed];
      state.post = "";
    },

    addLikes(state, action) {
      state.feed = state.feed.map((feedPost) => {
        if (feedPost.id === action.payload) {
          return { ...feedPost, likes: (feedPost.likes || 0) + 1 };
        } else {
          return feedPost;
        }
      });

      /* state.replies.map((prevReply) => {
        return prevReply.map((replyPost) => {
          if (replyPost.id === Id) {
            return { ...replyPost, likes: (replyPost.likes || 0) + 1 };
          } else {
            return replyPost;
          }
        });
      }); */

      state.likes = true;
    },

    removeLikes(state, action) {
      state.feed = state.feed.map((feedPost) => {
        if (feedPost.id === action.payload) {
          return { ...feedPost, likes: (feedPost.likes || 0) - 1 };
        } else {
          return feedPost;
        }
      });

      /* setReplies((prevReply) => {
        return prevReply.map((replyPost) => {
          if (replyPost.id === Id) {
            return { ...replyPost, likes: (replyPost.likes || 0) - 1 };
          } else {
            return replyPost;
          }
        });
      }); */

      state.likes = false;
    },

    handleDelete(state, action) {
      const targetId = action.payload;

      state.feed = state.feed.filter(
        (feedPost) => feedPost.id !== parseInt(targetId)
      );

      /* setReplies((prevReply) =>
        prevReply.filter((reply) => reply.id !== targetId)
      ); */
    },

    handleEdit(state, action) {
      const postToEdit = state.feed.find(
        (feedPost) => feedPost.id === action.payload
      );

      if (postToEdit) {
        const updatedPost = {
          ...postToEdit,
          comment: state.edit,
        };
        const updatedFeed = state.feed.map((feedPost) =>
          feedPost.id === action.payload ? updatedPost : feedPost
        );
        state.feed = updatedFeed;
        state.edit = "";
      }
    },

    /* handleReplyEdit(post,state){
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
  },
});

export const postsSliceActions = postsSlice.actions;

export default postsSlice;
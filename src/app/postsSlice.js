import { createSlice } from "@reduxjs/toolkit";
import AmyRobson from "../images/avatars/image-amyrobson.webp";
import MaxBlagun from "../images/avatars/image-maxblagun.webp";
import JuliusOmo from "../images/avatars/image-juliusomo.webp";
import RamsesMiron from "../images/avatars/image-ramsesmiron.webp";

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

    replies: [
      {
        parentId: 2,
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
    ],

    post: "",
    likes: false,
    edit: "",
    newReply: "",
  },

  reducers: {
    updatePost(state, action) {
      state.post = action.payload;
    },

    updateEdit(state, action) {
      state.edit = action.payload;
    },

    updateReply(state, action) {
      state.newReply = action.payload;
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

      state.replies = state.replies.map((replyPost) => {
        if (replyPost.id === action.payload) {
          return { ...replyPost, likes: (replyPost.likes || 0) + 1 };
        } else {
          return replyPost;
        }
      });

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

      state.replies = state.replies.map((replyPost) => {
        if (replyPost.id === action.payload) {
          return { ...replyPost, likes: (replyPost.likes || 0) - 1 };
        } else {
          return replyPost;
        }
      });

      state.likes = false;
    },
    /* delete function issue */
    handleDelete(state, action) {
      const targetId = action.payload;

      state.feed = state.feed.filter(
        (feedPost) => feedPost.id !== parseInt(targetId)
      );

      state.replies = state.replies.filter(
        (reply) => reply.id !== parseInt(targetId)
      );
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

    handleReplyBtn(state, action) {
      let numberId = parseInt(action.payload);

      state.feed = state.feed.map((feed) =>
        numberId === feed.id ? { ...feed, reply: !feed.reply } : feed
      );

      state.replies = state.replies.map((reply) =>
        numberId === reply.id ? { ...reply, reply: !reply.reply } : reply
      );
    },

    replybtn(state) {
      let parentfeedActive = state.feed.find((feed) => feed.reply);

      let parentId = parentfeedActive ? parentfeedActive.id : 1;

      let newReplyId = state.replies ? state.replies.length + 100 : 1;

      let newReplyPost = {
        parentId: parentId,
        id: newReplyId,
        admin: true,
        username: "juliosumo",
        profilePicture: JuliusOmo,
        date: "1 month ago",
        likes: 0,
        reply: false,
        comment: state.newReply,
      };

      state.replies = [...state.replies, newReplyPost];
      state.newReply = "";
    },

    handleReplyEdit(state, action) {
      const postToEdit = state.replies.find(
        (feedPost) => feedPost.id === action.payload
      );

      if (postToEdit) {
        const updatedPost = {
          ...postToEdit,
          comment: state.edit,
        };

        const updatedReply = state.replies.map((feedPost) =>
          feedPost.id === action.payload ? updatedPost : feedPost
        );

        state.replies = updatedReply;
        state.edit = ""; // Reset the edit state after updating the comment
      }
    },
  },
});

export const postsSliceActions = postsSlice.actions;

export default postsSlice;

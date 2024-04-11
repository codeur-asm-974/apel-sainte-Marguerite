import React, { useState } from "react";
import { Post } from "@/types/types props";
import InputModal from "@/ui/components/blog/InputModal";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addPost = (post: Post) => {
    setPosts([post, ...posts]);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Ajouter un post</button>
      <InputModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        addPost={addPost}
      />
      {/* Le reste de votre code... */}
    </div>
  );
};

export default Blog;

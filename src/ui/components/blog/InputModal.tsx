import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import { Post } from "@/types/types props";
import { Container } from "../container/container";

interface InputModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  addPost: (post: Post) => void;
}

const InputModal: React.FC<InputModalProps> = ({
  isOpen,
  onRequestClose,
  addPost,
}) => {
  const [newPost, setNewPost] = useState<Post>({
    title: "",
    content: "",
    imageUrl: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addPost(newPost);
    setNewPost({ title: "", content: "", imageUrl: "" });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Contenu:
          <input
            type="text"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          URL de image:
          <input
            type="text"
            name="imageUrl"
            value={newPost.imageUrl}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Publier le post</button>
      </form>
    </Modal>
  );
};

export default InputModal;

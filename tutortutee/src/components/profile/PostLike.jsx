import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PostLike = () => {
  const [interaction, setInteraction] = useState("none");

  const handleLikeClick = () => {
    setInteraction((prev) => (prev === "like" ? "none" : "like"));
  };

  const handleDislikeClick = () => {
    setInteraction((prev) => (prev === "dislike" ? "none" : "dislike"));
  };

  return (
    <>
      <div className="min-h-[30px] mt-[12px] flex gap-[12px] items-center">
        <div className="flex gap-[8px]" onClick={handleLikeClick}>
          <LazyLoadImage
            src={`${
              interaction === "like"
                ? `${process.env.PUBLIC_URL}/image/profile/checkLike.svg`
                : `${process.env.PUBLIC_URL}/image/profile/like.svg`
            }`}
            alt="좋아요"
            width={20}
            height={20}
          />
          <p className="text-sm">1.2천</p>
        </div>
        <div className="flex gap-[8px]" onClick={handleDislikeClick}>
          <LazyLoadImage
            src={`${
              interaction === "dislike"
                ? `${process.env.PUBLIC_URL}/image/profile/checkDisLike.svg`
                : `${process.env.PUBLIC_URL}/image/profile/disLike.svg`
            }`}
            alt="싫어요"
            width={20}
            height={20}
          />
          <p className="text-sm">999</p>
        </div>
      </div>
    </>
  );
};

export default PostLike;

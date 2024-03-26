import { useState } from "react";

const HeroSection = () => {
  const [lectureID, setlectureID] = useState("");
  return (
    <section className="flex my-12 min-h-96  w-full flex-col justify-center items-center">
      <div className="px-28 flex gap-2 items-center justify-center w-full">
        <input
          className="w-4/5 p-4 border border-black outline-zinc-800 focus:outline-zinc-600 hover:outline-zinc-600 rounded-md"
          placeholder="Enter the ID of the lecture video"
          type="url"
          required
          value={lectureID}
          onChange={(e) => setlectureID(e.target.value)}
        />
      </div>
      {lectureID !== "" && (
        <iframe
          className="m-8"
          width="720"
          height="720"
          src={`https://youtube.com/embed/${lectureID}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      )}
    </section>
  );
};
export default HeroSection;

import { useState } from "react";

function extractVideoId(context: string): string {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|.*[?&]v=))([^/?&]+)/;
  const match = context.match(regex);
  if (match) {
    return match[1];
  }
  return context;
}

const HeroSection = () => {
  const [lectureID, setLectureID] = useState("");
  return (
    <section className="flex my-12 min-h-96  w-full flex-col justify-center items-center">
      <div className="px-28 flex gap-2 items-center justify-center w-full">
        <input
          className="w-4/5 p-4 border border-black outline-zinc-800 focus:outline-zinc-600 hover:outline-zinc-600 rounded-md"
          placeholder="Paste the video ID or video url"
          type="url"
          required
          value={lectureID}
          onChange={(e) => setLectureID(extractVideoId(e.target.value))}
        />
      </div>
      {lectureID !== "" && (
        <iframe
          className="m-8 w-4/5"
          height="720"
          src={`https://youtube.com/embed/${lectureID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        />
      )}
    </section>
  );
};
export default HeroSection;

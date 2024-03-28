import Emoji from "a11y-react-emoji/lib/Emoji";

const HowToUse = () => {
  return (
    <section className="flex items-center font-quicksand justify-center flex-col gap-3 ">
      <span className="text-3xl font-semibold">How To Use?</span>
      <ol
        type="1"
        className="py-4 list-decimal flex flex-col items-start justify-center gap-3 w-3/5"
      >
        <li>
          This tool works only if the video's creator has not monetized his/her
          channel.
        </li>
        <li>
          Once you know, the channel is not monetized, head on to the video and
          go to the url.
        </li>
        <li>
          The url will typically of the type&nbsp;
          <code>https://youtube.com/watch?v=id</code> or <code>https://youtu.be/id</code>. Now you can either enter the video ID or the url to the above field.
        </li>
        <li>
          And, voila <Emoji symbol="🥳" label="voila"></Emoji> the video will
          start playing without the ads.
        </li>
      </ol>
    </section>
  );
};

export default HowToUse;

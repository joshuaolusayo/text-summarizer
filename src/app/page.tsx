export default function Home() {
  return (
    <main className="grid gap-y-10">
      <div>
        <h2 className="text-xl font-semibold mb-3 font-tilt-prism">
          Introduction
        </h2>
        <p>
          Welcome to the official webpage of our cutting-edge project,{" "}
          <span className="font-semibold">
            Automated Text Summarization using Natural Language Processing with
            Artificial Intelligence for Representing the Mood of the Summarized
            Words.
          </span>{" "}
          We are excited to introduce you to a revolutionary solution that
          harnesses the power of AI and NLP to make text comprehension and
          analysis more efficient than ever before.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3 font-tilt-prism">
          Project Overview:
        </h2>
        <p>
          In a world flooded with information, extracting key insights from
          lengthy texts can be a time-consuming and challenging task. Our
          project addresses this issue by offering an advanced automated text
          summarization tool. Using state-of-the-art Natural Language Processing
          techniques and Artificial Intelligence algorithms, our solution
          condenses extensive text documents into concise summaries, preserving
          the core message while discarding redundant details.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3 font-tilt-prism">
          Key Features:
        </h2>
        <div className="grid gap-y-2">
          <p>
            <span className="font-semibold">Efficient Summarization: </span>Our
            AI-powered system is designed to quickly analyze and summarize
            lengthy texts, saving you valuable time and effort.
          </p>
          <p>
            <span className="font-semibold">Mood Representation: </span>Our What
            sets us apart is our unique feature that captures the mood of the
            summarized words. Our AI not only condenses content but also
            provides insights into the emotional tone of the text
          </p>
          <p>
            <span className="font-semibold">User-Friendly Interface: </span>Our
            user interface is intuitive and easy to navigate, ensuring a
            seamless experience for both novice and advanced users.
          </p>
          <p>
            <span className="font-semibold">AI-Backed Accuracy: </span>
            Leveraging the latest advancements in Natural Language Processing
            and Machine Learning, our system ensures high-quality and accurate
            summaries.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3 font-tilt-prism">
          How It Works:
        </h2>
        <div className="grid gap-y-2">
          <p>
            <span className="font-semibold">Upload Text: </span>Our Users can
            upload their text documents or input the text they want summarized.
          </p>
          <p>
            <span className="font-semibold">Summarization: </span>
            Our AI algorithms analyze the text, identifying key sentences and
            concepts.
          </p>
          <p>
            <span className="font-semibold">Mood Analysis: </span>Beyond
            summarization, our AI determines the mood of the summarized content,
            giving users deeper insights into the emotional context.
          </p>
          <p>
            <span className="font-semibold">Output: </span>
            Users receive a concise summary enriched with mood representation,
            making complex information more accessible
          </p>
        </div>
      </div>
    </main>
  );
}

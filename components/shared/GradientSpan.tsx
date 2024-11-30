const GradientSpan = ({ text }: { text: string }) => (
  <>
    {" "}
    <span className="bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">
      {text}
    </span>{" "}
  </>
);

export default GradientSpan;

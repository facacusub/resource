'use client'

const TallyEmbed = () => {
  return (
    <>
      <script async src="https://tally.so/widgets/embed.js"></script>
      <iframe
        data-tally-src="https://tally.so/r/31pVal?transparentBackground=0"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0,
          width: '100%',
          height: '100%'
        }}
        frameBorder="0"
        title="You are one step away..."
      ></iframe>
    </>
  );
};

export default TallyEmbed; 
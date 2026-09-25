/*
 * Screenshot or looping video on the blue backdrop used across the docs.
 * Pass `video` for an autoplaying clip; `alt` doubles as the video title.
 * Pass `maxWidth` (e.g. "380px") to keep tall or narrow shots from filling
 * the whole column; they stay centred on the backdrop.
 */
export const Showcase = ({ src, alt, caption, video = false, maxWidth }) => {
  const mediaStyle = { width: "100%", display: "block" };

  return (
    <Frame caption={caption}>
      <div
        style={{
          backgroundImage: "url(/images/background-blue.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
          padding: "4%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderRadius: "0.875rem",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.28)",
            maxWidth,
            margin: maxWidth ? "0 auto" : undefined,
          }}
        >
          {video ? (
            <video autoPlay muted loop playsInline src={src} title={alt} style={mediaStyle} />
          ) : (
            <img src={src} alt={alt} style={mediaStyle} />
          )}
        </div>
      </div>
    </Frame>
  );
};

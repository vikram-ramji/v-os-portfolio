import MacWindow from "./MacWindow";

const Spotify = () => {
  return (
    <MacWindow windowType="spotify" title="Spotify Playlist" width="30vw" height="50vh" x={620} y={200}>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/3X6bYdC5OsKOzXH5zMznpo?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </MacWindow>
  );
};

export default Spotify;

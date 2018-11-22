const SCTrack = (props) => (
  <div>
  <iframe
    width="40%"
    height="166"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src={props.src}
  ></iframe>
  <style jsx>{`
    iframe {
      width: 100%;
      max-width: 40em;
      min-width: 20em;
    }
    `}
  </style>
  </div>
)

export default SCTrack

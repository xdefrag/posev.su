const imgUrl = "/static/head.jpg"

const Header = () => (
  <div className="header">
  <img src={imgUrl}/>
  <style jsx>{`
      img {
        padding: 2em 0;
        width: 100%;
        max-width: 24em;
        min-width: 10em;
      }
    `}
  </style>
  </div>
)

export default Header

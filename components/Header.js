const imgUrl = "/static/head.jpg"

const Header = () => (
  <div className="header">
  <img src={imgUrl}/>
  <style jsx>{`
      img {
        padding: 2em;
        width: 24em;
      }
    `}
  </style>
  </div>
)

export default Header

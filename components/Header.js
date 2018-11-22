const imgUrl = "https://i1.sndcdn.com/avatars-000294902953-6kyazk-t500x500.jpg"

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

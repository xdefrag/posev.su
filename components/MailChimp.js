const MailChimp = () => (

  <div id="mc_embed_signup">

  <form action="https://yes.us10.list-manage.com/subscribe/post?u=7f034d22d09377b8fa44d3b6a&amp;id=7cb1f5118c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
  <div id="mc_embed_signup_scroll">

  <div className="mc-field-group">
  <label htmlFor="mce-EMAIL"></label>
  <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL"/>
  </div>
  <div id="mce-responses" className="clear">
  <div className="response" id="mce-error-response" style={{display: "none"}}></div>
  <div className="response" id="mce-success-response" style={{display: "none"}}></div>
  </div>
  <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
  <input type="text" name="b_7f034d22d09377b8fa44d3b6a_7cb1f5118c" tabIndex="-1" defaultValue=""/>
  </div>
  <div className="clear">
  <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
  </div>
  </div>
  </form>

  <style jsx>{`
    #mc_embed_signup_scroll div, input {
        display: inline-block;
      }
    `}
  </style>
  </div>
)

export default MailChimp

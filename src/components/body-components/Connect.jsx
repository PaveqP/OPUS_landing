import '../../Styles/Body.css'

function Connect() {
  return (
    <div id='contacts' className='connect'>
      <div className="bg__c-container">
        <div className="m__container">
          <div className="connect__info">
            <div className="connect__title">
              Остались вопросы?
              <p>Есть предложения или пожелания, тогда</p>
            </div>
            <div className="connect__us">
              свяжитесь с нами
            </div>
            <div className="connect__descript">
              любым удобным для вас способом!
            </div>
          </div>
          <div className="connect__row">
            <div className="connect__vk">
              vk
            </div>
            <div className="connect__telegram">
              telegram
            </div>
            <div className="connect__email">
              email
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export {Connect}
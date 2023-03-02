import '../../Styles/Body.css'

function Feedback() {
  return (
    <div id='feedback' className='feedback'>
        <div className="m__container">
            <div className="fb__row">
                <div className="fb__title">
                    Оставь отзыв
                </div>
                <div className="fb__descript">
                    Расскажи о своём опыте использования нашего сервиса
                </div>
                <form action="#" method='post' className='fb__form'>
                    <div className="fb__action-row">
                        <textarea name="feedback" id="" cols="30" rows="10" className='fb__area'>

                        </textarea>
                        <button className="fb__send-button" typeof='submit'>
                            отправить
                        </button>
                    </div>
                </form>
                
                
            </div>
        </div>
    </div>
  )
}

export {Feedback}

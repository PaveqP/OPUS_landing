import '../../Styles/Body.css'
import React from "react";

function Meeting(props) {

    const {show} = props;

  return (
        <div className="meeting">
            <div className="bg-container">
                <div className="m__container">
                    <div className="m__row">
                        <div className="m__info">
                            {show === false ? <div className="m__title">
                                                 Линия твоего 
                                                 <p>профессионального </p>
                                                 <p>старта</p>
                                             </div> : console.log(show)}
                            
                            <div className="m__start">
                                НАЧНИ свой первый 
                                <p>проект</p>
                            </div>
                            <div className="m__separator">

                            </div>
                            <div className="m__get">    
                                ПОЛУЧАЙ навыки 
                                <p>в среде профессионалов</p>
                            </div>
                            <div className="m__separator">
                                
                            </div>
                            <div className="m__find">
                                НАЙДИ свою команду 
                                <p>или создай собственную</p>
                            </div>
                            <button className="m__start-button">
                                Начать
                            </button>
                        </div>
                        <div className="m__logo-smart">

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export {Meeting}
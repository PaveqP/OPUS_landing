import '../Styles/Header.css'
import '../images/logo.png';
import React from "react";

function Header(props) {
    
    const {show, toTrue, toFalse} = props;

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    return (
        <div className="header">
            <div className="h__container">
                <div className="h__row">
                    {show === false ? <div className="h__logo"></div> : console.log(show)}
                        <div className="h__elems">
                            <div className="h__main">
                                главная
                            </div>

                            <div className="h__about">
                                <a href="#mission"> о проекте </a> 
                            </div>

                            <div className="h__reviews">
                                <a href="#feedback"> отзывы </a> 
                            </div>

                            <div className="h__contacts">
                                <a href="#contacts"> контакты </a> 
                            </div>

                            <button className="h__enter">
                                вход
                            </button>

                            <button className="h__reg">
                                регистрация
                            </button>
                        </div>
                        <div className='h__burger'>
                            <div className="h__burger-lines" onClick={toTrue}>
                                {show === false ? <div className="h__burger-line"></div> : console.log(show)}
                                {show === false ? <div className="h__burger-line"></div> : console.log(show)}
                                {show === false ? <div className="h__burger-line"></div> : console.log(show)}
                            </div>
                            
                                <div className="h__burger-row">
                                    {show && 
                                        <div className="h__burger-structure">
                                            <div className="h__burger-close-lines" onClick={toFalse}>
                                                {show === true ? <div className="h__burger-close-line-1"></div> : console.log(show)}
                                                {show === true ? <div className="h__burger-close-line-2"></div> : console.log(show)}
                                            </div>
                                            <div className="h__main-b">
                                                главная
                                            <div/>
                                            
                                            <div className="h__about-b">
                                                <a href="#mission"> о проекте </a>
                                            </div>

                                            <div className="h__reviews-b">
                                                <a href="#feedback"> отзывы </a> 
                                            </div>

                                            <div className="h__contacts-b">
                                                <a href="#contacts"> контакты </a>  
                                            </div>

                                            <div className="h__bb">
                                                <button className="h__enter-b">
                                                    вход
                                                </button>
                                            </div>

                                            <button className="h__reg-b">
                                                регистрация
                                            </button>
                                        </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export {Header}
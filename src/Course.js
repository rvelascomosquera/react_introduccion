import React from "react";

const Course = ({background, icon,  name,  quizzes}) => {
  return(
  <div className="card">
    <div className="card__imagen">
      <img className="imagen__background" src={background} alt="fondo"/>
      <img className="imagen__icon" src={icon} alt="logo"/>
    </div>
    <div className="card__info">
      <h3 className="card__info--name">{name}</h3>
      <h4>Progreso
        <span className="progress__init"> 0 / </span>
        <span className="progress__end">{quizzes}</span>
      </h4>
    </div>
  </div>
  )
}

export default Course;
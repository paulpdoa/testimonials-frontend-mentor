
const CardTwo = () => {
  return (
    <div className="card card--two">
        <div className="card__head">
          <img className="card__img" src="/images/image-jonathan.jpg" alt="Jonathan" />
          <div className="card__info">
              <h2 className="card__name">Jonathan Walters</h2>
              <span className="card__verified">Verified Graduate</span>
          </div>
        </div>
        <div className="card__description">
            <p className="card__paragraph">The team was very supportive and kept me motivated</p>

            <p className="card__about">“I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
            for a big company. This was one of the best investments I’ve made in myself.”</p>
        </div>
    </div>
  )
}

export default CardTwo
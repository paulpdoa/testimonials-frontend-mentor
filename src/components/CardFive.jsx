const CardFive = () => {
  return (
    <div className="card card--five">
        <div className="card__head">
          <img className="card__img" src="/images/image-patrick.jpg" alt="Patrick" />
          <div className="card__info">
              <h2 className="card__name">Patrick Abrams</h2>
              <span className="card__verified">Verified Graduate</span>
          </div>
        </div>
        <div className="card__description">
            <p className="card__paragraph">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
            learning from their experiences was easy.</p>

            <p className="card__about">“The staff seem genuinely concerned about my progress which I find really refreshing. The program 
            gave me the confidence necessary to be able to go out in the world and present myself as a capable 
            junior developer. The standard is above the rest. You will get the personal attention you need from 
            an incredible community of smart and amazing people.”</p>
        </div>
    </div>
  )
}

export default CardFive
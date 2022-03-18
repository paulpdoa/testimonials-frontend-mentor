
const CardFour = () => {
  return (
    <div className="card card--four">
        <div className="card__head">
            <img className="card__img" src="/images/image-jeanette.jpg" alt="Jeanette" />
            <div className="card__info">
                <h2 className="card__name">Jeanette Harmon</h2>
                <span className="card__verified">Verified Graduate</span>
            </div>
        </div>
        <div className="card__description">
            <p className="card__paragraph">An overall wonderful and rewarding experience</p>

            <p className="card__about">“Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
            while doing something I love.”</p>
        </div>
    </div>  
    )
}

export default CardFour


const CardOne = () => {
  return (
    <div className="card card--one">
        <div className="card__head">
            <img className="card__img" src="/images/image-daniel.jpg" alt="Daniel" />
            <div className="card__info">
                <h2 className="card__name">Daniel Clifford</h2>
                <span className="card__verified">Verified Graduate</span>
            </div>
        </div>
        <div className="card__description">
            <p className="card__paragraph">I received a job offer mid-course, and the subjects I learned were current, if not more so,
              in the company I joined. I honestly feel I got every penny's worth.</p>

            <p className="card__about">“I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
            transition and have heard some people who had an amazing experience here. I signed up 
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling - time of my life. Since completing 
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.”</p>
            <img className="card__quotation" src="/images/bg-pattern-quotation.svg" alt="quotation" />
        </div>

        
    </div>
  )
}

export default CardOne
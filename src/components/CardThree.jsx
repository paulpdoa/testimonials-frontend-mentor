
const CardThree = () => {
  return (
    <div className="card card--three">
        <div className="card__head">
          <img className="card__img" src="/images/image-kira.jpg" alt="Kira" />
          <div className="card__info">
              <h2 className="card__name">Kira Whittle</h2>
              <span className="card__verified">Verified Graduate</span>
          </div>
        </div>
        <div className="card__description">
            <p className="card__paragraph">Such a life-changing experience. Highly recommended!</p>

            <p className="card__about"> “Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
            professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
            student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
            100% recommend!”</p>
        </div>
    </div>
  )
}

export default CardThree
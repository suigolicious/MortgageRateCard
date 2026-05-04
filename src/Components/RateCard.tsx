import "./RateCard.scss"

export default function RateCard() {
  return (
    <div className="rate-card-container">
      <div className='rate-card'>
        <span className="card-title">
          <div className="card-title-text">Today's Mortgage Rates</div>
          <div className="card-info-text">Updated April 12, 2026 • National averages</div>
        </span>
        <span className="card-type">
          <div>
            30-yr fixed
          </div>
        </span>
      </div>
    </div>
  )
}

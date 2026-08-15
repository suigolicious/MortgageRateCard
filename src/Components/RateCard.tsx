import './RateCard.scss';

export default function RateCard() {
  return (
    <div className="rate-card">
      <div className="rate-card-outline">
        <div className="title-subtitle">
          <div className="title">Today's Mortage Rate</div>
          <div>Updated April 12, 2026 &bull; National Averages  </div>
        </div>
        <div className="years">30-yr fixed</div>
      </div>
    </div>
  )
}
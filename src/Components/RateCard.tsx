import './RateCard.scss'

export default function RateCard() {
  return (
    <div className="rate-card">
      <div className='rate-card-header'>
        <div className='text-container'>
          <h2 className='rate-card-title'>Today's mortgage rates</h2>
          <div className='rate-card-subtitle'>Updated April 12, 2026 • National averages</div>
        </div>
        <div className='year-container'>
          <div className='year'>30 Year Fixed</div>
        </div>
      </div>
    </div>
  )
}
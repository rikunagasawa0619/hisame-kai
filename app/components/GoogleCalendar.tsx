export default function GoogleCalendar() {
  // カレンダーIDは後で提供される
  const CALENDAR_ID = "PLACEHOLDER_CALENDAR_ID@group.calendar.google.com"

  return (
    <div className="calendar-container">
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=Asia/Tokyo`}
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder={0}
        scrolling="no"
      />
      <p className="c" style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
        ※カレンダーIDは後で実際のものに置き換えます
      </p>
    </div>
  )
}

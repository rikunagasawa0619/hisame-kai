export default function GoogleCalendar() {
  // TODO: 実際のGoogleカレンダーIDに置き換えてください
  // カレンダーIDの取得方法：
  // 1. Googleカレンダーにアクセス
  // 2. 左側のマイカレンダーから対象のカレンダーの設定を開く
  // 3. 「カレンダーの統合」セクションの「カレンダーID」をコピー
  // 4. 例：abcd1234efgh5678@group.calendar.google.com
  const CALENDAR_ID = "PLACEHOLDER_CALENDAR_ID@group.calendar.google.com"

  return (
    <div className="w-full">
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=Asia/Tokyo&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0`}
        className="w-full rounded-xl border border-gray-700"
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder={0}
        scrolling="no"
        title="活動予定カレンダー"
      />
      <p className="text-center text-sm text-gray-500 mt-4">
        ※ カレンダーIDは実際のものに置き換えてください
      </p>
    </div>
  )
}

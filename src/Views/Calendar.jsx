import {
  Display,
} from '@fluentui/react-components'

export function Calendar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh' }}>
      <article>
        <Display block>Calendar</Display>
      </article>
    </div>
  )
}

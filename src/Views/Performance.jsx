import {
  Display,
  Body1,
} from '@fluentui/react-components'

export function Performance() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh' }}>
      <article>
        <Display block>Performance</Display>
        <Body1 block>Placeholder for section on user percieved performance including browser speed tools and benchmarks.</Body1>
      </article>
    </div>
  )
}

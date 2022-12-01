import { Title1, Text } from "@fluentui/react-components";

export function About() {
  return (
    <div style={{ height: '100vh' }} >
      <Title1 block>Microsoft Fluent-UI React Components Single Page Application</Title1>
      <Text block>This demo repo was bootstrapped with "create-react-app", and includes "@fluentui/react-components@^9.7.0", "@fluentui/react-icons@^2.0.188", "react@^18.2.0", "react-dom@^18.2.0", "react-router-dom@^6.4.3".</Text>
      <Text block>Build configurations are using "npm@8.19.2", "react-scripts": "5.0.1", "@testing-library/jest-dom": "^5.16.5", "@testing-library/react": "^13.4.0", "@testing-library/user-event": "^13.5.0", "msw": "^0.49.0""react-scripts@5.0.1".</Text>
    </div>
  )
}

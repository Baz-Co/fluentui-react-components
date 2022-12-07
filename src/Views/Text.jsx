import {
  Display,
  LargeTitle,
  Title1,
  Text as MSText,
  Body1,
  Divider,
  Title2,
  Subtitle1,
  Subtitle2,
  Title3,
  Caption1,
  Caption2
} from "@fluentui/react-components";

export function Text() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh' }}>
      <div>
        {/* // <div style={{ textAlign: 'left ', height: '100vh' }}> */}
        <Display block>Text</Display>
        <Body1 block>The largest text component in the "@fluentui/react-components" is the 'Display' component.</Body1>
        <LargeTitle>Best Practices</LargeTitle>
        <Body1 block>The second largest is the 'LargeTitle' component.</Body1>
        <Title1 block>For SPAs</Title1>
        <Body1 block>Next comes the 'Title1', 'Title2', 'Title3' components.</Body1>
        <Subtitle1 block align="center">This is where you can use the 'Subtitle1'</Subtitle1>
        <Subtitle2 block align="end">or 'Subtitle2' components</Subtitle2>
        <Body1 block>for additional content.</Body1>
        <br />
        <Title2 block>Body Text</Title2>
        <Body1 block>Standard SPA text should use the preset component 'Body1'.</Body1>
        <Caption1 block align="center">Within Body text sections you can use the 'Caption1'</Caption1>
        <Caption2 block align="end">or 'Caption2' components.</Caption2>
        <br />
        <MSText block font="base">The 'Body1' component matches the more-basic 'Text' component. The default 'font' type is 'base'.</MSText>
        <MSText block font="numeric" align="center">There is also a 'numeric' font type.</MSText>
        <MSText block font="monospace." align="end">And a 'monospace' type.</MSText>
        <Divider />
        <Title3 block>Font Types</Title3>
        <MSText block font="base">I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <MSText block font="numeric">I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <MSText block font="monospace">I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <Divider />
        <Title3 block>Font Weights</Title3>
        <MSText block weight="regular">I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <MSText block weight="medium">I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <MSText block weight="semibold">I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <MSText block weight="bold">I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <Divider />
        <Title3 block>Font Dressings</Title3>
        <MSText block italic>italic: I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <MSText block underline>underline: I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <MSText block strikethrough>strikethrough: I read once that the best "word" to evaluate 'typefaces' with is: handgloves.</MSText>
        <div style={{ width: '600px' }}>
          <MSText block truncate wrap={false}>And sometime it might be useful to truncate a text component; And sometime it might be useful to truncate a text component;</MSText>
        </div>
        <Divider />
      </div>
    </div>
  )
}

import { Button as FluentButton } from '@fluentui/react-components';
import { makeStyles, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: { color: 'red' },
  rootPrimary: { color: 'blue' },
});

export function Button(props) {
  const classes = useStyles();

  return (
    <FluentButton appearance={props.appearance} style={props.style} className={mergeClasses('ui-component', classes.root, props.className)}>Button</FluentButton>
  )
}

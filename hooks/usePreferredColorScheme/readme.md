# usePreferredColorScheme

A React hook that returns the preferred color scheme of the user.It's a wrapper around the [useMedia](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

## Arguments
- watch: boolean (default true) - if true, the hook will listen to changes in the preferred color scheme and update the state accordingly

## dependencies
- Support for [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) in the browser

## How to use
```ts
import usePreferredColorScheme from 'hooks/usePreferredColorScheme';

const example = () => {
  const colorScheme = usePreferredColorScheme();
  return (
    <div>
      <p>Preferred color scheme: {colorScheme}</p>
    </div>
  );
};
```


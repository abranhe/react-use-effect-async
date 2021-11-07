# react-use-effect-async

> Async useEffect hook. Just because I was lazy to create this hook on every project.

## Install

```bash
$ npm install react-use-effect-async
```

## Usage

```js
import { useState } from 'react';
import { useEffectAsync } from 'react-use-effect-async';

export function Demo() {
  const [data, setData] = useState(null);

  useEffectAsync(async () => {
    const response = await fetch('https://api.github.com/users/octocat');
    const data = await response.json();

    setData(data);
  }, [data]);

  return <div>{!data ? <p>Loading...</p> : <p>{data.name}</p>}</div>;
}
```

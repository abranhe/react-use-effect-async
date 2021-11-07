# react-use-effect-async 

[![npm version](https://img.shields.io/npm/v/react-use-effect-async.svg)](https://www.npmjs.com/package/react-use-effect-async)

> Async useEffect hook. Just because I was lazy to create this hook on every project.

## Install

```bash
$ npm install react-use-effect-async
```

## Usage

```js
import React from 'react';
import useEffectAsync from 'react-use-effect-async';

export function Demo() {
  const [data, setData] = React.useState(null);

  useEffectAsync(async () => {
    const response = await fetch('https://api.github.com/users/abranhe');
    const data = await response.json();

    setData(data);
  }, [data]);

  return <div>{!data ? <p>Loading...</p> : <p>{data.name}</p>}</div>;
}
```

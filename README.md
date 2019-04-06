# webpack stats bug

I'm trying to find all the modules that import `common.js` through `stats.json`, but only `a.js` shown in `common.js` field in `stats.json` such as:

```json
[
    ...
    {
        ...
        "id": null,
        "identifier": "/Users/guoxianglin/Desktop/demo/webpack-demo/src/common.js",
        "name": "./src/common.js",
        "issuer": "/Users/guoxianglin/Desktop/demo/webpack-demo/src/a.js",
        ...
    },
    ...
]

```

but whant i'm expected is:

```json
[
    ...
    {
        ...
        "id": null,
        "identifier": "/Users/guoxianglin/Desktop/demo/webpack-demo/src/common.js",
        "name": "./src/common.js",
        "issuer": "/Users/guoxianglin/Desktop/demo/webpack-demo/src/a.js",
        ...
    },
    {
        ...
        "id": null,
        "identifier": "/Users/guoxianglin/Desktop/demo/webpack-demo/src/common.js",
        "name": "./src/common.js",
        "issuer": "/Users/guoxianglin/Desktop/demo/webpack-demo/src/b.js",
        ...
    },
    ...
]

```

I'm not sure if it is a correct way to reach my goal, or is there a better way to do so?

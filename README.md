# PNG Compression

Compare [sharp](https://github.com/lovell/sharp) with [tinify](https://github.com/tinify/tinify-nodejs) between compression time and space saving.

### Prerequisites

* [Request a API Key](https://tinypng.com/developers) from tinypng. (500 images per month for free)
* Paste to `TINIFY_KEY` of `.env`.
* Ready to go.

### Usage

Run compression and calculation at the same time.

```
yarn start
```

Compress only

```
yarn run compress
```

Calculate only

```
yarn run calc
```

### Expected Result

![result](http://i.imgur.com/OZ1qXUX.png)

Tinypng compression time depends on network speed.

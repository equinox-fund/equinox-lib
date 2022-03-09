# Equinox Library

This repo contains a bunch of reusable components, hooks and utils functions.

## Getting started

Add `.npmrpc` to your repository with the following content

```bash
@equinox-fund:registry=https://npm.pkg.github.com
```

if you have a login authentification error, it means that you need to log in to https://npm.pkg.github.com using your github handle and authorization token that you need to create for it.

To create a token, click on your github avatar > settings > developer settings > Personal access tokens > Generate new token

Give a note to your token like 'access to npm', select an expiration period, check "repo" and "read:packages". This is enough to use the equinox-lib library.

```bash
# login
$ npm login --scope=@YOUR_USERNAME --registry=https://npm.pkg.github.com
# > Username: YOUR_USERNAME
#> Password: USE TOKEN HERE
#> Email: PUBLIC-EMAIL-ADDRESS
```

As soon as you are log in, you can now install the package

```bash
npm install @equinox-fund/equinox-lib@latest
```

## Storybook

We are using Chromatic to deploy our Storybook.

Every push on main are automatically deployed to our chromatic visible
[here](https://6225b1c0864a7a003a145ca4-kfodqfmyll.chromatic.com/).

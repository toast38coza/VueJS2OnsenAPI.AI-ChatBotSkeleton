## A base-line chat app

* JavaScript: VueJS 2
* UI: OnsenUI
* Bot Brain: API.AI
* Backend/Fulfillment: see: ...

### Development

#### Configure:

The only thing you need to configer is the `API_AI_TOKEN`



#### Run:

Follow the instructions in `app/README.md`, but in a nutshell:

```
cd app
npm install
npm run dev
```

### Packaging for mobile

The VueJS project in `app` is configured to build a cordova friendly `www` dist package in this directory.

To build, from `app` run:

```
npm run build
```

Thereafter: standard cordova things apply:

```
cordova plugin add ...
cordova platform add ios/android
...
```


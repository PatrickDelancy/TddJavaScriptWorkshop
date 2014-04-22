Testable JavaScript in Action Workshop
============

This repository is used for preparation and following along with a hands-on JavaScript development workshop. Some information about this workshop can be found [on my website](http://patrickdelancy.com/presentations/testable-javascript-action-hands-workshop/).


## FAQs
### What do I need to bring?
1. Bring a laptop and power cable (extension cord or power strip may also be a good idea, in case the venue does not have an adequate number of electrical outlets).
1. Your brain and injenuity.
1. Follow the instructions below for "Preparing my workstation"

### Will there be Wifi?
I will try to secure wireless internet access, but this cannot be guaranteed. Some aspects of this workshop will expect there to be internet access, but I'll have a backup plan just in case.

### I have a (Mac/Linux/Windows) laptop, is that ok?
There are many platform-specific tools available, but for this workshop the presenter will be using all opensource cross-platform tools, so whatever your favorite OS is, use that.


## Preparing my workstation
As we are building the project together, we will need some tools to learn and practice good TDD techniques. We will walk through the process of choosing and installing these tools as part of the workshop, but in case there is no internet access available, you can install the tools listed below as a backup ahead of time, to follow along with the presenter.

### Clone this repository
```
git clone git@github.com:PatrickDelancy/TddJsWorkshop.git
```

### Install Node.JS
If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```

### Install Compass (if you haven't already)
The gulp-compass module relies on Compass already being installed on your system.
```
gem update --system
gem install compass
```
### Install npm dependencies
```
npm install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Verify that everything is setup correctly
```
gulp
```

# Event Registration App

Event Registration App is used to register various events.

[![Build status](https://avvarma.visualstudio.com/ProgLan/_apis/build/status/EventRegistrationApp?branchName=master)](https://avvarma.visualstudio.com/ProgLan/_build/latest?definitionId=16)
![apm](https://img.shields.io/apm/l/vim-mode.svg)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/iAvinashVarma) [![Twitter Follow](https://img.shields.io/twitter/follow/iAvinashVarma.svg?style=social&label=Follow)](https://twitter.com/iAvinashVarma)
![GitHub followers](https://img.shields.io/github/followers/iAvinashVarma.svg?style=flat-square&label=Follow)

## Running the application - Windows

```cmd
C:\App> npm install
C:\App> npm audit fix
C:\App> server.bat
```

## Running the application - Ubuntu

```bash
$ npm install
$ npm audit fix
$ server.sh
```

## Navigation

* Navigate your browser to `http://localhost:8000/` to see the app running in your browser.

## Install Karma, Protractor and Update WebDriverManager

```bash
$ npm install -g karma-cli
$ npm install -g protractor
$ webdriver-manager update
```

## Running Tests

```bash
$ karma start test/karma.config.js
```

## Shutdow selenium webdriver-manager

### Windows

```cmd
C:\> cmd /V /C "echo off && set "killed=0" && (for /F "tokens=5" %a in ('netstat -ano ^| findstr ":4444"') do if not %a == 0 if not !killed! == 1 (taskkill /F /PID %a && set "killed=1")) || echo No webdriver process found"
```

### Linux

```bash
$ curl -s 'http://localhost:4444/lifecycle-manager/LifecycleServlet?action=shutdown'
```
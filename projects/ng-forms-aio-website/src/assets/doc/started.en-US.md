---
order: 1
title: Getting Started
---

> The prerequisite of Ng Forms Aio is a knowledge of [Angular](https://angular.io/) and [JavaScript ES2015](http://babeljs.io/docs/learn-es2015/).

## Playground

The following StackBlitz link demonstrates a basic use case, and it is recommended to fork this demo as a baseline while doing `Bug Report`. However, please do not use this demo as a scaffold in a real production environment.

- [NG-Forms-Aio StackBlitz](https://stackblitz.com/edit/Ng-Forms-Aio-ivy)

### Installation

> Read the documentation of [Angular](https://angular.io/cli) to explore more features.

```bash
$ npm install -g @angular/cli
# Or if you use yarn
$ yarn global add @angular/cli
```

### Create a New Project

The following command allows `@angular/cli` to create a folder called `PROJECT-NAME` under the current directory, with necessary dependencies.

```bash
$ ng new PROJECT-NAME
```

`@angular/cli` will run `npm install` or `yarn` after a project is created. You can run `npm install` or `yarn` by yourself if it fails.

### Install Ng-Forms-Aio

After changing the directory to the newly created project, you can automatically run the following commands to initialize the project's configuration, including importing i18n files and stylesheets and loading initial modules.

```bash
$ cd PROJECT-NAME
$ ng add ng-forms-aio
```

`Ng-Forms-Aio` supports initializing configuration with schematics, more information is available in the [schematics](/docs/schematics/en) section.

### Development & Debugging

Your project is now ready to run. After running the following command, a welcome page will be displayed in your browser.

```bash
$ ng serve --port 0 --open
```

### Building & Deployment

```bash
$ ng build --prod
```

Project files are built and generated in the `dist` directory by default.

### Install Ng-Forms-Aio

```bash
$ npm install ng-forms-aio --save
# Or if you use yarn
$ yarn add ng-forms-aio
```

#### Import component module

Finally, you need to import the component modules that you want to use into the `app.module.ts` file and [feature modules](https://angular.io/guide/feature-modules).

Taking the following `NzButtonModule` module as an example, first import the component module:

```ts
import { NgModule } from '@angular/core';
import { NgFormsAioModule } from 'ng-forms-aio';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [NgFormsAioModule]
})
export class AppModule {}
```

Then use the component inside the template:

```html
<ng-forms-aio [forms]="forms" [theme]="theme"></ng-forms-aio>
```

#### Use Custom Config

Finally, you need to import the component modules that you want to use into the `app.module.ts` file and [feature modules](https://angular.io/guide/feature-modules).

Taking the following `NzButtonModule` module as an example, first import the component module:

```ts
import { NgModule } from '@angular/core';
import { NgFormsAioModule } from 'ng-forms-aio';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [NgFormsAioModule.forRoot({ theme: 'background-edges-to-center' })]
})
export class AppModule {}
```

Then use the component inside the template:

```html
<ng-forms-aio [forms]="forms" [theme]="theme"></ng-forms-aio>
```


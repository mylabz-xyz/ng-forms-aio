
> The prerequisite of Ng Forms Aio is a knowledge of [Angular](https://angular.io/) and [JavaScript ES2015](http://babeljs.io/docs/learn-es2015/).

## Playground

The following StackBlitz link demonstrates a basic use case, and it is recommended to fork this demo as a baseline while doing `Bug Report`. However, please do not use this demo as a scaffold in a real production environment.

- [NG-Forms-Aio StackBlitz (Soon)]

### Installation

> Read the documentation of [Angular](https://angular.io/cli) to explore more features.

### Install Ng-Forms-Aio

## By Angular CLI

After changing the directory to the newly created project, you can automatically run the following commands to initialize the project's configuration, including importing i18n files and stylesheets and loading initial modules.

```bash
$ cd PROJECT-NAME
$ ng add ng-forms-aio
```

Project files are built and generated in the `dist` directory by default.

## By NPM | Yarn

```bash
$ npm install ng-forms-aio --save
# Or if you use yarn
$ yarn add ng-forms-aio
```

#### Import component module

Finally, you need to import the component modules that you want to use into the `app.module.ts` file and [feature modules](https://angular.io/guide/feature-modules).

Taking the following `NgFormsAioModule` module as an example, first import the component module:

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

Taking the following `NgFormsAioModule` module as an example, first import the component module:

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


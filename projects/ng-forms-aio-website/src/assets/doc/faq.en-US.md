<blockquote style="border-color: #faad14;"><p>For more questions please search <a href="https://github.com/mylabz-xyz/ng-forms-aio/issues?q=is%3Aopen+is%3Aissue+label%3A%22%3Aquestion%3A+FAQ%22" target="_blank" rel="noopener">issues with FAQ tag</a>.</p></blockquote>

### The bundle size of Angular and `NG-FORMS-AIO`

The size hello-world project of angular after gzip is about `30KB`, the size of `NG-FORMS-AIO`'s doc site is about `287KB`.

If you meet the bundle size issue, please make sure you use `ng build --prod` correctly to compile. If other third-party component kits other than `NG-FORMS-AIO` are imported, you could generate a sourcemap file using this command `ng build --prod --sourceMap=true` to check every dependency's bundled size. You can check [this link](https://angular.io/guide/deployment#inspect-the-bundles) for further instructions.

### Runtime performance of Angular and `NG-FORMS-AIO`

Angular Vue and React have very similar benchmarks, which should not be a deciding factor, ref [benchmark](https://github.com/krausest/js-framework-benchmark)。All components of `NG-FORMS-AIO` are Angular Native and under `OnPush` mode, which will provide the best performance of Angular.

### Can I use NG-FORMS-AIO in other Angular version?

`NG-FORMS-AIO` keeps the same major version with `@angular/core`, for example `NG-FORMS-AIO@13` supports `@angular/core@13`. In order to get the best performance, we recommend to use the latest version of angular, ref [update docs]( https://update.angular.io).

### Can I use only some of the components of NG-FORMS-AIO?

No.

### Expression Changed After It Has Been Checked Error

This [doc](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) will help you.

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Don't forget to import `ReactiveFormsModule`, [ref](https://angular.io/guide/reactive-forms).

### How to make Angular applications faster?

Read [https://web.dev/angular](https://web.dev/angular).

###  Browser compatibility

Please make sure your browser is [supported by Angular](https://github.com/angular/angular) and you have imported the [polyfill](https://angular.io/guide/browser-support) file correctly. And some components' usages are not supported by some browsers (i.e `flex` property). Please submit an issue if none of these is your case.

### Why my issue is closed?

Issue is designed for maintainers and users to track the development process of the project, which means only bug reports and feature requests are accepted and usage questions are not. And to give priority to well-explained jobs, issues that are not written in the given format would be closed automatically by the bot right away.

### Where can I get help with Angular?

You can checkout the official docs and Angular forums. A good trick is to search on Google using `[keywords] -angularjs` to prevent `angularjs`'s interference. For example, you can type in `angular ngmodel -angularjs` to learn more about `ngModel` without struggling in out-dated Angular.js things.

We add a **configuration** support to many components. You can define the default behavior of these components through the global configuration, which reduces redundant codes that must be written in the templates (makes your codes concise). Moreover, it supports altering the global configuration at runtime.

## How to Use?

In order to provide default configurations in certain components, please pass an object that implements the interface `NgFormsAioConfig` through the injection token `NG_FORMS_AIO_CONFIG_TOKEN` in the root injector. For example:

```typescript
import { NgFormsAioConfig, NG_FORMS_AIO_CONFIG_TOKEN } from 'ng-forms-aio';

const ngFormsAioConfig: NgFormsAioConfig = {
  theme: 'float-label-default',
  displaySubmitBtn: true,
  opts: {
    debug: false,
    submitIfValid: true,
    invalidFeedBack: {
      input: ' is required ',
      'text-area': ' is required',
      checkbox: ' Select at least one element',
      'checkbox-list': ' Select at least one element',
      select: ' Select at least one element'
    },
    validFeedBackLabel: 'Form validated !',
    invalidFeedBackLabel: 'One or more fields have errors.'
  },
  submitLabel: 'Submit'
};

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule],
  providers: [{ provide: NG_FORMS_AIO_CONFIG_TOKEN, useValue: ngFormsAioConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

These global configurations would be injected and stored in a service named `NgFormsAioService`.

### Provide Dynamic config

One of the easiest approaches is to invoke relevant functions from `NgFormsAioService` in the root component.

```typescript
export class AppComponent implements OnInit {
  constructor(private ngFormsAioService: NgFormsAioService) {}

  ngOnInit(): void {
    this.ngFormsAioService.setConfig({ displaySubmitBtn: true });
  }

// You can update an element of the config at any time.
  setFormTheme(theme: string): void {
    this.ngFormsAioService.setConfig({ theme: theme });
  }
}
```

All component instances is responsive to this configuration change (as long as they are not configured independently).

## Check all Available Globally Configurable Parameters

The interface `NgFormsAioConfig` provide a complete information about all components and parameters that are globally configurable. You can also check each individual component's API for more details.

```ts
export interface NgFormsAioConfig {
  theme?: NgAioTheme;
  displaySubmitBtn?: boolean;
  submitLabel?: string;
  opts?: NgFormsAioOptions;
}

export interface NgFormsAioOptions {
  submitIfValid?: boolean;
  submitLabel?:string;
  displaySubmitBtn?:boolean;
  debug?: boolean;
  invalidFeedBack?: { [key: string]: string };
  validFeedBackLabel?: string;
  invalidFeedBackLabel?: string;
}
```

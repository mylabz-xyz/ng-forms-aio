We add a **global configuration** support to many components. You can define the default behavior of these components through the global configuration, which reduces redundant codes that must be written in the templates (makes your codes concise). Moreover, it supports altering the global configuration at runtime.

## How to Use?

In order to provide default configurations in certain components, please pass an object that implements the interface `NzConfig` through the injection token `NZ_CONFIG` in the root injector. For example:

```typescript
import { NgFormsAioConfig, NG_FORMS_AIO_CONFIG_TOKEN } from 'ng-zorro-antd/core/config';

const ngFormsAioConfig: NgFormsAioConfig = {
  theme: 'float-label-default',
  displaySubmitBtn: true,
  opts: {
    debug: true,
    submitIfValid: true
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
}
```

All component instances is responsive to this configuration change (as long as they are not configured independently).

## Check all Available Globally Configurable Parameters

The interface `NzConfig` provide a complete information about all components and parameters that are globally configurable. You can also check each individual component's API for more details.




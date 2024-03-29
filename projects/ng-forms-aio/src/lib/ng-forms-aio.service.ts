import { Inject, Injectable, InjectionToken, OnDestroy, Optional } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { NgFormsAioTheme } from './const';
import { NgFormsAio, NgFormsAioOptions } from './models/NgFormsAio';

export interface NgFormsAioConfig {
  theme?: NgFormsAioTheme;
  displaySubmitBtn?: boolean;
  submitLabel?: string;
  opts?: NgFormsAioOptions;
}

export const _defaultConfig: NgFormsAioConfig = {}

export const NG_FORMS_AIO_CONFIG_TOKEN = new InjectionToken<BehaviorSubject<NgFormsAioConfig>>('ng_forms_aio_token');

@Injectable()
export class NgFormsAioService implements OnDestroy {
  private config: BehaviorSubject<NgFormsAioConfig> = new BehaviorSubject(_defaultConfig);
  private config$: Observable<NgFormsAioConfig> = this.config.asObservable();

  private subs: Subscription[] = [];

  constructor(@Optional() @Inject(NG_FORMS_AIO_CONFIG_TOKEN) _config?: BehaviorSubject<NgFormsAioConfig>) {
    if (_config) this.subs.push(_config.subscribe(__config => this.setConfig(__config)));
  }

  public getConfig$() {
    return this.config$;
  }

  public setConfig(config: NgFormsAioConfig) {
    const _config = this.config.getValue();
    this.config.next({ ..._config, ...config });
  }

  public getItemByLabel(form: NgFormsAio, label: string) {}

  ngOnDestroy(): void {
    if (this.subs.length > 0) {
      this.subs.forEach(sub => sub.unsubscribe());
    }
  }
}

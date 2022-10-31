import {
  addModuleImportToRootModule,
  getProjectFromWorkspace,
  getProjectMainFile,
  hasNgModuleImport
} from '@angular/cdk/schematics';

import { Rule, Tree } from '@angular-devkit/schematics';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { blue, yellow } from 'chalk';

import { Schema } from '../schema';

const modulesMap = {
  FormsModule: '@angular/forms',
  HttpClientModule: '@angular/common/http'
};

export function addRequiredModules(options: Schema): Rule {
  return async (host: Tree) => {
    const workspace = await getWorkspace(host);
    const project: any = getProjectFromWorkspace(workspace as any, options.project);
    const appModulePath = getAppModulePath(host, getProjectMainFile(project));

    for (const module in modulesMap) {
      if (modulesMap.hasOwnProperty(module)) {
        addModuleImportToApptModule(host, module, modulesMap[module as never], project, appModulePath, options);
      }
    }

    return;
  };
}

function addModuleImportToApptModule(
  host: Tree,
  moduleName: string,
  src: string,
  project: any,
  appModulePath: string,
  options: Schema
): void {
  if (hasNgModuleImport(host, appModulePath, moduleName)) {
    console.log(
      yellow(
        `Could not set up "${blue(moduleName)}" ` +
          `because "${blue(moduleName)}" is already imported. Please manually ` +
          `check "${blue(appModulePath)}" file.`
      )
    );
    return;
  }
  addModuleImportToRootModule(host, moduleName, src, project);
}

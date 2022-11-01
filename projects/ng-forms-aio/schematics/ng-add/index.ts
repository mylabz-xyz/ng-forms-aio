import { chain, Rule, schematic, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { addPackageToPackageJson } from '../utils/package-config';
import { Schema } from './schema';

export default function (options: Schema): Rule {
  return chain([
    (host: Tree) => {
      if (!options.skipPackageJson) {
        addPackageToPackageJson(host, '@mylabz/ng-forms-aio', '13.0.13-beta');
      }
    },
    schematic('ng-add-setup-project', options),
    async _ => {
      if (options.template) {
        return schematic(options.template, { ...options });
      }
    },
    (_: Tree, context: SchematicContext) => {
      if (options.skipInstall) {
        return;
      }
      context.addTask(new NodePackageInstallTask());
    }
  ]);
}

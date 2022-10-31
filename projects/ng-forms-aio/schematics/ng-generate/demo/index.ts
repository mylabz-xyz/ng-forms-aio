import { getProjectFromWorkspace } from '@angular/cdk/schematics';

import { strings } from '@angular-devkit/core';
import { WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import {
  apply,
  applyTemplates,
  chain,
  FileEntry,
  forEach,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  Tree,
  url
} from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/workspace';

import { Schema } from './schema';
import { addModule } from '../../utils/root-modules';

export default function (options: Schema): Rule {
  return async (host: Tree) => {
    const workspace = (await getWorkspace(host)) as unknown as WorkspaceDefinition;
    const project = getProjectFromWorkspace(workspace, options.project);
    const prefix = options.prefix || project.prefix;
    return chain([
      mergeWith(
        apply(url('./files/src'), [
          applyTemplates({
            ...strings,
            ...options,
            prefix
          }),
          move(project.sourceRoot as string),
          forEach((fileEntry: FileEntry) => {
            if (host.exists(fileEntry.path)) {
              host.overwrite(fileEntry.path, fileEntry.content);
            }
            return fileEntry;
          })
        ]),
        MergeStrategy.Overwrite
      ),
      addModule('NgFormsAioModule', '@mylabz/ng-forms-aio', options.project)
    ]);
  };
}
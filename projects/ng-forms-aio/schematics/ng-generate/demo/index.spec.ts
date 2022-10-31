import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

import { Schema as NzOptions } from '../../ng-add/schema';
import { createTestApp } from '../../testing/test-app';

describe('ng-component schematic', () => {
  const defaultOptions: NzOptions = {
    project: 'ng-forms-aio-test',
  };
  let runner: SchematicTestRunner;
  let appTree: Tree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', require.resolve('../../collection.json'));
    appTree = await createTestApp(runner);
  });

  it('should update app.component.html', async () => {
    const options = {...defaultOptions};
    const appComponentHTMLPath = '/projects/ng-forms-aio-test/src/app/app.component.html';
    const tree = await runner.runSchematicAsync('blank', options, appTree).toPromise();
    const appComponentHTML = tree.readContent(appComponentHTMLPath);
    const files = tree.files;

    expect(files).toEqual(jasmine.arrayContaining([ appComponentHTMLPath ]));

    expect(appComponentHTML).toContain('ng-forms-aio"');
  });

});

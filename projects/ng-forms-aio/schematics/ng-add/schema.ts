export enum ProjectTemplate {
  Skip = 'skip',
  Demo = 'demo',
}

export interface Schema {
  /** Name of the project to target. */
  project?: string;
  /** Whether to skip package.json install. */
  skipPackageJson?: boolean;
  skipInstall?: boolean;
  template?: ProjectTemplate;
}

/* tslint:disable */
declare global {
  interface String {
    Capitalize(): string;
  }
}

String.prototype.Capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export {};

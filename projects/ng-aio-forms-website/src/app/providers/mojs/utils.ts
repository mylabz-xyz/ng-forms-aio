// HELPERS
export const scale = function (curve: (p: number) => number, n: number) {
	return (p: number) => {
		return n * curve(p);
	};
};
export const increase = function (curve: (p: number) => number, n: number) {
	return (p: number) => {
		return n + curve(p);
	};
};

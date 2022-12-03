// TS Partial with some required fields
export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;
export type UnknownError = unknown & {
	message: string;
};

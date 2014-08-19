export = Error;

declare class Error {
	public name : string;
	public message : string;
	public stack : string;
	constructor(message?:string);
}

import { File } from "./File"
import { SourceFile, createSourceFile, ScriptTarget } from "typescript"
import * as path from "path"
import { readFileSync } from "fs"
export class FileFactory {
	public static buildFromPath(location: string): File {
		let sf = createSourceFile(location, readFileSync(location).toString(), ScriptTarget.ESNext)
		const name = path.basename(sf.fileName)
		const dir = path.dirname(sf.fileName)
		return new File(name, dir, sf)
	}

	public static buildFromSourceFile(source: SourceFile): File {
		const name = path.basename(source.fileName)
		const dir = path.dirname(source.fileName)
		return new File(name, dir, source)
	}
}
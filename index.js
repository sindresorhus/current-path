import process from 'node:process';
import {fileURLToPath} from 'node:url';
import execa from 'execa';
import {runAppleScriptAsync} from 'run-applescript';

export default async function currentPath() {
	if (process.platform === 'darwin') {
		return runAppleScriptAsync(`
			tell app "Finder"
				try
					POSIX path of (insertion location as alias)
				on error
					POSIX path of (path to desktop folder as alias)
				end try
			end tell
		`);
	}

	if (process.platform === 'win32') {
		const binaryPath = fileURLToPath(new URL('vendor/cdwhere/cdwhere.exe', import.meta.url));
		return execa(binaryPath);
	}

	throw new Error('Linux is not supported');
}

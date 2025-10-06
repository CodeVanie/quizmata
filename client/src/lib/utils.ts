import toast from "react-hot-toast";

export function capitalizeWords(str: string): string {
	if (!str) return "";
	return str
		.split(" ")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

export function isNewData(createdAt: string, days = 3): boolean {
    const createdDate = new Date(createdAt);
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    return createdDate > cutoff;
}

export function getAccessThemes(access: "public" | "private" | "class") {
	const badgeTheme = access === "private" ? "badge-primary" : 
		access === "class" ? "badge-info" : "badge-success";
	const buttonTheme = access === "private" ? "btn-primary" : 
		access === "class" ? "btn-info" : "btn-success";
	const textTheme = access === "private" ? "text-primary active:bg-primary" : 
		access === "class" ? "text-info active:bg-info" : "text-success active:bg-success";
	const fillTheme = access === "private" ? "fill-primary" : 
		access === "class" ? "fill-info" : "fill-success";
	const selectTheme = access === "private" ? "select-primary" : 
		access === "class" ? "select-info" : "select-success";

	return { badgeTheme, buttonTheme, textTheme, fillTheme, selectTheme } as const
}

export async function handleClipboardClick(stringName: string, copyString: string) {
	try {
		await navigator.clipboard.writeText(copyString);
		toast.success('Copied to clipboard!');
	} catch (error) {
		console.error(`Failed to copy ${stringName}.`, error);
		toast.error(`Failed to copy ${stringName}.`);
	}
}
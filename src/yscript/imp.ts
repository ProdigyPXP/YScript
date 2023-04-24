import { addScriptNode } from "..";
import { compile } from "../core";
import Registry from "./Registry";

/**
 * YScript import
 */
function imp (name : string) : string {

    const module = Registry.modules.get(name);

    if (!module) {
        console.error("Could not find YScript module " + name);
        return "";
    }
    const compiled = compile(name);
    addScriptNode(compiled);
    return compiled;
}


globalThis["yscript"]["imp"] = imp;

export default imp;
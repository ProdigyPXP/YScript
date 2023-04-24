import type Module from "./Module";

import test from "../modules/test";

const Registry = {
    modules: new Map<string, Module>()
}



Registry.modules.set(test.name, test);





export default Registry;
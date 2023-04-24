/**
 * window.yscript
 */
interface yscript {

    compile : (text : string, lang : "js" | "ys") => string

    distro : "esnext" | "dev" | "es2016" | "es2017" | "es2018" | "es2019" | "es2020" | "es2021" | "es2022"

    
}
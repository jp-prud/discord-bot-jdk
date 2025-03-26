
import { build } from "esbuild";

build({
  entryPoints: ["src/index.ts"],  // Ponto de entrada do seu projeto
  outfile: "dist/bundle.js",      // Arquivo de saída
  bundle: true,                   // Junta tudo em um só arquivo
  minify: true,                    // Minifica o código
  sourcemap: true,                 // Gera mapa de código-fonte
  platform: "node",                // Plataforma de execução
  target: "esnext"                 // Versão alvo do JS
}).catch(() => {
    console.log('e')
});

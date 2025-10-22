import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function entradasHtml() {
    const paginas = [
    'auth/login/login',
    'auth/register/register',
    'store/home/home',
    'store/productDetail/productDetail',
    'store/cart/cart',
    'client/orders/orders',
    'admin/adminHome/adminHome',
    'admin/categories/categories',
    'admin/products/products',
    'admin/orders/orders'
    ];

    const entradas: { [key: string]: string } = {};;
    paginas.forEach(pagina => {
    const nombrePagina = pagina.split('/').pop();

if (nombrePagina) {
    entradas[nombrePagina] = resolve(__dirname, `src/pages/${pagina}.html`);
}
});

    return entradas;
}

export default defineConfig({
    build: {
    rollupOptions: {
        input: {
        main: resolve(__dirname, 'index.html'),
        ...entradasHtml()
        }
    }
    }
});
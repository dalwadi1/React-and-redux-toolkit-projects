import ex from "express";
import pro from "../Controllers/ProductController.js";

const router = ex.Router()

export const routes = [
    { method: 'get', url: '/product', fun: [pro.getProduct] }
]

for (let i = 0; i < routes.length; i++) {
    const ele = routes[i];

    if (ele.method == 'get') router.get(ele.url, ele.fun.map(e => e))

}

export default router
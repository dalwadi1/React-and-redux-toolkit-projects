import express from "express";
import pro from "../Controllers/ProductController.js";

const router = express.Route()

export const routes = [
    // { method: 'get', url: '/getProduct', fun: [] }
    { method: 'Post', url: '/addProduct', fun: [pro.addProduct] }
]

for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (route.method == "get") router.get(route.url, route.fun.map(e => e))
    else if (route.method == "post") router.post(route.url, route.fun.map(e => e))
    else if (route.method == "put") router.put(route.url, route.fun.map(e => e))
    else if (route.method == "delete") router.delete(route.url, route.fun.map(e => e))

}

export default router;
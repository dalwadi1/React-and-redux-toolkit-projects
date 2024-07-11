import pro from "../Models/ProductModel.js";

const getProduct = async (req, res) => {
    const data = await pro.find({})

    res.json({
        status: true,
        data: data
    })
}

const addProduct = async (req, res) => {

    const { name, price } = req.body

    const addnewpro = pro({
        name: name,
        price: price
    })

    const data = addnewpro.save()

    if (data) {
        res.json({
            status: true,
            message: 'product added'
        })
    }
}

export default {
    addProduct,
    getProduct
}

import { createServer, Model } from "miragejs";

createServer({
    models: {
        snacks: Model
    },

    seeds(server){
        server.create("snack", {id: "1", name: "Breadroll", pricePhP: 10, description: "Bread roll is a popular Filipino street snack made of soft bread filled with savory or sweet ingredients, then rolled and fried until golden. Vendors usually stuff it with hotdogs, cheese, or even sweetened bananas for variety. Crispy on the outside and flavorful inside, it’s a filling merienda that’s both affordable and satisfying.", imageUrl: "https://ik.imagekit.io/maminickz/snacks/breadroll.png", type: "street-food", hostId: "123"})

        server.create("snack", {id: "2", name: "Cheesestick Roll", pricePhP: 2, description: "Cheesestick roll is a crunchy street food favorite made by wrapping cheese in lumpia (spring roll) wrapper and frying it until crisp and golden. The melted cheese inside perfectly contrasts the crunchy shell, making it a simple yet addictive snack. Often served with vinegar dip or ketchup, it’s a go-to treat for both kids and adults.", imageUrl: "https://ik.imagekit.io/maminickz/snacks/cheesestick-roll.png", type: "street-food", hostId: "123"})

        server.create("snack", {id: "3", name: "Siomai", pricePhP: 5, description: "Siomai is a Filipino adaptation of Chinese dumplings, usually made with ground pork, shrimp, or beef wrapped in thin wonton wrappers. Steamed to perfection, it’s served hot with a side of soy sauce, calamansi, and chili garlic for dipping. A street food staple, it’s affordable, filling, and loved for its savory bite-sized goodness.", imageUrl: "https://ik.imagekit.io/maminickz/snacks/siomai.png", type: "snack-meal", hostId: "789"})

        server.create("snack", {id: "4", name: "Rambutan", pricePhP: 0.10, description: "Rambutan is a tropical fruit popular in the Philippines, easily recognized by its hairy red-and-green skin. Inside, it reveals a juicy, translucent flesh that’s sweet with a slight tartness, similar to lychee. Often sold by street vendors in bunches, it’s a refreshing treat enjoyed fresh on hot days.", imageUrl: "https://ik.imagekit.io/maminickz/snacks/rambutan.png", type: "fruit", hostId: "456"})

        server.create("snack", {id: "5", name: "Lumpia", pricePhP: 3, description: "Lumpia roll is a beloved Filipino street food made of thin crepes or wrappers filled with a savory mix of vegetables, meat, or both. It’s rolled tightly, deep-fried to a golden crisp, and enjoyed with a sweet and tangy dipping sauce. Crunchy and flavorful, it’s a go-to merienda that’s both filling and budget-friendly.", imageUrl: "https://ik.imagekit.io/maminickz/snacks/lumpia-roll.png", type: "snack-meal", hostId: "789"})

        server.create("snack", {id: "6", name: "Fries", pricePhP: 10, description: "Fries are a classic street food snack made from thinly sliced potatoes deep-fried until golden and crispy. In the Philippines, they’re often served in paper cups or bags, sprinkled with cheese powder, barbecue seasoning, or salt. Affordable and tasty, they’re a favorite quick bite for students and street-goers alike.", imageUrl: "https://ik.imagekit.io/maminickz/snacks/fries.png", type: "street-food", hostId: "789"})

    },

    routes(){
        this.namespace = 'api'
        this.logging= false

        this.get("/snacks", (schema, request) => {
            return schema.snacks.all()
        })

        this.get("/snacks/:id", (schema, request) => {
            const id = request.params.id
            return schema.snacks.find(id)
        })

        this.get("/host/snacks", (schema, request) => {
            return schema.snacks.where({hostId:123})
        })

        this.get("/host/snacks/:id", (schema, request) => {
            const id = request.params.id
            return schema.snacks.findBy({id, hostId: "123"})
        })
    }
})
    
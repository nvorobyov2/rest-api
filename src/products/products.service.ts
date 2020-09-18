import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
    private products: Product[] = [
        {
            id: "one",
            title: "item one",
            description: "description item one",
            price: 10
        },
        {
            id: "two",
            title: "item two",
            description: "description item two",
            price: 15
        }
    ];

    getProducts(){
        return this.products;
    }
}
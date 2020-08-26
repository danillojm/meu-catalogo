import { Category } from "./category/category.model";

export interface Product {

  id: number;
  name: string;
  description: string;
  price: number;
  image_path: string;
  category: Category;
  img_patchs: ImagePath[];

}


export interface ImagePath {

  id: number;
  image_path: string;
  product: Product;
}

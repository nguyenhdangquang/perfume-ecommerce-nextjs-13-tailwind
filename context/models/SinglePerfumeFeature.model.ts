import {SinglePerfume} from "./SinglePerfume.model";

export type SinglePerfumeFeature = SinglePerfume & {
    best_seller: boolean;
    new_products: boolean;
    top_rating: boolean;
    featured_item: boolean;
}

import * as React from 'react';
import {
    bottle1,
    bottle2,
    bottle3,
    bottle4,
    bottle5,
    bottle6,
    bottle7,
    bottle8,
    bottle9,
} from "../assets";
import {SinglePerfume, SinglePerfumeFeature} from "./models";

type ContextData = {
    state: {
        perfumeData: SinglePerfume[];
        perfumeFeatureData: SinglePerfumeFeature[];
    }
};

const initialState = {
    perfumeData: [
        {
            id: 1,
            name: "keiyo",
            title: "White london perfume",
            image: bottle1,
            rating: "4",
            price: 200,
            discount: "50%",
            altImage: bottle2,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
        },
        {
            id: 2,
            name: "keiyo",
            title: "versace 25ml",
            image: bottle3,
            rating: "5",
            price: 321,
            discount: "20%",
            altImage: bottle4,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
        },
        {
            id: 3,
            name: "keiyo",
            title: "pako rabanne",
            image: bottle5,
            rating: "4",
            price: 345,
            discount: "",
            altImage: bottle6,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
        },
        {
            id: 4,
            name: "keiyo",
            title: "Lavendor perfume",
            image: bottle7,
            rating: "5",
            price: 389,
            discount: "5%",
            altImage: bottle8,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
        },
        {
            id: 5,
            name: "keiyo",
            title: "Giorgio armani",
            image: bottle9,
            rating: "5",
            price: 341,
            discount: "",
            altImage: bottle1,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
        },
        {
            id: 6,
            name: "keiyo",
            title: "Calvin klein",
            image: bottle2,
            rating: "5",
            price: 341,
            discount: "-16%",
            altImage: bottle4,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
        },
        {
            id: 7,
            name: "keiyo",
            title: "Calvin klein",
            image: bottle8,
            rating: "5",
            price: 341,
            discount: "",
            altImage: bottle6,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
        },
    ],
    perfumeFeatureData: [
        {
            id: 1,
            name: "keiyo",
            title: "White london perfume",
            image: bottle1,
            rating: "4",
            price: 200,
            discount: "50%",
            altImage: bottle2,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
            best_seller: true,
            new_products: false,
            top_rating: false,
            featured_item: false,
        },
        {
            id: 2,
            name: "keiyo",
            title: "versace 25ml",
            image: bottle3,
            rating: "5",
            price: 321,
            discount: "20%",
            altImage: bottle4,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
            best_seller: false,
            new_products: true,
            top_rating: false,
            featured_item: true,
        },
        {
            id: 3,
            name: "keiyo",
            title: "pako rabanne",
            image: bottle5,
            rating: "4",
            price: 345,
            discount: "",
            altImage: bottle6,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
            best_seller: false,
            new_products: true,
            top_rating: true,
            featured_item: true,
        },
        {
            id: 4,
            name: "keiyo",
            title: "Lavendor perfume",
            image: bottle7,
            rating: "5",
            price: 389,
            discount: "5%",
            altImage: bottle8,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
            best_seller: true,
            new_products: false,
            top_rating: true,
            featured_item: false,
        },
        {
            id: 5,
            name: "keiyo",
            title: "Giorgio armani",
            image: bottle9,
            rating: "5",
            price: 341,
            discount: "",
            altImage: bottle1,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
            best_seller: false,
            new_products: false,
            top_rating: true,
            featured_item: true,
        },
        {
            id: 6,
            name: "keiyo",
            title: "Calvin klein",
            image: bottle2,
            rating: "5",
            price: 341,
            discount: "-16%",
            altImage: bottle4,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
            best_seller: false,
            new_products: true,
            top_rating: true,
            featured_item: false,
        },
        {
            id: 7,
            name: "keiyo",
            title: "Calvin klein",
            image: bottle8,
            rating: "5",
            price: 341,
            discount: "",
            altImage: bottle6,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is...",
            best_seller: true,
            new_products: false,
            top_rating: false,
            featured_item: false,
        },
    ]
};

const GlobalContext = React.createContext({
    state: initialState,
});

interface Props {
    children: React.ReactNode;
}

export function GlobalContextProvider({ children }: Props): React.ReactElement {
    return (
        <GlobalContext.Provider
            value={{
                state: initialState,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return React.useContext(GlobalContext);
}

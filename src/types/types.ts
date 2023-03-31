interface Admin {
    id: string;
    username: string;
    password: string;
}

interface Author {
    id: string; // uuid should be used for privacy and security reasons
    name: string;
    date_of_birth: string;
    date_of_death?: string;
    description: string;
    books: Book[];
}
interface Book {
    img: string;
    title: string;
    price: number;
    pages: number;
    rating: number;
    category: Category["id"];
    author_id: Author["id"];
    description: string;
    book_count: number;
    release_year: number;
    id: number;
}
interface Category {
    id: string;
    name: string;
    books?: Book[]; // books based on the category -> we don't need it right now but it would be great to have it
}

interface Order {
    order_id: string;
    name: string;
    email: string;
    phone: string;
    book: Book;
    location?: string;
}

export default {};

export class BookModel {
    title: string;
    author: string;
    category: string;
    isbn: string;
    longDescription: string;
    shortDescription: string;
    status: string;
    publishedDate: Date;
    thumbnailUrl: string;

    constructor(data: BookModel) {
        this.title = data && data.title || '';
        this.author = data && data.author || '';
        this.category = data && data.category || '';
        this.isbn = data && data.isbn || '';
        this.longDescription = data && data.longDescription || '';
        this.shortDescription = data && data.shortDescription || '';
        this.status = data && data.status || '';
        this.publishedDate = data && data.publishedDate || new Date();
        this.thumbnailUrl = data && data.thumbnailUrl || '';
    }
}
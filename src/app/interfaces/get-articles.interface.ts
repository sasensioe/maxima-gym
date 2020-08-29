import { Article } from '../models/article.model';

export interface GetArticles{

    articles: Article[];
    total: number;

}
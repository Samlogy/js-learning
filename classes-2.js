/* Static properties and methods */
class Article {
  static articles = [];
  static publisher = "Sam";

  constructor(id, title, date) {
    this.id = id;
    this.title = title;
    this.date = date;
  }

  static compareByDate(articleA, articleB) {
    return articleA.date - articleB.date;
  }
  static createArticle(id, title, date) {
    const newArticle = new this(id, title, date); // "this" refers to the Article class --> create an instance of "Article" class
    console.log("az: ", this.articles);
    this.articles = [...articles, newArticle];
    return newArticle;
  }
  // static removeArticle(id) {
  //   return this.articles.filter((article) => article.id !== id);
  // }
  // static editArticle(id, editedArticle) {
  //   return articles.map((article) => {
  //     if (article.id === id) return { ...editedArticle };
  //     return article;
  //   });
  // }
  static getArticles() {
    return this.articles;
  }
  static getOneArticle(id) {
    return articles.filter((article) => article.id === id);
  }
}

// usage
let articles = [
  new Article(1, "HTML", new Date(2019, 1, 1)),
  new Article(2, "CSS", new Date(2019, 0, 1)),
  new Article(3, "JavaScript", new Date(2019, 11, 1)),
];

// console.log("static method: ", Article.compareByDate(articles[0], articles[1]));
// console.log("articles sorted (date): ", articles.sort(Article.compareByDate));
// console.log("articles publisher: ", Article.publisher);

// add new articles
Article.createArticle(5, "Go", new Date(2019, 11, 11));

console.log("get articles: ", Article.getArticles());

// NB:
// static method are called by the class itself (not individual objects)
// static methods are used to functionnalities that belongs to the class as a whole
// static methods / propertes are inhenrited from parent (ex: Rabbit.compare() calls Animal.compare()) / the same with properties

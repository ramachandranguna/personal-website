import PrismicClient from "./client";
import Prismic from "prismic-javascript";

class Blogs extends PrismicClient {

    static fetchFeaturedBlogs() {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await this.client.query(
                    Prismic.Predicates.at("my.post.featured", true), {
                    orderings: "[document.first_publication_date desc]",
                })

                resolve(post)
            } catch (e) {
                console.log(e)
                return reject(e)
            }
        })
    }

    static fetchOneBlog(slug: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await this.client.getByUID("post", slug)
                resolve(post)
            } catch (e) {
                console.log(e)
                return reject(e)
            }
        })
    }
    static async fetchAllBlogs(page: number = 1, pageSize: number = 10) {
        return new Promise(async (resolve, reject) => {
            try {
                const post = await this.client.query(
                    Prismic.Predicates.at("document.type", "post"), {
                    page,
                    pageSize,
                    orderings: "[document.first_publication_date desc]",
                })

                resolve(post)
            } catch (e) {
                console.log(e)
                return reject(e)
            }
        })
    }

}

export default Blogs
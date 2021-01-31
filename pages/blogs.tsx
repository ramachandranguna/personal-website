import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { default as BlogService } from "./../services/blogs";
const Blogs = (_props: any) => {
  return (
    <>
      <h1>Blogs</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = (
  _context: GetServerSidePropsContext
) => {
  BlogService.fetchFeaturedBlogs();
  return BlogService.fetchAllBlogs()
    .then((posts) => {
      return {
        props: {
          posts,
        },
      };
    })
    .catch((_e) => {
      return {
        props: {},
      };
    });
};

export default Blogs;

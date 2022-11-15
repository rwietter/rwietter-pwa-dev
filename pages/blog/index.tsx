import React from 'react';
import { BlogLayout } from 'layouts/blog';
import SEO from 'components/SEO';
// import { Sidebar } from 'features/site/sidebar';
import { LayoutCSS } from 'layouts/blog/styles';
import Navbar from 'components/blog-navbar';
import { Articles } from 'components/articles';
import { MenuBar } from 'components/menu-bar';
import FadeIn from 'react-fade-in';
import { GetStaticProps } from 'next';
import { ARTICLES_QUERY } from 'queries/articles/articles';
import apolloClient from 'utils/apollo-client';
import { Header } from 'features/site/header';

const Blog: React.FC<any> = ({ articles }) => (
  <div>
    <BlogLayout>
      {/* <Sidebar /> */}
      <SEO
        title="Blog | Maurício Witter | Software Engineer"
        content="blog"
        url="https://rwietter.xyz/blog"
        description="My blog, where I write about my experiences, my projects, and my life. :)"
        image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
      />
      <Header />
      <LayoutCSS>
        <FadeIn>
          <Navbar />
          <Articles articles={articles} />
        </FadeIn>
      </LayoutCSS>
      <MenuBar />
    </BlogLayout>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data, loading, errors } = await apolloClient.query({
    query: ARTICLES_QUERY,
  });

  if (loading) return { props: { articles: null } };
  if (errors) return { props: { articles: null } };

  return {
    props: {
      articles: data.articles.data,
    },
    revalidate: 60,
  };
};

export default Blog;

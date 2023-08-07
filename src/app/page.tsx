import SEO from 'components/SEO';
// import { LastPosts } from 'features/site/last-posts';
// import { LAST_ARTICLES_QUERY } from 'queries/articles/articles';
import { Author } from 'src/domains/home/author';
import { Layout } from 'src/domains/ui/layout';

const Home = () => (
  <>
    <SEO
      title="Mauricio Witter | Software Engineer"
      content="website"
      url="https://rwietterc.xyz"
      description="This blog is about my journey as a Software Engineer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it."
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <Layout>
      <Author />
      {/* <AuthorContent lastFm={lastFm} weather={weather} /> */}
      {/* <LastPosts lastArticles={lastArticles} /> */}
    </Layout>
  </>
);

// const USERNAME = process.env.LASTFM_USERNAME!;
// const API_KEY = process.env.LASTFM_API_KEY!;
// const API_LAST_FM = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;
// const fetcherLastFm = () => fetch(API_LAST_FM).then((res) => res.json());

// const API_WEATHER = `https://dataservice.accuweather.com/currentconditions/v1/${process.env.ACCUWEATHER_CITY_ID}?apikey=${process.env.ACCUWEATHER_API_KEY}`;
// const fetcherWeather = () => fetch(API_WEATHER).then((res) => res.json());

// export const getStaticProps: GetStaticProps = async () => {
//   // const data = await apolloClient.query({
//   //   query: LAST_ARTICLES_QUERY,
//   // });

//   const lastFm = await fetcherLastFm();
//   const weather = await fetcherWeather();

//   return {
//     props: {
//       // lastArticles: data.data.articles,
//       lastFm,
//       weather,
//     },
//     revalidate: 60,
//   };
// };

export default Home;
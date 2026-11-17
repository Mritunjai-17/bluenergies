import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';
import Button from '../ui/Button';
import NewsRow from '../ui/NewsRow';
import { news } from '../../data/news.ts';

export default function News() {
  const recentNews = news.slice(0, 3);

  return (
    <Section background="abyss" id="latest-news">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '40px',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <Eyebrow text="News" theme="dark" />
          <h2 style={{ color: '#ffffff', marginBottom: 0 }}>Latest from the company.</h2>
        </div>
        <div>
          <Button href="/news-and-media/news/" variant="quiet" theme="dark">
            All news &rarr;
          </Button>
        </div>
      </div>

      <div className="news-list" style={{ borderTop: '1px solid rgba(81, 194, 201, 0.28)' }}>
        {recentNews.map((item) => (
          <NewsRow
            key={item.slug}
            date={item.date}
            title={item.title}
            href={`/news-and-media/news/${item.slug}/`}
          />
        ))}
      </div>
    </Section>
  );
}

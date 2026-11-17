import Link from 'next/link';

export default function NewsRow({ date, title, href }) {
  return (
    <Link href={href} className="news-row-item">
      <time className="news-row-date">{date}</time>
      <h3 className="news-row-headline">{title}</h3>
      <span className="news-row-arrow" aria-hidden="true">&rarr;</span>
    </Link>
  );
}

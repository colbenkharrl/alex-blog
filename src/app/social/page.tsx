import { BookIcon, InstagramIcon } from '@/components/Icons';
import { SectionContainer } from '@/components/SectionContainer';
import { SimpleLayout } from '@/components/SimpleLayout';
import Script from 'next/script';
import { FC } from 'react';

const SocialPage: FC = () => {
  return (
    <SimpleLayout
      title={
        <>
          Keep up with me on{' '}
          <span className="text-lime-700 dark:text-amber-400">
            social media
          </span>
          .
        </>
      }
      intro="Between motherhood, yoga, projects, travel, and books, I have a lot going on!"
    >
      <SectionContainer Icon={BookIcon} title="Goodreads">
        <div className="mt-4 flex">
          <div
            id="gr_grid_widget_1712352732"
            className="text-lime-700 dark:text-amber-400"
          >
            <h2>
              <a
                style={{ textDecoration: 'none' }}
                rel="nofollow"
                href="https://www.goodreads.com/review/list/156823806-alex-kharrl?shelf=read&utm_medium=api&utm_source=grid_widget"
                id="bookshelf-title"
                className="text-lime-700 dark:text-amber-400"
              >
                Alex&apos;s Bookshelf
              </a>
            </h2>
            <div className="gr_grid_container">
              <br style={{ clear: 'both' }} />
              <br />
              <a
                className="gr_grid_branding text-lime-700 dark:text-amber-400"
                style={{
                  fontSize: '0.9em',
                  textDecoration: 'none',
                  float: 'right',
                  clear: 'both',
                }}
                rel="nofollow"
                href="https://www.goodreads.com/user/show/156823806-alex-kharrl"
              >
                Alex&apos;s favorite books »
              </a>
              <noscript>
                <br />
                Share{' '}
                <a rel="nofollow" href="/">
                  book reviews
                </a>{' '}
                and ratings with Alex, and even join a{' '}
                <a rel="nofollow" href="/group">
                  book club
                </a>{' '}
                on Goodreads.
              </noscript>
            </div>
          </div>
        </div>
        <Script
          src="https://www.goodreads.com/review/grid_widget/156823806.Alex's%20Bookshelf?cover_size=medium&hide_link=&hide_title=&num_books=200&order=d&shelf=read&sort=date_read&widget_id=1712352732"
          type="text/javascript"
          async
        ></Script>
      </SectionContainer>
    </SimpleLayout>
  );
};

export default SocialPage;

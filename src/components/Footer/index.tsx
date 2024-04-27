import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

const linksListOne = [
  {
    title: 'About',
    slug: '/about',
  },
  {
    title: 'Terms Of Service',
    slug: '/terms-of-service',
  },
  {
    title: 'FAQs',
    slug: '/faqs',
  },
  {
    title: 'What Are TaskBucks',
    slug: '/what-are-taskbucks',
  },
  {
    title: 'Blog',
    slug: '/blog',
  },
];
const linksListTwo = [
  {
    title: 'Categories',
    slug: '/categories',
  },
  {
    title: 'How to Find a Tasker',
    slug: '/find-a-tasker',
  },
];
const linksListThree = [
  {
    title: 'Become a Tasker',
    slug: '/earn/become-a-tasker',
  },
  {
    title: 'How to List a Service',
    slug: '/list-a-service',
  },
];

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h3 className={styles.headings}>Learn More</h3>
        <div className={styles.linkContainer}>
          {linksListOne.map((learn, i) => (
            <Link
              href={learn.slug}
              className={styles.links}
              key={`learn - ${i}`}
            >
              {learn.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3>Find a Tasker</h3>
        <div className={styles.linkContainer}>
          {linksListTwo.map((user, i) => (
            <Link href={user.slug} className={styles.links} key={`user - ${i}`}>
              {user.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3>Earn on TaskBucket</h3>
        <div className={styles.linkContainer}>
          {linksListThree.map((task, i) => (
            <Link href={task.slug} className={styles.links} key={`task - ${i}`}>
              {task.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
